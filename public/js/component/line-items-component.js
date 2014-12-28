require(['knockout'], function (ko) {

  ko.components.register('line-items', {
    template: { require: 'text!template/line-items-template.html' }
  });

});