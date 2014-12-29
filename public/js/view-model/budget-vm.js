define([
  'knockout', 
  'lodash', 
  'vm/category-vm'
], function (ko, _, Category) {

  function Budget(options) {
    if (!(this instanceof Budget)) {
      return new Budget(options);
    }

    var self = this;
    options = _.extend({}, options);
    self.categories = ko.observableArray();

    self.loadCategories = function () {
      $.get(options.categoriesUrl)
        .success(self.digestCategories);
    };

    self.digestCategories = function (categories) {
      self.categories(_.map(categories, Category));
    };

    self.loadCategories();
  }

  return Budget;

});