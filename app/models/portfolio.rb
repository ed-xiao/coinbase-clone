class Portfolio < ApplicationRecord
    validates :user_id, :crypto_id, :units, presence: true
    validates :crypto_id, uniqueness: { scope: :user_id,
    message: 'Should have at most one holding per crypto per user'}

    belongs_to :user
    belongs_to :crypto
end
