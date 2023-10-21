class ListNode<T> {
  constructor(public value: T, public next?: ListNode<T>) {}
}

const rootNode = new ListNode(
  "Danil",
  new ListNode("Emir", new ListNode("Max"))
);

console.log(rootNode);
