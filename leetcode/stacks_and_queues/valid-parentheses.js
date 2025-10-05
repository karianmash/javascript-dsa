
/**
 * @problem Valid Parentheses
 * Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * @example
 * Input: s = "()[]{}"
 * Output: true
 *
 * @solution
 * This is a classic problem for the Stack data structure.
 * 1. Initialize an empty stack.
 * 2. Create a map to hold the matching pairs of brackets.
 * 3. Iterate through the input string character by character.
 * 4. If the character is an opening bracket ('(', '[', '{'), push it onto the stack.
 * 5. If the character is a closing bracket (')', ']', '}'), check the top of the stack.
 *    - If the stack is empty or the top element is not the corresponding opening bracket, the string is invalid.
 *    - If it is the correct opening bracket, pop it from the stack.
 * 6. After the loop, if the stack is empty, it means every opening bracket had a matching closing bracket in the correct order. If it's not empty, there are unclosed brackets.
 */
function isValid(s) {
  const stack = [];
  const map = {')':'(', ']':'[', '}':'{'};
  
  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (!stack.length || stack.pop() !== map[ch]) {
      return false;
    }
  }
  
  return stack.length === 0;
}

console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
