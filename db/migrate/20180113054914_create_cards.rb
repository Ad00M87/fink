class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :value
      t.string :suit
      t.string :color

      t.timestamps
    end
  end
end
