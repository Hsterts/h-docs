Specify the number of lines (or rows) that needs to be cleared before a Perfect Clear. This crops all blocks in the fumen above the specified number of lines.

Make sure you know what you're doing if you change this parameter. Here are some possible errors that you encounter from changing this setting:
- `Empty block in field should be multiples of 4: EmptyCount=X`: The error most likely comes from the number of lines being off by one. If `X` is odd, then you may have a field that cannot perform a Perfect Clear, or there may be blocks that are cropped.
- `Should specify equal to or more than X pieces: CurrentPieces=Y`: You didn't specify enough pieces in patterns to clear the number of lines you specified.
<!-- TODO: link "patterns" to the current patterns <details> element. This requires me to pass in the page context to this partial file. -->