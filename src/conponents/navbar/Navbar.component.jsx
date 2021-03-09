import { Link } from "react-router-dom";

import "./navbar.style.scss";
import Searchbar from "../searchbar/Searchbar.component";
import BurgMenu from "../burg-menu/BurgMenu.component";
import MenuItem from "../menu-item/MenuItem.component";

const Navbar = () => {
  const navMenuItems = [
    { name: "business", id: 0 },
    { name: "entertainment", id: 1 },
    { name: "general", id: 2 },
    { name: "health", id: 3 },
    { name: "science", id: 4 },
    { name: "sports", id: 5 },
    { name: "technology", id: 6 },
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
          <MenuItem key={menuItem.id} text={menuItem.name}></MenuItem>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
