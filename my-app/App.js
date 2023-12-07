import { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class App extends Component {
  render() {
    const runFirst = `
    setTimeout(function() { window.alert('hi') }, 2000)
    true; // note: this is required, or you'll sometimes get silent failures`;

    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://najuha.com/' }}
          onMessage={(event) => {}}
          injectedJavaScript={runFirst}
      
        />
      </View>
    );
  }
}