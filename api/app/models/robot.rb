class Employee < ApplicationRecord

  def self.column_types(*column_names)
    columns.index_by(&:name).values_at(*column_names).map(&:type)
  end

end
