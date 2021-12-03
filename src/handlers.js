import Data from './data.js';

class Handlers {
  static handleCheckBoxChange(e) {
    if (e.target.tagName === 'INPUT') {
      const { updateData } = Data;
      const status = e.target.checked;
      const index = e.target.getAttribute('data-index');

      updateData(status, index);
    }
  }
}

export default Handlers;