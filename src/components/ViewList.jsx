var React = require('react');

var ViewList = React.createClass({
  eachView: function(item){
    var colorClass = "colorO";
    if (item.id % 2 == 0)
      colorClass = "colorE";
    return <div id={item.name} key={item.id} className={colorClass} size={this.props.size}> <item.type size={this.props.size} /> </div>
  },
  render: function(){
    var views = this.props.views.map(this.eachView);
    return <div className='view'>{views}</div>
  }
});

module.exports = ViewList;
