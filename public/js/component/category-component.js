require(['knockout'], function (ko) {

  ko.components.register('category', {
    template: { require: 'text!template/category-template.html' }
  });

});