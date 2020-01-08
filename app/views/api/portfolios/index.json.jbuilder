@portfolio.each do |holding|
  json.set! holding.id do
    json.extract! holding, :id, :user_id, :crypto_id, :units
  end
end

#json.array! @portfolio do |holding|
#    json.id holding
#end

#json.array! @portfolio, :id, :user_id, :units