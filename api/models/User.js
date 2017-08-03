var uuid = require('node-uuid');

module.exports = {

  autoPK: false,

  attributes: {

    id: {
        type: 'string',
        primaryKey: true,
        defaultsTo: function (){ return uuid.v4(); },
        unique: true,
        index: true,
        uuidv4: true
    },

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    position: {
      type: 'string',
      required: true
    },

    company: {
      type: 'string',
      required: true
    },

    industry: {
      type: 'string',
      required: false
    },

    companySize: {
      type: 'string',
      required: false
    },

    emailAddress: {
      type: 'email',
      required: true,
      unique: true
    },

    website: {
      type: 'string',
      required: true
    },

    linkedinURL: {
      type: 'string',
      required: false
    },

    wasEmailed: {
      type: 'boolean',
      defaultsTo: false
    }

  }

};
