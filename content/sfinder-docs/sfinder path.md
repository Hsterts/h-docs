---
title: "Solution Finder: Path"
---
Solution Finder's **Path** command outputs all the ways to get a perfect clear from a **specified field**, given a specified **pattern**. This output is written into a file in the specified [[#^9e183e|Log Path]].
```YAML {title="Command Structure"}
java -jar sfinder.jar path --tetfu <fumen> --patterns <pattern>
```
```YAML {title="Shorthand Command Structure"}
java -jar sfinder.jar path -t <fumen> -p <pattern>
```
___
## Input Parameters
**Specified Field** (--tetfu, --t): the [[sfinder-docs/fumen editor#Fumen Code|fumen code]] that sfinder begins working with. If not specified, the file `field.txt` in the `input` folder is used.
	- **Page** (--page, -P): Specify the page of the fumen. The default is the first page.
		- `--page 2` 
	- **Clear Line** (--clear-line, -c): Specify the number of line clears for a perfect clear. The default is 4
		- `--clear-line 6`

**Patterns** (--patterns, -p): Determines the queues checked by sfinder. Read more about this parameter [[sfinder-docs/parameter patterns|here]].
	- **Hold** (--hold, -H): Specify whether or not a hold slot is usable. By default, it is enabled.
		- `--H use` or `--H avoid`
	- **Drop** (--drop, -d): Specify what movements are usable. By default, it uses `softdrop`. 
		- `--drop harddrop`: only harddrop and kicks.
		- `--drop softdrop`: enabled softdrop and kicks.
		- `--drop 180`: softdrop but with 180 spins.
___
## Output Parameters
**Tree Depth** (--tree-depth, -td): determines the depth of the tree diagram of the output. The tree output checks for the sol% of the field if the first few pieces of the queue is known.
	- By default, tree depth is 3.
	- `--tree-depth 1`

**Fail Count** (--fail-count, -fc): determines the number of fail queues displayed at the end of the output.
	- By default, fail count is 100.
	- `--fail-count -1` displays as many fail queues as possible.
___
## Miscellaneous Parameters
**Log path** (--log-path, -lp): create a .txt file output from the output of the command. 
	- By default, the log path is `output/last_output.txt`.
	- `--log-path output/chances.txt` ^9e183e

**Specified Field from a file** (--field-path, -fp): instead of defining the fumen code using `--tetfu`, you can specify a .txt file that contains a fumen code instead.
	- By default, the field path is `input/field.txt`.
	- `--field-path input/sdpc.txt`

**Patterns from a file** (--patterns-path, -pp): instead of defining patterns using `--patterns`, you can specify a .txt file that contains either the actual queues, or patterns.
	- By default, the patterns path is `input/patterns.txt`.
	- `--patterns-path input/filteredqueue.txt`

**Threads** (--threads, --th): Specify the number of threads to use when sfinder is running.
	- By default, the number of threads used is 1.
	- `--threads 0` will allow sfinder to use as many threads as is present in the execution environment.

**Cached Bit** (--cached-bit, -cb): Specify the smallest bit of the cache to use for the internal algorithm. <u>You almost never need to use this parameter</u>.
___
## Summary
<center><table>
	<tr>
		<th>Parameter</th>
		<th>Shorthand</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>--tetfu</td>
		<td style="text-align: center;">-t</td>
		<td>null</td>
	</tr>
	<tr>
		<td>--page</td>
		<td style="text-align: center;">-P</td>
		<td>1</td>
	</tr>
	<tr>
		<td>--clear-line</td>
		<td style="text-align: center;">-c</td>
		<td>4</td>
	</tr>
	<tr>
		<td>--patterns</td>
		<td style="text-align: center;">-p</td>
		<td>null</td>
	</tr>
	<tr>
		<td>--hold</td>
		<td style="text-align: center;">--H</td>
		<td>use</td>
	</tr>
	<tr>
		<td>--drop</td>
		<td style="text-align: center;">-d</td>
		<td>softdrop</td>
	</tr>
	<tr>
		<td>--tree-depth</td>
		<td style="text-align: center;">-td</td>
		<td>3</td>
	</tr>
	<tr>
		<td>--failed-count</td>
		<td style="text-align: center;">-fc</td>
		<td>100</td>
	</tr>
	<tr>
		<td>--log-path</td>
		<td style="text-align: center;">-lp</td>
		<td>output/last_output.txt</td>
	</tr>
	<tr>
		<td>--field-path</td>
		<td style="text-align: center;">-fp</td>
		<td>input/field.txt</td>
	</tr>
	<tr>
		<td>--patterns-path</td>
		<td style="text-align: center;">-pp</td>
		<td>input/patterns.txt</td>
	</tr>
	<tr>
		<td>--threads</td>
		<td style="text-align: center;">-th</td>
		<td>-1</td>
	</tr>
</table></center>
___
## Example Command and Output
An **example output** of the percent command `java -jar sfinder.jar percent --tetfu v115@9gE8DeG8CeH8BeG8CeA8JeAgH --patterns *p4 -td 1 -fc 5`:
```YAML {title="output/last_output.txt"}
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
? T -> 85.83 %
? I -> 73.33 %
? L -> 67.50 %
? J -> 43.33 %
? S -> 58.33 %
? Z -> 52.50 %
? O -> 47.50 %

# Fail Count (--fail-count, -fc)
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
