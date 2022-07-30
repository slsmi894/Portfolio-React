import React from 'react';
import profile from '../../assets/images/profile.jpg';


function About() {
    

    return (
        <div>
            <h2>About Me</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0 20px'}}>
                <img alt='sandy' src={profile} style={{ padding: '20px', maxHeight: '275px', maxWidth: '175'}}/>
                <div>
                   <p>
                    I am Sandy Smith. Passionate about coding, earned certification for Full Stack from Vanderbilt University Coding Bootcamp. Additionally, I have a Bachelor's of Science in Business Management from Western Govenors University. Since graduation from coding bootcamp, I am a Teaching Assistant and Senior Tutor for 2u supporting the Full Stack program with various universities and individuals of all levels.
                </p>
                <p>
                    I have always enjoyed analyzing processes, understanding them fully, and making improvements that will impact both people positively and improve bottom line, making things better. In my current roles, I enjoy helping people to improve their lives through understanding coding concepts and fundamentals, see them grow and gain confidence. 
                </p>
                <p>
                    I love coding, but when I am not coding, I enjoy my family, my three adorable dogs, cooking, crafts and gardening, and traveling - learning about history or discovering new places and information.
                </p> 
                </div>
                
            </div>


        </div>
    )

}

export default About;