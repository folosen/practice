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
