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

[[sfinder/|Solution Finder]]'s **Cover** command outputs the probability of setting up/buidling a **specified field** (or multiple), given a specified **pattern**. This output is written in the terminal and the specified **log path**.
```YAML {title="Command Structure"}
java -jar sfinder.jar cover --tetfu <fumen> --patterns <pattern>
```
```YAML {title="Shorthand Command Structure"}
java -jar sfinder.jar cover -t <fumen> -p <pattern>
```
```YAML {title="Specifying Multiple Fumens"}
java -jar sfinder.jar cover -t <fumen> <fumen> -p <pattern>
```
___
## Input Parameters
**Specified Field**/s (--tetfu, --t): the [[sfinder/fumen editor#Fumen Code|fumen code]]/s that sfinder begins working with. If not specified, the file `field.txt` in the `input` folder is used.
- **Page** (--page, -P): Specify the page of the fumen.
	- The default is `1`.
	- `--page 2` 
- **Mirror** (--mirror, -m): Whether or not to include the mirrors for all inputted fumens. The outputs will mark mirrored `fumen` inputs as `fumen#mirror`.
	- The default is `false`.
	- `--mirror true`

**Patterns** (--patterns, -p): Determines the queues checked by sfinder. Read more about this parameter [[sfinder/parameter patterns|here]].
- **Hold** (--hold, -H): Specify whether or not a hold slot is usable.
	- By default, it is `use`.
	- `--H use` or `--H avoid`
- **Drop** (--drop, -d): Specify what movements are usable.
	- By default, it uses `softdrop`. 
	- `--drop harddrop`: only harddrop and kicks.
	- `--drop softdrop`: enabled softdrop and kicks.
	- `--drop 180`: softdrop but with 180 spins.
	- `--drop T-softdrop`: only the T piece is softdropped.
- **Last Softdrop** (--last-softdrop, -ls):

**Mode** (--mode, --M): specifying the condition by which cover will return as successful or failed.
- **Max Clear Line** (--clear-line, -c): Specify the number of line clears cover may use. 
	- By default, it is `-1`, meaning there is no limit.
	- `--max-clearline 1` for a 4-line high perfect clear field may allow you to get that field's quad clear chance.
- **Max Softdrop** (--max-softdrop, -ms): Specify how many times pieces can be softdropped in order to build a setup.
	- This setting is only enabled in conjunction with `--mode` 
	- By default, it uses `-1`, no limit placed on softdrops.
	- ``--max-softdrop 2

**Starting B2B** (--starting-b2b, -sb): specifying the number of B2B clears is required for a successful output.
	- By default, it uses `0`, meaning no B2B is required.
	- ``--starting-b2b 2``
___
## Output Parameters
**Priority** (--priority, -P): Only one setup can be marked as `O` for all the fumens provided. This will be the first setup that is buildable in the order of the fumens given in `--tetfu`.
- By default, priority is `True`.
- `--priority True`

**Fail Count** (--fail-count, -fc): determines the number of fail queues displayed at the end of the output.
- By default, fail count is 100.
- `--fail-count -1` displays as many fail queues as possible.
___
## Miscellaneous Parameters
**Log path** (--log-path, -lp): create a .txt file output from the output of the command.
- By default, the log path is `output/last_output.txt`.
- `--log-path output/chances.txt`

**Specified Field from a file** (--field-path, -fp): instead of defining the fumen code using `--tetfu`, you can specify a .txt file that contains a fumen code instead.
- By default, the field path is `input/field.txt`.
- `--field-path input/sdpc.txt`

**Patterns from a file** (--patterns-path, -pp): instead of defining patterns using `--patterns`, you can specify a .txt file that contains either the actual queues, or patterns.
- By default, the patterns path is `input/patterns.txt`.
- `--patterns-path input/filteredqueue.txt`

___
## Summary
<div style="display: flex; flex-direction: column;">
	<table>
		<tr>
			<th colspan="3">Input Parameters</th>
		</tr>
		<tr>
			<th>Parameter</th>
			<th>Shorthand</th>
			<th>Default</th>
		</tr>
		<tr>
			<td>--tetfu</td>
			<td>-t</td>
			<td>null</td>
		</tr>
		<tr>
			<td>--page</td>
			<td>-P</td>
			<td>1</td>
		</tr>
		<tr>
			<td>--patterns</td>
			<td>-p</td>
			<td>null</td>
		</tr>
		<tr>
			<td>--hold</td>
			<td>--H</td>
			<td>true</td>
		</tr>
		<tr>
			<td>--drop</td>
			<td>-d</td>
			<td>softdrop</td>
		</tr>
		<tr>
			<td>--max-clearline</td>
			<td>-mc</td>
			<td>-1</td>
		</tr>
		<tr>
			<td>--max-softdrop</td>
			<td>-ms</td>
			<td>-1</td>
		</tr>
		<tr>
			<td>--last-softdrop</td>
			<td>-l</td>
			<td>0</td>
		</tr>
		<tr>
			<td>--mirror</td>
			<td>-m</td>
			<td>false</td>
		</tr>
	</table>
	<br>
	<table>
		<tr>
			<th colspan="3">Output Parameters</th>
		</tr>
		<tr>
			<th>Parameter</th>
			<th>Shorthand</th>
			<th>Default</th>
		</tr>
		<tr>
			<td>--priority</td>
			<td>-P</td>
			<td>false</td>
		</tr>
		<tr>
			<td>--mode</td>
			<td>-M</td>
			<td>normal</td>
		<tr>
			<td>--output-base</td>
			<td>-ob</td>
			<td>output/cover.csv</td>
		</tr>
	</table>
	<br>
	<table>
		<tr>
			<th colspan="3">Miscellaneous Parameters</th>
		</tr>
		<tr>
			<th>Parameter</th>
			<th>Shorthand</th>
			<th>Default</th>
		</tr>
		<tr>
			<td>--starting-b2b</td>
			<td>-sb</td>
			<td>0</td>
		</tr>
		<tr>
			<td>--log-path</td>
			<td>-lp</td>
			<td>output/last_output.txt</td>
		</tr>
		<tr>
			<td>--field-path</td>
			<td>-fp</td>
			<td>input/field.txt</td>
		</tr>
		<tr>
			<td>--patterns-path</td>
			<td>-pp</td>
			<td>input/patterns.txt</td>
		</tr>
	</table>
</div>

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

Each item under `success` represents one fumen entered under the ``--tetfu`` parameter, in order. It contains the following:
- `33.33 %`: The percentage cover of the fumen.
- `[1680/5040]`: The number of successful over total patterns of the fumen.
- `http://fumen.zui.jp/?v115@vhFRQJUGJKJJvMJTNJGBJ`: A link to the fumen.

Furthermore, it tallies up the results as:
- `OR`: the cover if at least one of the fumens can be built.
- `AND`: the cover if all of the fumens needs to be built.
___
An **example CSV output** of the cover command.
<center>
<table style="text-align: center;">
<tr>
<th width="100px;">sequence</th>
<th width="100px;">vhFRQJU...</th>
<th width="100px;">vhFRQJP...</th>
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

The CSV output lists the first column for the patterns used, and extra colums are allocated for every fumen in order.
- `X`: the fumen is not buildable for the equivalent pattern.
- `O`: the fumen is buildable for the equivalent pattern.
___
## Special Uses
1. Cover's output can be converted into an [[sfinder/sfinder path|sfinder path output]] to be used to find [[sfinder/custom minimals|custom minimals]], such as Quad PC minimals or T-Spin minimals.