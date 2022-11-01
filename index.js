function toHop(array, size, khongTrung, sauLonHonTruoc, truocLonHonSau) {
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

    if ($('#chiaHet').is(":checked")) {
        var resultTemp = toHop(inputArray, size, khongTrung, sauLonHonTruoc, truocLonHonSau).map(a => a.join(''))
        var result = resultTemp.filter(num => num % $('#chiaHetCho').val() == 0);
        $('#resultTong').val(result.length)
        $('#result').val(result)
    } else {
        var result = toHop(inputArray, size, khongTrung, sauLonHonTruoc, truocLonHonSau).map(a => a.join(''))
        $('#resultTong').val(result.length)
        $('#result').val(result)
    }

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


// console.log(checkTruocLonHonSau([5, 4, 3, 4, 1]));
// console.log(checkSauLonHonTruoc([1, 2, 3, 4, 5]));