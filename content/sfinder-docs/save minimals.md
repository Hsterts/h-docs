---
title: Save Minimals
tags:
- Solution Finder
---
<meta name="description" content="Description, installation, and usage of a program to find the smallest covering set for different saves for a setup with Marfung37's PC-Saves-Get program." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

## Save Minimals
Save minimals are strict minimals, but **saved pieces are prioritized**. That means the program would rather settle for a 3-solution set that has 100% Save <span class="mino">T</span> over a 2-solution set that has 100% Save <span class="mino">O</span> (if you tell it to do so).

The program currently being used can prioritize multiple saves. If you ask for save T then O minimals, the solution set will maximize save <span class="mino">T</span> before finding solutions with the next specified save, and so on.
<div style="display: flex; align-items: center; justify-content: center;">
<table style="width: auto;">
    <tr><th colspan=6>Solution Covers</th></tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution A (Saves <span class="mino">O</span>)</td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution B (Saves <span class="mino">T</span>)</td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution C (Saves <span class="mino">T</span>)</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution D (Saves <span class="mino">O</span>)</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution E (Saves <span class="mino">T</span>)</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
    </tr>
</table>
<div><p style="font-size: 1.5em; margin: 0.5em;">></p></div>
<table style="width: auto;">
    <tr><th colspan=6>Saves</th></tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
    </tr>
</table>
</div>

___
## Finding Save Minimals
Save minimals are currently being found using [Marfung37](https://github.com/Marfung37/)'s [PC-Saves-Get](https://github.com/Marfung37/PC-Saves-Get) program. It requires Python3 and NodeJS and will work off of sfinder's [[sfinder-docs/sfinder path.md|Path Command]] the same way [[sfinder-docs/strict minimals|strict minimals]] do.

#### Downloading Python3:
Go to the [Python3 download page](https://www.python.org/downloads/). It should be a straight-forward installation.
- When installing, **make sure that the option to `Add python.exe to PATH` is enabled** during installation.

#### Downloading NodeJS:
Go to the [NodeJS download page](https://nodejs.org/en/download/). It should be a straight-forward installation.
- When installing, make sure that **`NodeJS` and `npm` are added to PATH**. This appears in the **Custom Setup** step of installation.

#### Installing dependencies:
In a terminal, enter the following separately
- `pip install argparse` for parsing input parameters.
- `npm install tetris-fumen` for working with fumens.
- `npm install -g sfinder-strict-minimal` for generating minimals.

#### Creating the files that sfinder-strict-minimal works off of:
Solution finder's [[sfinder-docs/sfinder path.md|Path Command]] is used to produce a `.csv` file that is used to find minimals. The sfinder command is identical to a normal path file, but you must specify `--format csv` (`-f csv`) and `--key pattern` (`-k p`).

#### Using PC-Saves-Get:
The commands for the program is structured similar to sfinder. The following explanations are excerpts of important parameters from the [official documentation](https://github.com/Marfung37/PC-Saves-Get/blob/main/README.md).
```{title="Example sfinder-saves.py Command"}
py sfinder-saves.py filter -w [Wanted Saves] -p [Pieces Used]
```
- The **`--wanted-save`** or **`-w`** parameter details the saves you wish to get from the program. More on how to use this parameter later.
- The **`--pieces`** or **`-p`** parameter details the pieces being used. It should always be the same as what you used in the sfinder command when generating the `path.csv` file.
- The **`--best-save`** or **`-bs`** option prioritizes the first defined save before moving onto the next. For making minimals, always include this in the command. It doesn't require a value, simply having it in the command is already enough.
- The **`--solve`** or **`-s`** parameter specifies the type of output. This guide uses its default value which is `--solve minimal` but it's notable that you can use `--solve unique` to get all saves for a certain save if you want.

#### **`-w`** Usage and Examples:
For most use cases, all you need for specifying wanted saves are:
- **`-w "I,LS,LSZ"`** a plain list of saves you wish to get. These are priotized according to what's written first.
    - If the path.csv file saves more pieces than specified in the `-w` parameter, it'll find all saves that include those pieces: **`-w "I"`** may match `TILJ`, `ISZO`, `ILSZ` etc. while **`-w "LSZ"`** may match `TLSZ`,`LSZO`, etc.
- **`-w "!O"`** the "NOT" operator (`!`). It negates the given specification.
    - As an example, using **`-w "!O"`** will match `TISZ`, `LJSZ`, etc.-- any save that does not contain <span class="mino">O</span>.
- **`-w "S||Z"`** the "OR" operator (`||`). It joins two or more saves into a single item, removing prioritization between them.
    - As an example, using **`-w "T,O"`** may find a 3-solution set that saves 100% Save <span class="mino">T</span>, while **`-w "T||O"`** may find a 2-solution set that saves 50% <span class="mino">T</span> and 50% <span class="mino">O</span>.
___
## Example Path and Filter Commands
<div style="display: flex; align-items: center;">
<p>Here's an example run on how to get save minimals starting from generating the path file. We'll be getting the Save <span class="mino">O</span> minimals for a three-piece 2nd PC setup. This setup in particular has 100% Save <span class="mino">O</span> potential.</p>
<div style="flex-shrink: 0"><figfumen clipboard="false">v115@LhA8GeC8FeD8AeD8JeAgH</fumen></div>
</div>

Don't forget `-f csv` and `-k p`. Take note of the `-p` parameter as this will be also used in the filter command. This should create a file in the `/output/` folder named `path.csv`.
```{title="Example Path Command"}
Input:
java -jar sfinder.jar path -t v115@LhA8GeC8FeD8AeD8JeAgH -p T,*! -f csv -k p

Output:
...
perfect clear percent
  -> success = 100.00% (5040/5040)
```

From this you can already find minimals. Don't forget `-bs` and to re-use the `-p` parameter that was used in the path command.
```{title="Example Filter Command"}
py sfinder-saves.py filter -w 'O' -p T,*! -bs
```

The resulting minimals should be the following:
<div style="text-align: center">
<br>
<figfumen clipboard="false" size=15>v115@9gywR4whBthlxwR4A8whg0BtglxwC8whi0glwwD8wh?D8JeAgWaAWBwKB3ngHBFbcRASUzABWIaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gilR4whzwglAtR4A8whg0ywBtC8whi0wwAtD8whD8?JeAgWaAV+f2A1ngHBFbcRASEROBSOaHBQecRAylAAA</figfumen>
<br>
<figfumen clipboard="false" size=15>v115@9gilR4whwwi0glAtR4A8whywg0BtC8whzwAtD8whD8?JeAgWaA0FIOByngHBFbcRASEhHBQRaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gywR4whgli0xwR4A8whglBtg0xwC8whhlBtwwD8wh?D8JeAgWaAUBwKB3ngHBFbcRASExABVLaHBQecRAylAAA</figfumen>
</div>

The setup also has a 42.46% chance for saving <span class="mino">T</span>, so here's a second example filter command:
```{title="Example Filter Command"}
py sfinder-saves.py filter -w 'T,O' -p T,*! -bs
```

The resulting minimals should be the following. If you double-check with cover, this set ,does max out the setup's potential 42.46% save <span class="mino">T</span> before filling in the rest of the missing cover with save <span class="mino">O</span>.
<br>
<div style="text-align: center">
<figfumen clipboard="false" size=15>v115@9gBtywwhh0R4wwBtwwA8whg0R4glxwC8whg0ilwwD8?whD8JeAgWaA0CwKB2ngHBFbcRASEJEBQLaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gywR4whBthlxwR4A8whg0BtglxwC8whi0glwwD8wh?D8JeAgWaA08HOB1ngHBFbcRASEZ9AwPaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gywR4whgli0xwR4A8whglBtg0xwC8whhlBtwwD8wh?D8JeAgWaAT4f2A4ngHBFbcRAS0eHBRRaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gwhh0R4Btilwhg0R4A8wwBtRpwhg0C8xwglRpwhD8?wwD8JeAgWaASEYHB3ngHBFbcRAS0GEBUIaHBQecRAylAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gilR4whi0wwglAtR4A8whRpxwBtC8whRpg0wwAtD8?whD8JeAgWZAxFg2A1ngHBFbcRAS0ILBwmv2AUo78AZAAAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gilR4i0RpglAtR4A8wwzhBtC8xwg0RpAtD8wwD8Je?AgWYAZlf9AFrnRASo78AYe22AvfEEBwnAVB</figfumen>
<figfumen clipboard="false" size=15>v115@9gilR4wwzhglAtR4A8i0RpBtC8xwg0RpAtD8wwD8Je?AgWYASFrRBFrnRASo78A45o2AvfEEBwnAVB</figfumen>
</div>
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
                <strong>Save Minimals</strong>: <a href="https://github.com/marfung27/">Marfung37</a><br>
                <ul><li><a href="https://github.com/marfung37/PC-Saves-Get/">PC-Saves-Get</a></li></ul>
            </li>
		</ul>
	</div>
</div>