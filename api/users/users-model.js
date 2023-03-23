const uuid = require("uuid");

function getId() {
  //kendimiz ekledik data oluşturmak için
  return uuid.v1();
}

const initialUsers = () => {
  return [
    {
      id: getId(),
      kullaniciAdi: "onur",
      sifre: 1234,
    },
    {
      id: getId(),
      kullaniciAdi: "onur2",
      sifre: 1234,
    },
    {
      id: getId(),
      kullaniciAdi: "onur3",
      sifre: 1234,
    },
    {
      id: getId(),
      kullaniciAdi: "onur4",
      sifre: 1234,
    },
  ];
};

let users = initialUsers();

function getAllUsers() {
  return users;
}

function createNewUser(user) {
  user.id = getId();
  users.push(user);
}

function findUser(user) {
  let isFind = false;

  for (let i = 0; i < users.length; i++) {
    const item = users[i];
    if (item.kullaniciAdi === user.kullaniciAdi && item.sifre === user.sifre) {
      isFind = true;
      break;
    }
  }
  return isFind;
}

function checkIsSameUserName(userName) {
  let sameUser = users.find(
    (item) => item.kullaniciAdi === userName.kullaniciAdi
  );
  return !!sameUser; //sameUser!==undefined demek
}

module.exports = {
  getAllUsers,
  createNewUser,
  findUser,
  checkIsSameUserName,
};
