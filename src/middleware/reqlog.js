const requestLog = (req, res, next) => {
  console.log("Log : Terjadi Request ke API ini", req.path);
  // jangan lupa untuk melanjutkan agar tidak terjadi loading
  next();
};

module.exports = requestLog;
