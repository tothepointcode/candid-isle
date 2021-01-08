import React, { useState, useEffect } from "react";

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

import { View, Text, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const Home = () => {
  // todo initial list
  const todoList = [
    { title: "Go and get some snacks", date: "", key: "1" },
    { title: "Go shopping", date: "", key: "2" },
    { title: "Create a new video", date: "", key: "3" },
  ];
  const [todos, setTodos] = useState(todoList);

  // Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // function to add new todo
  const addTodo = (todo) => {
    const newTodoList = [...todos, todo];
    setTodos(newTodoList);
    setModalVisible(false);
  };

  // edit existing todo item
  const editTodo = (todo) => {};

  // delete todo item
  // const deleteTodo = (todo) => {};

  

  return (
    <>
      <Header />
      <ListItems todos={todos} setTodos={setTodos} />

      <InputModal
        addTodo={addTodo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      
    </>
  );
};

export default Home;
