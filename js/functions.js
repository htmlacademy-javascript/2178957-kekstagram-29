function lengthString (string,length) {
  const result = (string.length <= length) ? console.log(true) : console.log(false);
  return (string.replaceAll(' ', ''));
}

lengthString('проверяемая строка', 50);
