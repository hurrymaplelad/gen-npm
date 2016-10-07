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

@test "creates a package.json" {
  expect -c "spawn gen-npm $usePromptDefaults"
  [ -e package.json ]
}
