const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { validasiTetangga, ERROR_INITIAL_POS, ERROR_NULL } = require('../src/js/validasi-tetangga.js')

let coord = [
    {
        letter: 'a', initialPosition: { x: 2, y: 3 }, beforePosition: { x: 1, y: 1 }
    },
    {
        letter: 'a', initialPosition: { x: 2, y: 1 }, beforePosition: { x: 2, y: 2 }
    },
    {
        letter: 'a', initialPosition: { x: null, y: null }, beforePosition: { x: 2, y: 2 }
    },
    {
        letter: 'a', initialPosition: { x: 2, y: 3 }, beforePosition: { x: null, y: null }
    },
    {
        letter: 'a', initialPosition: { x: null, y: null }, beforePosition: { x: null, y: null }
    },
];
describe('validasi tetangga', function () {

    it('harus menghasilkan true untuk coord', async function () {
        let valid = await validasiTetangga(coord[0]);
        expect(valid).to.be.eq(false);
        valid = await validasiTetangga(coord[1]);
        expect(valid).to.be.eq(true);
        valid = await validasiTetangga(coord[3]);
        expect(valid).to.be.eq(true);

    });

    context('input tidak valid', function() {
      it('harusnya keluar error', function() {
        valid = validasiTetangga(coord[2]);
        expect(valid).to.be.rejectedWith(Error, ERROR_INITIAL_POS);
        valid = validasiTetangga(coord[4]);
        expect(valid).to.be.rejectedWith(Error, ERROR_NULL);
      })
    });


})
