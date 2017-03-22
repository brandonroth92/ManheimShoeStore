var monthPage = require('../pageobjects/month.page');

describe('monthly display of new releases', function () {
    
  it('should display a small blurb of each shoe', function () {
    monthPage.open();
    monthPage.shoeDescriptions.value.forEach(function (elem) {
      expect(browser.elementIdText(elem.ELEMENT).value).to.not.equal('');
    });
  });
  
  it('should display the correct blurb', function () {
    monthPage.open();
    expect(monthPage.shoeDescriptions.elementIdText(0).value).to.equal(monthPage.compareDescription);
  });

  it('should display an image of each shoe', function () {
    monthPage.open();
    monthPage.shoeImages.value.forEach(function (elem) {
      expect(browser.elementIdAttribute(elem.ELEMENT, 'src').value).to.not.equal('');
    });
  });
  
  it('should display the correct image', function () {
    monthPage.open();
    expect(monthPage.shoeImages.elementIdAttribute(0, 'src').value).to.equal(monthPage.compareImage);
  });
  
  it('should display a suggested pricing for each shoe', function () {
    monthPage.open();
    monthPage.shoePrices.value.forEach(function (elem) {
      expect(browser.elementIdText(elem.ELEMENT).value).to.not.equal('');
    });
  });
  
  it('should display the correct price', function () {
    monthPage.open();
    expect(monthPage.shoePrices.elementIdText(0).value).to.equal(monthPage.comparePrice);
  });
  
  it('should list shoe releases for every month', function () {
    monthPage.monthList.forEach(function (elem) {
      monthPage.open('months/' + elem);
      expect(monthPage.shoeListItem.value).to.exist;
    });
  });
  
});