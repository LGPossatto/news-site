import "./more-stripe.style.scss";
import LinkCluster from "../links-cluster/LinksCluster.component";

const MoreStripe = () => {
  const links0 = [
    { id: 0, text: "Últimas Notícias", url: "/" },
    { id: 1, text: "Opinião Salão de Notícias", url: "/" },
    { id: 2, text: "SdN TV", url: "/" },
  ];
  const links1 = [
    { id: 3, text: "Podcasts", url: "/" },
    { id: 4, text: "Programação", url: "/" },
    { id: 5, text: "SdNews", url: "/" },
  ];
  const links2 = [
    { id: 6, text: "Ouça a Rádio", url: "/" },
    { id: 7, text: "Mitos e Fatos", url: "/" },
    { id: 8, text: "Blogs", url: "/" },
  ];
  const links3 = [
    { id: 9, text: "Anuncie", url: "/" },
    { id: 10, text: "Feed RSS", url: "/" },
    { id: 11, text: "Aplicativos", url: "/" },
    { id: 12, text: "Fale Conosco", url: "/" },
  ];

  return (
    <div className="more-stripe">
      <div className="container">
        <h2 className="fs-big fc-light">Mais SdN</h2>
        <div className="flex flex-jcsb">
          <LinkCluster links={links0}></LinkCluster>
          <LinkCluster links={links1}></LinkCluster>
          <LinkCluster links={links2}></LinkCluster>
          <LinkCluster links={links3}></LinkCluster>
        </div>
      </div>
    </div>
  );
};

export default MoreStripe;
