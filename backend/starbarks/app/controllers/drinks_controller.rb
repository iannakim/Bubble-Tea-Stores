class DrinksController < ApplicationController

  def index
      @drinks = Drink.all
      render json: @drinks
  end

  def show 
      @drink = Drink.find(params[:id])
      render json: @drink
  end

  def create
      @drink = Drink.create(drink_params)
      render json: @drink
  end

  def update
      @drink = Drink.find(params[:id])
      @drink.update(drink_params)
      render json: @drink
  end

  def destroy 
      @drink = Drink.find(params[:id])
      @drink.destroy
      render json: @drink
  end


  private

  def drink_params
      params.permit(:name, :store_id)
  end

end
