import { useState } from "react";

//This code defines a functional component NewTodoForm that renders a form for adding a new item to a todo list. It uses the useState hook to keep track of the value of the input field where the user enters the new item text. When the user submits the form, the handleSubmit function is called. If the newItem state is empty, it returns early without doing anything. Otherwise, it calls the onSubmit function that is passed to the component as a prop, with the newItem state as its argument. Finally, it clears the newItem state to an empty string.
// The JSX markup for the form includes a label and an input field for the new item text, and a submit button. The value prop of the input field is set to the newItem state, and the onChange prop is set to a function that updates the newItem state with the new value entered by the user. The onSubmit prop of the form is set to the handleSubmit function defined in the component.

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          id='item'
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  );
}
