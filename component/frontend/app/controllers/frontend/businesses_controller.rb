require_dependency "frontend/application_controller"

module Frontend
  class BusinessesController < ApplicationController
    # before_action :set_business, only: [:show, :edit, :update, :destroy]
    before_action :set_business_navs




    layout 'frontend/business_application'


    # GET /businesses
    def index
      @return_path = home_path
    end

    def space_details

    end

    def car_details

    end

    def ship_details

    end

    def train_details

    end

    def electronic_details

    end

    # def capacitor_details

    # end


    private
      # Use callbacks to share common setup or constraints between actions.
      def set_business
        @business = Business.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def business_params
        params.fetch(:business, {})
      end

      def set_business_navs
        @business_navs = [
          {path: businesses_space_path, img_path: 'media/images/businesses/navs/1.jpg', active_img_path: 'media/images/businesses/navs/01.jpg', html_options: {} },
          {path: businesses_car_path, img_path: 'media/images/businesses/navs/2.jpg', active_img_path: 'media/images/businesses/navs/02.jpg', html_options: {} },
          {path: businesses_ship_path, img_path: 'media/images/businesses/navs/3.jpg', active_img_path: 'media/images/businesses/navs/03.jpg', html_options: {} },
          {path: businesses_train_path, img_path: 'media/images/businesses/navs/4.jpg', active_img_path: 'media/images/businesses/navs/04.jpg', html_options: {} },
          {path: businesses_electronic_path, img_path: 'media/images/businesses/navs/5.jpg', active_img_path: 'media/images/businesses/navs/05.jpg', html_options: {} },
          # {path: businesses_capacitor_path, img_path: 'media/images/businesses/navs/6.jpg', active_img_path: 'media/images/businesses/navs/06.jpg'},
        ]
        @business_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
          end
        end
      end




  end
end


# parent_paths = [businesses_space_path]
# parent_paths.each do |parent_path|
#   if request.path.match( parent_path )
#     @return_path = parent_path
#   end
# end
