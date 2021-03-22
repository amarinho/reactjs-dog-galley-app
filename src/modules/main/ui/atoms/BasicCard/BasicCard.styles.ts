import styled from 'styled-components';

export const Styledlabel = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 20px 0px 20px 0px;
  max-width: 100%;
  max-height: 100%;
  border: none;
  font-size: 20px;
  text-align: center;
  &:hover {
    opacity: 1;
  }

  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
`;
