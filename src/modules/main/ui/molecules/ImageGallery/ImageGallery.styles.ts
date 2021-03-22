import styled from "styled-components";

export const StyledImageGallery = styled.div`
    position: relative;
    display: flex; 
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 1000px;
    padding: 0.5rem;
      > * {
        border: 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 4px;
            &:not(:last-child) {
              margin-right: 10px;
              margin-bottom: 10px;
            }
    }
`;
