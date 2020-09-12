import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name="Profile" component={ProfileScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStackNavigation;
