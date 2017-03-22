var page = require('./page');
var months = require('../util/months');

var monthPage = Object.create(page, {
  
  // description elements
  shoeDescriptions: { get: function () { return browser.elements('.shoe_description'); } },
  compareDescription: { value: `A scintillating mix of crystals casts flashbulb dazzle across a red carpet–ready pump, perched atop a slim heel. Jimmy Choo 'Kendall' Crystal Pump Jimmy Choo Jimmy Choo Pumps Shoes Approx. heel height: 5 3/4" with 1 1/2" platform (comparable to a 4 1/4" heel). Measurements taken from size 39 EU and may vary slightly by size. Metallic leather upper/leather lining and sole. Made in Italy. Salon Shoes.` },
  
  // image elements
  shoeImages: { get: function () { return browser.elements('.shoe_image img'); } },
  compareImage: { value: 'http://content.nordstrom.com/ImageGallery/store/product/Thumbnail/2/_7548482.jpg' },
  
  // price elments
  shoePrices: { get: function () { return browser.elements('.shoe_price'); } },
  comparePrice: { value: '$2,995.00' },
  
  // month pages
  monthList: { value: months },
  shoeListItem: { get: function () { return browser.element('#shoe_list li'); } },
  
  // define or overwrite page methods
  open: { value: function (input='months/january') {
    page.open.call(this, input);  
  } }
  
});

module.exports = monthPage;