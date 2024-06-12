import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import axios from 'axios';

interface Notice {
  id: string;
  title: string;
  description: string;
}

export default function NoticeBoard() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('https://node-postgres-reactnative.onrender.com/notice');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchNotices();
    } catch (error) {
      console.error('Error refreshing notices:', error);
    }
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Mural de Avisos</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}
      >
        {notices.map((notice) => (
          <View key={notice.id} style={styles.card}>
            <Text style={styles.title}>{notice.title}</Text>
            <Text style={styles.description}>{notice.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#333'
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20, // Space below the title
    color: '#F30',
  },
  scrollView: {
    width: '100%',
  },
  card: {
    backgroundColor: '#AAA',
    padding: 26,
    borderRadius: 14,
    marginVertical: 12,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
