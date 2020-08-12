import React from 'react';

const TodoDetail = (props) => {
  const {
    location: {
      state: { id, text, done },
    },
  } = props;
  return (
    <>
      <h2>{id}</h2>
      <h4>{text}</h4>
      <h6>{done ? 'Done' : 'Not Done'}</h6>
    </>
  );
};

export default TodoDetail;
