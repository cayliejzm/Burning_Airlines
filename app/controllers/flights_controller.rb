class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]


  def index
    @flights = Flight.all
  end


  def show
    @flight = Flight.find params[:id]
  end


  def new
    @flight = Flight.new
  end


  def edit
    @flight = Flight.find params[:id]
  end


  def create
    @flight = Flight.create flight_params


    respond_to do |format|
      if @flight.save
        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render :show, status: :created, location: @flight }
      else
        format.html { render :new }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_flight
      @flight = Flight.find(params[:id])
    end


    def flight_params
      params.require(:flight).permit(:flight_number, :origin, :destination, :date, :plane, :airplane_id)
    end
end
