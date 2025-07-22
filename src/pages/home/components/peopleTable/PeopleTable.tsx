import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import { people } from "@/data/people";
import type { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { type AppStore } from "@/redux/store";
import { getLocalStorage } from "@/utilities";
import { Checkbox } from "@mui/material";

interface PeopleTable {}

const PeopleTable: React.FC<PeopleTable> = ({}) => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const dispatch = useDispatch();
  const peopleState = useSelector((store: AppStore) => store.people);
  const favoritesState = useSelector((store: AppStore) => store.favorites);

  const findPerson = (selectedPerson: Person) => {
    return selectedPeople.find((person) => person.id === selectedPerson.id);
  };

  const filterPerson = (person: Person) => {
    return selectedPeople.filter(
      (selectedPerson) => person.id !== selectedPerson.id
    );
  };


  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns: GridColDef<Person[][number]>[] = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      description: "This column has a checkbox",
      sortable: false,
      width: 20,
      renderCell: (params: GridRenderCellParams<Person>) => {
        return (
          <Checkbox
            size="small"
            checked={findPerson(params.row) !== undefined}
            onChange={() => handleChange(params.row)}
          />
        );
      },
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

  useEffect(() => {
    const favoritesFromLocalStorage = getLocalStorage("favorites") || [];
    setSelectedPeople(favoritesFromLocalStorage);
  }, [peopleState, favoritesState]);

  return (
    <DataGrid
      rows={peopleState}
      columns={columns}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      getRowId={(row: (typeof people)[number]) => row.id}
      disableColumnMenu
      sx={{
        width: '100%',
        '& .MuiDataGrid-main': { overflow: 'hidden' },
        '& .MuiDataGrid-virtualScroller': {
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd',
            borderRadius: '4px',
          }
        }
      }}
    />
  );
};

export default PeopleTable;
