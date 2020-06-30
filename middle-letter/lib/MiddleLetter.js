class MiddleLetter {

  getMiddle = (string) => {
    let middle = Math.floor(string.length / 2)
    if (string.length % 2 === 0) {
      return string[middle - 1] + string[middle]
    } else {
      return string[middle]
    }
  }

}

module.exports = MiddleLetter