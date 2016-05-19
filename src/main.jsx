var React = require('react');
var ReactDOM = require('react-dom');
var Scroll = require('react-scroll');
var View = require('./components/View.jsx');
var Image = require('./components/views/Image.jsx');
var Text = require('./components/views/Text.jsx');
var Twitter = require('./components/views/Twitter.jsx');
var Carrousel = require('./components/views/Carrousel.jsx');
var Facebook = require('./components/views/Facebook.jsx');
var ButtonList = require('./components/buttons/ButtonList.jsx');
var ViewList = require('./components/ViewList.jsx');

var scroll = Scroll.animateScroll;

//viewArr = array of views. (Each view is a component)
var viewArr = [{"id":1,"name":"Image","type":Image},{"id":2,"name":"Text", "type":Text},
{"id":3,"name":"Twitter","type":Twitter},{"id":4,"name":"Carrousel","type":Carrousel},
{"id":5,"name":"Facebook","type":Facebook}];


var Main = React.createClass({
  handleMBClick: function(item){
    var dest = document.getElementById(item.name).offsetTop;
    scroll.scrollTo(dest);
  },
  render: function(){
    return (
      <div >
      <ButtonList handleClick={this.handleMBClick} views={viewArr} />
      <ViewList views={viewArr} />
      </div>
    )
  }
});







ReactDOM.render(<Main />, document.getElementById('page'));
