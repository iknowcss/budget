define(['knockout'], function (ko) {

  function LineItem(options) {
    if (!(this instanceof LineItem)) {
      return new LineItem(options);
    }

    var self = this;
    self.mode = ko.observable('view');
    self.description = ko.observable(options.description);
    self.amount = ko.observable(options.amount);
    self.frequency = ko.observable(options.frequency);

    self.enableEdit = function () {
      self.mode('edit');
    };
  }

  return LineItem;

});