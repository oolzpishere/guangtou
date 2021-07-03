require_dependency "frontend/application_controller"

module Frontend
  class AdvantagesController < ApplicationController
    # before_action :set_advantage, only: [:show, :edit, :update, :destroy]
    layout 'frontend/advantage_application'


    # GET /advantages
    def index
      # @advantages = Advantage.all
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_advantage
        @advantage = Advantage.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def advantage_params
        params.fetch(:advantage, {})
      end
  end
end
