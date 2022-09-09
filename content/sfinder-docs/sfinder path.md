---
title: "Solution Finder: Path"
---
Solution Finder's **Path** command outputs all the ways to get a perfect clear from a **specified field**, given a specified **pattern**. The terminal output is written into a file in the specified [[#Miscellaneous Parameters|log path]], and a path file is generated in the specified [[#Miscellaneous Parameters|output base]].
```YAML {title="Command Structure"}
java -jar sfinder.jar path --tetfu <fumen> --patterns <pattern>
```
```YAML {title="Shorthand Command Structure"}
java -jar sfinder.jar path -t <fumen> -p <pattern>
```

There are three types of outputs
___
## Input Parameters
**Specified Field** (--tetfu, --t): the [[sfinder-docs/fumen editor#Fumen Code|fumen code]] that sfinder begins working with. If not specified, the file `field.txt` in the `input` folder is used.
- **Page** (--page, -P): Specify the page of the fumen. 
	- The default is `1` (the first page)
	- `--page 2` 
- **Clear Line** (--clear-line, -c): Specify the number of line clears for a perfect clear. 
	- The default is `4`
	- `--clear-line 6`

**Patterns** (--patterns, -p): Determines the queues checked by sfinder. Read more about this parameter [[sfinder-docs/parameter patterns|here]].
- **Hold** (--hold, -H): Specify whether or not a hold slot is usable.
	- By default, it is `use`.
	- `--H use` or `--H avoid`
- **Drop** (--drop, -d): Specify what movements sfinder uses to try and find solutions.
	- By default, it uses `softdrop`. 
	- `--drop harddrop`: only harddrop and kicks.
	- `--drop softdrop`: enabled softdrop and kicks.
	- `--drop 180`: softdrop but with 180 spins.
___
## Output Parameters
**Format** (--format, -f): Dictates the way the path output is written onto a file.
- By default, the output is in `html`.
- With `--format html` (the default), there are two outputs (if `--max-layer` is not specified):
	- `path_unique.html` contains a list of all the possible solves found by sfinder.
	- `path_minimal.html` contains a loosely defined set of minimals. Read more about what these mean over at [[minimals|this page]].
- `--format csv` will output the path results as a csv. You will need to specify further what kind of info will be displayed in the csv, <u>or you will end up with nonsensical text</u>. Some more info about different csv outputs [[#Example Commands and Outputs|here]].

**Max Layer** (--max-layer, -L): refers to the outputs of path when using the **html format**.
	- By default, it is set to `2` (outputs both `path_unique.html` and `path_minimal.html`)
	- The only other option is `-L 1`, where it only outputs `path_unique.html`.

**Key** (--key, -k): refers to the way the path result is sorted when using the **csv format**.
	- By default, it is set to `none`.
	- `--key solution` outputs the path info <u>grouped by solution</u>.
	- `--key pattern` outputs the path info <u>grouped by queue</u>.
	- `--key use` outputs the path info <u>grouped by pieces used</u>
	- The parameters may also be shortened to just the first name (`--key use` = `-k u`).

**Split** (--split, -s): refers to the way the solution fumen is built.
	- By default, it is set to `no` (output is a normal fumen).
	- `--split yes` builds the solves <u>mino-by-mino</u> ([[sfinder-docs/fumen editor#Fumen Types|glued fumen]]).
___
## Miscellaneous Parameters
**Log path** (--log-path, -lp): create a .txt file output from the output of the command.
- By default, the log path is `output/last_output.txt`.
- `--log-path output/foundpaths.txt`

**Specified Field from a file** (--field-path, -fp): instead of defining the fumen code using `--tetfu`, you can specify a .txt file that contains a fumen code instead.
- By default, the field path is `input/field.txt`.
- `--field-path input/sdpc.txt`

**Patterns from a file** (--patterns-path, -pp): instead of defining patterns using `--patterns`, you can specify a .txt file that contains either the actual queues, or patterns.
- By default, the patterns path is `input/patterns.txt`.
- `--patterns-path input/filteredqueue.txt`

**Threads** (--threads, --th): Specify the number of threads to use when sfinder is running. Basically, threads are tiny virtual CPUs used to calculate stuff. Almost no need to ever touch this.
- By default, the number of threads used is 1.
- `--threads 0` will allow sfinder to use as many threads as is present in the execution environment.

**Cached Bit** (--cached-bit, -cb): Specify the smallest bit of the cache to use for the internal algorithm. <u>You most likely will never need to use this parameter</u>.
___
## Summary

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
		<img src="https://github.com/Hsterts/h-docs/blob/hugo/content/sfinder-docs/attachments/no_line_erasures.png?raw=true">
		<figcaption style="text-align: center;">Solve with no line erasure</figcaption>
		</figure>
	</div>
	<div>
		<figure>
		<img src="https://github.com/Hsterts/h-docs/blob/hugo/content/sfinder-docs/attachments/with_line_erasures.png?raw=true">
		<figcaption style="text-align: center;">Solve with line erasure</figcaption>
		</figure>
	</div>
</div>

2. **With --format csv --key solution**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by solution</u>:
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

3. **With --format csv --key pattern**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by queue</u>:
```YAML {title="CSV Pattern Sample Output"}
OITL, # queue being checked
2, # number of solutions
TIL;TIO, # pieces used in the solutions
O;L, # pieces not used in the solutions (saved pieces)
v115@...;v115@...;... # solutions for this queue
```

4. **With --format csv --key use**, the output file (`output/path.csv`) contains rows that have the path info <u>sorted by pieces used</u>:
```YAML {title="CSV Pattern Sample Output"}
ILZ, # pieces used
1, # number of solutions that use these pieces
64, # number of queues solved with these pieces
v115@9gD8zhF8ilG8BtH8glBtC8JeAgWDA6SdBA, # solutions that use these pieces
ZSIL;TZIL;... # queues the solutions work for
```