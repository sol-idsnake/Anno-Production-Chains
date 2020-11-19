import React from 'react';
import { title } from '../lib/formatTitle';
import { StyledIndustryGroup } from '../styles/IndustryGroupStyles';

export type Step = {
  img: string;
  name: string;
  needed: number;
};

const IndustryGroup: React.FC<{ industryGroup: Array<Step> }> = ({
  industryGroup,
}) => (
  <StyledIndustryGroup className="group">
    {industryGroup.map((y: Step, index: number) => {
      return (
        <div key={`int-${index}`} className="factory">
          <div className="amountNeeded">{y.needed}x</div>
          <div className="int-img">
            <img src={y.img} alt="" />
          </div>
          <div className="int-name">{title(y.name)}</div>
        </div>
      );
    })}
  </StyledIndustryGroup>
);

export default IndustryGroup;
