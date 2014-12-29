define([
  'knockout',
  'util/string-util',
  'vm/line-item-vm'
], function (ko, stringUtil, LineItem) {

  function EmptyLineItem() {
    var self = new LineItem();

    self.mode = ko.observable('edit');

    self.reset = function () {
      self.id = stringUtil.generateUuid();
      self.description('');
      self.amount(0);
      self.frequency('mo.');
    };

    self.reset();

    return self;
  }

  return EmptyLineItem;

});