import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import OpenTicketsButton from '../components/OpenTicketsButton';
import OpenTicket from '../pages/OpenTicket';
import Configurations from '../pages/Configurations';
import MyTickets from '../pages/MyTickets';
import Profile from '../pages/Profile';
import Tickets from '../pages/Tickets';

const Tab = createBottomTabNavigator();

interface Icons {
  [Key: string]: {
    lib: any;
    name: string;
  };
}

const icons: Icons = {
  Configurations: {
    lib: AntDesign,
    name: 'setting',
  },
  Tickets: {
    lib: FontAwesome5,
    name: 'map-marked-alt',
  },

  MyTickets: {
    lib: FontAwesome5,
    name: 'map-marker',
  },
  Profile: {
    lib: AntDesign,
    name: 'user',
  },
};

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="OpenTicket"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'OpenTicket') {
            return (
              <OpenTicketsButton
                onPress={() => navigation.navigate('OpenTicket')}
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
        name="OpenTicket"
        component={OpenTicket}
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
