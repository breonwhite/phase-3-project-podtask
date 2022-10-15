class Task < ActiveRecord::Base
    belongs_to :podcast, :list
end