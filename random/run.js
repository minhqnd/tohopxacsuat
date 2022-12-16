const fs = require('fs');

// const content = 'Some content!';

// fs.writeFile('./random/random.txt', content, err => {
//     if (err) {
//         console.error(err);
//     }
// });

function toHop(array, size) {
    function iter(parts) {
        return function (v) {
            var temp = parts.concat(v);

            //*cai nay de set khongTrung

            // ket thuc so sanh, push ket qua
            if (temp.length === size) {
                // result.push(temp);
                // console.log(temp.toString().replaceAll(',',''))

                var content = temp.toString().replaceAll(',', '') + '\n'

                fs.appendFileSync('./random/random.txt', content )
                // , err => {
                //     if (err) {
                //         console.error(err);
                //     }
                // });

                return;
            }
            array.forEach(iter(temp));
        }
    }

    // var result = [];
    array.forEach(iter([]));
    // return result;
}


function start() {
    var input = $('#putin').val()
    var inputArray = input.split('')
    var size = $('#size').val() * 1
    var khongTrung = $('#khongTrung').is(":checked")
    var result = toHop(inputArray, size, khongTrung).map(a => a.join(''))
    $('#resultTong').val(result.length)
    var link = result.map(a => 'https://in3davatar.page.link/' + a + '\n').toString().replaceAll(',', '')
    $('#result').val(link)
}

toHop(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9], 4)

// toHop([0,1,2,3,4,5,6,7,8,9],4)