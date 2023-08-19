import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "./store/UserReducer";
import UserDisplay from "./UserDisplay";
import { POST_TYPE } from "./store/PostReducer";
import PostDisplay from "./PostDisplay";

function App() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const [postId, setPostId] = useState(0);
  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userId", userIdFromInput);
    setUserId(userIdFromInput);

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find(
        (userItem: any) => userItem && userItem.id === userIdFromInput
      );
      if (usr) {
        dispatch({
          type: USER_TYPE,
          payload: {
            id: usr.id,
            username: usr.username,
            email: usr.email,
            city: usr.address.city,
          },
        });
      }
    }
  };

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const postIdFromInput = Number(e.target.value);
      setPostId(postIdFromInput);

      const psotResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + postIdFromInput
      );
      const post = await psotResponse.json();
      if (post) {
        console.log("post", post, post.id, typeof post.id);
        dispatch({
          type: POST_TYPE,
          payload: {
            id: post.id,
            title: post.title,
            body: post.body,
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>Identyfikator uytkownika</label>
          <input value={userId} onChange={onChangeUserId} />
        </div>
        <UserDisplay />
      </div>
      <br />
      <div style={{ width: "300px" }}>
        <div className="App">
          <label>Identyfikator wpisu</label>
          <input value={postId} onChange={onChangePostId} />
        </div>
        <PostDisplay />
      </div>
    </React.Fragment>
  );
}

export default App;
