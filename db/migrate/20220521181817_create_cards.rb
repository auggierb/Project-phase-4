class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :image
      t.string :text
      t.integer :level
      t.string :types
      t.references :user
      t.timestamps
    end
  end
end
