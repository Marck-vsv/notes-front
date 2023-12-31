﻿import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
        <img src='https://github.com/aaaaa.png'/>
        <div>
          <span>Bem-vindo</span>
          <strong>Marcos Vinicius</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}