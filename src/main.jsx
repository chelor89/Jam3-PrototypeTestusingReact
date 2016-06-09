var React = require('react');
var ReactDOM = require('react-dom');
var Scroll = require('react-scroll');
var Image = require('./components/views/Image.jsx');
var Text = require('./components/views/Text.jsx');
var Twitter = require('./components/views/Twitter.jsx');
var Carrousel = require('./components/views/Carrousel.jsx');
var Share = require('./components/views/Share.jsx');
var ButtonList = require('./components/buttons/ButtonList.jsx');
var ViewList = require('./components/ViewList.jsx');
var Footer = require('./components/Footer.jsx');

var scroll = Scroll.animateScroll;

//viewArr = array of views. (Each view is a component)
var viewArr = [{"id":1,"name":"Image","type":Image},{"id":2,"name":"Text", "type":Text},
{"id":3,"name":"Twitter","type":Twitter},{"id":4,"name":"Carousel","type":Carrousel},
{"id":5,"name":"Share","type":Share}];

var actual = "";

var Main = React.createClass({
  componentDidMount: function(){

    var positions = [];

    setTimeout(function() {
      positions = viewArr.map(item => {
        var object = document.getElementById(item.name);
        return {top: object.offsetTop, bottom: object.offsetTop + object.offsetHeight}
      });
    }, 800);

    window.onscroll = function(){
      var viewsTop = document.getElementById('views').offsetTop;
      var docTop = document.body.scrollTop;
      var docMiddle = docTop + window.innerHeight / 2;
      //console.log({middle: docMiddle, top: document.body.scrollTop, height: window.innerHeight});
      if (docTop > viewsTop){
        if (!this.state.stickyButtons)
          this.setState({stickyButtons: true});
        // buttons.setAttribute("style", "position: fixed");
      }else {
        if (this.state.stickyButtons)
          this.setState({stickyButtons: false});
      }

      var i = 0;
      do{
        i++;
        if (docMiddle > positions[i].top && docMiddle < positions[i].bottom){
          if (actual != viewArr[i].name){
            actual = viewArr[i].name;
            //console.log({name: viewArr[i].name, middle: docMiddle, divTop: positions[i].top, divBottom: positions[i].bottom});
            window.history.pushState(viewArr[i].name, viewArr[i].name, "/Jam3Test/#"+ viewArr[i].name);
          }
        }
      }while(viewArr.length > i + 1 && !(docMiddle > positions[i].top && docMiddle < positions[i].bottom))
    }.bind(this)
  },
  getInitialState: function(){
    return {
      open: false,
      stickyButtons: false
      };
  },
  _handleMBClick: function(item){
    var dest = document.getElementById(item).offsetTop;
    scroll.scrollTo(dest);
    window.history.pushState(item, item, "/Jam3Test/#" + item);
    if (this._mobileCheck()){
      this.setState({open: false});
    }
  },
  _mobileCheck: function(){
    return ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );
  },

  render: function(){
    return (
      <div >
      <ButtonList handleClick={this._handleMBClick} views={viewArr} mobile={this._mobileCheck()} open={this.state.open} sticky={this.state.stickyButtons} />
      <ViewList views={viewArr} mobile={this._mobileCheck()} />
      <Footer />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('page'));
