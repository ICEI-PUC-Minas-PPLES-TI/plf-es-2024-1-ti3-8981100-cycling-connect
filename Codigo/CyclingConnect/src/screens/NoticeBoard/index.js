import React, { useCallback, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as S from './styles';
import { NoticeCard } from '../../components';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

function NoticeBoard({ navigation }) {
  const [events, setNoticeBoard] = useState([]);
  const route = useRoute();
  const { params } = route;

  useFocusEffect(
    useCallback(() => {
      axios.get(`http://10.0.2.2:8080/noticeBoard`)
        .then(response => {
          setNoticeBoard(response.data.map(event => ({
            ...event,
            date: new Date(event.date).toLocaleDateString('pt-BR')
          })));
        })
        .catch(err => {
          console.log('NoticeBoard fetch error', err);
        });
    }, [])
  );

  return (
    <S.SafeAreaView>
      <S.Container>
        <View style={{ flex: 1 }}>
          <S.Header>
            <S.Title>Mural de Avisos</S.Title>
          </S.Header>
          <FlatList
            data={events}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <NoticeCard
                title={item.title}
                description={item.description}
                date={item.date}
                onPress={() => navigation.navigate('EventDetails', item)}
              />
            )}
            ListEmptyComponent={() => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#fff', textAlign: 'center' }}>
                  Nenhum aviso disponível.
                </Text>
              </View>
            )}
            ListFooterComponent={() => <View style={{ paddingBottom: 100 }} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </S.Container>
    </S.SafeAreaView>
  );
}

export default NoticeBoard;
