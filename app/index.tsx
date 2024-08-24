import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import ListaProdutos from "./Componentes/Adaptadores/ListaProdutos";
const produtos = [
  {id: 1, nome: "Coca-cola", preco: 5.5},
  {id: 2, nome: "Pepsi", preco: 5.5},
  {id: 3, nome: "Fanta", preco: 5.5},
  {id: 4, nome: "Guaraná", preco: 5.5}
]
var contador = 0;


export default function Index() {
  let [contador, setContador]= useState(0);
  return (
    <View
      style={estilo.container}
    >
      <ListaProdutos produtos={produtos}></ListaProdutos>
      

    <Button
    title={contador.toString()}
    onPress={()=>setContador(contador += 1)}
    color= {'#3399ff'}
    ></Button>
    </View>

  );
}

  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#f6b092",
      padding: 20,
    },
    text: {
      color:"#000000"
    },
    titulo:{
      color:"#000000",
      fontSize: 30,
      textAlign: "left",
      fontWeight: "bold", 
      
    }
  })
  

