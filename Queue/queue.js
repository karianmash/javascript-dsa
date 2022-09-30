// Node class to create a node!
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// The Queue class to create a queue.
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Enqueue operation
  enqueue(val) {
    /*
     * --------------------------------------------------------
     * Create a new node using the value passed to the function
     * --------------------------------------------------------
     */
    var newNode = new Node(val);
    /*
     * If there are no nodes in the queue,
     * set this node to be the first and last property of the queue.
     * ---------------------------------------------------------------------
     * Otherwise, set the next property on the current last to be that node,
     * and then set the last property of the queue to be that node
     * ---------------------------------------------------------------------
     * Increment the size by 1.
     */
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // Dequeue operation
  dequeue() {
    // If there is no first property, just return null.
    if (!this.first) return null;

    /*
     * Store the first property in a variable
     * -------------------------------------------------
     * See if the first is the same as the lasst.
     * If so, set the first and last to be null.
     * -------------------------------------------------
     * If there is more than 1 node, set the first property to be the next property of first.
     * --------------------------------------------------------------------------------------
     * Decrement the size by 1.
     * Return the value of the node dequeued.
     */
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
