import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Grid, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Facebook, Instagram, YouTube, Email, LocationOn, Phone,WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import imag1 from '../../img/erabyte.png'

const Footer = () => {
  return (
    <AppBar position="static" style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Toolbar>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px',color:"black" }}>About Us</Typography>
            <img src={imag1 } alt="Logo" style={{ width: '250px', height: '100px', marginBottom: '10px' }} />
            <Typography variant="body2" paragraph>
              Welcome to EraByte, the premier software development agency in Ara, Bihar. Our mission is encapsulated in our slogan, "Leading the Era of Technology," and we are dedicated to transforming your ideas into innovative software solutions. As a leading digital marketing and software development firm, we pride ourselves on delivering high-quality services tailored to meet your specific needs.
            </Typography>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <IconButton  href="https://www.facebook.com/veerasoftware">
                <Facebook />
              </IconButton>
              <IconButton  href="https://instagram.com/erabyte_software">
                <Instagram />
              </IconButton>
              <IconButton  href="https://www.youtube.com/channel/UCLHinnObnVxcb0l1P7d0oww">
                <YouTube />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px',color:"black" }}>Useful Links</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Projects</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Link to="#" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px',color:"black" }}>Address</Typography>
            <List>
              <ListItem>
                <Email style={{ marginRight: '10px' }} />
                <ListItemText>
                  <a href="mailto:avinashveera77@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>mail us</a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <LocationOn style={{ marginRight: '10px' }} />
                <ListItemText>Jagdishpur (Bhojpur), Bihar</ListItemText>
              </ListItem>
              <ListItem>
                <Phone style={{ marginRight: '10px' }} />
                <ListItemText>
                  <a href="tel:+917991106305" style={{ textDecoration: 'none', color: 'inherit' }}>+91 7991106305</a>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '10px' ,color:"black"}}>Contact Us</Typography>
            <Typography variant="body2" paragraph>
              Are you looking for a reliable software developer in Ara? Look no further than EraByte. Let's discuss how we can turn your vision into reality. Contact us today to get started!
            </Typography>
            <form>
              <TextField label="Enter an Email" variant="outlined" fullWidth style={{ marginBottom: '10px' }} />
              <TextField
                label="Write Message..."
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                style={{ marginBottom: '10px' }}
              />
              <Button variant="contained" color="primary">Send</Button>
            </form>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="body2" align="center">
        All rights reserved by <a href="https://github.com/avinashveera" style={{ textDecoration: 'none', color: 'inherit' }}>Erabytesoftware</a> &copy; 2023.
      </Typography>
      <IconButton color="inherit" href="https://wa.me/917991106305" style={{ position: 'fixed', bottom: '50px', right: '30px', backgroundColor: '#03B990', color: '#fff',padding:"10px" }}>
        <WhatsApp />
      </IconButton>
    </AppBar>
  );
};

export default Footer;
