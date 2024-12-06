```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DataFetchSolution = () => {
  // ... (rest of the code remains the same)

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Solution: Convert ID to string
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// ... (styles remain the same)

export default DataFetchSolution;
```