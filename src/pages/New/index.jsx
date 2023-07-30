﻿import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Noteitem } from '../../components/Noteitem';

import { Container, Form } from './styles';

export function New () {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder='Titulo'/>

          <Textarea placeholder='Observações'/>

          <Noteitem/>
        </Form>
      </main>
    </Container>
  );
}