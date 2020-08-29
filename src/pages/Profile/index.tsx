import React from 'react';
import { View, Button, Text } from 'react-native';

import { Background, Container } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Background />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    </>
  );
};

export default Profile;
