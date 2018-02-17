class Api::CardsController < ApplicationController

  def index
    @card = Card.all
    render json: @card
  end

  def show
  end

end
