require_dependency "frontend/application_controller"

module Frontend
  class AdvantagesController < ApplicationController
    # before_action :set_advantage, only: [:show, :edit, :update, :destroy]
    before_action :set_advantage_navs

    layout 'frontend/advantage_application'


    # GET /advantages
    def index
      # @advantages = Advantage.all
      @return_path = home_path

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

      def set_advantage_navs
        @advantage_navs = [
          {path: advantages_team_path, img_path: 'media/images/advantages/navs/1.png', active_img_path: 'media/images/advantages/navs/01.png', html_options: {} },
          {path: advantages_innovation_construction_path, matcher: '/advantages/innovation', img_path: 'media/images/advantages/navs/2.png', active_img_path: 'media/images/advantages/navs/02.png', html_options: {'data-turbolinks'=> false}},
          {path: advantages_equipment_path, img_path: 'media/images/advantages/navs/3.png', active_img_path: 'media/images/advantages/navs/03.png', html_options: {} },
        ]
        @advantage_navs.each do |hash|
          if request.path.match(hash[:path]) || ( hash[:matcher] && request.path.match(hash[:matcher]) )
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
          end
        end
      end

  end
end
