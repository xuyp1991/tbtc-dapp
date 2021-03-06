import React, { Component } from 'react';

import history from '../history'

class Home extends Component {

  handleClickDeposit = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    history.push('/deposit')
  }

  handleClickRedeem = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    history.push('/redeem')
  }

  render() {
    const { noEntry } = this.props
    const isMobile = window.innerWidth < 768

    return (
      <div className="home">
        <div className="title">
          Bitcoin,
		      <br />
          On
		      <br />
          Ethereum
		      <div className="subtitle">
            <div className="vertical-aligned">
              { isMobile
                ? <span>
                    No games,
                    <br />
                    just math.
                  </span>
                : <span>No games, just math.</span>
              }
		        </div>
          </div>
        </div>
        {
          noEntry
          ? ''
          : (
            <div className="mint-or-redeem">
              <a href="/deposit" onClick={this.handleClickDeposit}>
                <button className="blue">
                  Deposit
                </button>
              </a>
              <a href="/redeem" onClick={this.handleClickRedeem}>
                <button className="black">
                  Redeem
                </button>
              </a>
            </div>
          )
        }
        <div className="step-by-step">
          <ol>
            <li>
              Deposit BTC
            </li>
            <li>
              Mint TBTC
		        </li>
            <li>
              Lend and earn interest on your BTC.
		        </li>
          </ol>
        </div>
        <div className="mission-statement">
          <div className="hook">
            No middlemen. Period.
		      </div>
          <div className="line-and-sinker">
            Deposit and redeem BTC in DeFi without intermediaries.
		      </div>
        </div>
      </div>
    )
  }
}

export default Home
