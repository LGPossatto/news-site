import "./footer.style.scss";
import SocialStripe from "../social-stripe/SocialStripe.component";
import MoreStripe from "../more-stripe/MoreStripe.component";
import RightsStripe from "../rights-stripe/RightsStripe.component";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialStripe></SocialStripe>
      <MoreStripe></MoreStripe>
      <RightsStripe></RightsStripe>
    </footer>
  );
};

export default Footer;
