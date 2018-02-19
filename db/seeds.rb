# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

names = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']
suits = ['Clubs','Spades','Hearts','Diamonds']

names.each_with_index do |value, i|
  image =
  suits.each do |suit|
    if suit === 'Clubs' || suit === 'Spades'
      color = 'Black'
    else
      color = 'Red'
    end
    Card.create(
      name: value,
      value: i + 2,
      suit: suit,
      color: color,
      image: "#{value.downcase}_of_#{suit.downcase}.png"
    )
  end
end
