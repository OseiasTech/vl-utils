import { lower } from '../index';

test('lower function', () => {
    const teststring = 'name'
  expect(lower('NAME')).toBe(teststring);
});