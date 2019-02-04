# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  age             :integer          not null
#  gender          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord 
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :age, :gender, presence: true
  validates :password, length: { minimum: 6, allow_nil: true } 
  
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create 
  
  # /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  #this regexp is from https://www.w3resource.com/javascript/form/email-validation.php
  #the commented out one is used on the frontend
  
  validates :gender, inclusion: { in: ["Male", "Female", "Other", "Trans", "Prefer Not To Say"] }
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :tracks
  has_many :likes

  has_one_attached :profile_picture
  
  has_many :comments, 
    foreign_key: :author_id,
    class_name: 'Comment'

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end 

  def self.find_by_credentials(email, password)
    user = self.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end
end
