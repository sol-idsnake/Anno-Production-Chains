import styled from 'styled-components';

export const StyledToolbar = styled.section`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(15, 30px);
  grid-template-rows: repeat(auto-fill, 30px);
  justify-content: center;
  margin: 60px auto;
  max-width: 600px;

  img {
    height: 30px;
    width: 30px;

    &.toggleOff {
      filter: grayscale(100%);
    }
  }
`;
