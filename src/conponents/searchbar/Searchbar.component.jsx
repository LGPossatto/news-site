import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import NewsContext from "../../context/news/newsContext";
import { categoryNames } from "../../utils/utils";

import "./searchbar.style.scss";

const Searchbar = () => {
  let history = useHistory();
  const [text, setText] = useState("");
  const { getSpecificHeadlines } = useContext(NewsContext);

  const handleOnClick = () => {
    getSpecificHeadlines(text);
    setText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
      history.push(`/${categoryNames.ESPECIFICO}/0`);
    }
  };

  return (
    <div className="searchbar flex flex-aic">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar por..."
        className="fs-med fc-light"
      />
      <Link to={`/${categoryNames.ESPECIFICO}/0`}>
        <i
          className="fas fa-search fs-big fc-primary"
          onClick={handleOnClick}
        ></i>
      </Link>
    </div>
  );
};

export default Searchbar;
