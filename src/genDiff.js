import _ from 'lodash';

const calculateDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  return keys.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      acc[key] = 'added';
    } else if (!Object.hasOwn(data2, key)) {
      acc[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      acc[key] = 'changed';
    } else {
      acc[key] = 'unchanged';
    }
    return acc;
  }, {});
};

const formatChangedRow = (key, data1, data2) => {
  const deletedRow = `- ${key}: ${data1[key]}`;
  const addedRow = `+ ${key}: ${data2[key]}`;
  return `${deletedRow}\n  ${addedRow}`;
};

const formatRow = (key, diff, data1, data2) => {
  switch (diff[key]) {
    case 'added':
      return `+ ${key}: ${data2[key]}`;
    case 'deleted':
      return `- ${key}: ${data1[key]}`;
    case 'unchanged':
      return `  ${key}: ${data1[key]}`;
    case 'changed':
      return formatChangedRow(key, data1, data2);
    default:
      throw new Error(`Unknown diff type: ${diff[key]}`);
  }
};

const formatRows = (rows) => {
  const formattedRows = rows.join('\n  ').trimEnd();
  return `{\n  ${formattedRows}\n}`;
};

const formatDiff = (diff, data1, data2) => {
  const keys = Object.keys(diff);
  const sortedKeys = _.sortBy(keys);
  const rows = sortedKeys.map((key) => formatRow(key, diff, data1, data2));
  return formatRows(rows);
};

const genDiff = (data1, data2) => {
  const diff = calculateDiff(data1, data2);
  return formatDiff(diff, data1, data2);
};

export default genDiff;
