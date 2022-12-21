#!/bin/sh

AUDIT_BASELINE="grep -c '\"line_number\": [0-9]*$' .secrets.baseline"

check_if_baseline_needs_whitelisting() {
  if [ ! $(eval $AUDIT_BASELINE) -eq "0" ]; then
    echo "please determine if potential secrets are to be whitelisted"
    return 0
  else
    return 1
  fi
}

while
  detect-secrets audit .secrets.baseline
  check_if_baseline_needs_whitelisting
do true; done

if [ ! $(grep -c '"is_secret": true' .secrets.baseline) -eq "0" ]; then
  echo "potential secrets have been found to be committed, please check .secrets.baseline and remove marked secrets"
  exit 1
else
  echo "no secrets detected in files"
fi
