const url = 'http://localhost:3100/car_menu_items';

const getCars = async () => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

export {
  getCars
};