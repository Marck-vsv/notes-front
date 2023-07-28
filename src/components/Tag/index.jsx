import { Container } from './styles';
import PropTypes from 'prop-types'

Tag.propTypes = {
  title: PropTypes.string.isRequired
};

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}