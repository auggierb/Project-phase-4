class User < ApplicationRecord
   has_secure_password
   has_many :cards 
   has_many :comments
   accepts_nested_attributes_for :cards
end
 