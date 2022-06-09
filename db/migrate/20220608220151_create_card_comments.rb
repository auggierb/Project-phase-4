class CreateCardComments < ActiveRecord::Migration[6.1]
  def change
    create_table :card_comments do |t|
      t.integer :card_id
      t.integer :comment_id

      t.timestamps
    end
  end
end
