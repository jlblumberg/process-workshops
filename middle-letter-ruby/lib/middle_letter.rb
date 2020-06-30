def get_middle(string)
  if string.length % 2 == 0
    string[string.length/2 - 1] + string[string.length/2]
  else
    string[string.length/2]
  end
end