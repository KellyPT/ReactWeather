var React = require('react');
var Nav = require('Nav');
var InfoModal = require('InfoModal');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div classname="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
      <InfoModal/>
    </div>
  );
};

module.exports = Main;
