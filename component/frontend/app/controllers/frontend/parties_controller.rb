require_dependency "frontend/application_controller"

module Frontend
  class PartiesController < ApplicationController
    # before_action :set_party, only: [:show, :edit, :update, :destroy]
    before_action :set_party_navs, except: [:navigator]
    before_action :set_party_xcl_navs


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

    def navigator_xcl_excellence_talents
      render 'frontend/parties/navigator_xcl_excellence/talents'
    end

    def navigator_xcl_excellence_honors
      render 'frontend/parties/navigator_xcl_excellence/honors'
    end

    def navigator_xcl_excellence_videos
      render 'frontend/parties/navigator_xcl_excellence/videos'
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
          {path: parties_navigator_nnl_lead_path,
            img_path: 'media/images/party/nnl/navs/1.png',
            active_img_path: 'media/images/party/nnl/navs/1-active.png',
          },
          {path: parties_navigator_nnl_brand_path,
            img_path: 'media/images/party/nnl/navs/2.png',
            active_img_path: 'media/images/party/nnl/navs/2-active.png',
          },
          {path: parties_navigator_nnl_society_path,
            img_path: 'media/images/party/nnl/navs/3.png',
            active_img_path: 'media/images/party/nnl/navs/3-active.png',
          },
          {path: parties_navigator_nnl_service_path,
            img_path: 'media/images/party/nnl/navs/4.png',
            active_img_path: 'media/images/party/nnl/navs/4-active.png',
          },
          {path: parties_navigator_nnl_honor_path,
            img_path: 'media/images/party/nnl/navs/5.png',
            active_img_path: 'media/images/party/nnl/navs/5-active.png',
          },

        ]
        @party_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
            @active_party_nav = hash
          end
        end
      end

      def set_party_xcl_navs
        @party_xcl_navs = [
          {path: parties_navigator_xcl_pilot_path,
            img_path: 'media/images/party/xcl/navs/1.png',
            active_img_path: 'media/images/party/xcl/navs/1-active.png',
            big_img_path: 'media/images/party/navs/title/1.png'
          },
          {path: parties_navigator_xcl_fortress_path,
            img_path: 'media/images/party/xcl/navs/2.png',
            active_img_path: 'media/images/party/xcl/navs/2-active.png',
            big_img_path: 'media/images/party/navs/title/2.png'
          },
          {path: parties_navigator_xcl_pioneer_path,
            img_path: 'media/images/party/xcl/navs/3.png',
            active_img_path: 'media/images/party/xcl/navs/3-active.png',
            big_img_path: 'media/images/party/navs/title/3.png'
          },
          {path: parties_navigator_xcl_excellence_path,
            img_path: 'media/images/party/xcl/navs/4.png',
            active_img_path: 'media/images/party/xcl/navs/4-active.png',
            big_img_path: 'media/images/party/navs/title/4.png'
          },
          {path: parties_navigator_xcl_alliance_path,
            img_path: 'media/images/party/xcl/navs/5.png',
            active_img_path: 'media/images/party/xcl/navs/5-active.png',
            big_img_path: 'media/images/party/navs/title/5.png'
          },
        ]
        @party_xcl_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
            @active_party_xcl_nav = hash
          end
        end
      end



  end
end
