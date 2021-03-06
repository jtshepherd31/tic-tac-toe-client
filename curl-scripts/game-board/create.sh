#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    {
      "game": {
        "cells": "'"${CELLS}"'",
        "over": "'"${OVER}"'",
        "owner": "'"${OWNER}"'",
        "createdAt": "'"${CREATEDAT}"'",
        "updatedAt": "'"${UPDATEDAT}"'",
      }
    }
  }'

echo
