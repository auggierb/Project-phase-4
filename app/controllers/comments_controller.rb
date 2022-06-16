class CommentsController < ApplicationController
    
    def create
        comment= Comment.create(comment_params)
        if comment.valid?
        render json: comment, status: :created, include: :user
        else render json: {errors: comment.errors}
    end
    end
    
    def index 
    comments= Comment.all 
    render json: comments, include: :user
    end

    private
    def comment_params
    params.permit(:comment, :user_id)

    end

end
