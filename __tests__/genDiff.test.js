import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';
import { readFileSync } from "fs";

const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`


test('main flow gendiff', () => {
  const path1 = './__fixtures__/file1.json';
  const path2 = './__fixtures__/file2.json';
  const file1 = readFileSync(path1, 'utf8');
  const file2 = readFileSync(path2, 'utf8');

  const data1 = JSON.parse(file1);
  const data2 = JSON.parse(file2);
  const actual = genDiff(data1, data2);

  expect(actual).toEqual(expected);
});
