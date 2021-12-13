import Keycloak from "keycloak-js";
const keycloakConfig = {
  url: "http://0.0.0.0:8081/auth/",
  realm: "keycloak-demo",
  clientId: "react-test-app",
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;
