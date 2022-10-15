class CreatePodcasts < ActiveRecord::Migration[6.1]
  def change
    create_table :podcasts do |t|
      t.string :topic
      t.string :description
      t.string :guest
      t.date :release_date
      t.timestamps
    end
  end
end
