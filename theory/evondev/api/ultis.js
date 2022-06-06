const user = {
  first_name: "JavaScript",
  last_name: "Kingdom",
  contact: {
    email: "javascriptkingdom@gmail.com",
    mobile: 0000000,
  },
};
Object.freeze(user);
user.last_name = "Dheeraj";
// this won't work, user is still immutable!
user.contact.telephone = 111111111;
// this will work because the nested object is not frozen
console.log(freeze);
