import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {

    switch (comment.status) {
      case 'approved':
        return <li key={comment.id}>{comment.content}</li>;
        break;
      
      case 'rejected':
        return <li key={comment.id}><i className="text-danger">this comment is rejected</i></li>;  
        break;
      
      case 'pending':
        return <li key={comment.id}><i className="text-warning">this comment is waiting to be approved</i></li>;
        break;
    }

    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
