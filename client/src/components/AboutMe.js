import React from 'react';
import '../CSS/AboutMe.css';
import notACoat from '../Assests/images/notacoat.png';
import Christmas from '../Assests/images/Christmas.png';
import EscapeRoom from '../Assests/images/EscapeRoom.png';



function AboutMe() {
    return (
        <div>

            <div className='image-txt-container'>
                <div className='bodytext'>Hello! I am James! I was born and raised in Arlington, Texas and moved to the suburbs of Chicago for a job promotion in 2014. I figured why not move from extreme
                    heat to extreme cold? How cold could it get? Well, I was forced to quickly learn what a real coat is compared to what I grew up calling a coat. Eight years later, I think I
                    have it all figured out and look forward to the first snow fall each year.
                </div>

                <div className='image-caption-container'>
                    <img src={notACoat} className="images" />
                    <div className='caption'>
                        Not a coat!
                    </div>
                </div>

            </div>
            <div className='image-txt-container'>

                <div className='image-caption-container'>
                    <img src={EscapeRoom} className="images" />
                    <div className='caption'>
                        Escaped!
                    </div>
                </div>
                <div className='reverseOrder'>
                    <div className='bodytext'>
                        My free time is largely abosrbed by my drive to try new experiences or learn new things.
                        Recently I tried Whirlyball for the first time and had an absoluete blast up until the point where one of the cars caught fire.
                        However if I am not trying something new, relaxing comes in the form of doing jig-saw puzzles, playing some sort of strategy game or doing escape rooms.
                    </div>
                </div>

            </div>

            <div className='image-txt-container'>
                <div className='bodytext'>I live with my girlfriend of six years now with our Cockapoo dog named Simba. My long term goals would be to settle down with a career in the software deveolpment field,
            buy a home and start a family. This website you are reading now is a step forward in the journey to achieve those goals.
                </div>

                <div className='image-caption-container'>
                    <img src={Christmas} className="images" />
                    <div className='caption'>
                        The mop is the dog
                    </div>
                </div>

            </div>


        </div>


    )
}
export default AboutMe;