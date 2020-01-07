class CreateCryptos < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptos do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :cryptos, :symbol, unique: true
    add_index :cryptos, :name, unique: true
  end
end
