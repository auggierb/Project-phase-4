class Comment < ApplicationRecord

has_many :user_comments
has_many :users, through: :user_comments
end
