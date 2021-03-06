import React from 'react';
import {Page} from "../../ui/atoms/Page/Page";
import {
    StyledH2,
    StyledHyperlink,
    StyledListItem,
    StyledParagrapgh, StyledSVG, StyledSVGPath, StyledTip,
    StyledTipWrapper,
    StyledUnorderedList
} from "./About.styles";

export const About = (): JSX.Element => (
   <Page htmlId='about-page'>
       <StyledH2>Pages in Storybook</StyledH2>
       <StyledParagrapgh>
           We recommend building UIs with a{' '}
           <StyledHyperlink href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
               <strong>component-driven</strong>
           </StyledHyperlink>{' '}
           process starting with atomic components and ending with pages.
       </StyledParagrapgh>
       <StyledParagrapgh>
           Render pages with mock data. This makes it easy to build and review page states without
           needing to navigate to them in your app. Here are some handy patterns for managing page data
           in Storybook:
       </StyledParagrapgh>
       <StyledUnorderedList>
           <StyledListItem>
               Use a higher-level connected component. Storybook helps you compose such data from the
               &quot;args&quot; of child component stories
           </StyledListItem>
           <StyledListItem>
               Assemble data in the page component from your services. You can mock these services out
               using Storybook.
           </StyledListItem>
       </StyledUnorderedList>
       <StyledParagrapgh>
           Get a guided tutorial on component-driven development at{' '}
           <StyledHyperlink href="https://www.learnstorybook.com" target="_blank" rel="noopener noreferrer">
               Learn Storybook
           </StyledHyperlink>
           . Read more in the{' '}
           <StyledHyperlink href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
               docs
           </StyledHyperlink>
           .
       </StyledParagrapgh>
       <StyledTipWrapper>
           <StyledTip>Tip</StyledTip> Adjust the width of the canvas with the{' '}
           <StyledSVG width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
               <g fill="none" fillRule="evenodd">
                   <StyledSVGPath
                       d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                       id="a"
                       fill="#999"
                   />
               </g>
           </StyledSVG>
           Viewports addon in the toolbar
       </StyledTipWrapper>
   </Page>
);
