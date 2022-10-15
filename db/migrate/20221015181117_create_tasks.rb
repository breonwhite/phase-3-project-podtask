class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :podcast_id
      t.integer :list_id
      t.string :to_do
      t.string :todo_status
      t.timestamps
    end
  end
end
