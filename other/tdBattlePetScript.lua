if [ round = 1 ]
    use(#1)
endif

if [ round = 2 ]
    change(#2)
endif

standby(待命) [ self.aura(昏迷).exists ]

if [ round > 2 & self.dead ]
    change(#3)
endif

if [ round > 2 & self.dead ]
    quit(认输) [ self(#3).dead ]
endif

if [  enemy.hp > 600 & !enemy.speed.fast ]
    ability(#1)
endif

ability(#2) [ self.ability(#2).usable ]
ability(#3) [ self.ability(#3).usable ]
ability(#1)
