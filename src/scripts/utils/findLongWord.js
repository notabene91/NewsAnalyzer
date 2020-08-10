export function findLongWord(str) {
  if (str != null || str != undefined) {
  const arr = str.split(' ')
  const newArr = arr.filter((item) => {
    return item.length < 40 || !item.includes('http')
  })
  return newArr.join(' ');
  }
  else return ''

}