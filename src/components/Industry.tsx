import React from 'react';
import { title } from '../lib/formatTitle';

// type Item = {
//   active: boolean;
//   final_product: string;
//   level: string;
//   output: number;
//   steps: Step[];
// };
// type Step = {
//   img: string;
//   name: string;
//   needed: number;
// };

const Industry = ({ industry }) => {
  const chainWorks = (industry) => {
    return (
      <>
        {industry.steps.map((y, index: number) => {
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
      </>
    );
  };

  return <div className="group">{chainWorks(industry)}</div>;
};

export default Industry;
