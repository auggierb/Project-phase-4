class Comment < ApplicationRecord
belongs_to :user, optional: true
has_many :card_comments
has_many :cards, through: :card_comments

end
