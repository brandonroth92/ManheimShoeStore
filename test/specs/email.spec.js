var emailPage = require('../pageobjects/email.page');

describe('email submission form', function () {
  
  it('should exist and allow users to submit an email address', function () {
    emailPage.open();
    expect(emailPage.emailForm).to.exist;
    expect(emailPage.emailInput).to.exist;
    expect(emailPage.emailSubmit).to.exist;
  });
  
  it('should check that the email address submitted is valid', function () {
    emailPage.open();
    emailPage.emailInput.setValue('invalid-email');
    emailPage.emailSubmit.click();
    expect(emailPage.emailNotice.getText()).to.not.equal(emailPage.compareInvalid);
  });
  
  it('should send notification message upon valid email address submission', function () {
    emailPage.open();
    emailPage.emailInput.setValue('valid@gmail.com');
    emailPage.emailSubmit.click();
    expect(emailPage.emailNotice.getText()).to.equal(emailPage.compareValid);
  });
  
});