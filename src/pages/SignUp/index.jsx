﻿import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';

export function SignUp () {
  return (
    <Container>
      <Background/>

      <Form>
        <h1>RNotes</h1>
        <p>Salve e gerencie seus links e anotações</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
        />

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
        />

        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
        />

        <Button title='Cadastrar'/>

        <a href="#">
          Login
        </a>
      </Form>
    </Container>
  );
}