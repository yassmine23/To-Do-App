import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Do Lundry", key: "2" },
    { text: "Clean Dishes", key: "3" },
  ]);

  const pressHandler= (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
   
  }

  const submitHandler = (text)=> {
    if (text.length > 3 ){

    
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }else{
   Alert.alert('OOPS!', 'ToDos must be over 3 chars long', [
    {text:'understood', onPress:()=> console.log('alert closed')}
   ])
  }
  }
  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss(); console.log('keyboard dismissed')
    }}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
            // <Text>{item.text}</Text>}
            <TodoItem item={item} pressHandler={pressHandler}/>)}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1D7C6",
  },
  content: {
    padding: 40,
    flex:1
  },
  list: {
    marginTop: 20,
    flex:1
  },
});
