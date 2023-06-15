

// // export default SplashScreen;
// import React from 'react';
// import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const SplashScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/splash.png')} // Provide the path to your image file
//         style={styles.image}
//       >
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Find Someone</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#FF69B4', // More pink color
//     borderRadius: 20,
//     padding: 15,
//     top: 360,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;

import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splash.png')} // Provide the path to your image file
        style={styles.image}
      >
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Find Someone</Text>
        </TouchableOpacity>
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
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF69B4', // More pink color
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    bottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
