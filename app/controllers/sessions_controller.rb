class SessionsController < ApplicationController
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:users_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
          end
    end

    def destroy
        if user = User.find_by(id: session[:users_id])
            session.destroy
            head :no_content
        else 
            render json: {errors:"unauthorized"}, status: :unauthorized
        end
    end
end
