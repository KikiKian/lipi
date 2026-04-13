# Lipi
Lipi is a gujurathi phonetic system that converts english text into gujurathi.

# What is Gujurathi? And why is Lipi important?
Gujurathi is my mother-tongue language of the humble state of Gujurath in India. For me Lipi is a way for me to more effectively communicate to familiy in Gujurathi. 

# Controls
See [CONTROLS.md](CONTROLS.md) for the full mapping reference.

Type phonetic English and get Gujarati characters instantly.

## Vowels
| Type | Gujarati |
|------|----------|
| a    | અ        |
| aa   | આ        |
| i    | ઇ        |
| ii   | ઈ        |
| u    | ઉ        |
| uu   | ઊ        |
| e    | એ        |
| ai   | ઐ        |
| o    | ઓ        |
| au   | ઔ        |

## Consonant + Vowel (use backtick)
| Type  | Gujarati |
|-------|----------|
| k`ii  | કી       |
| kh`e  | ખે       |
| g`o   | ગો       |

## Example
| Type        | Gujarati |
|-------------|----------|
| k`em chh`o   | કેમ છો   |

# Tickets
- [x] Core translation engine (`core/`)
  - [x] Vowel mapping
    - [x] Short vowels (a, i, u)
    - [x] Long vowels (aa, ii, uu)
    - [x] Complex vowels (e, ai, o, au)
  - [x] Consonant mapping
    - [x] Velar consonants (k, kh, g, gh, ng)
    - [x] Palatal consonants (ch, chh, j, jh, ny)
    - [x] Retroflex consonants (T, Th, D, Dh, N)
    - [x] Dental consonants (t, th, d, dh, n)
    - [x] Labial consonants (p, ph, b, bh, m)
    - [x] Approximants (y, r, l, v)
    - [x] Sibilants (sh, Sh, s)
    - [x] Aspirate (h)
    - [x] Special (L, ksh, gny)
  - [x] Matra support (backtick system)
    - [x] Short matras (i, u)
    - [x] Long matras (aa, ii, uu)
    - [x] Complex matras (e, ai, o, au)
  - [x] Longest match parser
    - [x] Length 3 matching
    - [x] Length 2 matching
    - [x] Length 1 matching
    - [x] Fallback passthrough
  - [ ] Conjunct consonants
    - [ ] Design conjunct syntax
    - [ ] Common conjuncts (ક્ત, સ્ત, ન્ત)
    - [ ] Halant support (્)
    - [ ] Parser support for conjuncts
    - [ ] Add conjuncts to CONTROLS.md
  - [ ] Extended characters
    - [ ] Anusvara (ં)
    - [ ] Visarga (ઃ)
    - [ ] Chandrabindu (ઁ)
  - [ ] Numbers
    - [ ] Gujarati digit mapping (૦-૯)
    - [ ] Auto convert or manual trigger
  - [ ] Tests
    - [ ] Unit test each vowel
    - [ ] Unit test each consonant
    - [ ] Unit test each matra
    - [ ] Unit test full sentences
    - [ ] Unit test edge cases
    - [ ] Benchmark parser performance

- [ ] Web server (`server/`)
  - [x] Setup
    - [x] Create server/main.go
    - [x] net/http router setup
    - [x] Port configuration
    - [x] Graceful shutdown
  - [x] Endpoints
    - [x] POST /transliterate
      - [x] Parse request body
      - [x] Call core.Transliterate
      - [x] Return JSON response
      - [x] Handle empty input
      - [ ] Handle invalid UTF-8
    - [ ] GET / (serve frontend)
      - [ ] Embed static files with go:embed
      - [ ] Serve index.html
      - [ ] Serve CSS and JS
  - [ ] Middleware
    - [ ] CORS headers
    - [ ] Rate limiting
    - [ ] Request logging
    - [ ] Error handling middleware
  - [ ] Tests
    - [ ] Unit test each endpoint
    - [ ] Integration tests
    - [ ] Load testing

- [ ] Web frontend (`web/`)
  - [ ] Setup
    - [ ] Create web/index.html
    - [ ] Create web/style.css
    - [ ] Create web/main.js
  - [ ] Input
    - [ ] Live input text box
    - [ ] Debounce API calls
    - [ ] Keyboard shortcut hints
    - [ ] Placeholder text with example
  - [ ] Output
    - [ ] Live Gujarati output display
    - [ ] Large readable font
    - [ ] Copy to clipboard button
    - [ ] Character count display
  - [ ] Controls reference panel
    - [ ] Vowel table
    - [ ] Consonant table
    - [ ] Matra table
    - [ ] Collapsible panel
    - [ ] Search/filter controls
  - [ ] Design
    - [ ] Mobile responsive layout
    - [ ] Dark mode toggle
    - [ ] Font size controls
    - [ ] Smooth transitions
  - [ ] Sharing
    - [ ] Shareable URL with encoded text
    - [ ] Share button
    - [ ] Copy link button
    - [ ] Social media meta tags

- [ ] Desktop app (`desktop/`)
  - [ ] Setup
    - [ ] Install Wails
    - [ ] Initialize Wails project
    - [ ] Connect core engine to Wails
    - [ ] Bind Transliterate function
  - [ ] UI
    - [ ] Reuse web frontend
    - [ ] Native window controls
    - [ ] App icon design
    - [ ] Splash screen
  - [ ] System integration
    - [ ] System tray icon
    - [ ] Global keyboard shortcut to open
    - [ ] Minimize to tray
    - [ ] Start on boot option
  - [ ] Windows build
    - [ ] Cross-compile from Linux
    - [ ] Windows installer (.exe)
    - [ ] Code signing
    - [ ] Windows icon (.ico)
  - [ ] Linux build
    - [ ] .deb package
    - [ ] .AppImage package
    - [ ] .rpm package
    - [ ] AUR package (Arch Linux)
  - [ ] Auto updater
    - [ ] Version checking
    - [ ] Download and install updates
    - [ ] Release notes display

- [ ] Docker (`docker/`)
  - [ ] Production image
    - [ ] Create Dockerfile
    - [ ] Multi-stage build
    - [ ] Minimize image size
    - [ ] Non-root user setup
    - [ ] Health check endpoint
  - [ ] Build environment
    - [ ] Create Dockerfile.build
    - [ ] Go cross-compilation setup
    - [ ] Windows target (GOOS=windows)
    - [ ] Linux target (GOOS=linux)
    - [ ] Build output artifacts
  - [ ] Docker Compose
    - [ ] Create docker-compose.yml
    - [ ] Web server service
    - [ ] Volume mounts
    - [ ] Environment variables
  - [ ] CI/CD (GitHub Actions)
    - [ ] Create .github/workflows/
    - [ ] Build and test on push
      - [ ] Run Go tests
      - [ ] Build all targets
      - [ ] Report coverage
    - [ ] Auto publish Docker image
      - [ ] Push to Docker Hub
      - [ ] Tag with version
      - [ ] Tag with latest
    - [ ] Auto release binaries
      - [ ] Build Windows binary
      - [ ] Build Linux binary
      - [ ] Create GitHub release
      - [ ] Upload binaries to release

- [ ] Documentation
  - [ ] README.md
    - [x] Title and description
    - [x] Why Lipi section
    - [ ] Installation instructions
    - [ ] Quick start example
    - [ ] Screenshot or demo gif
    - [ ] Link to CONTROLS.md
    - [ ] Link to CONTRIBUTING.md
  - [ ] CONTROLS.md
    - [x] Vowel table
    - [x] Consonant table
    - [x] Matra table
    - [x] Examples
    - [ ] Conjunct examples
    - [ ] Number examples
  - [ ] CONTRIBUTING.md
    - [ ] How to add new mappings
    - [ ] How to run tests
    - [ ] Pull request guidelines
    - [ ] Code style guide
  - [ ] API docs
    - [ ] Endpoint reference
    - [ ] Request/response examples
    - [ ] Error codes

- [ ] Polish
  - [ ] Edge cases
    - [ ] Punctuation passthrough
    - [ ] Whitespace handling
    - [ ] Mixed Gujarati/English input
    - [ ] Very long input handling
  - [ ] Performance
    - [ ] Parser benchmarks
    - [ ] API response time targets
    - [ ] Frontend debounce tuning
  - [ ] Accessibility
    - [ ] Screen reader support
    - [ ] Keyboard navigation
    - [ ] High contrast mode
    - [ ] Font size accessibility