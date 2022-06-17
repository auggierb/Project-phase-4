class UsersController < ApplicationController
    wrap_parameters false
    def create 
        user = User.create(user_params)
        if user.valid?
            
        render json: user, status: :created
        else 
            render json:{errors: "invalid Username or password"}, status: :unauthorized
        end
        end

    
        
        def show
        user= User.find_by(id: session[:users_id])
        if user
            render json: user 
        else render json: {error: "Not Authorized"}, status: :unauthorized
        end 
        end
        
      
    

        private
        def find_user
            user = User.find_by(username:params[:username])
        end
    
        def user_params
        params.permit(:username, :password, :password_confirmation, :id)
        end 
    
end
