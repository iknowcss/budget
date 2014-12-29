require(['knockout'], function (ko) {

  ko.components.register('line-item', {
    template: { require: 'text!template/line-item-template.html' }
  });

});