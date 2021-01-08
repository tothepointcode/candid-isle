import React from "react";
import { Text, ScrollView } from "react-native";

// styled components
import { ListView, TodoText, TodoDate, colors } from "../styles/appStyles";

import { View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const ListItems = ({ todos, setTodos }) => {

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
    <ScrollView showsVerticalScrollIndicator={false}>
      {todos &&
        todos.map((todo, index) => {
          return (
            <ListView key={index}>
              <TodoText>{todo.title}</TodoText>
              <TodoDate>{todo.date}</TodoDate>
            </ListView>
          );
        })}

      {!todos && <TodoText>You have no todos today</TodoText>}

      <ListView>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            textDecorationLine: "line-through",
            textDecorationStyle: "dashed",
          }}
        >
          Home Component were home home som e no two ways about it yah that's it
          .
        </Text>
        <Text
          style={{
            color: colors.alternative,
            fontSize: 13,
            textAlign: "right",
          }}
        >
          {new Date().toLocaleTimeString()}
        </Text>
      </ListView>


      <SwipeListView
        data={todos}
        renderItem={(data, rowMap) => (
          <View style={{ height: 100, width: 400, backgroundColor: "white" }}>
            <Text>I am {data.item.title} in a SwipeListView</Text>
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "yellow",
              height: 100,
              width: 400,
            }}
          >
          <TouchableOpacity
                style={{backgroundColor: 'purple', width: 75, alignItems: "center"}}
                onPress={() => deleteTodo(rowMap, data.item.key)}
            >
                <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={80}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
      />
    </ScrollView>
  );
};

export default ListItems;
