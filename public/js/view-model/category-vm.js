define([
  'knockout',
  'lodash',
  'vm/line-item-vm',
  'vm/empty-line-item-vm'
], function (ko, _, LineItem, EmptyLineItem) {

  function Category(options) {
    if (!(this instanceof Category)) {
      return new Category(options);
    }

    var self = this;
    options = _.extend({}, options);
    self.icon = options.icon;
    self.color = options.color;
    self.description = ko.observable(options.description);
    self.lineItems = ko.observableArray(_.map(options.lineItems, LineItem));
    self.emptyLineItem = new EmptyLineItem();

    self.total = ko.pureComputed(function () {
      return _.reduce(self.lineItems(), function (sum, item) {
        return sum + item.amount();
      }, 0);
    });

    self.totalFormatted = ko.pureComputed(function () {
      return (self.total() / 100).toFixed(2);
    });

    self.addLineItem = function () {
      var newOptions = ko.toJS(self.emptyLineItem);
      newOptions.description = $.trim(newOptions.description);
      if (newOptions.description) {
        self.lineItems.push(new LineItem(newOptions));
        self.emptyLineItem.reset();
        self.emptyLineItem.descriptionHasFocus(true);
      }
    };
  }

  return Category;

});