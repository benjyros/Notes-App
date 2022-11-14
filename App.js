import { StatusBar } from 'expo-status-bar';
import note from './components/note.js';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="Create note" component={createNote}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const home = ({ navigation }) => {
  const onPress = () => alert("helo");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
      </View>
      <View style={styles.main}>

        <Text>Open up App.js to start working on your app!</Text>

      </View>
      <View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>New note</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const createNote = ({ navigation }) => {
  const onPress = () => alert("helo");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New note</Text>
      </View>
      <View style={styles.main}>
        <Text>Title:</Text>
        <TextInput></TextInput>
        <Text>Description:</Text>
        <TextInput numberOfLines={10}></TextInput>
      </View>
      <View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.saveNote} onPress={onPress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 125,
    backgroundColor: '#33ff92',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 25,
    borderBottomWidth: 3,
    borderColor: '#e3e3e3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  main: {
    flex: 1,
    padding: 5,
  },
  buttonView: {
    width: '100%',
    alignSelf: 'flex-end',
    padding: 20,
  },
  button: {
    backgroundColor: '#33ff92',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default App;