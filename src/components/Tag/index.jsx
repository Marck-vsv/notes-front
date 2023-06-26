import { Container } from './styles';
import PropTypes from 'prop-types'

Tag.propTypes = {
  title: PropTypes.string.isRequired
};

export function Tag({ title }) {
  return (
    <Container>
      {title}
    </Container>
  )
}