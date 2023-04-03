---
title: Custom Minimals
tags:
- Solution Finder
---
<meta name="description" content="Description, installation, and usage of programs that will allow you to find minimals based on a cover.csv output with Hillosanation's Cover-To-Path program." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

## Custom Cover-Based Minimals
A special method of generating minimals, where you can get minimal sets for **maximizing a setup's quad clear chance, T-Spin chance, etc.** by converting solution finder's  [[sfinder/cover.md|cover]] output into a `path.csv` file, allowing [[sfinder/strict minimals|sfinder-strict-minimal]] to work its magic.
___
## Finding Custom Cover-Based Minimals
This is currently done through [Hillosanation's](https://github.com/Hillosanation/) **Cover-to-Path Script**.

#### Downloading:
1. Download the [Cover-to-Path script](https://github.com/Hillosanation/cover-to-path/releases/tag/v0.1.1) and place it in the folder where `sfinder.jar` is.
2. Download the [unglueFumen script](https://github.com/Hillosanation/GluingFumens/releases/tag/v0.0.3) and place it in the folder where `sfinder.jar` is.
___
## Example Path and Usage
<div class="minimal-graphic" style="display: flex; align-items: center;">
<div><p>
    We're going to get the minimal <strong>Quad PC</strong> solutions for this particular board. To do this we'll:
    <ol>
        <li>Get all the unique solutions for the field through path.</li>
        <li>Convert it all to their glued versions.</li>
        <li>Run cover with <code>--mode tetris-end</code>.</li>
        <li>Convert the <code>cover.csv</code> file to <code>path.csv</code>.</li>
        <li>Run sfinder-strict-minimals.</li>
    </ol>
</p></div>
<figfumen style="flex-shrink: 0" clipboard="false" height="9">v115@VgC8GeC8GeC8GeE8CeH8AeI8AeI8AeI8AeC8JeAgH</figfumen>
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
java -jar sfinder.jar cover -p *! -M tetris-end
```
Since you don't specify the `--tetfu` parameter, the `input.txt` file is what's being used for this command. Use the same `-p` value as the path command from earlier. `-M tetris-end` makes it so that cover is only returned as successful if the last clear in the sequence is a quad or tetris line clear.

The result should show `OR = 72.46 % [3652/5040]`.

**Converting the `cover.csv` to `path.csv`**:
```{title="Example Cover-to-Path Command}
py cover-to-path.py
```
The resulting file should be in the `/output/` folder, named `cover_to_path.csv`.

**Running sfinder-strict-minimals**:
If you've installed sfinder-strict-minimals properly, it should just be:
```{title="Example Sfinder-Strict-Minimals Command"}
sfinder-minimal output/cover_to_path.csv
```
The result should tell you that you need **22 solutions**. This means that those **22 solutions are required to reach 72.46% Quad PC chances** for this setup. This is our output.

Afterwards you can open the `path_minimal_strict.md` or get it through Marfung's [makeMinimals script](https://github.com/Marfung37/makeMinimals).

<div style="text-align: center;">
<fumen size="10" height="9" clipboard="false">v115@VgC8i0BthlC8Rpg0whBtglC8RpQ4ywglE8R4wwH8Q4?I8whI8whI8whC8JeAgWTADX7rDy4CwBFbU9AVVt2AFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8h0R4ilC8g0R4whglRpC8g0ywAtRpE8wwBtH8At?I8whI8whI8whC8JeAgWTADX7rDy4CwBFbU9AVVt2AFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8i0whQ4hlC8RpBtR4glC8Rpg0BtQ4glE8ywH8ww?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AV1IEBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8h0AtwhilC8g0BtR4RpC8g0AtR4glRpE8ywH8ww?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AV1IEBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8RpQ4BthlC8RpR4BtglC8i0ywglE8g0Q4wwH8wh?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AQl2KBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8h0R4AtRpC8g0R4BtRpC8g0ywilE8wwAtglH8wh?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AQl2KBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8RpywAtg0C8RpglwwBtg0C8ilR4h0E8R4AtH8wh?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AQl2KBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8glQ4ywRpC8glR4wwg0RpC8hlBti0E8Q4BtH8wh?I8whI8whI8whC8JeAgWTADX7rDy4CwBFb85AQl2KBFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8ilR4RpC8BtR4g0RpC8glBtwwi0E8ywH8whI8wh?I8whI8whC8JeAgWTADX7rDy4CwBFb85AQVk2AFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8RpBti0C8RpglBtR4C8ilwwR4g0E8ywH8whI8wh?I8whI8whC8JeAgWTADX7rDy4CwBFb85AQVk2AFrvAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8ywwhAtRpC8g0wwQ4BtRpC8i0AtilE8R4glH8Q4?I8whI8whI8whC8JeAgWSADX7rDy4CwBFbMOBuccRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8RpQ4whywC8RpR4AtwwglC8i0Q4ilE8g0BtH8At?I8whI8whI8whC8JeAgWSADX7rDy4CwBFbMOBuccRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8i0R4hlC8RpywAtglC8Rpg0wwBtglE8R4AtH8wh?I8whI8whI8whC8JeAgWSADX7rDy4CwBFb0KBusnRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8h0BtilC8g0Q4ywRpC8g0R4wwglRpE8Q4BtH8wh?I8whI8whI8whC8JeAgWSADX7rDy4CwBFb0KBusnRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8i0whBtglC8Rpg0R4BtC8RpR4ilE8ywH8wwI8wh?I8whI8whC8JeAgWSADX7rDy4CwBFb0KBOIjRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8g0R4whilC8R4BtglRpC8i0BtRpE8ywH8wwI8wh?I8whI8whC8JeAgWSADX7rDy4CwBFb0KBOIjRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8ywAtQ4hlC8g0wwBtR4glC8i0RpQ4glE8AtRpH8?whI8whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBuCqRAyfAA?A</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8h0AtQ4ywC8g0BtR4wwglC8g0AtRpilE8RpQ4H8?whI8whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBuCqRAyfAA?A</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8BtRpi0C8ilQ4ywC8glBtR4wwg0E8RpQ4H8whI8?whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBOrwRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8ilRpR4C8ywAti0C8glwwBtR4g0E8AtRpH8whI8?whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBOrwRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8ywRpR4C8ilAti0C8glwwBtR4g0E8AtRpH8whI8?whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBOrwRAyfAAA</fumen>
<fumen size="10" height="9" clipboard="false">v115@VgC8BtRpywC8ilQ4i0C8glBtR4wwg0E8RpQ4H8whI8?whI8whI8whC8JeAgWSADX7rDy4CwBFbEEBOrwRAyfAAA</fumen>
</div>

And that's your output. You can use other `--mode` values for cover to get different outputs, like T-Spin minimals for a certain setup or things like that. Read more about it over at the [[sfinder/cover.md|sfinder cover documentation]].

<hr>
<div class="credits">
	<div class="stat">
		<h4>Credits</h4>
		<ul>
			<li><strong>Writer</strong>: Hsterts</li>
			<li><strong>Consultation</strong>: Marfung37, smdbs, torchlight</li>
		</ul>
		<h4>References</h4>
		<ul>
            <li>
                <strong>Custom Cover-Based Minimals</strong>: <a href="https://github.com/Hillosanation/">Hillosanation</a><br>
                <ul><li><a href="https://github.com/Hillosanation/cover-to-path/releases/tag/v0.1.1">Cover-To-Path Script</a></li></ul>
                <ul><li><a href="https://github.com/Hillosanation/GluingFumens/releases/tag/v0.0.3">Unglue Fumen Script (script forked from swng/FumenUtil)</a></li></ul>
            </li>
		</ul>
	</div>
</div>
