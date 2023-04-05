---
title: "Solution Finder: Spin"
tags:
- Guide
- Solution Finder
---
<meta name="description" content="Documentation for solution finder's spin command" />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

>[!WARNING] Work In Progress
>
> This page is currently being worked on! For the meantime, assume that none of the information presented here is correct.

[[sfinder/|Solution Finder]]'s **Spin** command outputs all the ways to get a specified spin (TS0, TSS, TSD, and Mini Variants) from a **specified field**, given a specified **pattern**. The terminal output is written into a file in the specified [[#Miscellaneous Parameters|log path]], and a file containing the path data is generated in the specified [[#Miscellaneous Parameters|output base]].
___
## Input Parameters
{{< sfinder-parameters/parameter-template name="Specified Field(s)" subcommand="tetfu" shortcut="t" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/tetfu.md" >}}
{{< sfinder-parameters/parameter-template name="Page" subcommand="page" shortcut="P" defaultValue="1" descriptionPath="sfinder-parameters/descriptions/page.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Patterns" subcommand="patterns" shortcut="p" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/patterns.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Required clear line(s)" subcommand="line" shortcut="c" defaultValue="2" descriptionPath="WIP.md" >}}

___
## Filtering Parameters
{{< sfinder-parameters/parameter-template name="Minimum fill height" subcommand="fill-bottom" shortcut="fb" defaultValue="0" descriptionPath="WIP.md" >}}
{{< sfinder-parameters/parameter-template name="Maximum fill height" subcommand="fill-top" shortcut="ft" defaultValue="-1" descriptionPath="WIP.md" >}}
{{< sfinder-parameters/parameter-template name="Maximum margin height" subcommand="margin-height" shortcut="m" defaultValue="-1" descriptionPath="WIP.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Build roof" subcommand="roof" shortcut="r" defaultValue="yes" descriptionPath="WIP.md" >}}
{{< sfinder-parameters/parameter-template name="Maximum pieces until roof" subcommand="max-roof" shortcut="mr" defaultValue="-1" descriptionPath="WIP.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Filter" subcommand="filter" shortcut="f" defaultValue="strict" descriptionPath="WIP.md" >}}

Note `spin` always uses the SRS rotation system and cannot be customized, unlike other commands.

___
## Output Parameters
{{< sfinder-parameters/parameter-template name="Format" subcommand="format" shortcut="fo" defaultValue="html" descriptionPath="sfinder-parameters/descriptions/format.md" >}}

Note that `spin` uses `-fo` as the shorthand instead of `-f`.
{{< sfinder-parameters/parameter-template name="Split" subcommand="split" shortcut="s" defaultValue="no" descriptionPath="sfinder-parameters/descriptions/split.md" >}}
___
## Miscellaneous Parameters
{{< sfinder-parameters/parameter-template name="Output Base" subcommand="output-base" shortcut="o" defaultValue="output/spin.html" descriptionPath="sfinder-parameters/descriptions/output-base.md" >}}
{{< sfinder-parameters/parameter-template name="Log Path" subcommand="log-path" shortcut="lp" defaultValue="output/last_output.txt" descriptionPath="sfinder-parameters/descriptions/log-path.md" >}}
{{< sfinder-parameters/parameter-template name="Specified Field from a file" subcommand="field-path" shortcut="fp" defaultValue="input/field.txt" descriptionPath="sfinder-parameters/descriptions/field-path.md" >}}
{{< sfinder-parameters/parameter-template name="Patterns from a file" subcommand="patterns-path" shortcut="pp" defaultValue="input/patterns.txt" descriptionPath="sfinder-parameters/descriptions/patterns-path.md" >}}
{{< sfinder-parameters/parameter-template name="Cached Bit" subcommand="cached-bit" shortcut="cb" defaultValue="0" descriptionPath="sfinder-parameters/descriptions/cached-bit.md" >}}
___
## Example Commands and Outputs
An **example output** of the path command:
```YAML {title="Terminal Output"}
#Command Line Input
java -jar sfinder.jar path -t v115@9gD8DeF8CeG8BeH8CeC8JeAgH -p *p4

# Setup Field
XXXX____XX
XXXX___XXX
XXXX__XXXX
XXXX___XXX

# Initialize / User-defined
Max clear lines: 4
Using hold: use
Drop: softdrop
Searching patterns:
  *p4

# Initialize / System
Version = 1.0
Threads = 4
Need Pieces = 3

# Enumerate pieces
Piece pop count = 4

# Cache
  -> Stopwatch start
     ... done
  -> Stopwatch stop : avg.time = 20 ms [1 counts]

# Search
  -> Stopwatch start
     ... searching
     ... done
  -> Stopwatch stop : avg.time = 353 ms [1 counts]

# Output file
Found path [unique] = 18
Found path [minimal] = 16

# Finalize
done
```

These are the outputs produced by various [[#output parameters]]:

1. **With `--format html`** (the default), the output looks like this for both `path_minimal.html` and `path_unique.html`: 
```YAML {title="HTML Output"}
18 solutions [840 input sequences]
All solutions #link

No line erasure # line erasure = line clear
J-Spawn T-Reverse I-Spawn / 11.4 % [96] # these are links to fumens
T-Spawn L-Reverse I-Spawn / 7.6 % [64]
L-Right I-Left T-Reverse / 5.7 % [48]
# 2 more lines...

With line erasure
O-Spawn J-Reverse I-Spawn / 7.6 % [64]
Z-Spawn L-Reverse I-Spawn / 7.6 % [64]
S-Spawn J-Spawn I-Spawn / 7.6 % [64]
# 10 more lines...

# "J-Spawn T-Re..." refers to mino operations based on fumen.
# "/ 11.4 %" is the percentage of queues the solution works for. (cov%)
# "[96]" is the number of queues the solution works for. (cov#)
```

No line erasure vs with line erasure:
<div style="display: flex; justify-content: space-around">
	<div>
		<figure class="fumen">v115@BhAtFehlBtR4Beg0B8glAtR4ywg0B8glD8wwh0JeAg?H
		</figure>
	</div>
	<div>
		<figure class="fumen">v115@KhAtAeR4Beg0B8BtR4ywg0B8AtD8wwh0JeAgH
		</figure>
	</div>
	<div>
		<figure class="fumen">v115@DhAtHeBtBeg0B8ilAtywg0B8glD8wwh0JeAgH
		</figure>
	</div>
</div>


2. **With `--format csv --key solution`**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by solution</u>:
```YAML {title="CSV Solution Sample Output"}
v115@9gD8g0ywF8i0G8RpH8RpwwC8JeAgWDAv/1BA, #the solution
TJO, #pieces used in the solution
1, #
1, #
32, # number of queues this solution works for
OJT, #
OJT, #
SOJT;ZOJT;JOTI;OTJL;JOTS;OJTL;... # queues this solution works for
```

3. **With `--format csv --key pattern`**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by queue</u>:
```YAML {title="CSV Pattern Sample Output"}
OITL, # queue being checked
2, # number of solutions
TIL;TIO, # pieces used in the solutions
O;L, # pieces not used in the solutions (saved pieces)
v115@...;v115@...;... # solutions for this queue
```

4. **With `--format csv --key use`**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by pieces used</u>:
```YAML {title="CSV Pattern Sample Output"}
ILZ, # pieces used
1, # number of solutions that use these pieces
64, # number of queues solved with these pieces
v115@9gD8zhF8ilG8BtH8glBtC8JeAgWDA6SdBA, # solutions that use these pieces
ZSIL;TZIL;... # queues the solutions work for
```
___
<div class="credits">
	<div class="stat">
		<h4>References</h4>
		<ul>
			<li>
				<a href="https://github.com/knewjade/">Knewjade</a>
				<br>
                <ul><li><a href="https://solution-finder.readthedocs.io/ja/stable/contents/spin/main.html">Spin documentation</a></li></ul>
            </li>
		</ul>
	</div>
</div>