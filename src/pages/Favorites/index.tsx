import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

import TeacherItem from '../../componetes/TeacherItem';
import PageHeader from '../../componetes/PageHeader';

const Favorites: React.FC = () => {
  
  return (
    <>
      <View style={styles.container} >
        <PageHeader title='Meus Proffys favorítos' /> 
      </View>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />        
      </ScrollView>
    </>
  );
};

export default Favorites;