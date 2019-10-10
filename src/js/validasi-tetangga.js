const ERROR_INITIAL_POS = "validasi-tetangga : current letter position is null";
const ERROR_NULL = "validasi-tetangga : posisi null";

function validasiTetanggaBiasa(objRes, callback) {
    let initial_pos = objRes.initialPosition;
    let before_pos = objRes.beforePosition;
    //console.log(Math.abs(initial_pos.x - before_pos.x), Math.abs(initial_pos.y - before_pos.y));
    //console.log(initial_pos.x, initial_pos.y, before_pos.x, before_pos.y)
    if (initial_pos.x == null && initial_pos.y == null) callback(new Error(ERROR_INITIAL_POS), null);
    if (before_pos.x == null && before_pos.y == null && initial_pos.x == null && initial_pos.y == null) callback(new Error(ERROR_NULL), null);
    if (before_pos.x == null && before_pos.y == null) callback(null, true);
    else {
        let checkX = Math.abs(initial_pos.x - before_pos.x) == 1 || Math.abs(initial_pos.x - before_pos.x) == 0;
        let checkY = Math.abs(initial_pos.y - before_pos.y) == 1 || Math.abs(initial_pos.y - before_pos.y) == 0;
        let valid = checkX && checkY;
        //console.log(checkX, checkY)
        callback(null, valid);
    }
}

function validasiTetangga(objRes) { //pake promise
    return new Promise((resolve, reject) => {
        validasiTetanggaBiasa(objRes, (err, res) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}

exports.validasiTetangga = validasiTetangga;
exports.ERROR_INITIAL_POS = ERROR_INITIAL_POS;
exports.ERROR_NULL = ERROR_NULL;
