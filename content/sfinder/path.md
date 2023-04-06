---
title: "Solution Finder: Path"
tags:
- Guide
- Solution Finder
---
<meta name="description" content="Documentation for solution finder's path command">
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

[[sfinder/|Solution Finder's]] **Path** command outputs all the ways to get a perfect clear from a **specified field**, given a specified **pattern**. The terminal output is written into a file in the specified [[#Miscellaneous Parameters|log path]], and a file containing the path data is generated in the specified [[#Miscellaneous Parameters|output base]].
___
## Input Parameters
{{< sfinder-parameters/parameter-template name="Specified Field(s)" subcommand="tetfu" shortcut="t" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/tetfu.md" >}}
{{< sfinder-parameters/parameter-template name="Page" subcommand="page" shortcut="P" defaultValue="1" descriptionPath="sfinder-parameters/descriptions/page.md" >}}
{{< sfinder-parameters/parameter-template name="Clear Line" subcommand="clear-line" shortcut="c" defaultValue="4" descriptionPath="sfinder-parameters/descriptions/clear-line.md" >}}

{{< sfinder-parameters/parameter-template name="Patterns" subcommand="patterns" shortcut="p" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/patterns.md" >}}
{{< sfinder-parameters/parameter-template name="Hold" subcommand="hold" shortcut="H" defaultValue="use" descriptionPath="sfinder-parameters/descriptions/hold.md" >}}
{{< sfinder-parameters/parameter-template name="Drop" subcommand="drop" shortcut="d" defaultValue="soft" descriptionPath="sfinder-parameters/descriptions/drop.md" tSpinTable="true" >}}

{{< sfinder-parameters/parameter-template name="Specified only" subcommand="specified-only" shortcut="so" defaultValue="yes" descriptionPath="WIP.md" >}}
{{< sfinder-parameters/parameter-template name="Reserved minos" subcommand="reserved" shortcut="r" defaultValue="false" descriptionPath="WIP.md" >}}
{{< sfinder-parameters/parameter-template name="Kick table" subcommand="kicks" shortcut="K" defaultValue="srs" version="1.40" descriptionPath="WIP.md" >}}
___
## Output Parameters
{{< sfinder-parameters/parameter-template name="Format" subcommand="format" shortcut="f" defaultValue="html" descriptionPath="sfinder-parameters/descriptions/format.md" >}}
{{< sfinder-parameters/parameter-template name="Max Layer" subcommand="max-layer" shortcut="L" defaultValue="2" descriptionPath="sfinder-parameters/descriptions/max-layer.md" >}}
{{< sfinder-parameters/parameter-template name="Key" subcommand="key" shortcut="k" defaultValue="none" descriptionPath="sfinder-parameters/descriptions/key.md" >}}
{{< sfinder-parameters/parameter-template name="Split" subcommand="split" shortcut="s" defaultValue="no" descriptionPath="sfinder-parameters/descriptions/split.md" >}}
___
## Miscellaneous Parameters
All paths are relative to the directory sfinder.jar is in.

{{< sfinder-parameters/parameter-template name="Output Base" subcommand="output-base" shortcut="o" defaultValue="output/path.txt" descriptionPath="sfinder-parameters/descriptions/output-base.md" >}}
{{< sfinder-parameters/parameter-template name="Log Path" subcommand="log-path" shortcut="lp" defaultValue="output/last_output.txt" descriptionPath="sfinder-parameters/descriptions/log-path.md" >}}
{{< sfinder-parameters/parameter-template name="Specified Field from a file" subcommand="field-path" shortcut="fp" defaultValue="input/field.txt" descriptionPath="sfinder-parameters/descriptions/field-path.md" >}}
{{< sfinder-parameters/parameter-template name="Patterns from a file" subcommand="patterns-path" shortcut="pp" defaultValue="input/patterns.txt" descriptionPath="sfinder-parameters/descriptions/patterns-path.md" >}}
{{< sfinder-parameters/parameter-template name="Threads" subcommand="threads" shortcut="th" defaultValue="-1" descriptionPath="sfinder-parameters/descriptions/threads.md" >}}
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

These are the outputs produced by various [[path#output-parameters|output parameters]]:

1. **With --format html** (the default), the output looks like this for both `path_minimal.html` and `path_unique.html`: 
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
		<figure>
      		<fumen src="v115@9gD8zhF8ywG8g0wwH8i0C8JeAgH" clipboard="false">
      		<figcaption style="text-align: center;">Solve with no line erasure</figcaption>
		</figure>
	</div>
	<div>
		<figure>
			<fumen src="v115@9gD8zhF8i0G8RpH8Rpg0C8JeAgH" clipboard="false">
			<figcaption style="text-align: center;">Solve with line erasure</figcaption>
		</figure>
	</div>
</div>

1. **With --format csv --key solution**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by solution</u>:
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

1. **With --format csv --key pattern**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by queue</u>:
```YAML {title="CSV Pattern Sample Output"}
OITL, # queue being checked
2, # number of solutions
TIL;TIO, # pieces used in the solutions
O;L, # pieces not used in the solutions (saved pieces)
v115@...;v115@...;... # solutions for this queue
```

1. **With --format csv --key use**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by pieces used</u>:
```YAML {title="CSV Pattern Sample Output"}
ILZ, # pieces used
1, # number of solutions that use these pieces
64, # number of queues solved with these pieces
v115@9gD8zhF8ilG8BtH8glBtC8JeAgWDA6SdBA, # solutions that use these pieces
ZSIL;TZIL;... # queues the solutions work for
```
___
## Special Uses
1. One of path's most important uses is as an input file for finding various types of [[sfinder/minimals|minimals]].
___
<div class="credits">
	<div class="stat">
		<h4>References</h4>
		<ul>
			<li>
				<a href="https://github.com/knewjade/">Knewjade</a>
				<br>
                <ul><li><a href="https://solution-finder.readthedocs.io/ja/stable/contents/path/main.html">Path documentation</a></li></ul>
            </li>
		</ul>
	</div>
</div>