const mapping: Record<string, string> = {};

function buildMapping() {
  const vowels = 'અ આ ઇ ઈ ઉ ઊ એ ઐ ઓ ઔ'.split(' ');
  const vowelRoman = 'a aa i ii u uu e ai o au'.split(' ');
  vowelRoman.forEach((r, i) => { mapping[r] = vowels[i]; });

  const matras = 'ા િ ી ુ ૂ ે ૈ ો ૌ'.split(' ');
  const matraRoman = 'a i ii u uu e ai o au'.split(' ');
  // ' or x as matra prefix (e.g. k'a or kxa → કા)
  matraRoman.forEach((r, i) => {
    mapping["'" + r] = matras[i];
    mapping['x' + r] = matras[i];
  });

  mapping['-'] = '્';

  mapping["'~"] = 'ં';
  mapping["'H"] = 'ઃ';
  mapping["'^"] = 'ઁ';

  const numbers = '૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯'.split(' ');
  '0 1 2 3 4 5 6 7 8 9'.split(' ').forEach((r, i) => { mapping[r] = numbers[i]; });

  const consonants = 'ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ'.split(' ');
  const roman = 'k kh g gh ng ch chh j jh ny T Th D Dh N t th d dh n p ph b bh m y r l v sh Sh s h L ksh gny'.split(' ');
  roman.forEach((r, i) => { mapping[r] = consonants[i]; });
}

buildMapping();

export function transliterate(input: string): string {
  let out = '';
  let i = 0;
  while (i < input.length) {
    let matched = false;
    for (let length = 3; length >= 1; length--) {
      if (i + length > input.length) continue;
      const chunk = input.slice(i, i + length);
      if (mapping[chunk] !== undefined) {
        out += mapping[chunk];
        i += length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += input[i];
      i++;
    }
  }
  return out;
}
