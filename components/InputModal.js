import React, { useState } from "react";
import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from "./../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  addTodo,
  editItem,
  todoValue,
  setTodoValue,
  editTodo,
  todos
}) => {
  // const [todoValue, setTodoValue] = useState();

  const handleSubmit = () => {
    if (!editItem) {
      addTodo({
        title: todoValue,
        date: new Date().toUTCString(),
        key: `${todos.length + 1}`
      });
    } else {
      editTodo({
        title: todoValue,
        date: editItem.date,
        key: editItem.key
      });
    }

    setTodoValue("");
  };

  return (
    <>
      <ModalButton onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Todos</HeaderTitle>
              <AntDesign name="edit" size={30} color={colors.tertiary} />
            </ModalIcon>

            <StyledInput
              placeholder="Add a todo"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              onChangeText={(text) => setTodoValue(text)}
              value={todoValue}
              autoFocus={true}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction
                onPress={() => {
                  setTodoValue("");
                  setModalVisible(false);
                }}
                color={colors.primary}
              >
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction onPress={handleSubmit} color={colors.tertiary}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
