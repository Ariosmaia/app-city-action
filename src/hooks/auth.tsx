import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthState {
  token: string;
  citizen: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  citizen: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageDara(): Promise<void> {
      const [token, citizen] = await AsyncStorage.multiGet([
        '@GoBarber:token',
        '@GoBarber:citizen',
      ]);

      if (token[1] && citizen[1]) {
        setData({ token: token[1], citizen: JSON.parse(citizen[1]) });
      }

      setLoading(false);
    }
    loadStorageDara();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    console.log(email, password);
    const response = await api.post('Account/login', {
      email,
      password,
    });
    console.log('aqui');

    const { token, citizen } = response.data;

    await AsyncStorage.multiSet([
      ['@GoBarber:token', token],
      ['@GoBarber:citizen', JSON.stringify(citizen)],
    ]);

    setData({ token, citizen });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarber:citizen']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ citizen: data.citizen, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  // verifca se o contexto foi criado
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
