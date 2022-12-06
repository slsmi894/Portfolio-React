import React from 'react';
import abstract from '../../../assets/images/abstract.jpg';


function About() {
    const fontBlack = { color: 'rgb(0,0,0)', margin: '0 50px' };
    const fontWhite = { color: 'rgb(255, 255, 255)', textShadow: '3px 3px black', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' };
    const appStyle = { margin: '40px auto' }

    return (
        <div style={appStyle}>
            <h2 style={fontWhite}>About Me</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '88%', margin: '20px auto 45px auto' }}>
                <img src={abstract} alt='sandy' style={{ padding: '10px', maxHeight: '375px', maxWidth: '175', borderRadius: '25px', opacity: "0.5" }} />
                <div style={fontBlack}>
                    <p>
                        I am passionate about learning!
                    </p>
                    <p>

                        I have a Bachelor's of Science in Business Management from Western Govenors University. Then I discovered an online class in coding was available with Vanderbilt University, and I found a passion in coding! I received my certification in Full Stack Web Development.
                    </p>
                    <p>
                        Since graduation I have been active in coding, helping others to learn how to think about solutions in coding, how to test what they are coding, and help them to succeed in becoming a full stack web developer. It is both challenging and rewarding, working with various universities and individuals of all levels as a Teaching Assistant, and also as a Tutor for EdEX.

                    </p>
                    <p>
                        I have always enjoyed analyzing processes, understanding them fully, and making improvements that will impact both people positively. In my current roles, I enjoy helping people to improve their lives through understanding coding concepts and fundamentals, see them grow and gain confidence. Often having requests for assistance in debugging a code or helping a student better understand what they have written so they can continue to grow in their knowledge and growth.
                    </p>
                    <p>
                        I love coding, learning about code, and helping others as a team player! But when I am not coding, I enjoy life! Spending time with my family, and my beloved dogs, as well as learning to improve my skills as chef, gardener, photographer, and painter.
                    </p>
                </div>

            </div>

        </div>
    )

}

export default About;