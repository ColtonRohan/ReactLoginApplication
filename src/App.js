import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

const defaultUser = [
  {
    name: "Colton",
    age: 24,
    id: "u1",
  },
  {
    name: "bill",
    age: 224,
    id: "u2",
  },
];

// need to edit the user component still
function App() {
  const [usersList, setUsersList] = useState(defaultUser);

  const addUserHandler = (name, age) => {
    setUsersList((prev) => {
      return [...prev, { name: name, age: age, id: Math.random().toString() }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
