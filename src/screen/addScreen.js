import React, {useState} from 'react'
import axios from 'axios';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
function AddScreen({navigation}) {
    const [name, setName] = useState();
    const [decription, setDesc] = useState();
    const [date, setDate] = useState();
    const [location, setLocation] = useState();

    const getList = () => {
      axios({
        url: 'https://65f19c57034bdbecc7632a47.mockapi.io/events',
        method: 'GET',
      }).then(res => {
        var response = res.data;
        setList(response);
      });
    };

    const Submit = () => {
      axios.post("https://65f19c57034bdbecc7632a47.mockapi.io/events", {name, decription, date, location})
        .then(result => {
            console.log(result.data)
            navigation.navigate('Home')
            getList();
        })
        .catch(err => console.log(err))
    }
  return (
    <SafeAreaView>
        <View style={styles.form}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Text style={styles.txtClose}>Close</Text>
            </TouchableOpacity>
            <TextInput style={styles.text_input} placeholder="Name" onChangeText={(value) => setName(value)}/>
            <TextInput style={styles.text_input} placeholder="Description" onChangeText={(value) => setDesc(value)}/>
            <TextInput style={styles.text_input} placeholder="Date" onChangeText={(value) => setDate(value)}/>
            <TextInput style={styles.text_input} placeholder="Location" onChangeText={(value) => setLocation(value)}/>
            <TouchableOpacity
                onPress={Submit}
                style={styles.btnContainer}>
                <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    content: {
      padding: 10,
    },
    form: {
      padding: 15,
      backgroundColor : "#e3e3e3",
      marginTop: 10,
    },
  
    txtClose: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'right',
    },
    text_input: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      marginTop: 10,
    },
    header_container: {
      padding: 15,
      backgroundColor: '#eeeeee',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    txt_main: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    item_course: {
      borderRadius: 10,
      marginTop: 10,
      backgroundColor: '#eeeeee',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e2e2e2',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    txt_name: {
      fontSize: 18,
      marginTop: 5,
      fontWeight: 'bold',
    },
    txt_item: {
      fontSize: 14,
      marginTop: 5,
    },
    txt_enabled: {
      fontSize: 14,
      marginTop: 5,
      color: 'green',
      fontWeight: 'bold',
    },
    txt_disabled: {
      fontSize: 14,
      marginTop: 5,
      color: 'yellow',
      fontWeight: 'bold',
    },
    txt_del: {
      fontSize: 14,
      marginTop: 5,
      color: 'red',
      fontWeight: 'bold',
    },
    txt_edit: {
      fontSize: 14,
      marginTop: 5,
      color: 'blue',
      fontWeight: 'bold',
    },
    btnContainer: {
      display: 'flex',
      padding: 20,
      backgroundColor: '#000',
      marginTop: 20,
    },
    textButton: {
      textAlign: 'center',
      color: '#FFF',
    },
  });
export default AddScreen