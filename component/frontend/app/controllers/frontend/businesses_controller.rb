require_dependency "frontend/application_controller"

module Frontend
  class BusinessesController < ApplicationController
    # before_action :set_business, only: [:show, :edit, :update, :destroy]
    before_action :set_business_navs
    before_action :set_default_return_path

    layout 'frontend/business_application'


    # GET /businesses
    def index
      @return_path = home_path
    end

    def space_details
      @return_path = businesses_space_path
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

      def set_business_navs
        @business_navs = [
          {path: businesses_space_path, img_path: 'media/images/businesses/navs/1.jpg', active_img_path: 'media/images/businesses/navs/01.jpg'},
          {path: businesses_car_path, img_path: 'media/images/businesses/navs/2.jpg', active_img_path: 'media/images/businesses/navs/02.jpg'},
          {path: businesses_ship_path, img_path: 'media/images/businesses/navs/3.jpg', active_img_path: 'media/images/businesses/navs/03.jpg'},
          {path: businesses_train_path, img_path: 'media/images/businesses/navs/4.jpg', active_img_path: 'media/images/businesses/navs/04.jpg'},
          {path: "#", img_path: 'media/images/businesses/navs/5.jpg', active_img_path: 'media/images/businesses/navs/05.jpg'},
          {path: "#", img_path: 'media/images/businesses/navs/6.jpg', active_img_path: 'media/images/businesses/navs/06.jpg'},
        ]
        @business_navs.each do |hash|
          if request.path.match(hash[:path])
            hash[:active] = true
            hash[:img_path] = hash[:active_img_path]
          end
        end
      end

      def set_default_return_path
        # parent_paths = [businesses_space_path]
        # parent_paths.each do |parent_path|
        #   if request.path.match( parent_path )
        #     @return_path = parent_path
        #   end
        # end

        @return_path ||= businesses_path
      end

  end
end
