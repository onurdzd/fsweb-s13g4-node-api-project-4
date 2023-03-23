const User = require("../users/users-model.js");

const logger = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] method:${req.method} url:${req.url}`
  );
  next();
};

function checkSameUserName(req, res, next) {
  try {
    const { kullaniciAdi } = req.body;
    const isSame = !!kullaniciAdi && User.checkIsSameUserName(kullaniciAdi); //kullancıadı girdiyse(undefined değilse) ve aynısıysa
    if (isSame) {
      res.status(400).json({ message: "aynı kullanıcı adı bulunuyor" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateNewUser(res, req, next) {
  try {
    if (!kullaniciAdi || !sifre) {
      res.status(400).json({ message: "eksik alan var" });
    } else {
      req.user = { kullaniciAdi: kullaniciAdi, sifre: sifre };
      next();
    }
  } catch (error) {
    next(error);
  }
  const { kullaniciAdi, sifre } = req.body;
}

function isValidUser(req, res, next) {
  try {
    let user = { kullaniciAdi: req.body.kullaniciAdi, sifre: req.body.sifre };
    const isExist = User.findUser(user);
    if (!isExist) {
      res.status(404).json({ message: "böyle bir kullanıcı yok" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { logger, checkSameUserName, validateNewUser, isValidUser };
