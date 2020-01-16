@transactions.each do |transaction|
    json.set! transaction.id do
        json.extract! transaction, :id, :user_id, :crypto_id, :units, :price, :transaction_type
        json.created_at transaction.created_at.to_date.to_s + ' ' + transaction.created_at.strftime('%H:%M')
    end
end