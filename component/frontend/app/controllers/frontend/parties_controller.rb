require_dependency "frontend/application_controller"

module Frontend
  class PartiesController < ApplicationController
    # before_action :set_party, only: [:show, :edit, :update, :destroy]
    before_action :set_party_navs
    before_action :set_default_return_path
    before_action :set_page_class



    layout 'frontend/party_application'

    # GET /parties
    def index
      # @parties = Party.all
      @return_path = home_path
    end

    def profile

    end

    def brand_detail

    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_party
        @party = Party.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def party_params
        params.fetch(:party, {})
      end

      def set_party_navs
        @party_navs = [
          {path: parties_profile_path,
            img_path: 'media/images/party/navs/1.png',
            active_img_path: 'media/images/party/navs/01.png',
            big_img_path: 'media/images/party/navs/title/1.png'
          },
          {path: parties_brand_path,
            img_path: 'media/images/party/navs/2.png',
            active_img_path: 'media/images/party/navs/02.png',
            big_img_path: 'media/images/party/navs/title/2.png'
          },
          {path: parties_lead_path,
            img_path: 'media/images/party/navs/3.png',
            active_img_path: 'media/images/party/navs/03.png',
            big_img_path: 'media/images/party/navs/title/3.png'
          },
          {path: parties_society_path,
            img_path: 'media/images/party/navs/4.png',
            active_img_path: 'media/images/party/navs/04.png',
            big_img_path: 'media/images/party/navs/title/4.png'
          },
          {path: parties_service_path,
            img_path: 'media/images/party/navs/5.png',
            active_img_path: 'media/images/party/navs/05.png',
            big_img_path: 'media/images/party/navs/title/5.png'
          },
          {path: parties_honor_path,
            img_path: 'media/images/party/navs/6.png',
            active_img_path: 'media/images/party/navs/06.png',
            big_img_path: 'media/images/party/navs/title/6.png'
          },
          {path: parties_video_path,
            img_path: 'media/images/party/navs/07.png',
            active_img_path: 'media/images/party/navs/7.png',
            big_img_path: 'media/images/party/navs/007.png'
          }
        ]
        @party_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
            @active_party_nav = hash
          end
        end
      end

      def set_default_return_path
        path_arr_splited = request.path.split('/')
        path_arr_splited.pop
        @return_path ||= path_arr_splited.join('/')
        # @return_path ||= parties_profile_path
      end

      def set_page_class
        @page_class = request.path.split('/').slice(1..-1).join('-')
      end
      
  end
end
