//definir 2 buffers sencillos aaaa bbbb concatenarlos y pasarlos a .json.

var buff = new Buffer('aaaa');
var debuff = new Buffer('bbbb');

var json=buff.toJSON(buff);

console.log(json);


var finalBuff = Buffer.concat([buff,debuff]);

jsonBuff = finalBuff.toJSON(finalBuff);

console.log(jsonBuff);
