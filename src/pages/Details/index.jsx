import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'

export function Details () {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title='Excluir Nota'/>

          <h1>
            Place text
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, iusto blanditiis. Error dolor sapiente rem quasi? Temporibus, fugit! Architecto hic distinctio sapiente dolor excepturi nihil magnam fugit est possimus nesciunt!
          </p>

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
        </Content>
      </main>
    </Container>
  )
}