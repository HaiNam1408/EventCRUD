import React from 'react';
import Home from './src/screen/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/screen/addScreen';
import EditScreen from './src/screen/editScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <Home />
    // <SafeAreaView>
    //   <View style={styles.header_container}>
    //     <Text style={styles.txt_main}>Course</Text>
    //     <TouchableOpacity onPress={handleVisibleModal}>
    //       <Text style={styles.txt_name}>New Event</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <Modal animationType="slide" visible={visible}>
    //     <SafeAreaView>
    //       <View style={styles.form}>
    //         <TouchableOpacity onPress={handleVisibleModal}>
    //           <Text style={styles.txtClose}>Close</Text>
    //         </TouchableOpacity>
    //         <TextInput style={styles.text_input} placeholder="Course Name" />
    //         <TextInput style={styles.text_input} placeholder="Course price" />
    //         <TextInput style={styles.text_input} placeholder="Description" />
    //         <TextInput style={styles.text_input} placeholder="Status" />
    //         <TouchableOpacity
    //           onPress={handleVisibleModal}
    //           style={styles.btnContainer}>
    //           <Text style={styles.textButton}>Save New</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </SafeAreaView>
    //   </Modal>
    //   <ScrollView style={styles.content}>
    //     {list.map((item, index) => {
    //       return (
    //         <View style={styles.item_course} key={index}>
    //           <View>
    //             <Text style={styles.txt_name}>ID : {item._id}</Text>
    //             <Text style={styles.txt_name}>Tên sự kiện : {item.name}</Text>
    //             <Text style={styles.txt_name}>Mô tả sự kiện : {item.decription}</Text>
    //             <Text style={styles.txt_name}>Ngày diễn ra : {item.date}</Text>
    //             <Text style={styles.txt_name}>Địa điểm tổ chức : {item.location}</Text>
    //           </View>
    //           <View>
    //             <TouchableOpacity onPress={() => handleEdit(item)}>
    //               <Text style={styles.txt_edit}>Edit</Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity onPress={() => handelDetete(item)}>
    //               <Text style={styles.txt_del}>Delete</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
