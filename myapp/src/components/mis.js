function Nav() {
    const linkStyle = { padding: '1px', color: '#fffdf7', hover: 'background: pink', transitionDuration: '0.5s'}
    const h1Style = { fontSize: '5em', marginLeft: '20px' }
    const fontWhite = { color: 'rgb(255,253,247)', fontFamily: 'Times Roman' }
 

    return (


        <nav style={fontWhite}>

            <section style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                lineHeight: '.5',

            }}>
                <h1 style={h1Style}>Sandy Smith </h1>

                <div style={linkStyle}>
                    <a href="#home">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="#about">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="#work">Work</a>
                </div>
                <div style={linkStyle}>
                    <a href="#contact">Contact</a>
                </div>
                <div style={{
                    marginRight: '40px', linkStyle
                }}>
                    <a href="../images/resume.pdf" target="_blank">Resume</a>
                </div>


            </section>

            <p style={{ fontSize: '2em', fontFamily: 'Times Roman', }} >React Portfolio</p>



        </nav>
    )

}

export default Nav;