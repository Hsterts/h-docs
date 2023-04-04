---
title: Solution Finder
---
<meta name="description" content="The cornerstone of PC and Setup research. Installation, basic usage, documentation of Knewjade's Solution Finder" />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

**Solution Finder**, often referred to as **sfinder**, is a program created by [knewjade](https://github.com/knewjade), who's also responsible for various other tools. It is the cornerstone of **Tetris-related research** such as for openers, loops, and perfect clearing.
___
## Getting Started
- You must have **Java Runtime Environment**.
	- Download it [here](https://www.oracle.com/java/technologies/javase-jre8-downloads.html). Installation should be straight-forward.
- You must have a basic understanding of using a **terminal**.
- You know how to use a [[sfinder/fumen editor|Fumen Editor]].
___
## Downloading
1. **Solution Finder** can be downloaded from knewjade's [GitHub repo](https://github.com/knewjade/solution-finder) or from this [direct download link](https://github.com/knewjade/solution-finder/releases/download/v1.41/solution-finder-1.41.zip).
2. Once downloaded, **extract the .ZIP file somewhere convenient**. All examples used in this page assumes the sfinder.jar file is in `C:\Users\hsterts\Documents\solution-finder-1.41\`.
>[!INFO]- Customized solution finder with 180 spins
>
>A lot of research is being done with modern 180 spins considered. [Here](https://cdn.discordapp.com/attachments/569730931544293395/1051589844905766963/jstris180.properties) is a direct download link to metallicLurker's Jstris 180 spins `.properites` file that you can place in the `/kicks/` folder to use when running commands.

___
## Opening
1. **Solution Finder** uses a command line interface (CLI). These are entered into a terminal, most commonly **Command Prompt** or **PowerShell Terminal**.
>[!INFO]- Opening Command Prompt and Setting Directories
>
>- Find where your downloaded **sfinder.jar** file is in a File Explorer.
>- On the window, **type `cmd` into the address bar** and press enter. This should open the command prompt with its directory already set.
>- You can also drag and drop the sfinder folder into an already-open command prompt (you can search for it and open it from the Start Menu). This will paste the path of that folder into the input. Preface it with `cd`.
>- You can also use `cd` to change directories; copy and paste the folder's path in the terminal as `cd C:\Path\` and it should work.

>[!INFO]- Opening PowerShell and Setting Directories
>
>- Find where your downloaded **sfinder.jar** file is in a File Explorer.
>- On the folder, **hold shift and right-click** to open the right-click menu, which should contain an option to "Open PowerShell Here".
>- You can just use `cd` to change directories -- copy and paste the folder's path in the terminal as `cd C:\Path\` and it should work.
2. There are various ways to open the PowerShell Terminal, but the simplest way is to **hold shift and right click somewhere on File Explorer in the folder where sfinder.jar is**. Don't select `sfinder.jar` while doing so.
<center><img src = "https://i.imgur.com/XsL6WnV.png"></center>

This will open a PowerShell terminal with its directory already set to where your `sfinder.jar` file is. **This is where you will be typing in your commands**. A window will open, and it should have single line that looks like this:
```
PS C:\Users\hsterts\Documents\solution-finder-1.41\>
```
___
## Usage
Every command line input starts with `java -jar sfinder.jar <command>`. The rest of it looks like `--parameter <value>` so the final command looks like:
```YAML {title="SFinder CLI Structure"}
java -jar sfinder.jar <command> --parameter <value> --parameter <value>
```

>[!INFO] Version Details
> 
> Some commands may behave differently depending on the version of sfinder you are using. 
> 
> The output of sfinder contains `Version: x.xx` which tells you the version of sfinder you are using.
> 
> All pages in this site, unless otherwise stated, will assume you are using a version of sfinder that is **at least v1.00**.

Command line inputs may vary between different **sfinder commands**:
<center><table width="80%">
	<tr>
		<th width="120px">Command</th>
		<th>Function</th>
	</tr>
	<tr>
		<td><a href="/h-docs/sfinder/percent/">Percent</a></td>
		<td>Outputs the chances (sol%) of getting a perfect clear.</td>
	</tr>
	<tr>
		<td><a href="/h-docs/sfinder/path/">Path</a></td>
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
		<td><a href="/h-docs/sfinder/spin/">Spin</a></td>
		<td>Outputs all the ways a T-spin can be made from a field.</td>
	</tr>
	<tr>
		<td><a href="/h-docs/sfinder/cover/">Cover</a></td>
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
1. **Tetfu** refers to the fumen codes made from [[sfinder/fumen editor|Fumen Editors]]. They are used to specify the field for each type of operation. Some commands take *only one* fumen input, but some can take multiple.

2. **Pattern** refers to the <u>general structure</u> of the queues being considered by sfinder. Since it's one of the harder parameters to learn, patterns are discussed in [[sfinder/parameter patterns|its own page]].

In general, the main parameters of a command looks like this: 

```YAML {title="Command Structure"}
java -jar sfinder.jar <command> --tetfu <fumen> --patterns <pattern>
```
```YAML {title="Shorthand Command Structure"}
java -jar sfinder.jar <command> -t <fumen> -p <pattern>
```
```YAML {title="Specifying Multiple Fumens"}
java -jar sfinder.jar <command> -t <fumen> <fumen> -p <pattern>
```