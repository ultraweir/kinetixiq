import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';

export default function HomeScreen() {
  const handleLogout = () => {
    auth.signOut(); // Redirect will be handled by onAuthStateChanged if implemented
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Welcome to KinetixIQ!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});
