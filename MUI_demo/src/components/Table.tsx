import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const Table = () => {
  interface TableInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const [data, setData] = useState<TableInterface[]>([]);
  const getData = async (): Promise<TableInterface[]> => {
    const url: string = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const resData = await response.json();
    const data: TableInterface[] = resData.map((item: TableInterface) => {
      return {
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body
      };
    });
    return data;
    // const resData = (await response.json()) as TableInterface[];
    // setData(resData);
  };
  useEffect(() => {
    const values = getData();
    values.then((res) => {
      setData(res);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 350 },
    { field: "body", headerName: "Body", width: 600 }
  ];
  return (
    <Box sx={{ width: "75%", height: "100%", mt: 5 }}>
      <DataGrid
        rows={data}
        columns={columns}
        sx={{bgcolor: "white"}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        checkboxSelection
      />
    </Box>
  );
};

export default Table;
