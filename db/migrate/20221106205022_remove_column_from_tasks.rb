class RemoveColumnFromTasks < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :list_id, :integer
  end
end
