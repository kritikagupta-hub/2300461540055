import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const sampleNotifications = [
  {
    ID: "1",
    Type: "Placement",
    Message: "CSX Corporation hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Mid Sem Result",
    Timestamp: "2026-04-22 17:50:54",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Tech Fest",
    Timestamp: "2026-04-22 17:50:06",
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? sampleNotifications
      : sampleNotifications.filter(
          (item) => item.Type === filter
        );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Campus Notifications
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Filter</InputLabel>

        <Select
          value={filter}
          label="Filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Placement">
            Placement
          </MenuItem>
          <MenuItem value="Result">
            Result
          </MenuItem>
          <MenuItem value="Event">Event</MenuItem>
        </Select>
      </FormControl>

      {filtered.map((item) => (
        <Card key={item.ID} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">
              {item.Type}
            </Typography>

            <Typography>
              {item.Message}
            </Typography>

            <Typography variant="body2">
              {item.Timestamp}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default App;