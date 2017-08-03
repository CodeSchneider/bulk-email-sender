module.exports = {

  show_csv: function(req,res) {
    return res.view('import/csv');
  },

  import_csv: function(req,res) {
    sails.log.info('** starting csv import **');
    req.file('csv_file').upload({
      adapter: require('skipper-csv'),
      csvOptions: {delimiter: ',', columns: true},
      rowHandler: function(row, fd){
        var userObj = {
          firstName: row['First name'],
          lastName: row['Last name'],
          position: row['Position'],
          company: row['Company'],
          industry: row['Industry'],
          companySize: row['Company size'],
          emailAddress: row['Email address'],
          website: row['Website'],
          linkedinURL: row['LinkedIn URL']
        };
        User.create(userObj).exec(function(err, user){
          if (err) {
            sails.log.error(err);
            return;
          }
          sails.log.info('Added '+row['First name']+' '+row['Last name']+' to database.');
          return;
        });
      }
    }, function (err, files) {
      if (err) {
        return res.send(500);
      }
      return res.redirect('/users');
    });
  }

}
