import { useEffect, useCallback } from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import styles from '@/constants/style/style';
import React, { useState } from 'react';
import InputText from '@/components/InputText';
import { Link, useRouter } from 'expo-router';
import colors from '@/constants/colors/colors';
import NavBar from '@/components/NavBar';
import { LoginDiretor } from '@/constants/fetchDiretor/fetchDiretor';
import { useAuth } from '@/constants/context/AuthContext';
import { validateEmail } from '@/constants/validaEmail/validate';
import { Ionicons } from '@expo/vector-icons';
import Login from '@/components/login';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const isDisabled = !email || !validateEmail(email);

    const handleLogin = async () => {
        const options = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        }
        const { message, error } = await LoginDiretor(options);
        
        if (message) {
            login(message);
            setEmail('');
            router.push('/diretor/page');
        } else if (error) {
            setError(error);
        }
    }

    return (
        <>
            <NavBar />
            <ImageBackground
                source={require("../assets/images/school_.png")}
                style={styles.background}
            >
                {error && <Text style={styles.error}>{error}</Text>}
                <View style={styles.containerProfile}>
                    <Text style={styles.text}>Login Diretor</Text>
                    <Login
                        placeholder="Email"
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        onPress={handleLogin} 
                        color={colors.primary} 
                        disabled={isDisabled} 
                    />
                    <Link href="/" style={styles.link}>
                        <Ionicons name="close-circle" size={24} color={colors.secondary} />
                        <Text style={styles.link}>Somente diretor!!</Text>
                    </Link>
                    <Link href="/professor/page" style={styles.link}>
                        <Ionicons name="log-in" size={24} color={colors.secondary} />
                        <Text style={styles.link}>Login Professor!!</Text>
                    </Link>
                    <Link href="/student/page" style={styles.link}>
                        <Ionicons name="log-in" size={24} color={colors.secondary} />
                        <Text style={styles.link}>Login Aluno!!</Text>
                    </Link>
                </View>
            </ImageBackground>
        </>
    );
}

export default Profile;
