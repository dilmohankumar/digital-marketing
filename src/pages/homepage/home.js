// import React from "react";
import Homeimg from "../../assets/home.png";
import "./home.css";
import React, { useState, useEffect } from "react";
import downloadImage from "../../assets/downloadpi.jpg";
import Bg from "../../assets/bg.jpg";
import aa from "../../assets/1.png";
// In your main JavaScript file
import "@fortawesome/fontawesome-free/css/all.min.css";

import a from "../../assets/download-3.jpg";
import b from "../../assets/download-4.jpg";
// import c from "../../assets/download-5.jpg";
import d from "../../assets/download-6.jpg";
import e from "../../assets/download-7.jpg";
import f from "../../assets/download-8.jpg";
import g from "../../assets/download-9.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("../../assets/download-1.jpg"),
    require("../../assets/download-2.jpg"),
    require("../../assets/download-3.jpg"),
    require("../../assets/download-4.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div className="sn">
        <h1 class="text-shadow"> -- Welcome to -- </h1>
        <div class="tags">
          <p class="text-shadow">
            <small>Social Networker</small>
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="bs">
          <p className="bsp">Boost your Brand width Social Networking</p>
        </div>
        <p className="p">
          Enhance your search rankings and drive traffic with our expert social
          networking strategies tailored for effective SEO and digital
          marketing.
        </p>
        {/* ------------- */}
        <div className="container">
          <a className="button" href="#" style={{ "--color": "#1e9bff" }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About More
          </a>
        </div>
        {/* ---------------------------------------- */}
        <span className="im">
          <img
            src={require("../../assets/1.png")}
            alt="Image"
            style={{ width: "38rem", height: "25rem" }}
          />
        </span>

        {/* --------------- */}
        <div className="ac">
          <h1 className="hc">
            <li>20 +</li>
            <li>100 %</li>
            <li>350 +</li>
            <li>30 +</li>
          </h1>
          <ul className="uc">
            <li>SEO Project</li>
            <li>Accuracy</li>
            <li>Backlinks</li>
            <li>Keywords</li>
          </ul>
        </div>

        <div className="iit">
          <div className="it">
            <img
              src={images[currentImageIndex]}
              alt="Sliding images"
              style={{ width: "450px", height: "400px" }}
            />

            <div className="tyb">
              <p>
                Transform Your Business with Expert Digital Marketing Solutions
              </p>
              <div className="myo">
                <p>Maximize Your Online Success with Customized Plans</p>
                <div className="asn">
                  <p>
                    At Social Networker, we specialize in crafting customized
                    digital marketing strategies that drive results. From SEO
                    and Content Marketing to social media management and PPC
                    advertising, our team of experts is dedicated to enhancing
                    your online presence and maximizing yo ur ROI. Let us
                    partner with you to navigate the digital landscape and
                    achieve your business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- */}

        <div className="di">
          <img src={downloadImage} alt="Download PI" />
          <div className="acc">
            <h1 className="hc">
              <li>10 +</li>
              <li>350 +</li>
              <li>20 +</li>
              <li>1,000 K +</li>
            </h1>
            <ul className="uc">
              <li>Years Experience</li>
              <li>Happy Clients</li>
              <li>Professional Team</li>
              <li>Case Studies</li>
            </ul>
          </div>{" "}
        </div>
        {/* ---- */}
        <div className="lii">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div class="gallery">
          <span style={{ "--i": "1" }}>
            <img src={a} alt="" />
          </span>
          <span style={{ "--i": "2" }}>
            <img src={b} alt="" />
          </span>
          <span style={{ "--i": "3" }}>
            <img src={b} alt="" />
          </span>
          <span style={{ "--i": "4" }}>
            <img src={d} alt="" />
          </span>
          <span style={{ "--i": "5" }}>
            <img src={e} alt="" />
          </span>
          <span style={{ "--i": "6" }}>
            <img src={f} alt="" />
          </span>
          <span style={{ "--i": "7" }}>
            <img src={g} alt="" />
          </span>
          <span style={{ "--i": "8" }}>
            <img src={g} alt="" />
          </span>
        </div>

        {/* ---------------------------------- */}
        <div>
          <img
            src={Bg}
            alt="Image description"
            style={{ width: "100%", height: "200vh", opacity: 0.7 }}
          />

          <div className="tc">
            <p>
              Transforming clicks into customers—where your vision meets our
              expertise to drive results that matter.
            </p>
          </div>
          <div className="ey">
            <p>Elevate Your Brand in the Digital Age with our Services</p>
          </div>
          {/* -------------- */}
          <div className="grid-container">
            <div className="grid-item">
              <img src={a} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>SEO</h1>
              <p>
                SEO, or search engine optimization, improves website visibility
                on search engines to attract organic traffic.
              </p>
            </div>
            <div className="grid-item">
              <img src={b} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Video Editing</h1>
              <p>
                Video editing involves manipulating video footage to create a
                polished final product for various purposes.
              </p>
            </div>
            <div className="grid-item">
              <img src={d} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Web Development</h1>
              <p>
                Web development involves creating and maintaining websites,
                ensuring functionality, design, and user experience are optimal.
              </p>
            </div>
            <div className="grid-item">
              <img src={e} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Corporate Training</h1>
              <p>
                Corporate training enhances employee skills and knowledge,
                improving performance and productivity within an organization.
              </p>
            </div>
            <div className="grid-item">
              <img src={a} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Digital Marketing</h1>
              <p>
                Digital marketing uses online channels to promote
                products/services, engaging customers and driving sales
                effectively.
              </p>
            </div>
            <div className="grid-item">
              <img src={e} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Link Buidling</h1>
              <p>
                Link building is acquiring hyperlinks from other websites to
                improve search engine ranking and visibility.
              </p>
            </div>
            <div className="grid-item">
              <img src={a} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Social Media Marketing</h1>
              <p>
                SMM, or social media marketing, promotes products/services
                through social platforms to engage audiences and increase
                visibility.
              </p>
            </div>
            <div className="grid-item">
              <img src={b} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>Software Development</h1>
              <p>
                Software development is the process of designing, coding,
                testing, and maintaining software applications for users.
              </p>
            </div>
            <div className="grid-item">
              <img src={d} alt="" />
              <span className="ff">
                <img src={aa} alt="" />
              </span>
              <h1>E-Commerce Solutions</h1>
              <p>
                E-commerce solutions provide online platforms for buying,
                selling, and managing transactions effectively and securely.
              </p>
            </div>
          </div>

          {/* --------------------- */}
          <div className="ccs">
            <div className="cca">
              <p>
                Connection, collaboration, authenticity, empowerment,
                engagement.
              </p>
            </div>
            <div className="sns">
              <p>Social Networker Strongly Believes in these Core Principles</p>
            </div>
          </div>
          {/* ---- */}
          <>
            <div className="fourimg">
              <img src={a} alt="" />
              <img src={b} alt="" style={{ marginTop: "4rem" }} />
              <img src={e} alt="" />
              <img src={d} alt="" style={{ marginTop: "4rem" }} />
            </div>
            <div className="counttext">
              <div className="textc">
                <ol className="ffd">01.</ol>
                <ol>02.</ol>
                <ol className="ffd">03.</ol>
                <ol>04.</ol>
              </div>
              <div className="headknow">
                <h1 className="ffe">Knowledge</h1>
                <h1>Quality</h1>
                <h1 className="ffe">Trust</h1>
                <h1>Affordable</h1>
              </div>
              <div className="paraseo">
                <p className="pmarg1">
                  SEO & Development thrive on constant research and updates. Our
                  Mission, Keep our client ahead ofthe curve.
                </p>
                <p className="pmarg2">
                  Google appreciates our work, Which is why we rank 10k+
                  keywords and have generated and have generated many leads. As
                  a result, 70% of our clients come from referrals.
                </p>
                <p className="pmarg3">
                  We are very transparent with our customers and very strict
                  about maintaining client privacy.
                </p>
                <p className="pmarg4">
                  We are very transparent with our customers and very strict
                  about maintaining client privacy.
                </p>
              </div>
            </div>
          </>
          {/* ----------------------- */}
        </div>
        {/* ------------------ */}
        <div className="kjkj">
          <div className="bott">
            <p className="pbc">Benefits of Choosing</p>
            <p className="pod">Our Digital Marketing Services</p>
          </div>
          <div className="bimg">
            {" "}
            <img src={downloadImage} alt="Download" />
          </div>

          {/* --------------------- */}
          <div className="bw">
            <h1>Boost Website Ranking</h1>
            <ul className="ii">
              <li>Guaranteed Top Google Ranking</li>
              <li>Higher Brand Credibility and Authority</li>
              <li>Increased Website Traffic</li>
            </ul>
            <h1 className="ss">Digital Marketing</h1>
            <ul className="ii">
              <li>Increased Engagement</li>
              <li>Greater Brand Authority</li>
              <li>Media Exposure</li>
            </ul>
            <div className="ql">
              <h1>Quick leads & paid Leads</h1>
              <ul>
                <li>Targeted Reach</li>
                <li>Measurable ROI</li>
                <li>Brand Awareness</li>
              </ul>
              <h1 className="ss">Website & Software Development</h1>
              <ul>
                <li>Landing pages</li>
                <li>Static & Dynamic Websites</li>
                <li>E-commerce Solutions</li>
              </ul>
            </div>
          </div>
        </div>
        {/* --------- */}
        <div className="tyv">
          <p>Transform Your Vision: Discover Our Expert Services!</p>
        </div>
        {/* --------------------------- */}
        <div className="popo">
          <span className="adad">
            <img src={a} alt="Download" />
          </span>
          <div className="ggf">
            {" "}
            <p className="tes">Testimonials</p>
            <p className="rfo">Reviews from our customers</p>
            <div className="boxx">
              <div class="container">
                <div class="testimonial-box">
                  <div class="testimonial">
                    <i class="fas fa-quote-right"></i>
                    <span class="testimonial-text">
                      Social Networker truly believes in client success, and
                      they have all the expertise and tools to make that happen,
                      from SEO to digital marketing to website design. Best of
                      all, they have a responsive and dedicated team that is
                      always open to new ideas! Truly grateful for all the
                      efforts they have put into making my business a success!
                    </span>
                    <div class="testimonial-user">
                      <img
                        src="https://randomuser.me/api/portraits/women/17.jpg"
                        alt="user-img"
                        class="user-img"
                      />
                      <div class="user-info">
                        <span class="user-name">johan</span>
                        <div class="user-job-details">
                          <span class="user-job">Customer</span>
                          <div class="line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------- */}
          <div className="hdc">
            <img src={e} />
            <div className="byb">
              <p className="h">
                How Does Social Networker Help Your Business Grow Digitally?
              </p>
              <p className="b">
                Boost Your Business: Leverage Social Networking for Digital
                Growth
              </p>
              <p className="d">
                Discover how effective social networking strategies can enhance
                brand visibility, engage your audience, and drive conversions,
                positioning your business for sustainable digital success.
              </p>
            </div>
          </div>
          {/* ----------- */} {/* ----------- */}
          <div className="unlocka">
            <div className="udg">
              <p className="uud">unlocking Digital Growth</p>
              <p className="ttt">
                The Role of Social Networking in Business Expansion
              </p>
              <p className="ssn">
                Social networking enhances business growth by increasing brand
                visibility, fostering customer engagement, generating leads, and
                facilitating collaborations, ultimately driving traffic and
                sales through targeted digital interactions and community
                building.
              </p>
            </div>
            <div className="hhd">
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown1"
                  name="dropdown1"
                />
                <label className="for-dropdown" htmlFor="dropdown1">
                  Increases Digital Reach
                  <i className="uil uil-arrow-down"></i>
                </label>
                <div className="section-dropdown">
                  <p>
                    Digital marketing provides every business an opportunity to
                    succeed online. Companies can easily promote their
                    products/services online and get their fair share of the
                    limelight. However, achieving this requires the right
                    digital strategy. That's where we come in. We drive
                    substantial traffic to your website and convert that traffic
                    into valuable sales for your business.
                    <i className="uil uil-arrow-right"></i>
                  </p>
                </div>
              </div>
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown3"
                  name="dropdown3"
                />
                <label className="for-dropdown" htmlFor="dropdown3">
                  Reaching Your Target Audience
                  <i className="uil uil-arrow-down"></i>
                </label>
                <div className="section-dropdown">
                  <p>
                    Digital marketing services help your business succeed by
                    enabling you to focus on customers who are more likely to
                    invest in your services or purchase your products. While TV
                    ads cast a wide net, paid online ads allow you to target
                    your efforts toward audiences who have expressed interest in
                    your niche in some way.
                    <i className="uil uil-arrow-right"></i>
                  </p>
                </div>
              </div>
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown4"
                  name="dropdown4"
                />
                <label className="for-dropdown" htmlFor="dropdown4">
                  Cost-Effective Branding
                  <i className="uil uil-arrow-down"></i>
                </label>
                <div className="section-dropdown">
                  <p>
                    Small and mid-sized businesses have limited marketing
                    budgets, but this constraint does not prevent them from
                    reaching their target audiences. Digital marketing plays a
                    crucial role in helping you establish strong brand awareness
                    and credibility in a cost-effective manner, across a wide
                    market.
                    <i className="uil uil-arrow-right"></i>
                  </p>
                </div>
              </div>
              <div className="sec-center">
                <input
                  className="dropdown"
                  type="checkbox"
                  id="dropdown5"
                  name="dropdown5"
                />
                <label className="for-dropdown" htmlFor="dropdown5">
                  Trackable and Measurable results
                  <i className="uil uil-arrow-down"></i>
                </label>
                <div className="section-dropdown">
                  <p>
                    With traditional marketing methods, you lack the ability to
                    determine the ROI from specific channels. However, when you
                    hire a digital marketing agency, they furnish you with
                    reports that enable you to easily track and measure the
                    effectiveness of your digital marketing endeavours.
                    <i className="uil uil-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Home;
