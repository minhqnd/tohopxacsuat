function toHop(array, size, khongTrung) {
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

            //* NEU NHU M THEM DIEU KIEN THI VIET VAO DAY

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

    if ($('#chiaHet').is(":checked")) {
        var resultTemp = toHop(inputArray, size, khongTrung).map(a => a.join(''))
        var result = resultTemp.filter(num => num % $('#chiaHetCho').val() == 0);
        $('#resultTong').val(result.length)
        $('#result').val(result)
    } else {
        var result = toHop(inputArray, size, khongTrung).map(a => a.join(''))
        $('#resultTong').val(result.length)
        $('#result').val(result)
    }

}