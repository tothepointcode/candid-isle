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
    {
      title: "Go and get some snacks",
      date: "Fri, 08 Jan 2021 16:32:11 GMT",
      key: "1",
    },
    { title: "Go shopping", date: "Fri, 08 Jan 2021 16:34:11 GMT", key: "2" },
    {
      title: "Create a new video",
      date: "Fri, 08 Jan 2021 16:34:11 GMT",
      key: "3",
    },
  ];
  const [todos, setTodos] = useState(todoList);

  // Modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [todoValue, setTodoValue] = useState();

  // function to add new todo
  const addTodo = (todo) => {
    const newTodoList = [...todos, todo];
    setTodos(newTodoList);
    setModalVisible(false);
  };

  // edit existing todo item
  const [editItem, setEditItem] = useState(null);

  const triggerEdit = (item) => {
    setEditItem(item);
    setModalVisible(true);
    setTodoValue(item.title);
  };

  const editTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setEditItem(null);
    setModalVisible(false);
  };

  // clear all todos
  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <Header clearTodos={clearTodos} />
      <ListItems triggerEdit={triggerEdit} todos={todos} setTodos={setTodos} />

      <InputModal
        addTodo={addTodo}
        editItem={editItem}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        editTodo={editTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
