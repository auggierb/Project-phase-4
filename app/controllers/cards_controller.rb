class CardsController < ApplicationController
    wrap_parameters false
    def create 
        card = Card.create(card_params)
       if card.valid?
        render json: card, status: :created, include: :user
        else render json:{errors: card.errors}
    end
    end
    def destroy
        card = Card.find_by(id: params[:id])
        card.destroy
    end

    def show 
        cards= Card.find_by(user_id: session[:user_id])
        render json: cards
    end

    def index
      card = Card.all 
      render json: card, include: :user
        
    end
    
    def update
        card = Card.find_by(id: params[:id])
    if card
        card.update(quantity: card.quantity + 1)
        render json: card
    end
    end



    private
    def card_params
        params.permit(:id, :name, :image, :text, :level, :quantity, :card, :user_id, :types => [])
    end
end 
