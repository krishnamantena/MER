import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import * as reactIcons from "https://cdn.skypack.dev/react-icons@4.8.0";
import {SiInstagram, SiBehance} from "https://cdn.skypack.dev/react-icons@4.8.0/si";
import { FaLinkedinIn, FaHeart, FaGrinTongueWink } from "https://cdn.skypack.dev/react-icons@4.8.0/fa";


const Landing = () => {
  return (
    <div>
      <section className="one">
        <nav>
          <ul className="d-flex navbar-link">
            <li>Get Started</li>
            <li className="logo">
              <span className="circle-border">AJK</span>{" "}
              <span>AJK&CO</span>
            </li>
            <li>About</li>
          </ul>
        </nav>
        <video className="video-bg" autoPlay muted>
          // <source type="video/mp4" src={"https://res.cloudinary.com/nischal1/video/upload/v1688173328/NeonBg_ccmqik.mp4"} />
        </video>

        <div className="linear-background"></div>
        <div className="XL-text">EmoCraft</div>
        <div className="L-text">EmoCraft</div>

        <div className="container-center">
          <div className="M-text"></div>

          <div className="social-icons">
             <span>
              <SiInstagram className="fab" />
            </span>
              <span>
              <FaLinkedinIn className="fab" />
            </span>
            <span>
              <SiBehance className="fab" />
            </span>
          </div>
        </div>

        <div className="text-M">
          <span></span>= World
        </div>
        <span to="/auth/register" className="GetStarted">
          Get Started
        </span>

        <div className="featured"></div>
      </section>

      <section className="two">
        <img
          src={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/287eab66-0f73-4b97-8e74-849c5f06d542/denm9yd-106dade8-9cf8-4bf8-858d-916385ea39d7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI4N2VhYjY2LTBmNzMtNGI5Ny04ZTc0LTg0OWM1ZjA2ZDU0MlwvZGVubTl5ZC0xMDZkYWRlOC05Y2Y4LTRiZjgtODU4ZC05MTYzODVlYTM5ZDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rQzwFnBfPXDUmn3GRCWr-1JJjgd6DNfYXIYnlJ5TSx4"
          }
          alt=""
        />
        <img
          src={
            "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          }
          alt=""
        />
        <img
          src={
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c169ce80625385.5ce676e88618e.png"
          }
          alt=""
        />
        <img
          src={
            "https://cdnb.artstation.com/p/assets/images/images/029/987/025/large/romain-butrot-neon-street.jpg?1599237812"
          }
          alt=""
        />
        <img
          src={
            "https://www.blendernation.com/wp-content/uploads/2020/06/image12.gif"
          }
          alt=""
        />
        <img
          src={
            "https://cdna.artstation.com/p/assets/images/images/020/580/896/large/andreea-cristiana-papuc-final-render.jpg?1568326193"
          }
          alt=""
        />
        <img
          src={
            "https://cdnb.artstation.com/p/assets/images/images/038/314/817/large/hind-vitry-hind-vitry-final.jpg?1622743033"
          }
          alt=""
        />
        <img
          src={
            "https://img.freepik.com/premium-photo/illustration-cyber-tokyo-neon-street-rainy-nigh-3d-rendering-raster-illustration_717906-764.jpg?w=2000"
          }
          alt=""
        />
      </section>

      <section className="three">
        <span>login</span>
        <svg viewBox="0 0 150 150">
          <path
            id="curve"
            fill="transparent"
            d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0"
          />
          <text>
            <textPath xlinkHref="#curve" fill="#9b51e0">
              | VIEW | LIKE | POST |
            </textPath>
          </text>
        </svg>
      </section>

      <section className="four">
        <div className="Patners"></div>
        <div className="line-left"></div>

        <div className="brands  ">
          <img
            src={
              "https://res.cloudinary.com/nischal1/image/upload/v1688173589/samsung_ndxpft.webp"
            }
            alt=""
          />

          <img
            src={
              "https://res.cloudinary.com/nischal1/image/upload/v1688173589/cocacola_mjtzeh.webp"
            }
            alt=""
          />
          <img
            src={
              "https://res.cloudinary.com/nischal1/image/upload/v1688173589/4f_fkdogj.webp"
            }
            alt=""
          />
          <img src="https://res.cloudinary.com/nischal1/image/upload/v1688173589/ikea_rjeou7.webp"  alt=""/>
        </div>
        <div className="line-right"></div>

        <span className="million">*Along with 1 million users</span>

        <button className="getstarted-btn">get started</button>
      </section>

      <section className="five">
        <div className="five-content">
          <span className="circle-b">N</span>
          <div className="Why"></div>
        </div>
        <p className="five-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio
          provident laboriosam eligendi nisi accusamus deleniti vero dolorum
          quidem neque consequuntur omnis, ratione ea nobis magni eius
          reiciendis dignissimos voluptate molestias distinctio obcaecati.
          Minima architecto nesciunt dolorem provident numquam adipisci quas,
          obcaecati vero possimus veniam soluta sed est, commodi, voluptatibus
          rerum eum. Quia!
        </p>
        <p className="five-p">
          We often help start ups to get their first site live! Don’t be shy
          send a question!
        </p>

        <p className="five-p">Check out our services.</p>

        <img
          src={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04c4f5c9-ae48-4851-be46-4ed111ce5bc0/dfepyec-02f73cac-f577-43bb-9901-fd6b341395c0.jpg/v1/fill/w_900,h_1350,q_75,strp/neonpunk_cat_with_glasses_by_lozfunk_dfepyec-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzA0YzRmNWM5LWFlNDgtNDg1MS1iZTQ2LTRlZDExMWNlNWJjMFwvZGZlcHllYy0wMmY3M2NhYy1mNTc3LTQzYmItOTkwMS1mZDZiMzQxMzk1YzAuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PwdEk6Xvt3xvPlq46FEw78F8o73NdEYeYLgAvuZ1cVg"
          }
          className="bigimg-left"
          alt=""
        />
        <img
          src={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04c4f5c9-ae48-4851-be46-4ed111ce5bc0/dfesd9l-914bd419-cca8-4853-8a72-1da74f3c1d8d.jpg/v1/fill/w_900,h_1350,q_75,strp/neonpunk_raccoon_by_lozfunk_dfesd9l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzA0YzRmNWM5LWFlNDgtNDg1MS1iZTQ2LTRlZDExMWNlNWJjMFwvZGZlc2Q5bC05MTRiZDQxOS1jY2E4LTQ4NTMtOGE3Mi0xZGE3NGYzYzFkOGQuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HCxVQpnvApGyZvSE8_27zPMjb_esXimb9ZdIN7Dp6lY"
          }
          className="bigimg-right"
          alt=""
        />
      </section>

      <section className="six">
        <img src={"barcode"} alt="" className="barcode" />
        <div className="about"></div>

        <div className="grid-3">
          <div className="bnumber">8</div>
          <div className="bnumber">100+</div>
          <div className="bnumber">1,000+</div>
          <div className="mtext">
            Years of <br /> Excellence
          </div>
          <div className="mtext">
            Daily <br /> Newusers
          </div>
          <div className="mtext">
            Weekly <br /> Posts
          </div>
        </div>

        <p className="six-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          veniam sint omnis labore soluta, optio laborum beatae libero modi
          facere magni nobis ullam dolore quasi cumque voluptatibus sit
          blanditiis atque in? Illo earum, deleniti voluptatum architecto, neque
          odio vel laudantium facere consectetur aperiam qui?
        </p>
        <p className="six-p">
          Numerous of contacts allow to push the business above the boundaries.
          We work everyday and we want to make sure that our clients are
          satisfied as possible with the final result.
        </p>
      </section>

      <section className="seven">
        <video className="footer-bg" autoPlay muted loop>
          <source
            type="video/mp4"
            src={
              "https://res.cloudinary.com/nischal1/video/upload/v1688173444/hand_neon_rfhyde.mp4"
            }
          />
        </video>

        <div className="linear-gradient"></div>

        <div className="quote">
          <div>"The best thing to hold</div>
          <div>onto in life is each other"</div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-content">
          <ul className="d-flex navbar-link">
            <li className="logo">
              <span className="circle-border">N</span> <span>WINKLE MEDIA</span>
            </li>
            <li>Services</li>
            <li>Get started</li>
          </ul>
          <div className="footer-icon">
            <span></span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span></span>
          </div>
          <ul className="footer-link">
            <li className="footer-title">located</li>
            <li className="footer-text">NewYork, USA</li>
            <li className="footer-title">Phone no:</li>
            <li className="footer-text">+977 9812345678</li>
            <li className="footer-title">Mail:</li>
            <li className="footer-text">nischalchan@gmail.com</li>
          </ul>
        </div>

        <div className="line-right"></div>

        <div className="copyright">
          Copyrights © 2022 Winkle’Media. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Landing;