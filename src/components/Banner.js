import "./Banner.css";
import logo from "../images/img1.png";


const Banner = () => {
  return (
    <div className="bannerApp">
      <div className="red_banner">
        <div className="banner_content">
          <div className="logo_container">
            <img src={logo} alt="logo" height="120px"></img>
          </div>
          <div class="banner_text">
            <h4>Let's Discuss Your Project</h4>
            <p>
              Choose an ideal tech partner who can turn your idea into a tech
              solution
            </p>
            <a href="/">
              <button class="start">Start</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
