var React = require('react');
var Button = require('./Button.jsx');
var Menu = require('react-burger-menu').push;


var ButtonList = React.createClass({

  eachButton: function(item){
      var boundClick = this.props.handleClick.bind(null, item.name);
      if (this.props.size == "big"){
        return <Button key={item.id} ref={item.name} name={item.name}
        click={boundClick}/>
      }else {
        return (
          <div className="menu-item" onClick={boundClick} key={item.id}>
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
          <Menu right width={200} isOpen={this.props.open}>
            {buttons}
          </Menu>

      )
    }
  }
});

module.exports = ButtonList;
