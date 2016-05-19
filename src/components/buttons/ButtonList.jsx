var React = require('react');
var Button = require('./Button.jsx');

var ButtonList = React.createClass({
  eachButton: function(item){
    boundClick = this.props.handleClick.bind(this, item);
    return <Button key={item.id} ref={item.name} name={item.name} click={boundClick}/>
  },
  render: function(){
    var buttons = this.props.views.map(this.eachButton)
    return <div id='buttons'><div>{buttons}</div></div>
  }
});

module.exports = ButtonList;
