export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const categoryNames = {
  GERAL: "geral",
  NEGOCIO: "negocio",
  ENTRETENIMENTO: "entretenimento",
  SAUDE: "saude",
  CIENCIA: "ciencia",
  ESPORTE: "esporte",
  TECNOLOGIA: "tecnologia",
  ESPECIFICO: "especifico",
};

// process.env.REACT_APP_NEWSAPI_KEY
