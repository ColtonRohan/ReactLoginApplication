import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const defaultUser = {
  username: "Colton",
  age: 24,
};

const AddUser = (props) => {
  const [newUser, setNewUser] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(newUser, newUserAge);
  }

  const newUserChangeHandler = (event) => {
    setNewUser(event.target.value);
  };

  const newUserAgeChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={newUserChangeHandler} />
        <label htmlFor="age">Age ( Years )</label>
        <input type="number" id="age" onChange={newUserAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
