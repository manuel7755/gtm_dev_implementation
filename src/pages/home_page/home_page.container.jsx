import React, { Component } from 'react';
import './home_page.styles.scss';
import Banner from '../../components/Banner/Banner.component';
import HeroBanner from '../../assets/images/tamanna-rumee-mIqyYpSNq3o-unsplash_main_banner.jpg'

import PromoShoes from '../../assets/images/promotion_athletic_shoes.jpg'
import PromoBackpacks from '../../assets/images/promotion_backpacks.jpg'

import PromoCouches from '../../assets/images/promotion_couches.jpg'

import PromoDinnerSets from '../../assets/images/promotion_dinner_sets.jpg'




class Homepage extends Component {

    constructor() {
        super()

        this.state = {

            pageType: "homepage"

        }
    }


    render() {

        const { pageType } = this.state;


        return (
            <>
                <h1>{pageType}</h1>

                <div className='page_section homepage_container'>

                    <div className='banner_container'>
                        <Banner bannerImage={HeroBanner} />
                    </div>
                    <div className="promotions_container">

                        <div className="promotion_slot">

                            <Banner bannerImage={PromoShoes} />

                        </div>
                        <div className="promotion_slot">

                            <Banner bannerImage={PromoBackpacks} />
                        </div>
                        <div className="promotion_slot">

                            <Banner bannerImage={PromoCouches} />
                        </div>
                        <div className="promotion_slot">

                            <Banner bannerImage={PromoDinnerSets} />
                        </div>

                    </div>

                </div>
            </>
        )
    }
}



export default Homepage;