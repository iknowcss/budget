define(['knockout', 'lodash', 'vm/line-item-vm'], function (ko, _, LineItem) {

  function Category(options) {
    if (!(this instanceof Category)) {
      return new Category(options);
    }

    var self = this;
    self.icon = options.icon;
    self.color = options.color;
    self.description = ko.observable(options.description);
    self.lineItems = ko.observableArray(_.map(options.lineItems, LineItem));
    self.newLineItem = new LineItem();
  }

  return Category;

});