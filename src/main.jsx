var React = require('react');
var ReactDOM = require('react-dom');
var Scroll = require('react-scroll');
var View = require('./components/View.jsx');
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
{"id":3,"name":"Twitter","type":Twitter},{"id":4,"name":"Carrousel","type":Carrousel},
{"id":5,"name":"Share","type":Share}];


var Main = React.createClass({
  handleMBClick: function(item){
    var dest = document.getElementById(item).offsetTop;
    scroll.scrollTo(dest);
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
      <ButtonList handleClick={this.handleMBClick} views={viewArr} size={this.mobileCheck()} />
      <ViewList views={viewArr} />
      <Footer />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('page'));
