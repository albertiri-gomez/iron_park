const isLoggedIn = (redirectRoute = "/login") => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).json({ message: "Session not saved" });
  }
};

const isLoggedOut = (redirectRoute = "/") => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    return res.status(401).json({ message: "Session not saved" });
  }
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
