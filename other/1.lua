if [ self(魔法扫帚).active ] 
ability(横扫) [ round=1 ]
change(#2) [ round=2 ]
ability(旋紧发条) [ enemy(#3).active ]
ability(扫击)
quit
endif

if [ self(#2).active ]
change(#3)
quit
endif

if [ self(碎骨).active ]
ability(#1) 
ability(#2)
ability(#3)
change(#1)
endif
