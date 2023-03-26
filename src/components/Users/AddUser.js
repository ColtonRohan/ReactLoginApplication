import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [newUser, setNewUser] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (newUser.trim().length === 0 || newUserAge.trim().length === 0) {
      setShowErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid input",
      });
      return;
    }
    if (+newUserAge < 1) {
      setShowErrorModal({
        title: "Invalid Age",
        message: "Please enter an age that is greater then 0",
      });
      return;
    }
    props.onAddUser(newUser, newUserAge);
    setNewUser("");
    setNewUserAge("");
  }

  const newUserChangeHandler = (event) => {
    setNewUser(event.target.value);
  };

  const newUserAgeChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  const errorHandler = () => {
    setShowErrorModal(null);
  };

  return (
    <div>
      {showErrorModal && (
        <ErrorModal
          title={showErrorModal.title}
          message={showErrorModal.message}
          closeModal={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={newUser}
            onChange={newUserChangeHandler}
          />
          <label htmlFor="age">Age ( Years )</label>
          <input
            type="number"
            id="age"
            value={newUserAge}
            onChange={newUserAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
