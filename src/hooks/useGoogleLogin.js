import { gapi } from 'gapi-cjs';
import { useState, useEffect } from 'react';

export const useGoogleLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId:
            '168202722255-fnrndu7aq5vbsk0evbdgn93d054a2v5g.apps.googleusercontent.com',
          scope: 'openid',
        })
        .then(() => {
          const auth = gapi.auth2.getAuthInstance();
          setUser(auth.currentUser.get().getBasicProfile());
        });
    });
  }, []);

  const signIn = async () => {
    const auth = await gapi.auth2.getAuthInstance();
    await auth.signIn();
    const { access_token, id_token } = await auth.currentUser
      .get()
      .getAuthResponse();
    return { access_token, id_token };
  };

  const signOut = async () => {
    const auth = await gapi.auth2.getAuthInstance();
    await auth.signOut();
  };

  return { user, signIn, signOut };
};
