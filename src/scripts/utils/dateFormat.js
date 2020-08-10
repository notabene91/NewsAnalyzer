export function formatDate(date) {
  const formattedDate = date.toLocaleDateString().split('.');
  return (`${formattedDate[2]}-${formattedDate[1]}-${formattedDate[0]}`)
}

export function formatDateforCard(date) {
  const dateWithoutTime = date.toString().split('T');
  const formattedDate = dateWithoutTime[1].split('-');
  switch (formattedDate[1]) {
    case `01`: formattedDate[1] = "января"; break;
    case `02`: formattedDate[1] = "февраля"; break;
    case `03`: formattedDate[1] = "марта"; break;
    case `04`: formattedDate[1] = "апреля"; break;
    case `05`: formattedDate[1] = "мае"; break;
    case `06`: formattedDate[1] = "июня"; break;
    case `07`: formattedDate[1] = "июля"; break;
    case `08`: formattedDate[1] = "августа"; break;
    case `09`: formattedDate[1] = "сентября"; break;
    case `10`: formattedDate[1] = "октября"; break;
    case `11`: formattedDate[1] = "ноября"; break;
    case `12`: formattedDate[1] = "декабря"; break;
  }
  return (`${formattedDate[2]} ${formattedDate[1]}, ${formattedDate[0]}`)
}
