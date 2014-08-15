## Setup VIM for Go development

### Install Go
1. Visit [golang](http://golang.org/dl/) web site to download the [installer](https://storage.googleapis.com/golang/go1.3.1.darwin-amd64-osx10.8.pkg). Install it.
2. Edit file `.zshrc` or your `sh` config file, add
```sh
export GOPATH=/Users/<USERNAME>/workspaces/golang
export PATH=$PATH:/usr/local/go/bin
```
Replace the `<USERNAME>` with your username.

### Install Pathogen
At first, let's install Pathogen which is a plugin manager of VIM.
1. Download the [pathogen.zip](http://www.vim.org/scripts/script.php?script_id=2332), then unzip the package.
2. Prepare the plugins folder of VIM. `mkdir -p ~/.vim/autoload ~/.vim/bundle `
3. Move the pathogen.vim to `~/.vim/autoload/`
4. Edit `~/.vimrc` to add `call pathogen#infect()` at the top.

### Install VIM-GO
1. Navigate to `~/.vim/bundle`, run `git clone https://github.com/fatih/vim-go.git`
2. Edit `~/.vimrc` add
```vim
syntax enable  
filetype plugin on  
set number  
let g:go_disable_autoinstall = 0
```

### Install neocomplete
1. Navigate to `~/.vim/bundle`, run `git clone https://github.com/Shougo/neocomplete.vim.git`
2. Edit `~/.vimrc` file add `let g:neocomplete#enable_at_startup = 1`

### Install molokai theme
1. Download the [file](https://github.com/fatih/molokai/raw/master/colors/molokai.vim) and put it into `~/.vim/colors`.
2. Edit `~/.vimrc` to add `colorscheme molokai`.

### Install tagbar
1. Install `ctags` at first, run command `brew install ctags`.
2. Go to your workspace, run `go get -u github.com/jstemmer/gotags` to install Go parser.
3. Add the followings into your `~/.vimrc` file:
```vim
let g:tagbar_type_go = {  
    \ 'ctagstype' : 'go',
    \ 'kinds'     : [
        \ 'p:package',
        \ 'i:imports:1',
        \ 'c:constants',
        \ 'v:variables',
        \ 't:types',
        \ 'n:interfaces',
        \ 'w:fields',
        \ 'e:embedded',
        \ 'm:methods',
        \ 'r:constructor',
        \ 'f:functions'
    \ ],
    \ 'sro' : '.',
    \ 'kind2scope' : {
        \ 't' : 'ctype',
        \ 'n' : 'ntype'
    \ },
    \ 'scope2kind' : {
        \ 'ctype' : 't',
        \ 'ntype' : 'n'
    \ },
    \ 'ctagsbin'  : 'gotags',
    \ 'ctagsargs' : '-sort -silent'
\ }
```
4. Navigate to `~/.vim/bundle`, run `git clone https://github.com/majutsushi/tagbar.git`.
5. Edit `~/.vimrc` file add line `nmap <F8> :TagbarToggle<CR>`.

### Install file browser nerdtree
1. Navigate to `~/.vim/bundle`, run `git clone https://github.com/scrooloose/nerdtree.git`.
2. Edit `~/.vimrc` file add line `nmap <C-n> :NERDTreeToggle<CR>`.