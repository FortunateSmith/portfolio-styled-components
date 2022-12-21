import styled from "styled-components";

export const InfoSec = styled.div`
  color: "#f6effc";
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#f6effc" : "#1a1022")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15 -15 -15;
  flex-wrap: wrap;
  align-items: center;
  /* flips which side image is on */
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  /* flex = flex grow, flex shrink, flex basis as one single property */
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
  padding: 60px 20px 20px 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#f6effc" : "#1a1022")};
  /* background-color: black; */
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px){
    font-size: 32px;
  }

  @media screen and (max-width: 300px){
    font-size: 24px;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f6effc" : "#1a1022")};
  @media screen and (max-width: 768px) {
    text-align: center;
   font-size: 64px; 
  
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  /* border: solid 2px;
  border-radius: 5%; */
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f6effc" : "#1a1022")};

  @media screen and (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  display: flex;
  /* justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")}; */
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* max-height: 500px; */
`;

export const CircleWrapper = styled.div`
  width: 301px;
  height: 301px;
  border-radius: 51%;
  position: relative;
  display: flex;
  /* justify-content: ${({ startCircle }) => (startCircle ? "flex-start" : "flex-end")}; */
  justify-content: center;
  align-items: center;
  /* align-items: */
  /* margin: 50px; */
  padding-left:20%; 

  @media screen and (max-width: 768px){
    width: 201px;
    height: 201px;
    /* padding-right: 20%; */
    margin-right: 40%;
  }

  @media screen and (max-width: 300px){
    width: 201px;
    height: 201px;
    /* padding-right: 30%; */
    margin: 0 auto;
  }
`;

export const Deg0 = styled.img`
  transform: translate(151px);
  width: 80px;
  height: 80px;
  position: absolute;
  /* filter: invert(100%); */

  @media screen and (max-width: 768px){
    transform: translate(101px);
    width: 60px;
    height: 60px
  }
`;

export const Deg60 = styled.img`
  transform: rotate(61deg) translate(151px) rotate(-61deg);
  width: 80px;
  height: 80px;
  position: absolute;
  /* ${({ lightBg }) => lightBg && `filter : invert(100%)`}; */

  @media screen and (max-width: 768px){
    transform: rotate(61deg) translate(101px) rotate(-61deg);
    width: 60px;
    height: 60px
  }
`;
export const Deg120 = styled.img`
  transform: rotate(121deg) translate(151px) rotate(-121deg);
  width: 80px;
  height: 80px;
  position: absolute;
  /* filter: invert(100%); */

  @media screen and (max-width: 768px){
    transform: rotate(121deg) translate(101px) rotate(-121deg);
    width: 60px;
    height: 60px
  }
 `;

 export const Deg180 = styled.img`
   transform: rotate(181deg) translate(151px) rotate(-181deg);
   width: 80px;
   height: 80px;
   position: absolute;

   @media screen and (max-width: 768px){
    transform: rotate(181deg) translate(101px) rotate(-181deg);
    width: 60px;
    height: 60px
  }
 `;

 export const Deg240 = styled.img`
   transform: rotate(241deg) translate(151px) rotate(-241deg);
   width: 80px;
   height: 80px;
   position: absolute;

   @media screen and (max-width: 768px){
    transform: rotate(241deg) translate(101px) rotate(-241deg);
    width: 60px;
    height: 60px
  }
 `;

 export const Deg300 = styled.img`
   transform: rotate(301deg) translate(151px) rotate(-301deg);
   width: 80px;
   height: 80px;
   position: absolute;
   filter: invert(100%);

   @media screen and (max-width: 768px){
    transform: rotate(301deg) translate(101px) rotate(-301deg);
    width: 60px;
    height: 60px
  }
 `;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ primary }) => (primary ? "#f6effc" : "#1a1022")};

  &:hover {
    color: ${({ primary }) => (primary ? "#101522" : "#f6effc")};
  }
`;
