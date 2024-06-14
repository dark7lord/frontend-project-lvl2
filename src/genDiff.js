import _ from "lodash";

const calculateDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result[key] = 'added';
    } else if (!Object.hasOwn(data2, key)) {
      result[key] = 'deleted';
    } else if (data1[key] !== data2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

const formatDiff = (diff, data1, data2) => {
  const keys = Object.keys(diff);
  const sortedKeys = _.sortBy(keys);

  const rows = sortedKeys.map((key) => {
    if (diff[key] === 'added') {
      return `+ ${key}: ${data2[key]}`;
    }
    if (diff[key] === 'deleted') {
      return `- ${key}: ${data1[key]}`;
    }
    if (diff[key] === 'unchanged') {
      return `  ${key}: ${data1[key]}`;
    }
    if (diff[key] === 'changed') {
      const deletedRow = `- ${key}: ${data1[key]}`;
      const addedRow = `+ ${key}: ${data2[key]}`;
      return `${deletedRow}\n  ${addedRow}`;
    }
  });

  const formattedRows = rows.join('\n  ').trimEnd();
  const resultString = `{\n  ${formattedRows}\n}`;

  return resultString;
};

const genDiff = (data1, data2) => {
  const diff = calculateDiff(data1, data2);
  return formatDiff(diff, data1, data2);
};

export default genDiff;
