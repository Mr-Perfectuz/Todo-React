export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f81d5c7777msh2d926f7bd8e2c22p1af665jsn76a239cf9aaa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}