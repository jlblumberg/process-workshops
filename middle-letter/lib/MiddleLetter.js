class MiddleLetter {

  getMiddle = (string) => {
    if (string.length < 3) {
      return string
    } else {
      let middle = Math.floor(string.length / 2)
      return string[middle]
    }
  }

}

module.exports = MiddleLetter