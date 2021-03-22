import React from 'react';

import { Button } from '../Button/Button';
import {StyledH1, StyledHeader, StyledSvg} from "./Header.styles";
import { useHistory } from "react-router-dom";

export interface HeaderProps {
  /** Id of the element */
  htmlId: string;
}

export const Header: React.FC<HeaderProps> = ({ htmlId }) => {
  const history = useHistory();

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const goToAboutPage = (e: React.MouseEvent): void => {
    history.push("/About");
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const goToFavoritesPage = (e: React.MouseEvent): void => {
    history.push("/Favorites");
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const goToLanguagesPage = (e: React.MouseEvent): void => {
    history.push("/Languages");
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const goToHomePage = (e: React.MouseEvent): void => {
    history.push("/");
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const goToVersionPage = (e: React.MouseEvent): void => {
    history.push("/Version");
  };

  return (
      <StyledHeader data-testid={htmlId}>
        <div>
          <StyledSvg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
              />
              <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
              />
              <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
              />
            </g>
          </StyledSvg>
          <StyledH1>Dog Gallery</StyledH1>
        </div>
        <div>
          <Button primary={false} size="small" onClick={goToHomePage} label="Home" htmlId='header-home-button'/>
          <Button primary={false} size="small" onClick={goToAboutPage} label="About" htmlId='header-about-button'/>
          <Button primary={false} size="small" onClick={goToFavoritesPage} label="Favorites" htmlId='header-favorites-button'/>
          <Button primary={false} size="small" onClick={goToLanguagesPage} label="Languages" htmlId='header-languages-button'/>
          <Button primary={false} size="small" onClick={goToVersionPage} label="Code Challenge" htmlId='header-version-button'/>
        </div>
      </StyledHeader>
  );
};
