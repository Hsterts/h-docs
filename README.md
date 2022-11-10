# h-docs

## Contributing

If you are interested in contributing, use the following instructions to setup your workspace
1. Clone the repository
```git
git clone git@github.com:Hsterts/h-docs.git
```
2. Install Hugo and Hugo-Obsidian. Install go [here](https://go.dev/) if you do not already have it.
```bash
go install github.com/jackyzha0/hugo-obsidian@latest
go install --tags extended github.com/gohugoio/hugo@latest
```
3. Run Preview; this command creates a live preview available at http://localhost:1313/h-docs
```bash
make serve
```
4. Edit files under `/content` for modifying the base page

Extra:
Obsidian is a very useful editor for managing links on the webpage. Follow [these](https://quartz.jzhao.xyz/notes/obsidian/) instructions to link obsidian with the website files.

