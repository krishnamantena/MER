import React from "react";
import "./style.css";

import  { useState } from 'react';


function Home() {
return (
    <div>
      {/* Header */}
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
                <li><a href="#hero" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
      {/* End Header */}

      {/* Hero Section  */}
      <section id="hero">
        <div className="hero container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>Welcome to <span></span></h1>
            <h1>Feedback Service<span></span></h1>
            <a href="#services" type="button" className="cta">Start Now</a>
          </div>
        </div>
      </section>
      {/* End Hero Section  */}

      {/* Service Section */}
      <section id="services">
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title">Ser<span>vi</span>ces</h1>
            <p>Our services include comprehensive feedback on video, audio, and text content. We offer detailed analysis and constructive critique to enhance the quality of your work. Let us help you refine your projects with expert insights across all formats.</p>
            
          </div>
          <div className="service-bottom">
            <div className="service-item">
              <h2>Facial Emotional Dection</h2>
              <p>"Facial emotion detection has greatly enhanced our ability to gather and analyze feedback, offering real-time insights into users' emotional responses. This technology allows for more personalized and effective adjustments to improve user experience."</p>
                <a href="face" type="button" className="cta1">Start</a>
            </div>
            <div className="service-item">
              <h2>Voice based Emotional Dection</h2>
              <p>"Voice-based emotion detection captures subtle vocal cues to analyze and interpret emotional states, providing deeper insights into user sentiment. This technology enables more responsive and empathetic interactions, enhancing overall communication effectiveness."</p>
                <a href="audio" type="button" className="cta1">Start</a>
            </div>
            <div className="service-item">
              <h2>Text based Emotional Dection</h2>
              <p>"Text-based emotion detection deciphers the emotional tone within written communication, offering valuable insights into user sentiment. This approach enables more nuanced understanding and tailored responses, improving the quality of user engagement."</p>
                <a href="text" type="button" className="cta1">Start</a>
            </div>
            <div className="service-item">
              <h2>Multimodel Emotional Dection</h2>
              <p>"Multi-modal emotion recognition holds tremendous potential for advancing human-computer interaction by enabling machines to understand  analysis of visual, auditory, and textual cues. They promise ushering in an era where technology can genuinely empathize with human emotions."</p>
                <a href="http://127.0.0.1:8000/mer" type="button" className="cta1">Start</a>
            </div>
            
          </div>
        </div>
      </section>
      {/* End Service Section */}

      

      {/* About Section */}
      <section id="about">
        <div className="about container-about">
          <div className="col-left">
            <div className="about-img">
   
<div class="container-aboutus">
	
  <div class="per-1">
  <div class="avatar">
		<a href="https://codepen.io/blackcoderjadoo/">
			<img class="image"src="https://media.licdn.com/dms/image/v2/D5603AQFfYUOBt5MMDQ/profile-displayphoto-shrink_100_100/B56ZQr4QS.HQAY-/0/1735902955498?e=1754524800&v=beta&t=zMje9H1LW4qXzDjmo3kWghd_FRsSS5zzev67R3ah7Hs" alt="coder" />
		</a>
	</div>
	<div class="content">
		<h1>JASWANTH KIRAN </h1>
		<p>
			<span><a href="https://github.com/Ajaswanthkiran" target="_blank"><i class="fa fa-github">GitHub</i></a></span>
			<span><a href="https://www.linkedin.com/in/jaswanth-kiran-athota-261016222/" target="_blank"><i class="fa fa-bitbucket">LinkedIn</i></a></span>
			</p>
		
	</div>
  </div>
  <div class="per-2">
  <div class="avatar">
		<a href="https://codepen.io/blackcoderjadoo/">
			<img class="image"src="https://media.licdn.com/dms/image/v2/D5603AQED7Klzws0Dbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718252102870?e=1754524800&v=beta&t=Qk_hN2rIPtGQIzB6Ld2Qz9FU9_m0VNKwGczQ_ud6k6E" alt="coder" />
		</a>
	</div> 
	<div class="content">
		<h1>Kushal Kumar</h1>
		<p>
			<span><a href="https://github.com/Mario-Duarte/" target="_blank"><i class="fa fa-github">GitHub</i></a></span>
			<span><a href="https://media.licdn.com/dms/image/v2/D5603AQED7Klzws0Dbw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718252102870?e=1754524800&v=beta&t=Qk_hN2rIPtGQIzB6Ld2Qz9FU9_m0VNKwGczQ_ud6k6E" target="_blank"><i class="fa fa-bitbucket">LinkedIn</i></a></span>
			</p>
		
	</div>
  </div>
  <div class="per-3">
  <div class="avatar">
		<a href="https://codepen.io/blackcoderjadoo/">
			<img class="image"src="https://lh3.googleusercontent.com/a/ACg8ocILQO3Lu_GXBJ2-bewg-NKyqbnS6DIaD6RsGUKt6OwfBgKtz9o=s360-c-no" alt="coder" />
		</a>
	</div>
	<div class="content">
		<h1>Krishna Teja</h1>
		<p>
			<span><a href="https://github.com/krishnamantena" target="_blank"><i class="fa fa-github">GitHub</i></a></span>
			<span><a href="https://www.linkedin.com/in/krishna-teja-mantena-98b61b283/" target="_blank"><i class="fa fa-bitbucket">LinkedIn</i></a></span>
			</p>
		
	</div>
  </div>
  
</div>
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>US</span></h1>
            <h2>Front End Developer</h2>
            <p>We are currently pursuing a Bachelor of Computer Science and Engineering at Koneru Lakshmaiah Education 
              Foundation.            </p>
            <a href="https://drive.google.com/file/d/1wM-qRqszljuDjRbod7vj4lPC_QtuEWvF/view?usp=drive_link" className="cta">Download Resume</a>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Contact Section */}
      <section id="contact">
      <div className="contact container">
          <div>
            <h1 className="section-title">Contact <span>info</span></h1>
          </div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+91 9908824386</h2>
                <h2>+91 9346245037</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>a.jaswanthkiran@gmail.com</h2>
                <h2>krishnamantena06@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>KL University</h2>
                <h3>Vaddeswaram, Vijayawada.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      {/* Footer */}
      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1>AJK&CO</h1>
          </div>
          <h2>The best coder.</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/krishna_08_2003/"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
            </div>
          </div>
          <p>Copyright © 2024 . All rights reserved</p>
        </div>
      </section>
      {/* End Footer */}
    </div>
  );
}

 

export default Home;