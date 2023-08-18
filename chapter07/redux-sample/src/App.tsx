import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from "./UserDisplay"

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const onChangeuserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userId", userIdFromInput);
    setUserId(userIdFromInput);

    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => userItem && userItem.id === userIdFromInput);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      });
    }
  }

  return (
    <React.Fragment>
    <div className="App">
      <label>Identyfikator uytkownika</label>
      <input value={userId} onChange={onChangeuserId} />
    </div>
    <UserDisplay />
    </React.Fragment>
  );
}

export default App;
