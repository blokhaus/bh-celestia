import * as React from "react"
import Podcast from "../modules/podcast";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { podcasts } from "../../datas/resources/podcasts"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 140
    },
    laptop: {
        breakpoint: { max: 1340, min: 600 },
        items: 2,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 920, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
        <div className="carousel-button-group">
            <button className={rest.carouselState.currentSlide === 0 ? 'button button button-left disable' : 'button button button-left'} onClick={() => previous()}><i className={'icon-carousel-left'} aria-label={'prev'} /></button>
            <button className={rest.carouselState.currentSlide + rest.carouselState.slidesToShow === rest.carouselState.totalItems ? 'button button button-right disable' : 'button button button-right'} onClick={() => next()}><i className={'icon-carousel-right'} aria-label={'next'} /></button>
        </div>
    );
};


export default class PodcastSection extends React.Component {
    render() {
        return (
            <section id={this.props.id} className={'podcast-section pt-0'}>
                <h2 className={'with-decor mb-5 pb-4'}>Podcasts</h2>
                <div className={'section-inner row'}>
                    <Carousel responsive={responsive} swipable={true} draggable={true} infinite={false} containerClass={'multi-carousel'} customTransition={'1000ms all cubic-bezier(0.65, 0, 0.35, 1)'} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                        {podcasts && podcasts.map(function (podcast) {
                            return <Podcast key={podcast.id} data={podcast} />
                        })}
                    </Carousel>
                </div>
            </section>
        )
    }
}
