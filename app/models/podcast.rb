class Podcast < ActiveRecord::Base
    has_many :tasks
end