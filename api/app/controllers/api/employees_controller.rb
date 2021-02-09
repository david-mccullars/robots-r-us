module Api
  class EmployeesController < ActionController::Base

    FIELDS = {
      'id' => 'ID',
      'first_name' => 'First Name',
      'last_name' => 'Last Name',
      'email' => 'Email Address',
      'title' => 'Job Title',
      'avatar' => 'Profile Picture',
    }

    def index
      render json: {
        data: employees,
        fields: fields,
        field_types: field_types,
      }
    end

    private

    def requested_fields
      @requested_fields ||= params[:fields].present? ? FIELDS.slice(*params[:fields].split(',')) : FIELDS
    end

    def employee_filters
      params.permit(*requested_fields.keys).slice(*requested_fields.keys)
    end

    def employees
      Employee.where(employee_filters).order(:last_name, :first_name, :id).map do |r|
        r.as_json.values_at(*requested_fields.keys)
      end
    end

    def fields
      requested_fields.map do |id, name|
        { id: id, name: name }
      end
    end

    def field_types
      @field_types ||= Employee.column_types(*requested_fields.keys)
    end

  end
end
