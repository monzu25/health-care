import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDataHooks from '../../DataHoocks/DataHooks';

const DetailsView = () => {


    const [services] = useDataHooks();
    const { serviceId } = useParams();



    // const { title, description, img } = services.filter(service => service.id === serviceId).map(filteredService => console.log(filteredService));

    // const id = serviceId;
    // console.log(title)

    return (
        <div className="container mt-5">
            <h1> This is number  {serviceId}</h1>
            <Row xs={1} md={3} className="g-4 ">
                {
                    services.filter((service) => service.id === 106).map(filterService =>

                        <Col>
                            <Card style={{ minHeight: "500px" }} >
                                <Card.Img className="justify-content-center" style={{ height: "350px", width: "350px" }} variant="top" src={filterService.img} />
                                <Card.Body>
                                    <Card.Title  >{filterService.title}</Card.Title>
                                    <Card.Text>
                                        {filterService.description}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }
            </Row>

        </div>

    );
};

export default DetailsView;