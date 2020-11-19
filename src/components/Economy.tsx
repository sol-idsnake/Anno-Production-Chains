import React from 'react';
import styled from 'styled-components';
import Industry from './Industry';

console.clear();

const EconomyWrapper = styled.section`
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

type IndustryType = {
  active: Array<any>;
  toggleAll: boolean;
};

const Economy: React.FC<{ industries: IndustryType }> = ({ industries }) => {
  return (
    <EconomyWrapper className="economy">
      {industries.active.map(
        (item, index) =>
          item.active && <Industry industry={item} key={`item-${index}`} />
      )}
    </EconomyWrapper>
  );
};

export default Economy;
