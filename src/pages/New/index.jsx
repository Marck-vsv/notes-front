import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { Noteitem } from '../../components/Noteitem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

export function New () {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to='/'>voltar</Link>
          </header>

          <Input placeholder='Titulo'/>

          <Textarea placeholder='Observações'/>

          <Section title='Links Uteis'>
            <Noteitem value='https://www.com'/>
            <Noteitem isnew placeholder='Novo Link'/>
          </Section>

          <Section title='Marcadores'>
            <div className="tags">
              <Noteitem value='React'/>
              <Noteitem isnew placeholder='Nova Tag'/>
            </div>
          </Section>

          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  );
}