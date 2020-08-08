import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

import PageHeader from '../../componetes/PageHeader';
import TeacherItem from '../../componetes/TeacherItem';

const TeacherList: React.FC = () => {

  
  return (
    <>
      <View style={styles.container} >
        <PageHeader title='Proffys disponíveis' /> 
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

export default TeacherList;