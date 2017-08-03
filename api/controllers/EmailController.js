module.exports = {

  emailAll: function(req,res) {
    console.log('emailing all unemailed users...');
    return res.redirect('/users');
  },

  emailOneUser: function(req,res) {
    console.log('emailing one user...');
    return res.redirect('/users');
  }
}
