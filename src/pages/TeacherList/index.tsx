import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import PageHeader from '../../componetes/PageHeader';

const TeacherList: React.FC = () => {

  
  return (
    <View style={styles.container} >
      <PageHeader title='Proffys disponíveis' /> 
    </View>
  );
};

export default TeacherList;