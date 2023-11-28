import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const TopTabs = () => {
 return (
    <SafeAreaView>
      <Header
        placement="center"
        backgroundColor='#FAF7F2'
        centerComponent={{ text: 'Month 2023', style: { color: 'black'} }}
        leftComponent={<Icon name="notifications" color="black" />}
        rightComponent={<Icon name="account-circle" color="black" />}
      />
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
  topTabs: {
      width: '100%',
      height: 50,
      zIndex: 1000,
      position: 'absolute',
      flexDirection: 'row',
      top: 0,
      paddingVertical: 10,
      backgroundColor: '#9FCCB7',
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: "#000",
      marginTop: 8,
      shadowOffset: {
          width: 2,
          height: -4,
      },
      shadowOpacity: 1,
      shadowRadius: 3,

      elevation: 4,
  },

})
export default TopTabs;
