json.portfolios do
  @portfolio.each do |holding|
    json.set! holding.id do
      json.extract! holding, :id, :user_id, :crypto_id, :units
    end
  end
end
json.cryptos do
  @portfolio.each do |holding|
    json.set! holding.crypto.id do
      json.extract! holding.crypto, :id, :symbol, :name
    end
  end
end