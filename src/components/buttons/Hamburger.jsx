var React = require('react');

var Hamburger = React.createClass({
  getInitialState: function() {
    return {style: {display: 'none'}}
  },
  handleClick: function(){
    if (this.state.style.display == 'none'){
      this.setState({style: {display: 'block'}});
    }else {
      this.setState({style: {display: 'none'}});
    }
  },
  render: function () {
        return (
          <div id='buttons'>
            <div className="dropdown">
              <button onClick={this.handleClick}  className="dropbtn">&#9776; Menu</button>
              <div style={this.state.style} className="dropdown-content">
                {this.props.buttons}
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Hamburger;
