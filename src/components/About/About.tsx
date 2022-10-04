import React from 'react';
import { levelScale } from 'src/constants';
import './About.scss';

interface IAboutProps {
    category: string
    rarity?: string
    level?: number
    className?: string
}

export const About: React.FC<IAboutProps> = ({ category, rarity, level, className }) => {
    return (
        <div className={`about ${className}`}>
            <div className='about__wrapper'>
                <div 
                    className='about__container'
                    style={{
                        display: category === 'evolving_stones' ? 'none' : null
                    }}
                >
                    <div className='about__text about__text_bright'>Rarity:</div>
                    <div className='about__text'>
                        {rarity}
                    </div>
                </div>
                <div className='about__container'>
                    <div className='about__text about__text_bright'>Type:</div>
                    <div className='about__text'>
                        {category === 'characters' && 'character'}
                        {category === 'chests' && 'box'}
                        {category === 'evolving_stones' && 'evolving stone'}
                    </div>
                </div>
                <div 
                    className='about__container'
                    style={{
                        display: (category === 'evolving_stones') || (category === 'chests') ? 'none' : null
                    }}
                >
                    <div className='about__text about__text_bright'>Level:</div>
                    <div className='about__text' style={{textTransform: 'none'}}>
                        {level} ({levelScale[level]})
                    </div>
                </div>
            </div>

            <div className='about__container'>
                <div className='about__text about__text_bright'>Owner:</div>
                <div className='about__text'>0x9dece80dcd0fca5fcd37f1e92c732943a3963b86</div>
            </div>
        </div>
    )
}
