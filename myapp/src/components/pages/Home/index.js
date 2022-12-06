import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './home.css';
import homeImage from '../../../assets/images/bw_profile.jpeg';

export default function Home() {
    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div>
            <div className="bg-image">
                <h1>Hi, I am Sandy Smith</h1>
                <img src={homeImage} alt="sandy" width="350" />
                
            </div>
            <div className="title">

                <h2>
                    I'm a  {'  '} <span className="typeSet" >
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[' Developer', ' Tutor', ' Photographer', ' Gardener', ' Artist',]}
                            loop={8}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h2>
            </div>




        </div>
    );
}
