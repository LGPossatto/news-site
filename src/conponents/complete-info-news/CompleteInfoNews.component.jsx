import PropTypes from "prop-types";

import "./complete-info-news.style.scss";

const CompleteInfoNews = ({ headline }) => {
  const publishedDate = new Date(headline.publishedAt);
  const formatDate = `${publishedDate.getDate()} / ${
    publishedDate.getMonth() + 1
  } / ${publishedDate.getFullYear()}`;

  return (
    <div className="complete-info-news flex flex-fdc flex-jcsb">
      <div>
        <span className="fs-med fc-primary">{headline.source.name}</span>
        <span className="fs-med flex">{`Autor: ${
          headline.author || "desconhecido"
        } - Data: ${formatDate}`}</span>
      </div>
      <div className="title-box">
        <h2 className="fs-biger fc-dark">{headline.title}</h2>
        {headline.description ? (
          <p className="fs-big fc-dark">{headline.description}</p>
        ) : null}
      </div>
      <span className="fs-med">
        Link para a notícia original:
        <a
          className="fs-med fc-primary"
          href={`${headline.url}`}
        >{` ${headline.url}`}</a>
      </span>
    </div>
  );
};

CompleteInfoNews.propTypes = {
  headline: PropTypes.object.isRequired,
};

export default CompleteInfoNews;
