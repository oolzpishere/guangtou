require_dependency "frontend/application_controller"

module Frontend
  class PartiesController < ApplicationController
    # before_action :set_party, only: [:show, :edit, :update, :destroy]
    before_action :set_party_navs

    layout 'frontend/party_application'

    # GET /parties
    def index
      # @parties = Party.all
    end

    # GET /parties/1
    def show
    end

    # GET /parties/new
    def new
      @party = Party.new
    end

    # GET /parties/1/edit
    def edit
    end

    # POST /parties
    def create
      @party = Party.new(party_params)

      if @party.save
        redirect_to @party, notice: 'Party was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /parties/1
    def update
      if @party.update(party_params)
        redirect_to @party, notice: 'Party was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /parties/1
    def destroy
      @party.destroy
      redirect_to parties_url, notice: 'Party was successfully destroyed.'
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
            img_path: 'media/images/party/navs/01.png',
            active_img_path: 'media/images/party/navs/1.png',
            big_img_path: 'media/images/party/navs/001.png'
          },
          {path: parties_brand_path,
            img_path: 'media/images/party/navs/02.png',
            active_img_path: 'media/images/party/navs/2.png',
            big_img_path: 'media/images/party/navs/002.png'
          },
          {path: "#",
            img_path: 'media/images/party/navs/03.png',
            active_img_path: 'media/images/party/navs/3.png',
            big_img_path: 'media/images/party/navs/003.png'
          },
          {path: "#",
            img_path: 'media/images/party/navs/04.png',
            active_img_path: 'media/images/party/navs/4.png',
            big_img_path: 'media/images/party/navs/004.png'
          },
          {path: "#",
            img_path: 'media/images/party/navs/05.png',
            active_img_path: 'media/images/party/navs/5.png',
            big_img_path: 'media/images/party/navs/005.png'
          },
          {path: "#",
            img_path: 'media/images/party/navs/06.png',
            active_img_path: 'media/images/party/navs/6.png',
            big_img_path: 'media/images/party/navs/006.png'
          },
          {path: "#",
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

  end
end
