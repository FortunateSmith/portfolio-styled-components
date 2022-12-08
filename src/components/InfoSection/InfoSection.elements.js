import styled from "styled-components";

export const InfoSec = styled.div`
  color: "#f6effc";
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#f6effc": "#1a1022")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15 -15 -15;
  flex-wrap: wrap;
  align-items: center;
  /* flips which side image is on */
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  /* flex grow, flex shrink, flex basis, */
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#f6effc": "#1a1022")};
  /* background-color: black; */
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f6effc": "#1a1022")};
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f6effc": "#1a1022")};
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ primary }) => (primary ? "#f6effc": "#1a1022")};

  &:hover {
    color: ${({ primary }) => (primary ? "#101522" : "#f6effc")};
  }
`;
