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
        <Stack.Screen name="Home" component={note.home} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Create note" component={note.createNote}/>
      </Stack.Navigator>
    </NavigationContainer>
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
  button: {
    width: '100%',
    alignSelf: 'flex-end',
    padding: 20,
  },
  newNote: {
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