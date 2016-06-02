var React = require('react');

var Image = React.createClass({

  render: function(){
    var imageURL = "/Jam3Test/public/media/jam3Logo.gif";
    if (this.props.size == "small")
      imageURL = "/Jam3Test/public/media/jam3LogoM.gif";

    return <img src={imageURL} alt="Jam3 Logotype" />
  }

});

module.exports = Image;
