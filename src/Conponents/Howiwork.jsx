import React from 'react';
import { Stepper, Step, StepLabel, Typography, Box, StepContent } from '@mui/material';
import { Info, Assignment, DesignServices, Build, Launch, Support } from '@mui/icons-material';

const steps = [
  {
    label: 'Initial Consultation',
    description: `We start with an initial consultation to understand your requirements, business goals, and project scope. This helps us tailor our approach to meet your specific needs.`,
    icon: <Info sx={{ color: '#007bff' }} />
  },
  {
    label: 'Project Planning',
    description: `Our team creates a detailed project plan, including timelines, milestones, and deliverables. We outline the project's scope and set clear objectives to ensure everyone is on the same page.`,
    icon: <Assignment sx={{ color: '#007bff' }} />
  },
  {
    label: 'Design & Development',
    description: `We move forward with designing and developing your project, incorporating your feedback throughout the process. Our goal is to create a functional and aesthetically pleasing solution that aligns with your vision.`,
    icon: <DesignServices sx={{ color: '#007bff' }} />
  },
  {
    label: 'Testing & Quality Assurance',
    description: `Once development is complete, we conduct thorough testing to ensure everything functions correctly. We identify and fix any issues to deliver a high-quality product that meets our standards.`,
    icon: <Build sx={{ color: '#007bff' }} />
  },
  {
    label: 'Launch & Delivery',
    description: `We launch the final product and deliver it to you. Our team provides support during the transition phase to address any issues and ensure a smooth handover.`,
    icon: <Launch sx={{ color: '#007bff' }} />
  },
  {
    label: 'Post-Launch Support',
    description: `After the launch, we offer ongoing support and maintenance to ensure your project continues to perform well and adapt to any changing needs.`,
    icon: <Support sx={{ color: '#007bff' }} />
  },
];

const HowIWorkStepper = () => {
  return (
    <Box sx={{
      width: '100%',
      padding: 2,
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333', marginBottom: 2 }}>
        How We Work
      </Typography>
      <Stepper activeStep={steps.length - 1} orientation="vertical" sx={{ width: '100%', maxWidth: 800 }}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              icon={step.icon}
              sx={{
                color: '#007bff', // Primary color
                fontWeight: 'bold',
                '&.Mui-active': {
                  color: '#0056b3',
                },
                '&.Mui-completed': {
                  color: '#28a745',
                }
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography variant="body1" sx={{ color: '#555' }}>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HowIWorkStepper;
