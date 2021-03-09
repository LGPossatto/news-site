import "./rights-stripe.style.scss";

const RightsStripe = () => {
  return (
    <div className="rights-stripe">
      <div className="container flex flex-jcsb">
        <div>
          <span className="fs-med fc-light">
            Todos os direitos reservados - Portal SdN Online - Rádio SdN S/A{" "}
            {"\n"} Av. Lorem, 100 - 13º andar - São Paulo - SP
          </span>
        </div>
        <div>
          <span className="fs-med fc-light rights-stripe__right">
            +55 11 1234-5678 - salaodenoticias@sdn.com.br
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightsStripe;
