require(['knockout'], function (ko) {

  ko.components.register('categories', {
    template: { require: 'text!template/categories-template.html' }
  });

});