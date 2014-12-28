require(['knockout'], function (ko) {

  ko.components.register('line-item-view', {
    template: { require: 'text!template/line-item-view-template.html' }
  });

  ko.components.register('line-item-edit', {
    template: { require: 'text!template/line-item-edit-template.html' }
  });

});