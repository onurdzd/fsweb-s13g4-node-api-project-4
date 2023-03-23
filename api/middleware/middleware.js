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
    }
    next();
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
    }
    next();
  } catch (error) {
    next(error);
  }
  const { kullaniciAdi, sifre } = req.body;
}

module.exports = { logger, checkSameUserName, validateNewUser };
