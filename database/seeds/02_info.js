exports.seed = function (knex) {
  return knex("information").insert([
    { title: "info one", description: "Great info", tags: "wow", usersId: 1 }, //1
    { title: "info two", description: "The best info", tags: "meow", usersId: 2 }, //1
    { title: "info three", description: "Amazing info", tags: "how", usersId: 2 }, //2
    { title: "info four", description: "Filler info", tags: "moo", usersId: 3 }, //3
    { title: "info five", description: "Look at this info", tags: "hello", usersId: 3 }, //3
    { title: "info six", description: "Sad info", tags: "umm", usersId: 4 }, //4
    { title: "info seven", description: "Info info", tags: "great", usersId: 4 }, //4
  ]);
};