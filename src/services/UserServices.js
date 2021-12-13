import Keycloak from "keycloak-js";
// let initOption = {
//   url: "https://0.0.0.0:8081/auth",
//   realm: "keycloak-demo",
//   clientId: "react-test-app",
//   onLoad: "login-required",
// };
const _kc = new Keycloak({
  url: "http://0.0.0.0:8081/auth/",
  realm: "keycloak-demo",
  clientId: "react-test-app",
});

const initKeyCloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    })
    .then((authenticated) => {
      if (authenticated) {
        onAuthenticatedCallback();
      } else {
        console.warn("Not authenticated");
        doLogin();
      }
    })
    .catch((err) => console.log(err));
};
const doLogin = _kc.login;
const doLogout = -_kc.logout;

const getToken = () => _kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);
const getUsername = () => _kc.tokenParsed?.preferred_username;
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserServices = {
  initKeyCloak,
  doLogin,
  doLogout,
  getUsername,
  getToken,
  updateToken,
  hasRole,
};
export default UserServices;
