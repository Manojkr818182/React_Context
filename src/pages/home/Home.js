import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import Loader1 from '../../components/loader/Loader1';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';

const Home = () => {
  const [loading1, setLoding1] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoding1(false);
    }, 500)
  }, []);
  
  return (
    <div className='main'>
      {loading1 &&
        <div>
          <Loader1 />
        </div>
      }
      {!loading1 &&
        <div className='d-flex justify-content-center'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>4 slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      }
    </div>
  )
}

export default Home