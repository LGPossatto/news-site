import "./top-news.style.scss";
import HeaderNews from "../header-news/HeaderNews.component";

const TopNews = () => {
  const title = "Título";
  const body =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum reprehenderit, commodi modi sapiente, deleniti possimus nesciunt praesentium impedit fuga rem quas id in amet, veritatis voluptatibus ipsum suscipit delectus!";

  return (
    <div className="top-news grid grid-g-2 grid-gtc-2 grid-gar-250">
      <HeaderNews className="grid-r-s2" title={title} body={body}></HeaderNews>
      <HeaderNews title={title} body={body}></HeaderNews>
      <HeaderNews title={title} body={body}></HeaderNews>
    </div>
  );
};

export default TopNews;
