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
                    <a href="/About">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="/About">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="/Work">Work</a>
                </div>
                <div style={linkStyle}>
                    <a href="/Contact">Contact</a>
                </div>
                <div style={linkStyle}>
                    <a href="../images/resume.pdf" target="_blank">Resume</a>
                </div>


            </section>





        </nav>
    )

}

export default Nav;