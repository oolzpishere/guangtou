require 'pry'
require 'fileutils'
require 'open3'


class ChangeImagesSize

  def initialize()
    # @change_path = '/Volumes/Cdisk/www/rails/guangtou/app/packs/images'
    @change_path = '/Users/leeli/Downloads/change_size_buf'

    @scale_image = 0.75

    loop_each(@change_path)
  end

  def loop_each(path)
    get_child_files_absolute_path( path ).each do |path|
      if path_is_dir(path)
        loop_each(path)
      elsif path_is_image?(path)
        new_width = get_current_width(path).to_i * @scale_image
        puts "mogrify -resize #{new_width.to_i} #{path}"
        `mogrify -resize #{new_width} #{path}`
      end
    end
  end

  def get_child_files_absolute_path(path)
    o = `ls -x #{path}`
    file_names = o.split
    file_names.map{|name| "#{path}/#{name}"}
  end

  def path_is_image?(path)
    path.match(/\.(jpg|jpeg|png)$/)
  end

  def path_is_dir(path)
    File.directory?(path)
  end

  def get_current_width(path)
    `identify -format "%w" #{path}`
  end




end

ChangeImagesSize.new
