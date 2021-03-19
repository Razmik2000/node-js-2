// Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը ,
// որոնք հատուկ սիմվոլներ չունեն:
const fs = require('fs');
const readable = fs.createReadStream('input.txt', {
    highWaterMark: 10
});

readable.on('data', function (chunk) {

        if (!/[^a-z,A-Z,\s]/g.test(chunk.toString())) {
            console.log(chunk.toString());
        }


});
