import React, { useState } from 'react';
import WorkCard from "../WorkCard";
// portfolio

function WorkInfo() {
    const appStyle = { margin: '100px auto'}
    const cardStyle = { display: 'flex', flexBasis: 'calc(80% - 3em)', margin: '0 auto', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', width: '100%'};
    const fontWhite = { color: 'rgb(255, 255, 255)', textShadow: '3px 3px black', margin: '0 0 50px 0', display: 'flex', justifyContent: 'center' };
    const [projects] = useState([


        {
            title: "Train-Station-Scheduler",
            tech: "JQuery/Firebase/Bootstrap",
            code: "https://github.com/slsmi894/Train-Station-Scheduler",
            link: "https://slsmi894.github.io/Train-Station-Scheduler/",
           
        },
        {
            title: "Daily-Schedule",
            tech: "JQuery/Momentjs/Bootstrap",
            code: "https://github.com/slsmi894/Daily-Schedule",
            link: "https://slsmi894.github.io/Daily-Schedule/",
           
        },
        {
            title: "Cosmic-Cocktails",
            tech: "MVC/Passport/Expressjs",
            code: "https://github.com/slsmi894/Project2_CosmicCocktails",
            link: "https://cryptic-tundra-79116.herokuapp.com/",
          
        },
  
        
    ]);

    return (
        <div style={appStyle}>
            <h2 style={fontWhite}>Portfolio</h2>
            <div style={cardStyle} >
                {projects.map((project, idx) => (
                    <WorkCard
                        project={project}
                        key={'project' + idx}

                    />
                ))}
            </div>

        </div>
    );

};

export default WorkInfo;