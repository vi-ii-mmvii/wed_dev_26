let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[2]);

alert("Read message 1: " + readMessages.has(messages[1]));

messages.shift();
let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMap = new WeakMap();

readMap.set(messages2[0], new Date(2017, 1, 1));
readMap.set(messages2[1], new Date(2017, 1, 5));

alert("Date read: " + readMap.get(messages2[0]));

