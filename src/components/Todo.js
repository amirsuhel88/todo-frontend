// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/actions";

function Todo() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div> Error : {error}</div>;
  }

  // const allTodo = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/api/todos");
  //     console.log("Response:", response);
  //   } catch (error) {}
  // };
  // useEffect(() => {
  //   allTodo();
  // });
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
