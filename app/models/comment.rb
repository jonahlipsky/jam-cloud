# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  track_id          :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
  include Likeable
  validates :body, presence: true
  validates :body, length: { maximum: 250 }

  belongs_to :author, 
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :track

  belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: "Comment",
    optional: true

  has_many :child_comments, 
    foreign_key: :parent_comment_id,
    class_name: "Comment"

  has_many :likers,
    through: :likes,
    source: :user


end
