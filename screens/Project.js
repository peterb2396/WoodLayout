import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from "react";


const BACK_BTN_SIZE = 30

export default function Project({project, back, del}) {
  const [title, setTitle] = useState(project.title); // Initialize an empty string as the initial value
  
  const handleTextChange = (newText) => {
    setTitle(newText); // update title display
    project.title = newText // Save the title
  };




  if (project.viewLayout && project.sorted)
  {
    return (<View></View>)
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
        {/* Options here */}
        
      </View>

      <TouchableOpacity style={styles.delButton} onPress={() => del(project)}>
              <Text>{`Delete ${project.title}`}</Text>
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
  optionsContainer: {
    
    height: Dimensions.get('window').height - 270, 
  },
  container: {
    paddingTop: 10, // Optional padding for the whole container
    
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

  