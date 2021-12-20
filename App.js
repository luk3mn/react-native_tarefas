import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function App() {

  return (
    <SafeAreaView style={styles.container}> {/* SafeAreaView -> Serve para ajustar a visualização no iphone, no android fica normal */}
      <StatusBar backgroundColor="#121d31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Minhas tarefas </Text>
      </View>

      {/* Lista */}
      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={}
        keyExtractor={}
        renderItem={}
      />

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="ios-add" size={35} color={"#FFF"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171d31"
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    color: "#FFF"
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: "#0094ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }

  }
})