import React from "react";
import styled from "styled-components";
import { Meter } from "grommet";
import {useParams} from "react-router-dom"
import { getCookie } from "../../shared/cookie";
const DetailpageProgress = () => {
  const token = getCookie("token");
  const {challengeId} = useParams();
  return (
    <>
     { !token ?
     <>
      <MySkill>내 실력보여주기</MySkill>
    <Container primary onClick={() => {
        window.location.pathname= '/login';
      }}>
      <div id="firstBox">
        <div id="stepNum"><p style={{color:"#1FB57E"}}>07</p><p>/08</p></div>
        <div id="myRank">1st</div>
      </div>
      <div id="proBar" >
        <Meter
          size="xsmall"
          height="20px"
          width="300px"
          type="bar"
          background="#FAFAFA"
          color="#1FB57E"
          value={40}
        />
      </div>
      <div id="secBox">
          <p>순위</p>
          <p>1/6</p>
      </div>
    </Container></> : <Container onClick={() => {
      window.location.pathname= `/detailpage/rank/${challengeId}`;
    }}>
    <div id="firstBox">
      <div id="stepNum"><p style={{color:"#1FB57E"}}>07</p><p>/08</p></div>
      <div id="myRank">1st</div>
    </div>
    <div id="proBar">
      <Meter
        size="xsmall"
        height="20px"
        width="300px"
        type="bar"
        background="#FAFAFA"
        color="#1FB57E"
        value={40}
      />
    </div>
    <div id="secBox">
        <p>순위</p>
        <p>1/6</p>
    </div>
  </Container>}
    
    </>
   
  );
};

export default DetailpageProgress;

const Container = styled.div`
  width: 375px;
  height: 219px;
  filter: blur(${props => props.primary? "8px" : 0});


  #firstBox{
      width: 300px;
      margin-left: 37px;
      display: flex;
      justify-content: space-between;
      height: 142px;
      #myRank{
          padding-top: 27px; 
          font-size: 80px;
          font-family: Gmarket SansBold;
      }
      #stepNum{
          display: flex;
        padding-top: 60px; 
          font-size: 32px;
          font-family: Gmarket SansBold;
          color: #c4c4c4;
      }
  }
  #firstBox{
      width: 300px;
      margin-left: 37px;
      display: flex;
      justify-content: space-between;
      height: 142px;
      #myRank{
          padding-top: 27px; 
          font-size: 80px;
          font-family: Gmarket SansBold;
      }
      #stepNum{
          display: flex;
        padding-top: 60px; 
          font-size: 32px;
          font-family: Gmarket SansBold;
          color: #c4c4c4;
      }
  }
  #proBar{
      width: 300px;
      height: 20px;
      border: 2px solid #151419;
      margin-left: 37px;
  }
  #secBox{
      width: 300px;
      margin-left: 37px;
      display: flex;
      justify-content: space-between;

      font-family: Gmarket SansMedium;
  
  &:hover{
        cursor: pointer;
        background-color: #151419;
        #myRank{
            color:#ffffff;
        }
        #proBar{
            border: 2px solid #ffffff;
        }
        #secBox{
            color:#ffffff;
        }
    } };
`;
const MySkill = styled.div`
  width: 187px;
  height: 60px;
  color:#ffffff;
  font-size: 18px;
  font-family: Gmarket SansMedium;
  text-align: center;
  line-height: 54px;
  background-color: #151419;
  margin: 80px 0 0 100px;
  position: absolute;
  cursor: pointer;

 


`;