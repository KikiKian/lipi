package core
import "strings"


var Mapping map[string]string

func Transliterate(input string) string {
    var out strings.Builder
    i := 0
    for i < len(input) {
		matched := false
        for length := 3; length >= 1; length-- {
		
			if i+length > len(input) {
				continue
			}

			chunkText := input[i : i+length]
			if val, ok := Mapping[chunkText]; ok {
				//iterate over already matched chars
				i += length
				out.WriteString(val)
				matched = true
				break
			}
		}
	if !matched {
		// to evade asccii from input
		out.WriteString(input[i:i+1])
		i++
	}


    }
    return out.String()
}


func init() {
    Mapping = map[string]string{}

    // vowels
    vowels := strings.Fields(`અ આ ઇ ઈ ઉ ઊ એ ઐ ઓ ઔ`)
    vowelRoman := strings.Fields(`a aa i ii u uu e ai o au`)
    for i, r := range vowelRoman {
        Mapping[r] = vowels[i]
    }

    // matras
    matras := strings.Fields(`ા િ ી ુ ૂ ે ૈ ો ૌ`)
    matraRoman := strings.Fields(`aa ii i u uu e ai o au`)
    for i, r := range matraRoman {
        Mapping["`"+r] = matras[i]
    }

    // consonants
    consonants := strings.Fields(`ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ વ શ ષ સ હ ળ ક્ષ જ્ઞ`)
    roman := strings.Fields(`k kh g gh ng ch chh j jh ny T Th D Dh N t th d dh n p ph b bh m y r l v sh Sh s h L ksh gny`)
    for i, r := range roman {
        Mapping[r] = consonants[i]
    }
}