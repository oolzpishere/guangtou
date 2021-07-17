module Frontend
  class ApplicationController < ActionController::Base
    before_action :set_default_return_path
    before_action :set_page_class

    def set_page_class
      if request.path != root_path
        @page_class = request.path.split('/').slice(1..-1).join('-')
      elsif request.path == '/'
        @page_class = 'home'
      end
    end

    def set_default_return_path
      path_arr_splited = request.path.split('/')
      path_arr_splited.pop
      @return_path ||= path_arr_splited.join('/')
      # @return_path ||= businesses_path
    end

  end
end
