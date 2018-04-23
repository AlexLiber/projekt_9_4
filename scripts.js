// first version

function drawTree(h) {
    for (var i = 0 ; i < h ; i++) {
        var star = '*';
        for (var j = 0 ; j < i ; j++) {
            var star = star += '*';
        }
        console.log(star);
    }
}
drawTree(7);

// second version

function drawFullTree(h) {
    for (var i = 0 ; i < h ; i++) {
        var space = ' ';
        for (var k = h - i; k > 0; k--) {
            var space = space += ' ';
        }
        var star = '*';
        for (var j = 0 ; j < i ; j++ ) {
            var star = star += '**';
            }
        console.log(space + star);
    }
}
drawFullTree(7);


