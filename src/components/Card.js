import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("url here")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Example{" "}
        </Typography>
        <Grid container spacing={3}>
          {data.map((param) => (
            <Grid item xs={12} sm={4} key={}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {key.map}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {key.map}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;