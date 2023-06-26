import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src='https://github.com/marck-vsv.png'/>
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