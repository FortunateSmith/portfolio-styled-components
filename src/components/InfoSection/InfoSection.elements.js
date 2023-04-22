import styled, { keyframes } from "styled-components";

///////////// Animations ////////////////

const spinAnimation = keyframes`
    from {transform: rotate(225deg)}
    to {transform: rotate(360deg)} 
`;

const fadeAnimation = keyframes`
  0% { opacity: 0 }
  /* 50% { opacity: 0.3 } */
  100% { opacity: 1 }
`

export const InfoSec = styled.div`
  color: "#f6ffff";
  padding: 160px 0;
  height: 100vh;
  background: ${({ lightBg }) => (lightBg ? "#f6ffff" : "#303333")};
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: auto;
    padding: 2em 0;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding: none;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    padding: none;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15 -15 -15;
  flex-wrap: wrap;
  /* align-items: baseline; */
  /* flips which side image is on */
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? "start" : "center")};
  align-items: center;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  /* flex = flex grow, flex shrink, flex basis as one single property */
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  flex-shrink: ${({ stationary }) => (stationary ? "0" : "1")};

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 60px 20px 20px 40px;
  animation: ${fadeAnimation} 1s ease-in;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#f6ffff" : "#1a1022")};
  /* background-color: black; */
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 300px) {
    font-size: 24px;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f6ffff" : "#1a1022")};
  text-decoration: underline #1a1022 1px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 64px;
  }
`;

export const SubTitle = styled.p`
  width: 290px;
  margin-bottom: 35px;
  margin-top: 35px;
  /* border: solid 2px;
  border-radius: 5%; */
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f6ffff" : "#1a1022")};

  @media screen and (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const Resume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 1;
  margin: none;
  height: 100px;
  width: 250px;
  border: solid 2px #1a1022;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 24;

  color: #1a1022;
  background: #dffbfd;

  &:hover {
    transition: all 0.2s ease-out;
    background: ${({ primary }) => (primary ? "#f6ffff" : "#82788b")};

    border-color: #2cf4ff;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  display: flex;
  /* justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")}; */
  justify-content: center;
  align-items: center;
  animation: ${fadeAnimation} 1s ease-in;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  /* max-height: 500px; */

  @media screen and (max-width: 768px) {
    max-width: 100%;
    min-width: 300px;
    height: auto;
    object-fit: cover;
  }
`;

// Circle CSS ///////////////////////////////////////////////



export const CircleWrapper = styled.div`
  width: 301px;
  height: 301px;
  border-radius: 51%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 20%; */
  animation: ${spinAnimation} 1200ms ease-in-out, ${fadeAnimation} 1s ease-in;

  @media screen and (max-width: 991px) {
    width: 251px;
    height: 251px;
  }

  @media screen and (max-width: 768px) {
    width: 201px;
    height: 201px;
    padding-left: 5%;
    margin-right: 5em;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    width: 151px;
    height: 151px;
    padding-right: 25%;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const Deg0 = styled.img`
  transform: translate(151px);
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  /* filter: invert(100%); */

  @media screen and (max-width: 901px) {
    transform: translate(126px);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: translate(101px);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px black);
    transition: filter 0.5s ease;
  }
`;

export const Deg60 = styled.img`
  transform: rotate(61deg) translate(151px) rotate(-61deg);
  width: 80px;
  height: 80px;
  position: absolute;
  /* ${({ lightBg }) => lightBg && `filter : invert(100%)`}; */

  @media screen and (max-width: 901px) {
    transform: rotate(61deg) translate(126px) rotate(-61deg);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(61deg) translate(101px) rotate(-61deg);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px #212121);
    transition: filter 0.5s ease;
  }
`;

export const Deg120 = styled.img`
  transform: rotate(121deg) translate(151px) rotate(-121deg);
  width: 80px;
  height: 80px;
  position: absolute;
  /* filter: invert(100%); */

  @media screen and (max-width: 901px) {
    transform: rotate(121deg) translate(126px) rotate(-121deg);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(121deg) translate(101px) rotate(-121deg);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px black);
    transition: filter 0.5s ease;
  }
`;

export const Deg180 = styled.img`
  transform: rotate(181deg) translate(151px) rotate(-181deg);
  width: 80px;
  height: 80px;
  position: absolute;

  @media screen and (max-width: 901px) {
    transform: rotate(181deg) translate(126px) rotate(-181deg);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(181deg) translate(101px) rotate(-181deg);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px black);
    transition: filter 0.5s ease;
  }
`;

export const Deg240 = styled.img`
  transform: rotate(241deg) translate(151px) rotate(-241deg);
  width: 80px;
  height: 80px;
  position: absolute;

  @media screen and (max-width: 901px) {
    transform: rotate(241deg) translate(126px) rotate(-241deg);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(241deg) translate(101px) rotate(-241deg);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px black);
    transition: filter 0.5s ease;
  }
`;

export const Deg300 = styled.img`
  transform: rotate(301deg) translate(151px) rotate(-301deg);
  width: 80px;
  height: 80px;
  position: absolute;
  /* filter: invert(100%); */

  @media screen and (max-width: 901px) {
    transform: rotate(301deg) translate(126px) rotate(-301deg);
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 768px) {
    transform: rotate(301deg) translate(101px) rotate(-301deg);
    width: 60px;
    height: 60px;
  }

  &:hover {
    /* background-color: #8f8393; */
    /* filter: invert(0.9); */
    filter: drop-shadow(20px 16px 10px black);
    transition: filter 0.5s ease;
  }
`;

//  Ends //////////////////////////////////

export const Anchor = styled.a`
  text-decoration: none;

  &:hover {
  }
`;

// export const SideBar = styled.div`
//   width: 80px;
//   height: 100vh;
//   background: linear-gradient(to right, #948f97, #f6ffff);
//   position: absolute;
//   top: 80px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;

//   @media screen and (max-width: 768px) {
//     background: #f6ffff;
//   }
// `

