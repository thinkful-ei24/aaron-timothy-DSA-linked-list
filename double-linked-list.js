class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    const newNode = new _Node(value, this.head, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let newNode = new _Node(item, null, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertBefore(item, loc) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next.value !== loc) {
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next, tempNode);
      tempNode.next = newNode;
      newNode.next.prev = newNode;
    }
  }

  insertAt(item, loc) {
    if (loc < 0) {
      return console.log("Cannot be less than 0");
    }
    if (loc === 0) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      for (let i = 0; i < loc - 1; i++) {
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next, tempNode);
      tempNode.next = newNode;
      newNode.next.prev = newNode;
    }
  }

  insertAfter(item, loc) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.value !== loc) {
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next, tempNode);
      tempNode.next = newNode;
      if (newNode.next) {
        newNode.next.prev = newNode;
      }
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
    if (currNode.next.prev) {
      currNode.next.prev = previousNode;
    }
  }
}

function mainDLL() {
  let DLL = new DoubleLinkedList();

  let myArr = ["Aquaria", "Caprica", "Gemenon", "Picon", "Sagittaron"];
  myArr.forEach(item => DLL.insertLast(item));

  console.log(DLL.find("Caprica"));

  DLL.insertAfter("Tauron", "Sagittaron");

//   console.log(DLL.find("Tauron"));

  DLL.remove("Picon");

//   console.log(DLL.find("Gemenon"));

  function reverse(ll) {
    let oldHead = ll.head;
    ll.head = reverseList(ll.head, null);
    ll.tail = oldHead;
  }

  function reverseList(currentNode, prevNode) {
    if (currentNode.next === null) {
      currentNode.next = prevNode;
      currentNode.prev = null;
      return currentNode;
    }
    const oldNext = currentNode.next;
    currentNode.next = prevNode;
    currentNode.prev = oldNext;
    return reverseList(oldNext, currentNode);
  }

  reverse(DLL);
//   console.log(DLL.find("Gemenon"));
//   console.log(DLL.find("Tauron"));
  console.log(DLL.find("Caprica"));
}

console.log(mainDLL());
