class AddQuantity < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :quantity, :integer, default: 0
  end
end
