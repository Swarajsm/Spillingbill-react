import React, {useState} from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';

export default function HomeScreen() {
  //   const FirstRoute = () => (
  //     <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  //   );

  //   const SecondRoute = () => (
  //     <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  //   );

  //   const renderScene = SceneMap({
  //     first: FirstRoute,
  //     second: SecondRoute,
  //   });
  //   const layout = useWindowDimensions();

  //   const [index, setIndex] = useState(0);
  //   const [routes] = useState([
  //     {key: 'first', title: 'First'},
  //     {key: 'second', title: 'Second'},
  //   ]);
  const [data, setData] = useState(['']);
  const [addGroup, setAddGroup] = React.useState('');
  return (
    <View>
      {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      /> */}
      <View style={styles.inputContainer}>
        <TextInput
          label="Create a group"
          value={addGroup}
          //   error={error}
          style={styles.input}
          onChangeText={text => {
            setAddGroup(text);
          }}
        />
        <Button
          //   icon="lock"
          mode="contained"
          style={styles.add}
          onPress={() => {
            if (addGroup === '') return;
            setData(prev => {
              return [...prev, addGroup];
            });
            setAddGroup('');
          }}>
          ADD
        </Button>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    margin:'8px',
    padding:'3px',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
  },
  add: {
    width: '30%',
    height: '70%',
  },
  listItem: {
    bottomBorderWidth: 1,
    padding: '1%',
    justifyContent:'center',
    backgroundColor:'red'
    // height:'5%'
  },
});
