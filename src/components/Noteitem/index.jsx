import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';
import PropTypes from 'prop-types';

Noteitem.propTypes = {
  isnew: PropTypes.any,
  value: PropTypes.any,
  onClick: PropTypes.func
}

export function Noteitem ({isnew, value, onClick, ...rest}) {
  return (
    <Container isnew={isnew}>
      <input 
      type="text"
      value={value}
      readOnly={!isnew}
      {...rest} />

      <button 
        type='button'
        onClick={onClick}
        className={isnew ? 'button-add' : 'button-delete'}
      >
        { isnew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}