setup() {
  rm -rf ./tmp
  mkdir tmp
  cd tmp
}

usePromptDefaults='
  set timeout 3
  expect "Name your NPM package" { send "\r" }
  expect "Describe your package" { send "\r" }
  expect "Keywords" { send "\r" }
  expect timeout {send_user "\ntimed out"; exit 1} eof
'

@test "creates lots of useful files" {
  expect -c "spawn gen-npm $usePromptDefaults"
  [ -e package.json ]
  [ -e README.md ]
  [ -e .git/HEAD ]
}

@test "given a name it creates that directory and generates files inside" {
  expect -c "spawn gen-npm foo $usePromptDefaults"
  [ -e foo/package.json ]
}

@test "generates a failing test" {
  expect -c "spawn gen-npm
    set timeout 60
    $usePromptDefaults"
  npm install
  ./node_modules/.bin/mocha | grep "busted"
}
