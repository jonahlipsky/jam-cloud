# == Schema Information
#
# Table name: tracks
#
#  id        :bigint(8)        not null, primary key
#  title     :string           not null
#  artist_id :integer
#  album_id  :integer
#

class Track < ApplicationRecord
  validates :title, presence: true
  # belongs_to :user
  
  has_one_attached :track
  has_one_attached :image
  delegate :to_model, to: :track, allow_nil: true
  delegate :to_model, to: :image, allow_nil: true

end
