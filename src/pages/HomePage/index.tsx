import React, { useState } from "react";

import * as S from "./styles";
import { optionsButtons, messages } from "../../utils/constants";

import Header from "../../components/header";
import DynamicImage from "../../components/DynamicImage";

export default function HomePage() {
  const [sectionToShow, setSectionToShow] = useState<number>(null);

  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.BodyContent>
          <S.SectionCol1>
            <section>
              {optionsButtons.map((option, index) => (
                <React.Fragment key={index}>
                  <div
                    className="button"
                    onClick={() => setSectionToShow(index)}
                  >
                    {" "}
                    <p>{option.buttonTitle}</p>
                  </div>
                </React.Fragment>
              ))}
            </section>
          </S.SectionCol1>
          <S.SectionCol2>
            <div className="inBox">
              <div className="image">
                <DynamicImage
                  srcPath="https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/ico_cx_entrada.gif"
                  alt="icon entrada"
                />
              </div>

              <h3> Caixa de Entrada</h3>
            </div>
            <S.InBoxList>
              <S.TableMessages>
                <tbody>
                  {messages.map((message, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td className="image">
                          <DynamicImage
                            srcPath="https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/relogio02.jpg"
                            alt="icon watch"
                            height={19}
                            width={19}
                          />
                        </td>
                        <td className="info">
                          <a>{message}</a>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </S.TableMessages>
            </S.InBoxList>
          </S.SectionCol2>
          <S.ContentMain>
            {sectionToShow !== null && (
              <S.ContentMenu>
                <h3> {optionsButtons[sectionToShow].buttonTitle}</h3>
                <ul>
                  <div>
                    {optionsButtons[sectionToShow].optionsList.map(
                      (option, index) => (
                        <React.Fragment key={index}>
                          <li>
                            {" "}
                            <a href="#">{option} </a>
                          </li>
                        </React.Fragment>
                      )
                    )}
                  </div>
                </ul>
              </S.ContentMenu>
            )}
          </S.ContentMain>
        </S.BodyContent>
      </S.Content>
    </S.Container>
  );
}
