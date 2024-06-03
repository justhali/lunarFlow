import { SafeAreaView, StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import Button from '../../common/Button'

const  MoodList = () => {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const moods = [
    { mood: 'Sad', emoji: '😢' },
    { mood: 'Happy', emoji: '😊' },
    { mood: 'Anxious', emoji: '😰' },
    { mood: 'Depressed', emoji: '😞' },
    { mood: 'Tired', emoji: '😴' },
    { mood: 'Lonely', emoji: '🥺' },
    { mood: 'Irritable', emoji: '😡' },
    { mood: 'Energetic', emoji: '💪' },
    { mood: 'Calm', emoji: '😌' },
    { mood: 'Confused', emoji: '😕' },
    { mood: 'Excited', emoji: '😃' },
    { mood: 'Content', emoji: '😊' },
    { mood: 'Stressed', emoji: '😫' },
    // Ajoutez d'autres émotions en fonction des changements hormonaux
  ];

  const handleMoodPress = (mood) => {
    const isSelected = selectedMoods.includes(mood);
    setSelectedMoods(isSelected ? selectedMoods.filter((selected) => selected !== mood) : [...selectedMoods, mood]);
  };

  const handleAddEntry = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedMoods([]);
  };


  // const getButtonBackgroundColor = (mood) => {
  //   if (isMoodSelected(mood)) {
  //     return 'rgba(255, 0, 0, 0.5)';
  //   } else if (isPressed) {
  //     return '#F26968';
  //   } else {
  //     return 'white';
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          enterKeyHint='search'
          style={styles.inputSearch}
          placeholder='Search'
        />
      </View>
      <View style={styles.moodButtonsContainer}>
        {moods.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              {
                backgroundColor: selectedMoods.includes(item.mood)
                  ? 'rgba(255, 0, 0, 0.5)'
                  : pressed
                    ? 'rgba(0, 0, 255, 0.5)'
                    : 'white',
              },
              styles.moodButton,
            ]}
            onPress={() => handleMoodPress(item.mood)}
          >
            <Text>{item.mood}</Text>
            <Text>{item.emoji}</Text>
          </Pressable>
        ))}
      </View>

      <Modal 
        animationType="slide" 
        transparent={true}
        visible={modalVisible} 
        onRequestClose={handleModalClose}>
        <View >
          {/* TODO: add style on modalContainer */}
          <View>
            <Text>Entries added successfully!</Text>
            <TouchableOpacity onPress={handleModalClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Button onPress={handleAddEntry}>
        <Text>Add entry</Text>
      </Button>
    </SafeAreaView>
  )
}

export default MoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    backgroundColor: '#F2ECE4',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: "white",
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3,
    elevation: 4
  }, 
  inputSearch: {
    marginLeft: 5,
    fontSize: 15,
  },
  moodButtonsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', // Alignez les boutons en haut du conteneur
    backgroundColor: '#EDDFD4',
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3,
    elevation: 4
  }, 
  moodButton: {
    borderRadius: 30,
    flexDirection: 'row', 
    paddingVertical: 10, 
    paddingHorizontal: 15,
    margin: 5, // Ajoutez une marge entre les boutons
  },
})

