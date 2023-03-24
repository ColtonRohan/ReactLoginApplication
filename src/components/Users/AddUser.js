import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age ( Years )</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
