define(['lodash', 'knockout', 'knockout-postbox'], function (_, ko) {

  var FREQ_OPTIONS = [
    { text: 'day',    value: 'day' },
    { text: 'week',   value: 'wk.' },
    { text: 'month',  value: 'mo.' },
    { text: 'year',   value: 'yr.' }
  ];

  var lineItemFocus = ko.observable().subscribeTo('line-item-focus');

  function LineItem(options) {
    if (!(this instanceof LineItem)) {
      return new LineItem(options);
    }

    var self = this;
    options = _.extend({}, options);
    self.id = options.id;
    self.descriptionHasFocus = ko.observable(false);
    self.mode = ko.computed(function () {
      if (lineItemFocus() == self.id) {
        return 'edit';
      } else {
        return 'view';
      }
    });
    self.description = ko.observable(options.description);
    self.amount = ko.observable(options.amount).extend({ notify: 'always' });
    self.frequency = ko.observable(options.frequency);
    self.freqOptions = FREQ_OPTIONS;

    self.amountFormatted = ko.computed({
      read: function () {
        return (self.amount() / 100).toFixed(2);
      },
      write: function (newValue) {
        var intValue = parseInt((parseFloat(newValue) * 100).toFixed(0), 10);
        if (isNaN(intValue)) {
          intValue = self.amount();
        }
        self.amount(-1);
        self.amount(intValue);
      }
    });

    self.startEdit = function () {
      ko.postbox.publish('line-item-focus', self.id);
    };
  }

  return LineItem;

});