import React from 'react'
import PropTypes from 'prop-types'

// Components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Assets
import { formSearchStyles } from '../../App.styles'

export const SearchForm = ({ handleInput, handleSubmit }) => {
  return (
    <Form.Group style={formSearchStyles.form}>
      <Form.Label>Search by name</Form.Label>
      <Form.Control
        placeholder='type something...'
        style={formSearchStyles.input}
        onInput={(e) => handleInput(e.target.value)}
        onKeyDown={(e) => handleSubmit(e.key)}
      />
      <Button
        onClick={(e) => handleSubmit(e.type)}
        variant='secondary'
        style={formSearchStyles.button}
      >
        Search
      </Button>
    </Form.Group>
  )
}

SearchForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
