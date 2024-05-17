import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scoreAtom } from "../atom/atom";
import axios from "axios";

const CenteredButton = styled.button`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    transition: all 0.3s;
    color: black;
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GameOver() {
  const navigate = useNavigate();
  const score = useRecoilValue(scoreAtom);

  const refreshToken = localStorage.getItem("refreshToken"); // Retrieve the refresh token from local storage

  const handleSubmit = async () => {
    const userData = {
      finalScore: score,
      success: false,
      details: "string",
      gamePlaySeconds: 0,
    };

    try {
      const response = await axios.post(
        "https://api.she-is-newyork-bagel.co.kr/api/game/over",
        userData,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      console.log(response.data);
      // Handle success (e.g., display a success message, redirect to another page, etc.)
    } catch (error) {
      console.error(error);
      alert("중복된 이메일입니다");
      // Handle error (e.g., display an error message)
    }
  };

  const handleClick = async () => {
    navigate("/main1");
    handleSubmit();
  };

  return (
    <CenteredDiv>
      <img src="img/house3-2.png" alt="레몬에이드" />
      <CenteredButton onClick={handleClick}>결과확인</CenteredButton>
    </CenteredDiv>
  );
}

export default GameOver;