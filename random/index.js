function toHop(array, size, khongTrung) {
    function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);

            //*cai nay de set khongTrung
            if (khongTrung) {
                if (parts.includes(v)) {
                    return;
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
    var inputArray = input.split('')
    var size = $('#size').val() * 1
    var khongTrung = $('#khongTrung').is(":checked")
    var result = toHop(inputArray, size, khongTrung).map(a => a.join(''))
    $('#resultTong').val(result.length)
    var link = result.map(a => 'https://in3davatar.page.link/' + a + '\n' ).toString().replaceAll(',','')
    $('#result').val(link)
}