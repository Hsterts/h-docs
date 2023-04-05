Specify what movements sfinder uses to try and find solutions.

|Option|Harddrop|Softdrop|90 spins|180 spins|Additional requirements|
|:-:|:-:|:-:|:-:|:-:|:-:|
|harddrop|✓|✗|✗|✗|-|
|softdrop|✓|✓|✓|✗|-|
|180|✓|✓|✓|✓|-|
|t-softdrop|✓|T only|T only|✗|-|
{{- if eq .Params.tSpinTable "true" -}}
|tsz|✓|T only|T only|✗|Any T-spin|
|tsm|✓|T only|T only|✗|tsm/tsd/tst (and/or minis)|
|tss|✓|T only|T only|✗|tsm/tsd/tst|
|tsd|✓|T only|T only|✗|tsd/tst|
|tst|✓|T only|T only|✗|tst|
{{- end -}}