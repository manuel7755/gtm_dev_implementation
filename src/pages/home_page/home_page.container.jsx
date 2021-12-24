import React, { Component } from 'react';
import './home_page.styles.scss';
import Banner from '../../components/Banner/Banner.component';
import HeroBanner from '../../assets/images/tamanna-rumee-mIqyYpSNq3o-unsplash_main_banner.jpg'
import PromoShoes from '../../assets/images/promotion_athletic_shoes.jpg'
import PromoBackpacks from '../../assets/images/promotion_backpacks.jpg'
import PromoCouches from '../../assets/images/promotion_couches.jpg'
import PromoDinnerSets from '../../assets/images/promotion_dinner_sets.jpg'

import Button from '../../components/Button/Button.component';
//import { Button } from '@material-ui/core';





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
                <div className='page_section homepage_container'>
                    <div className='banner_container'>
                        <Banner bannerImage={HeroBanner} />
                    </div>
                    <div className="promotions_container">
                        <div className="promotion_slot">

                            <Banner bannerImage={PromoShoes} />
                            <div className="promotion_title">
                                <h1>Shoes</h1>
                            </div>
                            <Button link='/catalogue'>Shop Now</Button>
                        </div>
                        <div className="promotion_slot">

                            <Banner  bannerImage={PromoBackpacks} />
                            <div className="promotion_title">
                                <h1>Backpacks</h1>
                            </div>
                            <Button  link='/catalogue'>Shop Now</Button>
                        </div>
                        <div className="promotion_slot">

                            <Banner bannerImage={PromoCouches} />
                            <div className="promotion_title">
                                <h1>Couches</h1>
                            </div>
                            <Button link='/catalogue'>Shop Now</Button>
                        </div>
                        <div className="promotion_slot">
                            <Banner bannerImage={PromoDinnerSets} />
                            <div className="promotion_title">
                                <h1>Dinner Sets</h1>
                            </div>
                            <Button link='/catalogue'>Shop Now</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Homepage;