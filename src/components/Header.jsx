

import styled from "styled-components";


const Headers = styled.header`

display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;
`;

const Menu = styled.ul`

 display: flex;
  gap: 20px;
`;



export default function Header() {
  return (
    <Headers>
      <h1>OZ코딩스쿨</h1>
      <Menu>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </Menu>
    </Headers>
  );
}
