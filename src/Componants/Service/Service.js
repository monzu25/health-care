import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {

    const { id, title, description, img } = props.service;

    return (

        <Col>
            <Card className="shadow  mb-3 bg-body rounded bg-light">
                <Card.Img className="img-hovering" variant="top" src={img} />
                <Card.Body >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text className="card-description">
                        {description.slice(0, 100)}
                    </Card.Text>
                    <div className="btn-service">
                        <Link to={`/detail_service/${id}`}>
                            <button type="button" class="btn btn-outline-secondary">Read More  </button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Service;