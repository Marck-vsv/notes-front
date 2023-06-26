import { Container, Links } from './styles';

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'

export function Details () {
  return (
    <Container>
      <Header />

      <ButtonText title='Excluir Nota'/>

      <Section title='Links úteis'>
        <Links>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </Links>
      </Section>

      <Section title='Marcadores'>
        <Tag title='express'/>
        <Tag title='node'/>
      </Section>

      <Button title='voltar'/>
    </Container>
  )
}