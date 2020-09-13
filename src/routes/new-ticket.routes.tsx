import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OpenTicket from '../pages/OpenTicket';
import RegisterTicket from '../pages/RegisterTicket';

const Ticket = createStackNavigator();

const NewTicketRoutes: React.FC = () => {
  return (
    <Ticket.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTransparent: true,

        cardStyle: { backgroundColor: '#3C3C3C' },
      }}
    >
      <Ticket.Screen
        options={{
          title: '',
        }}
        name="OpenTicket"
        component={OpenTicket}
      />

      <Ticket.Screen name="RegisterTicket" component={RegisterTicket} />
    </Ticket.Navigator>
  );
};

export default NewTicketRoutes;
