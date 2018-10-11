import React from 'react'
import PropTypes from 'prop-types'

const FetchError = ({ message }) => <p>{message}</p>
FetchError.propTypes = {
	message: PropTypes.string
}
export default FetchError
