class Crypto < ApplicationRecord
    validates :symbol, :name, presence: true, uniqueness: true

    has_many :portfolios
end