#!/usr/local/bin/bash

declare -i total=0
seen=()
found=

array_contains () {
  for i in "${seen[@]}"; do
    if [[ "$i" == "$1" ]]; then
      return 0
    fi
  done
  return 1
}

while [[ ! $found ]]; do
  for line in $(cat $1); do
    total=$(( ${total}${line} ))

    echo searching for $total among ${#seen[@]} items
    if array_contains "$total"; then
      echo "FOUND " $total
      found=1
      break
    else
      echo 'not found'
    fi

    seen+=($total)
  done
done

# ./main.sh input.txt
