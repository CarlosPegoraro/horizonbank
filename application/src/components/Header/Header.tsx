import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons'

interface HeaderProps {
  name: string;
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{ name }</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#800080",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  },
  buttonUser: {
    width: 40,
    height: 40,
    borderRadius: 44 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffaa",
  }
});

export default Header;
