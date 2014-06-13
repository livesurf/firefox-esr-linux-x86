
cd ./root

SIZE=`du -s etc usr | awk '{ sum+=$1} END {print sum}'`
sed -i "s/^Installed-Size.*/Installed-Size: $SIZE/g" DEBIAN/control
md5sum `find etc usr -type f | sort` > DEBIAN/md5sums
NAME=`grep '^Package:' DEBIAN/control | cut -d ' ' -f 2`
VER=`grep '^Version:' DEBIAN/control | cut -d ' ' -f 2`
ARCH=`grep '^Architecture:' DEBIAN/control| cut -d ' ' -f 2`

cd -

fakeroot dpkg-deb -b ./root ../${NAME}_${VER}_${ARCH}.deb

