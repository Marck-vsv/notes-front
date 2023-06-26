﻿import { Container } from './styles'
import PropTypes from 'prop-types'

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type='button' disabled={loading} {...rest}>
      { loading ? 'Loading...' : title }
    </Container>
  )
}
