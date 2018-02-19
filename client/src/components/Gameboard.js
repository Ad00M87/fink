import React from 'react'
import axios from 'axios'
import { Grid, Header, Card, Button } from 'semantic-ui-react'

class Gameboard extends React.Component {
  state = {
    cards: [],
    dealing: false,
    round: 1,
    playerOne: [],
    playerTwo: [],
    playerThree: [],
    playerFour: [],
    showingCard: [],
  }

  componentDidMount = async () => {
    await axios.get('/api/cards')
      .then( res => {
        this.setState({ cards: this.shuffleArray(res.data) })
      })
  }

  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }

  roundDeal = () => {
    let { round, playerOne, playerTwo, playerThree, playerFour, showingCard } = this.state;
    playerOne.push(this.state.cards[round])
    playerTwo.push(this.state.cards[round + 1])
    playerThree.push(this.state.cards[round + 2])
    playerFour.push(this.state.cards[round + 3])
    showingCard.push(this.state.cards[round + 4])
    this.setState({
      dealing: true,
    })
  }

  render() {
    if (this.state.dealing) {
      return(
        <Grid columns={3}>
          <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'green'}}>
            <Header>Player Two</Header>
            {this.state.playerTwo.map( card => {
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
          </Grid.Column>
          <Grid.Column textAlign='center' width={10}>
            <Grid.Row textAlign='center' style={{backgroundColor: 'red'}}>
              <Header>Player Three</Header>
              {this.state.playerThree.map( card => {
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
            </Grid.Row>
            <Grid.Row>
              <Card.Group itemsPerRow={6}>
                {this.state.showingCard.map( card => {
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
              {this.state.playerOne.map( card => {
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
            </Grid.Row>
          </Grid.Column>
          <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'blue'}}>
            <Header>Player Four</Header>
            {this.state.playerFour.map( card => {
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
          </Grid.Column>
        </Grid>
      )
    } else {
      return(
        <Button onClick={this.roundDeal}>Deal Round</Button>
      )
    }
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
