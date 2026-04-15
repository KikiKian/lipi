package core

import (
	"testing"
)

func TestVowels(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		{"a", "અ"},
		{"aa", "આ"},
		{"i", "ઇ"},
		{"ii", "ઈ"},
		{"u", "ઉ"},
		{"uu", "ઊ"},
		{"e", "એ"},
		{"ai", "ઐ"},
		{"o", "ઓ"},
		{"au", "ઔ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func TestConsonants(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		{"k", "ક"},
		{"kh", "ખ"},
		{"g", "ગ"},
		{"gh", "ઘ"},
		{"ng", "ઙ"},
		{"ch", "ચ"},
		{"chh", "છ"},
		{"j", "જ"},
		{"jh", "ઝ"},
		{"ny", "ઞ"},
		{"T", "ટ"},
		{"Th", "ઠ"},
		{"D", "ડ"},
		{"Dh", "ઢ"},
		{"N", "ણ"},
		{"t", "ત"},
		{"th", "થ"},
		{"d", "દ"},
		{"dh", "ધ"},
		{"n", "ન"},
		{"p", "પ"},
		{"ph", "ફ"},
		{"b", "બ"},
		{"bh", "ભ"},
		{"m", "મ"},
		{"y", "ય"},
		{"r", "ર"},
		{"l", "લ"},
		{"v", "વ"},
		{"sh", "શ"},
		{"Sh", "ષ"},
		{"s", "સ"},
		{"h", "હ"},
		{"L", "ળ"},
		{"ksh", "ક્ષ"},
		{"gny", "જ્ઞ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func TestMatras(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		// apostrophe prefix
		{"k'a", "કા"},
		{"k'i", "કી"},
		{"k'ii", "કિ"},
		{"k'u", "કુ"},
		{"k'uu", "કૂ"},
		{"k'e", "કે"},
		{"k'ai", "કૈ"},
		{"k'o", "કો"},
		{"k'au", "કૌ"},
		// x prefix
		{"kxa", "કા"},
		{"kxe", "કે"},
		{"kxai", "કૈ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func TestConjuncts(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		{"k-t", "ક્ત"},
		{"p-r", "પ્ર"},
		{"s-t", "સ્ત"},
		{"n-d", "ન્દ"},
		{"s-t-r", "સ્ત્ર"},
		{"p-r'em", "પ્રેમ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func TestSentences(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		{"k'em chh'o", "કેમ છો"},
		{"n'am", "નામ"},
		{"r'am", "રામ"},
		{"k'al", "કાલ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func TestEdgeCases(t *testing.T) {
	cases := []struct {
		in  string
		out string
	}{
		{"", ""},
		{"123", "123"},
		{"!!!", "!!!"},
		{"k k", "ક ક"},
		{"ksh", "ક્ષ"},
		{"gny", "જ્ઞ"},
		{"chh", "છ"},
	}
	for _, c := range cases {
		if got := Transliterate(c.in); got != c.out {
			t.Errorf("Transliterate(%q) = %q, want %q", c.in, got, c.out)
		}
	}
}

func BenchmarkParser(b *testing.B) {
	input := "k`em chh`o n`aam r`aam k`al"
	for i := 0; i < b.N; i++ {
		Transliterate(input)
	}
}
