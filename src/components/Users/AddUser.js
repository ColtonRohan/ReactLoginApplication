import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wraper from "../Helpers/Wraper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [showErrorModal, setShowErrorModal] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid input",
      });
      return;
    }
    if (+enteredAge < 1) {
      setShowErrorModal({
        title: "Invalid Age",
        message: "Please enter an age that is greater then 0",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  const errorHandler = () => {
    setShowErrorModal(null);
  };

  return (
    <Wraper>
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
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age ( Years )</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wraper>
  );
};

export default AddUser;
