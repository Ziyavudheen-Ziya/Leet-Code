// let head = [1,1,2]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next != undefined) {
      

        curr = curr.next;
      }
      if (curr.value == value) {
           
           return
      }

      curr.next = node;
    }

    this.size++;
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

let linked = new LinkedList();

linked.append(1);
linked.append(1);
linked.append(2);
linked.append(3);
linked.append(3);

linked.append(3);
linked.append(4);
linked.append(4);
linked.append(6);
linked.append(6);

linked.print();
