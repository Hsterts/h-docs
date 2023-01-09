---
title: Minimals
tags:
- Solution Finder
---
<meta name="description" content="The different kinds of minimals and how to generate them." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 5vw;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

## Solution Finder's Minimals
Solution finder's [[sfinder-docs/sfinder path.md|Path Command]] has an HTML output called `path_minimal.html`, wherein all possible solutions are sorted by cover then scanned from highest to lowest cover, **removing all solutions whose cover has already been covered by previous setups**.

Here's an example diagram of how sfinder minimals work. **sfinder finds that solutions A, C, and E are necessary** to maximize cover, as they cover new queues that aren't covered by the ones before them.
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
    <tr><th colspan=6>sfinder</th></tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0;"></td>
    </tr>
    <tr style="height: 25px">
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done); opacity: 0.5;"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-bug)"></td>
        <td style="width: 25px; padding: 0; background: var(--callout-done)"></td>
    </tr>
</table>
</div>

___
 ## Strict Minimals
Strict minimals are **the smallest possible covering set for a given set of solutions**. It can be found through a lot of methods, but may become very computationally expensive or tedious.

You can find out how to find strict minimals from [[sfinder-docs/strict minimals|this page on strict minimals]].

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

If a setup has *too many* solutions, you may rather opt for Knewjade's Path-Filter program used to generate very small (potentially not smallest) solution sets. Read up on that in [[sfinder-docs/path-filter minimals|this page on Path-Filter minimals]].
___
## Save Minimals
Save minimals are strict minimals, but **saved pieces are prioritized**. That means the program would rather settle for a 3-solution set that saves 100% Save <span class="mino">T</span> over a 2-solution set that saves 100% <span class="mino">O</span> if you tell it to do so.

You can find out more on how to find save minimals from [[sfinder-docs/save minimals|this page on save minimals]].

The program currently being used can prioritize multiple saves. If you ask for save <span class="mino">T</span> then <span class="mino"></span> minimals, the solution set will maximize save <span class="mino">T</span> before finding solutions with the next specified save, and so on.
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
## Custom Cover-Based Minimals
A special method of generating minimals, where you can get minimal sets for maximizing a setup's quad clear chance, T-Spin chance, etc. by converting solution finder's  [[sfinder-docs/sfinder cover.md|cover]] output into a path.csv file, allowing [[sfinder-docs/strict minimals|sfinder-strict-minimal]] to work its magic.

Learn more about how to find custom minimals from [[sfinder-docs/custom minimals|this page on custom minimals]].

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
			<li>
                <strong>Save Minimals</strong>: <a href="https://github.com/marfung27/">Marfung37</a><br>
                <ul><li><a href="https://github.com/marfung37/PC-Saves-Get/">PC-Saves-Get</a></li></ul>
            </li>
            <li>
                <strong>Path-Filter Minimals</strong>: <a href="https://github.com/knewjade/">Knewjade</a><br>
                <ul><li><a href="https://github.com/knewjade/path-filter/">Path-Filter</a></li></ul>
            </li>
            <li>
                <strong>Custom Cover-Based Minimals</strong>: <a href="https://github.com/SaNoyGit/">Hillosanation</a><br>
                <ul><li><a href="https://cdn.discordapp.com/attachments/569728778985537587/982997795986350110/cover-to-path.py">Cover-To-Path Script</a></li></ul>
                <ul><li><a href="https://cdn.discordapp.com/attachments/853378199525916732/982998615909871646/unglueFumen.js">Unglue Fumen Script</a></li></ul>
            </li>
		</ul>
	</div>
</div>