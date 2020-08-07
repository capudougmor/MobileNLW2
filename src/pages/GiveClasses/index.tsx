import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation()

  function handleNavigationBack() {
    goBack()
  }
  
  return (

    <View style={styles.container} >
      <ImageBackground 
        resizeMode='contain' 
        source={giveClassesBgImage} 
        style={styles.content} 
      >
      
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description} >
          Para começar, você precisa cadastrar como professor na nossa platafoma web.
        </Text>

      </ImageBackground>
      <RectButton onPress={handleNavigationBack} style={styles.okButton} >
        <Text style={styles.okButtonText} >Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;