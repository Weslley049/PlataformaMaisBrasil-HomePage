import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  height: 100%;
  width: 90%;
`;

export const BodyContent = styled.div`
  display: grid;
  grid-template-areas:
    "section1 main main"
    "section2 main main";
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 3fr;
`;

export const SectionCol1 = styled.div`
  grid-area: section1;
  width: 360px;
  min-width: 340px;
  float: left;
  margin-bottom: 10px;

  .button {
    width: 147px;
    margin-top: 1px;
    margin-bottom: 1px;
    margin-right: 2px;
    float: left;
    background: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/bg_grupo.png")
      repeat-x;
    border: 1px solid #d3d3d3;
    cursor: pointer;
    color: #3c567d;
    text-decoration: none;
    font-size: 8pt;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    padding: 4px 0 4px 20px;
    font-weight: normal;

    :hover {
      background: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/bg_grupo_ativo.png");
    }

    p {
    }
  }
`;

export const SectionCol2 = styled.div`
  grid-area: section2;
  width: 338px;
  height: 320px;
  position: relative;
  margin-left: 2px;
  padding: 0;
  clear: left;
  border: 1px solid #d3d3d3;

  .inBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10%;
    width: 100%;
    background: rgba(211, 211, 211, 0.4);

    .image {
      margin-right: 10px;
    }

    h3 {
      color: #666;
      font-size: 12px;
      font-weight: bold;
      line-height: 23px;
      font-family: Arial, Helvetica, sans-serif;

      margin-top: 0;
    }
  }
`;

export const InBoxList = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 90%;
`;

export const TableMessages = styled.table`
  border-collapse: separate;
  overflow: scroll;
  tbody {
    tr {
      display: table-row;
      align-items: center;

      .image {
      }

      .info {
        a {
          text-decoration: none;
          color: #666666;
          font-size: 10px;
          line-height: 10px;
          cursor: pointer;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
  }
`;

export const ContentMain = styled.div`
  grid-area: main;
  width: 100%;
  height: 50vh;
`;

export const ContentMenu = styled.div`
  min-width: 410px;
  /* width: 98%; */
  float: left;
  margin-left: 0px;
  margin-right: 0px;
  position: absolute;
  padding: 0 5px;

  h3 {
    color: #3c567d;
    font-size: 9pt;
    font-weight: bold;
    background: #ffff99
      url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/seta_menu.gif")
      no-repeat 5px center;
    height: 25px;
    line-height: 25px;
    padding-left: 15px;
    margin-top: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    list-style: none;
    list-style-position: inside;
    list-style-image: url("https://voluntarias.plataformamaisbrasil.gov.br/voluntarias/layout/default/imagens/seta_item_menu.gif");
    padding: 0;
    margin: 0;
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      li {
        ::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
        }

        a {
          text-decoration: none;
          color: #666666;
          font-size: 10px;
          font-family: Arial, Helvetica, sans-serif;

          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
