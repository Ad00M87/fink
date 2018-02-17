class Api::CardsController < ApplicationController

  def index
    @card = Card.all
  end

  def show
  end
  
end
