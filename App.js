import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const App = () => {
  const onPress = () => alert("helo");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes</Text>
      </View>
      <View style={styles.main}>

        <Text>Open up App.js to start working on your app!</Text>

      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.newNote} onPress={onPress}>
          <Text style={styles.buttonText}>New note</Text>
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