import styled from "styled-components";
import theme from "../../theme";

export const HomeDiv = styled.div`
  min-height: 100vh;
  background-color: ${theme.veryLightGrayLight};
`;

export const HomeContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchIconDiv = styled.div``;

export const SearchInput = styled.input`
  height: 50px;
  width: 400px;
`;

export const RegionFilter = styled.select`
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
`;
