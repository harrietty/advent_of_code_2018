require 'rspec'
require 'time'
require_relative '../pt1'

RSpec.describe "format_and_order" do
  it 'orders the input' do
    input = "[1518-08-06 00:13] falls asleep
[1518-06-10 00:37] wakes up
[1518-07-08 00:20] wakes up
[1518-05-13 00:24] falls asleep
[1518-11-07 00:32] falls asleep"
    expected = [
      {
        date: '1518-05-13',
        hours: '00',
        minutes: '24',
        timestamp: Time.parse('1518-05-13 00:24')
      },
      {
        date: '1518-06-10',
        hours: '00',
        minutes: '37',
        timestamp: Time.parse('1518-06-10 00:37')
      },
      {
        date: '1518-07-08',
        hours: '00',
        minutes: '20',
        timestamp: Time.parse('1518-07-08 00:20')
      },
      {
        date: '1518-08-06',
        hours: '00',
        minutes: '13',
        timestamp: Time.parse('1518-08-06 00:13')
      },
      {
        date: '1518-11-07',
        hours: '00',
        minutes: '32',
        timestamp: Time.parse('1518-11-07 00:32')
      },
    ]
    expect(format_and_order(input)).to eq(expected)
  end
end