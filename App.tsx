import { View, Image,Text, ScrollView } from 'react-native'
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
  const [activeTab, setActiveTab] = useState("Posts");

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
        <TabConatiner activeTab={activeTab} setActiveTab={setActiveTab} />
        <ScrollView style={styles.postContainer}>
          {activeTab === "Posts" && <PostConatiner />}
          {activeTab === "About" && <Text>About</Text>}
          {activeTab === "Social" && <Text>Social</Text>}
          {activeTab === "Gallery" && <Text>Gallary</Text>}
          {activeTab === "Device" && <Text>Device</Text>}
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

