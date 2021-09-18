import React from 'react';
import { View } from 'react-native';
import Navigator from './routes/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
