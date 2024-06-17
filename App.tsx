import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import config from './config';

const AUTH_URL = `https://www.pinterest.com/oauth/?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&scope=boards:read,pins:read`;

function App(): React.JSX.Element {
    const handleUrlChange = (e: { url: string }) => {
        console.log(e.url, 'url');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Here</Text>
            <WebView
                source={{ uri: AUTH_URL }}
                onNavigationStateChange={handleUrlChange}
                style={styles.webview}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});

export default App;
