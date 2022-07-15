const { listRequest, getByNameRequest } = require('../helpers/requests')
const { getMaxNum, handleFindField, replaceAll } = require('../helpers')

const get = async (req, res, next) => {
  try {
    const { fileName } = req.query
    const listNames = await listRequest().then((data) => data)

    let count = 0
    const rawData = []
    const formattedData = []
    const tmp = []
    let filter = false

    while (count < listNames.length) {
      const fileName = await getByNameRequest(listNames[count]).then(
        (data) => data
      )
      count += 1
      if (fileName.trim() !== 'error') {
        const parse = JSON.parse(fileName)
        const replaced = replaceAll(parse, '\n', ',')
        tmp.push(replaced)
      }
    }

    for (let i = 0; i < tmp.length; i++) {
      const myRaw = tmp[i]
      const rawSplitted = myRaw.split(',')
      if (rawSplitted.length > 4) {
        rawData.push([...new Set(rawSplitted)].filter(Boolean))
      }
    }

    for (let j = 0; j < rawData.length; j++) {
      const myRaw = rawData[j]
      const rawWithoutKeys = myRaw.filter((el, index) => index > 4)

      const hexFields = rawWithoutKeys.filter((el) =>
        /^[0-9A-Fa-f]{32}$/g.test(el)
      )
      const numberFields = rawWithoutKeys.filter((el) => /^[0-9]*$/i.test(el))
      const textFields = rawWithoutKeys.filter((el) => /^[A-Z]+$/i.test(el))

      const maxArrayLength = getMaxNum(
        hexFields.length,
        numberFields.length,
        textFields.length
      )
      const newLines = []
      let count = 0

      while (count < maxArrayLength) {
        newLines.push({
          text: textFields[count] || handleFindField(textFields, count),
          number: numberFields[count] || handleFindField(numberFields, count),
          hex: hexFields[count] || handleFindField(hexFields, count)
        })
        count += 1
      }

      const format = {
        file: myRaw.filter((el) => el.includes('.csv')).toString(),
        lines: newLines
      }

      formattedData.push(format)
    }

    if (fileName) {
      filter = formattedData.filter((el) =>
        el.file
          .replace('.', '')
          .toLowerCase()
          .includes(fileName.replace('.', '').toLowerCase())
      )
    }

    return res.status(200).json(filter || formattedData)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getList = async (req, res, next) => {
  try {
    const listNames = await listRequest().then((data) => data)
    return res.status(200).json(listNames)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { get, getList }
