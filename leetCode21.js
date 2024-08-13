let list1 = [1, 2, 4],
  list2 = [1, 3, 4];

let arr = list1.concat(list2).sort((a, b) => a - b);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
   return this.size === 0;
  }

  addNode(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

       this.size++;
       this.tail = newNode;
  }

  sorting(arr) {
    arr.forEach((value) => this.addNode(value));
  }

  print() {
    let curr = this.head;
    let arr = [];

    while (curr) {
      arr.push(curr.value);

      curr = curr.next;
    }

    console.log(arr);
  }
}

let linkedlist = new LinkedList();

linkedlist.sorting(arr)
linkedlist.print()
