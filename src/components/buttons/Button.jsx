var React = require('react');

var Button = React.createClass({
  render: function(){
    return ( <button type="button" className="mainButton"
    onClick={this.props.click}>{this.props.name}</button> )
  }
});

module.exports = Button;
