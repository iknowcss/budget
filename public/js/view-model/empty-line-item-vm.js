define(['knockout', 'vm/line-item-vm'], function (ko, LineItem) {

  function EmptyLineItem() {
    var self = new LineItem();

    self.mode = ko.observable('edit');

    self.reset = function () {
      self.id = generateUuid();
      self.description('');
      self.amount(0);
      self.frequency('mo.');
    };

    self.reset();

    return self;
  }

  return EmptyLineItem;

});