import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

class Gameboard extends React.Component {
  render() {
    return(
      <Grid columns={3}>
        <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'green', height: '80vh'}}>
          <Header>Player Two</Header>
        </Grid.Column>
        <Grid.Column textAlign='center' width={10} style={{height: '80vh'}}>
          <Grid.Row textAlign='center' style={{backgroundColor: 'red', height: '20vh'}}>
            <Header>Player Three</Header>
          </Grid.Row>
          <Grid.Row style={{height: '40vh'}}></Grid.Row>
          <Grid.Row textAlign='center' style={{backgroundColor: 'yellow', height: '20vh'}}>
            <Header>Player One</Header>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'blue', height: '80vh'}}>
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
