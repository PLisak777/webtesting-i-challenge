module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const newItem = {...item}
  if (newItem.enhancement < 20) {
    newItem.enhancement++
  }
  return newItem;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = {...item};
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return {...item}
}
