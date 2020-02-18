import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

export default function UserLogged(props) {
  return (
    <View>
      <Text>User Logged ...</Text>
      <Button
        style={styles.btnCerrar}
        title="Cerrar sesion "
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnCerrar: {
    backgroundColor: "#00a680"
  }
});
