module.exports = {

  all: function(req,res) {
    User.find().exec(function(err, users) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.view('user/show_all', { users: users, total: users.length })
    })
  },

  unsent: function(req,res) {
    User.find().where( { wasEmailed: false} ).exec(function(err, users) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.view('user/show_unsent', { users: users, total: users.length });
    });
  },

  show: function(req,res) {
    var userId = req.param('id');
    User.findOne( { id: userId } ).exec(function(err, user) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.view('user/show_one', { user: user });
    });
  },

  new: function(req,res) {
    return res.view('user/new');
  },

  edit: function(req,res) {
    var userId = req.param('id');
    User.findOne( { id: userId } ).exec(function(err, user) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.view('user/edit', { user: user });
    });
  },

  create: function(req,res) {
    var userObj = {
      firstName: req.param('firstName'),
      lastName: req.param('lastName'),
      position: req.param('position'),
      company: req.param('company'),
      industry: req.param('industry'),
      companySize: req.param('companySize'),
      emailAddress: req.param('emailAddress'),
      website: req.param('website'),
      linkedinURL: req.param('linkedinURL')
    };
    User.create(userObj).exec(function(err,user) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.redirect('/users');
    });
  },

  update: function(req,res) {
    var userId = req.param('id');
    var userObj = {
      firstName: req.param('firstName'),
      lastName: req.param('lastName'),
      position: req.param('position'),
      company: req.param('company'),
      industry: req.param('industry'),
      companySize: req.param('companySize'),
      emailAddress: req.param('emailAddress'),
      website: req.param('website'),
      linkedinURL: req.param('linkedinURL')
    };
    User.update( { id: userId }, userObj).exec(function(err, user) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.redirect('/users');
    });
  },

  destroyUser: function(req,res) {
    var userId = req.param('id');
    User.destroy(userId).exec(function(err) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.redirect('/users');
    });
  },

  destroyAllUsers: function(req,res) {
    sails.log.info('destroying all users...');
    User.destroy().exec(function(err) {
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.redirect('/users');
    })
  },




}
