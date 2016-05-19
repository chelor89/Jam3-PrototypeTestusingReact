var React = require('react');

var ViewList = React.createClass({
  eachView: function(item){
    var colorClass = "colorO";
    if (item.id % 2 == 0)
      colorClass = "colorE";
    return <div id={item.name} key={item.id} className={colorClass}> <item.type /> </div>
  },
  render: function(){
    var views = this.props.views.map(this.eachView);
    return <div className='view'>{views}</div>
  }
});

module.exports = ViewList;
