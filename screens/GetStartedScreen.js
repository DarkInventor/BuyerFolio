import React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, Button } from 'react-native';

const image = require('../assets/hero_image.png');
const bg = require('../assets/Rectangle.png');
const logo = require('../assets/BuyerFolio_Logo.png');

const GetStartedScreen = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('SplashScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <ImageBackground source={bg} style={styles.bgimage} />
        <View style={styles.logoImgView}>
          <ImageBackground source={logo} style={styles.logo}>
            <Text style={styles.logoText}>Unlocking Homeownership</Text>
          </ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
          <Button color="white" title="Get Started" onPress={handleButtonClick} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 1,
  },
  logoImgView: {
    position: 'absolute',
    top: 0,
    left: 29,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '88%',
    height: '28%',
    justifyContent: 'center',
  },
  logoText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    right: 20,
    bottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: '75%',
    left: 38,
    flex: 1,
    textAlign: 'center',
    width: 320,
    height: 55,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#7152A2',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GetStartedScreen;
