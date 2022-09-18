import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/123698861_2755044114763004_9110128138013915769_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qaPvCmmYs5QAX_J7SZm&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_EisSdxLdlqxhhMubL352uY0nDCE7GSv2MZKJH0sWF-g&oe=634B08A8"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My story
        </p>
        <p className="a-desc">
        My field of study is mechatronics but I feel I am very interested in web programming, I want to study and develop a career in this industry. I hope the company will give me the opportunity to stick with the company for a long time.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">"GALA DINNER" of theSchool of Mechanical Engineering</h4>
            <p className="a-award-desc">
            BESTPRESENTATION AWARD 2021-2022 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;