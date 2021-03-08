import "./featured-video.style.scss";
import placeholderImg from "../../assets/images/news-header-placeholder.jpg";

const FeaturedVideo = () => {
  return (
    <>
      <div className="video-thumnail">
        <img src={placeholderImg} alt="placeholder" />
      </div>
      <h4 className="fs-text fc-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h4>
    </>
  );
};

export default FeaturedVideo;
