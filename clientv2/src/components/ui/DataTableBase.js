import React from "react";
import DataTable from "react-data-table-component";

const DataTableBase = (props) => {
  return (
    <div>
      <DataTable
        selectableRows
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 50]}
        sortable
        {...props}
      />
    </div>
  );
};

export default DataTableBase;
