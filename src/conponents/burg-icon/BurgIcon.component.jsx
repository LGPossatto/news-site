import "./burg-icon.style.scss";

const BurgIcon = ({ showMenu, setShowMenu }) => {
  return (
    <div
      type="button"
      className={`burg-icon flex flex-fdc flex-jcse ${
        showMenu && "btn-icon-active"
      }`}
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgIcon;
