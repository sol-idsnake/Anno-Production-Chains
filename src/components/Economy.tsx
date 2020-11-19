import React from 'react';
import styled from 'styled-components';
import { title } from '../lib/formatTitle';
import Industry from './Industry';

console.clear();

const EconomyWrapper = styled.section`
  background-color: rgba(33, 125, 91, 0.5);
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
`;
const IndustryWrapper = styled.div`
  div.header {
    display: flex;
    justify-content: space-around;
  }
  .group {
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 10px 20px;

    div.factory {
      flex: 1 0 auto;
      text-align: center;

      &:not(:last-child) {
        margin-right: 10px;
      }

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
      {industries.active.map(
        (item, index) =>
          item.active && (
            <IndustryWrapper key={`item-${index}`} className="industry">
              <div className="header">
                <div>{title(item.final_product)}</div>
                <div>{`for ${item.output} units / min`}</div>
              </div>
              <Industry industry={item} />
            </IndustryWrapper>
          )
      )}
    </EconomyWrapper>
  );
};

export default Economy;
