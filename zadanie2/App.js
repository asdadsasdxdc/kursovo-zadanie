import React from 'react';
import BusinessTripList from './BusinessTripList';
import BusinessTripForm from './BusinessTripForm';
import BusinessEditForm from './EventEditForm';
import ThankYou from './ThankYou';
import Deleted from './Deleted';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
       isReadyRef.current = true;
      }}
    >
      <Stack.Navigator initialRouteName='EventList'>
      <Stack.Screen name='BusinessTripList' component={BusinessTripList} options={{title: 'Events'}} />
      <Stack.Screen name='BusinessTripForm' component={BusinessTripForm} options={{title: 'Add Event'}} />
      <Stack.Screen name='BusinessEditForm' component={BusinessEditForm} options={{title: 'Edit Event'}} />
      <Stack.Screen name='ThankYou' component={ThankYou} options={{title: 'Thank You'}} />
      <Stack.Screen name='Deleted' component={Deleted} options={{title: 'Delete'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
