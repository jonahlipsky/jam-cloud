# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  track_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: :track_id }

  belongs_to :track
  belongs_to :user
end
