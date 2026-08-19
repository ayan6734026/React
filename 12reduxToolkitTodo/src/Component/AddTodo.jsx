import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../Reducers/todoSlice";

function AddTodo({
  isEditable,
  setIsEditable,
  editId,
  setEditId,
  inputmsg,
  setInputMsg,
}) {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (isEditable) {
      dispatch(
        updateTodo({
          id: editId,
          text: inputmsg,
        }),
      );
      setIsEditable(false);
      setEditId(null);
    } else {
      dispatch(addTodo(inputmsg));
    }

    setInputMsg("");
  };

  return (
    <div className="text-center">
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="h-auto w-100 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={inputmsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {isEditable ? "updateTodo" : "addTodo"}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
