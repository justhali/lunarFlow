import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './App/components/Button/Button';

export default function Subscription() {
  return (
    <View style={styles.container}>
      <StatusBar/>
        <View style={{width:270, height: 70, backgroundColor: "gainsboro"}}>
          <Text style={[styles.title]}>SIGN UP</Text>
        </View>
        
        <View style={style = {margin: 100}}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('password', val)}
          />
          
          <TextInput
            style={styles.input}
            placeholder='date'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='white'
            onChangeText={val => this.onChangeText('date', val)}
          />
        </View>
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
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'gainsboro',
    margin: 10,
    padding: 8,
    color: 'grey',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  }
  
});
