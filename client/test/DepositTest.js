const Web3 = require('web3')

import { createDeposit, setDefaults } from '../src'

import {
    TBTCSystem,
    TBTCToken,
    KeepBridge,
    Deposit
} from '../src/eth/contracts'

const BN = require('bn.js')
const chai = require('chai')
const expect = chai.expect
const bnChai = require('bn-chai')
chai.use(bnChai(BN))

let web3

describe("Ethereum helpers", async () => {
    before(async () => {        
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        await setDefaults(web3)
    })

    it('#createDeposit', async () => {
        const depositAddress = await createDeposit()
        const deposit = await Deposit.at(depositAddress)

        expect(await deposit.getCurrentState()).to.eq.BN('1')
    })
})