import { StatusBar, StyleSheet, View, ScrollView, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell , faCalendarDays, faUser} from '@fortawesome/free-regular-svg-icons';

export default function Calendar() {

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <ScrollView></ScrollView>
        {/* <View style={[styles.homeHeader]}>
          <FontAwesomeIcon icon={faBell} />
          <View style={{flexDirection: 'row'}}>
            <Text> Month 2023</Text>
            <FontAwesomeIcon icon={faCalendarDays} />
          </View>
          <FontAwesomeIcon icon={faUser} />
        </View> */}
        <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  homeHeader: {
    backgroundColor: "pink",
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});


