import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import Menu from "../menu/menu"
import GlobalStyle from "../../styles/Global";
import Main from "./main";
import Head from "next/head";
// import {
//   BlobityContext,
//   ContextProviderComponent,
// } from "../../utils/blobity.context"

const SiteContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor || "black"};
  background-color: var(--background);
`;

const Layout = ({ children }) => {
  // const blobityContext = useContext(BlobityContext);

  return (
    // <div id="outer-container" theme={blobityContext.data.theme}>
    <>
      <GlobalStyle />
      <Head>
        <title>Accueil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SiteContainer id="outer-container">
        {/* <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        siteTitle={data.site.siteMetadata.title}
      /> */}
        <Main>{children}</Main>
      </SiteContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
