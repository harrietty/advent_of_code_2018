seen=()
seen+=(3)
seen+=(-5)
seen+=(4)
seen+=(6)

total=6

array_contains () {
  for i in "${seen[@]}"; do
    if [[ "$i" == "$1" ]]; then
      return 0
    fi
  done
  return 1
}

if array_contains "$total"; then
  echo "FOUND " $total
  found=1
else
  echo 'not found'
fi