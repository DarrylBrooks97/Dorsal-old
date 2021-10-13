import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useState,useEffect } from 'react';
import Supabase from '@/clients/supabase';

export default function Auth(props: {
  children: ReactJSXElement;
  supabase: Supabase;
  user: Supabase.User;
  onLogin: (user: Supabase.User) => void;
  onLogout: () => void;
}): ReactJSXElement {
  const { children, supabase, user, onLogin, onLogout } = props;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const login = async (): Promise<void> => {
    const user = await supabase.auth.login();
    onLogin(user);
    setIsLoggedIn(true);
  };

  const logout = async (): Promise<void> => {
    await supabase.auth.logout();
    onLogout();
    setIsLoggedIn(false);
  };

  return (
    <>
      {children({
        isLoggedIn,
        login,
        logout,
      })}
    </>
  );
}