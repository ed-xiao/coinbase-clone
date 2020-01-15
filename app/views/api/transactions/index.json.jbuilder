@transactions.each do |transaction|
    json.set! transaction.id do
        json.extract! transaction, :id, :user_id, :crypto_id, :units, :price, :transaction_type, :created_at
    end
end