const PAGES={
ch1:`<div class="content-inner">
<div class="breadcrumb"><span onclick="showPage('graph')">知识图谱</span><span class="sep">/</span><span>第1章 编译概述</span></div>
<h1 class="page-title">第1章 编译程序概述</h1>
<p class="page-desc">理解编译器的基本概念、编译过程的五大阶段、前端与后端的设计思想，以及编译器的开发途径与测试方法。</p>

<div class="kp-section">
<div class="kp-header"><div class="icon">1</div><h2>1.1 编译程序与解释程序</h2></div>

<div class="kp-card" id="sub-1-1">
<h3>计算机语言的分类</h3>
<p>计算机语言按层级可分为<strong>低级语言</strong>和<strong>高级语言</strong>：</p>
<table class="data-table">
<tr><th>类别</th><th>特点</th><th>代表</th></tr>
<tr><td>低级语言</td><td>面向机器设计，直接对应硬件指令</td><td>机器指令、汇编指令</td></tr>
<tr><td>高级语言</td><td>面向人设计，描述算法和逻辑</td><td>C、Java、Python</td></tr>
</table>
<p>高级语言进一步分为四大类：</p>
<table class="data-table">
<tr><th>类型</th><th>核心思想</th><th>代表语言</th><th>特点</th></tr>
<tr><td>命令式/过程式</td><td>基于动作的语言，计算机视为动作序列</td><td>Fortran、C、Pascal、Ada</td><td>以冯诺依曼体系为背景，描述解题每一步过程</td></tr>
<tr><td>函数式</td><td>将运算视为数学函数计算，避免状态和可变数据</td><td>LISP、Haskell</td><td>基于λ演算，函数可作参数和返回值，纯函数式程序没有变量，常用递归</td></tr>
<tr><td>逻辑式</td><td>面向演绎推理</td><td>Prolog</td><td>基于逆向规则的演绎推理，1972年由Colmeraner提出</td></tr>
<tr><td>面向对象</td><td>以对象为基本程序结构单位</td><td>Smalltalk、C++、Java</td><td>封装性、多态性、抽象性、继承性</td></tr>
</table>
<p>此外还有<strong>数据库语言</strong>（数据定义与操作）和<strong>命令语言</strong>（控制系统工作，交互式）。</p>
</div>

<div class="kp-card">
<h3>编译程序（Compiler）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>编译程序是将用<strong>高级程序设计语言</strong>书写的程序翻译成逻辑上等价的用<strong>低级语言</strong>（汇编语言或机器语言）书写的程序的<strong>翻译程序</strong>。</p>
</div>
<div class="flow-row">
<div class="flow-box flow-in">源程序<br/><small>*.c / *.pas</small></div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">编译程序</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-out">目标程序<br/><small>*.obj / *.exe</small></div>
</div>
<p><strong>关键特征</strong>：编译和运行是两个独立分开的阶段。不把整个程序全部翻译完成，程序不能开始运行、也不能产生任何结果。</p>
<p>翻译程序（Translator）是把一种语言书写的程序翻译成另一种语言的等价程序的统称。<strong>汇编程序</strong>是翻译程序的一种特例：将汇编语言程序翻译成机器程序。</p>
<p>第一个编译器出现于20世纪50年代后期的FORTRAN语言编译器。</p>
</div>

<div class="kp-card">
<h3>解释程序（Interpreter）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>解释程序是源程序的一个<strong>执行系统</strong>。其工作结果是得到源程序的执行结果，相当于执行源程序的<strong>抽象机</strong>。</p>
</div>
<div class="flow-row">
<div class="flow-box flow-in">源程序</div>
<span class="flow-arrow">+</span>
<div class="flow-box flow-in">数据</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">解释程序</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-out">执行结果</div>
</div>
<p><strong>工作模式</strong>：一个个地获取、分析并执行源程序语句。一旦第一个语句分析结束，源程序便开始运行并且产生结果。特别适合程序员以交互方式工作的情况——希望在获取下一个语句之前了解每个语句的执行结果，允许执行时修改程序。</p>
<p>常见的解释程序包括：BASIC语言解释程序、LISP语言解释程序、UNIX Shell解释程序、数据库查询语言SQL解释程序、Java环境中的BYTECODE解释程序。</p>
</div>

<div class="kp-card">
<h3>编译程序 vs 解释程序 对比</h3>
<table class="data-table">
<tr><th>特性</th><th>编译程序</th><th>解释程序</th></tr>
<tr><td>翻译时机</td><td>运行前把源程序<strong>全部</strong>翻译成目标代码</td><td>边分析边执行，不预先生成目标代码</td></tr>
<tr><td>目标代码</td><td>生成独立的目标程序文件</td><td>不生成独立的目标程序</td></tr>
<tr><td>执行效率</td><td>快（一次编译，多次运行）</td><td>慢（每次运行都需重新分析）</td></tr>
<tr><td>交互性/调试</td><td>差（需完整编译后才能运行）</td><td>好（支持交互式调试，可即时看到结果）</td></tr>
<tr><td>错误发现</td><td>编译阶段集中报告</td><td>执行到错误语句时才报告</td></tr>
<tr><td>空间占用</td><td>运行时仅需目标代码</td><td>解释器和源程序都需驻留内存</td></tr>
</table>
</div>

<div class="kp-card">
<h3>使用编译程序的目的</h3>
<p>编译程序本质上是<strong>程序设计语言到机器语言的转换器</strong>，使得：</p>
<ul>
<li>计算机用户不必考虑与机器有关的繁琐细节（指令系统、寄存器结构）</li>
<li>程序员和程序设计专家可以独立于具体机器进行开发</li>
<li>实现了高级语言的可移植性</li>
</ul>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">2</div><h2>1.2 编译过程概述——五个阶段</h2></div>

<div class="kp-card" id="sub-1-2">
<p>类比自然语言的翻译过程（识别单词→语法检查→语义理解→组织译文），编译过程分为<strong>五个阶段</strong>：</p>
<div class="flow-row">
<div class="flow-box flow-in">源程序</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">①词法分析</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">②语法分析</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">③语义分析<br/>+中间代码</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">④代码优化</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">⑤目标代码</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-out">目标程序</div>
</div>
</div>

<div class="kp-card">
<h3>第一阶段：词法分析（Lexical Analysis）</h3>
<p>词法分析工作由<strong>词法分析器（扫描器/Scanner）</strong>完成。逐个读入源程序字符，按<strong>构词规则</strong>切分成一系列<strong>单词（Token）</strong>。</p>
<p>扫描器输出为等长度的<strong>单词符号（二元式）流</strong>。每个Token表示为<strong>（单词种别，属性值）</strong>。</p>
<p>例如源程序 <code>begin var x: real; x := 0.5; end</code> 经过词法分析后输出：</p>
<pre>($begin, -)  ($var, -)  ($id, x)  ($colon, -)  ($real, -)  ($semi, -)
($id, x)  ($assign, -)  ($num, 0.5)  ($semi, -)  ($end, -)</pre>
<p>主要单词类型：保留字/关键字、标识符、常量、运算符、分界符/分隔符。</p>
</div>

<div class="kp-card">
<h3>第二阶段：语法分析（Syntax Analysis）</h3>
<p>依据语言的<strong>语法规则</strong>，把扫描器提供的单词符号串分解成各种<strong>语法单位</strong>（范畴），如"短语"、"子句"、"句子"乃至"程序"。同时进行语法检查，确定输入串是否正确。</p>
<p>该工作由<strong>语法分析器</strong>完成，输出通常为<strong>语法树</strong>或推导序列。</p>
<p>例如对赋值语句 <code>position := initial + rate * 60</code>，语法分析生成对应的语法树结构。</p>
</div>

<div class="kp-card">
<h3>第三阶段：语义分析与中间代码生成</h3>
<p><strong>语义分析</strong>：审查源程序有无<strong>语义错误</strong>，为代码生成阶段收集类型信息。主要工作包括<strong>类型检查</strong>（如运算对象类型是否相容）。</p>
<p><strong>中间代码生成</strong>：将源程序转换为一种<strong>与机器无关的内部表示形式</strong>。常用的中间代码形式包括：</p>
<ul>
<li><strong>三地址码</strong>：每条指令最多有三个操作数，如 <code>t1 := rate * 60; t2 := initial + t1; position := t2</code></li>
<li><strong>四元式</strong>：（运算符，左操作数，右操作数，结果）</li>
<li>逆波兰表示、树形表示等</li>
</ul>
</div>

<div class="kp-card">
<h3>第四阶段：代码优化（Optimization）</h3>
<p>对前阶段产生的中间代码进行<strong>变换或改造</strong>，使生成的目标代码更为高效（运行更快或占用更少空间）。</p>
<p>优化级别包括：</p>
<ul>
<li><strong>局部优化</strong>：基本块内的优化（如常量合并、删除公共子表达式）</li>
<li><strong>循环优化</strong>：循环不变量外提、强度削弱、删除归纳变量</li>
<li><strong>全局优化</strong>：跨越基本块的数据流分析</li>
</ul>
<p>优化往往需要在各种性能间做平衡（可靠性、编译速度、目标代码运行速度及空间）。</p>
</div>

<div class="kp-card">
<h3>第五阶段：目标代码生成（Target Code Generation）</h3>
<p>把中间代码变换成<strong>特定机器上的低级语言代码</strong>（汇编语言或机器代码）。</p>
<p>关键问题包括：</p>
<ul>
<li><strong>寄存器分配</strong>：如何高效利用有限的寄存器资源</li>
<li><strong>指令选择</strong>：选择最优的机器指令序列</li>
<li>存储管理（变量在内存中的布局）</li>
</ul>
</div>

<div class="kp-card">
<h3>表格管理与表格管理程序</h3>
<p><strong>符号表</strong>记录源程序中使用的名字，收集每个名字的各种属性信息（类型、作用域、存储分配等），贯穿编译的各个阶段。</p>
<p>分类管理可采用分类小表：</p>
<ul>
<li><strong>符号名表（SNT）</strong>：记录标识符及其属性</li>
<li><strong>常数表（CT）</strong>：记录程序中出现的常量</li>
<li><strong>入口表（ENT）</strong>：记录过程/函数的入口信息</li>
<li><strong>标号表（LBT）</strong>：记录标号定义和使用</li>
<li><strong>基本字表（KWT）</strong>：记录关键字/保留字</li>
</ul>
</div>

<div class="kp-card">
<h3>出错处理</h3>
<p>编译过程中发现源程序有错误时，出错处理程序负责<strong>准确报告错误</strong>，并尽可能<strong>从错误中恢复</strong>继续编译。</p>
<p>错误处理的关键挑战：</p>
<ul>
<li>如何准确报告错误位置和性质</li>
<li>如何从错误中恢复过来，避免"瀑布式"错误报告（一个错误引发大量后续伪错误）</li>
<li>错误恢复 vs 错误修复：前者旨在指出错误继续分析，后者试图修复错误程序</li>
</ul>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">3</div><h2>1.3 前端与后端</h2></div>
<div class="kp-card" id="sub-1-3">
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>前端（Front End）</strong>：由主要依赖于<strong>源语言</strong>而与<strong>目标机无关</strong>的阶段组成。包括词法分析、语法分析、语义分析与中间代码生成，以及相关的出错处理和表格管理程序。</p>
<p><strong>后端（Back End）</strong>：依赖于<strong>目标机</strong>而一般不依赖源语言，只与中间代码有关的阶段。包括代码优化和目标代码生成，以及相关的出错处理和表格管理程序。</p>
</div>
<div class="important-box">
<div class="imp-label">优势</div>
<ul>
<li><strong>相同前端 + 不同后端</strong> → 可为不同机器生成同一个语言的编译程序（如GCC支持多种目标架构）</li>
<li><strong>不同前端 + 相同后端</strong> → 可为同一机器生成不同语言的编译程序</li>
</ul>
<p>这种划分大大提高了编译器的<strong>可移植性</strong>和<strong>可重用性</strong>。</p>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">4</div><h2>1.4 遍（Pass）与编译程序的开发</h2></div>
<div class="kp-card" id="sub-1-4">
<h3>遍（Pass/趟）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>遍</strong>：从头到尾扫描（读入并进行处理）源程序一次称为一遍。一个编译过程可由一遍或多遍完成。</p>
</div>
<table class="data-table">
<tr><th></th><th>一遍扫描法</th><th>多遍扫描法（多数编译器采用）</th></tr>
<tr><td><strong>优点</strong></td><td>避免重复工作，编译速度快</td><td>占内存少，逻辑结构清晰，便于优化</td></tr>
<tr><td><strong>缺点</strong></td><td>发生错误时前面工作可能半途而废，算法不清晰，不便于优化</td><td>消耗时间多，编译速度慢</td></tr>
</table>
</div>

<div class="kp-card">
<h3>编译程序的复杂性</h3>
<p>编译程序设计之所以难且复杂的原因：</p>
<ol>
<li><strong>功能步骤多</strong>：涉及词法、语法、语义、优化、代码生成等多个复杂阶段</li>
<li><strong>涉及到语义</strong>：语义分析比语法分析更难形式化</li>
<li><strong>需进行优化</strong>：优化技术复杂且往往相互矛盾</li>
</ol>
<p><strong>元级操作与元程序</strong>：把程序作为操作对象的操作称为元级操作，含有元级操作的程序称为元级程序。编译程序、解释程序、程序转换/分析和调试程序都属于元级程序。</p>
</div>

<div class="kp-card">
<h3>编译程序的设计实现途径</h3>
<table class="data-table">
<tr><th>方法</th><th>说明</th></tr>
<tr><td><strong>自展法（自编译）</strong></td><td>类似于滚雪球。先确定一个非常简单的核心语言L₀，用低级语言写出其编译程序C₀；再把L₀扩充为L₁，用L₀编写L₁的编译程序C₁；如此逐渐扩展。可大大减少开发工作量。</td></tr>
<tr><td><strong>交叉编译</strong></td><td>在机器A上产生机器B的目标代码。用于为目标机（如嵌入式设备）开发编译器。</td></tr>
<tr><td><strong>移植法</strong></td><td>修改现有编译器使其能在新机器上运行。可移植性指程序能较容易地从一台机器搬到另一台机器。</td></tr>
<tr><td><strong>工具法</strong></td><td>使用<strong>编译程序生成器</strong>（Compiler Generator）根据语言规格说明自动产生编译程序。</td></tr>
</table>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">5</div><h2>1.5 测试、维护与应用</h2></div>
<div class="kp-card" id="sub-1-5">
<h3>编译程序的测试与维护</h3>
<ul>
<li>测试工作非常重要，因为编译器的可靠性直接影响所有用它编译的程序</li>
<li>测试主要靠<strong>人工和经验</strong></li>
<li><strong>回归测试法</strong>：保存一套适当的测试程序，保证改动后的版本编译产生的目标程序与原版本一致</li>
<li>维护原则：好的程序结构和好的文档</li>
</ul>

<h3>编译技术的应用</h3>
<p>编译方法与技术有着广泛应用，课程所涉及的内容至今非常活跃：</p>
<ul>
<li><strong>自然语言的翻译</strong>：机器翻译借鉴编译技术</li>
<li><strong>软件移植</strong>：通过交叉编译实现</li>
<li><strong>网络安全</strong>：协议分析、入侵检测</li>
<li><strong>形式化方法</strong>：程序验证</li>
<li><strong>形式语义学</strong>：程序含义的数学描述</li>
<li><strong>语言结构化编辑器</strong>、<strong>程序调试工具</strong>、<strong>高级语言转换工具</strong>、<strong>并行编译技术</strong></li>
</ul>
</div>
</div>
</div>`,

// ============================================================
// CHAPTER 3 - LEXICAL ANALYSIS
// ============================================================
ch3:`<div class="content-inner">
<div class="breadcrumb"><span onclick="showPage('graph')">知识图谱</span><span class="sep">/</span><span>第3章 词法分析</span></div>
<h1 class="page-title">第3章 词法分析</h1>
<p class="page-desc">学习单词的描述技术（正规表达式）、识别机制（有限自动机NFA/DFA）及词法分析器的自动构造原理（LEX）。</p>

<div class="kp-section">
<div class="kp-header"><div class="icon">1</div><h2>3.1 词法分析概述</h2></div>

<div class="kp-card" id="sub-3-1">
<h3>什么是词法分析程序？</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>词法分析程序（Lexical Analyzer / Scanner / 扫描器）</strong>：逐个读入源程序的字符，按照<strong>构词规则</strong>切分成一系列<strong>单词（Token）</strong>。单词是语言中具有<strong>独立意义的最小单位</strong>。</p>
</div>
<p>TOKEN通常表示为<strong>二元组（单词种别，属性值）</strong>。如果一个种别只含一个单词符号，则用种别标识即可，否则还应给出属性值。</p>
<p><strong>词法分析器的结构</strong>：源程序 → 预处理子程序 → 输入缓冲区 → 扫描器/扫描缓冲区 → 单词符号流</p>
</div>

<div class="kp-card">
<h3>单词的五大分类</h3>
<table class="data-table">
<tr><th>类型</th><th>说明</th><th>示例</th></tr>
<tr><td><strong>保留字/关键字</strong></td><td>语言预定义的具有特殊含义的标识符</td><td>if, while, return, int, float</td></tr>
<tr><td><strong>标识符</strong></td><td>用户定义的变量名、函数名等</td><td>x, count, maxValue</td></tr>
<tr><td><strong>常量</strong></td><td>程序中直接书写的常数值</td><td>3.14, 100, "hello"</td></tr>
<tr><td><strong>运算符</strong></td><td>表示运算操作的符号</td><td>+, -, *, /, =, ==, &lt;=</td></tr>
<tr><td><strong>分界符/分隔符</strong></td><td>用于分隔程序元素的符号</td><td>; , ( ) { }</td></tr>
</table>
</div>

<div class="kp-card">
<h3>词法分析程序的任务</h3>
<p><strong>主要任务</strong>：</p>
<ol>
<li>读源程序</li>
<li>产生独立的单词符号</li>
</ol>
<p><strong>其他任务</strong>：</p>
<ul>
<li>滤掉空格、跳过分隔符</li>
<li>跳过注释、换行符</li>
<li>追踪换行标志，复制出错源程序</li>
<li>宏展开</li>
</ul>
</div>

<div class="kp-card">
<h3>词法分析的两种组织方式</h3>
<table class="data-table">
<tr><th>方式</th><th>说明</th><th>特点</th></tr>
<tr><td><strong>独立一遍</strong></td><td>词法分析程序完整执行，产生TokenList，再交给语法分析程序</td><td>耗费额外时间和空间</td></tr>
<tr><td><strong>子程序模式</strong>（更常用）</td><td>语法分析程序调用（Call）词法分析程序来获得当前Token</td><td>按需获取Token，更高效</td></tr>
</table>
</div>

<div class="kp-card">
<h3>预处理</h3>
<p><strong>输入缓冲区</strong>：输入串放在一个缓冲区中，好处包括：</p>
<ul>
<li>加快读入源程序字符序列的速度</li>
<li>缓冲区大小设为扇区倍数，保证一次I/O次数尽可能少</li>
<li>设置半区（前半区工作区+后半区），方便处理超前搜索</li>
</ul>
<p><strong>预处理内容</strong>：预先处理制表符（删除）、回车换行符（记录）、空白符（合并）等。</p>
</div>

<div class="kp-card">
<h3>向前看多个字符的处理</h3>
<p>某些语言需要<strong>超前搜索（Lookahead）</strong>才能正确识别单词：</p>
<ul>
<li><strong>FORTRAN</strong>：如 <code>DO10I=1,100</code>（循环语句）与 <code>DO10I=1.100</code>（赋值语句），必须看到逗号或小数点才能区分</li>
<li><strong>Pascal</strong>：如 <code>10..100</code>（子界范围）与 <code>10.100</code>（实数），需要向前看两个字符</li>
</ul>
</div>

<div class="kp-card">
<h3>括号类配对预检</h3>
<p>词法分析阶段可以进行括号配对的预检：</p>
<ul>
<li>例如 <code>begin...end</code>、<code>record...end</code>、<code>if...then</code> 的配对检查</li>
<li>本属语法检查的范围，为何在词法分析阶段进行？<br/>
  <strong>原因</strong>：如果出错，对语法检查报错可能是致命的（如if语句缺少then）；配对检查不复杂；采用计数器方法（遇到左边+1，右边-1，扫描结束不为0则出错）。这是编译速度和可靠性的折衷。</li>
</ul>
</div>

<div class="kp-card">
<h3>词法错误校正与结束</h3>
<p><strong>能发现的错误</strong>：语言不允许的错误符号（如出现$、@等非法字符）。</p>
<p><strong>错误处理原则</strong>：发现错误后不是立即停止，而是想办法继续分析。校正办法包括：</p>
<ol>
<li>删除缓冲区中所有字符，开始扫描下面的字符</li>
<li>删除刚才读过的一个字符，开始扫描下面的字符</li>
</ol>
<p><strong>词法分析的结束标志</strong>：</p>
<ul>
<li>程序结束符 <code>.</code>（dot，如果输错则产生误结束）</li>
<li>文件结束符 <strong>Eof</strong>（End of File）</li>
</ul>
</div>

<div class="kp-card">
<h3>简单的词法分析器示例——C语言子集</h3>
<p>C语言子集的单词符号包括：标识符id、整数num、运算符（+、-、*、/、=、&lt;、&gt;等）、分界符（;、(、)、{、}等）。</p>
<p>词法分析可用<strong>状态转换图</strong>来描述：从初态出发，根据读入字符转移到不同状态，到达终态即识别出一个单词。</p>
<p>状态转换图的程序实现对应关系：</p>
<ul>
<li>初态 → 程序的开始</li>
<li>终态 → 程序的结束（返回语句）</li>
<li>状态转移 → 分支语句（if/case）或条件语句</li>
<li>转换图中的环 → 循环语句（while）</li>
</ul>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">2</div><h2>3.2 正规表达式与正规集</h2></div>

<div class="kp-card" id="sub-3-2">
<h3>基础概念</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>字母表Σ</strong>：非空有限集，其中的元素称为<strong>符号</strong>或<strong>字母</strong>。如 Σ={a,b,c} 或辅助字母表 Γ={∅, ε, |, *, (, )}。</p>
<p><strong>符号串（字）</strong>：符号的有限序列。符号串也称为字，其长度用 |α| 表示。如 a, cda, (cda)* 等。</p>
<p><strong>空符号串</strong>：用 λ 或 <strong>ε</strong> 表示，不包含任何字符，|ε|=0。</p>
</div>
<div class="important-box">
<div class="imp-label">重要区分</div>
<table class="data-table">
<tr><th>符号</th><th>含义</th><th>说明</th></tr>
<tr><td><strong>ε</strong></td><td>空串</td><td>一个特殊的字符串，长度为0</td></tr>
<tr><td><strong>∅ 或 {}</strong></td><td>空集</td><td>不含任何元素的集合，连ε也没有</td></tr>
<tr><td><strong>{ε}</strong></td><td>含空串的集合</td><td>含有1个元素（即空串）的集合</td></tr>
</table>
<p>注意：<strong>{ε} ≠ ∅</strong>。{ε}是由空字组成的集合，{}表示不含任何字的集合。</p>
</div>
</div>

<div class="kp-card">
<h3>符号串的基本运算</h3>
<table class="data-table">
<tr><th>运算</th><th>记号</th><th>定义</th><th>示例</th></tr>
<tr><td><strong>连接</strong></td><td>αβ 或 AB</td><td>前后串首尾拼接</td><td>ab是a与b的连接</td></tr>
<tr><td><strong>方幂</strong></td><td>Aⁿ</td><td>n个A自身连接，A⁰={ε}</td><td>设A={a,b}, A²={aa,ab,ba,bb}</td></tr>
<tr><td><strong>正闭包</strong></td><td>A⁺</td><td>A¹∪A²∪A³∪…（1次或以上）</td><td>{a,b,aa,ab,ba,bb,aaa,…}</td></tr>
<tr><td><strong>星闭包（Kleene闭包）</strong></td><td>A*</td><td>A⁰∪A¹∪A²∪…（0次或以上）</td><td>{ε,a,b,aa,ab,ba,bb,aaa,…}</td></tr>
</table>
<p>关系：A* = A⁰ ∪ A⁺ = {ε} ∪ A⁺，即星闭包比正闭包多了空串。</p>
<p>示例：若 Σ={a,b}，则 Σ* = {ε, a, b, aa, ab, ba, bb, aaa, aab, ...}（所有由a和b组成的有限长度字符串，包括空串）。</p>
</div>

<div class="kp-card">
<h3>正规表达式的递归定义</h3>
<div class="def-box">
<div class="def-label">定义（正规表达式与正规集）</div>
<p>设Σ为字母表，Σ上的正规表达式及其表示的正规集递归定义如下：</p>
<ol>
<li><strong>基础</strong>：ε和∅都是Σ上的正规表达式，它们所表示的正规集分别为 <strong>{ε}</strong> 和 <strong>{}</strong>（即∅）</li>
<li><strong>单符号</strong>：对于任何 a∈Σ，a是Σ上的正规表达式，它所表示的正规集为 <strong>{a}</strong></li>
<li><strong>组合</strong>：假定U和V都是Σ上的正规表达式，它们所表示的正规集分别为L(U)和L(V)，那么：
<ul>
<li><strong>(U)</strong>：正规集为 L(U)</li>
<li><strong>U|V</strong>（并/选择）：正规集为 L(U)∪L(V)</li>
<li><strong>UV</strong>（连接）：正规集为 L(U)L(V)</li>
<li><strong>U*</strong>（Kleene闭包）：正规集为 (L(U))*</li>
</ul></li>
<li><strong>限制</strong>：仅由有限次使用上述三步骤而定义的表达式才是Σ上的正规表达式，仅由这些正规表达式所表示的集合才是Σ上的<strong>正规集</strong>。</li>
</ol>
</div>
</div>

<div class="kp-card">
<h3>正规表达式示例</h3>
<p>令 Σ={a,b}：</p>
<table class="data-table">
<tr><th>正规表达式</th><th>正规集</th><th>说明</th></tr>
<tr><td>a</td><td>{a}</td><td>只含单个a</td></tr>
<tr><td>a|b</td><td>{a, b}</td><td>a或b</td></tr>
<tr><td>ab</td><td>{ab}</td><td>先a后b</td></tr>
<tr><td>(a|b)(a|b)</td><td>{aa, ab, ba, bb}</td><td>长度为2的任意a,b串</td></tr>
<tr><td>a*</td><td>{ε, a, aa, aaa, ...}</td><td>任意个a（包括0个）</td></tr>
<tr><td>(a|b)*</td><td>{ε, a, b, aa, ab, ba, bb, ...}</td><td>所有由a和b组成的串</td></tr>
<tr><td>(a|b)*(aa|bb)(a|b)*</td><td>所有含两个相继a或两个相继b的串</td><td>中间强制出现aa或bb</td></tr>
</table>
</div>

<div class="kp-card">
<h3>算符优先与代数性质</h3>
<p><strong>算符优先顺序</strong>（从高到低）：<strong>*（闭包）</strong> > <strong>连接</strong> > <strong>|（选择）</strong></p>
<p>例如：a|bc* 等价于 a|(b(c*))</p>
<div class="theorem-box">
<div class="thm-label">正规表达式的代数性质</div>
<p>设r,s,t均为正规表达式：</p>
<table class="data-table">
<tr><th>性质</th><th>表达式</th></tr>
<tr><td>"|"交换律</td><td>r|s = s|r</td></tr>
<tr><td>"|"结合律</td><td>r|(s|t) = (r|s)|t</td></tr>
<tr><td>"连接"结合律</td><td>(rs)t = r(st)</td></tr>
<tr><td>"连接"对"|"的分配律</td><td>r(s|t) = rs|rt； (s|t)r = sr|tr</td></tr>
<tr><td>ε是连接恒等元</td><td>εr = rε = r</td></tr>
<tr><td>幂的等价性</td><td>r** = r*（闭包的闭包等于自身）</td></tr>
</table>
</div>
</div>

<div class="kp-card">
<h3>等价正规表达式</h3>
<p>若两个正规表达式e₁和e₂所表示的正规集相同，则说e₁和e₂<strong>等价</strong>，写作 e₁ = e₂。</p>
<p>示例：</p>
<ul>
<li>(a|b) = (b|a)　<span class="tag tag-blue">交换律</span></li>
<li>b(ab)* = (ba)*b　<span class="tag tag-blue">循环移位</span></li>
<li>(a|b)* = (a*|b*)*　<span class="tag tag-blue">闭包等价</span></li>
</ul>
</div>

<div class="kp-card">
<h3>例题3.1：标识符的正规表达式</h3>
<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">令Σ={l,d}，写出标识符的正规表达式</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>r = l(l|d)*</strong></p>
<p>其中 l 代表字母，d 代表数字。</p>
<p><strong>解析</strong>：标识符的规则是"字母打头的字母数字串"。</p>
<ul>
<li>l — 第一个字符必须是字母</li>
<li>(l|d)* — 后面可以跟随零个或多个字母或数字</li>
</ul>
<p>对应的正规集为：{l, ll, ld, ldd, lll, lld, ...}，这正是Pascal和多数程序设计语言允许的标识符词法规则。</p>
</div>
</div>
</div>

<div class="kp-card">
<h3>例题3.2：无符号数的正规表达式</h3>
<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">令Σ={d,.,e,+,-}，写出无符号数的正规表达式</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>d*(.dd*|ε)(e(+|-|ε)dd*|ε)</strong></p>
<p>其中 d 为0~9的数字。</p>
<p><strong>解析</strong>：分解为三部分（每部分可选）：</p>
<ul>
<li><strong>d*</strong> — 整数部分（零个或多个数字，允许不写整数如.5）</li>
<li><strong>(.dd*|ε)</strong> — 小数部分（可选）：小数点后至少一位数字</li>
<li><strong>(e(+|-|ε)dd*|ε)</strong> — 指数部分（可选）：e后跟可选符号和至少一位数字</li>
</ul>
<p>程序设计语言的单词都能用正规表达式来定义。</p>
</div>
</div>
</div>

<div class="kp-card">
<h3>例题3.3：日期格式的正规表达式</h3>
<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">三种日期格式：年.月.日（1992.08.12）、日月年（12 08 1992）、月/日/年（08/12/1992），写出描述日期的正规式</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<pre>digit  = [0-9]               // 表示 0|1|2|3|4|5|6|7|8|9
year   = [1-9] digit digit digit
month  = 0[1-9] | 1[0-2]     // 01~09 或 10~12
day    = 0[1-9] | [1-2][0-9] | 3[0-1]   // 01~09, 10~29, 30~31
date1  = year . month . day
date2  = day month year
date3  = month / day / year
date   = date1 | date2 | date3</pre>
<p><strong>解析</strong>：先定义基本组件（digit、year、month、day），确保month在01~12之间、day在01~31之间，再组合成三种格式，最后用"|"连接。</p>
</div>
</div>
</div>

<div class="kp-card">
<h3>课后练习</h3>
<div class="example-box">
<div class="ex-label">作业</div>
<div class="ex-title">写出下述语言的正规式描述</div>
<ol>
<li>每个a后边至少紧随两个b的a、b串。 <strong>提示：(b|abb)* 中的 a 后面必须跟 bb+</strong></li>
<li>C的形如 /* … */ 的注释。其中…代表不含*/的字符串。 <strong>提示：使用"非*/的任意字符"技巧：/\*([^*]|\*[^/])*\*/</strong></li>
<li>Pascal类定点10进制小数，前后没有多余的0。例如0.0, 0.123, 123005.0合法；00.0, 00123.456000, 001.00非法。 <strong>提示：分情况处理前导0和末尾0</strong></li>
</ol>
</div>
</div>
</div>
`+

// Continue PAGES.ch3
`
<div class="kp-section">
<div class="kp-header"><div class="icon">3</div><h2>3.3 有限自动机（FA）</h2></div>

<div class="kp-card" id="sub-3-3">
<h3>有限自动机的直观理解</h3>
<p><strong>有限自动机（Finite Automaton）</strong>是一种<strong>识别装置</strong>，它能准确地识别正规集，即正规表达式所能表达的语言。有限自动机分为两类：</p>
<ul>
<li><strong>确定有限自动机（DFA）</strong>：Deterministic Finite Automaton</li>
<li><strong>不确定有限自动机（NFA）</strong>：Non-deterministic Finite Automaton</li>
</ul>
</div>

<div class="kp-card">
<h3>DFA 五元组定义</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>DFA M = (Σ, SS, S₀, Φ, Z)，其中：</p>
<ul>
<li><strong>Σ</strong>：输入字母表（非空有限集）</li>
<li><strong>SS</strong>：有限状态集合</li>
<li><strong>S₀∈SS</strong>：初始状态（<strong>唯一</strong>）</li>
<li><strong>Φ</strong>：状态转换函数，SS×Σ→SS（<strong>单值映射</strong>：从一个状态出发，读入一个符号，转移到唯一确定的下一状态）</li>
<li><strong>Z⊆SS</strong>：终态集合（可以有一个或多个）</li>
</ul>
</div>
<p><strong>示例</strong>：设DFA M=({0,1}, {S,A,B}, S, Φ, {B})，其中转换函数为：Φ(S,0)=A, Φ(S,1)=B, Φ(A,0)=B, Φ(A,1)=A, Φ(B,0)=B, Φ(B,1)=B。则M识别所有以01结尾的串。</p>
</div>

<div class="kp-card">
<h3>DFA的表示方法</h3>
<p><strong>方法一：状态转换图</strong></p>
<p>用有向图表示，结点代表状态，有向弧代表状态转移，弧上的标记代表输入符号。</p>
<ul>
<li>初始状态：用"出发箭头"或特别标记指出</li>
<li>终态：用<strong>双线圆圈</strong>或<strong>加粗圆圈</strong>标出</li>
<li>其他状态：单线圈</li>
</ul>

<p><strong>方法二：状态转换表（矩阵表示）</strong></p>
<p>用二维矩阵表示，行对应状态，列对应输入符号，矩阵元素表示转移目标状态。优点是计算机处理方便。</p>
</div>

<div class="kp-card">
<h3>NFA 五元组定义</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>NFA N = (Σ, SS, S₀, Φ, Z)，其中：</p>
<ul>
<li>与DFA的区别主要在于<strong>转换函数Φ</strong>：<strong>Φ：SS×Σ→2<sup>SS</sup></strong>（状态的<strong>幂集</strong>），即从一个状态读入一个符号可能转移到<strong>多个状态</strong></li>
<li>NFA允许<strong>ε转移</strong>（ε-move）：不读入任何输入符号就进行状态转移</li>
<li>NFA可以有<strong>多个初态</strong></li>
</ul>
</div>
</div>

<div class="kp-card">
<h3>DFA与NFA的关键区别</h3>
<table class="data-table">
<tr><th>特性</th><th>DFA</th><th>NFA</th></tr>
<tr><td>状态转移</td><td>确定性（一个输入对应<strong>唯一</strong>下一状态）</td><td>非确定性（一个输入可能对应<strong>多个</strong>下一状态）</td></tr>
<tr><td>ε转移</td><td>不允许</td><td>允许</td></tr>
<tr><td>初态数量</td><td>唯一</td><td>可不唯一</td></tr>
<tr><td>转移函数值域</td><td>SS（单个状态）</td><td>2<sup>SS</sup>（状态的集合）</td></tr>
<tr><td>识别能力</td><td colspan="2"><strong>等价！</strong>识别相同的语言类（正规集）</td></tr>
<tr><td>实现难度</td><td>容易（直接模拟）</td><td>难（需回溯/试探）</td></tr>
</table>
<div class="important-box">
<div class="imp-label">NFA的弱点</div>
<p>用NFA识别输入序列时，需要<strong>尝试所有可能的路径</strong>才能确定一个输入不被接收，带来<strong>回溯问题</strong>，效率低下。因此实际中通常将NFA转换为DFA使用。</p>
</div>
</div>

<div class="kp-card">
<h3>由正规表达式构造NFA</h3>
<div class="theorem-box">
<div class="thm-label">Thompson构造法（语法制导法）</div>
<p>对正规表达式进行语法分析，分解出构成表达式时使用的语法规则，然后根据规则构造出NFA。具体方法：</p>
<table class="data-table">
<tr><th>正规表达式R</th><th>对应的NFA结构</th></tr>
<tr><td>ε</td><td>初态 --ε--> 终态（一条ε弧）</td></tr>
<tr><td>∅</td><td>初态（无转移）终态（无法识别任何串）</td></tr>
<tr><td>单个符号 x</td><td>初态 --x--> 终态（一条x弧）</td></tr>
<tr><td>R1|R2（选择）</td><td>新初态分别ε转移到R1和R2的初态，它们的终态分别ε转移到新终态</td></tr>
<tr><td>R1R2（连接）</td><td>R1的终态ε连接到R2的初态</td></tr>
<tr><td>R1*（闭包）</td><td>新初态ε到新终态（允许选0次）；同时新初态ε到R1初态，R1终态ε回R1初态（循环），R1终态ε到新终态</td></tr>
</table>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">4</div><h2>3.4 NFA到DFA的转换（子集法）</h2></div>

<div class="kp-card" id="sub-3-4">
<div class="theorem-box">
<div class="thm-label">等价性定理</div>
<p>对每个NFA N，一定存在一个DFA M，使得L(M)=L(N)。即NFA与DFA<strong>等价</strong>，但与某一NFA等价的DFA<strong>不唯一</strong>。</p>
</div>
<p><strong>核心思想</strong>：DFA的每一个状态对应NFA的<strong>一组状态</strong>，用DFA的状态去记录在NFA读入一个输入符号后可能达到的所有状态。</p>
</div>

<div class="kp-card">
<h3>两个关键运算</h3>
<div class="def-box">
<div class="def-label">1. ε-closure(I) — ε闭包</div>
<p>包括状态集I中的任何状态S，以及从S经<strong>任意条ε弧</strong>能到达的<strong>所有状态</strong>。</p>
</div>
<div class="def-box">
<div class="def-label">2. moveset(I,a) — a弧转换</div>
<p>从I中的某一状态经<strong>一条a弧</strong>而到达的所有状态的集合。</p>
</div>
<p><strong>新状态的计算</strong>：对当前状态集I和输入符号a，新状态 = <strong>ε-closure(moveset(I,a))</strong></p>
</div>

<div class="kp-card">
<h3>子集法算法步骤</h3>
<div class="algo-box">
<div class="algo-label">子集构造算法</div>
<ol>
<li>开始，令 <strong>ε-closure(K₀)</strong> 为C中唯一成员（未被标记），其中K₀是NFA的初态集</li>
<li><strong>while</strong> C中存在尚未被标记的子集Ci do
<ul>
<li>标记 Ci</li>
<li><strong>for</strong> 每个输入字母 a do
<ul>
<li>Cj := ε-closure(moveset(Ci,a))</li>
<li>if Cj 不在C中 then 将Cj作为未标记的子集加入C</li>
</ul></li>
</ul></li>
<li>建立<strong>状态转换表</strong>：每行一个Ci，每列一个输入符号a，元素为Cj</li>
<li><strong>终态判定</strong>：包含原NFA任一终态的DFA状态即为DFA的<strong>终态</strong></li>
</ol>
</div>
<p><strong>复杂度</strong>：DFA的状态数最坏可达2<sup>n</sup>（n为NFA状态数），但在实际中很少出现这种情况。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">5</div><h2>3.5 DFA最小化</h2></div>

<div class="kp-card" id="sub-3-5">
<div class="def-box">
<div class="def-label">最小状态DFA的含义</div>
<ol>
<li><strong>没有多余状态（死状态）</strong>：从初态出发任何输入串都到达不了的状态，或从该状态没有通路到达终态</li>
<li><strong>没有两个状态互相等价（不可区别）</strong></li>
</ol>
</div>
</div>

<div class="kp-card">
<h3>等价状态的定义</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>两个状态s和t等价，需满足：</p>
<ul>
<li><strong>兼容性（Consistency）</strong>：同是终态或同是非终态</li>
<li><strong>传播性（Propagation）</strong>：从s出发读入任意a和从t出发读入a到达的状态仍然等价</li>
</ul>
</div>
</div>

<div class="kp-card">
<h3>最小化方法</h3>
<p><strong>方法一：合并法（C-划分法）</strong></p>
<ol>
<li>先把状态集分为两个子集：<strong>终态组</strong>和<strong>非终态组</strong></li>
<li>在<strong>同组</strong>中寻找等价状态进行合并</li>
<li>状态等价的判别：对同一组中的两个状态，若对<strong>每一个输入符号</strong>，它们都转换到<strong>同一组</strong>中，则等价；若存在某个输入符号使它们转移到不同组，则不等价</li>
<li>反复进行，直到不能再合并为止</li>
</ol>

<p><strong>方法二：状态分离法（划分法）</strong></p>
<p>把状态集分成<strong>不相交的子集</strong>，使得同一子集中的状态等价，不同子集中的状态可区别。若对某组中两个状态，存在某个输入符号使它们转移到不同组，则这两个状态不等价，需<strong>分离</strong>。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">6</div><h2>3.6 正规表达式与有限自动机的等价转换</h2></div>

<div class="kp-card" id="sub-3-6">
<div class="theorem-box">
<div class="thm-label">等价性定理（双向）</div>
<p><strong>1.</strong> 对于Σ上的NFA N，可以构造Σ上的正规表达式R，使得L(R)=L(N)</p>
<p><strong>2.</strong> 对于Σ上的正规表达式R，可以构造Σ上的NFA N，使得L(N)=L(R)</p>
</div>
</div>

<div class="kp-card">
<h3>NFA → 正规表达式（消结法/状态消去法）</h3>
<p>通过对NFA的状态转换图进行<strong>结点的消除</strong>，逐步合并弧上的正规表达式，最终得到从初态到终态的正规表达式。</p>
<p><strong>算法步骤</strong>：</p>
<ol>
<li>在NFA的状态转换图上加两个新结点X和Y
<ul>
<li>X用ε弧连接所有<strong>初态</strong></li>
<li>所有<strong>终态</strong>用ε弧连接Y</li>
</ul></li>
<li>逐步消去N'中的所有中间结点，直至只剩X和Y</li>
<li>X到Y弧上的标记即为所求的正规表达式</li>
</ol>
<p><strong>消结规则</strong>：串联(R1R2)、并联(R1|R2)、自环(R1R2*R3)</p>
</div>

<div class="kp-card">
<h3>综合例题：1(0|1)*101</h3>
<div class="example-box">
<div class="ex-label">综合例题</div>
<div class="ex-title">已知正规表达式R=1(0|1)*101，构造与其等价的最简DFA。</div>
<div class="ex-solution">
<div class="ex-sol-label">完整解答步骤</div>
<p><strong>Step 1：由正规表达式构造NFA</strong></p>
<p>使用Thompson构造法，为R=1(0|1)*101构造NFA N。</p>
<p><strong>Step 2：将NFA N确定化为DFA M</strong></p>
<p>使用子集法：</p>
<ol>
<li>计算 ε-closure(初态) 作为M的初始状态S₀</li>
<li>对每个新状态和每个输入符号，计算 ε-closure(moveset(I,a))</li>
<li>直到没有新状态产生</li>
</ol>
<p><strong>Step 3：DFA M最小化</strong></p>
<ol>
<li>把状态集分为终态组和非终态组</li>
<li>检查各组内状态是否可区别</li>
<li>合并等价状态，得到最小DFA M'</li>
</ol>
<p>最终得到的最简DFA即为所求。</p>
</div>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">7</div><h2>3.7 由DFA构造词法分析器</h2></div>

<div class="kp-card" id="sub-3-7">
<h3>两类词法分析器</h3>
<table class="data-table">
<tr><th>特性</th><th>表驱动型</th><th>直接编码型</th></tr>
<tr><td>分析器速度</td><td>较慢（需查表）</td><td>较快</td></tr>
<tr><td>与构词规则关系</td><td>无关（数据与操作分离）</td><td>密切相关</td></tr>
<tr><td>分析器规模</td><td>较大</td><td>较小</td></tr>
<tr><td>适合编写方式</td><td>工具自动生成</td><td>手工编写</td></tr>
</table>
</div>

<div class="kp-card">
<h3>LEX词法分析器生成器</h3>
<div class="def-box">
<div class="def-label">LEX概述</div>
<p><strong>LEX</strong>是1972年由贝尔实验室M.E.Lesk等人开发的词法分析器自动生成工具。它接受<strong>正规表达式形式的规格说明</strong>，产生对应语言的词法分析器。</p>
</div>
<p><strong>LEX的工作流程</strong>：</p>
<div class="flow-row">
<div class="flow-box flow-in">正规表达式<br/>规格说明</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">LEX<br/>编译程序</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">NFA<br/>(Thompson)</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">DFA<br/>(子集法)</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-proc">最小化DFA</div>
<span class="flow-arrow">→</span>
<div class="flow-box flow-out">词法分析<br/>器C代码</div>
</div>
<p>LEX编译程序的<strong>内部工作过程</strong>：</p>
<ol>
<li>对每条正规表达式Pᵢ构造NFA Nᵢ，然后合并所有Nᵢ得到N</li>
<li>用<strong>子集法</strong>将N转换为DFA M</li>
<li>对M进行<strong>状态最小化</strong></li>
<li>根据最小化DFA构造<strong>分析表</strong></li>
</ol>
</div>
</div>
</div>`,

// ============================================================
// CHAPTER 4 - SYNTAX ANALYSIS
// ============================================================
ch4:`<div class="content-inner">
<div class="breadcrumb"><span onclick="showPage('graph')">知识图谱</span><span class="sep">/</span><span>第4章 文法与语法分析</span></div>
<h1 class="page-title">第4章 文法与语法分析</h1>
<p class="page-desc">学习文法的形式定义、Chomsky分类体系、上下文无关文法、自上而下和自下而上的语法分析方法。</p>

<div class="kp-section">
<div class="kp-header"><div class="icon">1</div><h2>4.1 文法的直观概念</h2></div>

<div class="kp-card" id="sub-4-1">
<h3>什么是文法？</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>文法</strong>：一种描述语言语法结构的形式规则，用<strong>有限的规则</strong>把语言的全部句子（可能为无限）描述出来。即<strong>无穷句子的有穷表示</strong>。</p>
</div>
<p>判断句子结构合法与否的依据就是文法。</p>
</div>

<div class="kp-card">
<h3>自然语言文法示例</h3>
<p>描述"我是大学生"的构成规则：</p>
<pre>
句子 → 主语 谓语 宾语
主语 → 代词 | 名词
代词 → 我 | 你 | 他
名词 → 王明 | 大学生 | 工人 | 英语
谓语 → 动词
动词 → 是 | 学习
宾语 → 代词 | 名词
</pre>
<p><strong>结论</strong>："我是大学生"符合上述规则（合法），"我大学生是"不符合上述规则（非法）。文法就是判别句子结构合法与否的依据。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">2</div><h2>4.2 文法的形式定义</h2></div>

<div class="kp-card" id="sub-4-2">
<h3>文法的四元组表示</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>文法 G = (V<sub>N</sub>, V<sub>T</sub>, P, S)，其中：</p>
<ul>
<li><strong>V<sub>N</sub></strong>：非终结符号集合（Non-terminals），用大写字母或尖括号括起的助记符表示，如 &lt;句子&gt;、E、T、F</li>
<li><strong>V<sub>T</sub></strong>：终结符号集合（Terminals），用小写字母或具体符号表示，如 a、b、+、*、(、)、id</li>
<li><strong>P</strong>：产生式（Production/规则）集合，形如 α→β</li>
<li><strong>S∈V<sub>N</sub></strong>：开始符号（Start Symbol），至少要在一条产生式左部出现</li>
<li>条件：<strong>V<sub>N</sub> ∩ V<sub>T</sub> = ∅</strong>，<strong>V = V<sub>N</sub> ∪ V<sub>T</sub></strong>（V称为词汇表）</li>
</ul>
</div>
</div>

<div class="kp-card">
<h3>产生式（规则）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>产生式（规则）</strong>：形如 α→β 的有序对，其中 α∈V<sup>+</sup> 称为<strong>左部</strong>，β∈V<sup>*</sup> 称为<strong>右部</strong>，读作"定义为"。</p>
</div>
<p>例：&lt;句子&gt; → &lt;主语&gt;&lt;谓语&gt;&lt;宾语&gt; 中，α=&lt;句子&gt;是左部，β=&lt;主语&gt;&lt;谓语&gt;&lt;宾语&gt;是右部。</p>
</div>

<div class="kp-card">
<h3>约定与简写</h3>
<ul>
<li>第一条产生式的左部是开始符号</li>
<li><strong>大写字母</strong>表示非终结符，<strong>小写字母</strong>表示终结符</li>
<li>相同左部的产生式可以合并：A→α₁, A→α₂, ..., A→αₙ 简写为 <strong>A→α₁|α₂|...|αₙ</strong></li>
</ul>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">3</div><h2>4.3 Chomsky文法分类</h2></div>

<div class="kp-card" id="sub-4-3">
<p>1956年，美国语言学家<strong>Noam Chomsky（乔姆斯基）</strong>通过限制产生式类型，将文法分为0~3型四种，构成著名的<strong>乔姆斯基层次（Chomsky hierarchy）</strong>：</p>
<table class="data-table">
<tr><th>类型</th><th>名称</th><th>产生式限制</th><th>识别系统</th><th>举例/应用</th></tr>
<tr><td><strong>0型</strong></td><td>非限制文法（短语结构文法）</td><td>α→β，其中α至少含一个非终结符（即|α|≥1）</td><td>图灵机（TM）</td><td>最一般的形式，无实际限制</td></tr>
<tr><td><strong>1型</strong></td><td>上下文有关文法（CSG）</td><td>|β|≥|α|（仅S→ε除外，且S不能出现在任何产生式右部）</td><td>线性有界自动机（LBA）</td><td>某些自然语言特征</td></tr>
<tr><td><strong>2型</strong></td><td>上下文无关文法（CFG）</td><td>α∈V<sub>N</sub>（左部必须是<strong>单个</strong>非终结符）</td><td>下推自动机（PDA）</td><td>程序设计语言的语法</td></tr>
<tr><td><strong>3型</strong></td><td>正规文法/正则文法（RG）</td><td>A→aB 或 A→a（右线性）；或 A→Ba 或 A→a（左线性）</td><td>有限自动机（FA）</td><td>程序设计语言的词法</td></tr>
</table>
</div>

<div class="kp-card">
<h3>逐级包含关系</h3>
<div class="important-box">
<div class="imp-label">Chomsky层次</div>
<p><strong>0型文法 ⊃ 1型文法 ⊃ 2型文法 ⊃ 3型文法</strong></p>
<p>即：正规语言一定是上下文无关语言，上下文无关语言一定是上下文有关语言，等等。</p>
</div>
<p><strong>程序设计语言中的应用</strong>：</p>
<ul>
<li><strong>词法</strong>：可用<strong>正规文法（3型）</strong>描述 → 用<strong>有限自动机</strong>识别</li>
<li><strong>语法</strong>：可用<strong>上下文无关文法（2型）</strong>描述 → 用<strong>下推自动机</strong>分析</li>
<li><strong>语义</strong>：可用<strong>上下文有关文法（1型）</strong>描述</li>
</ul>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">4</div><h2>4.4 推导、句型与语言</h2></div>

<div class="kp-card" id="sub-4-4">
<h3>推导与归约</h3>
<div class="def-box">
<div class="def-label">直接推导 (⇒)</div>
<p>若 α→β 是文法G的产生式，γ,δ∈V<sup>*</sup>，则称 γαδ <strong>直接推导</strong>到 γβδ，记作 <strong>γαδ ⇒ γβδ</strong>。</p>
</div>
<div class="def-box">
<div class="def-label">多步推导 (⁺⇒ 和 *⇒)</div>
<ul>
<li><strong>⁺⇒</strong>（正闭包推导）：v⇒w₁⇒…⇒wₙ=w（n≥1），即至少一步推导</li>
<li><strong>*⇒</strong>（星闭包推导）：v*⇒w，包括 v=w 的情况（零步推导）</li>
</ul>
</div>
<p>如果 α⇒β，则反过来可以说β<strong>归约</strong>到α。推导是从开始符号出发"展开"，归约是从句子"收缩"到开始符号。</p>
</div>

<div class="kp-card">
<h3>句型、句子和语言</h3>
<div class="def-box">
<div class="def-label">定义</div>
<ul>
<li><strong>句型（Sentential Form）</strong>：S *⇒ x，其中 x∈V<sup>*</sup>（可含非终结符）</li>
<li><strong>句子（Sentence）</strong>：S *⇒ x，且 x∈V<sub>T</sub><sup>*</sup>（仅含终结符的句型）</li>
<li><strong>语言 L(G)</strong>：L(G) = {x | S *⇒ x, x∈V<sub>T</sub><sup>*</sup>}，即文法G的所有句子的集合</li>
</ul>
</div>
<p><strong>三者关系</strong>：句子是特殊的句型（不含非终结符），语言是所有句子的集合。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">5</div><h2>4.5 语法树与二义性</h2></div>

<div class="kp-card" id="sub-4-5">
<h3>语法树</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>给定文法G=(V<sub>N</sub>,V<sub>T</sub>,P,S)，一棵树满足以下条件则为<strong>语法树（Parse Tree/分析树）</strong>：</p>
<ol>
<li>每个结点都有标记，标记是V的一个符号</li>
<li>根的标记是S（开始符号）</li>
<li>若标记A的结点有子孙，则A∈V<sub>N</sub>；叶子结点的标记为终结符</li>
<li>若标记A的结点有直接子孙n₁,n₂,…,nₖ（标记A₁,A₂,…,Aₖ），则 A→A₁A₂…Aₖ 是P中的产生式</li>
</ol>
</div>
<p>一棵语法树可以表示一个句型的<strong>多种推导过程</strong>（但未必是所有推导过程）。</p>
</div>

<div class="kp-card">
<h3>最左推导与最右推导</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>最左推导</strong>：推导的每一步总是对句型中的<strong>最左非终结符</strong>进行替换。</p>
<p><strong>最右推导（规范推导）</strong>：推导的每一步总是对句型中的<strong>最右非终结符</strong>进行替换。由规范推导得到的句型称为<strong>规范句型</strong>。</p>
</div>
<div class="important-box">
<div class="imp-label">重要结论</div>
<p>对于上下文无关文法，每个句子都有对应的<strong>最左推导</strong>和<strong>最右推导</strong>，且它们对应的语法树是相同的。但不同的推导可能对应不同的语法树。</p>
</div>
</div>

<div class="kp-card">
<h3>文法的二义性</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>若一个文法存在某个句子有<strong>两个不同的最左（或最右）推导</strong>，或等价地说，存在某个句子有两棵不同的语法树，则称这个文法是<strong>二义的（Ambiguous）</strong>。</p>
</div>
<div class="important-box">
<div class="imp-label">重要事实</div>
<ul>
<li>判定任给上下文无关文法是否二义是<strong>递归不可解的</strong>（没有通用算法能判定任意CFG的二义性）</li>
<li><strong>文法的二义性 ≠ 语言的二义性</strong>：可能有两个文法G和G'，G是二义的，G'是非二义的，但L(G)=L(G')</li>
</ul>
</div>
</div>

<div class="kp-card">
<h3>消除二义性的方法</h3>
<p><strong>方法一：消除二义性规则（不改变文法）</strong></p>
<p>规定<strong>优先级</strong>和<strong>结合性</strong>。例如对于表达式文法：</p>
<ul>
<li>* 比 + 优先级高（先算乘法后算加法）</li>
<li>+ 和 * 都是<strong>左结合</strong>（a+b+c = (a+b)+c）</li>
</ul>

<p><strong>方法二：改造二义文法为非二义文法</strong></p>
<p>引入新的非终结符来分层，限制推导方式。例如把 E→E+E|E*E|id 改写为分层的 E→E+T|T, T→T*F|F, F→id|(E)。</p>
</div>

<div class="kp-card">
<h3>悬挂else问题（Dangling Else Problem）</h3>
<p>条件语句文法天然具有二义性：</p>
<pre>if_stmt → if expr then stmt | if expr then stmt else stmt | other</pre>
<p>对于输入 <code>if E1 then if E2 then S1 else S2</code>，else可以与内层if配对，也可以与外层if配对，产生两种语法树。</p>
<p><strong>解决方案</strong>：</p>
<ol>
<li><strong>最近嵌套规则（Else与最近的未匹配的Then配对）</strong>：大多数语言采用此约定</li>
<li><strong>改写文法</strong>：引入新的非终结符区分匹配和不匹配的语句，或强制使用end if等终结符</li>
</ol>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">6</div><h2>4.6 自上而下语法分析</h2></div>

<div class="kp-card" id="sub-4-6">
<h3>核心思想</h3>
<p>从文法的<strong>开始符号</strong>出发，反复使用产生式，寻找与输入符号串匹配的推导。语法树的构造过程为<strong>从根向下</strong>逐步建立。</p>
<div class="important-box">
<div class="imp-label">引起回溯的两个问题</div>
<ol>
<li><strong>左递归（Left Recursion）</strong>：A→Aα，一旦采用该产生式会陷入<strong>死循环</strong></li>
<li><strong>公共左因子（Common Left Factor）</strong>：A→αβ₁|αβ₂，多个候选项前缀相同，造成<strong>虚假匹配</strong>，需要回溯</li>
</ol>
<p>解决方法：<strong>提取左因子</strong>、<strong>消除左递归</strong>。</p>
</div>
</div>

<div class="kp-card">
<h3>消除直接左递归</h3>
<p>对于 A→Aα|β（其中β不以A开头），等价改写为：</p>
<pre>
A  → βA'
A' → αA' | ε
</pre>
<p><strong>一般形式</strong>：若 A→Aα₁|Aα₂|…|Aα<sub>m</sub>|β₁|β₂|…|β<sub>n</sub>（其中βᵢ不以A开头），改写为：</p>
<pre>
A  → β₁A' | β₂A' | … | βₙA'
A' → α₁A' | α₂A' | … | αₘA' | ε
</pre>
<p>核心思想：把左递归转换为<strong>右递归</strong>（通过引入新的非终结符A'），同时用ε产生式保证能终止。</p>
</div>

<div class="kp-card">
<h3>消除间接左递归</h3>
<p>间接左递归：A⇒⁺Aα（经过多步推导出现左递归）。</p>
<div class="algo-box">
<div class="algo-label">消除间接左递归算法</div>
<p>按非终结符排序 A₁, A₂, …, A<sub>n</sub>：</p>
<ol>
<li><strong>for</strong> i = 2 to n do
<ul>
<li><strong>for</strong> j = 1 to i-1 do
<ul>
<li>用Aⱼ的右部替换Aᵢ→Aⱼγ中的Aⱼ（代入法）</li>
</ul>
<li>消除Aᵢ产生式中的<strong>直接左递归</strong></li>
</ul></li>
</ol>
</div>
<p>核心思想：通过<strong>代入法</strong>将间接左递归转化为直接左递归，再消除直接左递归。</p>
</div>

<div class="kp-card">
<h3>提取左因子</h3>
<p>将具有公共前缀的产生式分解：</p>
<p>A→αβ₁|αβ₂|…|αβₙ|γ 改写为：</p>
<pre>
A  → αA' | γ
A' → β₁ | β₂ | … | βₙ
</pre>
<p>核心思想：将公共前缀提取出来，推迟决策（直到看到更多输入符号才能确定选用哪个β）。</p>
</div>

<div class="kp-card">
<h3>递归下降分析（Recursive Descent Parsing）</h3>
<div class="def-box">
<div class="def-label">原理</div>
<p>为每个非终结符构造一个<strong>子程序</strong>，遇到终结符直接匹配，遇到非终结符就调用相应子程序。由于文法是递归定义的，子程序也是递归的。</p>
</div>
<p><strong>适用条件</strong>：文法<strong>不能有公共左因子和左递归</strong>（否则会导致不确定性和死循环）。</p>
<p><strong>优点</strong>：直观易懂，容易手工实现，可读性好。</p>
<p><strong>缺点</strong>：对文法限制较多；每个非终结符一个子程序，大型文法代码量大；错误恢复较困难。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">7</div><h2>4.7 LL(1)分析</h2></div>

<div class="kp-card" id="sub-4-7">
<h3>LL(1)的含义</h3>
<p><strong>LL(1)</strong>中的三个符号分别表示：</p>
<ul>
<li>第一个 <strong>L</strong>：从左到右扫描输入串（Left-to-right scan）</li>
<li>第二个 <strong>L</strong>：最左推导（Leftmost derivation）</li>
<li><strong>1</strong>：向前看<strong>1个</strong>符号即可确定选用哪条产生式</li>
</ul>
</div>

<div class="kp-card">
<h3>FIRST集（开始符号集合）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>FIRST(α) = {a | α *⇒ aβ, a∈V<sub>T</sub>}。若α *⇒ ε，则ε∈FIRST(α)。</p>
<p>即：从α出发能推导出的所有<strong>句型</strong>的<strong>第一个终结符</strong>的集合。</p>
</div>
<p><strong>FIRST集计算方法</strong>：</p>
<ol>
<li>若X∈V<sub>T</sub>，则FIRST(X)={X}</li>
<li>若X∈V<sub>N</sub>且有产生式X→a…，则把a加入FIRST(X)；若X→ε也是产生式，则把ε加入FIRST(X)</li>
<li>若X→Y₁Y₂…Yₖ是产生式，则把FIRST(Y₁)的所有非ε元素加入FIRST(X)；若Y₁*⇒ε，再把FIRST(Y₂)的非ε元素加入；依此类推；若Y₁到Yₖ都能推出ε，则把ε加入FIRST(X)</li>
<li>反复使用上述规则直到每个符号的FIRST集不再增大</li>
</ol>
</div>

<div class="kp-card">
<h3>FOLLOW集（后跟符号集合）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>FOLLOW(B) = {a | S *⇒ …Ba…, a∈V<sub>T</sub>} ∪ {# | 若S *⇒ …B}（#是输入串结束符）。</p>
<p>即：可能在B后面紧跟的<strong>终结符</strong>集合。</p>
</div>
<p><strong>FOLLOW集计算方法</strong>：</p>
<ol>
<li>对于文法开始符号S，置#于FOLLOW(S)中</li>
<li>若A→αBβ是产生式，则把FIRST(β)中的<strong>非ε元素</strong>加入FOLLOW(B)</li>
<li>若A→αBβ是产生式且β*⇒ε（即ε∈FIRST(β)），或A→αB是产生式，则把FOLLOW(A)中的所有元素加入FOLLOW(B)</li>
<li>反复使用2)和3)直到每个非终结符的FOLLOW集不再增大</li>
</ol>
</div>

<div class="kp-card">
<h3>PREDICT集（预测集合/选择集合）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p>给定产生式A→α：</p>
<ul>
<li>若<strong>α不能推出ε</strong>：PREDICT(A→α) = FIRST(α)</li>
<li>若<strong>α能推出ε</strong>：PREDICT(A→α) = (FIRST(α) - {ε}) ∪ FOLLOW(A)</li>
</ul>
</div>
<p>PREDICT集告诉我们在看到什么输入符号时应该选择这条产生式。</p>
</div>

<div class="kp-card">
<h3>LL(1)文法的判定条件</h3>
<div class="theorem-box">
<div class="thm-label">判定定理</div>
<p>一个上下文无关文法是LL(1)文法的<strong>充分必要条件</strong>：</p>
<ol>
<li>不含<strong>左递归</strong></li>
<li>对每个非终结符A的不同产生式A→α和A→β，满足：
<strong>PREDICT(A→α) ∩ PREDICT(A→β) = ∅</strong></li>
</ol>
<p>即：相同左部的所有产生式的PREDICT集<strong>两两不相交</strong>。</p>
</div>
</div>

<div class="kp-card">
<h3>LL(1)分析表与预测分析器</h3>
<p><strong>预测分析表</strong>：用矩阵M[A,a]表示，A为非终结符，a为终结符或#。</p>
<p><strong>构造方法</strong>：对每条产生式A→α，若a∈PREDICT(A→α)，则把A→α加入M[A,a]。</p>
<p><strong>重要定理</strong>：一个文法G的预测分析表<strong>不含多重入口</strong>，当且仅当该文法是LL(1)的。</p>

<p><strong>预测分析器的组成</strong>：</p>
<ul>
<li><strong>预测分析程序</strong>（总控程序）</li>
<li><strong>先进后出栈</strong></li>
<li><strong>预测分析表</strong>（与文法有关，其余两部分通用）</li>
</ul>

<p><strong>分析算法</strong>：</p>
<ol>
<li>初始化：栈底放#，栈顶放开始符号S；读入第一个输入符号</li>
<li>若栈顶X是终结符：与当前输入符号匹配则弹出X并读下一符号，否则出错</li>
<li>若栈顶X是#：输入也是#则成功，否则出错</li>
<li>若栈顶X是非终结符：查表M[X,a]，若M[X,a]=X→X₁X₂…Xₖ，则弹出X，将Xₖ…X₂X₁依次入栈（X₁在栈顶）</li>
<li>重复直到成功或出错</li>
</ol>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">8</div><h2>4.8 自下而上语法分析</h2></div>

<div class="kp-card" id="sub-4-8">
<h3>核心思想</h3>
<p>从<strong>输入符号串</strong>开始，逐步进行<strong>归约</strong>（用产生式左部替代右部），直至归约到文法的开始符号。语法树构造过程为<strong>从叶子向上</strong>构造。</p>
</div>

<div class="kp-card">
<h3>短语、直接短语和句柄</h3>
<div class="def-box">
<div class="def-label">定义</div>
<ul>
<li><strong>短语</strong>：设S *⇒ αAδ 且 A *⇒ β，则β是句型αβδ相对于A的<strong>短语</strong></li>
<li><strong>直接短语（简单短语）</strong>：若S *⇒ αAδ 且 A ⇒ β（一步直接推导），则β是<strong>直接短语</strong></li>
<li><strong>句柄（Handle）</strong>：一个句型的<strong>最左直接短语</strong>。自下而上分析的关键就是找句柄</li>
</ul>
</div>
<div class="important-box">
<div class="imp-label">关键理解</div>
<p>句柄是<strong>最左直接短语</strong>，它是当前可以安全归约的部分。正确识别句柄是自下而上分析的核心问题。</p>
</div>
</div>

<div class="kp-card">
<h3>移进-归约分析（Shift-Reduce Parsing）</h3>
<p>使用<strong>分析栈</strong>和<strong>输入缓冲区</strong>，四种动作：</p>
<table class="data-table">
<tr><th>动作</th><th>操作</th><th>条件</th></tr>
<tr><td><strong>移进(Shift)</strong></td><td>将下一输入符号移入栈</td><td>栈顶不构成句柄</td></tr>
<tr><td><strong>归约(Reduce)</strong></td><td>用产生式左侧的非终结符替换栈顶的句柄</td><td>栈顶发现句柄</td></tr>
<tr><td><strong>接受(Accept)</strong></td><td>分析成功</td><td>栈中为#S且输入只剩#</td></tr>
<tr><td><strong>出错(Error)</strong></td><td>报告语法错误</td><td>无法进行上述动作</td></tr>
</table>

<div class="important-box">
<div class="imp-label">两种冲突</div>
<ul>
<li><strong>移进-归约冲突</strong>：栈顶既可移进又可归约（不确定该移还是该归约）</li>
<li><strong>归约-归约冲突</strong>：栈顶可用多个产生式归约（不确定用哪条产生式归约）</li>
</ul>
<p>LR分析技术通过构造分析表来系统性地解决这些冲突。</p>
</div>
</div>

<div class="kp-card">
<h3>规范归约与活前缀</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>规范归约</strong>：最右推导的逆过程，即每一步都对<strong>句柄</strong>进行归约。</p>
<p><strong>活前缀（Viable Prefix）</strong>：规范句型的一个前缀，该前缀<strong>不超过句柄的右端</strong>。活前缀之后要么可以接更多符号形成完整句柄，要么活前缀本身就包含一个完整句柄。</p>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">9</div><h2>4.9 LR分析技术</h2></div>

<div class="kp-card" id="sub-4-9">
<h3>LR(K)分析的含义</h3>
<p><strong>L</strong>=从左到右扫描输入，<strong>R</strong>=最右推导的逆（规范归约），<strong>K</strong>=向前看K个符号。</p>
<table class="data-table">
<tr><th>方法</th><th>特点</th><th>分析能力</th></tr>
<tr><td><strong>LR(0)</strong></td><td>只看栈内容，不看输入符号</td><td>最弱，主要用于理论教学</td></tr>
<tr><td><strong>SLR(1)</strong></td><td>利用FOLLOW集辅助决策</td><td>较弱但简单实用</td></tr>
<tr><td><strong>LR(1)</strong></td><td>对每个项目集携带展望符</td><td>最强，能分析几乎所有CFG，但状态数多</td></tr>
<tr><td><strong>LALR(1)</strong></td><td>合并LR(1)中的同心集</td><td>较强，状态数少，实际最常用（YACC使用）</td></tr>
</table>
</div>

<div class="kp-card">
<h3>LR(0)项目（Item）</h3>
<div class="def-box">
<div class="def-label">定义</div>
<p><strong>LR(0)项目</strong>：在产生式右部某个位置标一个圆点"."，表示分析过程中的位置。</p>
<p>产生式A→XYZ对应4个项目：</p>
<ul>
<li>A→.XYZ — 刚开始，期望归约出XYZ</li>
<li>A→X.YZ — 已看到X，期望看到YZ</li>
<li>A→XY.Z — 已看到XY，期望看到Z</li>
<li>A→XYZ. — 已看到XYZ，可以归约了（<strong>归约项目</strong>）</li>
</ul>
</div>
<p>特殊项目：<strong>S'→.S</strong> 是初始项目，<strong>S'→S.</strong> 是接受项目。</p>
</div>

<div class="kp-card">
<h3>项目集规范族的构造</h3>
<p>两个核心运算：</p>
<div class="def-box">
<div class="def-label">closure(I) — 闭包运算</div>
<p>若A→α.Bβ∈I，则将所有B→.η加入I（对所有B的产生式）。反复进行直到没有新项目可加入。</p>
</div>
<div class="def-box">
<div class="def-label">go(I,X) — 状态转移</div>
<p>go(I,X) = closure({A→αX.β | A→α.Xβ∈I})</p>
<p>即：把I中圆点在X前的项目，将圆点移过X，再求闭包。</p>
</div>
<p><strong>构造算法</strong>：从初始项目S'→.S的闭包I₀开始，对每个项目集Iᵢ和每个符号X，计算go(Iᵢ,X)得到新项目集，直到没有新项目集产生。</p>
</div>

<div class="kp-card">
<h3>LR(0)分析表构造</h3>
<p>设项目集规范族为C={I₀,I₁,...,Iₙ}：</p>
<table class="data-table">
<tr><th>情况</th><th>ACTION表</th><th>GOTO表</th></tr>
<tr><td>A→α.aβ ∈ Iᵢ (a∈V<sub>T</sub>)</td><td>ACTION[i,a] = Sⱼ（移进，j=go(Iᵢ,a)）</td><td>—</td></tr>
<tr><td>A→α. ∈ Iᵢ (A≠S')</td><td>ACTION[i,*] = rⱼ（用第j条产生式归约）</td><td>—</td></tr>
<tr><td>S'→S. ∈ Iᵢ</td><td>ACTION[i,#] = acc（接受）</td><td>—</td></tr>
<tr><td>go(Iᵢ,A)=Iⱼ (A∈V<sub>N</sub>)</td><td>—</td><td>GOTO[i,A] = j</td></tr>
</table>
<div class="theorem-box">
<div class="thm-label">LR(0)文法</div>
<p>若按上述算法构造的分析表中每个入口<strong>不含多重定义</strong>，则为LR(0)文法。LR(0)文法<strong>无二义性</strong>。</p>
</div>
</div>

<div class="kp-card">
<h3>SLR(1)分析</h3>
<p>SLR(1)利用<strong>FOLLOW集</strong>解决冲突：当归约A→α时，只在当前输入符号<strong>∈FOLLOW(A)</strong>时才进行归约。</p>
<p><strong>与LR(0)的区别</strong>：LR(0)中A→α.∈Iᵢ时对所有终结符都置归约动作；SLR(1)只对a∈FOLLOW(A)置ACTION[i,a]=rj。</p>
<p>若SLR(1)表中每个入口不含多重定义，则为<strong>SLR(1)文法</strong>。</p>
<p>SLR(1)文法解决了部分LR(0)中的冲突，但仍有一些文法不是SLR(1)的。</p>
</div>

<div class="kp-card">
<h3>LR(1)分析</h3>
<p>SLR(1)的问题：仅使用FOLLOW(A)太粗糙，没有考虑A→α.出现的<strong>上下文</strong>。</p>
<p>LR(1)的改进：<strong>对每个项目携带展望符</strong>（lookahead）。</p>
<div class="def-box">
<div class="def-label">LR(1)项目</div>
<p>形如 [A→α.β, a]，其中a是展望符（终结符或#）。</p>
<p>仅当当前输入为a时才用A→αβ归约。</p>
</div>
<p>LR(1)项目集规范族的构造与LR(0)类似，但闭包运算需要考虑展望符的传播。LR(1)的分析能力最强，但状态数可能很多（是LR(0)的数倍）。</p>
</div>

<div class="kp-card">
<h3>LALR(1)分析</h3>
<p>LALR(1)的核心思想：<strong>合并LR(1)中的同心集</strong>。</p>
<div class="def-box">
<div class="def-label">同心集</div>
<p>两个LR(1)项目集，如果它们的<strong>项目部分相同</strong>（忽略展望符），则称为<strong>同心集</strong>。将同心集合并，可减少状态数。</p>
</div>
<p><strong>特点</strong>：</p>
<ul>
<li>状态数与SLR(1)相当（实际中很少产生冲突）</li>
<li>分析能力接近LR(1)（合并同心集不会引起新的移进-归约冲突）</li>
<li>但可能产生<strong>归约-归约冲突</strong>（合并时展望符集合取并集可能导致冲突）</li>
</ul>
<p><strong>YACC工具使用的就是LALR(1)分析技术</strong>。</p>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">10</div><h2>4.10 错误处理与工具</h2></div>

<div class="kp-card" id="sub-4-10">
<h3>语法错误处理</h3>
<p><strong>目标</strong>：准确报告错误位置和性质，尽可能从错误中恢复继续分析。</p>
<p><strong>错误恢复策略</strong>：</p>
<ul>
<li><strong>紧急恢复</strong>：跳过符号直到遇到指定的同步符号</li>
<li><strong>短语级恢复</strong>：对剩余输入进行局部校正</li>
<li><strong>错误产生式</strong>：扩充文法加入错误产生式</li>
<li><strong>全局校正</strong>：计算最少修改次数（代价高，不常用）</li>
</ul>
</div>

<div class="kp-card">
<h3>YACC工具</h3>
<div class="def-box">
<div class="def-label">YACC</div>
<p><strong>YACC</strong>（Yet Another Compiler Compiler）是语法分析器自动生成工具，接受上下文无关文法描述，产生LALR(1)语法分析器。</p>
<p>YACC与LEX配合使用：<strong>LEX生成词法分析器</strong>，<strong>YACC生成语法分析器</strong>，两者结合可快速构建编译器前端。</p>
</div>
</div>
</div>
</div>`,

// ============================================================
// EXAMPLES
// ============================================================
examples:`<div class="content-inner">
<div class="breadcrumb"><span onclick="showPage('graph')">知识图谱</span><span class="sep">/</span><span>例题解析</span></div>
<h1 class="page-title">精选例题与详细解析</h1>
<p class="page-desc">从PPT中精选全部典型例题，附完整解题过程和关键思路分析。</p>

<div class="kp-section">
<div class="kp-header"><div class="icon">3</div><h2>第3章 词法分析 — 例题</h2></div>

<div class="kp-card" id="sub-ex-ch3">
<div class="example-box">
<div class="ex-label">例题3.1</div>
<div class="ex-title">标识符的正规表达式</div>
<div class="ex-content">令Σ={l,d}，其中l代表字母，d代表数字。写出程序设计语言中标识符的正规表达式。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>r = l(l|d)*</strong></p>
<p><strong>解析</strong>：标识符的规则是"字母打头的字母数字串"。</p>
<ul>
<li>l — 第一个字符必须是字母</li>
<li>(l|d)* — 后面可以跟随零个或多个字母或数字</li>
</ul>
<p>对应的正规集为：{l, ll, ld, ldd, lll, lld, ...}，正是Pascal和多数程序设计语言允许的标识符词法规则。</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题3.2</div>
<div class="ex-title">无符号数的正规表达式</div>
<div class="ex-content">令Σ={d,.,e,+,-}，写出无符号数的正规表达式（d为0~9的数字）。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>d*(.dd*|ε)(e(+|-|ε)dd*|ε)</strong></p>
<p><strong>解析</strong>：分解为三部分（每部分可选）：</p>
<ul>
<li><strong>d*</strong> — 整数部分（零个或多个数字）</li>
<li><strong>(.dd*|ε)</strong> — 小数部分（可选）</li>
<li><strong>(e(+|-|ε)dd*|ε)</strong> — 指数部分（可选）</li>
</ul>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题3.3</div>
<div class="ex-title">日期格式的正规表达式</div>
<div class="ex-content">三种日期格式：年.月.日、日月年、月/日/年。写出描述日期的正规式。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<pre>digit  = [0-9]
year   = [1-9] digit digit digit
month  = 0[1-9] | 1[0-2]
day    = 0[1-9] | [1-2][0-9] | 3[0-1]
date1  = year . month . day
date2  = day month year
date3  = month / day / year
date   = date1 | date2 | date3</pre>
</div>
</div>

<div class="example-box">
<div class="ex-label">综合例题</div>
<div class="ex-title">NFA到DFA的转换（子集法）</div>
<div class="ex-content">将下图的NFA确定化为DFA。<br/>
NFA状态：i --ε--> 1 --a--> 3 --a--> f（终态）<br/>
i --ε--> 2 --a--> 4 --a--> 5 --b--> 6 --ε--> f<br/>
另有：1--b-->4, 2--a-->1, 3--b-->2, 5--a-->3, 6--b-->2</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>步骤1：计算初始状态的ε闭包</strong></p>
<p>ε-closure({i}) = {i, 1, 2} → DFA状态 S</p>
<p><strong>步骤2：逐个计算转移</strong></p>
<table class="data-table">
<tr><th>DFA状态</th><th>包含NFA状态</th><th>输入a</th><th>输入b</th></tr>
<tr><td>S</td><td>{i,1,2}</td><td>{1,2,3}</td><td>{1,2,4}</td></tr>
<tr><td>A</td><td>{1,2,3}</td><td>{1,2,3,5,6,f}</td><td>{1,2,4}</td></tr>
<tr><td>B</td><td>{1,2,4}</td><td>{1,2,3}</td><td>{1,2,4,5,6,f}</td></tr>
<tr><td>C</td><td>{1,2,3,5,6,f}</td><td>{1,2,3,5,6,f}</td><td>{1,2,4,6,f}</td></tr>
<tr><td>D</td><td>{1,2,4,5,6,f}</td><td>{1,2,3,6,f}</td><td>{1,2,4,5,6,f}</td></tr>
<tr><td>E</td><td>{1,2,4,6,f}</td><td>{1,2,3,6,f}</td><td>{1,2,4,5,6,f}</td></tr>
<tr><td>F</td><td>{1,2,3,6,f}</td><td>{1,2,3,5,6,f}</td><td>{1,2,4,6,f}</td></tr>
</table>
<p><strong>步骤3：确定终态</strong></p>
<p>C, D, E, F为终态（含原NFA终态f）。最终DFA有7个状态。</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">DFA最小化</div>
<div class="ex-content">将上述7状态DFA最小化。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>步骤1：分为终态组和非终态组</strong></p>
<p>非终态：{S, A, B}，终态：{C, D, E, F}</p>
<p><strong>步骤2：检查等价性</strong></p>
<ul>
<li>C和F：同是终态，读入a都到达C，读入b都到达E → <strong>等价</strong></li>
<li>D和E：检查所有输入符号的转移目标 → 等价 → <strong>合并</strong></li>
</ul>
<p>最小化后约5个状态。</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">综合例题</div>
<div class="ex-title">R=1(0|1)*101 构造最简DFA</div>
<div class="ex-content">已知正规表达式R=1(0|1)*101，构造与其等价的最简DFA。</div>
<div class="ex-solution">
<div class="ex-sol-label">完整解答</div>
<p><strong>Step 1：Thompson构造法构造NFA</strong></p>
<p>为R=1(0|1)*101逐步构造NFA。先构造"1"的NFA，再构造"(0|1)*"的NFA（含ε循环），最后连接"101"。</p>
<p><strong>Step 2：子集法将NFA确定化为DFA</strong></p>
<p>从ε-closure(初态)开始，对每个状态和每个输入符号计算ε-closure(moveset(I,a))，直到没有新状态。</p>
<p><strong>Step 3：DFA最小化</strong></p>
<p>划分法：先分为终态组和非终态组，然后检查各组内状态是否可区别，合并等价状态。</p>
</div>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">4</div><h2>第4章 语法分析 — 例题</h2></div>

<div class="kp-card" id="sub-ex-ch4">
<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">设计文法</div>
<div class="ex-content">设计文法G，使L(G)={ω | ω是不以0开始的奇数}（不考虑负数）。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p>不以0开头 → 第一位是1-9；是奇数 → 末位是1,3,5,7,9。</p>
<pre>S → AD | D
A → 1|2|3|4|5|6|7|8|9
B → 0|1|2|3|4|5|6|7|8|9
D → 1|3|5|7|9
S → AB*B | AB*D | D</pre>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">消除直接左递归</div>
<div class="ex-content">消除表达式文法的直接左递归：<br/>E→E+T|T, T→T*F|F, F→(E)|id</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p>使用标准方法 A→Aα|β 改写为 A→βA', A'→αA'|ε</p>
<pre>E  → T E'
E' → + T E' | ε
T  → F T'
T' → * F T' | ε
F  → ( E ) | id</pre>
<p><strong>解析</strong>：</p>
<ul>
<li>E→E+T|T 中 α=+T, β=T → E→TE', E'→+TE'|ε</li>
<li>T→T*F|F 中 α=*F, β=F → T→FT', T'→*FT'|ε</li>
<li>F无左递归，保持不变</li>
</ul>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">消除间接左递归</div>
<div class="ex-content">消除文法中的左递归：R→Sa|a, Q→Rb|b, S→Qc|c</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p>排序：R, Q, S</p>
<p><strong>Step 1</strong>：i=Q, j=R，用R的右部替换Q→Rb中的R：</p>
<p>Q → Sab | ab | b</p>
<p><strong>Step 2</strong>：i=S, j=Q，用Q的右部替换S→Qc中的Q：</p>
<p>S → Sabc | abc | bc | c</p>
<p>消除S的直接左递归：S → abcS' | bcS' | cS', S' → abcS' | ε</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">短语、直接短语和句柄</div>
<div class="ex-content">对文法G[E]：E→E+T|T, T→T*F|F, F→(E)|i，求句型i₁*i₂+i₃的短语、直接短语和句柄。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>推导过程</strong>：</p>
<p>E ⇒ E+T ⇒ T+T ⇒ T*F+T ⇒ F*F+T ⇒ i₁*F+T ⇒ i₁*i₂+T ⇒ i₁*i₂+F ⇒ i₁*i₂+i₃</p>
<p><strong>短语</strong>：i₁*i₂+i₃（相对于E），i₁*i₂（相对于T），i₁、i₂、i₃（分别相对于F）</p>
<p><strong>直接短语</strong>：i₁、i₂、i₃</p>
<p><strong>句柄</strong>：i₁（最左直接短语）</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">判断LL(1)文法</div>
<div class="ex-content">不构造预测分析表，判断下面文法是否LL(1)：<br/>
(1) S→Ra|a, R→Sb|b 　　(2) S→aAc|b, A→a|b|ε</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p><strong>(1) S→Ra|a, R→Sb|b</strong></p>
<p>FIRST(Ra)={a,b}（R→Sb→ab/bb, R→b），FIRST(a)={a}</p>
<p>FIRST(Ra) ∩ FIRST(a) = {a} ≠ ∅ → <strong>不是LL(1)</strong></p>
<p><strong>(2) S→aAc|b, A→a|b|ε</strong></p>
<p>FIRST(aAc)={a}, FIRST(b)={b} → 不相交</p>
<p>FOLLOW(A)=FIRST(c)={c}（从S→aAc得出，c后面跟着结束符）</p>
<p>FIRST(a)∩FIRST(b)=∅, FIRST(a)∩FOLLOW(A)=∅, FIRST(b)∩FOLLOW(A)=∅</p>
<p>→ <strong>是LL(1)文法</strong></p>
</div>
</div>

<div class="example-box">
<div class="ex-label">例题</div>
<div class="ex-title">LR(0)与SLR(1)判断</div>
<div class="ex-content">判断文法 S→AaAb|BbBa, A→ε, B→ε 是否为LR(0)和SLR(1)。</div>
<div class="ex-solution">
<div class="ex-sol-label">解答</div>
<p>扩展文法：S'→S, S→AaAb|BbBa, A→ε, B→ε</p>
<p>构造I₀: S'→.S, S→.AaAb, S→.BbBa, A→., B→.</p>
<p>I₀中存在<strong>归约-归约冲突</strong>（A→.和B→.都是可归约项目）</p>
<p><strong>LR(0)</strong>：存在冲突 → <strong>不是LR(0)文法</strong></p>
<p><strong>SLR(1)</strong>：FOLLOW(A)={a,b}, FOLLOW(B)={a,b}，交集非空 → 冲突无法解决 → <strong>不是SLR(1)文法</strong></p>
</div>
</div>
</div>
</div>

<div class="kp-section">
<div class="kp-header"><div class="icon">★</div><h2>课后作业精选</h2></div>

<div class="kp-card" id="sub-ex-hw">
<div class="example-box">
<div class="ex-label">正规表达式作业</div>
<div class="ex-title">写出下述语言的正规式描述</div>
<ol>
<li>每个a后边至少紧随两个b的a、b串。 <strong>答案思路：(b|abb)*</strong></li>
<li>C的形如 /* … */ 的注释，其中…不含*/。 <strong>答案思路：/\*([^*]|\*[^/])*\*/</strong></li>
<li>Pascal类定点10进制小数，前后无多余0。 <strong>答案思路：分[1-9][0-9]*\.[0-9]*[1-9]、0\.[0-9]*[1-9]、0\.0 三种情况</strong></li>
</ol>
</div>

<div class="example-box">
<div class="ex-label">文法作业</div>
<div class="ex-title">设计文法</div>
<ol>
<li>给出文法S→SAS|y, A→xxA|x 描述的语言。 <strong>答案：y两边对称包围奇数个x的A</strong></li>
<li>设计不能被5整除的正偶数的文法。 <strong>答案：末位是2,4,6,8但不能被5整除</strong></li>
</ol>
</div>

<div class="example-box">
<div class="ex-label">LL(1)分析作业</div>
<div class="ex-title">构造LL(1)分析表并分析句子</div>
<div class="ex-content">
<pre>Expr → – Expr
Expr → (Expr) | Var ExprTail
ExprTail → – Expr | ε
Var → id VarTail
VarTail → (Expr) | ε</pre>
</div>
<div class="ex-solution">
<div class="ex-sol-label">要求</div>
<ol>
<li>构造LL(1)分析表</li>
<li>给出对句子 id – – id((id)) 的分析过程</li>
</ol>
<p><strong>提示步骤</strong>：先消除左递归（如有），计算First集和Follow集，判断是否为LL(1)，构造预测分析表，然后用栈模拟分析过程。</p>
</div>
</div>

<div class="example-box">
<div class="ex-label">LL(1)综合练习</div>
<div class="ex-title">文法G：S→aABe, A→b|Abc, B→d</div>
<ol>
<li>消除左递归得到G′ <strong>答案：A→bA', A'→bcA'|ε</strong></li>
<li>求G′的First集、Follow集及Predict集</li>
<li>判断G′是否为LL(1)，构造预测分析表</li>
<li>写出对输入序列abcce、abbcde的分析过程</li>
</ol>
</div>
</div>
</div>
</div>`,
}; // end PAGES
