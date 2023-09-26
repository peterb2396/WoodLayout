import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from "react";
const BACK_BTN_SIZE = 30
const PLY = require('../assets/ply.png')
const STICK = require('../assets/stick.png')

export default function WoodType({type, back, del}) {
  const [title, setTitle] = useState(type.title); // Initialize an empty string as the initial value
  const [isSheet, setIsSheet] = useState(type.sheet)

  function onDeletePress()
  {
    // Delete type
    del(type)
    back()
  }
  
  const handleTextChange = (newText) => {
    setTitle(newText); // update title display
    type.title = newText // Save the title
  };

  function toggleSheet()
  {
    setIsSheet(!type.sheet)
    type.sheet = !type.sheet
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => back()}>
            <Icon name="chevron-back-outline" size={BACK_BTN_SIZE } color="black" />
          </TouchableOpacity>
    
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTextChange}
          placeholder="Type something..."
        />
      </View>
      <View style = {styles.optionsContainer}>
        <View style = {styles.image_container}>
          <TouchableOpacity onPress={() => toggleSheet()}>
            <Image source={(isSheet? PLY: STICK)} style={styles.image}/>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity style={styles.delButton} onPress={() => onDeletePress()}>
            <Text>{`Delete ${type.title}`}</Text>
        </TouchableOpacity>
    </View>
  );

  

  // After its sorted, set ViewLayout to true.
}

const styles = StyleSheet.create({
  delButton: {
    margin: 10,
    padding:10,
    borderRadius: 6,
    backgroundColor: '#CD5C5C',
    alignItems: 'center',
  },

  image_container: {
    paddingTop: 10,
    alignItems: 'center'
  },

  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
  },

  container: {
    paddingTop: 10, // Optional padding for the whole container
    
  },
  optionsContainer: {
    height: Dimensions.get('window').height - 270, 
  },
  innerContainer: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    width: 390 - BACK_BTN_SIZE*1.5,
    borderWidth: 1, // Add a border
    borderColor: 'black', // Border color
    padding: 5
  },
});

  