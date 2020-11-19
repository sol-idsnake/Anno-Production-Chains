import React from 'react';
import toggle from '../images/icon_toggle.png';
import styled from 'styled-components';
import { StyledToolbar } from '../styles/ToolbarStyles';

type Props = {
  industries: {
    active: Array<any>;
    toggleAll: boolean;
  };
  setIndustries: React.Dispatch<
    React.SetStateAction<{
      active: Array<any>;
      toggleAll: boolean;
    }>
  >;
};

const Toolbar: React.FC<Props> = ({ industries, setIndustries }: Props) => {
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    if (event.target['alt'] === 'toggle') {
      const newArr = industries.active.map((x) => {
        x.active = industries.toggleAll ? false : true;
        return { ...x };
      });
      setIndustries({ toggleAll: !industries.toggleAll, active: newArr });
    } else {
      const newArr = industries.active.map((x) => {
        if (x.final_product === event.target['alt']) {
          x.active = !x.active;
        }
        return x;
      });
      setIndustries({ active: newArr, ...industries });
    }
  };

  const images = industries.active.map((item, index: number) => (
    <div key={`item-${index}`} className="test">
      <img
        alt={item.final_product}
        className={item.active ? 'toggleOn' : 'toggleOff'}
        onClick={(e) => handleImageClick(e)}
        src={item.steps[item.steps.length - 1].img}
      />
    </div>
  ));

  return (
    <StyledToolbar>
      <div>
        <img
          alt="toggle"
          className={industries.toggleAll ? 'toggleOn' : 'toggleOff'}
          onClick={(e) => handleImageClick(e)}
          src={toggle}
        ></img>
      </div>
      {images}
    </StyledToolbar>
  );
};

export { Toolbar };
