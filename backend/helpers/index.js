const getMaxNum = (num1, num2, num3) => {
  let largest = 0
  if (num1 >= num2 && num1 >= num3) {
    largest = num1
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2
  } else {
    largest = num3
  }
  return largest
}

const handleFindField = (arr, position) => {
  let index = position
  if (arr[index - 1]) {
    return arr[index - 1]
  } else {
    index = position - 1
    return handleFindField(arr, index)
  }
}

const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
const replaceAll = (str, match, replacement) => {
  return str.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement)
}

module.exports = { getMaxNum, handleFindField, escapeRegExp, replaceAll }
