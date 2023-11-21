import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from '../App/components/Button/Button';
const logoImg = require('../assets/favicon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Image source={logoImg} style={{width:60, height: 60, backgroundColor: 'gainsboro', borderRadius: 50}}></Image>
        <View style={{width:270, height: 70, backgroundColor: "gainsboro", marginTop: 30, marginBottom: 30}}>
          <Text style={[styles.title]}>LunarFlow</Text>
        </View>
        <Text style={[styles.textContainer]}>
        LunarFlow est une application qui vous permettra de suivre votre cycle menstruel, mais surtout vos humeurs et vos symptômes menstruels et prémenstruels.
        
        Cette application vous aidera à maintenir votre foi même lorsque vous serez au plus bas. En fonction de vos humeurs, LunarFlow vous enverra des notifications de divers rappels et messages bienveillant et positifs pour vous aider à aller mieux et garder de bonnes habitudes religieuses même lorsque vous ne priez pas.
        </Text>
      
        <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
    padding: 20
  },
  textContainer: {
   marginTop: 20,
   marginBottom: 40,
   paddingHorizontal: 20,
   paddingVertical: 10,
   textAlign: 'center', 
   backgroundColor: "lightpink"
  },
  
});
