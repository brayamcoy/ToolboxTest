import React from 'react'
import PropTypes from 'prop-types'

// Assets
import { bodyRowStyles } from '../../App.styles'

export const TableBody = ({ data }) => {
  return (
    <>
      <tbody>
        {data.map((item) =>
          item.lines.map((line) => (
            <tr key={line.file} style={bodyRowStyles}>
              <td>{item.file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        )}
      </tbody>
      <br />
    </>
  )
}

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}
