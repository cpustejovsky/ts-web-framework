import { User } from "./models/User";

const user = new User({ name: "Charles", age: 27 });

user.set({ name: "Charles Clinton Pustejovsky III" });

user.on("change", () => {
  console.log("test");
});

console.log(user.get("name"));
console.log(user.get("age"));

user.trigger("change");

