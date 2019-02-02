# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')) for heroku and local server
# File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_stern_cover.jpg')) for heroku and local server
# File.open(Rails.root.join('app', 'assets', 'images', 'luke.png')) for heroku and local server
User.destroy_all
user1 = User.create(username: 'test123', password: 'test123', email: 'jonahlipsky@protonmail.com', age: 29, gender: 'Male')
user2 = User.create(username: 'Jessica', password: 'test123', email: 'jessica@jkj.com', age: 38, gender: 'Female')
user3 = User.create(username: 'Alorza', password: 'test123', email: 'alorza@rhodeisland.net', age: 58, gender: 'Male')

user4 = User.create(username: 'Daniel', password: 'test123', email: 'daniel@gmail.com', age: 28, gender: 'Male')
track1 = Track.new(title: '01_something_good', user_id: 4, album_id: 1)
track1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '01_something_good.mp3')), filename: "01_something_good.mp3")
track2 = Track.new(title: '02_out_of_town', user_id: 4, album_id: 1)
track2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '02_out_of_town.mp3')), filename: "02_out_of_town.mp3")
track3 = Track.new(title: '03_pick_me_up', user_id: 4, album_id: 1)
track3.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track3.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '03_pick_me_up.mp3')), filename: "03_pick_me_up.mp3")
track4 = Track.new(title: '04_501c3_blues', user_id: 4, album_id: 1)
track4.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track4.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '04_501c3_blues.mp3')), filename: "04_501c3_blues.mp3")
track5 = Track.new(title: '05_big_break', user_id: 4, album_id: 1)
track5.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track5.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '05_big_break.mp3')), filename: "05_big_break.mp3")
track6 = Track.new(title: '06_beatles_in_my_dreams', user_id: 4, album_id: 1)
track6.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track6.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '06_beatles_in_my_dreams.mp3')), filename: "06_beatles_in_my_dreams.mp3")
track7 = Track.new(title: '07_problem_1', user_id: 4, album_id: 1)
track7.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track7.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '07_problem_1.mp3')), filename: "07_problem_1.mp3")
track8 = Track.new(title: '08_friend_visit', user_id: 4, album_id: 1)
track8.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track8.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '08_friend_visit.mp3')), filename: "08_friend_visit.mp3")
track9 = Track.new(title: '09_how_long', user_id: 4, album_id: 1)
track9.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track9.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '09_how_long.mp3')), filename: "09_how_long.mp3")
track10 = Track.new(title: '10_for_another_day', user_id: 4, album_id: 1)
track10.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track10.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '10_for_another_day.mp3')), filename: "10_for_another_day.mp3")
track11 = Track.new(title: '11_i_was_asleep', user_id: 4, album_id: 1)
track11.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track11.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '11_i_was_asleep.mp3')), filename: "11_i_was_asleep.mp3")
track12 = Track.new(title: '12_dogwood', user_id: 4, album_id: 1)
track12.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track12.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '12_dogwood.mp3')), filename: "12_dogwood.mp3")

track1.save
track2.save
track3.save
track4.save
track5.save
track6.save
track7.save
track8.save
track9.save
track10.save
track11.save
track12.save