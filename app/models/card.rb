class Card < ApplicationRecord
    belongs_to :user
   
  
    #attr_reader :user
    #self.inheritance_column = :_type_disabled

  
    
    validates :name, :image, :types, presence: true 
end
