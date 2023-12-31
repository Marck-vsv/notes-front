﻿import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'

export function Home () {
  return (
    <Container>
      <Brand>
        <h1>RNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title='Todos' $isActive/></li>
        <li><ButtonText title='React'/></li>
        <li><ButtonText title='Node'/></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar por titulo' icon={FiSearch}/>
      </Search>

      <Content>
        <Section title='Minhas notas'>
          <Note data={{ 
            title: 'React', 
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'node' }
            ] 
            }}/>
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus/>
        Criar Nota
      </NewNote>
    </Container>
  );
}