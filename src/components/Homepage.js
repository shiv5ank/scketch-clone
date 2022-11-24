import "./homepage.css";
import Banner1 from "../images/scketch-banner1.png";
import Banner2 from "../images/scketch-banner2.png";
import Banner3 from "../images/scketch-banner3.png";
import Design from "../images/Design.png";
import Development from "../images/Developments2.png";
import Marketing from "../images/marketing.png";
import Consulting from "../images/Consulting.png";

const Homepage = () => {
  return (
    <div className="App">
      <div className="main_container">
        <div className="homepage_container">
          <div className="homepage_banner">
            <div className="banner1_container">
              <img src={Banner1} alt="scketh-banner1" height={250}></img>
              <div className="banner1_content">
                <p>A Creative Studio that</p>
                <h1>Thinks Design</h1>
                <h2 class="our_offerings">
                  Our Offerings<br/>
                  <p></p>
                </h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="innerBanner_container">
          <div className="left_banner">
            <img src={Banner2} alt="scketch-banner2" height={150}></img>
            <div className="banner2_content">
              <div class="banner2_description">
                <p class="banner2_head">
                  Digital Build: &nbsp;<span>Innovation</span>
                </p>
                <p class="banner2_details">
                  Through the Digital Build process, we build your digital
                  assets from scratch and develop your embryonic ideas into a
                  robust brand.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="right_banner">
            <div className="banner2_content">
              <div class="banner2_description">
                <p class="banner2_head">
                  Digital Refresh: &nbsp;<span>Optimization</span>
                </p>
                <p class="banner2_details">
                  We equip you to always be at the top of your game by building
                  your digital presence across newer platforms like IoT,
                  wearables, voice and gesture based interactions.
                </p>
              </div>
            </div>
            <img src={Banner3} alt="scketch-banner3" height={150}></img>
          </div>
        </div>
      </div>
      <div className="development">
      <div className="development_container">
        <div className="live_button">
          <img src={Design} className="design" alt="/"></img>
          <img src={Development} className="development" alt="/"></img>
          <img src={Marketing} className="digitalMarketing" alt="/"></img>
          <img src={Consulting} className="digitalConsulting" alt="/"></img>
          <div className="liveButton_text">
            <span class="text">Design</span>
            <span class="text">Development</span>
            <span class="text">Marketing</span>
            <span class="text">Consulting</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
