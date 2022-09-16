import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// import Menu from "../menu/menu"
import Main from "./main";
// import {
//   BlobityContext,
//   ContextProviderComponent,
// } from "../../utils/blobity.context"
// import GlobalStyle from "../../styles/Global"

const SiteContainer = styled.div`
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
    <SiteContainer id="outer-container">
      {/* <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        siteTitle={data.site.siteMetadata.title}
      /> */}
      <Main>{children}</Main>
    </SiteContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
