import { Container, Grid, Grow } from "@material-ui/core";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";


function App() {
  return (
    <>
      <NavBar />
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  )
}

export default App;
