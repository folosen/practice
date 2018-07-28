standby(待命) [ self.aura(昏迷).exists ]
catch(抓宠) [ enemy.quality = 4 ]

if [ round = 1 ]
    use(#1)
endif

if [ round = 2 ]
    change(next)
endif

if [ round > 2 & self.dead ]
    quit(认输) [ self(#1).active ]
    change(next)
endif

if [  enemy.hp > 600 & self.speed.fast ]
    ability(#1)
endif

ability(#3) [ enemy.type = 飞行 &  enemy.hp > 400 ]

ability(#2) [ self.ability(#2).usable ]

ability(#3) [ enemy.type = 飞行 ]

ability(#1)
