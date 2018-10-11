<doc-view>

<v-layout row wrap>
<v-flex xs12 sm10 lg10>
<v-card class="section-def" v-bind:color="$store.state.currentColor">
<v-card-text class="pa-3">
<v-card class="section-def__card">
<v-card-text>
<dl>
<dt slot=title>加载配置：配置源和解析器</dt>
<dd slot="desc"><p>可以从不同位置加载不同格式表示的配置。本节介绍应用程序如何使用配置源和配置解析器来加载配置数据。</p>
</dd>
</dl>
</v-card-text>
</v-card>
</v-card-text>
</v-card>
</v-flex>
</v-layout>

<h2 >总览</h2>
<div class="section">
<p>每个配置源从特定类型的位置读取数据，但是并不考虑那里的配置数据的格式。
每个配置解析器将以特定格式表示的数据转换为配置系统其余部分使用的内存中配置数据结构，而不关心数据所在的位置或物理检索方式。
将给定格式准备数据在给定系统的给定位置进行协同工作。
当您的应用程序准备 <code>Config.Builder</code> 时，它会设置构建器在构造生成的 <code>Config</code> 对象时应使用的 <code>ConfigSource</code> 和 <code>ConfigParser</code> 。</p>

</div>

<h2 >配置来源</h2>
<div class="section">
<p>如果您的应用程序使用默认配置，则配置系统会自动为您设置配置源，如 <router-link :to="{path: '/config/01_introduction', hash: '#config-sources-default-config'}">配置简介</router-link> 中所述。
如果您的应用程序使用 <a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/Config.Builder.html"><code>Config.Builder</code></a>，那么它可以调用该构建器上的某个源方法来设置它应该使用的配置源。</p>

<p>配置系统包括对几种配置源的支持，例如：</p>

<ul class="ulist">
<li>
<p>运行时类路径上的资源，</p>

</li>
<li>
<p>环境变量，</p>

</li>
<li>
<p>一份文件，</p>

</li>
<li>
<p>Java系统属性，</p>

</li>
<li>
<p>一个URL，</p>

</li>
<li>
<p>各种内存数据结构 (<code>String</code>, <code>Map</code>, <code>Properties</code>)</p>

</li>
</ul>
<p>有关内置配置源类型的完整列表以及如何使用它们，请参阅 <a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/ConfigSources.html"><code>ConfigSources</code></a> 类的Java文档。</p>

<p>您还可以通过实现 <a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/spi/ConfigSource.html"><code>ConfigSource</code></a> 接口来扩展配置系统以处理其他类型的源。
有关完整信息，请参阅<router-link to="/config/07_extensions">扩展</router-link>文档。</p>

<p>有关配置源的一些更复杂的方面的详细信息，请参阅 <router-link to="/config/06_advanced-configuration">高级主题</router-link> 页面。</p>

</div>

<h2 >配置解析器</h2>
<div class="section">
<p>当它从源读取配置文本时，配置系统使用配置解析器将该文本转换为表示该配置的内存数据结构。
配置系统包括几个内置解析器，例如Java属性，YAML，JSON和HOCON格式。
请参阅<router-link :to="{path: '/config/01_introduction', hash: '#built-in-formats'}">介绍中的此部分</router-link>，了解如何更改 <code>pom.xml</code> 以使应用程序可以使用这些格式的解析器。
之后，您的应用程序可以调用<a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/Config.Builder.html#addParser-io.helidon.config.spi.ConfigParser-">配置构建器 <code>addParser</code></a>方法，构建器将使用您选择的解析器。</p>

<p>您可以使用自己的自定义解析器扩展系统。
实现 <code>ConfigParser</code> 接口，然后使用 <code>addParser</code> 方法构造 <code>Config.Builder</code>，传递客户解析器的实例。
调用其中一个 <code>sources</code> 方法以包含使用自定义格式的源，然后构建 `Config对象。</p>

</div>

<h2 >检测和响应配置数据的变化</h2>
<div class="section">
<p>配置系统返回给您的应用程序的每个 <code>Config</code> 对象都是不可变的。即使其中一个底层配置源中的信息发生更改，从早期内容构建的内存数据结构也保持不变。</p>

<p>即便如此，配置系统允许您的应用程序了解数据中发生的这些潜在变化何时发生并做出相应响应。<router-link to="/config/05_mutability-support">可变性</router-link>部分详细解释了这一点，<a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/PollingStrategies.html"><code>PollingStrategies</code></a> Java 文档描述了其内置实现。</p>

</div>

<h2 >处理加载错误：重试策略</h2>
<div class="section">
<p>配置源，尤其是那些依赖于易错机制（如网络或共享文件系统）的源，可能无法在短暂停机期间加载。
配置系统允许您为应用程序使用依赖于此类技术的配置构建弹性。</p>

<p>当您的应用程序构建 <code>ConfigSource</code> 时，可以指定 <em>重试策略</em> 。该策略不仅负责加载数据，还负责在加载期间检测错误并实施算法，以便在将故障报告回应用程序之前决定重试失败负载的次数和次数。</p>

<p>配置系统包括两个预定义的重试策略：</p>

<div class="block-title"><span>预定义的重试策略</span></div>
<div class="table__overflow elevation-1 ">
<table class="datatable table">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>策略</th>
<th>总结</th>
</tr>
</thead>
<tbody>
<tr>
<td>"just call" (default)</td>
<td>要求配置源加载数据而不重试</td>
</tr>
<tr>
<td>"repeat"</td>
<td>执行可设置数量的基于时间的重试，仅在所有可用重试失败后报告失败</td>
</tr>
</tbody>
</table>
</div>
<p>有关这些内置重试策略的完整详细信息，<a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/RetryPolicies.html"><code>RetryPolicies</code></a> JavaDoc。</p>

<p>您可以制定自己的策略。实现<a id=""
title=""
target="_blank"
href="./apidocs/index.html?io/helidon/config/spi/RetryPolicy.html"><code>RetryPolicy</code></a>接口。然后将策略实现的实例传递给配置源构建器的 <code>retryPolicy</code> 方法。</p>

</div>
</doc-view>
