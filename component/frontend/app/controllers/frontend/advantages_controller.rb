require_dependency "frontend/application_controller"

module Frontend
  class AdvantagesController < ApplicationController
    before_action :set_advantage, only: [:show, :edit, :update, :destroy]

    # GET /advantages
    def index
      @advantages = Advantage.all
    end

    # GET /advantages/1
    def show
    end

    # GET /advantages/new
    def new
      @advantage = Advantage.new
    end

    # GET /advantages/1/edit
    def edit
    end

    # POST /advantages
    def create
      @advantage = Advantage.new(advantage_params)

      if @advantage.save
        redirect_to @advantage, notice: 'Advantage was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /advantages/1
    def update
      if @advantage.update(advantage_params)
        redirect_to @advantage, notice: 'Advantage was successfully updated.'
      else
        render :edit
      end
    end

    # DELETE /advantages/1
    def destroy
      @advantage.destroy
      redirect_to advantages_url, notice: 'Advantage was successfully destroyed.'
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
