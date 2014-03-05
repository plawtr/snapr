class CreateUserSnaps < ActiveRecord::Migration
  def change
    create_table :user_snaps do |t|
      t.integer :user_id
      t.integer :snap_id
    end
  end
end
