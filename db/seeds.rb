# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: 'test123', password: 'test123', email: 'jonahlipsky@protonmail.com', age: 29, gender: 'Male')
user2 = User.create(username: 'Jessica', password: 'test123', email: 'jessica@jkj.com', age: 38, gender: 'Female')
user3 = User.create(username: 'Alorza', password: 'test123', email: 'alorza@rhodeisland.net', age: 58, gender: 'Male')