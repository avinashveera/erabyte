import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel style={{width:"100vw",height:"300px"}}>
      <Carousel.Item>
        <img style={{width:"100vw",height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQ-szYnC4ZUe1j6DwWX-i6FiHnwuPFC9zM7ImKmtnI5YRGaduWtjiYQkt_1RKpveNUB8&usqp=CAU" alt="img1" srcset="" />
        <Carousel.Caption style={{marginBottom:"70px",background:"rgba(0,0,0,0.4)"}}>
          <h3 style={{background:"rgba(0,0,0,0.4)"}}>web development</h3>
          <p style={{background:"rgba(0,0,0,0.4)"}}></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100vw",height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwnxS6Qz3Om3IO4ZcQzjam3F5lkrRNR4ECcUcp0pB0A&s" alt="" srcset="" />
        <Carousel.Caption style={{marginBottom:"70px",background:"rgba(0,0,0,0.4)"}}>
          <h3 style={{background:"rgba(0,0,0,0.4)"}}>web design</h3>
          <p style={{background:"rgba(0,0,0,0.4)"}}>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100vw",height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJeMDA75rIu7qliGMSE61udG0D8piqzgJbFEa2UFFZRg&s" alt="" srcset="" />
        <Carousel.Caption style={{marginBottom:"70px",background:"rgba(0,0,0,0.4)"}}>
          <h3 style={{background:"rgba(0,0,0,0.4)"}}>android development</h3>
          <p style={{background:"rgba(0,0,0,0.4)"}}>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;