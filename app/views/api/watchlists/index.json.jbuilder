@watchlists.each do |watch|
    json.set! watch.id do
        json.extract! watch, :id, :user_id, :crypto_id
    end
end