function drawPyramid(lines, fillChar = `*`, spacerChar) {
  let fillChars = '';
  let spacer = spacerChar || ' '; // Default spacer is ' '
  let spacerCount = lines;

  for (let i = 1; i <= lines; i++) {
      fillChars += fillChar;

  // Makes lines always have an odd number of fill characters
    if (i >= 2)
        fillChars = fillChar + fillChars;

    console.log(spacer.repeat(spacerCount - 1) + fillChars);
    spacerCount--;
  }
}

drawPyramid(4);

