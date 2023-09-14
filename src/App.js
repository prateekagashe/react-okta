// import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { useNavigate } from 'react-router-dom';

import { Security } from "@okta/okta-react";
import {
  OktaAuth,
  toRelativeUrl
} from '@okta/okta-auth-js'


function App() {

const oktaAuth = new OktaAuth({
    clientId: 'XXXXXXXXXXXXX', //Pass Client Id as received from the client 
    issuer:'https://XXXXXXXXX.okta.com', //Pass Issuer as received from the client
    redirectUri: `${window.location.origin}/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    responseType: "id_token",
    disableHttpsCheck: true,
  });
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  return (
   <div style={{background: '#F4F7FC'}}>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Routes/>
      </Security>
    </div>
  );
}

export default App;
