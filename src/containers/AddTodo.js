import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const mapStateToProps = state => {
  console.log(state);
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch: dispatch };
};

let AddTodo = ({ state, dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodo;
