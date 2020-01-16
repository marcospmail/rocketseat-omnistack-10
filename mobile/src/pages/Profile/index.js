import React from 'react';
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
  const github_user = navigation.getParam('github_username');
  return (
    <WebView source={{ uri: `https://github.com/${github_user}` }} style={{ flex: 1 }} />
  );
}
