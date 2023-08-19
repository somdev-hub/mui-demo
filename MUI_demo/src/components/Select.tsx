import {
  Box,
  Card,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";

interface SelectInterface {
  department: string;
  sub_departments?: string[];
}

const SelectOptions: SelectInterface[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"]
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"]
  }
];

const Select = () => {
  const [view, setView] = useState([false, false]);
  const [checked, setChecked] = useState([
    {
      main: false,
      sub: [false, false]
    },
    {
      main: false,
      sub: [false, false, false]
    }
  ]);

  const handleExpand = (index: number) => {
    const newView = [...view];
    newView[index] = !newView[index];
    setView(newView);
  };

  const handleListItemClick = (index: number) => {
    const newChecked = [...checked];
    newChecked[index].main = !newChecked[index].main;
    newChecked[index].sub = newChecked[index].sub.map(() => {
      return newChecked[index].main;
    });
    setChecked(newChecked);
  };
  const handleSubListItemClick = (index1: number, index2: number) => {
    const newChecked = [...checked];
    newChecked[index1].sub[index2] = !newChecked[index1].sub[index2];
    newChecked[index1].main = newChecked[index1].sub.every(
      (sub: boolean) => sub
    );
    setChecked(newChecked);
  };
  return (
    <div>
      <Card sx={{ width: "100%", marginTop: 5 }}>
        <List>
          {SelectOptions.map((option: SelectInterface, index1: number) => {
            return (
              <Box sx={{ width: "100%" }}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" onClick={() => handleExpand(index1)} >
                      {view[index1] ? (
                        <KeyboardArrowDownIcon
                          sx={{ transform: "rotate(180deg)" }}
                        />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  }
                >
                  <ListItemButton onClick={() => handleListItemClick(index1)}>
                    <ListItemIcon>
                      <Checkbox checked={checked[index1].main} />
                    </ListItemIcon>
                    <ListItemText primary={option.department}></ListItemText>
                  </ListItemButton>
                </ListItem>
                <List
                  sx={{
                    // display: "flex",
                    flexDirection: "column",
                    marginLeft: 5,

                    display: view[index1] ? "flex" : "none"
                  }}
                >
                  {option.sub_departments?.map(
                    (sub: string, index2: number) => {
                      return (
                        <ListItem>
                          <ListItemButton
                            onClick={() =>
                              handleSubListItemClick(index1, index2)
                            }
                          >
                            <ListItemIcon>
                              <Checkbox checked={checked[index1].sub[index2]} />
                            </ListItemIcon>
                            <ListItemText primary={sub}></ListItemText>
                          </ListItemButton>
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Box>
            );
          })}
        </List>
      </Card>
    </div>
  );
};

export default Select;
