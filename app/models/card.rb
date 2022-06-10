class Card < ApplicationRecord
    belongs_to :user
    has_many :card_comments
    has_many :comments, through: :card_comments
    #attr_reader :user
    #self.inheritance_column = :_type_disabled

  
    
    validates :name, :image, :types, presence: true 
end
