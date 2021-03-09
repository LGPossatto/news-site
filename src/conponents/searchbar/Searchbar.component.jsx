import { useState } from "react";

import "./searchbar.style.scss";

const Searchbar = () => {
  const [text, setText] = useState("");

  return (
    <div className="searchbar flex flex-aic">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Buscar por..."
        className="fs-med fc-light"
      />
      <i className="fas fa-search fs-big fc-primary"></i>
    </div>
  );
};

export default Searchbar;
