import React, { memo } from 'react';

const Input = memo(props => {
  const inputRef = React.createRef();
  const onSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;
    name ? props.onAdd(name) : alert('Please enter your habit');
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  
  return(
    <form className="add-form" onSubmit={onSubmit}>
      <input type="text" ref={inputRef} className="add-input" placeholder="add habit" />
      <button className="add-button"><span><i className="fas fa-pen-square"></i></span></button>
    </form>
  );
});

export default Input;