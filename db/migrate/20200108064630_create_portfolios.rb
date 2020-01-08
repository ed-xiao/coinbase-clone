class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.integer :crypto_id, null: false
      t.float :units, null: false
      t.timestamps
    end
    add_index :portfolios, [:user_id, :crypto_id], unique: true
    add_index :portfolios, :user_id
  end
end