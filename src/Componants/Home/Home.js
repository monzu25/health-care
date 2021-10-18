import React from 'react';
import DetailsView from '../DetailsView/DetailsView';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {


    return (
        <div>
            <Header></Header>
            <Services></Services>
            {/* <ExtraCss></ExtraCss> */}
            <DetailsView></DetailsView>

        </div>
    );
};

export default Home;