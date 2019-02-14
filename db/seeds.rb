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
Track.destroy_all
Comment.destroy_all

##USER CREATION

daniel_stern = User.create(username: 'Daniel Stern', password: 'test123', email: 'daniel@gmail.com', age: 28, gender: 'Male')
daniel_stern.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'empty_profile.png')), filename: "empty_profile.png")

daniel_wininger = User.create(username: 'Daniel Wininger', password: 'wininger123', email: "danielwininger@demomail.com", age: 30, gender: 'Male')
daniel_wininger.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'dan_wininger_profile.jpg')), filename: "dan_wininger_profile.jpg")


n_p_r = User.create(username: 'n_p_r', password: 'nupur123', email: "nupur@demomail.com", age: 30, gender: 'Female')
n_p_r.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')

user1 = User.create(username: 'test123', password: 'test123', email: 'jonahlipsky@protonmail.com', age: 29, gender: 'Male')
user1.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'empty_profile.png')), filename: "empty_profile.png")

## TRACKS

# daniel stern

track1 = Track.new(title: '01_something_good', user_id: daniel_stern.id, album_id: 1, widget_identifier: '265422144')
track1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '01_something_good.mp3')), filename: "01_something_good.mp3")
track2 = Track.new(title: '02_out_of_town', user_id: daniel_stern.id, album_id: 1, widget_identifier: '265422134')
track2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '02_out_of_town.mp3')), filename: "02_out_of_town.mp3")
track3 = Track.new(title: '03_pick_me_up', user_id: daniel_stern.id, album_id: 1)
track3.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track3.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '03_pick_me_up.mp3')), filename: "03_pick_me_up.mp3")
track4 = Track.new(title: '04_501c3_blues', user_id: daniel_stern.id, album_id: 1)
track4.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track4.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '04_501c3_blues.mp3')), filename: "04_501c3_blues.mp3")
track5 = Track.new(title: '05_big_break', user_id: daniel_stern.id, album_id: 1)
track5.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track5.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '05_big_break.mp3')), filename: "05_big_break.mp3")
track6 = Track.new(title: '06_beatles_in_my_dreams', user_id: daniel_stern.id, album_id: 1)
track6.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track6.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '06_beatles_in_my_dreams.mp3')), filename: "06_beatles_in_my_dreams.mp3")
track7 = Track.new(title: '07_problem_1', user_id: daniel_stern.id, album_id: 1)
track7.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track7.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '07_problem_1.mp3')), filename: "07_problem_1.mp3")
track8 = Track.new(title: '08_friend_visit', user_id: daniel_stern.id, album_id: 1)
track8.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track8.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '08_friend_visit.mp3')), filename: "08_friend_visit.mp3")
track9 = Track.new(title: '09_how_long', user_id: daniel_stern.id, album_id: 1)
track9.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track9.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '09_how_long.mp3')), filename: "09_how_long.mp3")
track10 = Track.new(title: '10_for_another_day', user_id: daniel_stern.id, album_id: 1)
track10.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track10.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '10_for_another_day.mp3')), filename: "10_for_another_day.mp3")
track11 = Track.new(title: '11_i_was_asleep', user_id: daniel_stern.id, album_id: 1)
track11.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track11.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '11_i_was_asleep.mp3')), filename: "11_i_was_asleep.mp3")
track12 = Track.new(title: '12_dogwood', user_id: daniel_stern.id, album_id: 1)
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

# Daniel wininger

drumhealing1 = Track.new(title: 'Drum Healing 1', user_id: daniel_wininger.id, album_id: 1)
drumhealing1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_1.mp3')), filename: "drum_healing_1.mp3")

drumhealing2 = Track.new(title: 'Drum Healing 2', user_id: daniel_wininger.id, album_id: 1)
drumhealing2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_2.mp3')), filename: "drum_healing_2.mp3")

drumhealing2bonus = Track.new(title: 'Drum Healing 2 Bonus', user_id: daniel_wininger.id, album_id: 1)
drumhealing2bonus.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing2bonus.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_2_bonus.mp3')), filename: "drum_healing_2_bonus.mp3")

drumhealing3 = Track.new(title: 'Drum Healing 3', user_id: daniel_wininger.id, album_id: 1)
drumhealing3.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing_3.jpg')), filename: "drum_healing_3.jpg")
drumhealing3.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_3.mp3')), filename: "drum_healing_3.mp3")

drumhealing4 = Track.new(title: 'Drum Healing 4', user_id: daniel_wininger.id, album_id: 1)
drumhealing4.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing4.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_4.mp3')), filename: "drum_healing_4.mp3")

drumhealing1.save
drumhealing2.save
drumhealing2bonus.save
drumhealing3.save
drumhealing4.save

# n_p_r

pauls_grove = Track.new(title: 'Pauls Grove', user_id: n_p_r.id, album_id: 1)
pauls_grove.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
pauls_grove.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '01_pauls_grove.mp3')), filename: '01_pauls_grove.mp3')

mountain_no1 = Track.new(title: 'Mountain No.1', user_id: n_p_r.id, album_id: 1)
mountain_no1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
mountain_no1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '02_mountain_no1.mp3')), filename: '02_mountain_no1.mp3')

this_life = Track.new(title: 'This Life', user_id: n_p_r.id, album_id: 1)
this_life.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
this_life.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '03_this_life.mp3')), filename: '03_this_life.mp3')

mountain_no2 = Track.new(title: 'Mountain No. 2', user_id: n_p_r.id, album_id: 1)
mountain_no2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
mountain_no2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '04_mountain_no2.mp3')), filename: '04_mountain_no2.mp3')

the_farmers_daughter = Track.new(title: "The Farmer's Daughter", user_id: n_p_r.id, album_id: 1)
the_farmers_daughter.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
the_farmers_daughter.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '05_the_farmers_daughter.mp3')), filename: '05_the_farmers_daughter.mp3')

whats_the_rush = Track.new(title: "What's the Rush?", user_id: n_p_r.id, album_id: 1)
whats_the_rush.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
whats_the_rush.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '06_whats_the_rush.mp3')), filename: '06_whats_the_rush.mp3')

sister_christmas = Track.new(title: 'Sister Christmas', user_id: n_p_r.id, album_id: 1)
sister_christmas.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
sister_christmas.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '07_sister_christmas.mp3')), filename: '07_sister_christmas.mp3')

pauls_grove.save
mountain_no1.save
this_life.save
mountain_no2.save
the_farmers_daughter.save
whats_the_rush.save
sister_christmas.save


## COMMENTS

comment1 = track1.comments.create(body: "Hey! This is a comment!", author_id: 1)
comment2 = comment1.child_comments.create(body: "Comment on your comment", author_id: 2, track_id: comment1.track_id )
comment3 = comment1.child_comments.create(body: "Second Comment on your comment", author_id: 3, track_id: comment1.track_id )
comment4 = track1.comments.create(body: "Hey! Second Parent Comment!", author_id: 2)
comment2 = comment4.child_comments.create(body: "Comment on the second comment", author_id: 2, track_id: comment1.track_id )
comment3 = comment4.child_comments.create(body: "Second Comment on the second comment", author_id: 3, track_id: comment1.track_id )




# user2 = User.create(username: 'Jessica', password: 'test123', email: 'jessica@jkj.com', age: 38, gender: 'Female')
# user3 = User.create(username: 'Alorza', password: 'test123', email: 'alorza@rhodeisland.net', age: 58, gender: 'Male')
# user2.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'empty_profile.png')), filename: "empty_profile.png")
# user3.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'empty_profile.png')), filename: "empty_profile.png")
