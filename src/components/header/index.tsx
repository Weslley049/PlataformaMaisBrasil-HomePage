import React from "react";

import { ValidateLogout } from "../../utils/ValidateLogout";
import * as S from "./styles";

import DynamicImage from "../DynamicImage";

export default function Header() {
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <DynamicImage
            srcPath="https://voluntarias.plataformamaisbrasil.gov.br:443/voluntarias/layout/producao/imagens/logo_portal.png"
            alt="logo Portal"
          />
        </S.ImageContainer>
        <S.SessionInfoContainer>
          <S.Logout>
            <div>
              <p> Sair do sistema</p>
              <button onClick={() => ValidateLogout()} />
            </div>

            <span> 07/02/2022 16:06-v.6.110</span>
          </S.Logout>
          <S.infos>
            <div className="ButtonsHolder">
              <a href="#"> Alterar senha</a>
              <a href="#"> Alterar meus Dados</a>
            </div>

            <div className="infosHolder">
              <S.ButtonsWrapper>
                <label> Usuário: </label>
                <span> Patricia pequeno costa gomes de aguiar</span>
              </S.ButtonsWrapper>

              <S.ButtonsWrapper>
                <label> CPF: </label>
                <span> 999.999.999-99</span>
              </S.ButtonsWrapper>
            </div>
          </S.infos>
        </S.SessionInfoContainer>
      </S.Container>
      <S.UserCase>
        <h2>Principal</h2>
        <div className="convenio" />
      </S.UserCase>
    </>
  );
}
