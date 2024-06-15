import React, { useState } from 'react';
import './RecipeSlider.css';
import RightArrow from '../../assets/images/right-arrow.png';
import LeftArrow from '../../assets/images/backward.png';
import { BiMoviePlay } from "react-icons/bi";
import recipeData from './RecipeData';

const RecipeSlider = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === recipeData.length - 1 ? 0 : slide + 1)
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? recipeData.length - 1 : slide - 1)
    }

    return (
        <div className='recipe-slider' id='recipe-slider'>
            <img src={LeftArrow} className='left-arrow-img' alt='left-arrow' onClick={prevSlide} />
            <img src={RightArrow} className='right-arrow-img' alt='right-arrow' onClick={nextSlide} />
            <div className='slider'>
            {recipeData.map((recipe, index) => (
                    <div key={index} className={`slide ${slide === index ? 'active' : ''}`}>
                        <div className='slide-left-section'>
                            <img src={recipe.image} alt='recipe-img' />
                            <a href={recipe.videoUrl} target='_blank' rel='noreferrer'>
                                <BiMoviePlay className='play-icon' />
                            </a>
                        </div>
                        <div className='slide-right-section'>
                            <h3>Ingredients</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeSlider;
