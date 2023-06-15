// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const SignupScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hi!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default SignupScreen;
import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  Button
} from "react-native";

const SignupScreen =  ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('SplashScreen');
  };
  // TextBox EMAIL
  const [email, onEmailChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/Logo_Color.png")} // Provide the path to your image file
          style={styles.image}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Create an Account</Text>
          <TextInput
            style={styles.input}
            onChangeText={onEmailChange}
            value={email}
            placeholder="Email address"
            keyboardType="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onPasswordChange}
            value={password}
            placeholder="Create a Password"
            keyboardType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button color="white" title="Continue" onPress={handleButtonClick} />
        </View>
        <View style= {styles.line}>
          <Image
            source={require("../assets/Line.png")} // Provide the path to your image file
            style={styles.image}
          />
        </View>
        <View style={styles.googleBtn}>
          <Button style="styles.gButton" color="white" title="Sign up with Google" />
        </View>
        <View style={styles.fbBtn}>
          <Button color="white" title="Sign up with Facebook" />
        </View>

        <View style={styles.orLogin}>
        <Text style={styles.lgTxt}>Already have an account? <Text style={styles.signInTxt}>Sign in</Text></Text>
        </View>

      </View>
   
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.imageBackground}
      >
        {/* <Text style={styles.text}>Signup Screen</Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    top: "10%",
    alignItems: "center",
  },
  imageBackground: {
    position: "absolute",
    flex: 1,
    marginTop: "95%",
    height: "80%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Open Sans",
    color: "black",
    fontStyle: "normal",
    fontWeight: 300,
    bottom: 5,
    left: "20%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    // fontSize: 24,
    top: "9%",
    // fontWeight: "bold",
    // fontFamily: "Open Sans",
    // color: '#FF0000',
  },
  input: {
    width: 330,
    height: 50,
    borderRadius: 10,
    // height: 40,
    top: 16,
    margin: 12,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: '37%',
    left: 28,
    flex: 1,
    textAlign: 'center',
    width: 330,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#7152A2',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  line: {
    top: '30%'
  },

  googleBtn: {
    position: 'absolute',
    top: '62%',
    left: 28,
    flex: 1,
    textAlign: 'center',
    width: 330,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#33A854',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fbBtn: {
    position: 'absolute',
    top: '70%',
    left: 28,
    flex: 1,
    textAlign: 'center',
    width: 330,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#3C5998',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gButton: {
    top: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  orLogin: {
    top: '50%',
    fontSize: '20px',
    alignItems: 'center',
    fontStyle: "normal",
    fontWeight: 300,
    justifyContent: 'center',
  },

  lgTxt: {
    fontWeight: 600,
    color: '#707070'
  },

  signInTxt: {
    // fontSize: '18px',
    color: '#7152A2',
    fontWeight: 600,
  },
});

export default SignupScreen;
