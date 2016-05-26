var React = require('react');
var Button = require('./Button.jsx');
var Menu = require('react-burger-menu').slide;


var ButtonList = React.createClass({
  boundClick: function(name){
    return this.props.handleClick.bind(null, name);
  },
  eachButton: function(item){
      if (this.props.size == "big"){
        return <Button key={item.id} ref={item.name} name={item.name}
        click={this.boundClick(item.name)}/>
      }else {
        return (
          <div className="menu-item" onClick={this.boundClick(item.name)} key={item.id}>
            <a >{item.name}</a>
          </div>
        )
      }
  },
  render: function(){
    var buttons = this.props.views.slice(1).map(this.eachButton)
    if (this.props.size == "big"){
      return <div id='buttons'><div>{buttons}</div></div>
    }else {
      return (
          <Menu right width={200}>
            {buttons}
          </Menu>

      )
    }
  }
});

module.exports = ButtonList;
