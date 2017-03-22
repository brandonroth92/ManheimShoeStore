function page() {
}

page.prototype.open = function (path='') {
  browser.url('http://shoestore-manheim.rhcloud.com/' + path);
};

module.exports = new page();