#!/bin/bash

unpack_omni() {
    mkdir omni
    mv ./omni.ja  ./omni/
    cd ./omni
    unzip omni.ja
    rm omni.ja
}

DIR=$(pwd)

cd ./root/usr/lib/firefox/
unpack_omni

cd $DIR
cd ./root/usr/lib/firefox/browser
unpack_omni

cd $DIR
cd ./root/usr/lib/firefox/webapprt
unpack_omni

