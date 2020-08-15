# collect_files
Small repo to show how to walk a dir path recursively and collect only its files 

## Requirements:
- node.js ^12.xx.xx (LTS version)
- npm ^6.xx.xx (LTS version included with node.js)

## Cloning the repo from Github: 

```
# git clone https://github.com/lacroixDj/collect_files.git
# cd collect_files/
```

## Run: 

```
# npm install
# node index.js
```

## Sample input
```
├── foo/
    ├── bar/
    |   └── b.txt 
    ├── baz/
    |   └── f.txt 
    ├── zap/
    |   ├── zip/
    |   │   ├── f.txt
    |   |   └── g.txt
    |   └── d.txt
    ├── a.txt
    └── c.txt  
```

## Sample output:

Returns a list of lists:

```
┌─────────┬────────────────────────┐
│ (index) │           0            │
├─────────┼────────────────────────┤
│    0    │      'foo/a.txt'       │
│    1    │   'foo/bar/b.txt'      │
│    2    │   'foo/baz/f.txt'      │
│    3    │      'foo/c.txt'       │
│    4    │   'foo/zap/d.txt'      │
│    5    │ 'foo/zap/zip/f.txt'    │
│    6    │ 'foo/zap/zip/g.txt'    │
└─────────┴────────────────────────┘
```

## Contact: 

If you have any question you can reach me at:

- <lacroixdj@gmail.com>
- <jesus.farias@gmail.com>

**Thank you so much for your time ;)**