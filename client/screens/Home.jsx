import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './components/TabBottomNavbar'


export default function Home() {
  return (
    <>
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
    {/* <TabBar/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});