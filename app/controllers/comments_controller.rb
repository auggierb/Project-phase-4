class CommentsController < ApplicationController
    
    def create
        comment= Comment.create(comment: params[:comment])
        if comment.valid?
        render json: comment, include: :user
        else render json: {errors: comment.errors}
    end
    end
    
    def index 
    comments= Comment.all 
    render json: comments
    end

end
