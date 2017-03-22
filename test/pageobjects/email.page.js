var page = require('./page');

var emailPage = Object.create(page, {
  
  // get email form elements
  emailForm: { get: function () { return browser.element('#remind_email_form'); } },
  emailInput: { get: function () { return browser.element('#remind_email_input'); } },
  emailSubmit: { get: function () { return browser.element('#remind_email_form input[type="submit"]'); } },
  
  // get notice returned upon submission of form
  emailNotice: { get: function () { return browser.element('.notice'); } },
  compareInvalid: { value: 'Thanks! We will notify you of our new shoes at this email: invalid-email' },
  compareValid: { value: 'Thanks! We will notify you of our new shoes at this email: valid@gmail.com' }
});

module.exports = emailPage;