import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { useState, useRef } from "react";

export default function Index() {
  const valorInicial = 10 * 60; // Representa 10 minutos em segundos
  const [timeLeft, setTimeLeft] = useState(valorInicial);/*setTimeLeft controla o variável timeLeft*/
  const [isRunning, setIsRunning] = useState(false);
  const [timeLabel, setTimeLabel] = useState("Start");
  const intervalRef = useRef(null);

  /*Funções para transformar em cronometro.*/
  function formatTime(seconds) {
    const minuto = Math.floor(seconds / 60);
    const segundo = seconds % 60;

    /*Esse trecho é responsável por adicionar um 0 à frente dos minutos, caso o número de minutos seja menor que 10.*/
    return `${minuto < 10 ? '0' : ''}${minuto}:${segundo < 10 ? '0' : ''}${segundo}`;
  }

  function startTimer() {
    if(!isRunning){
    intervalRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

      setIsRunning(true);
      setTimeLabel("Stop") 
    
    }else{
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setTimeLabel("Start");
    }
  }
  
  

  return (
    <View style={style.container}>
        <Image source={require('./relogio.png')} style={style.image}/>
        <View style={style.actions}>
          <Text style={style.timer}>{formatTime(timeLeft)}</Text>
          <Pressable style={!isRunning?style.buttonStart:style.buttonStop}onPress={startTimer}>
            <Text style={style.textButton}>{timeLabel}</Text>
            </Pressable>
        </View>
        <View style={style.footer}>
          <Text style={style.textfooter}>Curso de react native</Text>
          <Text style={style.textfooter}> 2025 - MeuApp03</Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create ({ /*Substitui as funções de um arquivo .css*/
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#000000',
    gap: 40,
  },
  image: {
    width:390,
    height:390,
    resizeMode: 'contain',
  },
  actions:{
    padding: 24, 
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius:32,
    borderWidth:2,
    borderColor:'#144480',
    alignItems:'center',
    gap:32,
  },
  timer:{
    fontSize:54,
    color:'#FFF',
    fontWeight:'bold',
    textAlign:'center',
    
  },


  button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding:8,
  },
  buttonStart:{
    padding:24,
    backgroundColor:'green',
    width:'80%',
    borderRadius:32,
    borderWidth:2,
    borderColor:'#144480',

  },
  buttonStop:{
    padding:24,
    backgroundColor:'red',
    width: '80%',
    borderRadius: 32,
    borderWidth:2,
    borderColor:'#144480',
  },
  textButton:{
    fontSize:25,
    color:'#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer:{
    width: '80%',
    textAlign: 'center',

  },
  textfooter:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12
  }

});