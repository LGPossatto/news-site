import { Link } from "react-router-dom";

import "./not-found.style.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="fs-biger">Página não encontrada!</h2>
      <Link to="/">Voltar a página inicial</Link>
    </div>
  );
};

export default NotFound;
