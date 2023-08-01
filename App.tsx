import { View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react';

import InfoContainer from './app/components/InfoContainer';
import { styles } from './styles';
import Button from './app/components/Button';
import Header from './app/components/Header';
import SocialConatiner from './app/components/SocialConatiner';
import FollowerConatiner from './app/components/FollowerConatiner';
import TabConatiner from './app/components/TabConatiner';
import PostConatiner from './app/components/PostConatiner';

const App = () => {
  const [btnValue, setBtnValue] = useState("FOLLOW");

  const onChangeHandler = () => {
    const newBtnVal = btnValue === "FOLLOW" ? "UNFOLLOW" : "FOLLOW";
    setBtnValue(newBtnVal);
  }
  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.infoContainer}>
          <InfoContainer />
          <Button name={btnValue} onPress={onChangeHandler} />
        </View>

        <SocialConatiner />

        <FollowerConatiner />
        <TabConatiner />
        <ScrollView style={styles.postContainer}>
          <PostConatiner />
        </ScrollView>
      </View>
      <Image source={require("./app/assests/images/bottom.png")}
        resizeMode='contain'
        style={styles.bottomImage}
      />
    </>
  )
}

export default App

