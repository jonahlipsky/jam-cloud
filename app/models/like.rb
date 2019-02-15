# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_id   :integer
#  likeable_type :string
#  user_id       :integer
#

class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: [ :likeable_id, :likeable_type ] }

  belongs_to :likeable, polymorphic: true
  belongs_to :user
end
