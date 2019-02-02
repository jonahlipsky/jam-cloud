# == Schema Information
#
# Table name: tracks
#
#  id       :bigint(8)        not null, primary key
#  title    :string           not null
#  user_id  :integer
#  album_id :integer
#

class Track < ApplicationRecord
  validates :title, presence: true
  
  validate :ensure_image
  validate :ensure_sound_file
  
  belongs_to :user
  
  has_one_attached :sound_file
  has_one_attached :image
  
  def ensure_sound_file
    unless self.sound_file.attached?
      errors[:sound_file] << "Track must be attached"
    end
  end

  def ensure_image
    unless self.image.attached?
      errors[:image] << "Image must be attached"
    end
  end

end
