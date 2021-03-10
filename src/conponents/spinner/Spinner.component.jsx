import "./spinner.style.scss";
import spinner from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner flex flex-jcc">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
