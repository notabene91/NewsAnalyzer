export function findLongWord(str) {
  const arr = str.split(' ')
  const newArr = arr.filter((item) => {
    return item.length < 40 && !item.includes('&')
  })
  return newArr.join(' ');
}