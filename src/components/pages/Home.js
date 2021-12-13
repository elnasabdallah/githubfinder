import React from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
  const { keycloak, initialized } = useKeycloak();
  console.log(keycloak);
  return (
    <React.Fragment>
      <Search />
      <strong>Anyone can access this page</strong>

      {initialized ? (
        keycloak.authenticated && (
          <pre>{JSON.stringify(keycloak, undefined, 2)}</pre>
        )
      ) : (
        <h2>keycloak initializing ....!!!!</h2>
      )}
      <Users />
    </React.Fragment>
  );
};
export default Home;
