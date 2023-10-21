class ListNode<T> {
    constructor(public value: T, public next?: ListNode<T>) {}
  }
  
  class Queue<T> {
    head: ListNode<T> | null = null
    tail: ListNode<T> | null = null
  
    push(value: T) {
      const node = new ListNode(value)
    
      if (this.head) {
        if (this.tail) {
          this.tail.next = node
        } else {
          this.head.next = node
        }
  
        this.tail = node
      } else {
        this.head = node
      }
    }
  
    pop(): T | null {
      const head = this.head
      this.head = this.head?.next ?? null
      return head?.value ?? null
    }
  }
  