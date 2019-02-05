# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_id   :integer
#  likeable_type :string
#

class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: :track_id }

  belongs_to :likeable, polymorphic: true
end
