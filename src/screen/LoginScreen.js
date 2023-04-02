import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {TextInput, Button, Card} from 'react-native-paper';

const ID = 'swaraj@yopmail.com';
const PASSWORD = '12345';
export default function LoginScreen({navigation}) {
  const {height, width} = useWindowDimensions();
  const [email, setEmail] = React.useState('swaraj@yopmail.com');
  const [password, setPassword] = React.useState('12345');
  const [error, setError] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <TextInput
            label="Email"
            value={email}
            error={error}
            onChangeText={text => {
              setError(false), setEmail(text);
            }}
          />
          <TextInput
            label="Pasword"
            value={password}
            error={error}
            onChangeText={text => {
              setError(false), setPassword(text);
            }}
          />
        </View>
        <Text>{error ? 'Email or password is incorrect' : null}</Text>
        <Button
          icon="lock"
          mode="contained"
          onPress={() => {
            if (email === ID && password === PASSWORD) {
              navigation.reset({
                index: 0,
                routes: [{name: 'homeScreen'}],
              });
            } else {
              setError(true);
            }
          }}>
          Submit
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
    width: '80%',
    backgroundColor: '#ECF2FF',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    elevation: 10,
    borderRadius: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '70%',
  },
});
