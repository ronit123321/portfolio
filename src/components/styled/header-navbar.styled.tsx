import styled from "styled-components";

export const HeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: linear-gradient(-60deg, #aeaeae, #484848);
  color: white;
  padding: 200px 30px;
`;

export const HeaderNavTitleWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const HeaderNavTitle = styled.div`
  font-size: 48px;
`;

export const HeaderNavTitleInfo = styled.div`
  font-size: 24px;
`;

export const HeaderNavOtherLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderNavLink = styled.div`
  min-width: 100px;
`;
