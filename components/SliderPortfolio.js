import { useRef } from "react";
import Slider from "react-slick";
import Image from 'next/image'

import styles from './SliderPortfolio.module.scss'


const _PORTFOLIOS = [
    {
        id: 1,
        image: '/portfolio-images/PortfolioVirtualClassroom.webp',
        corporate: 'Natieva, 2018',
        title: 'Virtual Classroom',
        description: `Build a virtual class application that is used for Natieva and Smartpi platforms. Used to help online learning. I am responsible start from interface design, application architecture until the front-end development.`
    },
    {
        id: 2,
        image: '/portfolio-images/PortfolioBirru.webp',
        corporate: 'Birru, 2019',
        title: 'Birru Landing Page',
        description: `Create a landing page for Birru application. In this project, I am responsible from designing the UI until front-end development proccess.`
    },
    {
        id: 3,
        image: '/portfolio-images/PortfolioSmartpi.webp',
        corporate: 'Smartpi, 2020',
        title: 'SmartPi Mobile App',
        description: `Mobile app built with React Native. This application aims to purchase learning packages, create schedules, and send chats to teachers. In this project, I am responsible for building applications in React Native.`
    },
    {
        id: 4,
        image: '/portfolio-images/PortfolioMbahWongso.webp',
        corporate: 'Personal Project, 2021',
        title: 'Mbah Wongso App',
        description: `In my spare time, I love to create an app. One of them is this application. Mbah Wongso is an entertainment application that can calculate how many percent you match with the person you like and read you about the zodiac forecast. This app was build with React Native.`
    }
];

const SliderPortfolio = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
    };

    const slider = useRef(null)

    const nextSlide = () => {
        slider.current.slickNext()
    }

    const prevSlide = () => {
        slider.current.slickPrev()
    }


    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings} ref={slider}>
                {
                    _PORTFOLIOS.map((row, index) => {
                        return (
                            <div className="slide-item" key={`slider-${row.id}`}>
                                <div className="flex justify-between">
                                    <div className="portfolio-image">
                                        <Image src={row.image} width={373} height={243} />
                                    </div>
                                    <div className="portfolio-content flex flex-col justify-center">
                                        <span className="portfolio-corporate-date">{row.corporate}</span>
                                        <h3>{row.title}</h3>
                                        <p>{row.description}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

            <div className={styles.sliderNav}>
                <button className="button-prev">
                    <Image src={`/icon-prev.svg`} onClick={prevSlide} width={20} height={31} />
                </button>
                <button className="button-next" onClick={nextSlide}>
                    <Image src={`/icon-next.svg`} width={20} height={31} />
                </button>
            </div>
        </div>
    )
}

export default SliderPortfolio;
