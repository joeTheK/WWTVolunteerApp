class AddTitleToEvents < ActiveRecord::Migration[4.2]
  def change
    add_column :events, :title, :string
  end
end
