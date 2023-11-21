import { StatusBar, StyleSheet, View } from 'react-native';
export default function HomeContainer() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      {/* Header flexshrink 121
      
      Footer avec des icones */}
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
  }
  
});


