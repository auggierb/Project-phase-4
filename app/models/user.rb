class User < ApplicationRecord
   has_secure_password
   has_many :cards 
   has_many :user_comments
   has_many :comments, through: :user_comments
   accepts_nested_attributes_for :cards
end
 