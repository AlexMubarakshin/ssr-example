import { stringify as queryStringify } from 'query-string';

export function removeFalsyValues(obj) {
  const _obj = { ...obj };
  for (const key in _obj) {
    const objHasProp = Object.prototype.hasOwnProperty.call(_obj, key);
    const valueIsEmpty = _obj[key] === null || _obj[key] === '';

    if (objHasProp && valueIsEmpty) {
      delete _obj[key];
    }
  }

  return _obj;
}

export default function stringify(object) {
  const data = removeFalsyValues(object);
  return queryStringify(data);
}
