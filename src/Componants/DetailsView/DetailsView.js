import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';



const DetailsView = () => {


    // const [services] = useDataHooks();
    const { serviceId } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            // .then(data => setService(data.find(singleService => singleService.id === parseInt(serviceId))));
            .then(data => setService(data.find(singleService => singleService.id === parseInt(serviceId))));
    }, [])

    console.log(service);


    return (

        // <div><h1>This is detai;s{serviceId} </h1></div>


        <div className="container my-5">

            <div className="row">
                <div className="col-md-6">
                    <h3>{service?.title}</h3>
                    <p className=" text-start">{service?.description}</p>
                    <h5>Fee:$ {service?.price}</h5>
                    <button className="btn btn-info display-inline-block mt-3">Book Now</button>
                </div>
                <div className="col-md-6">
                    <img className="rounded" src={service?.img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default DetailsView;