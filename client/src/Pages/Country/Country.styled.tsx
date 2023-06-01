import styled from "styled-components";

export const CountryDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  .back {
    button {
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .text {
    height: 430px;
    span {
      font-weight: bold;
    }
  }
`;
