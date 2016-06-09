var React = require('react');

var ViewList = React.createClass({
  _eachView: function(item){
    return <div id={item.name} key={item.id} > <item.type mobile={this.props.mobile} /> </div>
  },
  render: function(){
    var views = this.props.views.map(this._eachView);
    return <div className='view' id='views'>{views}</div>
  }
});

module.exports = ViewList;
