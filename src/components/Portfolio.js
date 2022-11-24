import "./portfolio.css";
import profile from "../images/profileimg.png";

const Portfolio = () => {
  return (
    <div className="portfolio_App">
      <div className="portfolio_container">
        <div className="portfolio_header">
          <h2 className="portfolio_text">
            Work Portfolio<p></p>
          </h2>
        </div>
      </div>
      <div className="client_container">
        <div className="client_container_content">
                <div className="client_header_text">
                    <h4 className="client_container_text">Client Testimonials</h4>
                </div>
        </div>
        <div className="testimonials_container">
            <div className="testimonials_content">
                <div className="testimonials_img">
                    <img class="profile_pic" src={profile} alt="profilepic"></img>
                    <div className="testimonial_name">
                    <h2 className="name_head">Gautham Kumars</h2>
                    <p>CEO, Foxpers</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
