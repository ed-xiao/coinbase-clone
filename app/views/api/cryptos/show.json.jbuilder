json.set! @crypto.id do
    json.extract! @crypto, :id, :symbol, :name
    json.merge! @value['RAW'][@crypto.symbol]['USD']
end