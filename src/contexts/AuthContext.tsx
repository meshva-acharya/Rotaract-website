import React, { createContext, useContext, useState, useEffect } from 'react';
import { database, ref, set } from '../firebase'; // ✅ make sure this path is correct

interface User {
  id: string;
  name: string;
  email: string;
  role: 'visitor' | 'member' | 'bod' | 'core' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User> & { password?: string }) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('rotaract_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const mockUsers = [
      { id: '1', name: 'Admin User', email: 'admin@rotaract.com', role: 'admin' as const },
      { id: '2', name: 'Core Member', email: 'core@rotaract.com', role: 'core' as const },
      { id: '3', name: 'BOD Member', email: 'bod@rotaract.com', role: 'bod' as const },
      { id: '4', name: 'Regular Member', email: 'member@rotaract.com', role: 'member' as const },
    ];

    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('rotaract_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rotaract_user');
  };

  const register = async (userData: Partial<User> & { password?: string }): Promise<boolean> => {
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      role: 'member',
    };

    setUser(newUser);
    localStorage.setItem('rotaract_user', JSON.stringify(newUser));

    if (userData.email && userData.password) {
      await set(ref(database, 'users/' + userData.email.replace(/\./g, '_')), {
        email: userData.email,
        password: userData.password,
      });
    }

    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
