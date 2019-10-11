//import myGame from "../../assets";
//misal db disini
let myGame = [
    {
        list_huruf: [["A", "G", "I", "C"], ["O", "D", "I", "P"], ["E", "R", "U", "L"], ["Q", "X", "N", "C"]],
        list_hasil: ["ADIPIC", "ADORE", "ADORN", "ADUNC", "CIDER", "CIRE", "CLIP", "CULICID", "CUPID", "CURD", "CURE", "CURED", "CURN", "DAGO", "DIRE", "DOER", "DORE", "DRIP", "DURE", "DURN", "DURO", "GADI", "GIRD", "GIRN", "GIRO", "GOAD", "GOER", "GORE", "GORED", "IRED", "LIDO", "LIPID", "LIPIDE", "LIRE", "LUDE", "LUDIC", "LUER", "LURED", "LURID", "LUXE", "NUCLIDE", "NUCLIDIC", "NUDE", "NUDER", "NURD", "ODIC", "PIRN", "PIROG", "PIROGI", "PUDIC", "PULI", "PULICIDE", "PURDA", "PURE", "PURI", "REDIP", "REDO", "REDUX", "RIDE", "RIGID", "ROAD", "Rode", "Rude", "Unclip", "Unrig", "Unrip", "Uredo", "Uric", "Xeric"]
    },
    {
        list_huruf: [["Q", "W", "T", "Y"], ["I", "O", "P", "A"], ["Y", "U", "F", "H"], ["K", "L", "C", "B"]],
        list_hasil: ["Afoul", "Atop", "Atopy", "Chap", "Chapt", "Chat", "Chay", "Fluky", "Foul", "Iota", "Ofay", "Opah", "Ouch", "Ouph", "Paty", "Pfui", "Phat", "Pouch", "Pouf", "Qoph", "Tofu", "Topful", "Toph", "Touch", "Typo", "Woful", "Yuch"]
    }
];


const ERROR_GAME = "Game's ID is not valid";
//inputanya list hasil, sama katanya
function validasiKataBiasa(word, wordList, callback) {
    // number of game is never null, word may be null
    word = word.toLowerCase();
    let mapped = wordList.map(v => v.toLowerCase())
    if (!word) callback(null, false);
    //if (game > wordList.length) callback(new Error(ERROR_GAME, null));
    let answers = mapped;
    let valid = answers.includes(word);
    callback(null, valid);
}

function validasiKata(word, game) {
    return new Promise((resolve, reject) => {
        validasiKataBiasa(word, game, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        })
    })
}

//export { validasiKata };
exports.validasiKata = validasiKata;
