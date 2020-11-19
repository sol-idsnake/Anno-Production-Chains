import styled from 'styled-components';

export const StyledEconomy = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (min-width: 1600px) {
    max-width: 1440px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1800px;
  }
`;
