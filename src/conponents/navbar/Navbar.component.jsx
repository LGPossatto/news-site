import { Link } from "react-router-dom";

import { categoryNames } from "../../utils/utils";

import "./navbar.style.scss";
import Searchbar from "../searchbar/Searchbar.component";
import BurgMenu from "../burg-menu/BurgMenu.component";
import MenuItem from "../menu-item/MenuItem.component";

const Navbar = () => {
  const navMenuItems = [
    { category: categoryNames.GERAL, name: "Geral", id: 0 },
    { category: categoryNames.NEGOCIO, name: "Negócio", id: 1 },
    { category: categoryNames.ENTRETENIMENTO, name: "Entretenimento", id: 2 },
    { category: categoryNames.SAUDE, name: "Saúde", id: 3 },
    { category: categoryNames.CIENCIA, name: "Ciência", id: 4 },
    { category: categoryNames.ESPORTE, name: "Esporte", id: 5 },
    { category: categoryNames.TECNOLOGIA, name: "Tecnologia", id: 6 },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__top container flex flex-jcsb flex-aic">
        <div className="title">
          <Link to="/" className="fs-big fc-primary">
            Salão de Notícias
          </Link>
        </div>
        <div className="hide-on-mobile">
          <Searchbar></Searchbar>
        </div>
        <div className="hide-on-desktop">
          <BurgMenu navMenuItems={navMenuItems}></BurgMenu>
        </div>
      </div>
      <div className="navbar__bot container hide-on-mobile flex flex-jcse flex-aic">
        {navMenuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            text={menuItem.name}
            category={menuItem.category}
          ></MenuItem>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
