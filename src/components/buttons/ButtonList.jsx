var React = require('react');
var Button = require('./Button.jsx');
var Menu = require('react-burger-menu').push;
var Tween = require('gsap');

var ButtonList = React.createClass({

  getInitialState: function(){
    return{
      styles: {}
    }
  },

  componentWillReceiveProps: function(){
    if (!this.props.mobile)
      this.setState({styles: this._handleStick(this.props.sticky)});
  },

  _handleStick: function(sticky){

    var buttons = document.getElementById('buttons');
    var buttonsHeight = buttons.offsetHeight;

    if (!sticky){
      Tween.fromTo(buttons, 1, {top: -buttonsHeight},{position: 'fixed', top: 0, ease: Expo.easeOut});
      return {position: 'fixed'};
    }else{
      return {position: 'relative'};
    }

  },

  _eachButton: function(item){
      var boundClick = this.props.handleClick.bind(null, item.name);
      if (!this.props.mobile){
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
    var buttons = this.props.views.slice(1).map(this._eachButton);
        console.log('render');
    if (!this.props.mobile){
      return <div id='buttons' style={this.state.styles}><div>{buttons}</div></div>
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
