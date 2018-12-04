require 'time'

# [1518-06-10 00:37] wakes up

# Order chronologically
def format_and_order(input)
  input.split("\n").map do |line|
    {
      date: line.match(/^\[([0-9\-]+)/)[1],
      hours: line.match(/([0-9]{2})\:/)[1],
      minutes: line.match(/\:([0-9]{2})/)[1],
      timestamp: Time.parse(line.match(/\[(.+)\]/)[1]),
    }
  end.sort do |a, b|
    a[:timestamp] <=> b[:timestamp]
  end
end


# Split into groups belonging to each guard
# get total minutes spent spent sleeping

# Which has the highest