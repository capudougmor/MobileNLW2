import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import styles from './styles';

import PageHeader from '../../componetes/PageHeader';
import TeacherItem, { Teacher } from '../../componetes/TeacherItem';

const TeacherList: React.FC = () => {

  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const [teachers, setTeachers] = useState([])

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible)
  }

  async function handleFilterSubmit() {
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })
    
    setIsFilterVisible(false)
    setTeachers(response.data)
  }

  return (
    <>
      <View style={styles.container} >
        <ScrollView>
          <PageHeader
            title='Proffys disponíveis'
            headerRight={(
              <BorderlessButton onPress={handleToggleFiltersVisible}>
                <Feather name='filter' size={20} color="#fff" />
              </BorderlessButton>
            )}
          >
            {isFilterVisible && (
              <View style={styles.seatchForm} >
                <Text style={styles.label} >Matéria</Text>
                <TextInput
                  style={styles.input}
                  value={subject}
                  onChangeText={text => setSubject(text)}
                  placeholder='Qual é a matéria?'
                  placeholderTextColor="#c1bccf"
                />

                <View style={styles.inputGroup} >
                  <View style={styles.inputBlock} >
                    <Text style={styles.label} >Dia da semana</Text>
                    <TextInput
                      style={styles.input}
                      value={week_day}
                      onChangeText={text => setWeek_day(text)}
                      placeholder='Qual o dia?'
                      placeholderTextColor="#c1bccf"
                    />

                  </View>

                  <View style={styles.inputBlock} >
                    <Text style={styles.label} >Horário</Text>
                    <TextInput
                      style={styles.input}
                      value={time}
                      onChangeText={text => setTime(text)}
                      placeholder='Qual o horário?'
                      placeholderTextColor="#c1bccf"
                    />
                  </View>
                </View>

                <RectButton onPress={handleFilterSubmit} style={styles.submitButton} >
                  <Text style={styles.submitButtonText} >Filtrar</Text>
                </RectButton>
              </View>
            )}
          </PageHeader>
        </ScrollView>
      </View>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        >
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
        
      </ScrollView>
    </>
  );
};

export default TeacherList;