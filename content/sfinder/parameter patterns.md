---
title: "Parameter: Patterns"
tags:
- Guide
- Sfinder Parameter
- Solution Finder
---
<meta name="description" content="Detailing the pattern specification for Knewjade's solution finder." />
<style>
header{max-width: 700px; left: 50%; transform: translateX(-50%); padding: 0 2em;}
body{display: flex; justify-content: center;}
.singlePage{width: -webkit-fill-available; max-width: 700px;}
</style>

The **--patterns** parameter for [[sfinder/|solution-finder]] is one of the harder parameters to understand. 
**Patterns**, in this case, is synonymous with **queues**, but potentially more broadly defined. This page is dedicated to providing a thorough explanation and examples on the various aspects and methods of specifying patterns.

It will be much easier (and useful) for users to understand the concepts of modern block stackers' [[7-Bag System]] which ties in closely to how patterns are defined. This page provides exercises that may require the reader to have sfinder, as it uses [[sfinder/sfinder util#seq|sfinder util seq]] to allow the reader to follow along. In standard sfinder syntax, write the following for the various given examples:
```YAML {title="Example Util Seq Command"}
java -jar sfinder.jar util seq -p <example input>
```
___
## Pattern Syntax
Begin by defining a single **static queue**: you can define a single pattern by simply writing the pieces in order.
1. **TILJSZO**: returns only **TILJSZO**.
2. **TIL**: returns only **TIL**.

Next, you can define **bags**. These are a <u>set of pieces that sfinder gets pieces from</u>. Bags are defined by placing pieces within square brackets ``[OSZ]``.
1. **T\[OSZ]**: returns **TO**, **TS**, and **TZ**
2. **\[ILJ]\[TL]**: returns **IT**, **LT**, **JT**, **IL**, **LL**, and **JL**.

From bags, you can specify <u>how many pieces sfinder will pull from them</u> at a time.
1. **T\[OSZ]p1**: also returns **TO**, **TS**, and **TZ**.
2. **\[ILJO]p2**: returns **LI**, **IL**, **LJ**, **JL**, **LO**, **OL**, **IJ**, **JI**, **IO**, **OI**, **JO**, and **OJ**.
___
## Shortcuts
1. Writing ``*`` is the same as writing ``[TILJSZO]`` (a full bag).
	- \***p7** is the same as **\[TILJSZO]p7**
2. Writing `!` after a bag will <u>pull as many pieces as possible</u> from that bag.
	- **\*!** is the same as **\*p7**
	- **\[ILJO]!** is the same as **\[ILJO]p4**
3. Starting a bag with `^` indicates a full bag, but written pieces are excluded.
	- **\[^TI]** is the same as **\[LJSZO]**.
___
## Common Mistakes
1. **Incorrect Bags**: This won't run into an error similar to common mistakes #2 and #3, but is the most common mistake, sometimes even undetected. Make sure the bags and pieces you're using are correct.
	- May include overlooking `!` after writing a bag.
2. **Not Accounting For Hold**: A field may require 7 pieces, so you may be inclined to define 7 pieces, but with hold you may be able to use up to 8 pieces. This may result in inaccurate results.
3. **Not Enough Pieces**: when using sfinder functionalities that attempt to reach a certain field e.g. [[sfinder/sfinder percent|sfinder percent]] or [[sfinder/sfinder setup|sfinder setup]], you need to specify enough pieces to fill the field specified.
	- Error message:: ``Message: Should specify equal to or more than X pieces: CurrentPieces=Y``
4. **Duplicate Pieces**: duplicate pieces won't work. Bags should only have one of each piece.
	- **\[TIILJ]** would return an error: ``Duplicate 'I' pieces in [] [position=3char] [SyntaxException]``.
5. **"^" in Command Prompt**: The `^` symbol is a special character for command prompt. To avoid errors when using it, either enclose the text in quotation marks or write it twice `[^T]` → `[^^T]`
	- Some people just decide to put parameters in quotation marks even in PowerShell to avoid these issues.