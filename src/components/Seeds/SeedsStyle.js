import styled from "styled-components";
import { devices } from "../../helpers/screens";

export const Container = styled.div`
  width: 100px;
  height: 25px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Luckiest Guy;
  font-size: 20px;
  margin-right: 10px;
  background: #507fcc;
  border: 4px solid #333;
  box-shadow: 0 8px 0 rgb(0 0 0 / 20%), inset 0 -5px 0 #436aab,
    inset 0 5px 0 #78acff;
  border-radius: 15px;
  color: white;

  @media (max-width: 425px) {
    height: 20px;
    width: 30%;
    padding: 5px;
    font-size: 15px;
    margin-right: 0px;
  }
`;

export const Logo = styled.img`
  width: 40%;

  @media (max-width: 425px) {
    width: 25px;
  }
`;