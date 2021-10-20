// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useDataHooks from '../../DataHoocks/DataHooks';
import Service from '../Service/Service';

const Services = () => {


    // const [services] = useDataHooks();

    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])


    return (

        <div className="container my-5">
            <h2 className="my-3">Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;