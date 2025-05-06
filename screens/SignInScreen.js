// screens/SignInScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign In Screen</Text>
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}