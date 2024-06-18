import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import config from '../../config';
import { styles } from './authStyles';
import { WebView } from 'react-native-webview';
import { getBoards, getToken } from '../services';

const AUTH_URL = `https://www.pinterest.com/oauth/?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&scope=boards:read,pins:read`;

interface AuthProps {
    setHaveCode: (haveCode: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setHaveCode }) => {
    const [exchangeCode, setExchangeCode] = useState<string>('');
    const [token, setToken] = useState<string>('');

    const handleUrlChange = (e: { url: string }) => {
        const codeUrl = e.url;
        const codeMatch = codeUrl.match(/\?code=(.+)/);
        if (codeMatch && codeMatch[1]) {
            const code = codeMatch[1];
            setExchangeCode(code);
            setHaveCode(true);
        }
    };

    useEffect(() => {
        if (exchangeCode.length) {
            getToken(exchangeCode)
                .then((data: any) => {
                    console.log('Token data **************************:', data);
                    setToken(data.access_token); // Assuming `data.access_token` is the token
                })
                .catch((error: any) => {
                    console.error('Error fetching token:', error);
                });
        }
    }, [exchangeCode]);

    useEffect(() => {
        if (token) {
            getBoards(token)
                .then((boards: any) => {
                    console.log('Boards data:', boards);
                    // Handle boards data as needed
                })
                .catch((error: any) => {
                    console.error('Error fetching boards:', error);
                });
        }
    }, [token]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Recipe Manager</Text>
            <Text style={styles.instruction}>
                Please log in to allow the app to retrieve your saved pins
            </Text>
            <WebView
                style={styles.authView}
                originWhitelist={['*']}
                source={{ uri: AUTH_URL }}
                onNavigationStateChange={handleUrlChange}
            />
        </SafeAreaView>
    );
};

export default Auth;
