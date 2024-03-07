import { useState  } from "react";

import { Box, Tab, Tabs } from "@mui/material";

import FormLogin from "../../Components/FormLogin/FormLogin"
import styles from "./Login.module.css";
import { LoginGoogleButton } from "./LoginGoogleButton";


export const LOGIN_USER = "LOGIN_USER"

export default function Login() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Inicia sesión en tu cuenta Ingenia
      </p>
      <Box>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          centered
        >
          <Tab
            label="Usuario"
            sx={{ fontSize: "16px" }}
          />
          <Tab
            label="Vendedor"
            sx={{ fontSize: "16px" }}
          />
        </Tabs>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
              <FormLogin userType="SignupUsuario"/>
              <LoginGoogleButton userType="SignupUsuario"/>
              {/* {loginBottom("SignupUsuario")} */}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <FormLogin userType="SignupVendedor"/>
              <LoginGoogleButton userType="SignupVendedor"/>
              {/* {loginBottom("SignupVendedor")} */}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}
