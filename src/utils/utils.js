// capitalize every first letter
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// use static news
export const staticNews = true;

// fetch news api data
export const getData = async (category = "", search = "") => {
  const newsApiKey = process.env.REACT_APP_API_KEY;

  let extraUrl = "";
  if (category !== "") {
    extraUrl += `&category=${category}`;
  }
  if (search !== "") {
    extraUrl += `&q=${search}`;
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=br${extraUrl}&apiKey=${newsApiKey}`
  );
  const data = await res.json();

  return data;
};

// category names
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

// process.env.REACT_APP_API_KEY
