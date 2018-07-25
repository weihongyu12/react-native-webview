import React from 'react';
import {
  StyleSheet, SafeAreaView, WebView, View, TextInput, Button,
} from 'react-native';

const style = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
  },
  textInputControl: {
    flex: 1,
  },
  browserButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'https://html5test.com',
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInputControl}
            value={this.state.uri}
            onChangeText={(value) => {
              this.setState({ uri: value });
            }}
          />
          <Button
            title="刷新"
            style={style.browserButton}
            onPress={() => {
              this.webview.reload();
            }}
          />
        </View>
        <WebView
          style={{ flex: 1 }}
          ref={(e) => {
            this.webview = e;
          }}
          source={{ uri: this.state.uri }}
        />
      </SafeAreaView>
    );
  }
}
