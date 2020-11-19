import React from 'react';
import { title } from '../lib/formatTitle';
import IndustryGroup from './IndustryGroup';
import { Step } from './IndustryGroup';
import { IndustryWrapper } from '../styles/IndustryWrapper';

type IndustryType = {
  active: boolean;
  final_product: string;
  level: string;
  output: number;
  steps: Step[];
};

const Industry: React.FC<{ industry: IndustryType }> = ({ industry }) => {
  const unit: string = `unit${industry.output > 0 ? 's' : null}/min`;

  return (
    <IndustryWrapper className="industry">
      <div className="header">
        <div>{title(industry.final_product)}</div>
        <div>{`${industry.output} ${unit}`}</div>
      </div>
      <IndustryGroup industryGroup={industry.steps} />
    </IndustryWrapper>
  );
};

export default Industry;
