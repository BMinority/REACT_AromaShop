import React, { useState, useEffect } from 'react';
import '../css/bannerStyle.css';

import loja01 from '../assets/loja01.jpg';
import loja02 from '../assets/loja02.jpg';
import loja03 from '../assets/loja03.jpg';
import loja04 from '../assets/loja04.jpg';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [loja01, loja02, loja03, loja04];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='banner'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${currentIndex === index ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <h1>Bem-Vindo a AromaShop</h1>
                    <p>Aromas que encantam.</p>
                </div>
            ))}
            <div className='indicators'>
                {images.map((_, index) => (
                    <i
                        key={index}
                        className={`fas fa-circle ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    ></i>
                ))}
            </div>
        </div>
    );
};

export default Banner;
