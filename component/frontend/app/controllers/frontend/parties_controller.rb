require_dependency "frontend/application_controller"

module Frontend
  class PartiesController < ApplicationController
    # before_action :set_party, only: [:show, :edit, :update, :destroy]
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
  end
end
