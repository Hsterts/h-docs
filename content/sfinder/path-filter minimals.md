---
title: Path-Filter Minimals
tags:
- Guide
- Minimals
- Solution Finder
---
<meta name="description" content="Description, installation, and usage of a program to find a small covering set for a setup with Knewjade's Path-Filter." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

## Path-Filter Minimals
The output from this **may be bigger than the smallest possible set**, but the difference can be marginal (one or two solves) as a trade-off for being able to find small solution sets quickly for setups whose strict minimals can't be found within a reasonable timeframe.

[Knewjade](https://github.com/knewjade/) made [Path-Filter](https://github.com/knewjade/path-filter/) to generate small sets of solutions like sfinder-strict-minimal with a faster method, but it has some downsides:
- The generated set isn't guaranteed to be the smallest possible set.
- The generated set can't be chosen; it only finds one specific set among potentially multiple.
___
## Finding Path-Filter Minimals
There aren't many extraneous things necessary to use this program. When using it, Knewjade provides a command that shouldn't need to be changed for most use cases.
```{title="Default Path-Filter Command"}
java -jar path-filter.jar 5.0 1.0 3.0 300000
```

#### Downloading Path-Filter
1. Getting path-filter is similar to sfinder. Grab the latest release from this [direct download link](https://github.com/knewjade/path-filter/releases/download/v1.130/path-filter-1.130.zip).
2. The **`path-filter.jar`** file should extracted to the `/output/` folder in the sfinder folder.
___
## Usage and Example
The following examples are pulled directly from the official documentation by Knewjade. It can be found within the `.zip` file when downloading path-filter.

**Generate a path.csv file**. It should have `-f csv` and `-k p`. The `-c` parameter in here indicates that the field is five lines tall. The terminal's directory for this should be set to the folder where `sfinder.jar` is in.
```{title="Example Path Command"}
java -jar sfinder.jar path -t v115@zgB8EeE8EeE8FeF8CeC8JeAgH -p '*! -f csv -k p -c 5
```
**Run the default path-filter command**. Make sure that the terminal directory is set to the folder where `path.csv` is (the `/output/` folder).
```{title="Default Path-Filter Command"}
java -jar path-filter.jar 5.0 1.0 3.0 300000
```
After entering this, the program starts printing outputs.
- If the "best" value starts stagnating, it should be fine to end the program. For PowerShell and command prompt, that can be done with `Ctrl + C` (assuming you haven't selected any text).
- To get a combined fumen of the filtered solutions and to make sure sol% hasn't been degraded, you can use `java -jar path-filter.jar verify`.
- You can also open `output.txt` in the same folder to get a list of the solutions chosen by path-filter.
- Run the program multiple times to be able to pick between different results. The number of solutions may be the same, but the chosen solutions may vary. Make sure to save solution sets you find notable because re-running the program will overwrite the contents of `output.txt`.

This is the final output I chose. It has 27 solutions.
<br>
<div style="text-align: center">
<fumen src="v115@zgB8Q4ywwhE8R4RpwhE8g0Q4RpwhE8i0ilF8wwglwh?C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8Q4zhE8R4ywE8ilBtE8glQ4g0wwBtF8i0C8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8Rpi0E8RpBtg0E8ilBtE8glywR4F8wwR4C8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8RpywE8RpglwwAtE8ilBtE8i0AtR4F8g0R4C8Je?AgH" size=10 clipboard="false">
<fumen src="v115@zgB8RpywE8ilBtE8glzhE8Rpg0wwBtF8i0C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8g0ywAtE8i0BtE8RpwwAtglE8RpzhF8ilC8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8g0zhE8i0RpE8ilRpE8glywR4F8wwR4C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8glQ4g0BtE8glR4RpE8hlQ4RpE8zhBtF8i0C8Je?AgH" size=10 clipboard="false">
<fumen src="v115@zgB8h0AtRpE8g0BtRpE8g0AtilE8zhR4F8glR4C8Je?AgH" size=10 clipboard="false">
<fumen src="v115@zgB8h0ywE8g0RpwwglE8g0RpBtE8zhBtF8ilC8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8h0ywE8hlwhRpE8g0glwhRpE8g0glwhwwR4F8wh?R4C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8i0R4E8zhglE8RpR4glE8RpBthlF8g0BtC8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8i0hlE8zhglE8Rpg0AtglE8RpBtR4F8AtR4C8Je?AgH" size=10 clipboard="false">
<fumen src="v115@zgB8ilR4E8glzhE8RpR4wwE8Rpg0ywF8i0C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8ilRpE8glAtg0RpE8Bti0E8AtywR4F8wwR4C8Je?AgH" size=10 clipboard="false">
<fumen src="v115@zgB8whBtRpE8whglg0RpE8whgli0E8whhlywF8Btww?C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whQ4BtwwE8whR4xwE8whRpg0wwE8whRpi0F8Q4?BtC8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whQ4ywE8whR4wwglE8whg0Q4BtE8whi0BtF8il?C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whg0ilE8whi0AtE8whRpBtE8whRpAtR4F8glR4?C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whh0R4E8whg0R4glE8whg0BtglE8whywhlF8ww?BtC8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whh0hlE8whg0RpglE8whg0RpglE8whBtywF8Bt?wwC8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whh0hlE8whg0RpglE8whg0RpglE8whywR4F8ww?R4C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8whilwwE8whRpxwE8whRpAtwwE8whglBtR4F8At?R4C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8ywRpE8ilRpE8glwwg0BtE8zhBtF8i0C8JeAgH" size=10 clipboard="false">
<fumen src="v115@zgB8zhglE8h0ilE8g0RpR4E8g0RpywF8R4wwC8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8zhglE8h0ywE8g0RpBtE8g0RpwwBtF8ilC8JeAg?H" size=10 clipboard="false">
<fumen src="v115@zgB8zhglE8i0R4E8Rpg0BtE8RpR4BtF8ilC8JeAgH" size=10 clipboard="false">
</div>
<hr>
<div class="credits">
	<div class="stat">
		<h4>Credits</h4>
		<ul>
			<li><strong>Writer</strong>: Hsterts</li>
			<li><strong>Consultation</strong>: Marfung37, smdbs, torchlight</li>
		</ul>
		<h4>References</h4>
		<ul>
			<li>
                <strong>Save Minimals</strong>: <a href="https://github.com/marfung27/">Marfung37</a><br>
                <ul><li><a href="https://github.com/marfung37/PC-Saves-Get/">PC-Saves-Get</a></li></ul>
            </li>
		</ul>
	</div>
</div>