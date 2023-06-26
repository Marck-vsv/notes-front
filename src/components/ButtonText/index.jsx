import { Container } from './styles';
import PropTypes from 'prop-types';

ButtonText.propTypes = {
  title: PropTypes.string.isRequired
};

export function ButtonText({ title, ...rest }) {
  return (
    <Container type='button' {...rest}>
      {title}
    </Container>
  );
}