const rules = [
    [/𐑐/g,'p'],
    [/𐑑/g,'t'],
    [/𐑒/g,'k'],
    [/𐑓/g,'f'],
    [/𐑔/g,'θ'],
    [/𐑕/g,'s'],
    [/𐑖/g,'ʃ'],
    [/𐑗/g,'tʃ'],
    [/𐑘/g,'j'],
    [/𐑙/g,'ŋ'],
    [/𐑚/g,'b'],
    [/𐑛/g,'d'],
    [/𐑜/g,'g'],
    [/𐑝/g,'v'],
    [/𐑞/g,'ð'],
    [/𐑟/g,'z'],
    [/𐑠/g,'ʒ'],
    [/𐑡/g,'dʒ'],
    [/𐑢/g,'w'],
    [/𐑣/g,'h'],
    [/𐑤/g,'l'],
    [/𐑥/g,'m'],
    [/𐑦/g,'ɪ'],
    [/𐑧/g,'ɛ'],
    [/𐑨/g,'æ'],
    [/𐑩/g,'ə'],
    [/𐑪/g,'ɒ'],
    [/𐑫/g,'ʊ'],
    [/𐑬/g,'aʊ'],
    [/𐑭/g,'ɑː'],
    [/𐑮/g,'ɹ'],
    [/𐑯/g,'n'],
    [/𐑰/g,'iː'],
    [/𐑱/g,'eɪ'],
    [/𐑲/g,'aɪ'],
    [/𐑳/g,'ʌ'],
    [/𐑴/g,'əʊ'],
    [/𐑵/g,'uː'],
    [/𐑶/g,'ɔɪ'],
    [/𐑷/g,'ɔː'],
    [/𐑸/g,'ɑːɹ'],
    [/𐑹/g,'ɔːɹ'],
    [/𐑺/g,'ɛəɹ'],
    [/𐑻/g,'əːɹ'],
    [/𐑼/g,'əɹ'],
    [/𐑽/g,'ɪəɹ'],
    [/𐑾/g,'ɪə'],
    [/𐑿/g,'juː']
];

const convert = (str) => {
    return rules.reduce((acc, rule) => acc.replace(rule[0], rule[1]), str);
};

//fs.readFile('lord_prayer.txt', (err, file) => {
//    console.log(diacritize(file.toString()));
//});

setInterval(() => {
    const text = document.getElementById('input-text').value;
    const convertedText = convert(text);
    document.getElementById('converted-text').textContent = convertedText;
}, 1000);
