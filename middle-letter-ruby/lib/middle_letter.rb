def get_middle(string)
  return string[string.length/2] if string.length.odd?
  string[string.length/2 - 1] + string[string.length/2]
end