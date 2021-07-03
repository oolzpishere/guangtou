require_dependency "frontend/application_controller"

module Frontend
  class CorpInfosController < ApplicationController
    before_action :set_corp_info, only: [:show, :edit, :update, :destroy]
    before_action :set_corp_navs

    # GET /corp_infos
    def index
      # @corp_infos = CorpInfo.all
    end


    private
      # Use callbacks to share common setup or constraints between actions.
      def set_corp_info
        @corp_info = CorpInfo.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def corp_info_params
        params.fetch(:corp_info, {})
      end

      def set_corp_navs
        @corp_navs = [
          {path: profile_path, img_path: 'media/images/corp/profile/profile-nav-btn.png', active_img_path: 'media/images/corp/profile/profile-nav-btn-active.png'},
          {path: strategy_path, img_path: 'media/images/corp/profile/strategy-nav-btn.png', active_img_path: 'media/images/corp/profile/strategy-nav-btn-active.png'},
          {path: culture_path, img_path: 'media/images/corp/profile/culture-nav-btn.png', active_img_path: 'media/images/corp/profile/culture-nav-btn-active.png'},
          {path: sync_path, img_path: 'media/images/corp/profile/gx-buss-nav-btn.png', active_img_path: 'media/images/corp/profile/gx-buss-nav-btn-active.png'},
        ]
        @corp_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
          end
        end
      end

  end
end
