var React = require('react');
var Carousel = require('nuka-carousel');

var Carrousel = React.createClass({
  eachImage(){
    var list = [];
    for (i = 1; i <= 7; i++){
        list.push(i);
      };
    return this.buildImages(list);
  },

  buildImages(list) {
    return list.map(function(val){
      return <img src={"media/" + val + ".jpg"} key={val} />;
    })
  },

  render: function(){
    return (
       <Carousel >
      {this.eachImage()}
      </Carousel>
    )
  }
});

module.exports = Carrousel;
