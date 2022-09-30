// Node class to create a node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// SinglyLinkedList class to create a SinglyLinkedList
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push operation
  push(val) {
    //   Create a new node using the value passed.
    var newNode = new Node(val);
    /*
     * If there is no head property on the list,
     * set the head and tail to be the newly created node.
     * -----------------------------------------------------
     * Otherwise set the next property on the tail to be the new node and
     * set the tail property on the list to be the newly created node
     * -------------------------------------------------------------------
     * Increment the length by one.
     * Return the linked list.
     */
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop operation
  pop() {
    // If there are nodes in the list, return undefined.
    if (!this.head) return undefined;

    /*
     * Loop through the list until you reach the tail.
     * ---------------------------------------------------
     * Set the next property of the second to last node to be null.
     * -------------------------------------------------------------
     * Set the tail to be the second to last node.
     * ------------------------------------------------------
     * Decrement the length of the list by 1
     * Return the value of the node removed.
     */
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Shift operation (Removing a new node from the beginning of the linked list)
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;

    /*
     * Set the head property to be the current head's next property.
     * -------------------------------------------------------------
     * Decrement the length by 1.
     * Return the value of the node removed
     */
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Unshift operation (Adding a new node to the beginning of the linked list)
  unshift(val) {
    // Create a new node using the value passed.
    var newNode = new Node(val);

    /*
     * If there is no head property on the list,
     * set the head and tail to be the newly created node
     * ---------------------------------------------------
     * Otherwise set the newly created node's next property
     * to be the current head property on the list.
     * ---------------------------------------------------
     * Set the head property on the list to be that newly created node.
     * ----------------------------------------------------------------
     * Increment the length of the list by 1
     * Return the linked list.
     */
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // get operation (Retrieving a node by it's position in the linked list)
  get(index) {
    /*
     * If the index is less than zero or greater than
     * or equal to the length of the list, return null
     */
    if (index < 0 || index >= this.length) return null;

    /*
     * Loop through the list until you reach the index and
     * return the node at that specific index.
     */
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // set operation (changing the value of a node based on it's position in the list)
  set(index, val) {
    // Use your get "get" function to find the specific node.
    var foundNode = this.get(index);

    /*
     * If the node is not found, return false
     * ---------------------------------------
     * If the node is found,
     * set the value of that node to be the value passed to the function and return true.
     */
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert operation (Adding a node to the linked list at a specific position)
  insert(index, val) {
    // If the index is less than zero or greator than the length, return false.
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new node to the end of the list.
    if (index === this.length) return !!this.push(val);
    // If the index is 0, unshift a new node to the start of the list.
    if (index === 0) return !!this.unshift(val);

    /*
     * Otherwise, using the get method, access the node at the index -1
     * ------------------------------------------------------------------
     * Set the next property on that node to be the new node.
     * ------------------------------------------------------
     * Set the next property on the new node to be the previous next.
     * --------------------------------------------------------------
     * Increment the length.
     * Return true
     */
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Removing a node from the linked list at a specific position
  remove(index) {
    /*
     * if the index is less than 0 or greater than the length,
     * return undefined.
     */
    if (index < 0 || index >= this.length) return undefined;

    // If the index is 0, shift
    if (index === 0) return this.shift();

    // If the index is the same as the length -1, pop
    if (index === this.length - 1) return this.pop();

    /*
     * Otherwise, using the "get" method, access the node at the index -1.
     * Set the next property on that node to be the next of the next node.
     * Decrement the length.
     * Return the value of the node removed.
     */
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse the linked list in place!
  reverse() {
    // Swap the head and tail
    // Create a variable called node and initialize it to the head property
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    // Create a variable called next.
    var next;
    // Create a variable called prev
    var prev = null;
    // Loop through the list
    for (var i = 0; i < this.length; i++) {
      // Set next to be the next property on whatever node is.
      next = node.next;
      // Set the next property on the node to be whatever prev is.
      node.next = prev;
      // Set prev to be the value of the node variable
      prev = node;
      // Set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
