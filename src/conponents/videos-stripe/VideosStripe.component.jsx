import { useState } from "react";

import "./videos-stripe.style.scss";
import FeaturedVideo from "../featured-video/FeaturedVideo.component";
import ArrowBtn from "../arrow-btn/ArrowBtn.component";

const VideosStripe = () => {
  const [videos, setVideos] = useState([
    { id: 0, title: "título do vídeo", className: "hide-right" },
    { id: 2, title: "título do vídeo", className: "hide-right" },
    { id: 3, title: "título do vídeo", className: "hide-right" },
    { id: 4, title: "título do vídeo", className: "hide-right" },
    { id: 5, title: "título do vídeo", className: "hide-right" },
    { id: 6, title: "título do vídeo", className: "hide-left" },
    { id: 7, title: "título do vídeo", className: "active-0" },
    { id: 8, title: "título do vídeo", className: "active-1" },
    { id: 9, title: "título do vídeo", className: "active-2" },
    { id: 10, title: "título do vídeo", className: "active-3" },
    { id: 11, title: "título do vídeo", className: "hide-right" },
    { id: 12, title: "título do vídeo", className: "hide-right" },
    { id: 13, title: "título do vídeo", className: "hide-right" },
    { id: 14, title: "título do vídeo", className: "hide-right" },
  ]);

  const moveCarousel = (dir) => {
    const carouselLastIndex = videos.length - 1;
    const getTrueIndex = (index) => {
      if (index > carouselLastIndex) {
        return index - carouselLastIndex - 1;
      } else if (index < 0) {
        return index + carouselLastIndex + 1;
      } else {
        return index;
      }
    };

    let newVideos = [...videos];
    const mountNewVideo = (index, str) => {
      const newVideo = { ...videos[index], className: str };
      newVideos[index] = newVideo;
    };

    if (dir === "left") {
      for (let i = 0; i <= carouselLastIndex; i++) {
        if (videos[i].className === "hide-left") {
          mountNewVideo(i, "hide-right");
          mountNewVideo(getTrueIndex(i + 1), "hide-left");
          mountNewVideo(getTrueIndex(i + 2), "active-0");
          mountNewVideo(getTrueIndex(i + 3), "active-1");
          mountNewVideo(getTrueIndex(i + 4), "active-2");
          mountNewVideo(getTrueIndex(i + 5), "active-3");

          break;
        }
      }
    } else if (dir === "right") {
      for (let i = 0; i <= carouselLastIndex; i++) {
        if (videos[i].className === "hide-left") {
          mountNewVideo(getTrueIndex(i - 1), "hide-left");
          mountNewVideo(i, "active-0");
          mountNewVideo(getTrueIndex(i + 1), "active-1");
          mountNewVideo(getTrueIndex(i + 2), "active-2");
          mountNewVideo(getTrueIndex(i + 3), "active-3");
          mountNewVideo(getTrueIndex(i + 4), "hide-right");

          break;
        }
      }
    }
    setVideos(newVideos);
  };

  return (
    <section className="videos-stripe">
      <div className="videos-stripe__top container flex flex-jcsb flex-aic">
        <h3 className="fs-big fc-primary">SdN - TV</h3>
        <div className="move-videos-btn">
          <ArrowBtn dir="left" moveCarousel={moveCarousel}></ArrowBtn>
          <ArrowBtn dir="right" moveCarousel={moveCarousel}></ArrowBtn>
        </div>
      </div>
      <div className="videos-stripe__box container">
        <div className="carousel-box" id="carousel-box">
          {videos.map(({ id, title, className }) => (
            <FeaturedVideo
              key={id}
              title={title}
              className={className}
            ></FeaturedVideo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosStripe;
