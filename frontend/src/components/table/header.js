import React from 'react'
import PropTypes from 'prop-types'

// Assets
import { headerTableStyles } from '../../App.styles'

export const TableHeader = ({ options }) => {
  return (
    <>
      <thead style={headerTableStyles}>
        <tr>
          {options.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <br />
    </>
  )
}

TableHeader.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}
