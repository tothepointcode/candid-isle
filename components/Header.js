import React from "react";
import { View, Text } from "react-native";

// styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors,
} from "./../styles/appStyles";

// Icons
import { Entypo, AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>
        Todos
      </HeaderTitle>
      <HeaderButton>
        <Entypo name="trash" size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
