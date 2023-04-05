Dictates the way the path output is written onto a file.
- With `--format html` (the default), there are two outputs (if `--max-layer` is not specified).
	- `path_unique.html` contains a list of all the possible solves found by sfinder.
	- `path_minimal.html` contains a loosely defined set of minimals. Read more about what these mean over at [[sfinder/minimals|this page]].
- `--format csv` will output the path results as a csv. You will need to specify further what kind of info will be displayed in the csv, <u>or you will end up with nonsensical text</u>. Some more info about different csv outputs [[#Example Commands and Outputs|here]].

Note that ``_unique`` and ``_minimal`` will be added to the ``--output-base`` filename.