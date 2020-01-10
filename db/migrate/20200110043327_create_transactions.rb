class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :crypto_id, null: false
      t.float :units, null: false
      t.float :price, null: false
      t.string :transaction_type, null: false
      t.timestamps
    end
    add_index :transactions, :user_id
  end
end