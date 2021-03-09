import "./social-stripe.style.scss";
import SocIcon from "../soc-icon/SocIcon.component";

const SocialStripe = () => {
  return (
    <div className="social-stripe flex flex-jcc">
      <div className="container">
        <h2 className="fs-biger fc-light">Siga o Salão de Notícias</h2>
        <div className="soc-links flex flex-jcc">
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-twitter"
            link="/"
          ></SocIcon>
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-youtube"
            link="/"
          ></SocIcon>
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-instagram"
            link="/"
          ></SocIcon>
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-facebook"
            link="/"
          ></SocIcon>
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-linkedin-in"
            link="/"
          ></SocIcon>
          <SocIcon
            size="fs-biger"
            color="fc-light"
            icon="fab fa-whatsapp"
            link="/"
          ></SocIcon>
        </div>
      </div>
    </div>
  );
};

export default SocialStripe;
