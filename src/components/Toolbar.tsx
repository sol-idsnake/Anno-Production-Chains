import React from 'react';
import toggle from '../images/toggle/icon_toggle.png';
import styled from 'styled-components';

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

const SectioWrapper = styled.section`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-template-rows: repeat(auto-fill, 30px);
  margin: 60px auto;
  max-width: 600px;

  div:not(:last-of-type) {
    /* margin-right: 15px; */
  }
  img {
    height: 30px;
    width: 30px;

    &.toggleOff {
      filter: grayscale(100%);
    }
  }
`;

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
        src={`../images/${item.final_product}/${
          item.steps[item.steps.length - 1].img
        }`}
      />
    </div>
  ));

  return (
    <SectioWrapper>
      <div>
        <img
          alt="toggle"
          className={industries.toggleAll ? 'toggleOn' : 'toggleOff'}
          onClick={(e) => handleImageClick(e)}
          src={toggle}
        ></img>
      </div>
      {images}
    </SectioWrapper>
  );
};

export { Toolbar };
