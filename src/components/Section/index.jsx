import { Container } from './styles'
import PropTypes from 'prop-types'

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}