import React ,{useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Bgcolor } from '../redux/action';


const SecondPage = ({navigation}) => {
  const bgColor= useSelector((state)=>state.color);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Second Page', //Set Header Title
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      headerLeft: () => (
        <TouchableOpacity
        onPress={()=>dispatch(Bgcolor())}
        style={{marginRight: 10}}>
        <Text style={{color: 'white'}}>color change</Text>
      </TouchableOpacity>
      ),
      headerTitle: (props) => (
        <Text
          {...props}
          style={{color: 'white', fontWeight: 'bold'}}>
          Color Page
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity
        onPress={()=>dispatch(Bgcolor())}
        style={{marginRight: 10}}>
        <Text style={{color: 'white'}}>color change</Text>
      </TouchableOpacity>
      ),
    });
  }, [navigation]);



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.header}>
          Simple background  Color Change App
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.buttonStyle,{marginRight: 10}]} >
          <Text style={ {color: 'black'}} >Home Button</Text>
        </TouchableOpacity>
        <Text>With navigation bar</Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
       function color change
      </Text>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  
  buttonStyle: {
    
    height: 40,
    padding: 5,
    backgroundColor: '#FFFEFA',
    borderRadius: 2,
    marginTop: 12,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 16,
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});