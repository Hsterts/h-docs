Specify the number of threads to use when sfinder is running. Basically, threads are tiny virtual CPUs used to calculate stuff. <u>Almost no need to ever touch this.</u>
- `--threads -1` (or any negative integer) will allow sfinder to use as many threads as is present in the execution environment.
- `--threads 1` will force sfinder to use only one thread.