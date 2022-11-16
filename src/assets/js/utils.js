import { merge, set } from 'lodash';
// Test 1
function booleanToInt(data) {
  const result = data;
  switch (typeof result) {
    case 'boolean':
      return Number(result);
    case 'object':
      Object.keys(result).forEach((key) => {
        if (Object.hasOwnProperty.call(result, key)) {
          result[key] = booleanToInt(data[key]);
        }
      });
      break;
    default:
      return result;
  }
  return result;
}
// Test 2
function createObject(path, obj) {
  let error = false;
  // получение знеачения по указанному пути
  const val = path.reduce((previousValue, currentValue) => {
    if (typeof previousValue[currentValue] === 'undefined') {
      error = true; // ключа нет
      return false;
    }
    return previousValue[currentValue]; //  ключ существует
  }, obj);
  // если нет ошибок создаем объект с указаными ключами и значением
  return !error ? set({}, path, val) : {};
}

function copy(obj, params) {
  let result = {};
  // разбиваем строки на массивы
  const storePath = params.map((el) => el.split('.'));
  // создаем массив с составленными объектами
  const storeObj = storePath.map((path) => createObject(path, obj));
  // объединяем все объекты в один
  storeObj.forEach((object) => { result = merge(result, object); });

  return result;
}

export {
  booleanToInt,
  copy,
};
