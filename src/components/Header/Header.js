import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../data/AppContext";

import {
  FarmSignal,
  Header,
  Logo,
  Title,
  TokenInput,
  TokenWrapper,
  TokenLabel,
  QuestionSign,
} from "./HeaderStyles";

const HeaderComp = (props) => {
  const { token, setToken } = useContext(AppContext);
  const { farmActive, setShowTutorial } = props;

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("appToken"));
    } else {
      localStorage.setItem("appToken", token);
    }
  }, [token]);

  return (
    <Header>
      <Logo src="/Logo.png" />
      <Title>PVU Monitor</Title>
      <TokenWrapper>
        <TokenLabel>Agrega tu token de acceso</TokenLabel>
        <TokenInput
          type="text"
          value={token || ""}
          onChange={({ target }) => {
            target.value.length > 200 && setToken(target.value);
          }}
        />
        <QuestionSign onClick={() => setShowTutorial(true)}>?</QuestionSign>
      </TokenWrapper>
      <FarmSignal active={farmActive}>
        {token
          ? farmActive
            ? "Puedes farmear 😎🌿"
            : "No puedes farmear 😥"
          : "Agrega un token válido"}
      </FarmSignal>
    </Header>
  );
};

export default HeaderComp;
