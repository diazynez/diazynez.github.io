# mc控制器

### 属性

说明：设置或调整人物的默认属性

> ###### effectCtrler

类型：FighterEffectCtrl

说明：人物的effect控制器

使用示例：

```java
var effect = parent.$mc_ctrler.effectCtrler;		//将人物的effect控制器赋值到变量effect
```

### 方法

> ###### addQi

传入参数：qi:Number

返回类型：void

说明：增加气量

使用示例：

```java
parent.$mc_ctrler.addQi(10);
```

> ###### idle

传入参数：frame:String = "站立"

返回类型：void

说明：人物恢复站立状态（在空中则恢复下落状态）

使用示例：

```java
parent.$mc_ctrler.idle();
```

> ###### loop

传入参数：frame:String

返回类型：void

说明：循环播放（效果与gotoAndPlay方法完全相同）

使用示例：

```java
parent.$mc_ctrler.loop("走");
```

> ###### stop

传入参数：无

返回类型：void

说明：停止播放人物动画

使用示例：

```java
parent.$mc_ctrler.stop();
```

> ###### dash

传入参数：speedPlus:Number = 3

返回类型：void

说明：开始冲刺（参数乘人物移动速度为实际速度）

使用示例：

```java
parent.$mc_ctrler.dash(3);
```

> ###### dashStop

传入参数：loseSpdPercent:Number = 0.5

返回类型：void

说明：结束冲刺（参数乘人物移动速度为实际失速度）

使用示例：

```java
parent.$mc_ctrler.dashStop();
```

> ###### setAllAct

传入参数：无

返回类型：void

说明：设定所有地面的动作可执行

使用示例：

```java
parent.$mc_ctrler.setAllAct();
```

> ###### setAirAllAct

传入参数：无

返回类型：void

说明：设定所有空中的动作可执行

使用示例：

```java
parent.$mc_ctrler.setAirAllAct();
```

> ###### setAirMove

传入参数：v:Boolean

返回类型：void

说明：设置空中是否可移动

使用示例：

```java
parent.$mc_ctrler.setAirMove(true);
```

> ###### setMove

传入参数：无

返回类型：void

说明：设置可行走（A和D）

使用示例：

```java
parent.$mc_ctrler.setMove();
```

> ###### setDefense

传入参数：无

返回类型：void

说明：设置可防御（S）

使用示例：

```java
parent.$mc_ctrler.setDefense();
```

> ###### setJump

传入参数：action:String = "跳"

返回类型：void

说明：设置可跳（K）

使用示例：

```java
parent.$mc_ctrler.setJump();
```

> ###### setJumpQuick

传入参数：action:String = "跳"

返回类型：void

说明：设置可快速跳（K）

使用示例：

```java
parent.$mc_ctrler.setJumpQuick();
```

> ###### setJumpDown

传入参数：action:String = "落"

返回类型：void

说明：设置可下台阶（SK）

使用示例：

```java
parent.$mc_ctrler.setJumpDown();
```

> ###### setDash

传入参数：action:String = "瞬步"

返回类型：void

说明：设置可瞬步（L）

使用示例：

```java
parent.$mc_ctrler.setDash();
```

> ###### FVO专用 setDashBack

传入参数：action:String = "起身"

返回类型：void

说明：设置可后撤步（SL）

使用示例：

```java
parent.$mc_ctrler.setDashBack();
```

> ###### setAttack

传入参数：action:String = "砍1"

返回类型：void

说明：设置可攻击（J）

使用示例：

```java
parent.$mc_ctrler.setAttack();
```

> ###### setSkill1

传入参数：action:String = "砍技1"

返回类型：void

说明：设置可技能1（SJ）

使用示例：

```java
parent.$mc_ctrler.setSkill1();
```

> ###### setSkill2

传入参数：action:String = "砍技2"

返回类型：void

说明：设置可技能2（WJ）

使用示例：

```java
parent.$mc_ctrler.setSkill2();
```

> ###### setZhao1

传入参数：action:String = "招1"

返回类型：void

说明：设置可招1（U）

使用示例：

```java
parent.$mc_ctrler.setZhao1();
```

> ###### setZhao2

传入参数：action:String = "招2"

返回类型：void

说明：设置可招2（SU）

使用示例：

```java
parent.$mc_ctrler.setZhao2();
```

> ###### setZhao3

传入参数：action:String = "招3"

返回类型：void

说明：设置可招3（WU）

使用示例：

```java
parent.$mc_ctrler.setZhao3();
```

> ###### setCatch1

传入参数：action:String = "摔1"

返回类型：void

说明：设置可摔1（ADJ）

使用示例：

```java
parent.$mc_ctrler.setCatch1();
```

> ###### setCatch2

传入参数：action:String = "摔2"

返回类型：void

说明：设置可摔2（ADU）

使用示例：

```java
parent.$mc_ctrler.setCatch2();
```

> ###### setBisha

传入参数：action:String = "必杀"  , qi:int = 100

返回类型：void

说明：设置可必杀（I）

使用示例：

```java
parent.$mc_ctrler.setBisha();
```

> ###### setBishaUP

传入参数：action:String = "上必杀" , qi:int = 100

返回类型：void

说明：设置可上必杀（WI）

使用示例：

```java
parent.$mc_ctrler.setBishaUP();
```

> ###### setBishaSUPER

传入参数：action:String = "超必杀" , qi:int = 300

返回类型：void

说明：设置可超必杀（SI）

使用示例：

```java
parent.$mc_ctrler.setBishaSUPER();
```

> ###### setAttackAIR

传入参数：action:String = "跳砍"

返回类型：void

说明：设置可跳砍（KJ）

使用示例：

```java
parent.$mc_ctrler.setAttackAIR();
```

> ###### setSkillAIR

传入参数：action:String = "跳招"

返回类型：void

说明：设置跳招（KU）

使用示例：

```java
parent.$mc_ctrler.setSkillAIR();
```

> ###### setBishaAIR

传入参数：action:String = "空中必杀" , qi:int = 100

返回类型：void

说明：设置可空中必杀（KI）

使用示例：

```java
parent.$mc_ctrler.setBishaAIR();
```

> ###### setWankai

传入参数：action:String = "万解"（3.3改动：无）

返回类型：void

说明：设置可变身（JK）（3.3改动：JK、SJK、WJK）

使用示例：

```java
parent.$mc_ctrler.setWankai();
```

> ###### setTouchFloor

传入参数：action:String = "落地" , breakAct:Boolean

返回类型：void

说明：设定落地的动作（参数1：落地时执行的动作，参数2：接触到地面时是否中断当前动作）

使用示例：

```java
parent.$mc_ctrler.setTouchFloor("跳招2",true);
```

> ###### setHitTarget

传入参数：checker:String , action:String

返回类型：void

说明：设定检测碰撞后攻击（参数1：待检测对象的名称，参数2：碰撞后执行的动作）

使用示例：

```java
parent.$mc_ctrler.setHitTarget("kj10","砍技12");
```

> ###### setHurtAction

传入参数：action:String

返回类型：void

说明：人物被打时执行动作，用于反制技能，注意跳转到的帧处须是无敌状态

使用示例：

```java
parent.$mc_ctrler.setHurtAction("招22");
```

> ###### move

传入参数：x:Number=0,y:Number=0

返回类型：void

说明：持续移动

使用示例：

```java
parent.$mc_ctrler.move(8,0);
```

> ###### movePercent

传入参数：x:Number=0,y:Number=0

返回类型：void

说明：按角色速度的百分比持续移动

使用示例：

```java
parent.$mc_ctrler.movePercent(1,0);
```

> ###### stopMove

传入参数：无

返回类型：void

说明：停止移动

使用示例：

```java
parent.$mc_ctrler.stopMove();
```

> ###### damping

传入参数：x:Number=0,y:Number=0

返回类型：void

说明：设置阻力

使用示例：

```java
parent.$mc_ctrler.damping(0.8,0);
```

> ###### dampingPercent

传入参数：x:Number=0,y:Number=0

返回类型：void

说明：按角色速度的百分比设置阻力

使用示例：

```java
parent.$mc_ctrler.dampingPercent(0.1,0);
```

> ###### endAct

传入参数：无

返回类型：void

说明：清除纽带，使对方AI检测我方角色状态为硬直状态，清除人物的特殊状态

使用示例：

```java
parent.$mc_ctrler.endAct();
```



## 未完待续

