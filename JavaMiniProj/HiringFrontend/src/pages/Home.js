import Content from "./Content";
import "../App.css";
import "./Home.css";
import image1 from "../Photos/pexels-fauxels-3184419.jpg";
import image2 from "../Photos/pexels-thirdman-5256816.jpg";
import image3 from "../Photos/pexels-fauxels-3182773.jpg";

const Home = () => {
  const scroll =() =>{
    
  }
  return (
    <div>
      <div className="card">
        <img src={image1} alt="" />
        <div className="card-content" onScroll={scroll}>
          <Content />
        </div>{" "}
      </div>
      <div className="card">
        {/* {content} */}
        <img src={image2} alt="" />
        <div className="card-content">
          <Content />
        </div>
      </div>
      <div className="card">
        {/* {content} */}
        <img src={image3} alt="" />
        <div className="card-content">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
