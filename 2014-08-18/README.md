## Start to learn Go language (1)

1. Install Go on MacOS
2. Go environment varaibles
- `export GOROOT=/usr/local/go`
- `export GOBIN=$GOROOT/bin`
- `export GOARCH=amd64`
- `export GOOS=darwin`
- `export PATH=$GOBIN:$PATH`
3. Test with hello world
`go run hello-world.go` or `go build hello-world.go; ./hello-world`

4. Verify the version
`go run version.go` or `go build version.go; ./version` should output the same version number with command `go version`.


