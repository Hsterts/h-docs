---
title: "Solution Finder: Percent"
tags:
- Guide
- Solution Finder
---
<meta name="description" content="Documentation for solution finder's percent command">
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

[[sfinder/|Solution Finder]]'s **Percent** command outputs the probability of getting a perfect clear from a **specified field**, given a specified **pattern**. This output is written in the terminal and the specified **log path**.
___
## Input Parameters
{{< sfinder-parameters/parameter-template name="Specified Field(s)" subcommand="tetfu" shortcut="t" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/tetfu.md" >}}
{{< sfinder-parameters/parameter-template name="Page" subcommand="page" shortcut="P" defaultValue="1" descriptionPath="sfinder-parameters/descriptions/page.md" >}}
{{< sfinder-parameters/parameter-template name="Clear Line" subcommand="clear-line" shortcut="c" defaultValue="4" descriptionPath="sfinder-parameters/descriptions/clear-line.md" >}}

{{< sfinder-parameters/parameter-template name="Patterns" subcommand="patterns" shortcut="p" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/patterns.md" >}}
{{< sfinder-parameters/parameter-template name="Hold" subcommand="hold" shortcut="H" defaultValue="use" descriptionPath="sfinder-parameters/descriptions/hold.md" >}}
{{< sfinder-parameters/parameter-template name="Drop" subcommand="drop" shortcut="d" defaultValue="soft" descriptionPath="sfinder-parameters/descriptions/drop.md" tSpinTable="false" >}}

{{< sfinder-parameters/parameter-template name="Kick table" subcommand="kicks" shortcut="K" defaultValue="srs" version="1.40" descriptionPath="WIP.md" >}}
___
## Output Parameters
{{< sfinder-parameters/parameter-template name="Tree Depth" subcommand="tree-depth" shortcut="td" defaultValue="3" descriptionPath="sfinder-parameters/descriptions/tree-depth.md" >}}
{{< sfinder-parameters/parameter-template name="Failed Count" subcommand="failed-count" shortcut="fc" defaultValue="100" descriptionPath="sfinder-parameters/descriptions/failed-count.md" >}}
___
## Miscellaneous Parameters
{{< sfinder-parameters/parameter-template name="Log Path" subcommand="log-path" shortcut="lp" defaultValue="output/last_output.txt" descriptionPath="sfinder-parameters/descriptions/log-path.md" >}}
{{< sfinder-parameters/parameter-template name="Specified Field from a file" subcommand="field-path" shortcut="fp" defaultValue="input/field.txt" descriptionPath="sfinder-parameters/descriptions/field-path.md" >}}
{{< sfinder-parameters/parameter-template name="Patterns from a file" subcommand="patterns-path" shortcut="pp" defaultValue="input/patterns.txt" descriptionPath="sfinder-parameters/descriptions/patterns-path.md" >}}
{{< sfinder-parameters/parameter-template name="Threads" subcommand="threads" shortcut="th" defaultValue="-1" descriptionPath="sfinder-parameters/descriptions/threads.md" >}}
___
## Example Command and Output
An **example output** of the percent command
```YAML {title="output/last_output.txt"}
# Command Line Input
java -jar sfinder.jar percent --tetfu v115@9gE8DeG8CeH8BeG8CeA8JeAgH --patterns *p4 -td 1 -fc 5

# Setup Field
XXXXX____X
XXXXXX___X
XXXXXXX__X
XXXXXX___X

# Initialize / User-defined
Max clear lines: 4
Using hold: use
Drop: softdrop
Searching patterns:
  *p4

# Initialize / System
Threads = 4
Version = 1.0
Necessary Pieces = 3

# Enumerate pieces
Piece pop count = 4
Searching pattern size (duplicate) = 840
Searching pattern size ( no dup. ) = 840

# Search
  -> Stopwatch start
  -> Stopwatch stop : avg.time = 115 ms [1 counts]

# Output
success = 61.19% (514/840)

# Tree Depth (--tree-depth, -td)
Success pattern tree [Head 1 pieces]:
* -> 61.19 %
∟ T -> 85.83 %
∟ I -> 73.33 %
∟ L -> 67.50 %
∟ J -> 43.33 %
∟ S -> 58.33 %
∟ Z -> 52.50 %
∟ O -> 47.50 %

# Failed Count (--failed-count, -fc)
-------------------
Fail pattern (max. 5)
[J, L, T, O]
[S, L, T, O]
[L, J, T, O]
[S, J, T, O]
[Z, J, T, O]

# Finalize
done
```
___
<div class="credits">
	<div class="stat">
		<h4>References</h4>
		<ul>
			<li>
				<a href="https://github.com/knewjade/">Knewjade</a>
				<br>
                <ul><li><a href="https://solution-finder.readthedocs.io/ja/stable/contents/percent/main.html">Percent documentation</a></li></ul>
            </li>
		</ul>
	</div>
</div>