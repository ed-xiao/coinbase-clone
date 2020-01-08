#@portfolio.each do |holding|
#  json.set! holding.id do
#    json.extract! holding, :id, :user_id, :symbol, :name, :units
#  end
#end

json.array! @portfolio do |holding|
    json.id holding
end