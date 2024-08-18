import React from 'react'

const Menucard = ({img,h5,p,price}) => {
  return (
    <div>
        
    <div className="service-card">
    <img src={img} alt="E-commerce" className="service-image" />
    <h5>{h5}</h5>
    <p>{p}</p>
    <p><strong>Price: ₹ {price}</strong></p>
    </div>
    
    </div>
  )
}

export default Menucard