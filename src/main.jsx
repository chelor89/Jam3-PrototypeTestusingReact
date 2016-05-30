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
      positions = viewArr.map(function(item){
        var object = document.getElementById(item.name);
        return {top: object.offsetTop, bottom: object.offsetTop + object.offsetHeight}
      }.bind(this));
    }, 800);

    window.onscroll = function(){
      var docMiddle = document.body.scrollTop + window.innerHeight / 2;
      //console.log({middle: docMiddle, top: document.body.scrollTop, height: window.innerHeight});
      var i = 0;

      do{
        i++;
        if (docMiddle > positions[i].top && docMiddle < positions[i].bottom){
          if (actual != viewArr[i].name){
            actual = viewArr[i].name;
            //console.log({name: viewArr[i].name, middle: docMiddle, divTop: positions[i].top, divBottom: positions[i].bottom});
            window.history.pushState(viewArr[i].name, viewArr[i].name, "/" + viewArr[i].name);
          }
        }
      }while(viewArr.length > i + 1 && !(docMiddle > positions[i].top && docMiddle < positions[i].bottom))
    }
  },
  getInitialState: function(){
    return {open: false};
  },
  handleMBClick: function(item){
    var dest = document.getElementById(item).offsetTop;
    scroll.scrollTo(dest);
    window.history.pushState(item, item, "/" + item);
    this.setState({open: false});
  },
  mobileCheck: function(){
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      return "small";
    }else {
      return "big";
    }
  },

  render: function(){
    return (
      <div >
      <ButtonList handleClick={this.handleMBClick} views={viewArr} size={this.mobileCheck()} open={this.state.open} />
      <ViewList views={viewArr} size={this.mobileCheck()} />
      <Footer />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('page'));
