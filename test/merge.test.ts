import { merge } from '../src/merge';

describe('merge function - Edge Cases', () => {
  
  test('Standard case: should merge three arrays into sorted ascending array', () => {
    const collection_1 = [10, 5, 2]; 
    const collection_2 = [1, 4, 8]; 
    const collection_3 = [3, 6, 9]; 

    const expected = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('Empty arrays: should handle one or more empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([10, 5], [], [1, 2])).toEqual([1, 2, 5, 10]);
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
  });

  test('Negative numbers: should correctly sort negative integers', () => {
    const collection_1 = [0, -5, -10]; // Max to Min
    const collection_2 = [-8, -2, 1];   // Min to Max
    const collection_3 = [-3, 4, 7];    // Min to Max

    const expected = [-10, -8, -5, -3, -2, 0, 1, 4, 7];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('Duplicates: should handle duplicate values across different arrays', () => {
    const collection_1 = [5, 2, 2];
    const collection_2 = [1, 2, 5];
    const collection_3 = [2, 3, 4];

    const expected = [1, 2, 2, 2, 2, 3, 4, 5, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('Single elements: should handle arrays with only one element', () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    expect(merge([10], [0], [5])).toEqual([0, 5, 10]);
  });

  test('Uneven lengths: should handle significantly different array sizes', () => {
    const c1 = [100, 90, 80, 70, 60];
    const c2 = [1];
    const c3 = [2, 3];

    const expected = [1, 2, 3, 60, 70, 80, 90, 100];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });

  test('Large range: should handle large gaps between numbers', () => {
    const c1 = [1000, 500];
    const c2 = [1, 2];
    const c3 = [10, 20];

    const expected = [1, 2, 10, 20, 500, 1000];
    expect(merge(c1, c2, c3)).toEqual(expected);
  });
});