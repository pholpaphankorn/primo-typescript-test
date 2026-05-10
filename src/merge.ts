export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  // Pointers
  let i = collection_1.length - 1; // collection_1 is Max-to-Min, so start from end
  let j = 0; // collection_2 is Min-to-Max
  let k = 0; // collection_3 is Min-to-Max

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const v1 = i >= 0 ? collection_1[i] : Infinity;
    const v2 = j < collection_2.length ? collection_2[j] : Infinity;
    const v3 = k < collection_3.length ? collection_3[k] : Infinity;

    // Find the minimum of the three current values
    if (v1 <= v2 && v1 <= v3) {
      result.push(v1);
      i--;
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      j++;
    } else {
      result.push(v3);
      k++;
    }
  }

  return result;
}
