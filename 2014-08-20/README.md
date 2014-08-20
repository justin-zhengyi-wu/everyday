## Write Go in Emacs

### Env
- OS X Version 10.9.4
- Emacs 24.4.50
- zsh

### Official Emacs Go mode
- Download [go-mode.el](http://golang.org/misc/emacs/go-mode.el) and [go-mode-load.el](http://golang.org/misc/emacs/go-mode-load.el)
- Put them into folder `~/.emacs.d/vendor/golang/`
- Install
Add the following snippets in to Emacs config file:
```lisp
(add-to-list 'load-path "~/.emacs.d/vendor/golang/")
(require 'go-mode-load)
```

### Download and install auto-complete-mode
Omitted

### Download and install `gocode`
```sh
go get -u github.com/nsf/gocode
gocode set propose-builtins true
gocode set lib-path "/usr/local/go/pkg/darwin_amd64:<YOUR_GO_PATH>/pkg/darwin_amd64"
```
Replace the `<YOUR_GO_APTH>` with your own Go path.

### Edit your `~/.profile` to add:
```sh
export GOPATH=<YOUR_OWN_GOPATH>
export PATH=$PATH:$GOPATH/bin
gocode -s
```
Replace `<YOUR_OWN_GOPATH>` with your own Go path.

### Formatting Code
Add this `(add-hook 'before-save-hook 'gofmt-before-save)` into Emacs config file.

### On-the-fly syntax check
- Set env 
```
(setenv "GOPATH" "/path/to/gopath")
(setenv "PATH" (concat (getenv "PATH") ":" "/extra/path/element"))
(setq exec-path (append exec-path (list (expand-file-name "/another/thing"))))
```
- Install goflymake
`go get -u github.com/dougm/goflymake`
- Config Emacs, download the [go-flymake.el](https://github.com/dougm/goflymake/raw/master/go-flymake.el) and move it into `~/.emacs.d/vendor/golang/`. Add the following into Emacs config file.
```lisp
(require 'go-flymake)
```


### References:
- [http://dominik.honnef.co/posts/2013/03/writing_go_in_emacs/](http://dominik.honnef.co/posts/2013/03/writing_go_in_emacs/)
