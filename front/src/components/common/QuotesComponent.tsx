import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import quotes from "../api/LunarFlowAPI.quotes.json"

interface Quote {
  description: string;
  category: string;
} 
const QuotesComponent = () => {
  const imageURIs = [
    'https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const renderItem = ({ item }) => (
    <View style={styles.quoteContainer}>
      <View>
        {imageURIs.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={{ width: 'auto', height: 200, borderTopRightRadius: 15, borderTopLeftRadius: 15 }} />
        ))}
        <Text style={styles.quoteText}>{item.description}</Text>

        <AntDesign name="heart" size={16} color="firebrick" style={{ position: 'absolute', right: 10, top: 10 }} />
      </View>


      <View style={styles.tagWrapper}>
        <View style={styles.tag}>
          <Text style={styles.authorText}>Menses Phase</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.authorText}>{item.category}</Text>
        </View>
        <View style={styles.tag}>
          <Text>You got this</Text>
        </View>

      </View>
    </View>
  );

  return (
    <FlatList
      data={quotes}
      renderItem={renderItem}
      keyExtractor={item => item.description}
    />
  );
};

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
    shadowOpacity: 0.19,
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
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
  tagWrapper: {
    flexDirection: 'row',
    marginVertical: 12,
    justifyContent: 'space-evenly'
  },
  tag: {
    backgroundColor: '#9FCCB7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 3
  },
  quoteContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F4EDE8',
  },
  quoteText: {
    fontSize: 16,
    color: '#000',
  },
  authorText: {
    fontSize: 14,
    color: '#888',
  },
});


export default QuotesComponent;
