class ListNode<T> {
    constructor(public value: T, public next?: ListNode<T>) {}
  }
  
  class Stack<T> {
    private items: T[] = [];
  
    push(item: T) {
      this.items.push(item);
    }
  
    isEmptyArray() {
      return this.items.length === 0;
    }
  
    pop() {
      return this.isEmptyArray() ? undefined : this.items.pop();
    }
  }
  
  const s = new Stack()
  
  s.push(1)
  s.push(3)
  s.push(10)
  
  while (!s.isEmptyArray()) {
    console.log(s.pop())
  }