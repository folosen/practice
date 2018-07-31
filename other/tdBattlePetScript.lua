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
                
TD_DB_BATTLEPETSCRIPT_GLOBAL = {
	["profileKeys"] = {
		["Folosen - 日落沼泽"] = "Default"
	},
	["global"] = {
		["scripts"] = {
			["Base"] = {
				[0] = {
					["author"] = "Folosen - 日落沼泽",
					["name"] = "新建脚本 3",
					["code"] = "standby(待命) [ self.aura(昏迷).exists ]\ncatch(抓宠) [ enemy.quality = 4 ]\nif [ round = 1 ]\nuse(#1)\nendif\nif [ round = 2 ]\nchange(next)\nendif\nif [ round > 2 & self.dead ]\nquit(认输) [ self(#1).active ]\nchange(next)\nendif\nif [  enemy.hp > 600 & self.speed.fast ]\nability(#1)\nendif\nability(#3) [ enemy.type = 飞行 &  enemy.hp > 400 ]\nability(#2) [ self.ability(#2).usable ]\nability(#3) [ enemy.type = 飞行 ]\nability(#1)",
				},
			},
			["Rematch"] = {
			},
		},
	},
	["profiles"] = {
		["Default"] = {
		},
	},
}
