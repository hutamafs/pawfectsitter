import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './components/TabBottomNavbar'


export default function Home({navigation}) {
  return (
    <>
    <View style={styles.container}>
    </View>
    <TabBar
    navigation={navigation}
    />
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