define(['knockout', 'knockout-postbox'], function (ko) {

  var FREQ_OPTIONS = [
    { text: 'hour',   value: 'hr.' },
    { text: 'day',    value: 'day' },
    { text: 'week',   value: 'wk.' },
    { text: 'month',  value: 'mo.' },
    { text: 'year',   value: 'yr.' }
  ];

  function LineItem(options) {
    if (!(this instanceof LineItem)) {
      return new LineItem(options);
    }

    var self = this;
    self.id = options.id;
    self.mode = ko.observable('view');
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

    ko.postbox.subscribe('line-item-focus', function (id) {
      if (id == self.id) {
        self.mode('edit');
      } else {
        self.mode('view');
      }
    });
  }

  return LineItem;

});