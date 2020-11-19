import styled from 'styled-components';

export const IndustryWrapper = styled.div`
  border: 1px solid darkgrey;

  div.header {
    background-color: #8e6c41;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #fff;
    display: flex;
    flex-basis: 100%;
    margin: 3px 3px 0;
    padding: 10px;
    justify-content: space-around;
  }
  .group {
    display: flex;
    flex-wrap: wrap;

    div.factory {
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
      width: 140px;

      .int-img {
        img {
          width: 35px;
        }
      }
    }
  }
`;
