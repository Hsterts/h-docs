---
title: Cover-To-Path Script
tags:
- Guide
- Sfinder Script
- Solution Finder
---
<meta name="description" content="Description, installation, and usage of Hillosanation's Cover-To-Path program." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
.minimal-graphic{
    display: flex;
    align-items: center;
    justify-content: center;
}
@media all and (max-width: 600px){
    .minimal-graphic{flex-direction: column;}
}
</style>

A demonstration of the use of [Hillosanation's](https://github.com/Hillosanation/) **Cover-to-Path Script**.
### Downloading
1. Download the [Cover-to-Path script](https://github.com/Hillosanation/cover-to-path/releases/tag/v0.1.1) and place it in the folder where `sfinder.jar` is.
2. Download the [unglueFumen script](https://github.com/Hillosanation/GluingFumens/releases/tag/v0.0.3) and place it in the folder where `sfinder.jar` is.

### Download NodeJS and a unglueFumen Dependency:
1. Go to the [NodeJS download page](https://nodejs.org/en/download/). Installing it should be straight-forward.
    - When installing, make sure that **`NodeJS` and `npm` are added to PATH**. This appears in the **Custom Setup** step of installation.
2. Open a terminal (Command Prompt, PowerShell, etc.)
3. Set your directory to the sfinder folder, then enter `npm install yargs`.
___
## Example Path and Usage
<div class="minimal-graphic" style="display: flex; align-items: center;">
    <div>
        <p>
            We're going to get the minimal <strong>Quad PC</strong> solutions for this particular board. To do this we'll:
            <ol>
                <li>Get all the unique solutions for the field through path.</li>
                <li>Convert it all to their glued versions.</li>
                <li>Run cover with <code>--mode tetris-end</code>.</li>
                <li>Convert the <code>cover.csv</code> file to <code>path.csv</code>.</li>
            </ol>
        </p>
    </div>
    <figfumen src="v115@VgC8GeC8GeC8GeE8CeH8AeI8AeI8AeI8AeC8JeAgH" style="flex-shrink: 0" clipboard="false" height="9"></figfumen>
</div>

**Getting all the unique solutions**:
```{title="Example Path Command"}
Input:
java -jar sfinder.jar path -t v115@VgC8GeC8GeC8GeE8CeH8AeI8AeI8AeI8AeC8JeAgH -p *! -c 8

Output:
...
# Output file
Found path [unique] = 28
Found path [minimal] = 26
```
Open the `path_unique.html` file in the `/output/` folder. At the top of the page should be a link to all the solutions.

**Gluing all the fumen solutions**:<br>
"Glued" fumens are required as input for sfinder's cover command. 
1. Right click the first link in the `path_unique.html` file and select "Copy link".
2. Go to <a href="https://hsterts.github.io/Fumenities/">this fumen editor</a> and paste the link into the input field and select the "Glue" option. This should return a list of fumens in the output field.
3. In the folder where `sfinder.jar` is, go to the `/input/` folder and open the `field.txt` file. Paste the results in there and save it.

**Run cover with `--mode tetris-end`**:
```{title="Example Cover Command"}
java -jar sfinder.jar cover -p *! -m tetris-end
```
Since you don't specify the `--tetfu` parameter, the `field.txt` file is what's being used for this command. Use the same `-p` value as the path command from earlier. `-m tetris-end` makes it so that cover is only returned as successful if the last clear in the sequence is a quad or tetris line clear.

The result should show `OR = 72.46 % [3652/5040]`.

**Converting the `cover.csv` to `path.csv`**:
```{title="Example Cover-to-Path Command}
py cover-to-path.py output/cover.csv
```
The resulting file should be in the `/output/` folder, named `cover_to_path.csv`.