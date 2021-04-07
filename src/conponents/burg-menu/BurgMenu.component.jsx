import { useState } from "react";
import PropTypes from "prop-types";

import "./burg-menu.style.scss";
import BurgIcon from "../burg-icon/BurgIcon.component";
import MenuItem from "../menu-item/MenuItem.component";
import Searchbar from "../searchbar/Searchbar.component";

const BurgMenu = ({ navMenuItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="burg-menu">
      <BurgIcon showMenu={showMenu} setShowMenu={setShowMenu}></BurgIcon>
      <div className={`burg-menu__links ${showMenu && "btn-active"}`}>
        <Searchbar></Searchbar>
        {navMenuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            text={menuItem.name}
            category={menuItem.category}
            setShowMenu={setShowMenu}
          ></MenuItem>
        ))}
      </div>
    </div>
  );
};

BurgMenu.propTypes = {
  navMenuItems: PropTypes.array.isRequired,
};

export default BurgMenu;
