import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {



    return (
        <div>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/b7HgfkJ/photo-1576765974102-b756026ecee3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ours Doctors Is So CareFull On Patients</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ch52v35/photo-1576765608535-5f04d1e3f289.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Service is Our Top Priority</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/G0DYDmT/photo-1576765607924-3f7b8410a787.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get Tousch To Our Experts</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Ythpws4/photo-1579684453423-f84349ef60b0.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Operation Theater</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;