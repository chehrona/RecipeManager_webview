import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import config from '../../config';
import { styles } from './authStyles';
import { WebView } from 'react-native-webview';
import { authenticate } from '../services';
import { Board } from '../../interfaces';

const AUTH_URL = `https://www.pinterest.com/oauth/?client_id=${config.client_id}&redirect_uri=${config.redirect_uri}&response_type=code&scope=boards:read,pins:read,boards:read_secret,pins:read_secret`;

interface AuthProps {
    setBoards: (boards: Board[]) => void;
    setLoading: (loading: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setBoards, setLoading }) => {
    const [authCode, setAuthCode] = useState<string>('');

    const handleUrlChange = (e: { url: string }) => {
        const codeUrl = e.url;
        const codeMatch = codeUrl.match(/\?code=(.+)/);
        if (codeMatch && codeMatch[1]) {
            const code = codeMatch[1];
            setAuthCode(code);
        }
    };

    useEffect(() => {
        const handleAuthenticate = async () => {
            setLoading(true);

            if (authCode?.length) {
                try {
                    const data = await authenticate(authCode);

                    if (data.items) {
                        setBoards(data.items);
                    }
                } catch (error: any) {
                    console.error('Authentication error:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        handleAuthenticate();
    }, [authCode, setBoards, setLoading]);

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
