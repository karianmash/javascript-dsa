/**
 * @problem Group Anagrams
 * Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * @example
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * @solution
 * The core of this problem is to find a way to identify which strings are anagrams of each other. Anagrams will have the exact same characters, just in a different order. If we sort the characters of an anagram, they will all result in the same string.
 *
 * We can use this sorted string as a "key" in a hash map.
 *
 * 1. Initialize a hash map (e.g., a `Map`).
 * 2. Iterate through each string in the input array.
 * 3. For each string, create its key by sorting its characters. For example, "eat", "tea", and "ate" will all produce the key "aet".
 * 4. If the key does not exist in the map, create a new entry with the key and a new array containing the current string.
 * 5. If the key already exists, push the current string into the array associated with that key.
 * 6. After iterating through all the strings, the values of the map will be the arrays of grouped anagrams. Convert the map values to an array and return it.
 */
function groupAnagrams(strs) {
  const map = new Map();
  
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));