lines = File.read('./input.txt').split("\n");

def get_shared_letters(str1, str2)
  differences = 0
  same_letters = nil
  str1.split('').each_with_index do |letter, i|
    if letter != str2[i]
      differences += 1 
      same_letters = str1.dup
      same_letters.slice!(i)
    end
  end

  differences === 1 ? same_letters : nil
end

lines.each_with_index do |str1, i1|
  lines.each_with_index do |str2, i2|
    next if i2 === i1

    shared = get_shared_letters str1, str2
    puts shared if shared
  end
end
