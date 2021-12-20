// Instalando a animação
// > expo install react-native-animatable

// Importação das bibliotecas
import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';

// Importação dos componentes
import TaskList from "./src/components/TaskList";

// Animar o componente "TouchableOpacity"
const AnimatableBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const [task, setTask] = useState([
    { key: 1, task: 'Comprar pão'},
    { key: 2, task: 'Estudar React native'},
    { key: 3, task: 'Ir na academia hoje a noite'},
    { key: 4, task: 'Comprar chocolate e coca cola'},
    { key: 5, task: 'Assistir o 1 video'},
  ]);

  const [open, setOpen] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}> {/* SafeAreaView -> Serve para ajustar a visualização no iphone, no android fica normal */}
      <StatusBar backgroundColor="#121d31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Minhas tarefas </Text>
      </View>

      {/* Construção da lista */}
      <FlatList 
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({ item }) => <TaskList data={item} /> }
      />

      {/* Tela modal */}
      <Modal animationType="slide" transparent={false} visible={open}>
        <Text> Modal 12 </Text>
      </Modal>

      {/* Botão para add nova tarefa */}
      <AnimatableBtn 
        style={styles.fab}
        animation="bounceInUp"
        duration={1500}
        onPress={ () => setOpen(true) }
      >
        <Ionicons name="ios-add" size={35} color={"#FFF"} />
      </AnimatableBtn>
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