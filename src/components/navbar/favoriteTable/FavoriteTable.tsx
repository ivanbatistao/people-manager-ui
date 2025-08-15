import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppStore } from "@/redux/store";
import { type GridColDef, type GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import type { people } from "@/data/people";
import type { Person } from "@/models";
import { removeFavorite } from "@/redux/states";

const FavoriteTable: React.FC = () => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const favoritesState = useSelector((store: AppStore) => store.favorites);
  const dispatch = useDispatch();

  const columns: GridColDef<(Person[])[number]>[] = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sortable: false,
      width: 20,
      renderCell: (params: GridRenderCellParams<Person>) => (
        <DeleteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            const updatedFavorites = favoritesState.filter(
              (favorite) => favorite.id !== params.row.id
            );
            dispatch(removeFavorite(updatedFavorites));
          }}
        />
      )
    },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
      valueGetter: (_, row: Person) => `${row.firstName} ${row.lastName}`,
      editable: false,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "company",
      headerName: "Company",
      width: 150,
      editable: true,
      valueGetter: (_, row: Person) => row.company.name,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      type: "number",
      editable: true,
    },
  ];

  return (
    <DataGrid
      rows={favoritesState}
      columns={columns}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      getRowId={(row: (typeof people)[number]) => row.id}
    />
  );
}

export default FavoriteTable;