import React from 'react';
import './home_page.styles.scss';

import HeroBanner from '../../assets/images/tamanna-rumee-mIqyYpSNq3o-unsplash_main_banner.jpg'
import PromoShoes from '../../assets/images/promotion_athletic_shoes.jpg'
import PromoBackpacks from '../../assets/images/promotion_backpacks.jpg'
import PromoVaccums from '../../assets/images/promotion_vaccums.jpg'
import PromoPans from '../../assets/images/promotion_pans.jpg'
import PromoWatches from '../../assets/images/promotion_watches.jpg'
import PromoCouches from '../../assets/images/promotion_couches.jpg'
import PromoDinnerSets from '../../assets/images/promotion_dinner_sets.jpg'

import Button from '../../components/Button/Button.component';
import Banner from '../../components/Banner/Banner.component';


const Homepage = () => {

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

                        <Banner bannerImage={PromoBackpacks} />
                        <div className="promotion_title">
                            <h1>Backpacks</h1>
                        </div>
                        <Button link='/catalogue'>Shop Now</Button>
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
                    <div className="promotion_slot">
                        <Banner bannerImage={PromoWatches} />
                        <div className="promotion_title">
                            <h1>Watches</h1>
                        </div>
                        <Button link='/catalogue'>Shop Now</Button>
                    </div>
                </div>

                <div className="media_video_container">
                    <h1>Checkout Our New Camera Addition!</h1>
                    <iframe src="https://www.youtube.com/embed/3bCpnTD3Tt8?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <section class="section_about_product">
                    <div class="product_description_container">
                        <div class="product_description_image_container">
                            <img src={PromoVaccums} />
                        </div>
                        <div class="product_description">
                            <h2 class="heading-secondary">2 x 1 Robot Vaccums!</h2>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab doloribus quidem quo omnis fugit similique amet adipisci repellat quasi itaque nulla fuga, esse hic qui maxime unde quibusdam doloremque?
                            </p>
                        </div>
                    </div>
                    <div class="product_description_container">
                        <div class="product_description">
                            <h2 class="heading-secondary">50% Off Pans This Week!</h2>
                            <p class="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos? Ipsam soluta, natus neque cumque nesciunt quia esse delectus tempore officiis assumenda atque culpa dolorum facilis omnis labore nam quae.
                            </p>
                        </div>
                        <div class="product_description_image_container">
                            <img src={PromoPans} alt="mini mendiants" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Homepage;