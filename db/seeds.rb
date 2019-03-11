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
Like.destroy_all
RecentTrack.destroy_all

##USER CREATION

daniel_stern = User.create(username: 'Daniel Stern', password: 'test123', email: 'demo@gmail.com', age: 28, gender: 'Male')
daniel_stern.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'demo_user', 'about-img-2.jpg')), filename: "about-img-2.jpg")
daniel_stern.profile_background.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'demo_user', 'tesseract.jpg')), filename: "tesseract.jpg")

daniel_wininger = User.create(username: 'Daniel Wininger', password: 'wininger123', email: "danielwininger@demomail.com", age: 30, gender: 'Male')
daniel_wininger.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'dan_wininger_profile.jpg')), filename: "dan_wininger_profile.jpg")
daniel_wininger.profile_background.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'demo_user', 'tesseract.jpg')), filename: "tesseract.jpg")

n_p_r = User.create(username: 'n_p_r', password: 'nupur123', email: "nupur@demomail.com", age: 30, gender: 'Female')
n_p_r.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
n_p_r.profile_background.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'demo_user', 'tesseract.jpg')), filename: "tesseract.jpg")

ethan_woods = User.create(username: 'Ethan Woods', password: 'ethan123', email: 'ethan@demomail.com', age: 29, gender: 'Male')
ethan_woods.profile_picture.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'ethan_woods', 'ethan_profile.png')), filename: 'ethan_profile.png')
ethan_woods.profile_background.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'demo_user', 'tesseract.jpg')), filename: "tesseract.jpg")

## TRACKS

# daniel stern

track1 = Track.new(title: '01_something_good', user_id: daniel_stern.id, album_id: 1, widget_identifier: '265422144')
track1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '01_something_good.mp3')), filename: "01_something_good.mp3")
track2 = Track.new(title: '02_out_of_town', user_id: daniel_stern.id, album_id: 1, widget_identifier: '265422134')
track2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '02_out_of_town.mp3')), filename: "02_out_of_town.mp3")
track3 = Track.new(title: '03_pick_me_up', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422128")
track3.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track3.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '03_pick_me_up.mp3')), filename: "03_pick_me_up.mp3")
track4 = Track.new(title: '04_501c3_blues', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422118")
track4.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track4.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '04_501c3_blues.mp3')), filename: "04_501c3_blues.mp3")
track5 = Track.new(title: '05_big_break', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422111")
track5.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track5.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '05_big_break.mp3')), filename: "05_big_break.mp3")
track6 = Track.new(title: '06_beatles_in_my_dreams', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422101")
track6.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track6.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '06_beatles_in_my_dreams.mp3')), filename: "06_beatles_in_my_dreams.mp3")
track7 = Track.new(title: '07_problem_1', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422093")
track7.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track7.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '07_problem_1.mp3')), filename: "07_problem_1.mp3")
track8 = Track.new(title: '08_friend_visit', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422088")
track8.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track8.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '08_friend_visit.mp3')), filename: "08_friend_visit.mp3")
track9 = Track.new(title: '09_how_long', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422080")
track9.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track9.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '09_how_long.mp3')), filename: "09_how_long.mp3")
track10 = Track.new(title: '10_for_another_day', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422075")
track10.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track10.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '10_for_another_day.mp3')), filename: "10_for_another_day.mp3")
track11 = Track.new(title: '11_i_was_asleep', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422068")
track11.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_stern_cover.jpg')), filename: "daniel_stern_cover.jpg")
track11.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', '11_i_was_asleep.mp3')), filename: "11_i_was_asleep.mp3")
track12 = Track.new(title: '12_dogwood', user_id: daniel_stern.id, album_id: 1, widget_identifier: "265422063")
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

drumhealing1 = Track.new(title: 'Drum Healing 1', user_id: daniel_wininger.id, album_id: 1, widget_identifier: "577492956%3Fsecret_token%3Ds-xYMBV")
drumhealing1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_1.mp3')), filename: "drum_healing_1.mp3")

drumhealing2 = Track.new(title: 'Drum Healing 2', user_id: daniel_wininger.id, album_id: 1, widget_identifier: "577492929%3Fsecret_token%3Ds-6ngs4")
drumhealing2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_2.mp3')), filename: "drum_healing_2.mp3")

drumhealing2bonus = Track.new(title: 'Drum Healing 2 Bonus', user_id: daniel_wininger.id, album_id: 1, widget_identifier: "577492944%3Fsecret_token%3Ds-u4De1")
drumhealing2bonus.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing2bonus.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_2_bonus.mp3')), filename: "drum_healing_2_bonus.mp3")

drumhealing3 = Track.new(title: 'Drum Healing 3', user_id: daniel_wininger.id, album_id: 1, widget_identifier: "577492905%3Fsecret_token%3Ds-HbneC")
drumhealing3.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing_3.jpg')), filename: "drum_healing_3.jpg")
drumhealing3.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_3.mp3')), filename: "drum_healing_3.mp3")

drumhealing4 = Track.new(title: 'Drum Healing 4', user_id: daniel_wininger.id, album_id: 1, widget_identifier: "577492890%3Fsecret_token%3Ds-RU64N")
drumhealing4.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'daniel_wininger', 'drum_healing.jpg')), filename: "drum_healing.jpg")
drumhealing4.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'daniel_wininger', 'drum_healing', 'drum_healing_4.mp3')), filename: "drum_healing_4.mp3")

drumhealing1.save
drumhealing2.save
drumhealing2bonus.save
drumhealing3.save
drumhealing4.save

# n_p_r

pauls_grove = Track.new(title: 'Pauls Grove', user_id: n_p_r.id, album_id: 1, widget_identifier: "574749918%3Fsecret_token%3Ds-bt0WZ")
pauls_grove.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
pauls_grove.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '01_pauls_grove.mp3')), filename: '01_pauls_grove.mp3')

mountain_no1 = Track.new(title: 'Mountain No.1', user_id: n_p_r.id, album_id: 1, widget_identifier: "574749906%3Fsecret_token%3Ds-p4TjW")
mountain_no1.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
mountain_no1.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '02_mountain_no1.mp3')), filename: '02_mountain_no1.mp3')

this_life = Track.new(title: 'This Life', user_id: n_p_r.id, album_id: 1, widget_identifier: "574749900%3Fsecret_token%3Ds-6I9vH")
this_life.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
this_life.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '03_this_life.mp3')), filename: '03_this_life.mp3')

mountain_no2 = Track.new(title: 'Mountain No. 2', user_id: n_p_r.id, album_id: 1, widget_identifier: "574749894%3Fsecret_token%3Ds-zF4g3")
mountain_no2.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
mountain_no2.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '04_mountain_no2.mp3')), filename: '04_mountain_no2.mp3')

the_farmers_daughter = Track.new(title: "The Farmer's Daughter", user_id: n_p_r.id, album_id: 1, widget_identifier: "574749882%3Fsecret_token%3Ds-d9NFo")
the_farmers_daughter.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
the_farmers_daughter.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '05_the_farmers_daughter.mp3')), filename: '05_the_farmers_daughter.mp3')

whats_the_rush = Track.new(title: "What's the Rush?", user_id: n_p_r.id, album_id: 1, widget_identifier: "574749876%3Fsecret_token%3Ds-Mrbct")
whats_the_rush.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
whats_the_rush.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '06_whats_the_rush.mp3')), filename: '06_whats_the_rush.mp3')

sister_christmas = Track.new(title: 'Sister Christmas', user_id: n_p_r.id, album_id: 1, widget_identifier: "574749861%3Fsecret_token%3Ds-6lw4a")
sister_christmas.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'n_p_r', 'cover.png')), filename: 'cover.png')
sister_christmas.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'n_p_r', 'NAME', '07_sister_christmas.mp3')), filename: '07_sister_christmas.mp3')

pauls_grove.save
mountain_no1.save
this_life.save
mountain_no2.save
the_farmers_daughter.save
whats_the_rush.save
sister_christmas.save

red_river_valley = Track.new(title: 'Red River Valley', user_id: ethan_woods.id, album_id: 1, widget_identifier: '588111804%3Fsecret_token%3Ds-uWWwV')
red_river_valley.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'ethan_woods', 'bibi_album_art.jpg')), filename: "bibi_album_art.jpg")
red_river_valley.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'ethan_woods', 'red_river_valley.mp3')), filename: "red_river_valley.mp3")
blinking_into_river = Track.new(title: 'Blinking Into River', user_id: ethan_woods.id, album_id: 1, widget_identifier: '588111789%3Fsecret_token%3Ds-GL2nm')
blinking_into_river.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'ethan_woods', 'bibi_album_art.jpg')), filename: "bibi_album_art.jpg")
blinking_into_river.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'ethan_woods', 'blinking_into_river.mp3')), filename: "blinking_into_river.mp3")
disney_doozy = Track.new(title: 'disney_doozy', user_id: ethan_woods.id, album_id: 1, widget_identifier: "588111780%3Fsecret_token%3Ds-26Az3")
disney_doozy.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'ethan_woods', 'bibi_album_art.jpg')), filename: "bibi_album_art.jpg")
disney_doozy.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'ethan_woods', 'disney_doozy.mp3')), filename: "disney_doozy.mp3")
witchy_stone_fruit = Track.new(title: 'witchy_stone_fruit', user_id: ethan_woods.id, album_id: 1, widget_identifier: "588111765%3Fsecret_token%3Ds-PelCD")
witchy_stone_fruit.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'ethan_woods', 'bibi_album_art.jpg')), filename: "bibi_album_art.jpg")
witchy_stone_fruit.sound_file.attach(io: File.open(Rails.root.join('app', 'assets', 'audio', 'ethan_woods', 'witchy_stone_fruit.mp3')), filename: "witchy_stone_fruit.mp3")

red_river_valley.save
blinking_into_river.save
disney_doozy.save
witchy_stone_fruit.save

# Daneil Stern Comments

# comment1 = track1.comments.create(body: "Hey! Great song!", author_id: 2)
# comment2 = comment1.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment1.track_id )
# comment3 = comment1.child_comments.create(body: "Ya it really is tight.", author_id: 3, track_id: comment1.track_id )
# comment4 = track2.comments.create(body: "Keep putting out these songs!", author_id: 3)
# comment5 = comment4.child_comments.create(body: "Will do!", author_id: 2, track_id: comment1.track_id )
# comment6 = comment4.child_comments.create(body: "Good to hear", author_id: 3, track_id: comment1.track_id )
# comment7 = track3.comments.create(body: "Hey! Great song!", author_id: 2)
# comment8 = comment7.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment7.track_id )
# comment9 = track4.comments.create(body: "Hey! Great song!", author_id: 2)
# comment10 = comment9.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment9.track_id )
# comment11 = track5.comments.create(body: "Hey! Great song!", author_id: 2)
# comment12 = comment11.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment11.track_id )
# comment13 = track6.comments.create(body: "Hey! Great song!", author_id: 2)
# comment14 = comment13.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment13.track_id )
# comment15 = track7.comments.create(body: "Hey! Great song!", author_id: 2)
# comment16 = comment15.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment15.track_id )
# comment17 = track8.comments.create(body: "Hey! Great song!", author_id: 2)
# comment18 = comment17.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment17.track_id )
# comment19 = track9.comments.create(body: "Hey! Great song!", author_id: 2)
# comment20 = comment19.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment19.track_id )
# comment21 = track10.comments.create(body: "Hey! Great song!", author_id: 2)
# comment22 = comment21.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment21.track_id )
# comment23 = track11.comments.create(body: "Hey! Great song!", author_id: 2)
# comment24 = comment23.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment23.track_id )
# comment25 = track12.comments.create(body: "Hey! Great song!", author_id: 2)
# comment26 = comment25.child_comments.create(body: "Thanks so much!", author_id: 1, track_id: comment25.track_id )