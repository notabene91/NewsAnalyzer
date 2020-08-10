export function findLongWord(str) {
  const arr = str.split(' ')
  const newArr = arr.filter((item) => {
    return item.length < 40 ||
      !item.includes('&') ||
      !item.includes('<ol>') ||
      !item.includes('<li>') ||
      !item.includes('</ol>') ||
      !item.includes('</li>')
  })
  return newArr.join(' ');
}