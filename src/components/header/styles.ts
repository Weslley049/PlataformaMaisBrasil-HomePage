import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageContainer = styled.div``;

export const SessionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logout = styled.div`
  align-self: flex-end;

  span {
    color: #cccccc;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 8pt;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 8pt;
      color: #ff7777;
    }

    button {
      cursor: pointer;
      border: none;
      background: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/ico_sair.gif")
        no-repeat 0 3px;
      height: 18px;
      width: 15px;
    }
  }
`;

export const infos = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;

  .ButtonsHolder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding: 0 5px;

    a {
      color: #666666;
      text-decoration: none;
      font-size: 10px;
      cursor: pointer;
      line-height: 15px;
      font-family: Arial, Helvetica, sans-serif;

      :hover {
        text-decoration: underline;
        color: #85d6a5;
      }
    }
  }

  .infosHolder {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5 0px;

    label {
      color: #3cb56d;
      font-weight: bold;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
    }

    span {
      color: #999;
      font-size: 10px;
      font-family: Arial, Helvetica, sans-serif;
      text-transform: Uppercase;
    }
  }
`;

export const ButtonsWrapper = styled.div``;

export const UserCase = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  background-image: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/barra_principal.gif");
  background-repeat: no-repeat;

  h2 {
    float: left;
    color: #ffffff;
    margin-left: 15px;
    margin-top: 6px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .convenio {
    position: absolute;
    top: 25px;
    right: -1px;
    padding-right: 5px;
    text-align: right;
    width: 85%;
    height: 20px;
    line-height: 20px;
    background-color: #5c7eb1;
    font-size: 8pt;
    background-image: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/barra_principal_bg_r.gif");
    background-repeat: no-repeat;
    background-position: right;
  }
`;
