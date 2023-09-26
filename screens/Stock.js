import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import WoodType from "./WoodType";

const Stock = ({types_}) => {
    
  const [types, setTypes] = useState(types_)
  const [typeRef, setTypeRef] = useState()


  // Get out of wood type view mode
  function back()
  {
    setTypeRef()
  }

  function del(type)
  {
    setTypes(types.filter(item => item !== type)); // will trigger re render
  }

  function onNewTypePress()
  {
    new_type = {title: `Type ${types.length + 1}`, sheet: false, length: 96, width: 48, stock: {8: true, 16: true, 18: false, 20: false, 24: false}} //ply: width, stick: stock
    types.push(new_type)
    setTypeRef(new_type)
  }
  
  if (types && !typeRef)
  {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.typeList}>
            {types.map((type, index) => (
            <TouchableOpacity
                style={styles.typeButton}
                key={index}
                onPress={() => setTypeRef(type)}
            >
                <Text>{type.title}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
        <TouchableOpacity style={styles.newTypeButton} onPress={() => onNewTypePress()}>
            <Text style={styles.buttonText}>New Type</Text>
        </TouchableOpacity>

        
        </View>
    );
  }
    

else if (types)
{
    return (<WoodType type = {typeRef} back = {back} del = {del}></WoodType>)
}
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  typeList: {
    flex: 1,
    padding: 10,
  },
  typeButton: {
    margin: 8,
    padding:10,
    borderRadius: 6,
    backgroundColor: '#FAEBD7',
    
  },
  newTypeButton: {
    margin: 10,
    padding:10,
    borderRadius: 6,
    backgroundColor: '#DEB887',
    alignItems: 'center',
  },
});

export default Stock;
