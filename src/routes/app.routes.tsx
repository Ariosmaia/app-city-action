import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import NewTicketRoutes from './new-ticket.routes';
import OpenTicketsButton from '../components/OpenTicketsButton';
import Configurations from '../pages/Configurations';
import MyTickets from '../pages/MyTickets';
import Profile from '../pages/Profile';
import Tickets from '../pages/Tickets';

const Tab = createBottomTabNavigator();

interface Icons {
  [Key: string]: {
    lib: any;
    name: string;
    route: string;
  };
}

const icons: Icons = {
  Configurations: {
    lib: AntDesign,
    name: 'setting',
    route: 'Configurations',
  },
  Tickets: {
    lib: FontAwesome5,
    name: 'map-marked-alt',
    route: 'Tickets',
  },
  MyTickets: {
    lib: FontAwesome5,
    name: 'map-marker',
    route: 'MyTickets',
  },
  Profile: {
    lib: AntDesign,
    name: 'user',
    route: 'Profile',
  },
};

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="NewTickets"
      screenOptions={({ route, navigation }) => ({
        keyboardHidesTabBar: true,
        unmountOnBlur: true,

        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'NewTickets') {
            return (
              <OpenTicketsButton
                onPress={() => navigation.navigate('NewTickets')}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#454372',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        safeAreaInsets: { bottom: 10 },
        activeTintColor: '#7F39FB',
        inactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Configurations"
        component={Configurations}
        options={{
          title: 'Configurações',
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          title: 'Chamados',
        }}
      />
      <Tab.Screen
        name="NewTickets"
        component={NewTicketRoutes}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="MyTickets"
        component={MyTickets}
        options={{
          title: 'Meus Chamados',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
