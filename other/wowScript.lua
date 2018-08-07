Dim DX,DY,x,y,x1,y1
Call 注册()//大漠注册
DX=0:DY=0
//下面这个找色坐标根据个人需要自行调节
x=317:y=59:x1=1418:y1=678
Do
dm_ret = dm.FindColor(x,y,x1,y1,"b53a1e-101010",1.0,5,intX1,intY1)
If intX1 >= 0 and intY1 >= 0 Then 
//判断DX,DY等0 就赋值第一次找到的坐标给他们,用来对比判断鱼上钩后的新坐标,最后鼠标还要移动到DX,YD上点击收钩
If DX = 0 or DY = 0 Then DX=intX1:DY=intY1
//设置新的识别范围,新范围是第一次找到的坐标的 附近小范围
x=DX-30:y=DY-30:x1=DX+50:y1=DY+50
//判断第一次的坐标和当前的新坐标,距离差距,如果有鱼上钩鱼漂晃动了一下,新坐标和第一次的坐标就有个距离差
//利用距离差来判断 我测试了一会感觉9比较合适我,如果不合适你 自行改动
If abs(intX1 - DX)>=9 Then 
//鱼漂闪动上钩后的动作 
//右键点第一次的坐标位置(鱼漂)
dm.MoveTo DX+10,DY
Delay 20
dm.RightClick
//重置所有坐标数据 方便下次判断
DX=0:DY=0
x=317:y=59:x1=1418:y1=678
//加点延时 鱼漂有个渐隐过程 
Delay 1000
//鼠标移动到左上角 免得干扰
dm.MoveTo 0,0
Delay 1000
//按1键甩鱼竿
//自己的钓鱼技能放置在哪 就设置那个键
dm.KeyPress 49
Delay 1000
End If
End If
Delay 100
loop

Hwnd = Plugin.Window.Foreground()
Rem a
//按空格 防止自动下线
KeyPress "Space", 1 
Delay 1000
//使用钓鱼技能 ，钓鱼技能拖到1键
KeyPress "1", 1
Delay 2000
//游戏界面找到鱼漂坐标
Call Plugin.FindPicture5_04.FindPicture(0,0,0,1366,768,"f:\钓鱼.bmp",30,0.9,x,y)
If x>=0 And y>=0 Then
//移动鼠标到该坐标
MoveTo x + 40, y + 40
For 1000
//判断鱼上勾，然后作出右键动作，完成钓鱼过程。（注：鱼上勾时，游戏中会有水声，这时可以通过声音设备里的立体音混音判断）
Call Plugin.FindPicture5_04.FindPicture(0,1200,200,1400,300,"f:\声音.bmp",0,0.9,x1,y1)
If x1>=0 And y1>=0 Then
//点击右键
Call Plugin.Bkgnd.RightClick(Hwnd, x + 40, y + 40)
Delay 500
Goto a
End If
Next
Else 
Goto a
End If
            
//自定义            
Dim DX,DY,x,y,x1,y1,sT,eT,tc
//Call 注册()//大漠注册
//------大漠注册-------------------------------------------------------------
//DMPath变量保存的是大漠释放到的文件夹，这个文件夹也会用来放脚本用到的截图等东西。
//同时，大漠在后面还会用的这个文件夹我名字，所以放在变量中方便调用。
DMPath = "d:\DM3\"'注册大漠的文件夹
//
Call 大漠注册D(DMPath)
//------------------
//------大漠注册函数---------------------------------------------------------
//为了使用注册的代码更具有通用性，把注册代码放在函数中。
Function 大漠注册D(sPath)
//在系统中建立大漠释放的文件夹，这个文件夹可以反复建立，再次建立时，里面有有内容不删除
Plugin.File.CreateFolder (sPath)
//将附件中的内容全部复制到刚才建立的文件夹。
PutAttachment sPath, "*.*"
//把RegDll.dll复制到按键精灵的相应文件夹下，这句归抄就行了。
PutAttachment ".\plugin", "RegDll.dll"
//怕万一次注册不成功，就多注册几次，所以用循环注册8次，只要成功就退出循环，不会重复注册
For 8
//这句就是注册命令
Call Plugin.RegDll.Reg(sPath & "dm.dll")
//延时一下，给系统注册的时间
Delay 200
//这句非常关键，是创建大漠的引用。
Set dm = CreateObject("dm.dmsoft")
//dm.ver是大漠的一个命令，它会返回大漠的版本号，如果注册成功，dm.ver就应该大于0
//所以通过dm.ver是否大于0,来判断注册成功与否，
//如果 >0 ,输出版本号，然后退出函数
If dm.ver() >0 Then 
Exit Function
End If
Next
//如果注册了多次都不成功，说明注册失败，既然失败了就退出脚本，运行也没意思了。
TracePrint "注册失败，脚本中止"
EndScript 
End Function

DX=0:DY=0
//下面这个找色坐标根据个人需要自行调节
x = 18 : y = 58 : x1 = 888 : y1 = 494
//时间
sT = int(Plugin.Sys.GetTime()) : eT = int(Plugin.Sys.GetTime())
tc = int(eT - sT)
Do
dm_ret = dm.FindColor(x, y, x1, y1, "9d3316-101010|983216-101010|963216-101010|993317-101010|963216-101010|932813-101010", 1.0, 5, intX1, intY1)
eT = int(Plugin.Sys.GetTime())
tc = int(eT - sT)
If tc >= 22000 Then 
	DX = 0 : DY = 0
	x = 18 : y = 58 : x1 = 888 : y1 = 494
	dm.KeyPress 49
	sT = int(Plugin.Sys.GetTime())
	TracePrint tc
End If
If intX1 >= 0 and intY1 >= 0  Then 
//判断DX,DY等0 就赋值第一次找到的坐标给他们,用来对比判断鱼上钩后的新坐标,最后鼠标还要移动到DX,YD上点击收钩
If DX = 0 or DY = 0 Then DX=intX1:DY=intY1
//设置新的识别范围,新范围是第一次找到的坐标的 附近小范围
x=DX-30:y=DY-30:x1=DX+50:y1=DY+50
//判断第一次的坐标和当前的新坐标,距离差距,如果有鱼上钩鱼漂晃动了一下,新坐标和第一次的坐标就有个距离差
//利用距离差来判断 我测试了一会感觉9比较合适我,如果不合适你 自行改动
If abs(intX1 - DX)>=9 Then 
//鱼漂闪动上钩后的动作 
//右键点第一次的坐标位置(鱼漂)
dm.MoveTo DX+10,DY
Delay 20
dm.RightClick 
Delay 20
dm.MoveTo 888,494
//重置所有坐标数据 方便下次判断
DX=0:DY=0
x = 18 : y = 58 : x1 = 888 : y1 = 494
//加点延时 鱼漂有个渐隐过程

//Delay 1000
//鼠标移动到左上角 免得干扰

Delay 1000
//按1键甩鱼竿
//自己的钓鱼技能放置在哪 就设置那个键
dm.KeyPress 49
sT = int(Plugin.Sys.GetTime())
Delay 1000
End If
End If
Delay 100
loop
