/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    let currentNode = this.first;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  /** push(val): add new value to end of the stack (which is the front). Returns undefined. */
  // [] - push(1)empty list make newNode first and last
  // [1] push(2) - one or more item in list - set newNode.next to first and then set newNode to first
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
    } else {
      newNode.next = this.first; //newNode (soon to be first) to be facing current first position
      this.first = newNode; //make newNode the new first position
      this.size += 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  //[] pop() on empty list should throw console.error
  //[1] pop() on list with size of 1 should set first and last to null and reduce size by 1
  //[1, 2] pop() on list with 2 or more - set head.next = newHead and have  
  pop() {
    if (!this.size) return console.error('Cannot perform operation on an empty list');
    let oldFirst = this.first;
    let newFirst = this.first.next;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size -= 1;
      return oldFirst.val;
    } else {
      this.first = newFirst;
      this.size -= 1;
      return oldFirst.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.size) {
      return true;
    }
    return false;
  }
}

module.exports = Stack;
