const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref
const syntaxTheme = document.querySelector("#theme-link");


{{ $darkSyntax := resources.Get "styles/_dark_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}
{{ $lightSyntax := resources.Get "styles/_light_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}

if (currentTheme) {
  document.documentElement.setAttribute('saved-theme', currentTheme);
  syntaxTheme.href = currentTheme === 'dark' ?  '{{ $darkSyntax.Permalink }}' :  '{{ $lightSyntax.Permalink }}';
}

function switchTheme(theme){
  var lightModeToggle = document.getElementById('light-mode-toggle')
  var darkModeToggle = document.getElementById('dark-mode-toggle')
  if(theme == 'dark'){
    document.documentElement.setAttribute('saved-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    syntaxTheme.href = '{{ $darkSyntax.Permalink }}';
    
    darkModeToggle.setAttribute('class','darkmode logo hidden')
    lightModeToggle.setAttribute('class','darkmode logo')
  }
  else if(theme == 'light'){
    document.documentElement.setAttribute('saved-theme', 'light')
    localStorage.setItem('theme', 'light')
    syntaxTheme.href = '{{ $lightSyntax.Permalink }}';
    
    darkModeToggle.setAttribute('class','darkmode logo')
    lightModeToggle.setAttribute('class','darkmode logo hidden')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  var lightModeToggle = document.getElementById('light-mode-toggle')
  var darkModeToggle = document.getElementById('dark-mode-toggle')
  if (currentTheme === 'dark') {
    darkModeToggle.setAttribute('class','darkmode logo hidden')
    lightModeToggle.setAttribute('class','darkmode logo')
  } else {
    darkModeToggle.setAttribute('class','darkmode logo')
    lightModeToggle.setAttribute('class','darkmode logo hidden')
  }
})