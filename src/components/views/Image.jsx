var React = require('react');

var Image = React.createClass({
  render: function(){
    var styles = {
      display: 'block',
      height: '400px',
      margin: '0 auto'
    };
    return (
      <img src="media/jam3Logo.gif" alt="Jam3 Logotype" style={styles} />
    )
  }
});

module.exports = Image;
