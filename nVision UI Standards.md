<style>
/*Bootstrap Styles*/
html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid #c0c0c0}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}@media print{*,*:before,*:after{color:#000!important;text-shadow:none!important;background:transparent!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" ("attr(href) ")"}abbr[title]:after{content:" ("attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}select{background:#fff!important}.navbar{display:none}.btn > .caret,.dropup > .btn > .caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered th,.table-bordered td{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url('../fonts/glyphicons-halflings-regular.eot');src:url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('../fonts/glyphicons-halflings-regular.woff') format('woff'),url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:"\2a"}.glyphicon-plus:before{content:"\2b"}.glyphicon-euro:before,.glyphicon-eur:before{content:"\20ac"}.glyphicon-minus:before{content:"\2212"}.glyphicon-cloud:before{content:"\2601"}.glyphicon-envelope:before{content:"\2709"}.glyphicon-pencil:before{content:"\270f"}.glyphicon-glass:before{content:"\e001"}.glyphicon-music:before{content:"\e002"}.glyphicon-search:before{content:"\e003"}.glyphicon-heart:before{content:"\e005"}.glyphicon-star:before{content:"\e006"}.glyphicon-star-empty:before{content:"\e007"}.glyphicon-user:before{content:"\e008"}.glyphicon-film:before{content:"\e009"}.glyphicon-th-large:before{content:"\e010"}.glyphicon-th:before{content:"\e011"}.glyphicon-th-list:before{content:"\e012"}.glyphicon-ok:before{content:"\e013"}.glyphicon-remove:before{content:"\e014"}.glyphicon-zoom-in:before{content:"\e015"}.glyphicon-zoom-out:before{content:"\e016"}.glyphicon-off:before{content:"\e017"}.glyphicon-signal:before{content:"\e018"}.glyphicon-cog:before{content:"\e019"}.glyphicon-trash:before{content:"\e020"}.glyphicon-home:before{content:"\e021"}.glyphicon-file:before{content:"\e022"}.glyphicon-time:before{content:"\e023"}.glyphicon-road:before{content:"\e024"}.glyphicon-download-alt:before{content:"\e025"}.glyphicon-download:before{content:"\e026"}.glyphicon-upload:before{content:"\e027"}.glyphicon-inbox:before{content:"\e028"}.glyphicon-play-circle:before{content:"\e029"}.glyphicon-repeat:before{content:"\e030"}.glyphicon-refresh:before{content:"\e031"}.glyphicon-list-alt:before{content:"\e032"}.glyphicon-lock:before{content:"\e033"}.glyphicon-flag:before{content:"\e034"}.glyphicon-headphones:before{content:"\e035"}.glyphicon-volume-off:before{content:"\e036"}.glyphicon-volume-down:before{content:"\e037"}.glyphicon-volume-up:before{content:"\e038"}.glyphicon-qrcode:before{content:"\e039"}.glyphicon-barcode:before{content:"\e040"}.glyphicon-tag:before{content:"\e041"}.glyphicon-tags:before{content:"\e042"}.glyphicon-book:before{content:"\e043"}.glyphicon-bookmark:before{content:"\e044"}.glyphicon-print:before{content:"\e045"}.glyphicon-camera:before{content:"\e046"}.glyphicon-font:before{content:"\e047"}.glyphicon-bold:before{content:"\e048"}.glyphicon-italic:before{content:"\e049"}.glyphicon-text-height:before{content:"\e050"}.glyphicon-text-width:before{content:"\e051"}.glyphicon-align-left:before{content:"\e052"}.glyphicon-align-center:before{content:"\e053"}.glyphicon-align-right:before{content:"\e054"}.glyphicon-align-justify:before{content:"\e055"}.glyphicon-list:before{content:"\e056"}.glyphicon-indent-left:before{content:"\e057"}.glyphicon-indent-right:before{content:"\e058"}.glyphicon-facetime-video:before{content:"\e059"}.glyphicon-picture:before{content:"\e060"}.glyphicon-map-marker:before{content:"\e062"}.glyphicon-adjust:before{content:"\e063"}.glyphicon-tint:before{content:"\e064"}.glyphicon-edit:before{content:"\e065"}.glyphicon-share:before{content:"\e066"}.glyphicon-check:before{content:"\e067"}.glyphicon-move:before{content:"\e068"}.glyphicon-step-backward:before{content:"\e069"}.glyphicon-fast-backward:before{content:"\e070"}.glyphicon-backward:before{content:"\e071"}.glyphicon-play:before{content:"\e072"}.glyphicon-pause:before{content:"\e073"}.glyphicon-stop:before{content:"\e074"}.glyphicon-forward:before{content:"\e075"}.glyphicon-fast-forward:before{content:"\e076"}.glyphicon-step-forward:before{content:"\e077"}.glyphicon-eject:before{content:"\e078"}.glyphicon-chevron-left:before{content:"\e079"}.glyphicon-chevron-right:before{content:"\e080"}.glyphicon-plus-sign:before{content:"\e081"}.glyphicon-minus-sign:before{content:"\e082"}.glyphicon-remove-sign:before{content:"\e083"}.glyphicon-ok-sign:before{content:"\e084"}.glyphicon-question-sign:before{content:"\e085"}.glyphicon-info-sign:before{content:"\e086"}.glyphicon-screenshot:before{content:"\e087"}.glyphicon-remove-circle:before{content:"\e088"}.glyphicon-ok-circle:before{content:"\e089"}.glyphicon-ban-circle:before{content:"\e090"}.glyphicon-arrow-left:before{content:"\e091"}.glyphicon-arrow-right:before{content:"\e092"}.glyphicon-arrow-up:before{content:"\e093"}.glyphicon-arrow-down:before{content:"\e094"}.glyphicon-share-alt:before{content:"\e095"}.glyphicon-resize-full:before{content:"\e096"}.glyphicon-resize-small:before{content:"\e097"}.glyphicon-exclamation-sign:before{content:"\e101"}.glyphicon-gift:before{content:"\e102"}.glyphicon-leaf:before{content:"\e103"}.glyphicon-fire:before{content:"\e104"}.glyphicon-eye-open:before{content:"\e105"}.glyphicon-eye-close:before{content:"\e106"}.glyphicon-warning-sign:before{content:"\e107"}.glyphicon-plane:before{content:"\e108"}.glyphicon-calendar:before{content:"\e109"}.glyphicon-random:before{content:"\e110"}.glyphicon-comment:before{content:"\e111"}.glyphicon-magnet:before{content:"\e112"}.glyphicon-chevron-up:before{content:"\e113"}.glyphicon-chevron-down:before{content:"\e114"}.glyphicon-retweet:before{content:"\e115"}.glyphicon-shopping-cart:before{content:"\e116"}.glyphicon-folder-close:before{content:"\e117"}.glyphicon-folder-open:before{content:"\e118"}.glyphicon-resize-vertical:before{content:"\e119"}.glyphicon-resize-horizontal:before{content:"\e120"}.glyphicon-hdd:before{content:"\e121"}.glyphicon-bullhorn:before{content:"\e122"}.glyphicon-bell:before{content:"\e123"}.glyphicon-certificate:before{content:"\e124"}.glyphicon-thumbs-up:before{content:"\e125"}.glyphicon-thumbs-down:before{content:"\e126"}.glyphicon-hand-right:before{content:"\e127"}.glyphicon-hand-left:before{content:"\e128"}.glyphicon-hand-up:before{content:"\e129"}.glyphicon-hand-down:before{content:"\e130"}.glyphicon-circle-arrow-right:before{content:"\e131"}.glyphicon-circle-arrow-left:before{content:"\e132"}.glyphicon-circle-arrow-up:before{content:"\e133"}.glyphicon-circle-arrow-down:before{content:"\e134"}.glyphicon-globe:before{content:"\e135"}.glyphicon-wrench:before{content:"\e136"}.glyphicon-tasks:before{content:"\e137"}.glyphicon-filter:before{content:"\e138"}.glyphicon-briefcase:before{content:"\e139"}.glyphicon-fullscreen:before{content:"\e140"}.glyphicon-dashboard:before{content:"\e141"}.glyphicon-paperclip:before{content:"\e142"}.glyphicon-heart-empty:before{content:"\e143"}.glyphicon-link:before{content:"\e144"}.glyphicon-phone:before{content:"\e145"}.glyphicon-pushpin:before{content:"\e146"}.glyphicon-usd:before{content:"\e148"}.glyphicon-gbp:before{content:"\e149"}.glyphicon-sort:before{content:"\e150"}.glyphicon-sort-by-alphabet:before{content:"\e151"}.glyphicon-sort-by-alphabet-alt:before{content:"\e152"}.glyphicon-sort-by-order:before{content:"\e153"}.glyphicon-sort-by-order-alt:before{content:"\e154"}.glyphicon-sort-by-attributes:before{content:"\e155"}.glyphicon-sort-by-attributes-alt:before{content:"\e156"}.glyphicon-unchecked:before{content:"\e157"}.glyphicon-expand:before{content:"\e158"}.glyphicon-collapse-down:before{content:"\e159"}.glyphicon-collapse-up:before{content:"\e160"}.glyphicon-log-in:before{content:"\e161"}.glyphicon-flash:before{content:"\e162"}.glyphicon-log-out:before{content:"\e163"}.glyphicon-new-window:before{content:"\e164"}.glyphicon-record:before{content:"\e165"}.glyphicon-save:before{content:"\e166"}.glyphicon-open:before{content:"\e167"}.glyphicon-saved:before{content:"\e168"}.glyphicon-import:before{content:"\e169"}.glyphicon-export:before{content:"\e170"}.glyphicon-send:before{content:"\e171"}.glyphicon-floppy-disk:before{content:"\e172"}.glyphicon-floppy-saved:before{content:"\e173"}.glyphicon-floppy-remove:before{content:"\e174"}.glyphicon-floppy-save:before{content:"\e175"}.glyphicon-floppy-open:before{content:"\e176"}.glyphicon-credit-card:before{content:"\e177"}.glyphicon-transfer:before{content:"\e178"}.glyphicon-cutlery:before{content:"\e179"}.glyphicon-header:before{content:"\e180"}.glyphicon-compressed:before{content:"\e181"}.glyphicon-earphone:before{content:"\e182"}.glyphicon-phone-alt:before{content:"\e183"}.glyphicon-tower:before{content:"\e184"}.glyphicon-stats:before{content:"\e185"}.glyphicon-sd-video:before{content:"\e186"}.glyphicon-hd-video:before{content:"\e187"}.glyphicon-subtitles:before{content:"\e188"}.glyphicon-sound-stereo:before{content:"\e189"}.glyphicon-sound-dolby:before{content:"\e190"}.glyphicon-sound-5-1:before{content:"\e191"}.glyphicon-sound-6-1:before{content:"\e192"}.glyphicon-sound-7-1:before{content:"\e193"}.glyphicon-copyright-mark:before{content:"\e194"}.glyphicon-registration-mark:before{content:"\e195"}.glyphicon-cloud-download:before{content:"\e197"}.glyphicon-cloud-upload:before{content:"\e198"}.glyphicon-tree-conifer:before{content:"\e199"}.glyphicon-tree-deciduous:before{content:"\e200"}.glyphicon-cd:before{content:"\e201"}.glyphicon-save-file:before{content:"\e202"}.glyphicon-open-file:before{content:"\e203"}.glyphicon-level-up:before{content:"\e204"}.glyphicon-copy:before{content:"\e205"}.glyphicon-paste:before{content:"\e206"}.glyphicon-alert:before{content:"\e209"}.glyphicon-equalizer:before{content:"\e210"}.glyphicon-king:before{content:"\e211"}.glyphicon-queen:before{content:"\e212"}.glyphicon-pawn:before{content:"\e213"}.glyphicon-bishop:before{content:"\e214"}.glyphicon-knight:before{content:"\e215"}.glyphicon-baby-formula:before{content:"\e216"}.glyphicon-tent:before{content:"\26fa"}.glyphicon-blackboard:before{content:"\e218"}.glyphicon-bed:before{content:"\e219"}.glyphicon-apple:before{content:"\f8ff"}.glyphicon-erase:before{content:"\e221"}.glyphicon-hourglass:before{content:"\231b"}.glyphicon-lamp:before{content:"\e223"}.glyphicon-duplicate:before{content:"\e224"}.glyphicon-piggy-bank:before{content:"\e225"}.glyphicon-scissors:before{content:"\e226"}.glyphicon-bitcoin:before{content:"\e227"}.glyphicon-yen:before{content:"\00a5"}.glyphicon-ruble:before{content:"\20bd"}.glyphicon-scale:before{content:"\e230"}.glyphicon-ice-lolly:before{content:"\e231"}.glyphicon-ice-lolly-tasted:before{content:"\e232"}.glyphicon-education:before{content:"\e233"}.glyphicon-option-horizontal:before{content:"\e234"}.glyphicon-option-vertical:before{content:"\e235"}.glyphicon-menu-hamburger:before{content:"\e236"}.glyphicon-modal-window:before{content:"\e237"}.glyphicon-oil:before{content:"\e238"}.glyphicon-grain:before{content:"\e239"}.glyphicon-sunglasses:before{content:"\e240"}.glyphicon-text-size:before{content:"\e241"}.glyphicon-text-color:before{content:"\e242"}.glyphicon-text-background:before{content:"\e243"}.glyphicon-object-align-top:before{content:"\e244"}.glyphicon-object-align-bottom:before{content:"\e245"}.glyphicon-object-align-horizontal:before{content:"\e246"}.glyphicon-object-align-left:before{content:"\e247"}.glyphicon-object-align-vertical:before{content:"\e248"}.glyphicon-object-align-right:before{content:"\e249"}.glyphicon-triangle-right:before{content:"\e250"}.glyphicon-triangle-left:before{content:"\e251"}.glyphicon-triangle-bottom:before{content:"\e252"}.glyphicon-triangle-top:before{content:"\e253"}.glyphicon-console:before{content:"\e254"}.glyphicon-superscript:before{content:"\e255"}.glyphicon-subscript:before{content:"\e256"}.glyphicon-menu-left:before{content:"\e257"}.glyphicon-menu-right:before{content:"\e258"}.glyphicon-menu-down:before{content:"\e259"}.glyphicon-menu-up:before{content:"\e260"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive,.thumbnail > img,.thumbnail a > img,.carousel-inner > .item > img,.carousel-inner > .item > a > img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#777}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline > li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:bold}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\2014 \00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\00A0 \2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Courier New",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:bold;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,.col-xs-3,.col-sm-3,.col-md-3,.col-lg-3,.col-xs-4,.col-sm-4,.col-md-4,.col-lg-4,.col-xs-5,.col-sm-5,.col-md-5,.col-lg-5,.col-xs-6,.col-sm-6,.col-md-6,.col-lg-6,.col-xs-7,.col-sm-7,.col-md-7,.col-lg-7,.col-xs-8,.col-sm-8,.col-md-8,.col-lg-8,.col-xs-9,.col-sm-9,.col-md-9,.col-lg-9,.col-xs-10,.col-sm-10,.col-md-10,.col-lg-10,.col-xs-11,.col-sm-11,.col-md-11,.col-lg-11,.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table > thead > tr > th,.table > tbody > tr > th,.table > tfoot > tr > th,.table > thead > tr > td,.table > tbody > tr > td,.table > tfoot > tr > td{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table > thead > tr > th{vertical-align:bottom;border-bottom:2px solid #ddd}.table > caption + thead > tr:first-child > th,.table > colgroup + thead > tr:first-child > th,.table > thead:first-child > tr:first-child > th,.table > caption + thead > tr:first-child > td,.table > colgroup + thead > tr:first-child > td,.table > thead:first-child > tr:first-child > td{border-top:0}.table > tbody + tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed > thead > tr > th,.table-condensed > tbody > tr > th,.table-condensed > tfoot > tr > th,.table-condensed > thead > tr > td,.table-condensed > tbody > tr > td,.table-condensed > tfoot > tr > td{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered > thead > tr > th,.table-bordered > tbody > tr > th,.table-bordered > tfoot > tr > th,.table-bordered > thead > tr > td,.table-bordered > tbody > tr > td,.table-bordered > tfoot > tr > td{border:1px solid #ddd}.table-bordered > thead > tr > th,.table-bordered > thead > tr > td{border-bottom-width:2px}.table-striped > tbody > tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover > tbody > tr:hover{background-color:#f5f5f5}table col[class*="col-"]{position:static;display:table-column;float:none}table td[class*="col-"],table th[class*="col-"]{position:static;display:table-cell;float:none}.table > thead > tr > td.active,.table > tbody > tr > td.active,.table > tfoot > tr > td.active,.table > thead > tr > th.active,.table > tbody > tr > th.active,.table > tfoot > tr > th.active,.table > thead > tr.active > td,.table > tbody > tr.active > td,.table > tfoot > tr.active > td,.table > thead > tr.active > th,.table > tbody > tr.active > th,.table > tfoot > tr.active > th{background-color:#f5f5f5}.table-hover > tbody > tr > td.active:hover,.table-hover > tbody > tr > th.active:hover,.table-hover > tbody > tr.active:hover > td,.table-hover > tbody > tr:hover > .active,.table-hover > tbody > tr.active:hover > th{background-color:#e8e8e8}.table > thead > tr > td.success,.table > tbody > tr > td.success,.table > tfoot > tr > td.success,.table > thead > tr > th.success,.table > tbody > tr > th.success,.table > tfoot > tr > th.success,.table > thead > tr.success > td,.table > tbody > tr.success > td,.table > tfoot > tr.success > td,.table > thead > tr.success > th,.table > tbody > tr.success > th,.table > tfoot > tr.success > th{background-color:#dff0d8}.table-hover > tbody > tr > td.success:hover,.table-hover > tbody > tr > th.success:hover,.table-hover > tbody > tr.success:hover > td,.table-hover > tbody > tr:hover > .success,.table-hover > tbody > tr.success:hover > th{background-color:#d0e9c6}.table > thead > tr > td.info,.table > tbody > tr > td.info,.table > tfoot > tr > td.info,.table > thead > tr > th.info,.table > tbody > tr > th.info,.table > tfoot > tr > th.info,.table > thead > tr.info > td,.table > tbody > tr.info > td,.table > tfoot > tr.info > td,.table > thead > tr.info > th,.table > tbody > tr.info > th,.table > tfoot > tr.info > th{background-color:#d9edf7}.table-hover > tbody > tr > td.info:hover,.table-hover > tbody > tr > th.info:hover,.table-hover > tbody > tr.info:hover > td,.table-hover > tbody > tr:hover > .info,.table-hover > tbody > tr.info:hover > th{background-color:#c4e3f3}.table > thead > tr > td.warning,.table > tbody > tr > td.warning,.table > tfoot > tr > td.warning,.table > thead > tr > th.warning,.table > tbody > tr > th.warning,.table > tfoot > tr > th.warning,.table > thead > tr.warning > td,.table > tbody > tr.warning > td,.table > tfoot > tr.warning > td,.table > thead > tr.warning > th,.table > tbody > tr.warning > th,.table > tfoot > tr.warning > th{background-color:#fcf8e3}.table-hover > tbody > tr > td.warning:hover,.table-hover > tbody > tr > th.warning:hover,.table-hover > tbody > tr.warning:hover > td,.table-hover > tbody > tr:hover > .warning,.table-hover > tbody > tr.warning:hover > th{background-color:#faf2cc}.table > thead > tr > td.danger,.table > tbody > tr > td.danger,.table > tfoot > tr > td.danger,.table > thead > tr > th.danger,.table > tbody > tr > th.danger,.table > tfoot > tr > th.danger,.table > thead > tr.danger > td,.table > tbody > tr.danger > td,.table > tfoot > tr.danger > td,.table > thead > tr.danger > th,.table > tbody > tr.danger > th,.table > tfoot > tr.danger > th{background-color:#f2dede}.table-hover > tbody > tr > td.danger:hover,.table-hover > tbody > tr > th.danger:hover,.table-hover > tbody > tr.danger:hover > td,.table-hover > tbody > tr:hover > .danger,.table-hover > tbody > tr.danger:hover > th{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive > .table{margin-bottom:0}.table-responsive > .table > thead > tr > th,.table-responsive > .table > tbody > tr > th,.table-responsive > .table > tfoot > tr > th,.table-responsive > .table > thead > tr > td,.table-responsive > .table > tbody > tr > td,.table-responsive > .table > tfoot > tr > td{white-space:nowrap}.table-responsive > .table-bordered{border:0}.table-responsive > .table-bordered > thead > tr > th:first-child,.table-responsive > .table-bordered > tbody > tr > th:first-child,.table-responsive > .table-bordered > tfoot > tr > th:first-child,.table-responsive > .table-bordered > thead > tr > td:first-child,.table-responsive > .table-bordered > tbody > tr > td:first-child,.table-responsive > .table-bordered > tfoot > tr > td:first-child{border-left:0}.table-responsive > .table-bordered > thead > tr > th:last-child,.table-responsive > .table-bordered > tbody > tr > th:last-child,.table-responsive > .table-bordered > tfoot > tr > th:last-child,.table-responsive > .table-bordered > thead > tr > td:last-child,.table-responsive > .table-bordered > tbody > tr > td:last-child,.table-responsive > .table-bordered > tfoot > tr > td:last-child{border-right:0}.table-responsive > .table-bordered > tbody > tr:last-child > th,.table-responsive > .table-bordered > tfoot > tr:last-child > th,.table-responsive > .table-bordered > tbody > tr:last-child > td,.table-responsive > .table-bordered > tfoot > tr:last-child > td{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type="search"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type="radio"],input[type="checkbox"]{margin:4px 0 0;margin-top:1px \9;line-height:normal}input[type="file"]{display:block}input[type="range"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type="file"]:focus,input[type="radio"]:focus,input[type="checkbox"]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1}textarea.form-control{height:auto}input[type="search"]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"]{line-height:34px}input[type="date"].input-sm,input[type="time"].input-sm,input[type="datetime-local"].input-sm,input[type="month"].input-sm,.input-group-sm input[type="date"],.input-group-sm input[type="time"],.input-group-sm input[type="datetime-local"],.input-group-sm input[type="month"]{line-height:30px}input[type="date"].input-lg,input[type="time"].input-lg,input[type="datetime-local"].input-lg,input[type="month"].input-lg,.input-group-lg input[type="date"],.input-group-lg input[type="time"],.input-group-lg input[type="datetime-local"],.input-group-lg input[type="month"]{line-height:46px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type="radio"],.radio-inline input[type="radio"],.checkbox input[type="checkbox"],.checkbox-inline input[type="checkbox"]{position:absolute;margin-top:4px \9;margin-left:-20px}.radio + .radio,.checkbox + .checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{display:inline-block;padding-left:20px;margin-bottom:0;font-weight:normal;vertical-align:middle;cursor:pointer}.radio-inline + .radio-inline,.checkbox-inline + .checkbox-inline{margin-top:0;margin-left:10px}input[type="radio"][disabled],input[type="checkbox"][disabled],input[type="radio"].disabled,input[type="checkbox"].disabled,fieldset[disabled] input[type="radio"],fieldset[disabled] input[type="checkbox"]{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.form-group-sm .form-control{height:30px;line-height:30px}textarea.form-group-sm .form-control,select[multiple].form-group-sm .form-control{height:auto}.form-group-sm .form-control-static{height:30px;padding:5px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.form-group-lg .form-control{height:46px;line-height:46px}textarea.form-group-lg .form-control,select[multiple].form-group-lg .form-control{height:auto}.form-group-lg .form-control-static{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.input-lg + .form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm + .form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label ~ .form-control-feedback{top:25px}.has-feedback label.sr-only ~ .form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group > .form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type="radio"],.form-inline .checkbox input[type="checkbox"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.333333px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:normal;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#333;text-decoration:none}.btn:active,.btn.active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{pointer-events:none;cursor:not-allowed;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none;opacity:.65}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:hover,.btn-default:focus,.btn-default.focus,.btn-default:active,.btn-default.active,.open > .dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active,.btn-default.active,.open > .dropdown-toggle.btn-default{background-image:none}.btn-default.disabled,.btn-default[disabled],fieldset[disabled] .btn-default,.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus,.btn-default.disabled:active,.btn-default[disabled]:active,fieldset[disabled] .btn-default:active,.btn-default.disabled.active,.btn-default[disabled].active,fieldset[disabled] .btn-default.active{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary:hover,.btn-primary:focus,.btn-primary.focus,.btn-primary:active,.btn-primary.active,.open > .dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active,.btn-primary.active,.open > .dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled,.btn-primary[disabled],fieldset[disabled] .btn-primary,.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus,.btn-primary.disabled:active,.btn-primary[disabled]:active,fieldset[disabled] .btn-primary:active,.btn-primary.disabled.active,.btn-primary[disabled].active,fieldset[disabled] .btn-primary.active{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:hover,.btn-success:focus,.btn-success.focus,.btn-success:active,.btn-success.active,.open > .dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active,.btn-success.active,.open > .dropdown-toggle.btn-success{background-image:none}.btn-success.disabled,.btn-success[disabled],fieldset[disabled] .btn-success,.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus,.btn-success.disabled:active,.btn-success[disabled]:active,fieldset[disabled] .btn-success:active,.btn-success.disabled.active,.btn-success[disabled].active,fieldset[disabled] .btn-success.active{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:hover,.btn-info:focus,.btn-info.focus,.btn-info:active,.btn-info.active,.open > .dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active,.btn-info.active,.open > .dropdown-toggle.btn-info{background-image:none}.btn-info.disabled,.btn-info[disabled],fieldset[disabled] .btn-info,.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus,.btn-info.disabled:active,.btn-info[disabled]:active,fieldset[disabled] .btn-info:active,.btn-info.disabled.active,.btn-info[disabled].active,fieldset[disabled] .btn-info.active{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:hover,.btn-warning:focus,.btn-warning.focus,.btn-warning:active,.btn-warning.active,.open > .dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open > .dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled,.btn-warning[disabled],fieldset[disabled] .btn-warning,.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus,.btn-warning.disabled:active,.btn-warning[disabled]:active,fieldset[disabled] .btn-warning:active,.btn-warning.disabled.active,.btn-warning[disabled].active,fieldset[disabled] .btn-warning.active{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:hover,.btn-danger:focus,.btn-danger.focus,.btn-danger:active,.btn-danger.active,.open > .dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open > .dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled,.btn-danger[disabled],fieldset[disabled] .btn-danger,.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus,.btn-danger.disabled:active,.btn-danger[disabled]:active,fieldset[disabled] .btn-danger:active,.btn-danger.disabled.active,.btn-danger[disabled].active,fieldset[disabled] .btn-danger.active{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:normal;color:#337ab7;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#777;text-decoration:none}.btn-lg,.btn-group-lg > .btn{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-sm,.btn-group-sm > .btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs > .btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block + .btn-block{margin-top:5px}input[type="submit"].btn-block,input[type="reset"].btn-block,input[type="button"].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none;visibility:hidden}.collapse.in{display:block;visibility:visible}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;-o-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropup,.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu > li > a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu > li > a:hover,.dropdown-menu > li > a:focus{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu > .active > a,.dropdown-menu > .active > a:hover,.dropdown-menu > .active > a:focus{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu > .disabled > a,.dropdown-menu > .disabled > a:hover,.dropdown-menu > .disabled > a:focus{color:#777}.dropdown-menu > .disabled > a:hover,.dropdown-menu > .disabled > a:focus{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false)}.open > .dropdown-menu{display:block}.open > a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right > .dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:"";border-top:0;border-bottom:4px solid}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group > .btn,.btn-group-vertical > .btn{position:relative;float:left}.btn-group > .btn:hover,.btn-group-vertical > .btn:hover,.btn-group > .btn:focus,.btn-group-vertical > .btn:focus,.btn-group > .btn:active,.btn-group-vertical > .btn:active,.btn-group > .btn.active,.btn-group-vertical > .btn.active{z-index:2}.btn-group .btn + .btn,.btn-group .btn + .btn-group,.btn-group .btn-group + .btn,.btn-group .btn-group + .btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar > .btn,.btn-toolbar > .btn-group,.btn-toolbar > .input-group{margin-left:5px}.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group > .btn:first-child{margin-left:0}.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group > .btn:last-child:not(:first-child),.btn-group > .dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group > .btn-group{float:left}.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn{border-radius:0}.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group > .btn + .dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group > .btn-lg + .dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical > .btn,.btn-group-vertical > .btn-group,.btn-group-vertical > .btn-group > .btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical > .btn-group > .btn{float:none}.btn-group-vertical > .btn + .btn,.btn-group-vertical > .btn + .btn-group,.btn-group-vertical > .btn-group + .btn,.btn-group-vertical > .btn-group + .btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical > .btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical > .btn:first-child:not(:last-child){border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical > .btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:4px}.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn{border-radius:0}.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified > .btn,.btn-group-justified > .btn-group{display:table-cell;float:none;width:1%}.btn-group-justified > .btn-group .btn{width:100%}.btn-group-justified > .btn-group .dropdown-menu{left:auto}[data-toggle="buttons"] > .btn input[type="radio"],[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],[data-toggle="buttons"] > .btn input[type="checkbox"],[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*="col-"]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group-lg > .form-control,.input-group-lg > .input-group-addon,.input-group-lg > .input-group-btn > .btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg > .form-control,select.input-group-lg > .input-group-addon,select.input-group-lg > .input-group-btn > .btn{height:46px;line-height:46px}textarea.input-group-lg > .form-control,textarea.input-group-lg > .input-group-addon,textarea.input-group-lg > .input-group-btn > .btn,select[multiple].input-group-lg > .form-control,select[multiple].input-group-lg > .input-group-addon,select[multiple].input-group-lg > .input-group-btn > .btn{height:auto}.input-group-sm > .form-control,.input-group-sm > .input-group-addon,.input-group-sm > .input-group-btn > .btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm > .form-control,select.input-group-sm > .input-group-addon,select.input-group-sm > .input-group-btn > .btn{height:30px;line-height:30px}textarea.input-group-sm > .form-control,textarea.input-group-sm > .input-group-addon,textarea.input-group-sm > .input-group-btn > .btn,select[multiple].input-group-sm > .form-control,select[multiple].input-group-sm > .input-group-addon,select[multiple].input-group-sm > .input-group-btn > .btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type="radio"],.input-group-addon input[type="checkbox"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child > .btn,.input-group-btn:first-child > .btn-group > .btn,.input-group-btn:first-child > .dropdown-toggle,.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child > .btn-group:not(:last-child) > .btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child > .btn,.input-group-btn:last-child > .btn-group > .btn,.input-group-btn:last-child > .dropdown-toggle,.input-group-btn:first-child > .btn:not(:first-child),.input-group-btn:first-child > .btn-group:not(:first-child) > .btn{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn > .btn{position:relative}.input-group-btn > .btn + .btn{margin-left:-1px}.input-group-btn > .btn:hover,.input-group-btn > .btn:focus,.input-group-btn > .btn:active{z-index:2}.input-group-btn:first-child > .btn,.input-group-btn:first-child > .btn-group{margin-right:-1px}.input-group-btn:last-child > .btn,.input-group-btn:last-child > .btn-group{margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav > li{position:relative;display:block}.nav > li > a{position:relative;display:block;padding:10px 15px}.nav > li > a:hover,.nav > li > a:focus{text-decoration:none;background-color:#eee}.nav > li.disabled > a{color:#777}.nav > li.disabled > a:hover,.nav > li.disabled > a:focus{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open > a,.nav .open > a:hover,.nav .open > a:focus{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav > li > a > img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs > li{float:left;margin-bottom:-1px}.nav-tabs > li > a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs > li > a:hover{border-color:#eee #eee #ddd}.nav-tabs > li.active > a,.nav-tabs > li.active > a:hover,.nav-tabs > li.active > a:focus{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified > li{float:none}.nav-tabs.nav-justified > li > a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified > .dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified > li{display:table-cell;width:1%}.nav-tabs.nav-justified > li > a{margin-bottom:0}}.nav-tabs.nav-justified > li > a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified > .active > a,.nav-tabs.nav-justified > .active > a:hover,.nav-tabs.nav-justified > .active > a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified > li > a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified > .active > a,.nav-tabs.nav-justified > .active > a:hover,.nav-tabs.nav-justified > .active > a:focus{border-bottom-color:#fff}}.nav-pills > li{float:left}.nav-pills > li > a{border-radius:4px}.nav-pills > li + li{margin-left:2px}.nav-pills > li.active > a,.nav-pills > li.active > a:hover,.nav-pills > li.active > a:focus{color:#fff;background-color:#337ab7}.nav-stacked > li{float:none}.nav-stacked > li + li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified > li{float:none}.nav-justified > li > a{margin-bottom:5px;text-align:center}.nav-justified > .dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified > li{display:table-cell;width:1%}.nav-justified > li > a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified > li > a{margin-right:0;border-radius:4px}.nav-tabs-justified > .active > a,.nav-tabs-justified > .active > a:hover,.nav-tabs-justified > .active > a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified > li > a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified > .active > a,.nav-tabs-justified > .active > a:hover,.nav-tabs-justified > .active > a:focus{border-bottom-color:#fff}}.tab-content > .tab-pane{display:none;visibility:hidden}.tab-content > .active{display:block;visibility:visible}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important;visibility:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container > .navbar-header,.container-fluid > .navbar-header,.container > .navbar-collapse,.container-fluid > .navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container > .navbar-header,.container-fluid > .navbar-header,.container > .navbar-collapse,.container-fluid > .navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand > img{display:block}@media (min-width:768px){.navbar > .container .navbar-brand,.navbar > .container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar + .icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav > li > a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu > li > a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu > li > a{line-height:20px}.navbar-nav .open .dropdown-menu > li > a:hover,.navbar-nav .open .dropdown-menu > li > a:focus{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav > li{float:left}.navbar-nav > li > a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}.navbar-form .input-group > .form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}.navbar-form .radio input[type="radio"],.navbar-form .checkbox input[type="checkbox"]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav > li > .dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right ~ .navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav > li > a{color:#777}.navbar-default .navbar-nav > li > a:hover,.navbar-default .navbar-nav > li > a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav > .active > a,.navbar-default .navbar-nav > .active > a:hover,.navbar-default .navbar-nav > .active > a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav > .disabled > a,.navbar-default .navbar-nav > .disabled > a:hover,.navbar-default .navbar-nav > .disabled > a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav > .open > a,.navbar-default .navbar-nav > .open > a:hover,.navbar-default .navbar-nav > .open > a:focus{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu > li > a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,.navbar-default .navbar-nav .open .dropdown-menu > li > a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu > .active > a,.navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,.navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,.navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,.navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#333}.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:focus{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav > li > a{color:#9d9d9d}.navbar-inverse .navbar-nav > li > a:hover,.navbar-inverse .navbar-nav > li > a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav > .active > a,.navbar-inverse .navbar-nav > .active > a:hover,.navbar-inverse .navbar-nav > .active > a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav > .disabled > a,.navbar-inverse .navbar-nav > .disabled > a:hover,.navbar-inverse .navbar-nav > .disabled > a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav > .open > a,.navbar-inverse .navbar-nav > .open > a:hover,.navbar-inverse .navbar-nav > .open > a:focus{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu > li > a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,.navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,.navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#fff}.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb > li{display:inline-block}.breadcrumb > li + li:before{padding:0 5px;color:#ccc;content:"/\00a0"}.breadcrumb > .active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination > li{display:inline}.pagination > li > a,.pagination > li > span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination > li:first-child > a,.pagination > li:first-child > span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination > li:last-child > a,.pagination > li:last-child > span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination > li > a:hover,.pagination > li > span:hover,.pagination > li > a:focus,.pagination > li > span:focus{color:#23527c;background-color:#eee;border-color:#ddd}.pagination > .active > a,.pagination > .active > span,.pagination > .active > a:hover,.pagination > .active > span:hover,.pagination > .active > a:focus,.pagination > .active > span:focus{z-index:2;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination > .disabled > span,.pagination > .disabled > span:hover,.pagination > .disabled > span:focus,.pagination > .disabled > a,.pagination > .disabled > a:hover,.pagination > .disabled > a:focus{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg > li > a,.pagination-lg > li > span{padding:10px 16px;font-size:18px}.pagination-lg > li:first-child > a,.pagination-lg > li:first-child > span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg > li:last-child > a,.pagination-lg > li:last-child > span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm > li > a,.pagination-sm > li > span{padding:5px 10px;font-size:12px}.pagination-sm > li:first-child > a,.pagination-sm > li:first-child > span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm > li:last-child > a,.pagination-sm > li:last-child > span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li > a,.pager li > span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li > a:hover,.pager li > a:focus{text-decoration:none;background-color:#eee}.pager .next > a,.pager .next > span{float:right}.pager .previous > a,.pager .previous > span{float:left}.pager .disabled > a,.pager .disabled > a:hover,.pager .disabled > a:focus,.pager .disabled > span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:hover,a.label:focus{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:hover,.label-default[href]:focus{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:hover,.label-primary[href]:focus{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:hover,.label-success[href]:focus{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:hover,.label-info[href]:focus{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:hover,.label-warning[href]:focus{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:hover,.label-danger[href]:focus{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:bold;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-xs .badge{top:0;padding:1px 5px}a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active > .badge,.nav-pills > .active > a > .badge{color:#337ab7;background-color:#fff}.list-group-item > .badge{float:right}.list-group-item > .badge + .badge{margin-right:5px}.nav-pills > li > a > .badge{margin-left:3px}.jumbotron{padding:30px 15px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron h1,.jumbotron .h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron > hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding:48px 0}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron h1,.jumbotron .h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;-o-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail > img,.thumbnail a > img{margin-right:auto;margin-left:auto}a.thumbnail:hover,a.thumbnail:focus,a.thumbnail.active{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:bold}.alert > p,.alert > ul{margin-bottom:0}.alert > p + p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress-striped .progress-bar,.progress-bar-striped{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;background-size:40px 40px}.progress.active .progress-bar,.progress-bar.active{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-right,.media > .pull-right{padding-left:10px}.media-left,.media > .pull-left{padding-right:10px}.media-left,.media-right,.media-body{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item{color:#555}a.list-group-item .list-group-item-heading{color:#333}a.list-group-item:hover,a.list-group-item:focus{color:#555;text-decoration:none;background-color:#f5f5f5}.list-group-item.disabled,.list-group-item.disabled:hover,.list-group-item.disabled:focus{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:hover,.list-group-item.active:focus{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active .list-group-item-heading > small,.list-group-item.active:hover .list-group-item-heading > small,.list-group-item.active:focus .list-group-item-heading > small,.list-group-item.active .list-group-item-heading > .small,.list-group-item.active:hover .list-group-item-heading > .small,.list-group-item.active:focus .list-group-item-heading > .small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:hover .list-group-item-text,.list-group-item.active:focus .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:hover,a.list-group-item-success:focus{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:hover,a.list-group-item-success.active:focus{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:hover,a.list-group-item-info:focus{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:hover,a.list-group-item-info.active:focus{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:hover,a.list-group-item-warning:focus{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:hover,a.list-group-item-warning.active:focus{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:hover,a.list-group-item-danger:focus{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:hover,a.list-group-item-danger.active:focus{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading > .dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title > a,.panel-title > small,.panel-title > .small,.panel-title > small > a,.panel-title > .small > a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel > .list-group,.panel > .panel-collapse > .list-group{margin-bottom:0}.panel > .list-group .list-group-item,.panel > .panel-collapse > .list-group .list-group-item{border-width:1px 0;border-radius:0}.panel > .list-group:first-child .list-group-item:first-child,.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel > .list-group:last-child .list-group-item:last-child,.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel-heading + .list-group .list-group-item:first-child{border-top-width:0}.list-group + .panel-footer{border-top-width:0}.panel > .table,.panel > .table-responsive > .table,.panel > .panel-collapse > .table{margin-bottom:0}.panel > .table caption,.panel > .table-responsive > .table caption,.panel > .panel-collapse > .table caption{padding-right:15px;padding-left:15px}.panel > .table:first-child,.panel > .table-responsive:first-child > .table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel > .table:first-child > thead:first-child > tr:first-child,.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,.panel > .table:first-child > tbody:first-child > tr:first-child,.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child{border-top-left-radius:3px}.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child{border-top-right-radius:3px}.panel > .table:last-child,.panel > .table-responsive:last-child > .table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel > .table:last-child > tbody:last-child > tr:last-child,.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,.panel > .table:last-child > tfoot:last-child > tr:last-child,.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child{border-bottom-left-radius:3px}.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child{border-bottom-right-radius:3px}.panel > .panel-body + .table,.panel > .panel-body + .table-responsive,.panel > .table + .panel-body,.panel > .table-responsive + .panel-body{border-top:1px solid #ddd}.panel > .table > tbody:first-child > tr:first-child th,.panel > .table > tbody:first-child > tr:first-child td{border-top:0}.panel > .table-bordered,.panel > .table-responsive > .table-bordered{border:0}.panel > .table-bordered > thead > tr > th:first-child,.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,.panel > .table-bordered > tbody > tr > th:first-child,.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,.panel > .table-bordered > tfoot > tr > th:first-child,.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,.panel > .table-bordered > thead > tr > td:first-child,.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,.panel > .table-bordered > tbody > tr > td:first-child,.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,.panel > .table-bordered > tfoot > tr > td:first-child,.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child{border-left:0}.panel > .table-bordered > thead > tr > th:last-child,.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,.panel > .table-bordered > tbody > tr > th:last-child,.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,.panel > .table-bordered > tfoot > tr > th:last-child,.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,.panel > .table-bordered > thead > tr > td:last-child,.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,.panel > .table-bordered > tbody > tr > td:last-child,.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,.panel > .table-bordered > tfoot > tr > td:last-child,.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child{border-right:0}.panel > .table-bordered > thead > tr:first-child > td,.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,.panel > .table-bordered > tbody > tr:first-child > td,.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,.panel > .table-bordered > thead > tr:first-child > th,.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,.panel > .table-bordered > tbody > tr:first-child > th,.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th{border-bottom:0}.panel > .table-bordered > tbody > tr:last-child > td,.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,.panel > .table-bordered > tfoot > tr:last-child > td,.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,.panel > .table-bordered > tbody > tr:last-child > th,.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,.panel > .table-bordered > tfoot > tr:last-child > th,.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th{border-bottom:0}.panel > .table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel + .panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading + .panel-collapse > .panel-body,.panel-group .panel-heading + .panel-collapse > .list-group{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer + .panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default > .panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default > .panel-heading + .panel-collapse > .panel-body{border-top-color:#ddd}.panel-default > .panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary > .panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary > .panel-heading + .panel-collapse > .panel-body{border-top-color:#337ab7}.panel-primary > .panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success > .panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success > .panel-heading + .panel-collapse > .panel-body{border-top-color:#d6e9c6}.panel-success > .panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info > .panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info > .panel-heading + .panel-collapse > .panel-body{border-top-color:#bce8f1}.panel-info > .panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning > .panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning > .panel-heading + .panel-collapse > .panel-body{border-top-color:#faebcc}.panel-warning > .panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger > .panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger > .panel-heading + .panel-collapse > .panel-body{border-top-color:#ebccd1}.panel-danger > .panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger > .panel-footer + .panel-collapse > .panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:transparent;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;-webkit-box-shadow:0 3px 9px rgba(0,0,0,.5);box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:absolute;top:0;right:0;left:0;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{min-height:16.42857143px;padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn + .btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn + .btn{margin-left:-1px}.modal-footer .btn-block + .btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,.5);box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;font-weight:normal;line-height:1.4;visibility:visible;filter:alpha(opacity=0);opacity:0}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;text-decoration:none;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;font-weight:normal;line-height:1.42857143;text-align:left;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2)}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover > .arrow,.popover > .arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover > .arrow{border-width:11px}.popover > .arrow:after{content:"";border-width:10px}.popover.top > .arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top > .arrow:after{bottom:1px;margin-left:-10px;content:" ";border-top-color:#fff;border-bottom-width:0}.popover.right > .arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right > .arrow:after{bottom:-10px;left:1px;content:" ";border-right-color:#fff;border-left-width:0}.popover.bottom > .arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom > .arrow:after{top:1px;margin-left:-10px;content:" ";border-top-width:0;border-bottom-color:#fff}.popover.left > .arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left > .arrow:after{right:1px;bottom:-10px;content:" ";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner > .item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner > .item > img,.carousel-inner > .item > a > img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner > .item{-webkit-transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000;perspective:1000}.carousel-inner > .item.next,.carousel-inner > .item.active.right{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner > .item.prev,.carousel-inner > .item.active.left{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner > .item.next.left,.carousel-inner > .item.prev.right,.carousel-inner > .item.active{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner > .active,.carousel-inner > .next,.carousel-inner > .prev{display:block}.carousel-inner > .active{left:0}.carousel-inner > .next,.carousel-inner > .prev{position:absolute;top:0;width:100%}.carousel-inner > .next{left:100%}.carousel-inner > .prev{left:-100%}.carousel-inner > .next.left,.carousel-inner > .prev.right{left:0}.carousel-inner > .active.left{left:-100%}.carousel-inner > .active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(to right,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1);background-repeat:repeat-x}.carousel-control:hover,.carousel-control:focus{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .icon-prev,.carousel-control .icon-next,.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right{position:absolute;top:50%;z-index:5;display:inline-block}.carousel-control .icon-prev,.carousel-control .glyphicon-chevron-left{left:50%;margin-left:-10px}.carousel-control .icon-next,.carousel-control .glyphicon-chevron-right{right:50%;margin-right:-10px}.carousel-control .icon-prev,.carousel-control .icon-next{width:20px;height:20px;margin-top:-10px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\2039'}.carousel-control .icon-next:before{content:'\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000 \9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-prev,.carousel-control .icon-next{width:30px;height:30px;margin-top:-15px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-15px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-15px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical > .btn-group:before,.btn-group-vertical > .btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.pager:before,.pager:after,.panel-body:before,.panel-body:after,.modal-footer:before,.modal-footer:after{display:table;content:" "}.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical > .btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.pager:after,.panel-body:after,.modal-footer:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important;visibility:hidden!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none!important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table}tr.visible-xs{display:table-row!important}th.visible-xs,td.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table}tr.visible-sm{display:table-row!important}th.visible-sm,td.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table}tr.visible-md{display:table-row!important}th.visible-md,td.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table}tr.visible-lg{display:table-row!important}th.visible-lg,td.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table}tr.visible-print{display:table-row!important}th.visible-print,td.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}
/*BlueScope styles*/
*,*:before,*:after{box-sizing:border-box}#view-pages{display:none}html{position:relative;min-height:100%}html{font-size:100%;font-family:"Arial","Helvetica",sans-serif}h1,h2,h3,h4,h5,h6{font-family:Arial,Helvetica,sans-serif}h1{font-size:32px;font-size:2em;line-height:1.25em}@media only screen and (min-width:1200px){h1{font-size:48px;font-size:3em;line-height:1.05em}}@media only screen and (min-width:768px) and (max-width:1024px){h1{font-size:40px;font-size:2.5em;line-height:1.125em}}@media only screen and (min-width:1200px){h2{font-size:36px;font-size:2.25em;line-height:1.25em}}@media only screen and (min-width:768px) and (max-width:1024px){h2{font-size:32px;font-size:2em;line-height:1.1538em}}h3{font-size:22px;font-size:1.375em;line-height:1.136em}@media only screen and (min-width:1200px){h3{font-size:28px;font-size:1.75em;line-height:1.25em}}@media only screen and (min-width:768px) and (max-width:1024px){h3{font-size:24px;font-size:1.5em;line-height:1.1363em}}h4{font-size:18px;font-size:1.125em;line-height:1.111em}@media only screen and (min-width:1200px){h4{font-size:18px;font-size:1.125em;line-height:1.222em}}@media only screen and (min-width:768px) and (max-width:1024px){h4{font-size:18px;font-size:1.125em;line-height:1.111em}}h5{font-size:14px;font-size:0.875em;line-height:1.111em}@media only screen and (min-width:1200px){h5{font-size:14px;font-size:0.875em;line-height:1.2em}}@media only screen and (min-width:768px) and (max-width:1024px){h5{font-size:14px;font-size:0.875em;line-height:1.111em}}h6{font-size:12px;font-size:0.75em;line-height:1.111em}@media only screen and (min-width:1200px){h6{font-size:12px;font-size:0.75em;line-height:1.2em}}@media only screen and (min-width:768px) and (max-width:1024px){h6{font-size:12px;font-size:0.75em;line-height:1.111em}}body{color:#5d5c5c;font-family:"Arial","Helvetica",sans-serif;font-size:14px;font-size:0.875em}label{font-family:"Arial","Helvetica",sans-serif;font-weight:normal}.font-blue{color:#002050}.font-light-blue{color:#58C8F3}.font-white{color:#fff}.font-orange{color:#DB3A00}.lightGray{color:#a9a8a8}.font-gray{color:#838282}.border-right{border-right:3px solid #fff}.border-left{border-left:3px solid #fff}.light-gray-bg{background:#D3D3D3}.gray-bg{background:#838282}.purple-bg{background:#5C005C}.margin-top-5{margin-top:5px}.margin-left-5{margin-left:5px}.margin-right-5{margin-right:5px}.margin-top-10{margin-top:10px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-15{margin-bottom:15px}.margin-top-15{margin-top:15px}.margin-left-15{margin-left:15px}.margin-right-30{margin-right:30px}.padding-top-5{padding-top:5px}.padding-top-7{padding-top:7px}.padding-top-10{padding-top:10px}.padding-top-17{padding-top:17px}.padding-right-10{padding-right:10px}.padding-bottom-10{padding-bottom:10px}.padding-left-10{padding-right:10px}.padding-top-15{padding-top:15px}.padding-right-15{padding-right:15px}.padding-bottom-15{padding-bottom:15px}.padding-left-15{padding-left:15px}.padding-top-30{padding-top:30px}.padding-right-30{padding-right:30px}.padding-bottom-30{padding-bottom:30px}.padding-left-30{padding-left:30px}.padding-top-45{padding-top:45px}.padding-right-45{padding-right:45px}.padding-bottom-45{padding-bottom:45px}.padding-left-45{padding-left:45px}.alpha{padding-left:0!important}.omega{padding-right:0!important}.link-large{font-size:22px;font-size:1.375em}.link-large:hover{text-decoration:none}input[type="text"],input[type="email"],input[type="tel"],input[type="search"] input[type="number"]{font-size:14px;font-size:0.875em;padding:2px 5px;height:30px}textarea{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#f4f4f4}select{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#f4f4f4}fieldset{border:1px solid #BFBFBF;margin:15px 0;padding:10px 15px}fieldset legend{font-size:16px;font-size:1em;margin-left:-5px;margin-bottom:15px;padding:0 15px 10px 10px;border-bottom:none;width:auto;color:inherit}.nv-input,.form-control{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:14px;font-size:0.875em;background:#f4f4f4;height:30px}.nv-input:hover,.nv-input:focus,.nv-input:active,.form-control:hover,.form-control:focus,.form-control:active{box-shadow:inset 0 2px 1px solid rgba(8,109,182,0.6)}.mode-svg{width:38px;height:38px;float:left;margin-left:-2px}.mode-svg svg{float:left}.model-tree-svg{height:20px;width:20px;float:left;margin-left:10px}.model-tree-svg path,.model-tree-svg polygon{fill:white}.editing .model-tree-svg path,.editing .model-tree-svg polygon{fill:black}#sidebar-wrapper path,#sidebar-wrapper polygon{fill:#36393A}.dynamic-svg{width:30px;height:30px;float:left}.btn-default path,.btn-default polygon{fill:#EEEEED}.btn-default:focus path,.btn-default:focus polygon{fill:#EEEEED}.btn-default.active path,.btn-default.active polygon,.btn-default:active path,.btn-default:active polygon{fill:#073247}.information-svg{width:30px;height:30px;float:left;margin-left:10px}.model-view path,.model-view polygon{fill:#55C9F4}.model-svg{width:22px;height:22px;float:left}.model-manipulation path,.model-manipulation polygon{fill:#36393A}.btn-hint:hover path,.btn-hint:hover polygon{fill:rgba(239,185,27,0.7)}.btn-hint:disabled path,.btn-hint:disabled polygon{fill:rgba(191,191,191,0.33)}.btn-hint path,.btn-hint polygon{fill:#EFB91B}.unit-header .svg{float:right;margin-top:5px;margin-right:10px}.key-plan-svg{width:20px;height:20px;float:right!important}.collapsed .key-plan-svg{-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.alert-svg,.warning-svg{width:30px;height:30px;float:right}.alert path,.alert polygon{fill:#36393A}.warning path,.warning polygon{fill:#EEEEED}.error-svg path,.error-svg polygon,.error-svg svg{fill:#DE4825}.zoom-svg{width:22px;height:16px;float:left;margin:3px 1px}.library-item{width:50px;height:50px;display:block;margin:30% auto}.library-item svg{fill:#36393A}.modal-content{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.modal.workspace-message{width:60vw;margin:0 auto;position:absolute;bottom:32px;top:auto}.workspace-message{width:60vw;margin:0 auto;position:absolute;bottom:32px;top:auto}.modal-backdrop{background-color:rgba(7,50,71,0.6)}.modal-backdrop.in{filter:alpha(opacity=50);opacity:1}.workspace-message .modal-dialog .modal-content .Error,.workspace-message .modal-dialog .modal-content .Success,.workspace-message .modal-dialog .modal-content .Warning,.workspace-message .modal-dialog .modal-content .Confirm{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;float:left;width:100%}.workspace-message .modal-dialog .modal-content .Error svg,.workspace-message .modal-dialog .modal-content .Success svg,.workspace-message .modal-dialog .modal-content .Warning svg,.workspace-message .modal-dialog .modal-content .Confirm svg{width:25px;height:25px}.workspace-message .modal-dialog{position:relative;width:60vw;margin:0 auto;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:space-around;-moz-box-pack:space-around;-ms-flex-pack:space-around;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:flex-end;-moz-box-align:flex-end;-ms-flex-align:flex-end;-webkit-align-items:flex-end;align-items:flex-end}.workspace-message .modal-dialog .modal-content{-webkit-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:transparent;box-shadow:none;border:none;width:100%}@media (min-width:90em){.workspace-message .modal-dialog .modal-content{width:60%}}.workspace-message .modal-dialog .modal-content .Error{background-color:#DE4825;color:#EEEEED}.workspace-message .modal-dialog .modal-content .Error svg path,.workspace-message .modal-dialog .modal-content .Error svg polygon{fill:#EEEEED}.workspace-message .modal-dialog .modal-content .Success{background-color:green;color:#EEEEED}.workspace-message .modal-dialog .modal-content .Success svg path,.workspace-message .modal-dialog .modal-content .Success svg polygon{fill:#EEEEED}.workspace-message .modal-dialog .modal-content .Warning{background-color:#EFB91B;color:#36393A}.workspace-message .modal-dialog .modal-content .Warning svg path,.workspace-message .modal-dialog .modal-content .Warning svg polygon{fill:#36393A}.workspace-message .modal-dialog .modal-content .Confirm{background-color:#086DB6;color:#EEEEED}.workspace-message .modal-dialog .modal-content .Confirm svg path,.workspace-message .modal-dialog .modal-content .Confirm svg polygon{fill:#EEEEED}.workspace-message .modal-dialog .modal-content .btn-primary{color:#086DB6;background-color:#EEEEED;border-color:#EEEEED}.workspace-message .modal-dialog .modal-content .btn-link{color:#a6a6a6}.confirmation-modal .btn{font-size:16px;padding:6px 12px}.confirmation-modal .btn-primary{color:#086DB6;background-color:#55C9F4;border-color:#55C9F4}.confirmation-modal .btn-link{color:#a6a6a6}.dimension-modal .btn{font-size:16px;padding:6px 12px}.dimension-modal .btn-primary{color:#086DB6;background-color:#55C9F4;border-color:#55C9F4}.dimension-modal .btn-link{color:#a6a6a6}.alert,.warning{position:absolute;bottom:45px;width:calc(82% - 17px);border-radius:0;z-index:1000;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;padding:10px}.alert p,.warning p{float:left;margin:5px 5px 10px;width:94%}.alert-exit,.warning-exit{float:right;width:4%}.alert{background-color:#EFB91B;margin-bottom:0}.alert p{color:#36393A}.warning{background-color:#DE4825;margin-bottom:0}.warning p{color:#EEEEED}.btn{display:inline-block;padding:0px 6px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn-cancel:hover{text-decoration:none}.btn-cancel{color:#BFBFBF}.btn-cancel a{color:#BFBFBF;text-decoration:none}.btn-cancel a:hover{color:#55C9F4}.btn-text{padding:6px 12px}.btn-default{color:#EEEEED;background-color:#073247;border-color:transparent}.btn-default.disabled,.btn-default.disabled.active,.btn-default.disabled.focus,.btn-default.disabled:active,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled],.btn-default[disabled].active,.btn-default[disabled].focus,.btn-default[disabled]:active,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default,fieldset[disabled] .btn-default.active,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:active,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:rgba(7,50,71,0.33);border-color:transparent}.btn-default:hover,.open > .dropdown-toggle.btn-default{color:#EEEEED;background-color:rgba(7,50,71,0.8);border-color:transparent}.btn-default:focus{color:#073247;background-color:#073247;border-color:transparent}.btn-default.active,.btn-default:active{color:#073247;background-color:#55C9F4;border-color:transparent}.btn-model{color:#BFBFBF;background-color:#BFBFBF;border-color:transparent}.btn-model.disabled,.btn-model.disabled.active,.btn-model.disabled.focus,.btn-model.disabled:active,.btn-model.disabled:focus,.btn-model.disabled:hover,.btn-default[disabled],.btn-default[disabled].active,.btn-default[disabled].focus,.btn-default[disabled]:active,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default,fieldset[disabled] .btn-default.active,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:active,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:rgba(7,50,71,0.3);border-color:transparent}.disabled,[disabled]{pointer-events:auto!important}.btn-model:hover,.open > .dropdown-toggle.btn-model{color:#EEEEED;background-color:rgba(191,191,191,0.8);border-color:transparent}.btn-model.active{color:#073247;background-color:#55C9F4;border-color:transparent}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:0px}.center-block{display:block;margin-right:auto;margin-left:auto}.sidebar-dialog .smart-spacing .btn{padding:6px 25px}.btn-primary:hover,.btn-primary:focus,.btn-primary.focus,.btn-primary:active,.btn-primary.active,.open > .dropdown-toggle.btn-primary{color:#fff;background-color:#086DB6;border-color:#086DB6;opacity:0.8}.btn-hint{color:#BFBFBF;background-color:#181818;border-color:transparent}.btn-hint:active,.btn-hint:focus,.btn-hint:hover{color:#BFBFBF;background-color:#181818;border-color:transparent}.btn-hint.disabled,.btn-hint.disabled.active,.btn-hint.disabled.focus,.btn-hint.disabled:active,.btn-hint.disabled:focus,.btn-hint.disabled:hover,.btn-hint[disabled],.btn-hint[disabled].active,.btn-hint[disabled].focus,.btn-hint[disabled]:active,.btn-hint[disabled]:focus,.btn-hint[disabled]:hover,fieldset[disabled] .btn-hint,fieldset[disabled] .btn-hint.active,fieldset[disabled] .btn-hint.focus,fieldset[disabled] .btn-hint:active,fieldset[disabled] .btn-hint:focus,fieldset[disabled] .btn-hint:hover{background-color:rgba(24,24,24,0.33);border-color:transparent}.button,.nv-button-default{background-color:#EEEEED;color:#4d4d4d;font-family:"Arial","Helvetica",sans-serif}.button,.nv-button-default,.nv-button-secondary,.wm-alert-button{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none;padding-left:10px;padding-right:10px;display:inline-block;text-align:center;vertical-align:middle;margin-bottom:0}.button:hover,.nv-button-default:hover,.nv-button-secondary:hover,.wm-alert-button:hover{cursor:pointer}.button a,.nv-button-default a{color:#4d4d4d;text-decoration:none}.button:hover,.nv-button-default:hover{background-color:#cacac9;border-color:#8f8f8e;color:#4d4d4d;text-decoration:none}.button.disabled,.button [disabled],.nv-button-default.disabled,.nv-button-default [disabled]{cursor:not-allowed}.nv-button-secondary{background-color:#55C9F4;color:#4d4d4d;font-family:"Arial","Helvetica",sans-serif}.nv-button-secondary a{color:#4d4d4d;text-decoration:none}.nv-button-secondary:hover{background-color:#48abcf;border-color:#337992;color:#4d4d4d;text-decoration:none}.wm-alert-button{background-color:#EEEEED;color:#4d4d4d;border-color:#EEEEED;padding:3px 10px}.wm-alert-button a{color:#4d4d4d;text-decoration:none}.wm-alert-button:hover{background-color:#cacac9;border-color:#8f8f8e;color:#4d4d4d;text-decoration:none}.sidebar-dialog{position:absolute;top:40px;bottom:0;z-index:300;background-color:#ffffff;min-width:350px}.sidebar-dialog .link-div{height:50px;width:50px}.sidebar-dialog .modal-header{width:100%}.sidebar-dialog.hidden-sidebar{left:-500px;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease-in-out;height:calc(100% - 72px)}.sidebar-dialog.clicked{left:-1px;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease-in-out;height:calc(100% - 72px)}.sidebar-dialog > div{height:100%;width:100%}.sidebar-dialog h3{margin:0;font-size:18px;padding:0}.sidebar-dialog h4{color:black}.sidebar-dialog label{font-weight:normal;font-size:15px}.sidebar-dialog .btn{padding:6px 12px;font-size:18px}.sidebar-dialog .btn-primary{background-color:#086DB6}.sidebar-dialog .btn-primary.disabled,.sidebar-dialog .btn-primary[disabled],.sidebar-dialog .btn-primary fieldset[disabled]{background-color:#E5E5E4;border-color:#E5E5E4;color:#36393A}.toggled .sidebar-dialog.clicked{left:50px;background-color:#ffffff;z-index:2000;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;height:calc(100% - 72px);z-index:300}.dialog-content{height:100%;width:350px;overflow:auto}.dialog-content.float-left{float:left}.dialog-content.insulation-panel{border-left:1px solid #e5e5e5;position:absolute;bottom:0;left:350px;background:white}.dialog-content .modal-body{padding:0;float:left;width:100%}.dialog-content ul{list-style:none;padding:0;margin-top:-2px;float:left;width:100%}.dialog-content ul > li{width:50%;position:relative;line-height:150px;float:left;height:175px;border:1px solid #eee}.dialog-content ul > li.full-width{width:100%}.dialog-content ul > li > div{position:absolute;top:125px;left:0;bottom:0;right:0;text-align:center;float:left;line-height:22px;outline:none}.dialog-content ul > li:hover{text-decoration:none;background-color:#58C8F3;color:#fff}.dialog-content ul > li:nth-child(1),.dialog-content ul > li:nth-child(2){border-top:1px solid #eee}.dialog-content ul > li:nth-child(odd){border-right:1px solid #eee}.dialog-content .pointer{cursor:pointer}.dialog-content .coveringsMode{border-bottom:1px solid #55c9f4}.dialog-content .coveringsMode div.slants{float:left;width:0;height:0;border-top:10px solid;border-bottom:10px solid;border-left:10px solid;border-right:10px solid}.dialog-content .coveringsMode div.slants.exterior{border-top-color:#eeeeed;border-bottom-color:#55c9f4;border-left-color:#55c9f4;border-right-color:#eeeeed}.dialog-content .coveringsMode div.slants.interior{border-top-color:#55c9f4;border-bottom-color:#eeeeed;border-left-color:#eeeeed;border-right-color:#55c9f4}.dialog-content .coveringsMode div.left-slant{float:left;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid;border-left:10px solid;border-right:10px solid transparent}.dialog-content .coveringsMode div.left-slant.exterior{border-bottom-color:#eeeeed;border-left-color:#eeeeed}.dialog-content .coveringsMode div.left-slant.interior{border-bottom-color:#55c9f4;border-left-color:#55c9f4}.dialog-content .coveringsMode div.modeOption{padding-left:10px;color:black;background-color:#eeeeed;cursor:pointer}.dialog-content .coveringsMode div.modeOption div.align-left{float:left}.dialog-content .coveringsMode div.modeOption.active{color:white;background-color:#55c9f4}.dialog-content .coveringsMode div.modeOption div.right-slant{float:left;width:0;height:0;border-top:15px solid transparent;border-bottom:0 solid transparent;border-left:15px solid blue}.dialog-content .coveringsMode div.modeOption div.left-slant{float:left;width:0;height:0;border-top:0 solid transparent;border-bottom:15px solid transparent;border-right:15px solid blue}.dialog-content .libraries li .info{font-style:italic;position:absolute;background-color:#58C8F3;color:white;top:10px;right:10px;height:20px;width:20px;border-radius:10px;line-height:normal;text-align:center;padding-top:1px}.dialog-content .libraries li:hover .info,.dialog-content .libraries li.selected .info{background-color:white;color:#58C8F3}.dialog-content .modal-header + .modal-body > ul > li:nth-child(2),.dialog-content .modal-header + .modal-body > ul > li:nth-child(1){border-top:none!important;margin-top:1px}.dialog-content li:hover{cursor:pointer}.dialog-content ul > li:hover div,.dialog-content ul > li.selected{text-decoration:none;background-color:#58C8F3;color:#fff}.dialog-content ul > li > div:hover{text-decoration:none;outline:none}.dialog-content ul > li > div:focus{text-decoration:none;outline:none}.shape-dimensions-dialog{height:100%;width:300px}.shape-dimensions-dialog h3{margin:0;font-size:20px}.gable-radio .modified-field,.single-radio .modified-field{color:#086DB6}.sidebar-dialog input[type="radio"]{margin-right:5px}.modified-field{border:#086DB6 2px solid}.showError .modified-field,.showError .opening-input.ng-dirty{border:red 2px solid}.sidebar-dialog input[type="email"],.sidebar-dialog input[type="number"],.sidebar-dialog input[type="search"],.sidebar-dialog input[type="tel"],.sidebar-dialog input[type="text"],.sidebar-dialog select{-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#f4f4f4;font-size:15px;padding:2px 5px}.sidebar-dialog input[type="email"]:disabled,.sidebar-dialog input[type="number"]:disabled,.sidebar-dialog input[type="search"]:disabled,.sidebar-dialog input[type="tel"]:disabled,.sidebar-dialog input[type="text"]:disabled,.sidebar-dialog select:disabled{cursor:not-allowed;opacity:0.6}.sidebar-dialog input[type="email"].clean-field,.sidebar-dialog input[type="number"].clean-field,.sidebar-dialog input[type="search"].clean-field,.sidebar-dialog input[type="tel"].clean-field,.sidebar-dialog input[type="text"].clean-field,.sidebar-dialog select.clean-field{border:none}.sidebar-dialog span{font-size:15px;padding:2px 5px}.linked-input-container{padding-left:15px;padding-right:15px}.linked-input-pitch{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-flow:row nowrap}.linked-input-pitch:after{content:":12";margin-top:5px;margin-left:5px}.sd-button-container{margin-top:10px;margin-bottom:15px;padding:10px 15px}.sd-list-item-active{background:#55C9F4;color:#086DB6}fieldset:disabled .sd-list-item-active{background:gray}.disableDiv{background:gray;position:absolute;top:0;bottom:0;left:0;right:0;opacity:0.3;z-index:1000}.settings-pane{position:absolute;right:0;top:40px}.settings-pane .modal-dialog{margin:0;position:absolute;right:0;top:0}.settings-pane .modal-content{border:none}.settings-pane .modal-header{padding:5px 0 0}.settings-pane .modal-header h3{margin:0;font-weight:lighter}.settings-pane .modal-body{padding:15px 15px 15px 5px}.settings-pane .settings-dialog{position:absolute;right:0;background-color:#086DB6;z-index:10000;color:white;width:350px;border:5px solid #086db6}.ms-layer-list,.ms-sub-layer-list{color:#EEEEED;list-style:none;padding:0;margin:0}.ms-layer-list-item,.ms-sub-layer-list-item{display:block;list-style:none;transition:none;left:0;opacity:1}.ms-layer-list-item .ms-layer-name,.ms-sub-layer-list-item .ms-layer-name{transition:background-color 0.2s ease,left 0.2s ease,height 0.2s ease 0.2s,max-height 0.2s ease 0.2s,opacity 0.2s ease;z-index:1}.ms-layer-list-item ul,.ms-sub-layer-list-item ul{padding-left:20px;background-color:#282A2A}.ms-layer-name,.ms-sub-layer-name{margin-bottom:5px}.ms-layer-name:focus,.ms-sub-layer-name:focus{outline:none}.arrow-down,.arrow-right{float:left;width:0;height:0;cursor:pointer}.units-pane{position:absolute;right:0;height:95%;height:calc(100% - 72px);width:18%;background:#282A2A;z-index:90;overflow-y:auto}.units-pane.hidden-sidebar{right:-500px;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease-in-out;height:calc(100% - 72px)}.units-pane.clicked{right:0;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease-in-out;height:calc(100% - 72px)}.unit-header{width:100%;float:left;margin-top:15px;margin-bottom:5px}.unit-header h4{float:left;margin:0 0 0 15px;color:rgba(238,238,237,0.87)}.model-structure-header{width:100%;margin-top:15px;margin-right:0;margin-bottom:5px}.ms-header-title{color:rgba(238,238,237,0.87);margin:10px 15px}.model-structure-container{height:100%;width:100%}.model-structure{height:calc(100% - 40px);width:100%;overflow-y:auto}.model-structure input[type="search"],.model-structure input[type="text"]{-webkit-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background:#181818;padding-left:5px;width:calc(100% - 3em)}.ms-layer-list-1{list-style:none;margin:0;padding:0;width:100%;display:block}.ms-layer-list-1 li{display:block;width:100%;float:left}.ms-layer-list-1 ul{padding-left:20px;background-color:#282A2A;width:100%;display:block;float:left}.ms-sub-list-1{list-style:none;margin:0;padding:0;width:100%;display:block}.ms-sub-list-1 li{padding-left:45px;display:block;width:100%;float:left}.ms-sub-list-2{padding-left:0;display:block;width:100%;float:left}.ms-sub-list-2 li{padding-left:90px;margin-left:-46px;width:100%;display:block}.ms-sub-list-3{padding-left:0;width:100%;display:block}.ms-sub-list-3 li{padding-left:135px;margin-left:-91px;width:100%;display:block}.ms-layer-name{padding-left:15px}.ms-sub-layer-name{padding-left:15px}.layer-id{float:left;margin-right:5px}.folder-trigger{float:left;width:30px;height:15px}.editing{background-color:#EFB91B;color:#fff;opacity:0.85;z-index:3;float:left;width:100%}.edit-text{color:#fff;text-decoration:none;border-bottom:none;border:none;display:block}.edit-text:hover{border-bottom:none;color:#fff;text-decoration:none}.editable-wrap{display:block}.shape.editing{opacity:1}.arrow-down{border-top:6px solid white;border-left:6px solid transparent;border-right:6px solid transparent;margin:7px 7px 7px 15px}.arrow-down.editing{border-top:6px solid #36393A;opacity:1}.arrow-right{border-top:6px solid transparent;border-left:6px solid white;border-bottom:6px solid transparent;margin:4px 7px 0 15px}.arrow-right.editing{border-top:6px solid transparent;border-left:6px solid #36393A;opacity:1}.arrow-blank{float:left;width:0;height:0;border-top:6px solid transparent;border-left:6px solid transparent;border-bottom:6px solid transparent;margin:4px 7px 0 15px}.arrow-blank.editing{border-top:6px solid transparent;border-left:6px solid transparent;opacity:1}.key-plan{position:absolute;bottom:0;width:100%}.key-plan .panel-body{background-color:#36393A}.key-plan .panel-default > .panel-heading + .panel-collapse > .panel-body{border-top-color:#36393A}.panel-group{margin:0}.key-plan .panel-group .panel{margin-bottom:0;border-radius:0}.key-plan .panel-default > .panel-heading{color:#EEEEED;background-color:#181818;border-color:transparent}.key-plan .panel{border:none}.key-plan .panel-heading{padding:6px 12px;border-bottom:1px solid transparent;border-top-left-radius:0;border-top-right-radius:0}.key-plan polygon{fill:white}.key-plan a{display:block}.properties-modal-button-container,.properties-modal-footer{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-flow:row wrap;align-content:center;margin-left:15px;margin-bottom:15px}.properties-modal-button-container .nv-button,.properties-modal-footer .nv-button,.properties-modal-button-container .btn,.properties-modal-footer .btn{-webkit-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:18px;font-size:1.125em;padding:3px 10px;margin:0 3px}.pm-read-only,.properties-modal-info-text{color:#55C9F4;font-style:italic}.properties-modal{background:rgba(7,50,71,0.9)}.properties-modal-container,.properties-modal .modal-dialog{-webkit-transition:width 0.3s ease-in;-moz-transition:width 0.3s ease-in;-ms-transition:width 0.3s ease-in;-o-transition:width 0.3s ease-in;transition:width 0.3s ease-in;-webkit-transition:height 0.3s ease-in;-moz-transition:height 0.3s ease-in;-ms-transition:height 0.3s ease-in;-o-transition:height 0.3s ease-in;transition:height 0.3s ease-in;width:80vw;max-width:80vw;margin:6vh auto}@media (min-width:90em){.properties-modal-container,.properties-modal .modal-dialog{width:60vw}}@media (min-width:120em){.properties-modal-container,.properties-modal .modal-dialog{width:50vw}}.properties-modal-header{-webkit-box-flex:0 1 100%;-moz-box-flex:0 1 100%;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;background:#181818;border-bottom:1px solid transparent}.properties-modal-header .properties-modal-close{color:#fff;opacity:0.5}.properties-modal-title{text-align:center;font-weight:normal;color:#fff}.properties-modal-content,.properties-modal .modal-content{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-flow:row wrap;-webkit-box-pack:flex-start;-moz-box-pack:flex-start;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#36393A;color:#EEEEED;height:100%}.properties-modal-content hr,.properties-modal .modal-content hr{margin-top:15px;margin-bottom:15px;border:0;border-top:1px solid #BFBFBF}.properties-modal-nav-container{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-flow:column wrap;-webkit-box-pack:space-between;-moz-box-pack:space-between;-ms-flex-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-flex:0.3 1 0;-moz-box-flex:0.3 1 0;-webkit-flex:0.3 1 0;-ms-flex:0.3 1 0;flex:0.3 1 0;background:#282A2A;margin:0;padding:0}@media (min-width:90em){.properties-modal-nav-container{-webkit-box-flex:0.8 1 0;-moz-box-flex:0.8 1 0;-webkit-flex:0.8 1 0;-ms-flex:0.8 1 0;flex:0.8 1 0}}.properties-modal-nav{list-style:none;margin:0;padding:0}.properties-modal-nav .checkbox{margin-top:5px;margin-bottom:5px}.properties-modal-nav-item{background:rgba(191,191,191,0.5);color:#BFBFBF;margin:5px 0;padding:3px 15px}.properties-modal-nav-item.active{background:#bfbfbf;color:#36393A}.properties-modal-nav-item.active a{color:#36393A}.properties-modal-nav-item a{color:#EEEEED}.properties-modal-nav-item a:hover{color:#EEEEED}.pm-item-active{background:#bfbfbf;color:#36393A}.pm-item-active .checkbox label{font-weight:bold}.pm-item-active a{color:#36393A}.pm-item-active a:hover{text-decoration:none;color:#181818}.properties-modal-body{-webkit-box-flex:1 1 0;-moz-box-flex:1 1 0;-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;padding:10px 20px}@media (min-width:90em){.properties-modal-body{-webkit-box-flex:1.8 1 0;-moz-box-flex:1.8 1 0;-webkit-flex:1.8 1 0;-ms-flex:1.8 1 0;flex:1.8 1 0;padding:10px 14px}}@media (min-width:120em){.properties-modal-body{-webkit-box-flex:2 1 0;-moz-box-flex:2 1 0;-webkit-flex:2 1 0;-ms-flex:2 1 0;flex:2 1 0}}.properties-modal-body .form-inline > .form-group{margin-bottom:15px;padding:10px 15px}.properties-modal-input{display:inherit;background:rgba(191,191,191,0.5);color:#EEEEED}.properties-modal-input.disabled,.properties-modal-input[disabled]{background:rgba(229,229,228,0.2)}.textarea-resize-vertical{resize:vertical}.properties-modal-input-error,.has-error .properties-modal-input{display:inherit;background:rgba(191,191,191,0.5);color:#EEEEED;border:2px solid #DE4825;box-shadow:none}.properties-modal-input-error:focus,.properties-modal-input-error:hover,.has-error .properties-modal-input:focus,.has-error .properties-modal-input:hover{border:2px solid #DE4825}.properties-modal-legend{color:#EEEEED}.properties-modal-input option{background:rgba(54,57,58,0.9);color:#EEEEED}.properties-modal-input option:hover{color:#EEEEED;background:#36393A}.properties-modal-info-text{padding:20px}.properties-modal-button-container{-webkit-box-pack:flex-end;-moz-box-pack:flex-end;-ms-flex-pack:flex-end;-webkit-justify-content:flex-end;justify-content:flex-end}.properties-modal-footer{-webkit-box-pack:flex-start;-moz-box-pack:flex-start;-ms-flex-pack:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;align-content:flex-end}.text-counter{color:#4ccdfd}.confirm-apply-btn:focus{color:#EEEEED}.pm-table{font-size:14px;font-size:0.875em;border:1px solid #EEEEED;width:100%}.pm-table thead,.pm-table tbody,.pm-table tr,.pm-table td{border:1px solid transparent}.pm-table tbody > tr:nth-child(2) > td{background:none}.pm-table tbody > tr > th{padding:7px}.pm-table tbody > tr > td{padding:0;background:rgba(191,191,191,0.1)}.pm-table tbody > tr > td:first-child{background:none;padding-right:5px}.pm-table .properties-modal-input{-webkit-border-radius:0;-ms-border-radius:0;-o-border-radius:0;-moz-border-radius:0;border-radius:0;border:none;border-bottom:1px solid #BFBFBF;padding:0 0 0 5px}.applied-loads-back-btn{background-color:transparent;float:left;margin-top:10px}.applied-loads-back-btn-svg{width:30px;height:20px;float:left}#appliedLoadCoordinateTable table{width:100%;height:100%;color:white}#appliedLoadCoordinateTable table tr:first-child{border-bottom:1px white solid}#appliedLoadCoordinateTable table tr th:first-child,#appliedLoadCoordinateTable table tr td:first-child{padding-left:10px}.arrow-top-bottom-btn{background-color:transparent;float:left}.arrow-top-bottom-svg{width:16px;height:60px;float:left}.appliedLoadingsTableContainer{width:600px;padding-top:20px;overflow:auto}.appliedLoadingsTable table,.appliedLoadingsTable td{border-collapse:collapse;font-size:10px}.appliedLoadingsTable td{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;float:left}.appliedLoadingsTable tr{display:inline-flex}.appliedLoadingsTable tr td{padding-top:0px}.appliedLoadingsTable .status-column{min-width:80px;width:80px}.appliedLoadingsTable .type-column{min-width:50px;width:50px}.appliedLoadingsTable .units-column{min-width:60px;width:60px}.appliedLoadingsTable .affecting-column{min-width:90px;width:90px}.appliedLoadingsTable .shape-column{min-width:70px;width:70px}.appliedLoadingsTable .description-column{min-width:160px;width:160px}.appliedLoadingsTable .direction-column{min-width:90px;width:90px}.appliedLoadingsTable .origin-column{min-width:60px;width:60px}.appliedLoadingsTable .header{font-weight:900;font-size:11px}.appliedLoadingsTable .cog-btn{background-color:transparent;float:left}.appliedLoadingsTable .cog-svg{width:18px;height:18px;float:left}.appliedLoadingsTable .expand-btn{background-color:transparent;float:left}.appliedLoadingsTable .expand-svg{width:12px;height:12px;float:left}.appliedLoadingsTable .reload-btn{background-color:transparent;float:left;display:inline-flex}.appliedLoadingsTable .reload-svg{width:16px;height:16px;float:left}.appliedLoadingsTable .delete-btn{background-color:transparent;float:left;display:inline-flex}.appliedLoadingsTable .column-selected{display:inline}.appliedLoadingsTable .column-unselected{display:none}.appliedLoadingsTable .column-expand{display:inline}.appliedLoadingsTable .column-collapse{visibility:hidden}.appliedLoadingsTable .hide-row{display:none}.appliedLoadingsTable .user-loading{color:cornflowerblue;background-color:transparent}.appliedLoadingsTable .user-loading-selected{color:cornflowerblue;background-color:#f7b816}.appliedLoadingsTable .environment-loading{color:black;background-color:transparent}.appliedLoadingsTable .environment-loading-selected{color:black;background-color:#f7b816}.appliedLoadingsTable .original-loading{color:lightgrey;background-color:transparent}.appliedLoadingsTable .original-loading-selected{color:black;background-color:#f7b816}#appliedLoadingColumns{margin-top:20px;border-top:solid;border-top-color:gray;min-width:90px}#appliedLoadingColumns .check-btn{background-color:transparent;font-size:x-small;font-weight:bolder}#appliedLoadingColumns .check-svg{width:12px;height:12px;font-size:x-small;font-weight:bolder}#appliedLoadingColumns .column-selected{display:inline}#appliedLoadingColumns .column-unselected{visibility:hidden}.applied-loadings-exit-button{margin-top:10px;margin-right:10px}.loading-option-btn{margin-left:-14px}.loading-spacing-div{height:20px}.revise-loading-text{color:cornflowerblue;font-style:italic}.revise-check-svg{width:12px;height:12px;font-size:x-small;font-weight:bolder}.applied-loadings-description-zero{color:cornflowerblue}.applied-loadings-description-good{color:goldenrod}.applied-loadings-description-bad{color:red}.applied-loadings-type-dropdown{font-size:10px;height:auto;max-height:100px;overflow-x:hidden}.applied-loadings-coordinate-input{margin-left:-20px}.applied-loadings-seismic-design-text{color:#55C9F4;font-style:italic}.applied-loadings-delete-btn{background-color:transparent;float:left}.applied-loadings-delete-svg{width:18px;height:20px;float:left}.applied-loadings-add-circle-btn{background-color:transparent;float:left}.applied-loadings-add-circle-svg{width:20px;height:20px;float:left}.loading-modal .modal-dialog{width:1024px}.loading-modal .tab-pane{width:100%}.loading-modal select:disabled{background:gray;color:silver}.loading-modal select option{background:gray}.loading-modal input:disabled,.loading-modal select:disabled{background:rgba(191,191,191,0.5);color:silver}.loading-modal .seismic-nbcc-parameters-row-1{height:150px}.loading-modal .seismic-nbcc-parameters-row-2{height:130px}.loading-modal .seismic-nbcc-parameters-input{width:110px}.loading-modal .seismic-direction-table th{font-size:10px}.loading-modal .seismic-direction-table input{border-top:1px white solid;border-left:1px white solid;border-radius:0px}.loading-modal .seismic-direction-table tr:nth-child(2){text-align:center}.loading-modal .seismic-direction-table tr:nth-child(2) td{padding:5px}.loading-modal .seismic-direction-table tr:last-child input{border-bottom:1px white solid}.loading-modal .seismic-direction-table td:first-child{font-size:10px}.loading-modal .seismic-direction-table td:last-child input{border-right:1px white solid}.loading-modal .seismic-direction-table td{width:10%}.confirmed:disabled{background:#449C2D;color:#fff}.confirmed:disabled:hover{background:#449C2D;color:#fff}.properties-modal-nav-item.confirmed,.properties-modal-nav-item .confirmed > a{background:#449C2D;color:#fff}.properties-modal-nav-item.confirmed:hover,.properties-modal-nav-item .confirmed > a:hover{background:#449C2D;color:#fff}.label-block{display:block}.input-float{float:left}.input-inline-20{display:inline-block;width:20%}.input-inline-30{display:inline-block;width:30%}.input-inline-50{display:inline-block;width:50%}.input-inline-60,.form-inline .input-inline-60{display:inline-block;width:60%}.input-inline-70{display:inline-block;width:70%}.input-inline-80{display:inline-block;width:80%}.input-error{font-size:14px;font-size:0.875em;margin-top:0.3125em;color:#DE4825;display:block}.general-loadings-loading-indicator{margin-left:40%;margin-top:35%}#buildingCode .concrete-compression{display:inline-block;width:100px}.wrap{min-height:100%}body,html{height:100%}.float-left{float:left}.align-right{text-align:right}#wrapper{padding-left:0;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;height:100%}#wrapper.applied-loads{padding-left:0px}#wrapper.applied-loads #WorkspaceContainer{top:0px;height:100%;width:100%}#wrapper.applied-loads #appliedLoadSurfaceCycle{right:0;position:absolute;z-index:300;background-color:transparent;min-width:350px;width:540px;height:90%}#wrapper.applied-loads #appliedLoadsModule{height:100%;width:100%}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule{height:100%;overflow-x:hidden;overflow-y:visible;background-color:white;padding:0 20px}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .padding-right-10{padding-right:50px}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .btn{margin-bottom:5px}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .loadCords{padding-right:40px}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .loadCords .cordsSpan{padding-left:5px}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .loadCords .cordsInput{width:75%}#wrapper.applied-loads #appliedLoadsModule #childAppliedLoadsModule .loadCords .cordsInputLeft{width:65%}#wrapper.applied-loads #appliedLoadCoordinateTable{position:absolute;z-index:90;top:0px;left:0px;width:350px;height:150px;background:#282A2A;opacity:.8}#wrapper.toggled{padding-left:220px}#wrapper.toggled #sidebar-wrapper{width:50px;overflow-x:hidden;z-index:1001}#wrapper.toggled #page-content-wrapper{position:absolute;margin-right:-250px}#panelUsageToggle{position:absolute;left:40%;display:block;width:auto;background-color:#58C8F3;color:black;top:48px;z-index:10;border-radius:4px}#panelUsageToggle button{background-color:#58C8F3;border:none;float:left;margin:5px 0;outline:none}#panelUsageToggle button.disabled{color:gray}#panelUsageToggle svg{height:20px;margin-top:5px;width:30px}#panelUsageToggle svg path,#panelUsageToggle svg polygon{fill:black}#sidebar-wrapper{z-index:1000;position:fixed;left:220px;width:220px;height:100%;margin-left:-220px;overflow-y:auto;background:#EEEEED;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}#page-content-wrapper{width:100%;position:relative;transition:all 0.5s ease;height:100%;overflow-x:hidden}@media (min-width:768px){#wrapper{padding-left:50px}#wrapper.toggled{padding-left:0}#wrapper.toggled #sidebar-wrapper{width:50px;overflow-x:hidden;z-index:1001}#wrapper.toggled #page-content-wrapper{position:relative;margin-right:0;padding-left:50px}#wrapper.toggled #page-content-wrapper .alert,#wrapper.toggled #page-content-wrapper .warning{position:absolute;bottom:45px;width:calc(82% - 17px);border-radius:0;z-index:1000;padding-left:60px;left:0}#wrapper.toggled #page-content-wrapper .model-view{position:absolute;background-color:#181818;width:100%;height:30px;bottom:0;left:0;padding-left:50px}#wrapper.toggled #page-content-wrapper #WorkspaceContainer{position:absolute;left:0;right:0;bottom:30px;z-index:5;width:82%;height:calc(100% - 40px);float:left;top:40px;padding-left:50px;overflow:hidden}#sidebar-wrapper{width:50px}#page-content-wrapper{position:relative;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;height:100%}.navbar{border-radius:0;margin-bottom:0;max-height:40px;min-height:40px}}@media (max-width:767px){#wrapper{padding-left:50px}#wrapper.toggled{padding-left:0}#wrapper.toggled #sidebar-wrapper{width:50px;overflow-x:hidden;z-index:1001}#wrapper.toggled #page-content-wrapper{position:relative;margin-right:0;padding-left:50px}#wrapper.toggled #page-content-wrapper .alert,#wrapper.toggled #page-content-wrapper .warning{position:absolute;bottom:45px;width:calc(82% - 17px);border-radius:0;z-index:1000;padding-left:60px;left:0}#wrapper.toggled #page-content-wrapper .model-view{position:absolute;background-color:#181818;width:100%;height:30px;bottom:0;left:0;padding-left:50px}#sidebar-wrapper{width:50px;overflow:hidden}#menu-toggle{display:none}#page-content-wrapper{position:relative;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease;height:100%;width:100%}#page-content-wrapper #WorkspaceContainer{position:absolute;left:0;right:0;bottom:30px;z-index:5;width:100%;height:calc(100% - 40px);float:left;top:40px;overflow:hidden}.units-pane{display:none}.navbar-right{float:right;margin:0}.navbar{border-radius:0;margin-bottom:0;max-height:40px;min-height:40px}}.toggled #menu-toggle{width:50px;height:20px;background-image:url("../assets/expand.png");margin-left:0}#menu-toggle{width:20px;height:20px;background-image:url("../assets/collapse.png");margin-left:200px;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}.sidebar-nav{position:absolute;top:0;width:50px;margin:0;padding:0;list-style:none;float:left}.sidebar-nav > .sidebar-brand a:hover{color:#fff;background:none}.sidebar-nav .active{background:#55C9F4;text-decoration:none}.sidebar-nav .active a:hover{background:#55C9F4;text-decoration:none}.sidebar-nav li{text-indent:10px;line-height:40px;float:left;width:50px}.sidebar-nav li a{display:block;text-decoration:none;color:#36393A}.sidebar-nav li a:hover{text-decoration:none;color:#36393A;background:#E5E5E4}.sidebar-nav li a:active,.sidebar-nav li a:focus{text-decoration:none}.sidebar-nav button{background-color:transparent}.bottom-nav{position:fixed;bottom:0;width:50px;float:left}.navbar-default{background-color:#086DB6;border-color:transparent}.navbar-collapse{padding:0}@media (max-width:600px){.navbar-right{float:left;width:100%;margin-top:5px}.navbar{border-radius:0;margin-bottom:0;max-height:40px;min-height:80px;z-index:4000}}.dynamic-menu{margin-top:2px}#WorkspaceContainer{position:absolute;left:0;top:40px;right:0;bottom:30px;z-index:5;width:100%;height:calc(100% - 40px);float:left;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}#Workspace{width:1292px;height:calc(100% - 30px);font:12px Arial;width:100%;left:0;top:0;bottom:0;right:0;position:relative;-moz-user-select:-moz-none;-webkit-user-select:none;background-color:#EEE7DC}#marquee{position:absolute;top:-2px;left:-2px;z-index:50;height:0;width:10px;background-color:rgba(208,255,242,0.5);border:dotted 1px #9a9a9a;margin:0;padding:0;pointer-events:none}#Area{width:100%;height:100%}.model-view{position:absolute;background-color:#181818;width:100%;height:32px;bottom:0;-webkit-transition:all 0.5s ease;-moz-transition:all 0.5s ease;-ms-transition:all 0.5s ease;-o-transition:all 0.5s ease;transition:all 0.5s ease}.model-name{float:right;margin-right:30px;margin-top:5px;color:#EEEEED;opacity:0.87}.model-manipulation{float:left;margin-left:10px;margin-top:4px}.model-manipulation select{background:#BFBFBF;line-height:1;border:0;border-radius:4px;float:left;height:25px;margin-right:5px}.model-manipulation select:disabled{background-color:rgba(191,191,191,0.33);color:rgba(238,238,237,0.33)}.zoom-functions{position:absolute;z-index:2000;right:5px;bottom:8px}.errorMessage{font-size:smaller;color:#DE4825}.errorMessage .error-svg{height:15px;width:15px;float:left;padding-right:3px;padding-top:3px}.disabled-pricing-tooltip{background-color:#57c8f4;width:210px}.disabled-pricing-tooltip div{background-color:#57c8f4;color:black}.model-save-status{color:#fff;float:left;padding-right:20px}.grid-level-container{display:inline-block;position:relative;vertical-align:middle}.grid-level-content{font-size:16px;font-size:1em;-webkit-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background:rgba(54,57,58,0.6);border:1px solid rgba(238,238,237,0.2);color:#EFB91B;margin-bottom:0;padding:0 5px}.grid-level-content:after{content:" \003a Grid Level";color:#BFBFBF}
/*custom doc styles*/
body{width: 60em; height: auto; margin: 16px auto;}
.nv-example{position: relative; display: block; background:#EEEEED; margin:20px 5px; padding: 20px 10px; } .nv-example-large{height:100%; min-height: 550px; overflow: auto;} .nv-example .properties-modal-nav-container nav > ul { margin: 0; padding: 0; } .nv-example .properties-modal-container{ width: 40vw; } .nv-example .workspace-message{width: 100%; position: initial;} .nv-example .workspace-message .modal-dialog{width: 100%;}
</style>

# Table of contents
  [TOC]
  

# nVision UI Design Guidelines

## Overview

The BlueScope Design Standards Guide is a system that reflects the patterns and components that should be the foundation of the nVision Application and related products. The goal of these patterns and components is to provide unity and consistency of the interface design across the entire atmosphere of the nVision product line.

## Design Principles to follow:

[Examples of Visuals needed here]

__Clarity__

Reduce Ambiguity. Make the elements of the UI clear, easy to understand, and easy to take actions (with confidence in their decisions)

__Efficiency__

The user interface should be optimized to include a streamlined and clear path work-flow. Be *Proactive* instead of reactive as much as possible to handle the needs of users better and faster.

__Consistency__

The interface should be familiar to user no matter what device they use to interact with it. The interface must harbor intuition and familiarity by applying the same solution to the same problem.

__Aesthetics__

The interface must be well crafted and as elegant as possible.This is to prove to users that the device is worth their time and is credible. Aesthetics are not just making things pretty its what sets the tone of the communication between humans and interface. Our aesthetic in this application follows themes of Architectural plans  with hard lines and stark contrast but it includes softer tones and some roundness to keep the application from being off-putting.

__Motion__

Motion must be added to the interface to provide a sense of realism and tangibility to the interactions. Animation must describe the spatial relationship, functionality, and intent of elements of the interface

__Accessibility__
As a design principle we should aim to reach every user that we possibly can with our application. By providing controls that accommodate users with visibility issues such as color blindness and low vision.

# nVision UI Styling

## Colors

__Visual Definition of Color__

Colors have inherent meaning for most users, albeit sometimes those colors are culturally defined. 

> Example 
In the North American world the color red is often used communicate an error in a computer system. While in Asian cultures its used to convey Luck and fortune.

[provide example of color usage in North America and Asia]


__Visual Differentiation Between Color__

nVision uses colors in conjunction with iconography to visual cue users into what type of content they are interacting with. Its vitally important that we don't always use color solely to provide these visual cues. Not only is this an Accessibility issue it can sometimes reduce the definition that the color is trying to convey about an interaction.

[provide example visual using  nVision app colors]

__Visual Hierarchy for Contrast__

Color should be used to draw attention to the important elements that we want the user to take action on. Its a good idea to make sure that the colors used pop and contrast compared to the backdrop elements it is used upon.

[provide example visual using nVision app dashboard]

__Accessibility__
In the realm of color we need to provide contrast according to the [WCAG guidlines](https://www.w3.org/TR/WCAG20/). We do this to provide practical interaction to users with colorblindness and those with low vision issues on the application.

#### BlueScope Color Palette

nVision takes its color palette from its founding company BlueScope. The colors follow cool pattern of blues with a pairing of cool gray tones for neutral contrast. These colors have been designed to work harmoniously together. They follow a pattern in order to work in the most effective manner.

#### Primary Colors

When using primary colors in your palette this color should be the most used color across the screens on primary actions buttons and components.

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">  
<li style="padding: 10px 15px;">
  <strong>$bluescope-blue</strong>
  <div style="background:#056DB6; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #056db6</p>
</li>

<li style="padding: 10px 15px;">
<strong>$bluescope-bright</strong>
  <div style="background:#55C9F4; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #55c9f4</p>
</li>
<li style="padding: 10px 15px;">
<strong>$steel-grey</strong>
  <div style="background:#5C87a1; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #5c87a1</p>
</li>

<li style="padding: 10px 15px;">
<strong>$deep-ocean</strong>
  <div style="background:#073246; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
  <p>Hex: #073246</p>
</li>
</ul>

#### Accent Colors

These colors are also used to denote primary actions and points of attention. The difference being these colors are more often used to provide greater contrast. 

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
    <li style="padding: 10px 15px;">
        <strong>$zincalume</strong>
        <div style="background:#449C2D; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #449C2D</p>
    </li>
    <li style="padding: 10px 15px;">
        <strong>$goldenrod</strong>
        <div style="background:#EFB91B; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #efb91B</p>
    </li>
    <li style="padding: 10px 15px;">
        <strong>$colorbond-red</strong>
        <div style="background:#E04619; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #e04619</p>
    </li>
</ul>

#### Neutrals

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
    <li style="padding:10px 15px;">
        <strong>$white</strong>
        <div style="background:#ffffff; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #bfbfbf; "></div>
        <p>Hex: #ffffff</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$black</strong>
        <div style="background:#000000; margin: 0 auto; width: 100px; height: 100px;"></div>
        <p>Hex: #000000</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist</strong>
        <div style="background:#EEEEED; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #eeeeed</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$surfmist-mid</strong>
        <div style="background:#e5e5e4; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #e5e5e4</p>
    </li>
</ul>

<ul style="display: flex; list-style: none; margin: 0; padding: 0;">
  <li style="padding:10px 15px;">
        <strong>$surfgray</strong>
        <div style="background:#BFBfBF; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282A2A; "></div>
        <p>Hex: #bfbfbf</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument</strong>
        <div style="background:#363939; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #363939</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-dark</strong>
        <div style="background:#242626; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #242626</p>
    </li>
    <li style="padding:10px 15px;">
        <strong>$monument-black</strong>
        <div style="background:#181818; margin: 0 auto; width: 100px; height: 100px; border: 1px solid #282a2a;"></div>
        <p>Hex: #181818</p>
    </li>
</ul>

#### BlueScope Sister Colors

To add greater depth to the application, some colors were expanded to include sister colors. These colors are within the same color family but have lower levels of brightness.

[Include Example here]

__Opacity Rules__

In specific cases opacity may be used to define different states for an element or component.

__Button colors__

[Include example here]

__Text &amp; Background Colors__

[Include example here]

## Imagery

__Principles__

__Best Practices__

__UI Integration__

## Icons

[ provide more details about icons here soon] 

__Sizing__
Icons intended to be used in the Model Configurator are sized at `w: 50px h: 50px`

Icons intended to be used in the Dashboard are sized `w: 25px h: 25px`

__Key-lines__

__Icon Anatomy__

__Geometry__

__Color__

__Tint, Shade, & Lighting__

__System Icons__

__Action Icons__

## Typography

#### Primary Font

nVision uses Arial as its brand typeface. It also utilizes the Bold and Italic weights of this font family to convey different states.

---

__Arial__

<div style="font-family: Arial; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>
__Arial Bold__

---

<div style="font-family: Arial; font-weight: bold; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>

---

__Arial Italic__

<div style="font-family: Arial; font-style: italic; ">
  <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
  <p> a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
  <p> 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ^ & * ( ) - _ = + [ ] { } | \ / : ; " ' < > , . ? /</p>
</div>

---

#### Type Sizing 

[provide example of type sizes here]

__Opacity Rules__

## Voice and Tone ##

The nVision text should understandable by anyone, anywhere, regardless of culture or language. Although this is an application used by engineers the terminology should not impede new users and begin-gineers (yeah I know, and I'm not sorry) from understanding how to find their way through it.

Clarity and accuracy of the text while being concise is key to user confidence in an application. The more concise and clear the text in the application the quicker users can learn how to operate within our application.

The voice and tone guidelines of the application should trickle into every element of the application that has text from navigation to buttons.

When writing in this application be sure to be mindful of the following:

+ Tone
+ Capitalization
+ Punctuation
+ Spelling
+ Language

#### Tone

The nVision application should be approachable and respectful to its end user their needs. The text should reflect this through the use of a friendly tone to complimentary our UI designs friendly but architectural aesthetic.

__Use a Respectful Tone__

The text should not make users feel patronized or feel stupid.

__Use an Approachable Tone__

Focus on the benefits of UI interaction in the text instead of overloading the users with intense details about how the action functions.

Avoid using messages that suggest that a user's action was surprising or unusual to the UI. This can cause a lack of confidence in the end user and come across as rude.

__Use positive text__

nVision should present information in a positive way as possible when interacting with the end user. Concise text doesn't have to result in rude or negative speech.

> **Example**
> 
> **Good**
> "Use 30 characters or less for Project names"
> **Bad**
> "Your Project name must be no more than 30 characters."

__Use Necessary text only__

When writing a message to the end user in text form ask this critical question.

"Does the user really need to know this?... Really?"

Its better to let the user stay focused on the task at hand instead of bombarding them with notifications. Provide a good UX always, use words when necessary.

[ Provide example of lengthy description and a concise version of that message]

#### Capitalization &amp; Punctuation

__Use Sentence Style Capitalization__

nVision utilizes sentence style capitalization in its text. This includes titles, Headings, labels, menu items, navigation, tool-bars etc.


__Brand specific names__

For names of products created for nVision or other external products use the market appropriate case. Examples: **Butlerib II**, **Panel Rib**, and **Galvalume** etc.

__Use of punctuation__

In order to help users scan through the text easily avoid using unnecessary punctuation marks.

Periods - Should be omitted if there is only one sentence presented or if the text is used in the following elements:

+ Labels
+ Hover text
+ Bulleted Lists
+ Dialog body text

Periods should be used in the following instances:

+ All text where there are multiple sentences (this includes bulleted lists)
+ Sentences followed by a link. (the period should appear before the link)
+ Dialogs with multiple sentences

Colons  - should be omitted when dealing with labels. Normal grammar rules for colons apply for other situation where a colon is needed.

> Example:
>
>  **Good**
>  <label for="">First Name</label>
>
>  **Bad**
>  <label for="">First Name: </label>

__Use Contractions__

Contractions are shorter and sometimes more concise than their full name counterparts. However, where necessary don't be afraid to use `Do not` where it might provide more clarity.


__Avoid Exclamation__

When using exclamations users can often interpret this as shouting so it is best to consider the full context of the statement before deciding to use `!` 

> Example:
  **Good**
  "Welcome!"
  "Success"
  **Bad**
  "Learn more about Bracing Features!"

__Use Numerals instead of words__

When dealing numerical text users can parse the number form quicker than its textual counterpart. Its best to use the number form as often as possible.

> Example: 
>
> **Good**
> "You have 14 notifications"
>
> **Bad**
> "You have fourteen notifications"


  > **ProTip:** When dealing with a mixture of context with numbers its OK to use the number form and the text format to provide more clarity to users.
  > Example: "Enter two 8s in this field"

##### Punctuation List

|       | Glyph/ Character| Description/ usage|
|-------|----------------:|-------------------|
|Periods| .| Don't use these for fragment and single sentences. Use this for full sentences in body text.|
| Commas | ,| Use a comma when listing out things such as "this, that, and the other thing."
| Exclamation points| ! | Avoid these for things that should not sound like shouting or excitement from the UI. If you wouldn't shot it in person the app shouldn't either|
| Colons| &#58; `&#58;` `\u003A`| Don't add these to labels in forms or dialogs|
| Quotation Marks | &ldquo;  &rdquo;  or  &lsquo;  &rsquo; `&ldquo;` `&rdquo;` or `&lsquo;` `&rsquo;` `\u201c` `\u2018` or `\u201D` `\u2019`| When quoting this in text use the **Real** quote marks not the inch and foot symbols. Right single quotes are used for apostrophes as well. Primes and generic quote marks are used by the application for measurement and should not be used for text.|
| Primes | &prime; `&prime;` or `\u2032`  `&Prime;` or `\u2033` | The prime or `'` mark is used for feet in nVision. The double prime or `"` is used for inches|
| Ellipses| &hellip; or &vellip; `&hellip;` or `&vellip;`| Use the ellipsis to indicate an action is in progress or to indicate a truncated statement. Don't use these in buttons or dialogs menu items that start another process to avoid a lack of clarity to the action.|
| Em Dash| &mdash; `&mdash;` \u2014| These should not be used in nVision|
| En Dash| &ndash; `&ndash;` \u2013 | En dashes are used instead of a hyphen to represent a range (in English language). If a dash is needed to separate lines of text like &ndash; this use an `en dash`. Example Meeting: 8:30 AM &ndash; 12:00 PM|
| Hyphens | - | Hyphens are used for negative numbers. like -10, -$200, etc. Hyphens are also used for joined words like anti-inflammatory or work-space to avoid ambiguity of text|
| Parenthesis | ( ) | parenthesis are used to define acronyms or jargon that users may not know for various reasons. Example "Please update the SDD (Shape dimensions dialog) before continuing."

#### Language

Addressing the user in this application should be as if having a conversation with them.

__Second Person Usage__
Use the second person when writing for this application in most cases. Use terms like "You" or "Your" instead of vague or impersonal statements.

__First Person Usage__
Occasionally we will need to shift into First person usage for message in the nVision application. Using "I" or "My" should occur when the user needs to emphasize some form of ownership to an interaction or content within the nVision application.

> **ProTip:** Avoid mixing first person and second person in statements to the user. Don't combine "me/my" with "you/your" because it confusing and this breaks our principle of clarity in the application.
 
Use the term we sparingly. nVision should focus on the end user when speaking and seldom mention its self in the active sense. The exception to this rule is when a real human is actually taking action on behalf of the end user.

> Example:
  **Good**
  "We will review your change order and will call within a few hours for more details."
  **Bad**
  "Your change order will be reviewed and you will receive a response within a few hours."

__Use present Tense__

Text in nVision should written in the present tense to describe action and interactions. Avoid the use of future tense to explain interactions in the project because this can cause a potential lack of clarity.

When future tense or past tense wording needs to be used remember to be concise and use simple verbs forms.

__Use concise wording__

The definition of concise is to a great deal of information in a few words.
This means to be brief while retaining comprehensibility. 

Users of the web tend to read small, scan-able bits of text better than long sentences. The nVision should utilize concise text in order to help our end users navigate the application.

__Use simple wording__

Simple language is often the most direct and easiest language for users to understand across a broader spectrum.

> Example:
  **Good**
  "Save Changes?"
  **Bad**
  "Do you want to save your changes?"

> Example:
  **Good**
  "Overwrite existing frames on this shape?"
  **Bad**
  "If you continue, your existing frames will be deleted from your shape."

Avoid industry specific terminology or custom name for UI features in nVision.
This reduces clarity for new users and makes it harder to provide accessibility to users. Text should be readable by both advanced and beginners of English.

[Provide example of industry specific text and a counter example to use here]

#### Localization

[This still needs to be determined not in this phase or milestone]

# nVision UI Patterns

## Data Entry 

nVision users will need to add, change, delete information quite often. In order to make this process efficient and universal across the application we provided a list of standards to use on text/numerical entry for this application. We utilize _HTML5_ and [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) in our data input fields.

Its important to remember that we are designing this application for a user's need not for a specific form factor or input which means we should strive to provide them accessibility in various methods of entry.

By building this application accessibly we increased the likelihood of support for future unknown methods of inputs.

__Labeling__

Input fields should have labels should be listed above the field or to the left of the field. In most contexts the label will be listed to provide better readability and clarity to users. 

Horizontal labeling on the left side of the input should be used when screen height real-estate is critical issue and there are only a small amount of fields. 

> ** ProTip:** 
> When there are fewer than 5 fields in a form use the horizontal labeling pattern if you need a more condensed layout.

[provide example of horizontal and vertical inputs with labels]

__Context__

Inputs that contain related data should be grouped together. Simple examples of this would be address fields and login information. Complex examples would be dimension calculations in our dialog panes of the Model Configurator.

[Provide example of different input orientations here]

__Sizing__

Inputs width should be 100% of their container and input labels should respond to its corresponding label.

>For ease of accessibility the `<label>` element should wrap around the `input` markup. This allows users to select either the label or click inside of the input to begin acting on the input field.
  > Also be sure to provide the `id=` and `for=` tags to the inputs for screen reader accessibility

``` HTML
<label for="shape_width">Width
    <input id="shape_width" name="shape_width">
</label>

```

__Data Format__

Different types of data are represented in the nVision application using different formats.

Here are the following data formats that are represented:

+ Architectural measurement
+ Decimal Measurement
+ Rounded Numbers
+ Date & Time
+ Text

#### Simple Text Input

_This is the base level of data entry, usually it is single lines of text but can also be multiple lines of text._

For situations where a user needs to enter limited amount of text use a single line input field.

For situations where multiple lines of text are needed use a textarea input field.

#### Textarea

A textarea field is a multi-line text field that allows users to enter multiple lines of text.

#### Checkboxes

Checkboxes should be used in the application when a user needs to make a choice or multiple choices. These choices should only be options that can true or false.

> Example, if a user needs to turn a grid on or off a checkbox is sufficient.

Likewise If a user needs to select the types of areas affected during an  Applied load on a surface checkboxes allow users to make a selection of one or more of those options.

__ Input Inheritance__

Sometime a user selection selections can populate other values in other related inputs. This pattern allows users to shortcut entry of information such as an address form or contact information. This is handled with the use of a trigger input often in the form of a `<checkbox>`

When providing inheritance its important to provide users with the ability to override the inherited fields. If users overwrite an inherited input field with a new value its important to switch the trigger input back to its inactive state if the user has not already done so.

> **Example** 
>
> If a user selects a checkbox for "same as shipping address" the inputs below 
> the checkbox will appear populated with the shipping address values from another section of the form. Once a user changes any of the form values the trigger input will reset to its inactive state.
> If users wish to re-apply the inheritance to their inputs they can simply set the trigger input to its active state.

  [Provide example of checkbox trigger inactivated after custom update]

  [Provide example of checkbox trigger in active after custom update]

#### Radio Buttons

Radio buttons are designed to allow a user to select one option from list of options.

Its best to use radio buttons when you have less than 10 items to choose from, anymore than this and spacing can become an issue and users may not be able to compare items together. 

**Good**
[Provide a good example image here]

**Bad**
[Provide a bad example image here]


#### Dropdowns

[provide example of dropdown menu here]

The dropdown menu allows users to select one or sometimes multiple options from a list. They are similar in functionality to checkboxes or radio buttons in this way. The difference being that dropdowns are used for greater amounts of options a user can choose from. 

Dropdowns provide less transparency for users to compare options and thus should be used when there are 5 or greater options to choose from.

[Provide Good and Bad Example here]

#### Validation/Errors

Errors and validation are useful in data entry because it provides users with feedback on inputs that are not recognized by the application.

Errors should occur when the nVision application is unable to complete the expected action.

Validations should occur when a users input is not understood.

In order to mitigate errors in our application and hold to our strive for accessibility we should make it easier for users to input information in as flexible a way as possible. 

> **ProTip:** The nVision app should accept common data formats (e.g. number, email, date-time, etc.) and provide proper context through affordances to help users avoid these errors.

**In the event of validation errors our application should employ the following:**

+ Clear, concise communication of the problem
+ Describe how a user can solve the issue that occurred
+ Prevent as much user input as possible. Where the system can include common entries such as units of measurement or numerical parsers like decimals `.` or architectural marks `'` or `"`

[Provide example of validation error here]

If there are validation errors on an input, the application should help the user resolve the issue as soon as possible. The confirm action button should become disabled until issues are resolved. For inputs that occur in real-time with no confirmation of the action.

__Error/Validation Text__

Error text should only be shown after the interaction with the field. When the user leaves the field the validation should appear before the user clicks on the confirm action button.

Some instances will require the in-line validation to occur 

[provide example of error text on an input]

When using in-line validation the field that contains an error should be highlighted using our error state color for nVision (See [Colors](#colors) section for details on color states).

The error text should have contrast with its background. The text should be legible and readable.

[Provide example of error text on light background]

[Provide example of error text on dark background]

#### Input Help

Input or other form elements that are particularly unique should be provided with some information to help the user understand the best way to provide good data or inform the users about the best choice(s) to make.

For brief information about an input use helper text under the input field or next to the input according to layout (horizontal or vertical layout).

This can also be accomplished through the use of a tooltip on icon. See [Tooltips](#tooltips)

[Example of input with help text here]

For even more brief information provide users with examples of the valid input using placeholder text in the input fields

[Example of input with placeholder text here]

### Complex Input fields

These inputs are inputs that provide users assistance in specific types of data entry that requires more than simple text or numerical entries.

#### Date Pickers/Calendars

[Provide example of date-picker here]

Instead of forcing users to provide a manual entry for a date provide a visual way for our users to select a date or range of dates

#### Search/Find/Lookup input

[provide and example of a search input here]

Search is a very useful tool to provide to users who want to find items quickly. I the nVision application search is useful in both the dashboard and the Model configurator views. The search should limit the items that a user has to sift through to either a small group or a single item.

Search should update results in real-time as much as possible in nVision.
Users should be able to type in a phrase and see the list they are searching through update when items match their input. 

[Show an example here of  search functionality in library list and dashboard]

#### Integer Inputs

[Provide more information here about integer inputs]

#### Decimal Inputs

Inputs that require decimal values should provide parsing for various forms of user input. By providing a system check on user input we can decrease the end users margin for error. 

> **Example** 
>
> If a user enters the value in a `123456` in a field that requires an input format of `xxxx.xxxx`

[provide decimal input example here]

#### Architectural Inputs

nVision is an application that largely deals with measurements in the empirical system. To provide a better enhancement to our user base nVision uses progressive enhancement to append the appropriate `'` or `"` marks to values entered in architectural input field.

> **Example**
If a user enters the values separated by spaces or by dashes,`5 8` or `5-8` or even `5 8 1/16` the value system will account for the missing requirements. For example, the field will show the value as `5'- 8"` or `5'- 8 1/16"` respectively when the user leaves the field by clicking out of the field or when the user presses the <kbd>Enter</kbd> key on the keyboard while in focused the input field.

[provide architectural input example here]

#### Email Inputs

[Provide more information here about email inputs]

``` HTML
<label for="">Email
  <input type="email" name="primary_email" id="primary_email">
</label>
```

#### Telephone Inputs

When dealing with phone numbers in nVision we will utilize progressive enhancement to allow users to easily enter numbers and let the system parse the values as needed. We provide this enhancement by allowing the user to enter their 10 digit phone number with no hyphens.

> **ProTip**
Do not use 3 separate input fields for a telephone number entry. This adds undue complexity to the application and unnecessary burden on the end user.

Use the `type="tel"` input type provided by HTML5 
``` HTML
<input type="tel" name="phone_number" id="phone_number">
```

Use native browser HTML5 validations where available and customize them to match our site branding and style.

If a user enters a value `555 555 5555` or `5555555555` the system should  parse this string of numbers into its standardized format of `555-555-5555`.

__Handling Localization codes__

When dealing with international numbers the system should perform a lookup of the entered number to see which Country code matches the number entered. When the code is determined it should be append the country code to the number

If the user decides to add the country code themselves then the system will perform a check to see if that country code matches a known record.

[Provide example of phone number using progressive enhancement here]

#### Inline Edit

[provide an example of in-line edit input here]

In-line editing is a powerful tool that allows users to edit a record without switching between viewing and editing an input.  This method follows our principle of efficiency and should be used wherever possible.

Fields that allow in-line editing should be paired with the edit pencil icon in a tooltip on hover state. The inline edit action should start when the user clicks on the edit text or pencil icon in the tooltip.

[provide example of inline edit input here]

__Progressive enhancement__

Progressive enhancement is a tern in web design that describes an emphasis on accessibility, semantic markup (HTML) and the use of external style-sheets and scripting files.

Progressive enhancement is a focus on accessibility and efficiency for our user base while also containing a fall-back for older browsers where necessary.

Below are some of the cases where we try to offer progressive enhancements whenever possible.

## Data Presentation

When displaying data for a user the items should be easy to differentiate from each other. Often these items are made in the form of lists or multiple lists paired together. The most important thing is that the data  points are clearly labeled for scan-ability. For example data points that relate to units of measurement should have the measurement unit provided with the data point.

**Its a good idea to follow these principles when displaying data points:**

+ Provide a visible affordance such an icon, link or a button for interactive portions of list.
+ Title each list of data points and use labels where possible. Its a very jarring experience when data points are provided without context.
+ Provide users with an empty state screen when there are no data points to display. If a list is empty tell the user why this follows our principle of clarity. 

> Example 
> An Empty state message in a search view would say "No results found, Please try and refine your search."

#### Data Tables

[provide example of tables here]

Data tables are used to display raw data elements. They are designed for desktop displays. A data table is the most basic form of data representation. 

This type of data presentation is to be used for large number of records that need to be easily scanned filtered and scrolled through.

If we allow columns of our tables to be resized allow for a horizontal scroll bar on the data table, but don't allow the columns to resize responsively as this actually impedes users ability to see on smaller screens and mobile devices.

When needing raw data on mobile devices its best to convert the data tables to Tiles lists. See [Tiles](#tiles) for more information.

#### Tiles

[provide example of tile from pricing screens here]

A Tile is a UI component that acts as a gateway to more detailed information for a user. They can contain images, text, buttons, or links about a single action or subject.

They can contain content of various widths and length and should behave responsively to that content.

Tiles can grouped together along either the horizontal or vertical plane.

Tiles can be used when horizontal spacing is constrained. They are used a gateway to more content so there should be as little content as possible within them.

When using tiles for lists is best to use them for items that are shorter than 10 lines. If more information is needed use a List or data table instead depending on the context of the situation.

[Provide example of tiles listed together]

Because tiles can be varying widths and heights its best to group tiles by type.

Horizontal Tiles with horizontal tiles

Vertical tile with vertical tiles

If these two types need to be mixed together for the sake of context between data elements. Use the following layout...
[ Not decided yet what happens here]

#### Timeline/History Feed

[provide example of Versioning time-line here]

A Timeline or History Feed is a UI component that tracks what a user has done in the application. This component is primarily used in our "Versioning history" for Models in the Model Configurator.

The History feed shows past and present events that have happened to a model.

The history feed can be used to revert a model back to a previous state.

A user can access the past events of a model as well as the events that occurred beyond the current state they have chosen for a model.

[More details needed about the History feed/ Timeline UI]

## Data Loading and Processing

Loading indicators are helpful to user because they provide communication that the application is actively working to retrieve data for them. There are a variety of ways we present this data to our users in the nVision application.

#### Spinners

Spinners are animated SVGs or GIFs that provide feedback on an otherwise blank screen when the system is loading or working to retrieve data. Contrary to their name they don't always have to spin they can animate in lots of creative ways. Use spinners when a component on a page is making an update asynchronously without refreshing the entire page.

Spinners should generally be centered vertically _AND_ horizontally within its container. In order to provide contrast against any possible backdrop provide a light or dark overlay behind the spinner.

Spinners should not be placed directly over text or other visual elements on screen without this overlay.

[provide an example of loading animation here]

Sometimes spinners need more context added to them to indicate the type of action that is taking a while. for that we append text labels such as "Loading " or "Retrieving/Sorting  Models or Projects"

[Provide an example of list loading]

[provide an example of full screen loading animation]

[provide Modal loading animation]

[ provide an example of continuous scrolling loading here]

#### Blueprints

In the event that a page needs to be loaded/ re-loaded at once we recommend use a placeholder loading content to visually communicate that content is in the process of loading. We call this blueprint loading.

[Provide Blueprint loading example here]

Blueprint loading should not be used for asynchronous updates in the application. Blueprints are a more visually appealing way to show that everything on a page needs to load. Showing our spinner animation in multiple components on a page or raw code variables would not be very a good experience to users and violates our principle of aesthetics.

Blueprints are to be used when data will take longer than roughly `300ms` to retrieve. If the data takes less than 300ms its best to just show the data. If it takes more `300ms` then the data should transition in smoothly and fade-in as the blueprint fades out.

If a component doesn't display until it already contains data then a blueprint is not needed just display the data.

__Blueprint Aesthetic__

[provide an example of Blueprint placeholder content here]

A blueprint design aesthetic should behave in the following manner

+ Lightweight and simple. use simple shapes to convey the content/data included in a component. This excludes actionable UI elements like buttons and links.
+ Keep the shape heights consistent to keep a nice and easy to view aesthetic
+ They should be responsive and stretch/shrink t fit their containers.
+ When loading blueprints they should follow the pattern of Top left to bottom right.

[provide an example of Blueprint placeholder for lists]

[provide an example of Blueprint placeholder for model/project here]

## Empty States

Empty states are a design pattern we employ when the UI can't show content.
When a dialog doesn't contain any items or a search doesn't retrieve any results. These state should not be very common but in the event that they occur its better to provide users with a designed experience instead of a blank screen (which is often seen as an afterthought). 

__Empty state layout__

Empty state should display a non-interactive image coupled with a text tagline.

__Search empty State__

When a user searches in nVision and their results are not found we should display helper text to help them troubleshoot their query:

> Example:
  No Results found. Please refine your search
  Here are some tips:
  Check your spelling
  Use first 3 characters of text to search

__Image &amp; Background__
The image should be neutral in tone. The background should also be neutral in tone compared to the normal state of the container.

[Provide example of empty state in Sidebar dialogs]

__Text Usage__

The text should be very brief and follow the principles of [Voice and Tone](#voice-and-tone)

__Action Options__

Some Empty states should contain a way for users to add content to the component. 

[Provide example of Empty state with action text/button here]

## Layouts

Layouts are structured templates that provide consistency for common actions/patterns in the application.

**Layouts guidelines to follow when creating/selecting layouts:** 

+ **Content drives layout** - Understand how the information will be used before choosing a layout design.
+ **Priorities First** - Organize the content to display the most important information first 
+ **Group like items together** - Make it efficient for users to sift through the content.

#### Dashboard Layout

[provide example of dashboard layout here]

#### Workspace Layout

[provide example of workspace layout here]

#### List Layout

[provide example of List layouts here]

#### Grid Layout

[provide example of grid layouts here]

## Notifications

Notifications are nVision applications direct response to user conveying the result of their actions or a system action on their behalf.

#### Icons

Icons are used with notification components to provide greater accessibility and context to a user. When deciding how to use the icons please refer to the list below.

| Icon    | When to Use Them |
| --------| --------------------------------------------------------- |
| Success | Actions were completed successfully |
| Warning | Something may occur that user might not intend |
| Error   | Something went wrong. Something isn't allowed to occur. |
| Info    | Additional information is available to give more context. |

[provide image of the icons in this table]

#### Alerts

Alerts are a way to communicate important high-level information. In the Model configurator alerts should provide real-time updates about user actions like incorrect placement of a object on a shape. In the project dashboard alerts should let users know when they have created, updated, or deleted data.

In the Model Configurator alerts should appear at the bottom of the screen.

[Example of alerts shown in Model Configurator here]

In the dashboard the Alerts should appear at the top of screen.

__ Alert Types__

**Alerts can appear in 3 unique states:**

+ **Persistent** - these alerts remain visible until the user dismisses it with the ` [X] `, or close icon. Time duration doesn't apply to these alert types.
+ **Dismiss-able** - these remain visible until the user has either dismissed it with the `[X]` or the time duration has been completed.
+ **Wispy** - This will remain visible until the time duration has been completed.  there is no `[X]` icon on this alert type and the user cannot dismiss it early. This is done to force the user to see this alert for the full time period.

__Sizing__

Alerts should have a minimum width of 60% of their container (see alerts in components section for more details). Alert text should wrap to as many lines as necessary without truncation. Alerts should also be centered within their container or within the canvas of the workspace.

__Alert Stacking__

When more than one alert appears at the same time stack them so that the most recent alert is placed on top and the rest appear in chronological order.

__Alert Batching__ 

Alert stacking can become quite busy. To minimize the amount of alerts that appear stacked nVision utilizes a Batching of alerts of the same type.

[Provide example of batched alerts of the same type here]

> **ProTip:** 
Success message Alerts should not be used when an action would bring the user into a newly created item or when the action would present the user with their new change immediately.

#### Confirmation Dialogs

[provide an example of a confirmation dialog here]

A confirmation dialog is a notification that requires user action in order to move forward.

> **ProTip:** Confirmation dialogs are meant to stop the user from completing other parallel actions in the application. This way we force the user to take action on this before doing anything else.

Confirmation dialogs provide the user with one or more options to confirm or deny their choices for the action that prompted the dialog. 

**Confirmation dialogs should be used when one of the following things occur:**

+ When changes are not saved in real-time
+ When there is no ability to retain changes when switching between actions
+ When performing batch operations that would require a reset of items in the workspace. This is particularly common in the Model Configurator

**Confirmation dialogs require one of three actions to take place:**

+ A user must click the `Cancel` button in the dialog. This action will cancel any changes that were tied to the confirmation dialog. 
+ A user must click the `Continue` button in the dialog. This action will confirm any changes that were tied to the confirmation dialog.
+ A user must click the `X` icon to close the dialog. This action has the same effect as the cancel option.

[Provide examples of confirmation dialogs in Model Configurator]

#### Tooltips

Tooltips are text labels that provide feedback when the user hovers over, focuses on, or touches an element in the application.

They should contain brief help-text about the function of the element its paired with.

Tooltips should be used for interactive icons and buttons with iconography and imagery in the application

[Provide an example of tooltip with icons]

[Provide an example of tooltip with button]

[Provide an example of tooltip with imagery]

Tooltips don't have directional arrows they are presented based on motion towards the source object

[example of tooltip appearing in relation to mouse direction] 

## Navigation

Navigation patterns are what help users move between screens and find what they need in the application to accomplish their goals.

There are several techniques that nVision uses to guide users through the application:

#### Tabs

Tabs are a UI component that help separate content into logical groups to provide focus to users regarding related content.

Tabs should allow users to switch between them to perform tasks without leaving the page. Tabs content should act independently of each other so tabs should not be used for a linear process with a strict order.

Tabs should always start with a default tabs selected.

Tabs should fit into their container and adapt to the screen they are viewed.

Tabs should only affect the visual container they are placed in. Content outside of the tab container should not change when users switch tabs.

__Horizontal Tabs__

When horizontal tabs don't all fit the horizontal screen space do not allow a horizontal scroll to occur. Instead place the horizontal tabs into an overflow menu. When a user selects a tab from the overflow menu it should replace the last tab visible in the viewport. The tabs that was previously shown should be placed into the overflow menu as the first option in the list.

[provide an example of this tabs situation here]

__Vertical Tabs__
Vertical Tabs should generally be used when there are as few as 3 options. Its a good idea to use vertical tabs when UI needs 8 or more tabs. 

#### Tree List

[provide example of Model Structure tree here]

A Tree List  is useful for displaying hierarchical data that needs to be grouped into a parent-child relationship. A Tree List will contain a `arrow icon` or `>` to indicate the ability to display the child of a list-item if there is one available. 

__Parent-Child Relationship__

Parent records can be either static labels or children of other parent items in the tree list. 

Child records are indented below their parent list-item to display their relationship in the hierarchy. Not every item in a tree list needs to have a child.

__Selection & Highlighting__

Tree list items should provide visible feedback to the user when they make a selection from the list or hover their pointer over an item. 

Selection of an item in the tree list should be highlighted in a high contrast to the background color of the tree list container. 

Hovering of an item in the tree list should be done with one of our neutral colors at a reduced opacity within the context of the tree list containers background color.

Some list-items in the tree list will not be selectable and will act as a label in the tree list. Label records in the Tree list will not be highlighted with user selection. Labels will typically be parent records that cannot be renamed or otherwise modified.

__Nesting Items__

While tree lists can technically have unlimited nesting it is not recommended to have trees nested to excessively deep levels because it becomes harder for users to parse through the content in the tree.

[Provide example tree list with good and bad example]

#### Breadcrumbs

[Provide example of this pattern in dashboard and workspace]

Breadcrumbs are a navigation UI component that nVision uses to help navigate hierarchy of pages within the app.

A breadcrumb uses a parent-child relationship to notify users where they are in the application. 

Breadcrumbs are especially useful pattern when a user is linked directly to a page from a shared link or from otherwise non-linear fashions.

__Lengthy Breadcrumbs__

When dealing with breadcrumbs that are deeper than 3 levels truncate the view to show all but the last 2 links of breadcrumb to the user.

#### Off-Canvas Navigation

[Provide example of this pattern in dashboard]

Off-Canvas navigation components should be used when space is limited and the use of a horizontal navigation or a tab navigation component will not fit the situation.

Off-Canvas navigation is a vertically oriented navigation that can be hidden from view until the user needs to view the content hence the name "off-canvas".

[Provide example of navigation shown and hidden here]

# nVision UI Components

## Buttons

#### Base button
Buttons are a UI element that conveys an action that will take place when the user touches them.

A Button should be created using the button `<button>` element in nVision.
For accessibility the button should have the aria attribute of `role` to give screen readers a better understanding of the element.

nVision uses three major types of buttons for interaction:

+ Rounded buttons
+ Text buttons
+ Icon buttons

The basic button is created using the`.btn` class. This should look like a plainly styled button with rounded corners for a nicer look. Buttons should have at least a `border-radius : 4px ` Buttons also have helper classes associated with them to increase their size.

<div class="nv-example">
  <button class="btn nv-button" role="button">Button</button>
</div>

``` HTML
<button class="btn nv-button" role="button">Button</button>
```
When disabling a button use the HTML5 `disabled` attribute.

<div class="nv-example">
  <button class="btn nv-button" role="button" disabled="disabled">Button</button>
  <button class="btn nv-button btn-primary" role="button" disabled="true">Button</button>
  <button class="btn nv-button-secondary" role="button" disabled >Button</button>
</div>

``` HTML
<button class="btn nv-button" role="button" disabled="disabled">Button</button>
<button class="btn nv-button btn-primary" role="button" disabled="true">Button</button>
<button class="btn nv-button-secondary" role="button" disabled >Button</button>
```

#### Primary Action Buttons

__Example__

<button class="btn nv-button">Button</button>

__Class Name__

`.nv-button`

__Behavior__

[Describe how this is supposed to be behave]

__Usage__

This button will be used for the primary actions a user needs to take in the dialogs and forms of the nVision UI.


#### Secondary Action Buttons

__Example__

<button class="btn nv-button-secondary">Button</button>

__Class Name__

`.nv-button-secondary`

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

#### Icon Buttons

__Example__

<button class="btn nv-button"><span class="btn-icon">[Icon]</span>Button</button>

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]


#### Text Buttons

__Example__

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]


## Data Loading/Processing Indicators

#### Spinners

__Example__

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

## Data Tables

#### Basic Table

__Example__

<div class="nv-example">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>System</th>
        <th>Redundancy</th>
        <th>Fundamental</th>
        <th>Modification</th>
      </tr>
    </thead>
    <tbody>
      <tr class="align-right">
        <td>001</td>
        <td>001</td>
        <td>001</td>
        <td>001</td>
      </tr>
      <tr class="align-right">
        <td>001.001</td>
        <td>001.001</td>
        <td>001.001</td>
        <td>001.001</td>
      </tr>
      <tr>
        <td>001.1234</td>
        <td>001.1234</td>
        <td>001.1234</td>
        <td>001.1234</td>
      </tr>
      <tr>
        <td>01</td>
        <td>01</td>
        <td>01</td>
        <td>01</td>
      </tr>
    </tbody>
  </table>
</div>

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]


#### Interactive Table

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Dialogs

#### Modal Dialogs

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Dimension Modal Dialog

Dimension modal dialogs are modal dialogs that nVision uses to allow users a more precise movement of objects in the Model Configurator workspace.

__Class Name__

`.dimension-modal`

__Behavior__

If a user selects 1 or more objects of the same type together and clicks a dimension modal. They will be presented with a dimension modal dialog.

__Usage__

When using dimension modal a user can modify  1 or many items of the same category together. 

Below are the basic rules to follow when a user interacts with a dimension modal dialog:

**When the user modifies the values provided in the dimension modal dialog the following events can/will occur:**

**Valid changes to one or many items**

+ If the user enters a valid value in the input fields the user will be able click the apply button.
+ The new value will be applied to the items the user selected right before opening the dimension modal.

**Invalid changes to one or many items**

+ If the user enters a value that is not valid for just one of the multi-selected items the follow will occur:
+ The user will be provided with an inline validation message stating the nature of the error. These validation will be defined based on the mode and type of action in project user stories.
+ The change will not be applied to any of the items selected.

__Example__

<div class="nv-example">
    <div class="modal-small">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div id="DimensionModal" class="modal-body dimension-modal">
                    <form name='dmForm'>
                        <header>
                            <h4>Set Distance: Object Name</h4>
                        </header>
                        <hr/>
                        <div class="form-group">
                            <label for="distance_input">Distance</label>
                            <input id="distance_input" name="distance_input" class="form-control" ng-model="dm.distance" ng-value="dm.distance"></input>
                        </div>
                        <div class="form-group">
                            <button class="btn nv-button-secondary" ng-click="dm.save()" ng-disabled="dm.message.length > 0">Apply</button>
                            <button class="btn btn-link" ng-click="dm.cancel()">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

``` html
<div class="nv-example">
    <div class="modal-small">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div id="DimensionModal" class="modal-body dimension-modal">
                    <form name='dmForm'>
                        <header>
                            <h4>Set Distance: Object Name</h4>
                        </header>
                        <hr/>
                        <div class="form-group">
                            <label>Distance</label>
                            <input name="input_name" class="form-control" ng-model="dm.distance" ng-value="dm.distance"></input>
                        </div>
                        <div class="form-group">
                            <button class="btn nv-button-secondary" ng-click="dm.save()" ng-disabled="dm.message.length > 0">Apply</button>
                            <button class="btn btn-link" ng-click="dm.cancel()">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Properties Modal Dialog

__Example__

__General Properties__

<div class="nv-example">
    <div class="modal-dialog properties-modal-container">
        <div class="modal-content properties-modal-content">
            <div class="modal-header properties-modal-header">
                <button type="button" class="properties-modal-close close" data-dismiss="modal" aria-hidden="true" ng-click="lnc.cancel()">&times;</button>
                <h4 class="modal-title properties-modal-title">{{lnc.modelName}} General Loadings</h4>
            </div>
            <aside class="properties-modal-nav-container">
                <nav>
                    <ul class="properties-modal-nav" role="tablist">
                        <li id="buildingCodeTab" ng-class="{confirmed: lnc.loadingModel.buildingCodeConfirmed === true}" class="properties-modal-nav-item general-load-tab active" role="presentation">
                            <a ui-sref="generalLoading.buildingCode" data-toggle="tab" aria-controls="buildingCode">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.buildingCodeConfirmed === true"> Building Code
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="liveLoadTab" ng-class="{confirmed: lnc.loadingModel.liveLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.liveLoad')" aria-controls="liveLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.liveLoadConfirmed === true"> Live Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="windLoadTab" ng-class="{confirmed: lnc.loadingModel.windLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.windLoad')" aria-controls="windLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.windLoadConfirmed === true"> Wind Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="snowLoadTab" ng-class="{confirmed: lnc.loadingModel.snowLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.snowLoad')" aria-controls="snowLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.snowLoadConfirmed === true"> Snow Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="seismicTab" ng-class="{confirmed: lnc.loadingModel.seismicLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.seismic')" aria-controls="seismic">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"> Seismic
                                    </label>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <section class="properties-modal-info-text">
                        <small>The builder is responsible for contacting the local Building Official or the project Design Professional to obtain all code loading information for this specific building site. </small>
                    </section>
                </nav>
                <footer class="properties-modal-footer">
                    <button type="button" class="btn nv-button-default confirm-apply-btn" ng-click="lnc.save()">Apply</button>
                    <button type="button" class="btn btn-link btn-cancel" data-dismiss="modal" ng-click="lnc.cancel()">Cancel</button>
                </footer>
            </aside>
            <div ui-view="generalLoading" class="properties-modal-body modal-body"></div>
        </div>
    </div>
</div>

```html
<div class="modal-dialog properties-modal-container">
        <div class="modal-content properties-modal-content">
            <div class="modal-header properties-modal-header">
                <button type="button" class="properties-modal-close close" data-dismiss="modal" aria-hidden="true" ng-click="lnc.cancel()">&times;</button>
                <h4 class="modal-title properties-modal-title">{{lnc.modelName}} General Loadings</h4>
            </div>
            <aside class="properties-modal-nav-container">
                <nav>
                    <ul class="properties-modal-nav" role="tablist">
                        <li id="buildingCodeTab" ng-class="{confirmed: lnc.loadingModel.buildingCodeConfirmed === true}" class="properties-modal-nav-item general-load-tab active" role="presentation">
                            <a ui-sref="generalLoading.buildingCode" data-toggle="tab" aria-controls="buildingCode">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.buildingCodeConfirmed === true"> Building Code
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="liveLoadTab" ng-class="{confirmed: lnc.loadingModel.liveLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.liveLoad')" aria-controls="liveLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.liveLoadConfirmed === true"> Live Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="windLoadTab" ng-class="{confirmed: lnc.loadingModel.windLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.windLoad')" aria-controls="windLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.windLoadConfirmed === true"> Wind Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="snowLoadTab" ng-class="{confirmed: lnc.loadingModel.snowLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.snowLoad')" aria-controls="snowLoad">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" ng-checked="lnc.loadingModel.snowLoadConfirmed === true"> Snow Load
                                    </label>
                                </div>
                            </a>
                        </li>
                        <li id="seismicTab" ng-class="{confirmed: lnc.loadingModel.seismicLoadConfirmed === true}" class="properties-modal-nav-item general-load-tab" role="presentation">
                            <a ng-click="lnc.goToStateName('generalLoading.seismic')" aria-controls="seismic">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"> Seismic
                                    </label>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <section class="properties-modal-info-text">
                        <small>The builder is responsible for contacting the local Building Official or the project Design Professional to obtain all code loading information for this specific building site. </small>
                    </section>
                </nav>
                <footer class="properties-modal-footer">
                    <button type="button" class="btn nv-button-default confirm-apply-btn" ng-click="lnc.save()">Apply</button>
                    <button type="button" class="btn btn-link btn-cancel" data-dismiss="modal" ng-click="lnc.cancel()">Cancel</button>
                </footer>
            </aside>
            <div ui-view="generalLoading" class="properties-modal-body modal-body"></div>
        </div>
    </div>
```

__Shape Properties__

[Example  of shape loadings needed here]

#### Confirmations Dialog

__Example__

<div class="nv-example">
  <div class="workspace-message">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body Confirm" ng-class="alert.messageType">
                  <span class="pull-right" ng-click="alert.dismiss()" ng-show="alert.messageType !== 'Success'">
                  [X icon here] </span>
                  <p>Do you want to take this action?</p>
                  <div class="pull-right" ng-show="alert.messageType === 'Confirm'">
                      <button class="btn wm-alert-button" ng-click="alert.confirm()">Continue</button>
                      <button class="btn btn-link" ng-click="alert.dismiss()">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  </div>    
</div>

```html
<div class="nv-example">
  <div class="modal workspace-message">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body" ng-class="alert.messageType">
                  <span class="pull-right" ng-click="alert.dismiss()" ng-show="alert.messageType !== 'Success'"><img class="svg alert-svg" src="app/assets/exit.svg" /></span>
                  <p>example of alert message here</p>
                  <div class="row" ng-show="alert.messageType === 'Warning' && !alert.showDetail && alert.controller.warnCount > 1">
                      <span class="pull-left col-xs-6">{{alert.controller.warnCount}} Warning(s) Occured</span>
                      <button class="pull-left btn btn-link col-xs-6" ng-click="alert.showDetail = true">View Details</button>
                  </div>
                  <div class="pull-right" ng-show="alert.messageType === 'Confirm'">
                      <button class="btn-primary wm-alert-button" ng-click="alert.confirm()">Continue</button>
                      <button class="btn btn-link" ng-click="alert.dismiss()">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  </div>    
</div>
```

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]


#### Sidebar Dialog

__Example__

<div class="nv-example nv-example-large">
    <div class="sidebar-dialog">
      <section class="dialog-content">
          <div class="col-md-12">
            <div class="row">
              <header class="dialog-header modal-header">
                <h3>Dialog Title Here</h3>
              </header>
            </div>
          <form action="" name="sdd">
              <section class="col-md-12">
                  <div class="form-group">
                    <label for="input_name">Width
                    </label>
                      <input class="form-control" type="text" id="input_name" name="input_name">
                  </div>
                  <div class="form-group">
                    <label for="input_name2">Length
                    </label>
                      <input class="form-control" type="text" id="input_name2" name="input_name2">
                  </div>
                  <div class="form-group">
                    <label for="input_name3">Ridge Distance
                    </label>
                      <input class="form-control" type="text" id="input_name3" name="input_name3">
                  </div>
                  <div class="form-group">
                    <label for="input_name4">Roof Pitch
                    </label>
                      <input class="form-control" type="text" id="input_name4" name="input_name4">
                    </div>
              </section>
              <footer class="sd-button-container col-md-12">
                <button class="btn nv-button btn-primary">Apply </button>
                <button class="btn btn-link btn-cancel">Cancel</button>
              </footer>
          </form>
        </div>
      </section>
    </div>
</div>

``` HTML
<div class="sidebar-dialog">
  <section class="dialog-content">
    <div class="col-md-12">
      <header class="dialog-header modal-header">
        <h3>Dialog Title Here</h3>
      </header>
      <form action="" name="sdd">
          <section class="col-md-12">
            Content goes here...
          </section>
          <footer class="sd-button-container col-md-12">
            <button class="btn btn-primary">Apply </button>
            <button class="btn btn-link btn-cancel">Cancel</button>
          </footer>
      </form>
    </div>
  </section>
</div>
```

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

In dialogs the user can hit the <kbd>Esc</kbd>, or 'Escape key' key on their keyboard to reset the sidebar dialog. Pressing the <kbd>Esc</kbd> key again will close the dialog.

## Forms

our forms inputs are the basic method of information entry into our application.

#### Text Fields
__Example__

<div class="nv-example">
    <div class="form-group">
      <label for="shape_width">Width</label> 
      <input class=".nv-input form-control" id="shape_width" name="shape_width">
    </div>
</div>

__Class Name__

`.form-control`

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

#### Checkboxes

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

<div class="checkbox">
  <label for="grid_display">
  <input name="grid_display" id="grid_display" type="checkbox">Show Grid
  </label>
</div>

#### Radio button

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

<form class="form">  
  <div class="radio">
    <label for="option_1">
      <input id="option_1" type="radio" name="options" value="option1" checked />Option 1
    </label>
  </div>
  <div class="radio">
    <label for="option_2">
      <input id="option_2" type="radio" name="options" value="option2" />Option 2
    </label>
  </div>
</form>

``` HTML
<form class="form">  
  <div class="radio">
    <label for="option_1">
      <input id="option_1" type="radio" name="options" value="option1" />Option 1
    </label>
  </div>
  <div class="radio">
    <label for="option_2">
      <input id="option_2" type="radio" name="options" value="option2" />Option 2
    </label>
  </div>
</form>
```

#### Textarea

__Example__

<div class="form-group">
  <label for="description">Description</label>
  <textarea name="description" id="description" class="form-control" placeholder="enter text here&hellip;"></textarea>
</div>

``` HTML
<div class="form-group">
  <label for="description">Description</label>
  <textarea name="description" id="description" class="form-control" placeholder="enter text here"></textarea>
</div>
```

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]


#### Datepicker

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Lists

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Grid Lists

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Library List

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Tree List

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Menus

#### Dropdown Menu

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Right click Menu

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Navigation

#### BreadCrumbs

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Off-Canvas

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Horizontal Navigation

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Vertical Navigation

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Sidebar Navigation

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Tabs

__Dialog tabs__

[Provide example of pattern in sidebar dialog from workspace]

__Modal tabs__

[Provide example of pattern in modal dialog from workspace]

__Cross-section tabs__

[Provide example of this in Modal dialog from workspace]

## Notifications

#### Alerts

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Panels

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Tiles

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

#### Tile Lists

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

## Tooltips

__Class Name__

__Behavior__

[behavior description goes here]

__Usage__

[Describe how this is supposed to be used]

__Example__

# nVision UI Training Material

## Onboarding

## New Feature Discovery

## Gesture/Selection Instructions

# Resources

#### Icons

For access to the icons created for this project please use the link provided below.

__SVG Icons__
[link will need to be created for these icons]

__PNG Icons__

[link will need to be created for these icons]

#### Mockups (link)

Here is access to see how we have combined our components to create the nVision Application.
[nVision Application Mockups](https://invis.io/YB961443J#/102430060_Add_Shape)

#### nVision Dictionary (link)

nVision has a great deal of engineering terminology that can be hard to decipher without the proper experience. Thus BlueScope has created a glossary site with visual examples and written definitions of the many building parts that are created using this software.

[Provide link to RUNALL glossary of terms]