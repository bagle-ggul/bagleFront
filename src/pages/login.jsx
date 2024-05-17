import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
`;

const MainWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute; /* Position it absolutely within the Wrapper */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the MainWrapper div */
  color: white; /* Add text color for visibility, adjust as needed */
  font-size: 3rem; /* Adjust font size as needed */
  background: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 설정하여 가독성 향상 */
  h1 {
    font-size: 8rem;
    font-weight: 500;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  input {
    width: 400px;
    height: 40px;
    border-radius: 12px;
    margin-bottom: 15px; /* Add some margin for better spacing */
  }
  .title {
    font-size: 60px;
    padding: 12px;
  }
`;
const StyledSelectButton = styled.button`
  height: 20px;
  width: 40%;
  border-radius: 10px;
  font-size: 20px;
  border: 1px solid grey;
  margin: 0.3%;
  cursor: pointer;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://api.she-is-newyork-bagel.co.kr/api/login",
        userData
      );
      console.log(response.data);
      // Handle success (e.g., display a success message, redirect to another page, etc.)
    } catch (error) {
      console.error(error);
      alert("중복된 이메일입니다");
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div>
      <Wrapper>
        <img src="/img/image1.png" alt="" />
        <img src="/img/image2.png" alt="" />
        <img src="/img/image3.png" alt="" />
        <MainWrapper>
          <div className="title">로그인</div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <StyledSelectButton className="submitBtn" type="submit">
              Submit
            </StyledSelectButton>
          </form>
        </MainWrapper>
      </Wrapper>
    </div>
  );
}

export default Login;