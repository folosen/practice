if [ round = 1 ]
    use(#1)
endif
if [ round = 2 ]
    change(#2)
endif
if [ round > 2 & self.dead]
    change(#3)
endif
if [ round > 2 & self.dead]
    quit(认输)[ self(#3).played ]
endif
if [ round > 2 & enemy.hp > 600]
    use(#1)
endif
use(#2)[enemy.ability(#2).usable]
use(#3)[enemy.ability(#3).usable]
use(#1)