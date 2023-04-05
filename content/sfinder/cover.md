---
title: "Solution Finder: Cover"
tags:
- Solution Finder
- Guide
---
<meta name="description" content="Documentation for solution finder's cover command">
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

[[sfinder/|Solution Finder's]] **Cover** command outputs the probability of setting up/building a **specified field** (or multiple), given a specified **pattern**. This output is written in both the terminal and the specified **log path**.
___
## Input Parameters
{{< sfinder-parameters/parameter-template name="Specified Field(s)" subcommand="tetfu" shortcut="t" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/tetfu.md" >}}
{{< sfinder-parameters/parameter-template name="Mirror" subcommand="mirror" shortcut="m" defaultValue="false" descriptionPath="sfinder-parameters/descriptions/mirror.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Patterns" subcommand="patterns" shortcut="p" defaultValue="null" descriptionPath="sfinder-parameters/descriptions/patterns.md" >}}
{{< sfinder-parameters/parameter-template name="Hold" subcommand="hold" shortcut="H" defaultValue="use" descriptionPath="sfinder-parameters/descriptions/hold.md" >}}

{{< sfinder-parameters/parameter-template name="Drop" subcommand="drop" shortcut="d" defaultValue="soft" descriptionPath="sfinder-parameters/descriptions/drop.md" tSpinTable="true" >}}
{{< sfinder-parameters/parameter-template name="Last Softdrop" subcommand="last-sd" shortcut="l" defaultValue="0" descriptionPath="sfinder-parameters/descriptions/last-sd.md" >}}

{{< sfinder-parameters/parameter-template name="Mode" subcommand="mode" shortcut="M" defaultValue="normal" descriptionPath="sfinder-parameters/descriptions/mode.md" >}}
{{< sfinder-parameters/parameter-template name="Max Clear Line" subcommand="max-clearline" shortcut="mc" defaultValue="-1" descriptionPath="sfinder-parameters/descriptions/max-clearline.md" >}}
{{< sfinder-parameters/parameter-template name="Max softdrop" subcommand="max-softdrop" shortcut="ms" defaultValue="-1" descriptionPath="sfinder-parameters/descriptions/max-softdrop.md" >}}
<br>
{{< sfinder-parameters/parameter-template name="Starting B2B" subcommand="starting-b2b" shortcut="sb" defaultValue="0" descriptionPath="sfinder-parameters/descriptions/starting-b2b.md" >}}

{{< sfinder-parameters/parameter-template name="Kick table" subcommand="kicks" shortcut="K" defaultValue="srs" version="1.40" descriptionPath="WIP.md" >}}
___
## Output Parameters
{{< sfinder-parameters/parameter-template name="Priority" subcommand="priority" shortcut="P" defaultValue="no" descriptionPath="sfinder-parameters/descriptions/priority.md" >}}
{{< sfinder-parameters/parameter-template name="Failed Count" subcommand="failed-count" shortcut="fc" defaultValue="100" descriptionPath="sfinder-parameters/descriptions/failed-count.md" >}}

___
## Miscellaneous Parameters
{{< sfinder-parameters/parameter-template name="Output Base" subcommand="output-base" shortcut="o" defaultValue="output/cover.csv" descriptionPath="sfinder-parameters/descriptions/output-base.md" >}}
{{< sfinder-parameters/parameter-template name="Log Path" subcommand="log-path" shortcut="lp" defaultValue="output/last_output.txt" descriptionPath="sfinder-parameters/descriptions/log-path.md" >}}
{{< sfinder-parameters/parameter-template name="Specified Field from a file" subcommand="field-path" shortcut="fp" defaultValue="input/field.txt" descriptionPath="sfinder-parameters/descriptions/field-path.md" >}}
{{< sfinder-parameters/parameter-template name="Patterns from a file" subcommand="patterns-path" shortcut="pp" defaultValue="input/patterns.txt" descriptionPath="sfinder-parameters/descriptions/patterns-path.md" >}}

___
## Example Commands and Output
An **example terminal output** of the cover command.
```YAML {title="output/last_output.txt"}
#Command Line Input
java -jar sfinder.jar cover -t v115@vhFRQJUGJKJJvMJTNJGBJ v115@vhFRQJPGJKJJGMJTNJ0BJ -p *p7

# Output
success:
33.33 % [1680/5040]: http://fumen.zui.jp/?v115@vhFRQJUGJKJJvMJTNJGBJ
44.44 % [2240/5040]: http://fumen.zui.jp/?v115@vhFRQJPGJKJJGMJTNJ0BJ
>>
OR  = 61.67 % [3108/5040]
AND = 16.11 % [812/5040]
```

Each item under `success` represents one fumen entered under the `--tetfu` parameter, in order. It contains the following:
- `33.33 %`: The percentage cover of the fumen.
- `[1680/5040]`: The number of successful over total patterns of the fumen.
- `http://fumen.zui.jp/?v115@vhFRQJUGJKJJvMJTNJGBJ`: A link to the fumen.

Furthermore, it tallies up the results as:
- `OR`: the amount of queues that can build at least one of the fumens.
- `AND`: the amount of queues that can build all of the fumens.
___
An **example CSV output** of the cover command.
<center>
<table style="text-align: center;">
	<tr>
		<th width="100px;">sequence</th>
		<th width="100px;">v115@vhFRQJU...</th>
		<th width="100px;">v115@vhFRQJP...</th>
	</tr>
	<tr>
		<td>TILJSZO</td>
		<td>X</td>
		<td>O</td>
	</tr>
	<tr>
		<td>TILJSOZ</td>
		<td>X</td>
		<td>O</td>
	</tr>
	<tr>
		<td>TILJZSO</td>
		<td>X</td>
		<td>O</td>
	</tr>
	<tr>
		<td>TILJZOS</td>
		<td>X</td>
		<td>O</td>
	</tr>
	<tr>
    	<td colspan="3">5036 more lines...</td>
	</tr>
</table>
</center>

The CSV output lists the first column for the patterns used, and extra columns are allocated for every fumen in order.
- `X`: the fumen is not buildable for the equivalent pattern.
- `O`: the fumen is buildable for the equivalent pattern.
___
## Special Uses
1. Cover's output can be converted into an [[sfinder/path|sfinder path output]] to be used to find [[sfinder/custom minimals|custom minimals]], such as Quad PC minimals or T-Spin minimals.
___
<div class="credits">
	<div class="stat">
		<h4>References</h4>
		<ul>
			<li>
				<a href="https://github.com/knewjade/">Knewjade</a>
				<br>
                <ul><li><a href="https://solution-finder.readthedocs.io/ja/stable/contents/cover/main.html">Cover documentation</a></li></ul>
            </li>
		</ul>
	</div>
</div>