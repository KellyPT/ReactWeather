var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {temp, location} = this.props; // ES6 destructuring
//     return (
//       <h3>It is {temp} degree in {location}.</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} degree in {location}.</h3>
  );
};

module.exports = WeatherMessage;
