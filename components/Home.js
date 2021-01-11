import React, { useState, useEffect } from "react";

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {
  // todo initial list
  const initialTodos = [
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
  const [todos, setTodos] = useState(initialTodos);

  // Modal visibility & input value
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  // function to add new todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
    console.log(todos);
  };

  // edit existing todo item
  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setInputTodoValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoToBeEdited(null);
    setModalVisible(false);
  };

  // clear all todos
  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />

      <InputModal
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
