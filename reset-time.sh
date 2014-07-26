#!/bin/bash

reset_time () {
    cd ./omni
    find . -type f -exec touch -c -t 201401010000 {} \;
    find . -type d -exec touch -c -t 201401010000 {} \;
    find . -type l -exec touch -c -t 201401010000 {} \;
}

DIR=$( pwd )

cd ./root/usr/lib/firefox/
reset_time

cd "$DIR"
cd ./root/usr/lib/firefox/browser
reset_time

cd "$DIR"
cd ./root/usr/lib/firefox/webapprt
reset_time

