const rules = [
    [/I[Ee]/g, 'Í'],
    [/ie/g, 'í'],
    [/E[Ii]/g, 'É'],
    [/ei/g, 'é'],
    [/E[Ee]/g, 'È'],
    [/ee/g, 'è'],
    [/A[Ee]/g, 'Ä'],
    [/ae/g, 'ä'],
    [/U[Uu]/g, 'Ú'],
    [/uu/g, 'ú'],
    [/O[Uu]/g, 'Ó'],
    [/ou/g, 'ó'],
    [/A[Oo]/g, 'Ă'],
    [/ao/g, 'ă'],

    [/S[Hh]/g, 'Š'],
    [/sh/g, 'š'],
    [/Z[Hh]/g, 'Ž'],
    [/zh/g, 'ž'],
    [/C[Hh]/g, 'Č'],
    [/ch/g, 'č'],
    [/G[Hh]/g, 'Ǧ'],
    [/gh/g, 'ǧ'],
    [/T[Hh]/g, 'Ŧ'],
    [/th/g, 'ŧ'],
    [/D[Hh]/g, 'Đ'],
    [/dh/g, 'đ']
];

const diacritize = (str) => {
    return rules.reduce((acc, rule) => acc.replace(rule[0], rule[1]), str);
};

//fs.readFile('lord_prayer.txt', (err, file) => {
//    console.log(diacritize(file.toString()));
//});

setInterval(() => {
    const text = document.getElementById('input-text').value;
    const convertedText = diacritize(text);
    document.getElementById('converted-text').textContent = convertedText;
}, 1000);
