import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [ formData, setFormData ] = useState({
    text: ""
  })
  const dispatch = useDispatch();

  const onFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(todoAdded(formData))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        >
        <p>
          <label>add todo</label>
          <input 
            type="text" 
            value={formData.todo}
            name="text"
            onChange={onFormChange}
            />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
