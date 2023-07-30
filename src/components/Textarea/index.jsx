import { Container } from './styles';
import PropTypes from 'prop-types';

Textarea.propTypes = {
  value: PropTypes.string
}
export function Textarea ({ value }, ...rest) {
  return (
    <Container {...rest}>
      { value }
    </Container>
  )
}
