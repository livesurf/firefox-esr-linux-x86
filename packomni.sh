#!/bin/bash

pack_omni() {
    cd ./omni
    zip -qr0XD omni.ja *
    mv omni.ja ../
}

DIR=$( pwd )

cd ./root/usr/lib/firefox/
pack_omni

cd "$DIR"
cd ./root/usr/lib/firefox/browser
pack_omni

cd "$DIR"
cd ./root/usr/lib/firefox/webapprt
pack_omni
