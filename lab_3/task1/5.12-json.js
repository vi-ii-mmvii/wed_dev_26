let user = {
  name: "John Smith",
  age: 35,
};

let json = JSON.stringify(user);
let user2 = JSON.parse(json);

alert(user2.name);
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

let json2 = JSON.stringify(meetup, function replacer(key, value) {
  return key !== "" && value === meetup ? undefined : value;
});

alert(json2);
