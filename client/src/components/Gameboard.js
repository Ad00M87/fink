import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

class Gameboard extends React.Component {
  render() {
    return(
      <Grid columns={3}>
        <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'green'}}>
          <Header>Player Two</Header>
        </Grid.Column>
        <Grid.Column textAlign='center' width={10}>
          <Grid.Row textAlign='center' style={{backgroundColor: 'red'}}>
            <Header>Player Three</Header>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row textAlign='center' style={{backgroundColor: 'yellow'}}>
            <Header>Player One</Header>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'blue'}}>
          <Header>Player Four</Header>
        </Grid.Column>
      </Grid>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
  },
  board: {
    backgroundColor: 'rgb(72, 140, 50)',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  player: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
}

export default Gameboard;
