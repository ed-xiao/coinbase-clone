class Transaction < ApplicationRecord
    validates :user_id, :crypto_id, :units, :price, presence: true
    validates :transaction_type, inclusion: {in: ['buy', 'sell']}

    belongs_to :user
    belongs_to :crypto
end