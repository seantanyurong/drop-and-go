import React from "react";
import DataTable from "react-data-table-component";

const DataTableBase = (props) => {
  return (
    <div>
      <DataTable
        selectableRows
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 50]}
        sortable
        highlightOnHover
        pointerOnHover
        {...props}
      />
    </div>
  );
};

export default DataTableBase;
