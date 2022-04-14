import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsyncFB = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.facebook.com/Leviansky');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  const _handlePressButtonAsyncIG = async () => {
    let result = await WebBrowser.openBrowserAsync('https://instagram.com/lepixz?igshid=YmMyMTA2M2Y=');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  const _handlePressButtonAsyncWA = async () => {
    let result = await WebBrowser.openBrowserAsync('https://wa.me/+6289629950323');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  const _handlePressButtonAsyncTL = async () => {
    let result = await WebBrowser.openBrowserAsync('https://t.me/+6289629950323');
    <ScrollView>
      setResult(result);
    </ScrollView>
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#006EB3', 'transparent']}
        style={styles.background}
      />
      <StatusBar style="light" />
      <Text style={styles.textJudul}>My Profile</Text>
      <Text style={styles.textProfil}>Name  : Fahlevi Ikhsanur Rizal</Text>
      <Text style={styles.textProfil}>NIM     : 119140128</Text>
      <View style={{height: '20%', justifyContent: 'center', marginTop: '10%'}}>
        <Image source={require('./assets/levi.jpg')} resizeMode= "contain" style={{height: '100%', width: '100%'}}/>
      </View>
      <TouchableOpacity onPress={_handlePressButtonAsyncFB} >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.text}>See me on Facebook</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handlePressButtonAsyncIG} >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.text}>See me on Instagram</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handlePressButtonAsyncWA} >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.text}>Chat me on Whatsapp</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={_handlePressButtonAsyncTL} >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}>
          <Text style={styles.text}>Chat me on Telegram</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#7DBCDF',
    paddingHorizontal: '15%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '10%'
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  textJudul: {
    backgroundColor: 'transparent',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '20%',
    textAlign: 'center',
  },
  textProfil: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '3%',
  },
});
