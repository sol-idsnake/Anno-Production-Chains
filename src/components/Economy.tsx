import React from 'react';
import { StyledEconomy } from '../styles/EconomyStyles';
import Industry from './Industry';

console.clear();

type IndustryType = {
  active: Array<any>;
  toggleAll: boolean;
};

const Economy: React.FC<{ industries: IndustryType }> = ({ industries }) => (
  <StyledEconomy className="economy">
    {industries.active.map(
      (item, index) =>
        item.active && <Industry industry={item} key={`item-${index}`} />
    )}
  </StyledEconomy>
);

export default Economy;
