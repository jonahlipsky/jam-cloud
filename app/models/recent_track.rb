# == Schema Information
#
# Table name: recent_tracks
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  track_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class RecentTrack < ApplicationRecord
  belongs_to :user

  belongs_to :track,
    foreign_key: :track_id,
    class_name: "Track"

end
