import React from 'react';
import styled from 'styled-components';
import { title } from '../lib/formatTitle';
import Industry from './Industry';

console.clear();

const EconomyWrapper = styled.section`
  background-color: rgba(33, 125, 91, 0.5);
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, max-content));
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
`;
const IndustryWrapper = styled.div`
  .group {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    padding: 5px 20px;

    div.factory {
      flex: 1 0;

      &:not(:last-child) {
        margin-right: 10px;
      }
      text-align: center;

      .int-img {
        img {
          width: 35px;
        }
      }
    }
  }
`;

const Economy = ({ industries }) => {
  return (
    <EconomyWrapper className="economy">
      {industries.active.map((item, index) => {
        return (
          item.active && (
            <IndustryWrapper key={`item-${index}`} className="industry">
              <div className="title">{title(item.final_product)}</div>
              <Industry industry={item} />
            </IndustryWrapper>
          )
        );
      })}
    </EconomyWrapper>
  );
};

export default Economy;
