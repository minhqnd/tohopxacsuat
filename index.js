function toHop(array, size, khongTrung, sauLonHonTruoc, truocLonHonSau, nhoHon, lonHon) {
    function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);
            //*cai nay de xoa so 0 o dau
            if (parts[0] == 0) {
                return
            }
            //*cai nay de set khongTrung
            if (khongTrung) {
                if (parts.includes(v)) {
                    return;
                }
            }

            //* NEU NHU M THEM DIEU KIEN THI VIET VAO DAY, DUNG CAI TEMP DE SO SANH
            if (sauLonHonTruoc) {
                if (!checkSauLonHonTruoc(temp)) {
                    return
                }
            }

            if (truocLonHonSau) {
                if (!checkTruocLonHonSau(temp)) {
                    return
                }
            }

            var check = temp.join('') * 1

            if (nhoHon) {
                if (!checkNhoHon(check, $('#nhoHonNumber').val() * 1)) {
                    return
                }
            }

            if (lonHon) {
                console.log(check);
                if (!checkLonHon(check, $('#lonHonNumber').val() * 1)) {
                    return
                }
            }

            // ket thuc so sanh, push ket qua
            if (temp.length === size) {
                result.push(temp);
                return;
            }
            array.forEach(iter(temp));
        }
    }

    var result = [];
    array.forEach(iter([]));
    return result;
}


function start() {
    var input = $('#putin').val()
    var inputArray = input.split('').map(i => Number(i))
    var size = $('#size').val() * 1
    var khongTrung = $('#khongTrung').is(":checked")
    var sauLonHonTruoc = $('#sauLonHonTruoc').is(":checked")
    var truocLonHonSau = $('#truocLonHonSau').is(":checked")
    var nhoHon = $('#nhoHon').is(":checked")
    var lonHon = $('#lonHon').is(":checked")
    //* split function chia het
    // if ($('#chiaHet').is(":checked")) {
    //     var resultTemp = toHop(inputArray, size, khongTrung, sauLonHonTruoc, truocLonHonSau).map(a => a.join(''))
    //     var result = resultTemp.filter(num => num % $('#chiaHetCho').val() == 0);
    //     $('#resultTong').val(result.length)
    //     $('#result').val(result)
    //     $('#resultTongCacSo').val(tinhTong(result))
    // } else {
    var result = toHop(inputArray, size, khongTrung, sauLonHonTruoc, truocLonHonSau, nhoHon, lonHon).map(a => a.join(''))
    $('#resultTong').val(result.length)
    $('#result').val(result)
    $('#resultTongCacSo').val(tinhTong(result))
    // }

}

function checkSauLonHonTruoc(array) {
    var length = array.length;
    return array.every(function (value, index) {
        var nextIndex = index + 1;
        return nextIndex < length ? value <= array[nextIndex] : true;
    });
}

function checkTruocLonHonSau(array) {
    var length = array.length;
    return array.every(function (value, index) {
        var nextIndex = index + 1;
        return nextIndex < length ? value >= array[nextIndex] : true;
    });
}


function tinhTong(array) {
    return array.reduce((a, b) => a * 1 + b * 1, 0)
}


function checkNhoHon(check, nhoHon) {
    return check <= nhoHon
}

function checkLonHon(check, lonHon) {
    return check >= lonHon
}