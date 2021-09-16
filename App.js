import React from 'react';
import {
  Platform,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  enableScreens();
  const Stack = createNativeStackNavigator();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

const Page1 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          height: 42,
          width: 100,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Page2');
        }}>
        <Text>Go to Page2</Text>
      </Pressable>
    </View>
  );
};

const Page2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput autoFocus style={{width: 100, height: 40, borderWidth: 1}} />
    </View>
  );
};

export default App;
