import styled from "styled-components";
import theme from "../../theme";

export const CardDiv = styled.div`
  min-width: 100px;
  width: 250px;
  height: 300px;
  background-color: ${theme.white};
  .image {
    img {
      width: 100%;
      height: 150px;
    }
  }
  .text {
    font-family: inherit;
    .name {
      font-weight: 800;
      font-size: 18px;
    }
    .details {
      p {
        font-size: 14px;
        color: ${theme.darkGrayLight};
        span {
          font-weight: 600;
          padding-right: 5px;
          color: black;
        }
      }
    }
  }
`;
