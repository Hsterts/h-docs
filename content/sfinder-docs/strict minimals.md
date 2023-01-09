---
title: Strict Minimals
tags:
- Solution Finder
---
<meta name="description" content="Description, installation and usage of a program to find the smallest covering set for a given setup with Eight04's Sfinder-Strict-Minimals program." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 5vw;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

## Strict Minimals
Strict minimals are **the smallest possible covering set for a given set of solutions**. It can be found through a lot of methods but it is always computationally expensive or tedious to do so.

Here's an example diagram of strict minimals' output. It's not illustrative of how it actually finds the set because that's a tad bit complicated, but it finds that **only solutions A and E are necessary** to maximize cover, as opposed to sfinder requiring solutions A, C, and E.

<div style="display: flex; align-items: center; justify-content: center;">
<table style="width: auto;">
    <tr><th colspan=6>Solution Covers</th></tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution A</td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution B</td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution C</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution D</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="padding: 0 1ch;">Solution E</td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-note)"></td>
    </tr>
</table>
<div><p style="font-size: 1.5em; margin: 0.5em;">></p></div>
<table style="width: auto;">
    <tr><th colspan=6>Strict</th></tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
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
## Finding Strict Minimals
#### Downloade NodeJS:
1. Go to the [NodeJS download page](https://nodejs.org/en/download/). Installing it should be straight-forward.
    - When installing, make sure that **`NodeJS` and `npm` are added to PATH**. This appears in the **Custom Setup** step of installation.
2. Open a terminal (Command Prompt, PowerShell, etc.)
3. Type in `npm install -g sfinder-strict-minimal` and press enter. This should install the necessary requirements to be able to use the program anywhere on your device.

#### Creating the files that sfinder-strict-minimal works off of:
Solution finder's [[sfinder-docs/sfinder path.md|Path Command]] is used to produce a csv file that is used to find minimals. The sfinder command is identical to a normal path command, but you must specify `--format csv` (`-f csv`) and `--key pattern` (`-k p`).

#### Using sfinder-strict-minimal:
1. To use the program, simply enter `sfinder-minimal output/path.csv` into a terminal.
    - This assumes that the terminal's directory is set to the folder where `sfinder.jar` is.
> [!WARNING] Program Run-Time
> 
> The program mostly runs for a few seconds up to a few minutes. If it lasts longer than that, there may be *too many* solutions and the result may take quite a while to produce.
>
>[This alternative](https://github.com/knewjade/path-filter/) by [Knewjade](https://github.com/knewjade/) can be used to find a slightly larger set in exchange for a much shorter run-time. I also wrote about how to use it over <a href="/h-docs/sfinder-docs/path-filter-minimals/">here</a>.
2. If there are multiple minimal sets, you may need to choose between solutions. An interactive prompt (**use your arrow keys and press enter when you've chosen**) is used for the user to choose between sets of solutions. **Choose according to your needs**-- if you want ease, prioritize easy-looking solutions. If you want saves, prioritize solutions that save better pieces.

3. Outputs are written to `path_minimal_strict.md`. It's placed in the directory the terminal is linked to. Opening it by itself will allow you to see the solutions if you have a markdown editor. However, you can extract the fumens from the markdown file using the makeMinimals Script [(Direct download link)](https://cdn.discordapp.com/attachments/569730842319126541/941520438528466964/makeMinimals_2.zip)
    - Using the makeMinimals Script is straight-forward. Extract it into the same folder `path_minimal_strict.md` is in, then enter `py true_minimal.py` onto a terminal.
___
## Example Path and Strict-Minimal Commands
<div style="display: flex; align-items: center;">
<p>Here's an example run on how to get strict minimals starting from generating the path file.</p>
<div style="flex-shrink: 0"><figfumen clipboard="false">v115@LhA8GeC8FeD8AeD8JeAgH</fumen></div>
</div>

Don't forget `-f csv` and `-k p`. This should create a file in the `/output/` folder named `path.csv`.
```{title="Example Path Command"}
java -jar sfinder.jar path -t v115@LhA8GeC8FeD8AeD8JeAgH -p T,*! -f csv -k p
```

From this, you can already find minimals. Simply enter the following:
```{title="Example Filter Command"}
sfinder-minimal output/path.csv
```
There can different sets of solutions that all qualify as a minimal set. To choose the best one, choices are presented to the user for them to choose between solutions and pin-point their ideal set. Simply use your arrow keys and press enter to choose between setups.

![[sfinder-docs/attachments_sfinder/minimal-interactive.png]]

The output will be written onto ``path_minimal_strict.md``. The resulting minimals may differ depending on how you chose, but these are my results:
<div style="text-align: center">
<br><figfumen clipboard="false" size=15>v115@9gywR4whh0hlxwR4A8whg0RpglxwC8whg0RpglwwD8?whD8JeAgWTADX7rDy4CwBFbkRBZ1AVBFrvAA</figfumen>
<figfumen clipboard="false" size=15>v115@9gBtywwhh0R4wwBtwwA8whg0R4glxwC8whg0ilwwD8?whD8JeAgWTADX7rDy4CwBFb0KBW1ZOBFrvAA</figfumen>
</div>

As a bonus, you can get the fumen codes extracted from ``path_minimal_strict.md`` by using the makeMinimals script.
```{title="Example makeMinimal Command"}
Input:
py true_minimal.py

Output:
v115@9gywR4whh0hlxwR4A8whg0RpglxwC8whg0RpglwwD8?whD8JeAgWTADX7rDy4CwBFbkRBZ1AVBFrvAA9gBtywwhh0R?4wwBtwwA8whg0R4glxwC8whg0ilwwD8whD8JeAAPTADX7rD?y4CwBFb0KBW1ZOBFrvAA
```
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
                <strong>Strict Minimals</strong>: <a href="https://github.com/eight04/">Eight04</a><br>
                <ul><li><a href="https://github.com/eight04/sfinder-strict-minimal/">Sfinder-Strict-Minimal</a></li></ul>
            </li>
		</ul>
	</div>
</div>