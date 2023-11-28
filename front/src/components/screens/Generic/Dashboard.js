import { SafeAreaView, StyleSheet, View, Text, StatusBar, ScrollView, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import BottomTabs from '../../common/BottomTabs';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <StatusBar />
        <View style={styles.textStyle}>
          <Text>Today | 14th day of your cycle</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> 8 days until your next period</Text>
        </View>

        <View style={styles.phasesInfoContainer}>
          <Pressable style={[styles.phaseInfo, { borderTopLeftRadius: 30, backgroundColor: '#EDDFD4'}]}>
            <View >
              <Text style={{ textAlign : 'center', padding: 15, fontWeight: 'bold'}}>Follicular phase</Text>
            </View>
              <AntDesign name="infocirlce" size={12} color="black" style={{position: 'absolute', left: 10, bottom: 10}}/>

          </Pressable>
          <Pressable style={[styles.phaseInfo, { borderTopRightRadius: 30}]}>
            <View >
              <Text style={{ textAlign : 'center', padding: 15}}>Menstrual phase</Text>
            </View>
              <AntDesign name="infocirlce" size={12} color="black" style={{position: 'absolute', right: 10, bottom: 10}}/>

          </Pressable>
          <Pressable style={[styles.phaseInfo, { borderBottomLeftRadius: 30}]}>
            <View >
              <Text style={{ textAlign : 'center', padding: 15}}>Ovulation</Text>
            </View>
              <AntDesign name="infocirlce" size={12} color="black" style={{position: 'absolute', left: 10, top: 10}} />

          </Pressable>
          <Pressable style={[styles.phaseInfo, { borderBottomRightRadius: 30}]}>
            <View>
              <Text style={{ textAlign : 'center', padding: 15}}>Luteal phase</Text>
            </View>
              <AntDesign name="infocirlce" size={12} color="black" style={{position: 'absolute', right: 10, top: 10}}/>

          </Pressable>
        </View>
        <View style={styles.moodsEntryContainer}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2A3432'}}>How do you feel today ?</Text>
          <AntDesign name="pluscircle" size={24} color="#9FCCB7" />
        </View>
        <View style={styles.quotesContainer}>
            <View style={styles.headerQuotes}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: 'auto', height: 200 , borderTopRightRadius: 15, borderTopLeftRadius: 15}} />
              <Text style={styles.textQuote}>“And to Allah belongs whatever is in the heavens and whatever is on the earth. He forgives whom He wills and punishes whom He wills. And Allah is forgiving and merciful.” [Quran 3:129].</Text>
              <AntDesign name="heart" size={16} color="firebrick" style={{position: 'absolute', right: 10, top: 10}}/>
            </View>
            <View style={styles.tagWrapper}>
              <View style={styles.tag}> 
                <Text>Follicular</Text>
              </View>
              <View style={styles.tag}> 
                <Text>Quran</Text>
              </View>
              <View style={styles.tag}> 
                <Text>You got this</Text>
              </View>

            </View>
        </View>
 
    <BottomTabs />
      </ScrollView>
    </SafeAreaView>



  );
};

export default Dashboard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
  phasesInfoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    // height: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4EDE8',
    shadowColor: "#000",
    marginTop: 8,
    shadowOffset: {
        width: 1,
        height: 2,
    },
    shadowOpacity: 2.75,
    shadowRadius: 2,
    elevation: 4,
  },
  phaseInfo: {
    width: '48%',
    height: 100,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FAF7F2',
    shadowColor: "#000",
    marginTop: 8,
    shadowOffset: {
        width: 1,
        height: 2,
    },
    shadowOpacity: 2.75,
    shadowRadius: 2,
    elevation: 4,
    },
    moodsEntryContainer: {
      margin: 30, 
      flexDirection: 'row', 
      backgroundColor: '#F4EDE8', 
      alignItems: 'center', 
      height: 80, 
      padding: 5,
      borderRadius: 15,
      justifyContent: 'space-around',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity:  0.19,
      shadowRadius: 5.62,
      elevation: 6
    }, 
    quotesContainer: {
      paddingHorizontal: 30,
      justifyContent: 'space-around',
    },
    textQuote: {
      backgroundColor: '#FAF7F2', 
      padding: 13, 
      textAlign: 'justify', 
      lineHeight: 23,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity:  0.19,
      shadowRadius: 5.62,
      elevation: 6
    }, 
    tagWrapper: {
      flexDirection:'row',
      marginVertical: 12,
      justifyContent: 'space-evenly'
    }, 
    tag:{
      backgroundColor: '#9FCCB7',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 30,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity:  0.19,
      shadowRadius: 5.62,
      elevation: 3
    }
});

