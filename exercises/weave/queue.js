// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

//it's kinda cheating using js array to implement queue!
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record); // unshift adds item to beginning
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Queue;