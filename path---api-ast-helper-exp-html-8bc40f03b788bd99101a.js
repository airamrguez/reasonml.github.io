webpackJsonp([318],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-helper-exp-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Ast_helper.Exp.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_helper.Pat.html" title="Ast_helper.Pat">Previous</a>\n&#xA0;<a class="up" href="Ast_helper.html" title="Ast_helper">Up</a>\n&#xA0;<a class="post" href="Ast_helper.Val.html" title="Ast_helper.Val">Next</a>\n</div>\n<h1>Module <a href="type_Ast_helper.Exp.html">Ast_helper.Exp</a></h1>\n\n<pre><span class="keyword">module</span> Exp: sig .. end</pre><div class="info module top">\nExpressions<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> mk:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression_desc =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> attr: Parsetree.expression =&gt; Parsetree.attribute =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> ident:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Ast_helper.lid =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> constant:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Asttypes.constant =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> let_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.rec_flag =&gt;\n  list Parsetree.value_binding =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> fun_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.label =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> function_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; list Parsetree.case =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> apply:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  list (Asttypes.label, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> match_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  list Parsetree.case =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> try_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  list Parsetree.case =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> tuple:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  list Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> construct:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Ast_helper.lid =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> variant:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.label =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> record:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  list (Ast_helper.lid, Parsetree.expression) =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> field:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Ast_helper.lid =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> setfield:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Ast_helper.lid =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> array:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  list Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> ifthenelse:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> sequence:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> while_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> for_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression =&gt;\n  Asttypes.direction_flag =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> coerce:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  option Parsetree.core_type =&gt;\n  Parsetree.core_type =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> constraint_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.core_type =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> send:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  string =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> new_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Ast_helper.lid =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> setinstvar:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Ast_helper.str =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> override:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  list (Ast_helper.str, Parsetree.expression) =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> letmodule:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Ast_helper.str =&gt;\n  Parsetree.module_expr =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> assert_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.expression =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> lazy_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.expression =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> poly:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.expression =&gt;\n  option Parsetree.core_type =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> object_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.class_structure =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> newtype:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  string =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> pack:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.module_expr =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> open_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.override_flag =&gt;\n  Ast_helper.lid =&gt;\n  Parsetree.expression =&gt;\n  Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> extension:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.extension =&gt; Parsetree.expression;\n</pre>\n<pre><span class="keyword">let</span> case:\n  Parsetree.pattern =&gt; guard::Parsetree.expression? =&gt; Parsetree.expression =&gt; Parsetree.case;\n</pre></div>'}}},pathContext:{relativePath:"api/Ast_helper.Exp.html"}}}});
//# sourceMappingURL=path---api-ast-helper-exp-html-8bc40f03b788bd99101a.js.map