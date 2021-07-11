require_dependency "frontend/application_controller"

module Frontend
  class CorpInfosController < ApplicationController
    before_action :set_corp_info, only: [:show, :edit, :update, :destroy]
    before_action :set_corp_navs
    before_action :set_default_return_path

    def corp_all
      @return_path = home_path
    end

    def profile_xcl
      @return_path = corp_infos_profile_path

    end

    def profile_gt
      @return_path = corp_infos_profile_path

    end

    def culture_xcl
      @return_path = corp_infos_culture_path
    end

    def culture_gt
      @return_path = corp_infos_culture_path
    end

    def industry_liuzhou
      @return_path = corp_infos_industry_path
    end

    def industry_hezhou
      @return_path = corp_infos_industry_path
    end

    def industry_nanning
      @return_path = corp_infos_industry_path
    end

    def industry_laibin
      @return_path = corp_infos_industry_path
    end

    def industry_xinjiang
      @return_path = corp_infos_industry_path
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
          {path: corp_infos_profile_path, img_path: 'media/images/corp/navs/profile-nav-btn.png', active_img_path: 'media/images/corp/navs/profile-nav-btn-active.png'},
          {path: corp_infos_strategy_path, img_path: 'media/images/corp/navs/strategy-nav-btn.png', active_img_path: 'media/images/corp/navs/strategy-nav-btn-active.png'},
          {path: corp_infos_culture_path, img_path: 'media/images/corp/navs/culture-nav-btn.png', active_img_path: 'media/images/corp/navs/culture-nav-btn-active.png'},
          {path: corp_infos_industry_path, img_path: 'media/images/corp/navs/gx-buss-nav-btn.png', active_img_path: 'media/images/corp/navs/gx-buss-nav-btn-active.png'},
        ]
        @corp_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
          end
        end
      end

      def set_default_return_path
        @return_path ||= corp_all_path
      end

  end
end
