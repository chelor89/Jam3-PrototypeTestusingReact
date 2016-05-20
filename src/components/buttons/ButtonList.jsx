var React = require('react');
var Button = require('./Button.jsx');
var Hamburger = require('./Hamburger.jsx');


var ButtonList = React.createClass({
  boundClick: function(name){
    return this.props.handleClick.bind(null, name);
  },
  eachButton: function(item){
    if (item.name != "Image") {
      if (this.props.size == "big"){
        return <Button key={item.id} ref={item.name} name={item.name}
        click={this.boundClick(item.name)}/>
      }else {
        return (
          <a key={item.id} onClick={this.boundClick(item.name)}>{item.name}</a>
        )
      }
    }
  },
  render: function(){
    var buttons = this.props.views.map(this.eachButton)
    if (this.props.size == "big"){
      return <div id='buttons'><div>{buttons}</div></div>
    }else {
      return <Hamburger buttons={buttons} />
    }
  }
});

module.exports = ButtonList;
