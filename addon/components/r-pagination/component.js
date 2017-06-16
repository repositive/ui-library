import Ember from 'ember';
import layout from 'ui-library/components/r-pagination/template';

const { Component, get, computed } = Ember;

export default Component.extend({
  layout,
  classNames: ['flex', 'justify-center'],

  noPrevPage: computed.equal('currentPageNumber', 1),

  pages: computed('pageNumbers', 'currentPageNumber', function() {
    return this._updatePageNumberList(get(this, 'pageNumbers'), get(this, 'currentPageNumber'), get(this, 'totalPages'));
  }),

  noNextPage: computed('currentPageNumber', 'totalPages', function() {
    return get(this, 'currentPageNumber') >= get(this, 'totalPages');
  }),

  init() {
    this._super(...arguments);
    this.pageNumbers = [1, 2, 3, 4, 5];
  },

  /**
   * @param {Array} pageNumbers
   * @param {Number} currentPageNumber
   * @param {Number} totalPages
   * @returns {Array} pages - the list of page numbers.
   */
  _updatePageNumberList(pageNumbers, currentPageNumber, totalPages) {
    let popValue = 1;

    if (totalPages < 5) {
      popValue = currentPageNumber + 5 - totalPages;
    } else {
      if (currentPageNumber > 2) { popValue = 3; }
      if (currentPageNumber === totalPages - 1) { popValue = 4; } // Penultimate array item
      if (currentPageNumber === totalPages) { popValue = 5; } // End of array - don't allow > totalPages
    }

    return pageNumbers
      .map(page => page + currentPageNumber - popValue)
      .filter(num => num > 0);
  }
});
