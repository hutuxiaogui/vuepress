(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{213:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"jvm底层原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jvm底层原理","aria-hidden":"true"}},[a._v("#")]),a._v(" JVM底层原理")]),a._v(" "),r("h2",{attrs:{id:"一、jvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、jvm","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、JVM")]),a._v(" "),r("p",[a._v("java虚拟机(java virtual machine，JVM)，一种能够运行java字节码的虚拟机。作为一种编程语言的虚拟机，实际上不只是专用于Java语言，只要生成的编译文件匹配JVM对加载编译文件格式要求，任何语言都可以由JVM编译运行。比如kotlin、scala等。\njvm有很多，不只是Hotspot，还有JRockit、J9等等。")]),a._v(" "),r("h2",{attrs:{id:"二、-jvm的基本结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、-jvm的基本结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、 JVM的基本结构")]),a._v(" "),r("h3",{attrs:{id:"_1-jvm由三个主要的子系统构成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm由三个主要的子系统构成","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. JVM由三个主要的子系统构成")]),a._v(" "),r("ul",[r("li",[a._v("类加载子系统")]),a._v(" "),r("li",[a._v("运行时数据区（内存结构）")]),a._v(" "),r("li",[a._v("执行引擎\n"),r("img",{attrs:{src:"images/JVM-001.png",alt:""}})])]),a._v(" "),r("h3",{attrs:{id:"_2-运行时数据区（内存结构）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行时数据区（内存结构）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 运行时数据区（内存结构）")]),a._v(" "),r("h4",{attrs:{id:"_2-1-方法区（method-area）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-方法区（method-area）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 方法区（Method Area）")]),a._v(" "),r("p",[a._v("类的所有字段和方法字节码，以及一些特殊方法如构造函数，接口代码也在这里定义。简单来说，所有定义的方法的信息都保存在该区域，静态变量+常量+类信息（构造方法/接口定义）+运行时常量池都存在方法区中，虽然Java虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做Non-Heap（非堆），目的应该是为了和Java的堆区分开。")]),a._v(" "),r("h4",{attrs:{id:"_2-2-堆（heap）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-堆（heap）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 堆（Heap）")]),a._v(" "),r("p",[a._v("虚拟机启动时自动分配创建，用于存放对象的实例，几乎所有对象都在堆上分配内存，当对象无法在该空间申请到内存是将抛出OutOfMemoryError异常。同时也是垃圾收集器管理的主要区域。\n"),r("img",{attrs:{src:"images/JVM-002.png",alt:""}})]),a._v(" "),r("h5",{attrs:{id:"_2-2-1-新生代（young-generation）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-新生代（young-generation）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2.1 新生代（Young Generation）")]),a._v(" "),r("p",[a._v("类出生、成长、消亡的区域，一个类在这里产生，应用，最后被垃圾回收器收集，结束生命。\n新生代分为两部分：伊甸区（Eden space）和幸存者区（Survivor space），所有的类都是在伊甸区被new出来的。幸存区又分为From和To区。当Eden区的空间用完是，程序又需要创建对象，JVM的垃圾回收器将Eden区进行垃圾回收（Minor GC），将Eden区中的不再被其它对象应用的对象进行销毁。然后将Eden区中剩余的对象移到From Survivor区。若From Survivor区也满了，再对该区进行垃圾回收，然后移动到To Survivor区。")]),a._v(" "),r("h5",{attrs:{id:"_2-2-2-老年代（old-generation）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-老年代（old-generation）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2.2 老年代（Old Generation）")]),a._v(" "),r("p",[a._v("新生代经过多次GC仍然存货的对象移动到老年区。若老年代也满了，这时候将发生Major GC（也可以叫Full GC），进行老年区的内存清理。若老年区执行了Full GC之后发现依然无法进行对象的保存，就会抛出 OOM（OutOfMemoryError）异常。")]),a._v(" "),r("h5",{attrs:{id:"_2-2-3-元空间（meta-space）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-元空间（meta-space）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2.3 元空间（Meta Space）")]),a._v(" "),r("p",[a._v("在JDK1.8之后，元空间替代了永久代，它是对JVM规范中方法区的实现，区别在于元数据区不在虚拟机当中，而是用的本地内存，永久代在虚拟机当中，永久代逻辑结构上也属于堆，但是物理上不属于。")]),a._v(" "),r("h4",{attrs:{id:"_2-3-栈-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-栈-stack","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 栈(Stack)")]),a._v(" "),r("p",[a._v("Java线程执行方法的内存模型，一个线程对应一个栈，每个方法在执行的同时都会创建一个栈帧（用于存储局部变量表，操作数栈，动态链接，方法出口等信息）不存在垃圾回收问题，只要线程一结束该栈就释放，生命周期和线程一致。")]),a._v(" "),r("h4",{attrs:{id:"_2-4-本地方法栈-native-method-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-本地方法栈-native-method-stack","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 本地方法栈(Native Method Stack)")]),a._v(" "),r("p",[a._v("和栈作用很相似，区别不过是Java栈为JVM执行Java方法服务，而本地方法栈为JVM执行native方法服务。登记native方法，在Execution Engine执行时加载本地方法库。")]),a._v(" "),r("h4",{attrs:{id:"_2-5-程序计数器-program-counter-register"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-程序计数器-program-counter-register","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.5 程序计数器(Program Counter Register)")]),a._v(" "),r("p",[a._v("就是一个指针，指向方法区中的方法字节码（用来存储指向吓一跳指令的地址，也即将要执行的指令代码），由执行引擎读取下一条指令，是一个非常小的内存空间，几乎可以忽略不计。")]),a._v(" "),r("h2",{attrs:{id:"三、jdk性能调优监控工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、jdk性能调优监控工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、JDK性能调优监控工具")]),a._v(" "),r("h3",{attrs:{id:"_1-jinfo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-jinfo","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. Jinfo")]),a._v(" "),r("h4",{attrs:{id:"_1-1-查看jvm的参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看jvm的参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 查看JVM的参数")]),a._v(" "),r("p",[a._v("查看正在运行的Java程序的进程ID")]),a._v(" "),r("div",{staticClass:"language-cmd extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("jps\n")])])]),r("p",[a._v("查看正在运行的Java程序的扩展参数（后面加进程ID）")]),a._v(" "),r("div",{staticClass:"language-cmd extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("jinfo -flags 1769\n")])])]),r("h4",{attrs:{id:"_1-2-查看java系统属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-查看java系统属性","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 查看java系统属性")]),a._v(" "),r("p",[a._v("查看java系统属性（后面加进程ID）")]),a._v(" "),r("div",{staticClass:"language-cmd extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("jinfo -sysprops 1768\n")])])]),r("h3",{attrs:{id:"_2-jstat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-jstat","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. Jstat")]),a._v(" "),r("h3",{attrs:{id:"_3-jmap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-jmap","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. Jmap")]),a._v(" "),r("h4",{attrs:{id:"_3-1-堆的对象统计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-堆的对象统计","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 堆的对象统计")]),a._v(" "),r("h4",{attrs:{id:"_3-2-堆信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-堆信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 堆信息")]),a._v(" "),r("h4",{attrs:{id:"_3-3-堆内存dump"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-堆内存dump","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.3 堆内存dump")]),a._v(" "),r("h3",{attrs:{id:"_4-jstack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-jstack","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.  Jstack")]),a._v(" "),r("h2",{attrs:{id:"四、类加载机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、类加载机制","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、类加载机制")]),a._v(" "),r("h2",{attrs:{id:"五、gc算法和收集器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、gc算法和收集器","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、GC算法和收集器")]),a._v(" "),r("h2",{attrs:{id:"六、调优"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、调优","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、调优")])])}),[],!1,null,null,null);t.default=s.exports}}]);