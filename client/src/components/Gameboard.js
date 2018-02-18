import React from 'react'
import axios from 'axios'
import { Grid, Header, Card } from 'semantic-ui-react'

class Gameboard extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get('/api/cards')
      .then( res => {
        debugger
        this.setState({ cards: res.data })
      })
  }

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
          <Grid.Row>
            <Card.Group itemsPerRow={6}>
              {this.state.cards.map( card => {
                return(
                <Card>
                  <Card.Header>
                    {card.name} of {card.suit}
                  </Card.Header>
                  <Card.Description>
                    Color: {card.color} Value: {card.value}
                  </Card.Description>
                </Card>
              )
              })}
            </Card.Group>
          </Grid.Row>
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

//TODO:create controller to get cards.

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
