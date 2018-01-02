var React = require('react');

var InfoModal = React.createClass({
  getInitialState: function () {
    return {
      showModal: true
    };
  },
  setStorage: function (storageKey, storageValue) {
    var storage = window['localStorage'];
    if (!storage.getItem(storageKey)) {
      storage.setItem(storageKey, storageValue);
    }
  },
  // storageKeyExists: function (storageKey) {
  //   var storage = window['localStorage'];
  //   return !!storage.getItem(storageKey);
  // },
  // showModalIfNeeded: function () {
  //   var storageExists = this.storageKeyExists('infoModal');
  //   this.setState({showModal: !storageExists});
  // },
  componentDidMount: function () {
    if (this.state.showModal) {
      var modal = new Foundation.Reveal($('#info-modal'));
      modal.open();
    }
  },
  render: function () {
    // function alertHello () {
    //   alert('Hello Kelly');
    // }
    var showModal = this.state.showModal;
    if (showModal) {
      return (
        <div id="info-modal" className="reveal tiny text-center" data-reveal="">
          <h4>Info Modal</h4>
          <p>This modal will show only once.</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
        </div>
      );
    } else {
      return (
        <div>No Info Modal available.</div>
      );
    }
  }
});

module.exports = InfoModal;
