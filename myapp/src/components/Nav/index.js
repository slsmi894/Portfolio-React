import React from 'react';

function Nav() {
    const linkStyle = { padding: '5px'};

    return (


        <nav className="nav-header-menu">
            <section style={{ 
                display: 'flex',
                fontFamily: 'helvetica',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}>
                <div style={linkStyle}>
                    <a href="#">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Work</a>
                </div>
                <div style={linkStyle}>
                    <a href="#">Contact</a>
                </div>
                <div style={linkStyle}>
                    <a href="../images/resume.pdf" target="_blank">Resume</a>
                </div>


            </section>





        </nav>
    )

}

export default Nav;