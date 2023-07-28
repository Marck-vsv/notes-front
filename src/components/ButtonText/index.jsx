import { Container } from './styles';
import PropTypes from 'prop-types';

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type='button' $isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}