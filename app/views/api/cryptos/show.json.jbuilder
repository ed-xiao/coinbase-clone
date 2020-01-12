json.set! @crypto.id do
    json.extract! @crypto, :id, :symbol, :name
    json.value @value[@crypto.symbol]['USD']
end