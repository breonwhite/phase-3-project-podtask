class List < ActiveRecord::Base
    belongs_to :podcast
    has_many :tasks
end