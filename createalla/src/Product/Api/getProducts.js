export async function getProducts(limit, sortBy) {
  let apiCall = await fetch(`http://localhost:3000/products?_page=1&_sort=${sortBy}&_limit=${limit}`)
  let jsonify = await apiCall.json();
  return jsonify;
}
