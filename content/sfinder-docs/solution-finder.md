---
title: Solution Finder
---
**Solution Finder**, often referred to as **sfinder**, is a program created by [knewjade](https://gitdub.com/knewjade), who's also responsible for various other tools. It is the cornerstone of **Tetris-related research** such as for openers, loops, and perfect clearing.
___
## Getting Started
- You must have [[sfinder-docs/sfinder prerequisites#Java Runtime Environment|Java Runtime Environment]] installed.
- You must have a basic understanding of using a **[[sfinder-docs/sfinder prerequisites#Command Line Interface|Command Line Interface]]**.
- You know how to use a [[sfinder-docs/fumen editor|Fumen Editor]].
___
## Downloading
1. **Solution Finder** can be downloaded from knewjade's [GitHub repo](https://github.com/knewjade/solution-finder) or from this [direct download](https://github.com/knewjade/solution-finder/releases/download/v1.30/solution-finder-1.30.zip) link.
2. Once downloaded, **extract the .ZIP file somewhere convenient**. All examples used in this page assumes the sfinder.jar file is in `C:\Users\hsterts\Documents\solution-finder-1.30\`.
>[!INFO]- Customized solution finder with 180 spins.
>
>A lot of research is being done with 180 spins considered. [Here](https://cdn.discordapp.com/attachments/569730931544293395/943898698289672232/sfinder-1.12-jstris180.jar) is a direct download link to torchlight's modification of solution finder 1.12 to include 180 spins. Simply replace the extracted `sfinder.jar` file with this new one, and rename the new one to `sfinder.jar`.

___
## Opening
1. **Solution Finder** takes inputs from a [[sfinder prerequisites#Command Line Interface|command line interface]] (*CLIs*). These are entered into a terminal, most often the **PowerShell Terminal**.
2. There are various ways to open the PowerShell Terminal, but the simplest way is to **hold shift and right click somewhere on File Explorer in the folder where sfinder.jar is**. Don't select sfinder.jar while doing so.
<center><img src = "https://i.imgur.com/XsL6WnV.png"></center>

This will open a PowerShell terminal with its directory already set to where your `sfinder.jar` file is. **This is where you will be typing in your commands**. A window will open, and it should have single line that looks like this:
```
PS C:\Users\hsterts\Documents\solution-finder-1.30\>
```
___
## Usage
Every command line input starts with `java -jar sfinder.jar <command>`. The rest of it looks like `--parameter <value>` so the final command looks like:
```YAML {title="SFinder CLI Structure"}
java -jar sfinder.jar <command> --parameter <value> --parameter <value>
```

Command line inputs may vary between different **sfinder commands**:
<center><table width="80%">
	<tr>
		<th width="120px">Command</th>
		<th>Function</th>
	</tr>
	<tr>
		<td><a href="https://hsterts.github.io/h-docs/sfinder-docs/sfinder-percent/">Percent</a></td>
		<td>Outputs the chances (sol%) of getting a perfect clear.</td>
	</tr>
	<tr>
		<td><a href="https://hsterts.github.io/h-docs/sfinder-docs/sfinder-path/">Path</a></td>
		<td>Outputs all perfect clear solutions.</td>
	</tr>
	<tr>
		<td>Setup</td>
		<td>Outputs all the possible ways to build a specified setup.</td>
	</tr>
	<tr>
		<td>REN</td>
		<td>Outputs all the ways combo (REN) can be continued.</td>
	</tr>
	<tr>
		<td>Spin</td>
		<td>Outputs all the ways a T-spin can be made from a field.</td>
	</tr>
	<tr>
		<td>Cover</td>
		<td>Outputs the chances (cov%) of building a given setup.</td>
	</tr>
	<tr>
		<td>Util Fig</td>
		<td>Outputs images based on entered fumens.</td>
	</tr>
	<tr>
		<td>Util Fumen</td>
		<td>Modifies fumens based on entered operation.</td>
	</tr>
	<tr>
		<td>Util Seq</td>
		<td>Outputs a list of queues from user input.</td>
	</tr>
</table></center>

Here are various parameters that are universal between most commands:
1. **Tetfu** refers to the fumen codes made from [[sfinder-docs/fumen editor|Fumen Editors]]. They are used to specify the field for each type of operation. Some commands take *only one* fumen input, but some can take multiple.

```yaml {title="Single Fumen Input"}
java -jar sfinder.jar percent --tetfu <fumen>
```
```yaml {title="Multiple Fumen Inputs"}
java -jar sfinder.jar cover --tetfu <fumen> <fumen> <fumen>
```
```yaml {title="Shorthand for Tetfu"}
java -jar sfinder.jar percent -t <fumen>
```

2. **Pattern** refers to the <u>general structure</u> of the queues being considered by sfinder. Since it's one of the harder parameters to learn, patterns are discussed in its own page: [[sfinder-docs/parameter patterns|--patterns]].