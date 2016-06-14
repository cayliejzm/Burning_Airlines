class CreateJoinTableFlightUser < ActiveRecord::Migration
  def change
    create_join_table :flights, :users, :id => false do |t|
      t.index [:flight_id, :user_id]
      t.index [:user_id, :flight_id]
    end
  end
end
