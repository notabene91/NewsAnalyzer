export function findLongWord(str) {
  if (str != null || str != undefined) {
  const arr = str.split(' ')
  const newArr = arr.filter((item) => {
<<<<<<< HEAD
    return item.length < 40 || !item.includes('http')
=======
    return item.length < 40 ||
    !item.includes('http')
>>>>>>> 0ae33cd5897deba855458eee7d1eff2e16885646
  })
  return newArr.join(' ');
  }
  else return ''

}