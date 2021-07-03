require_dependency "frontend/application_controller"

module Frontend
  class BusinessesController < ApplicationController
    # before_action :set_business, only: [:show, :edit, :update, :destroy]

    layout 'frontend/business_application'


    # GET /businesses
    def index

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
