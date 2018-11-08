class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
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
      tempNode.next = new _Node(item, tempNode.next);
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
      tempNode.next = new _Node(item, tempNode.next);
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
      tempNode.next = new _Node(item, tempNode.next);
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  //   console.log(SLL);

  // console.log(SLL.find('Apollo'))
  // console.log(SLL.find('Boomer'));

  SLL.insertLast("Tauhida");

  // console.log(SLL.find('Tauhida'))

  SLL.remove("squirrel");

  SLL.insertBefore("Aaron", "Helo");
  //   console.log(SLL.find("Aaron"));
  //   console.log(SLL.find("Boomer"));

  SLL.insertAfter("After", "Aaron");
  //   console.log(SLL.find("Aaron"));
  //   console.log(SLL.find("After"));

  SLL.insertAt("Four", 4);
  //   console.log(SLL.find("Four"));

  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");
  //   console.log(SLL);

  function display(ll) {
    if (ll.head === null) {
      return "Linked list is empty";
    } else {
      let tempNode = ll.head;
      while (tempNode !== null) {
        console.log(tempNode);
        tempNode = tempNode.next;
      }
      return "";
    }
  }
//   console.log(display(SLL));

  function size(ll) {
    if (ll.head === null) {
      return 0;
    } else {
      let count = 0;
      let tempNode = ll.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
        count++;
      }
      return count;
    }
  }
  //   console.log(size(SLL));

  function isItEmpty(ll) {
    if (ll.head === null) {
      return true;
    } else {
      return false;
    }
  }
  //   console.log(isItEmpty(SLL));

  function findPrevious(str, ll) {
    if (!str) {
      return "please enter string";
    }
    if (!ll.head) {
      return "list does not exist";
    } else {
      let currNode = ll.head;
      while (currNode.next.value !== str) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
      }
      return currNode;
    }
  }
  //   console.log(findPrevious("Hotdog", SLL));

  function findLast(ll) {
    if (!ll.head) {
      return "list does not exist";
    } else {
      let currNode = ll.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      return currNode;
    }
  }
  //   console.log(findLast(SLL));

  //   function reverseList(ll) {
  //     let currNode = ll.head;
  //     while (currNode.next !== null) {
  //       let newCurrNode = currNode;
  //       let newNextNode = currNode.next;
  //       SLL.remove(currNode);
  //       SLL.insertFirst(newCurrNode.value);
  //       currNode = newNextNode;
  //     }
  //   }
  //   reverseList(SLL);
  //   console.log(findLast(SLL));

  function reverse(ll) {
    ll.head = reverseList(ll.head, null);
  }

  function reverseList(currentNode, prevNode) {
    if (currentNode.next === null) {
      currentNode.next = prevNode;
      return currentNode;
    }
    const oldNext = currentNode.next;
    currentNode.next = prevNode;
    return reverseList(oldNext, currentNode);
  }

  //   console.log(reverse(SLL));
  //   console.log(findLast(SLL));

  function thirdFromTheEnd(ll) {
    let count = size(ll);
    let currNode = ll.head;
    for (let i = 0; i < count - 2; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }

  //   console.log(thirdFromTheEnd(SLL));

  function MiddleOfAList(ll) {
    let count = size(ll);
    let currNode = ll.head;
    for (let i = 0; i < count / 2; i++) {
      currNode = currNode.next;
    }
    return currNode;
  }
//   console.log(MiddleOfAList(SLL));

  function cycleInAList(ll) {
    const set = new Set();
    let currNode = ll.head;
    while (currNode.next !== null) {
      if (set.has(currNode)) {
        return true;
      } else {
        set.add(currNode);
        currNode = currNode.next;
      }
    }
    return false;
  }
  


  console.log(cycleInAList(SLL));
}

main();
