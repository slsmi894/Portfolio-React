import React from 'react';

function Nav() {
    const linkStyle = { padding: '2px' }
    const h1Style = { fontSize: '5em', marginLeft: '20px' }
    return (


        <nav style={{backgroundColor: 'grey' }} >

            <section style={{
                display: 'flex',
                fontFamily: 'helvetica',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                lineHeight: '.5',
                hover: 'color: black',
            }}>
                <h1 style={h1Style}>Sandy Smith </h1>
                
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
                <div style={{
                marginRight: '40px', linkStyle
            }}>
                    <a href="../images/resume.pdf" target="_blank">Resume</a>
                </div>
                

            </section>

            <p style={{ fontSize: '2em'}} >React Portfolio</p>



        </nav>
    )

}

export default Nav;