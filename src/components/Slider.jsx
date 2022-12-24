import Carousel from "react-bootstrap/Carousel";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import student1 from '../assets/animay.jpeg'
import image3 from '../assets/image3.jpg'
function Slider() {

  return (
    <Carousel variant="light" className="m-2 carousel" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          height="500"
          width="800"
          style={{objectFit:"cover"}}
        />
        {/* <Carousel.Caption>
          <h1>Read. Learn. Grow.</h1>
          <p>get access to well structured curriculam to upskill yourself</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
          height="500"
          width="900"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h1>Annual Sports Meet</h1>
          {/* <p>Coding with best industry practices.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={student1}
          alt="First slide"
          height="500"
          width="900"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption>
          {/* <h1>Young Innovater Awards</h1> */}
          <h3>Young Innovater Awards </h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
          height="500"
          width="900"
          style={{objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h4>Price distribution for Sports</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
