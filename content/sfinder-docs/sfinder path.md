---
title: "Solution Finder: Path"
---
Solution Finder's **Path** command outputs all the ways to get a perfect clear from a **specified field**, given a specified **pattern**. This output is written into a file in the specified [[#^fb964e|Log Path]].
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
	- The default is 1 (the first page)
	- `--page 2` 
- **Clear Line** (--clear-line, -c): Specify the number of line clears for a perfect clear. 
	- The default is 4
	- `--clear-line 6`

**Patterns** (--patterns, -p): Determines the queues checked by sfinder. Read more about this parameter [[sfinder-docs/parameter patterns|here]].
- **Hold** (--hold, -H): Specify whether or not a hold slot is usable.
	- By default, it is enabled.
	- `--H use` or `--H avoid`
- **Drop** (--drop, -d): Specify what movements are usable. 
	- By default, it uses `softdrop`. 
	- `--drop harddrop`: only harddrop and kicks.
	- `--drop softdrop`: enabled softdrop and kicks.
	- `--drop 180`: softdrop but with 180 spins.
___
## Output Parameters
**Format** (--format, -f): Dictates the way the path output is written onto a file.
- By default, the output is in html.
- With `--format html` (the default), there are two outputs (if `--max-layer` is not specified):
	- `path_unique.html` contains a list of all the possible solves found by sfinder.
	- `path_minimal.html` contains a loosely defined set of minimals. Read more about what this means in [[minimals|this page]].
- `--format csv` will output the path results as a csv. You will need to specify further what kind of info will be displayed in the csv, <u>or you will end up with unreadable text</u>. More info about csv outputs [[#Example Commands and Outputs|here]].

**Max Layer** (--max-layer, -L): refers to the outputs of path when using the **html format**.
	- By default, it is set to 2 (outputs both `path_unique.html` and `path_minimal.html`)
	- The only other option is `-L 1`, where it only outputs `path_unique.html`.



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

1. **With --format html --max-layer 2** (the defaults), the output looks like this for both `path_minimal.html` and `path_unique.html`:
```YAML {title="HTML Output"}
18 solutions [840 input sequences]
All solutions #link

No line erasure
J-Spawn T-Reverse I-Spawn / 11.4 % [96] # these are links to fumens
T-Spawn L-Reverse I-Spawn / 7.6 % [64]
L-Right I-Left T-Reverse / 5.7 % [48]
# 2 more lines...

With line erasure
O-Spawn J-Reverse I-Spawn / 7.6 % [64]
Z-Spawn L-Reverse I-Spawn / 7.6 % [64]
S-Spawn J-Spawn I-Spawn / 7.6 % [64]
# 10 more lines...
```

<div style="display: flex; justify-content: space-around">
	<div>
		<img src="./attachments/no_line_erasures.png">
	</div>
	<div>
		<img src="./attachments/with_line_erasures.png">
	</div>
</div>

- `last_output.txt` contains the text that was printed onto the terminal after a command finished.

