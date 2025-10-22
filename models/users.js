let users = [
  {
    id: 1,
    email: "carladeafiaa@tds.com",
    pwd: "blabla",
  },
];

export function readAllUsers() {
  return users;
}

export function createUser(user) {
  users.push(user);
}

export function deleteUser(userId) {
  const userIndex = users.findIndex((u) => u.id == userId);
  users.splice(userIndex, 1);
}

export function login(id) {
  const user = users.find((u) => u.id == id);
  const userInfo = {
    email: user.email,
  };
  return userInfo;
}
