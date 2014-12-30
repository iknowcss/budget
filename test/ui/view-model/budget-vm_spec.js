define([
  'lodash',
  'vm/budget-vm',
  'vm/category-vm'
], function (_, Budget, Category) {

  describe('Budget view-model', function () {

    /// - Mock server ----------------------------------------------------------

    before(function () {
      var mockData = [
        {
          icon: 'house',
          description: 'Home',
          color: '#aaccaa',
          lineItems: []
        }, {
          icon: 'car',
          description: 'Car',
          color: '#aaaacc',
          lineItems: []
        }
      ];

      this.server = sinon.fakeServer.create();
      this.server.respondWith('GET', '/budget/categories', [
        200, { 'Content-Type': 'application/json' }, 
        JSON.stringify(mockData)
      ]);
    });

    /// - Tests ----------------------------------------------------------------

    it('initializes properly without the "new" keyword', function () {
      expect(Budget()).to.be.an.instanceOf(Budget);
    });

    it('loads categories from the server on init', function () {
      var budget = new Budget({
        categoriesUrl: '/budget/categories'
      });

      // Should start out empty
      expect(budget.categories()).to.be.empty;

      // Digests categories on successful response
      this.server.respond();
      var categories = budget.categories()
      expect(categories).to.have.length(2);
      expect(categories[0]).to.be.an.instanceOf(Category);
      expect(categories[1]).to.be.an.instanceOf(Category);
    });

    /// - Tear down mock server ------------------------------------------------

    after(function () {
      this.server.restore();
    });

  });

});