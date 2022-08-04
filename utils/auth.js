const withAuth = (req, res, next) => {
    // helper function to only allow users to do certain things when logged in
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  