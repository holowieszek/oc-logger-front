const getParams = (query, find) => {
  const params = new URLSearchParams(query);
  const data = [];

  find.map(key => {
    return data[key] = params.get(key)
  });

  return data;
}

export default getParams;