require_dependency "frontend/application_controller"

module Frontend
  class BusinessesController < ApplicationController
    # before_action :set_business, only: [:show, :edit, :update, :destroy]

    layout 'frontend/business_application'


    # GET /businesses
    def index
      
    end

    # GET /businesses/1
    def show
    end

    # GET /businesses/new
    def new
      @business = Business.new
    end

    # GET /businesses/1/edit
    def edit
    end

    # POST /businesses
    def create
      @business = Business.new(business_params)

      if @business.save
        redirect_to @business, notice: 'Business was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /businesses/1
    def update
      if @business.update(business_params)
        redirect_to @business, notice: 'Business was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /businesses/1
    def destroy
      @business.destroy
      redirect_to businesses_url, notice: 'Business was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_business
        @business = Business.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def business_params
        params.fetch(:business, {})
      end
  end
end
