const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const userSpinPref = window.matchMedia('(prefers-spin-scheme: with180)').matches ? 'with180' : 'no180'
const currentTheme = localStorage.getItem('theme') ?? userPref
const syntaxTheme = document.querySelector("#theme-link");
const currentSpin = localStorage.getItem('spin') ?? userSpinPref


{{ $darkSyntax := resources.Get "styles/_dark_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}
{{ $lightSyntax := resources.Get "styles/_light_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}

{{ $no180Syntax := resources.Get "styles/_no180_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}
{{ $with180Syntax := resources.Get "styles/_with180_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}

if (currentTheme) {
  document.documentElement.setAttribute('saved-theme', currentTheme);
  syntaxTheme.href = currentTheme === 'dark' ?  '{{ $darkSyntax.Permalink }}' :  '{{ $lightSyntax.Permalink }}';
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('saved-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    syntaxTheme.href = '{{ $darkSyntax.Permalink }}';
  }
  else {
    document.documentElement.setAttribute('saved-theme', 'light')
    localStorage.setItem('theme', 'light')
    syntaxTheme.href = '{{ $lightSyntax.Permalink }}';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Darkmode toggle
  const toggleSwitch = document.querySelector('#darkmode-toggle')

  // listen for toggle
  toggleSwitch.addEventListener('change', switchTheme, false)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
})


//SPINNER
if (currentSpin) {
  document.documentElement.setAttribute('saved-spin', currentSpin);
  spinTheme.href = currentSpin === 'no-180' ?  '{{ $no180Syntax.Permalink }}' :  '{{ $lightSyntax.Permalink }}';
}

const switchSpin = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('saved-spin', 'no-180');
    localStorage.setItem('spin', 'no-180');
    spinTheme.href = '{{ $no180Syntax.Permalink }}';
  }
  else {
    document.documentElement.setAttribute('saved-spin', 'with-180')
    localStorage.setItem('spin', 'with-180')
    spinTheme.href = '{{ $with180Syntax.Permalink }}';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // with or no 180 toggle
  const toggleSpinSwitch = document.querySelector('#spin-toggle')

  // listen for toggle
  toggleSpinSwitch.addEventListener('change', switchSpin, false)

  if (currentSpin === 'no-180') {
    toggleSpinSwitch.checked = true
  }
})