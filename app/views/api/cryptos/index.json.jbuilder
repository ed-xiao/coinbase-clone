@cryptos.each do |crypto|
    json.set! crypto.id do
        unless crypto.symbol == 'USD'
            json.extract! crypto, :id, :symbol, :name
        end
    end
end