import React from 'react'
import axios from 'axios'
import { Grid, Header, Card, Button, Image, Segment } from 'semantic-ui-react'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

// const images = importAll(require.context('../../images', false, /s\.png$/));

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
    decending: false,
    started: false,
  }

  componentDidMount = async () => {
    await axios.get('/api/cards')
      .then( res => {
        this.setState({ cards: this.shuffleArray(res.data) })
      })
  }

  startGame = () => {
    this.setState({ started: true })
    this.roundDeal()
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
    let {
      round,
      playerOne,
      playerTwo,
      playerThree,
      playerFour,
      showingCard,
      decending
    } = this.state;
    let count = 0
    let i
    for (i = 0; i < round; i++) {
      playerOne.push(this.state.cards[count])
      count += 1
    }
    for (i = 0; i < round; i++) {
      playerTwo.push(this.state.cards[count])
      count += 1
    }
    for (i = 0; i < round; i++) {
      playerThree.push(this.state.cards[count])
      count += 1
    }
    for (i = 0; i < round; i++) {
      playerFour.push(this.state.cards[count])
      count += 1
    }
    // playerTwo.push(this.state.cards[round + 1])
    // playerThree.push(this.state.cards[round + 2])
    // playerFour.push(this.state.cards[round + 3])
    showingCard.push(this.state.cards[count])
    this.setState({
      dealing: true,
    })
  }

  nextRound = async () => {
    await this.descending()
    if ( this.state.decending ) {
      await this.setState({
        round: this.state.round - 1,
        cards: this.shuffleArray(this.state.cards),
        playerOne: [],
        playerTwo: [],
        playerThree: [],
        playerFour: [],
        showingCard: [],
      })
    } else {
      await this.setState({
        round: this.state.round + 1,
        cards: this.shuffleArray(this.state.cards),
        playerOne: [],
        playerTwo: [],
        playerThree: [],
        playerFour: [],
        showingCard: [],
      })
    }
    this.roundDeal()
  }

  descending = () => {
    if (this.state.round === 12) {
      this.setState({ decending: true })
    }
  }

//   render() {
//     console.log(images)
//     if (this.state.dealing) {
//       return(
//         <Grid columns={3}>
//           <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'green'}}>
//             <Header>Player Two</Header>
            // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            //   {this.state.playerTwo.map( card => {
            //     let name = `${card.name} of ${card.suit}`
            //     return(
            //       <Image
            //         key={card.id}
            //         src={images[`${card.image}`]}
            //         size='tiny'
            //         alt={name}
            //       />
            //     )
            //   })}
            // </div>
//           </Grid.Column>
//           <Grid.Column textAlign='center' width={10}>
//             <Grid.Row textAlign='center' style={{backgroundColor: 'red'}}>
//               <Header>Player Three</Header>
              // <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              //   {this.state.playerThree.map( card => {
              //     let name = `${card.name} of ${card.suit}`
              //     return(
              //       <Image
              //         key={card.id}
              //         src={images[`${card.image}`]}
              //         size='tiny'
              //         alt={name}
              //       />
              //     )
              //   })}
              // </div>
//             </Grid.Row>
//             <Grid.Row columns={3}>
//               <Grid.Column>
//                 <Segment style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   margin: 20,
//                 }}>
//                   <Image
//                     src={images['outline.png']}
//                     size='tiny'
//                     alt="card outline"
//                   />
//                 </Segment>
//               </Grid.Column>
//               <Grid.Column>
//                 <Segment style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: 20,
//                 }}>
//                   {this.state.showingCard.map( card => {
//                     let name = `${card.name} of ${card.suit}`
//                     return(
//                       <Image
//                         key={card.id}
//                         src={images[`${card.image}`]}
//                         size='tiny'
//                         alt={name}
//                       />
//                     )
//                   })}
//                   <Button style={{margin: 10}} onClick={this.nextRound}>Next Round</Button>
//                 </Segment>
//               </Grid.Column>
//               <Grid.Column>
//                 <Segment style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   margin: 20,
//                 }}>
//                   <Image
//                     src={images['outline.png']}
//                     size='tiny'
//                     alt="card outline"
//                   />
//                 </Segment>
//               </Grid.Column>
//             </Grid.Row>
//             <Grid.Row textAlign='center' style={{backgroundColor: 'yellow'}}>
//               <Header>Player One</Header>
              // <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              //   {this.state.playerOne.map( card => {
              //     let name = `${card.name} of ${card.suit}`
              //     return(
              //       <Image
              //         key={card.id}
              //         src={images[`${card.image}`]}
              //         size='tiny'
              //         alt={name}
              //       />
              //     )
              //   })}
              // </div>
//             </Grid.Row>
//           </Grid.Column>
//           <Grid.Column textAlign='center' width={3} style={{backgroundColor: 'blue'}}>
//             <Header>Player Four</Header>
            // <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            //   {this.state.playerFour.map( card => {
            //     let name = `${card.name} of ${card.suit}`
            //     return(
            //       <Image
            //         key={card.id}
            //         src={images[`${card.image}`]}
            //         size='tiny'
            //         alt={name}
            //       />
            //     )
            //   })}
            // </div>
//           </Grid.Column>
//         </Grid>
//       )
//     } else {
//       return(
//         <Button onClick={this.roundDeal}>Deal Round</Button>
//       )
//     }
//   }
// }

 render() {
   const { started, round } = this.state;
   let px = 'px'
   return(
     <div style={styles.gameboard}>
       <div style={styles.column} class="player-2">
        <Header>Player Two</Header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {this.state.playerTwo.map( (card, i) => {
            let name = `${card.name} of ${card.suit}`
            return(
              <Image
                key={card.id}
                src={images['card.png']}
                style={{
                  transform: 'rotate(90deg)',
                  position: 'relative',
                  zIndex: i,
                  top: `${-100 * i}` + px
                }}
                size='tiny'
                alt={name}
              />
            )
          })}
        </div>
       </div>
       <div style={styles.column} class="main-column">
         <div class="player-3">
          <Header textAlign="center">Player Three</Header>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {this.state.playerThree.map( (card, i) => {
              let name = `${card.name} of ${card.suit}`
              return(
                <Image
                  key={card.id}
                  src={images['card.png']}
                  style={{
                    position: 'relative',
                    zIndex: i,
                    left: `${-50 * i}` + px
                  }}
                  size='tiny'
                  alt={name}
                />
              )
            })}
          </div>
         </div>
         <div style={styles.column} class="common-table">
           <div style={{marginTop: 10}} class="hand-3">
             <Image
               src={images['outline.png']}
               size='tiny'
               alt="card outline"
             />
           </div>
           <div style={styles.row} class="center-row">
             <div class="hand-2">
               <Image
                 src={images['outline.png']}
                 size='tiny'
                 alt="card outline"
               />
             </div>
             <div className="trump"
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'space-around',
                 alignItems: 'center',
                 margin: 20,
               }}
              >
               {this.state.showingCard.map( card => {
                 let name = `${card.name} of ${card.suit}`
                 return(
                   <Image
                     key={card.id}
                     src={images[`${card.image}`]}
                     size='tiny'
                     alt={name}
                   />
                 )
               })}
               { started ?
                 <Button style={{margin: 10}} onClick={this.nextRound}>Next Round</Button>
                 :
                 <Button style={{margin: 10}} onClick={this.startGame}>Start Game</Button>
               }
             </div>
             <div className="hand-4">
               <Image
                 src={images['outline.png']}
                 size='tiny'
                 alt="card outline"
               />
             </div>
           </div>
           <div style={{marginBottom: 10}}  class="hand-1">
             <Image
               src={images['outline.png']}
               size='tiny'
               alt="card outline"
             />
           </div>
         </div>
         <div class="player-1">
          <Header>Player One</Header>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {this.state.playerOne.map( (card, i) => {
              let name = `${card.name} of ${card.suit}`
              return(
                <Image
                  key={card.id}
                  src={images[`${card.image}`]}
                  style={{
                    position: 'relative',
                    zIndex: i,
                    left: `${-50 * i}` + px
                  }}
                  size='tiny'
                  alt={name}
                />
              )
            })}
          </div>
         </div>
       </div>
       <div style={styles.column} class="player-4">
        <Header>Player Four</Header>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {this.state.playerFour.map( (card, i) => {
            let name = `${card.name} of ${card.suit}`
            return(
              <Image
                key={card.id}
                src={images['card.png']}
                style={{
                  transform: 'rotate(90deg)',
                  position: 'relative',
                  zIndex: i,
                  top: `${-100 * i}` + px
                }}
                size='tiny'
                alt={name}
              />
            )
          })}
        </div>
       </div>
     </div>
    )
  }
}

//TODO:create controller to get cards.

const styles = {
  gameboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50cb8e',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 50,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
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

//Need to control the space that the cards take up

export default Gameboard;
