setup() {
  rm -rf ./temp
  mkdir temp
  cd temp
  gen-npm
}

@test "creates a package.json" {
  [ -e package.json ]
}
