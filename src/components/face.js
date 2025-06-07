import React from 'react';

const LiveStreaming = () => {
    return (
        <div>
        <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>AJK&CO</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li><a href="/" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
        <div style={styles.container}>
            <h3 style={styles.heading}>Live Streaming</h3>
            <img 
                src="http://127.0.0.1:8000/fer/video_feed" 
                alt="Live Stream" 
                style={styles.image} 
            />
        </div>
    </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: "100px",
        paddingButtom: "20px",
        paddingRight: "20px",
        paddingLeft: "20px",
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
    },
    image: {
        width: '50%',
    }
};

export default LiveStreaming;
