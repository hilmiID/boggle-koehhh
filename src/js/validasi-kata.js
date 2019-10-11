//import myGame from "../../assets";
//misal db disini
// wordList = list_hasil; // semua kunci jawaban game
// let game_number = index_list; // game ke berapa

const ERROR_GAME = "Game's ID is not valid";

//inputanya word doang, kita bandingin ama db
function validasiKataBiasa(word, wordList, callback) {
    // number of game is never null, word may be null
    word = word.toLowerCase();
    let mapped = wordList.map(v => v.toLowerCase())
    if (word == null) callback(null, false);
    //if (game_number > wordList.length) callback(new Error(ERROR_GAME, null));
    let answers = mapped;
    let valid = answers.includes(word);
    if(valid) {
      let index = answers.indexOf(word);
      if (index !== -1) wordList.splice(index, 1);
    }
    callback(null, valid);
}

function validasiKata(word) {
    return new Promise((resolve, reject) => {
        validasiKataBiasa(word, list_hasil[index_list], (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        })
    })
}
