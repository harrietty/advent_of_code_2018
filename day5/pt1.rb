def react_polymer(input)
  res = ''
  input.each_char do |char|
    last = res[-1]
    if last && is_polar(char, last)
      res.slice! -1
    else
      res += char
    end
  end
  res
end

def is_polar(a, b)
  return false if a.downcase != b.downcase
  a != b && a.downcase == b.downcase
end

polymer = File.read('./input.txt').chomp

def get_shortest_polymer(input)
  smallest=nil
  ('a'..'z').each do |char|
    input_minus_char = input.gsub(/#{char}/i, '')
    size = react_polymer(input_minus_char).size
    if smallest.nil? || size < smallest
      smallest = size
    end
  end
  smallest
end

puts get_shortest_polymer(polymer)
