rm cscope.files cscope.out TAGS
find ./ -name '*.h' > cscope.files
find ./ -name "*.cpp" >> cscope.files
cscope -b -q
etags `cat cscope.files`
cscope -d
