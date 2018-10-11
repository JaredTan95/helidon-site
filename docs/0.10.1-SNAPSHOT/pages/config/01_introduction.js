<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>组件配置</dt>
<dd slot="desc"><p><code>Config</code> 组件提供了一个Java API，用于将键/值形式的配置属性加载和处理到Config对象中，
应用程序可以使用该对象来检索配置数据。</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 >入门</h2>
<div class="section">

<h3 >介绍配置系统</h3>
<div class="section">
<p>配置系统的简要概述有助于阐明其不同部分以及它们如何协同工作。
大多数应用程序通常会处理这些部分中的多个部分。</p>



<v-card>
<v-card-text class="overflow-y-hidden" style="text-align:center">
<img src="./images/config/overview.png" alt="Configuration Overview" />
</v-card-text>
</v-card>

<p>系统从配置源，包含配置数据的物理位置（例如文件、URL或字符串）读取配置。
每个配置源都使用配置解析器，它将特定的文本格式（例如，Java属性或YAML）转换为内存中的树，该树表示配置的结构和值
一个可选的轮询策略检测并发布对底层配置源的更改，以便配置源本身或您的应用程序可以响应。</p>

<p>您的应用程序使用 <code>Config</code>  对象，该对象是通过构建内存中的树来检索配置数据的结果。
应用程序可以在树中的节点之间显式获取节点的值。</p>

<markup
lang="java"

>Optional&lt;String&gt; pageSize = Config.get("web").get("page-size").value();</markup>

<p>或者它可以使用配置键的点名称来寻址树中的节点</p>

<markup
lang="java"

>int pageSize = Config.get("web.page-size").asInt();</markup>

<p>作为从节点检索值的一部分，配置系统应用配置过滤器，该过滤器可以更改为所选键返回的值。</p>

<p><code>Config</code> 对象允许您的应用程序检索配置数据：</p>

<ul class="ulist">
<li>
<p>从单节点获取  <code>Optional&lt;String&gt;</code> 值,</p>

</li>
<li>
<p>来自单个节点的String值被解释为配置系统已知的基本Java类型（原始或简单对象）（例如布尔值或Double）, 或者</p>

</li>
<li>
<p>来自配置树的子树的复杂Java类型。</p>
<p>配置系统自动知道如何返回 <code>List</code> 和 <code>Map</code> 复杂类型，
并且您可以提供配置映射器以将配置子树转换为您的应用程序所需的任何Java类型。</p>

</li>
</ul>
</div>

<h3 >您的第一个配置应用程序</h3>
<div class="section">
<p>从 <a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/Config.html">Config</a> API开始的简单方法是遵循以下四个步骤：</p>

<ol style="margin-left: 15px;">
<li>
<router-link to="#maven-coords" @click.native="this.scrollFix('#maven-coords')">将与配置相关的依赖项添加到 <code>pom.xml</code> 中</router-link>

</li>
<li>
<router-link to="#update-module-info" @click.native="this.scrollFix('#update-module-info')">修改你的 <code>module-info.java</code> 以引用config（如果你使用的是Java 9）</router-link>

</li>
<li>
<router-link to="#create-simple-config-props" @click.native="this.scrollFix('#create-simple-config-props')">创建一个简单的配置属性文件</router-link>

</li>
<li>
<router-link to="#Config-Basics-DefaultConfig" @click.native="this.scrollFix('#Config-Basics-DefaultConfig')">从您的应用中检索并使用默认配置</router-link>

</li>
</ol>

<h4 >在配置上添加Maven依赖项</h4>
<div class="section">
<markup
lang="xml"
title="Config Dependency in <code>pom.xml</code>"
>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.helidon.config&lt;/groupId&gt;
        &lt;artifactId&gt;helidon-config&lt;/artifactId&gt;
        &lt;version&gt;version-of-config-you-are-using&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</markup>

</div>

<h4 >更新 <code>module-info.java</code></h4>
<div class="section">
<p>如果您使用的是Java 9，则为您的应用程序创建或更新 <code>module-info.java</code> 文件：</p>

<markup
lang="java"
title="创建简单的配置属性文件"
>module myModule {
    requires io.helidon.config;
}</markup>

</div>

<h4 >创建简单的配置属性文件</h4>
<div class="section">
<markup

title="Example <code>src/main/resources/application.properties</code> config file"
>greeting = Hello

web.debug = true
web.page-size = 20
web.ratio = 1.3

bl.initial-id = 10000000000

origin = props
java.home=homeFromProps # will be ignored</markup>

</div>

<h4 >使用默认配置编写代码</h4>
<div class="section">
<markup
lang="java"
title="Create and Use Default <code>Config</code> from Java"
>import io.helidon.config.Config; <span class="conum" data-value="1" />
...
        Config config = Config.create(); <span class="conum" data-value="2" />
        System.out.println(String.format(
                      "greeting is %s\n"
                    + "web.debug is %b\n"
                    + "web.page-size is %d\n"
                    + "web.ratio is %f\n"
                    + "bl.initial-id is %d\n"
                    + "origin is %s\n"
                    + "java.home is %s",
                config.get("greeting").asString(),  <span class="conum" data-value="3" />
                config.get("web.debug").asBoolean(),
                config.get("web.page-size").asInt(),
                config.get("web.ratio").asDouble(),
                config.get("bl.initial-id").asLong(),
                config.get("origin").asString(),
                config.get("java.home").asString()));</markup>

<ul class="colist">
<li data-value="1">导入 <code>Config</code></li>
<li data-value="2">从默认源创建配置树的根</li>
<li data-value="3">通过点名称检索各种值，并将它们解码为适当的Java类型。</li>
</ul>
<p>在构建和运行项目时，输出将如下所示：</p>

<markup


>greeting is Hello
web.debug is true
web.page-size is 20
web.ratio is 1.300000
bl.initial-id is 10000000000
origin is props
java.home is /Library/Java/JavaVirtualMachines/jdk-10.0.1.jdk/Contents/Home</markup>


<h5 >配置默认配置的源</h5>
<div class="section">
<p>默认配置使用以下配置源，此处列出从最重要到次要：</p>

<ol style="margin-left: 15px;">
<li>
Java系统属性

</li>
<li>
环境变量

</li>
<li>
<code>application.properties</code>, 如果存在于类路径

</li>
</ol>
<p>优先级（从最重要到最不重要）意味着如果给定的配置键出现在多个源中，
则在更重要的源中分配的值会否决来自不太重要的源的值。</p>

<p>通过注意程序已经显示您的实际 <code>java.home</code> 来验证这一点，
Java将其设置为系统属性，而不是示例 <code>application.properties</code> 文件中设置的值。</p>

</div>

<h5 >内置支持配置格式</h5>
<div class="section">
<p>如果向依赖项添加其他Helidon配置maven工件，
则配置系统可以读取Java属性格式以外的格式，默认配置将按以下顺序搜索其他 <code>application</code> 文件类型。
请注意，默认配置会在找到以下某个文件后停止;它不会合并它可以找到的所有这些文件。</p>

<div class="block-title"><span>默认配置文件 (most to least important)</span></div>
<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 33.333%;">
<col style="width: 33.333%;">
<col style="width: 33.333%;">
</colgroup>
<thead>
<tr>
<th>Source</th>
<th>Helidon maven artifact ID (group ID: <code>io.helidon.config</code>)</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>application.yaml</code></td>
<td><code>helidon-config-yaml</code></td>
<td>YAML format <a id=""
title=""
target="_blank"
href="http://yaml.org">http://yaml.org</a></td>
</tr>
<tr>
<td><code>application.conf</code></td>
<td><code>helidon-config-hcon</code></td>
<td>HOCON format <a id=""
title=""
target="_blank"
href="https://github.com/lightbend/config#using-hocon-the-json-superset">https://github.com/lightbend/config#using-hocon-the-json-superset</a></td>
</tr>
<tr>
<td><code>application.json</code></td>
<td><code>helidon-config-hcon</code></td>
<td>JSON format <a id=""
title=""
target="_blank"
href="https://json.org/">https://json.org/</a></td>
</tr>
<tr>
<td><code>application.properties</code></td>
<td><code>helidon-config</code></td>
<td>Java properties format</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

<h2 >下一步</h2>
<div class="section">
<p>尽管默认配置使用起来非常简单，但您的应用程序可以根据需要进行尽可能多的控制</p>

<ul class="ulist">
<li>
<p>加载配置数据，</p>

</li>
<li>
<p>加载后访问数据，</p>

</li>
<li>
<p>并扩展和修改配置系统的行为。</p>

</li>
</ul>
<p>通过以下步骤:</p>

<ul class="ulist">
<li>
<p>在 <code>Config.Builder</code> 对象上创建和调用方法以构造 <code>Config</code> 实例</p>
<p>使用构建器，应用程序可以控制有关配置系统如何创建生成的Config实例的所有内容:
配置源，解析器，轮询策略，过滤器，覆盖，映射器，环境变量和Java系统属性是否用作配置源。
JavaDoc解释了如何使用<a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/Config.Builder.html"><code>Config.Builder</code></a>。</p>

</li>
</ul>
<p>.</p>

<p>+
或者
* 在运行时类路径上创建<router-link :to="{path: '/config/06_advanced-configuration', hash: '#Config-Advanced-metaconfig'}">元配置</router-link>文件，以控制配置系统如何准备默认配置。</p>

<p>创建后， <code>Config</code>  对象提供了许多方法，
应用程序可以使用这些方法将配置数据检索为各种Java类型。有关完整的详细信息，
请参阅 <a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/Config.html"><code>Config</code></a> JavaDoc。</p>

<p>下表中的链接将引导您获取有关各种其他配置主题的更多信息。</p>

<div class="block-title"><span>控制如何加载配置</span></div>
<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Topic</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Where config comes from</td>
<td><router-link to="/config/02_config-sources">Config sources</router-link>,
<router-link :to="{path: '/config/06_advanced-configuration', hash: '#metaconfig'}">meta-configuration</router-link></td>
</tr>
<tr>
<td>What format config data is expressed in</td>
<td><router-link :to="{path: '/config/02_config-sources', hash: '#parsers'}">Config parsers</router-link>,
<router-link to="/config/08_supported-formats">supported formats</router-link></td>
</tr>
<tr>
<td>How to filter, override, and dereference values</td>
<td><router-link :to="{path: '/config/06_advanced-configuration', hash: '#filters-and-overrides'}">Filters and overrides</router-link></td>
</tr>
<tr>
<td>What happens when config data changes</td>
<td><router-link :to="{path: '/config/05_mutability-support', hash: '#polling'}">Config polling</router-link></td>
</tr>
<tr>
<td>How to deal with loading errors</td>
<td><router-link :to="{path: '/config/02_config-sources', hash: '#retry'}">Config retry policies</router-link></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span>访问配置数据</span></div>
<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Topic</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>How config data is translated into Java types</td>
<td><router-link to="/config/04_property-mapping">Config mappers</router-link></td>
</tr>
<tr>
<td>How to navigate config trees</td>
<td><router-link to="/config/03_hierarchical-features">Navigation</router-link></td>
</tr>
</tbody>
</table>
</div>
<div class="block-title"><span>扩展和微调配置系统</span></div>
<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Topic</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Writing extensions</td>
<td><router-link to="/config/07_extensions">Extensions</router-link></td>
</tr>
</tbody>
</table>
</div>
</div>
</doc-view>
