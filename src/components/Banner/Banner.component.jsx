import React from 'react';
import './Banner.styles.scss';

const Banner = ({bannerImage}) => (

    <div className="creative_container">
        <img src={bannerImage} alt="banner_image"/>
    </div>
)

export default Banner;



