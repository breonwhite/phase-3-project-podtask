class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :podcast_id
      t.string :list_status
      t.timestamps
    end
  end
end
