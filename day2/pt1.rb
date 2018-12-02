have_two_letters = 0
have_three_letters = 0

File.open('./input.txt', 'r').each do |str|
  freq = str.split('').group_by(&:itself).map {|k,v| [v.size, k] }.to_h
  have_two_letters += 1 if freq[2]
  have_three_letters += 1 if freq[3]
end

puts have_three_letters * have_two_letters
