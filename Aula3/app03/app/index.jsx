import { Image, Pressable, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
        <Image source={require('./relogio.png')} style={style.image}/>
        <View style={style.acttions}>
          <Text style={style.timer}>10:10</Text>
          <Pressable style={style.button}>
            <Text style={style.textButton}>Começar</Text>
            </Pressable>
        </View>
        <View style={style.footer}>
          <Text style={style.textfooter}>Curso de react native</Text>
          <Text style={style.textfooter}> 2025 - MeuApp03</Text>
        </View>
    </View>
  );
}

const style = StyleSheet.create ({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#021123',
    gap: 40,
  },
  image: {
    width:400,
    height:400,
    resizeMode: 'contain',
  },
  acttions:{
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
    backgroundColor:'#021123',
    width:'80%',
    borderRadius:32,
    borderWidth:2,
    borderColor:'#144480',

  },
  buttonStop:{
    padding:24,
    backgroundColor:'#990000',
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