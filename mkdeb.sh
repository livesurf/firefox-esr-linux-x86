#!/bin/bash

./packomni.sh

DIR=$( mktemp -d )
rsync -axHAXS --exclude '*/omni/' root "$DIR"

cd "$DIR/root"

SIZE=`du -s etc usr | awk '{ sum+=$1} END {print sum}'`
sed -i "s/^Installed-Size.*/Installed-Size: $SIZE/g" DEBIAN/control
md5sum `find etc usr -type f | sort` > DEBIAN/md5sums
NAME=`grep '^Package:' DEBIAN/control | cut -d ' ' -f 2`
VER=`grep '^Version:' DEBIAN/control | cut -d ' ' -f 2`
ARCH=`grep '^Architecture:' DEBIAN/control| cut -d ' ' -f 2`

cd -

cp -a "$DIR/root/DEBIAN/control" ./root/DEBIAN/
cp -a "$DIR/root/DEBIAN/md5sums" ./root/DEBIAN/

fakeroot dpkg-deb -Z gzip -b "$DIR/root" ../${NAME}_${VER}_${ARCH}_$(date +%Y-%m-%d_%H:%M).deb 

rm -rf "$DIR"
