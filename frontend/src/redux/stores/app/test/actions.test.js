// Actions
import { setResponse, getData } from '../actions'

// constants
import { SET_RESPONSE, GET_DATA } from '../constants'

describe('App actions', () => {
  it('has a type of SET_RESPONSE', () => {
    const expected = {
      type: SET_RESPONSE,
      payload: [
        {
          file: 'example.csv',
          lines: [
            {
              text: 'Cristiano Ronaldo',
              number: '7',
              hex: 'siuuu9324238xxfdf'
            }
          ]
        }
      ]
    }
    expect(
      setResponse('sucess', [
        {
          file: 'example.csv',
          lines: [
            {
              text: 'Cristiano Ronaldo',
              number: '7',
              hex: 'siuuu9324238xxfdf'
            }
          ]
        }
      ], () => {})
    ).toEqual(expected)
  })

  it('has a type of GET_DATA', () => {
    const expected = { type: GET_DATA, payload: { query: 'test1.csv' } }
    expect(getData('test1.csv')).toEqual(expected)
  })
})
