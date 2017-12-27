var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function (e) {
    e.preventDefault(); // prevent page reloading

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = ''; // clear the form value in the browser
      this.props.onSearch(location); // parent function onSearch
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
