import React from "react";
import { Text, ScrollView } from "react-native";

// styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  ListContainer,
  colors,
} from "../styles/appStyles";

import { View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

const ListItems = ({ todos, setTodos, triggerEdit }) => {
  // List things
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteTodo = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {todos.length == 0 && <TodoText>You have no todos today</TodoText>}
      {todos.length != 0 && (
        <SwipeListView
          data={todos}
          renderItem={(data, rowMap) => (
            <ListView
              underlayColor={colors.primary}
              onPress={() => {
                triggerEdit(data.item);
              }}
            >
              <>
                <TodoText>{data.item.title}</TodoText>
                <TodoDate>{data.item.date}</TodoDate>
              </>
            </ListView>
          )}
          renderHiddenItem={(data, rowMap) => (
            <ListViewHidden>
              <HiddenButton onPress={() => deleteTodo(rowMap, data.item.key)}>
                <Entypo name="trash" size={25} color={colors.secondary} />
              </HiddenButton>
            </ListViewHidden>
          )}
          leftOpenValue={80}
          previewRowKey={"1"}
          previewOpenValue={80}
          previewOpenDelay={3000}
          disableLeftSwipe={true}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
        />
      )}
    </>
  );
};

export default ListItems;
