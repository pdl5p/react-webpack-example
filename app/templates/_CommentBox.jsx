// CommentBox.jsx

'use strict';

var React = require('react');
var CommentForm = require('./CommentForm.jsx');
var CommentList = require('./CommentList.jsx');
var CommentBox;

module.exports = CommentBox = React.createClass({
 render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});