json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :origin, :destination, :date, :plane, :airplane_id
  json.url flight_url(flight, format: :json)
end
