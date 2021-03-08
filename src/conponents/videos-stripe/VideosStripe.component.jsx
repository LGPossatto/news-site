import "./videos-stripe.style.scss";
import FeaturedVideo from "../featured-video/FeaturedVideo.component";

const VideosStripe = () => {
  return (
    <section className="videos container">
      <div className="videos__head flex flex-jcsb flex-aic">
        <h3 className="fs-big fc-primary">SdN - TV</h3>
        <div className="move-videos-btn">
          <button className="btn-l" id="carousel-btn-l"></button>
          <button className="btn-r" id="carousel-btn-r"></button>
        </div>
      </div>
      <div className="videos__box container-padding-tb">
        <div className="carousel-box" id="carousel-box">
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-left">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel active-0">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel active-1">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel active-2">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel active-3">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel active-4">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
          <div className="videos-pannel hide-right">
            <FeaturedVideo></FeaturedVideo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosStripe;
