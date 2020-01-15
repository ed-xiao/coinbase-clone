class Watchlist < ApplicationRecord
    validates :user_id, :crypto_id, presence: true
    validates :crypto_id, uniqueness: { scope: :user_id,
    message: 'User already has this crypto in their watchlist'}

    belongs_to :user
    belongs_to :crypto
end
