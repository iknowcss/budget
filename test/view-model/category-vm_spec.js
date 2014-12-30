define([
  'vm/category-vm',
  'vm/line-item-vm',
  'vm/empty-line-item-vm'
], function (Category, LineItem, EmptyLineItem) {

  describe('Category view-model', function () {

    /// - Tests ----------------------------------------------------------------

    it('initializes properly without the "new" keyword', function () {
      expect(Category()).to.be.an.instanceOf(Category);
    });

    it('initializes with options', function () {
      var category = new Category({
        icon: 'house',
        color: '#aaccaa',
        description: 'Home',
        lineItems: []
      });

      expect(category.icon).to.equal('house');
      expect(category.color).to.equal('#aaccaa');
      expect(category.description()).to.equal('Home');
      expect(category.lineItems()).to.be.empty;
    });

    it('has computed fields to sum the line-item totals', function () {
      var category = new Category({
        lineItems: [
          { amount: 100 },
          { amount: 200 },
          { amount: 300 },
        ]
      });

      expect(category.lineItems()).to.have.length(3);
      expect(category.total()).to.equal(600);
      expect(category.totalFormatted()).to.equal('6.00');

      category.lineItems()[0].amount(333);
      expect(category.lineItems()).to.have.length(3);
      expect(category.total()).to.equal(833);
      expect(category.totalFormatted()).to.equal('8.33');
    });

    it('adds a new line-item from the data in the empty line-item', function () {
      var category = new Category({
        lineItems: [
          { amount: 100 },
          { amount: 200 },
          { amount: 300 },
        ]
      });

      // Surround with whitespace and ensure whitespace is trimmed
      category.emptyLineItem.description(' New item  ');
      category.emptyLineItem.amountFormatted('4.33');
      category.emptyLineItem.frequency('yr.');
      category.addLineItem();

      var lineItems = category.lineItems();
      expect(lineItems).to.have.length(4);
      expect(lineItems[3].description()).to.equal('New item');
      expect(lineItems[3].amount()).to.equal(433);
      expect(lineItems[3].frequency()).to.equal('yr.');
      expect(category.emptyLineItem.descriptionHasFocus()).to.be.true;
    });

    it('does not add a new line-item if the empty line-item description is empty', function () {
      var category = new Category();
      category.emptyLineItem.description('   ');
      category.addLineItem();

      expect(category.lineItems()).to.have.length(0);
    });

  });

});