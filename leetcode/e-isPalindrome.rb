# solution without using reverse method

def is_palindrome(s)
  s.gsub!(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~'\s]/i,"")
  s.downcase!
  sArr = s.split("")

  i = 1
  until i - 1 == s.size / 2
    if (sArr[i - 1] != sArr[-i])
      # to break out of loop, explicitly state return
      return false
    end
    i += 1
  end
  true
end