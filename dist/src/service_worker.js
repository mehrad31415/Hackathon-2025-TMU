(()=>{let e,t,r;function a(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function n(e,t){return Object.keys(t).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e}var s,o,i,l,u=globalThis,p={},c={},d=u.parcelRequired024;null==d&&((d=function(e){if(e in p)return p[e].exports;if(e in c){var t=c[e];delete c[e];var r={id:e,exports:{}};return p[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){c[e]=t},u.parcelRequired024=d);var h=d.register;h("foUwZ",function(e,t){}),h("gj6Et",function(e,t){!function(e,t,r){function a(e){var t,r=this,a=(t=0xefc8249d,function(e){e=String(e);for(var r=0;r<e.length;r++){var a=.02519603282416938*(t+=e.charCodeAt(r));t=a>>>0,a-=t,a*=t,t=a>>>0,a-=t,t+=0x100000000*a}return(t>>>0)*23283064365386963e-26});r.next=function(){var e=2091639*r.s0+23283064365386963e-26*r.c;return r.s0=r.s1,r.s1=r.s2,r.s2=e-(r.c=0|e)},r.c=1,r.s0=a(" "),r.s1=a(" "),r.s2=a(" "),r.s0-=a(e),r.s0<0&&(r.s0+=1),r.s1-=a(e),r.s1<0&&(r.s1+=1),r.s2-=a(e),r.s2<0&&(r.s2+=1)}function n(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var r=new a(e),s=t&&t.state,o=r.next;return o.int32=function(){return 0x100000000*r.next()|0},o.double=function(){return o()+(2097152*o()|0)*11102230246251565e-32},o.quick=o,s&&("object"==typeof s&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.alea=s}(0,e,"function"==typeof define&&define)}),h("4gDjz",function(e,t){!function(e,t,r){function a(e){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:r+=e;for(var a=0;a<r.length+64;a++)t.x^=r.charCodeAt(a),t.next()}function n(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function s(e,t){var r=new a(e),s=t&&t.state,o=function(){return(r.next()>>>0)/0x100000000};return o.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/0x100000000,a=(e+t)/2097152;while(0===a)return a},o.int32=r.next,o.quick=o,s&&("object"==typeof s&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xor128=s}(0,e,"function"==typeof define&&define)}),h("HLBv4",function(e,t){!function(e,t,r){function a(e){var t=this,r="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:r+=e;for(var a=0;a<r.length+64;a++)t.x^=r.charCodeAt(a),a==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function n(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function s(e,t){var r=new a(e),s=t&&t.state,o=function(){return(r.next()>>>0)/0x100000000};return o.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/0x100000000,a=(e+t)/2097152;while(0===a)return a},o.int32=r.next,o.quick=o,s&&("object"==typeof s&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xorwow=s}(0,e,"function"==typeof define&&define)}),h("ktaoY",function(e,t){!function(e,t,r){function a(e){var t=this;t.next=function(){var e,r,a=t.x,n=t.i;return e=a[n],e^=e>>>7,r=e^e<<24^((e=a[n+1&7])^e>>>10)^((e=a[n+3&7])^e>>>3)^((e=a[n+4&7])^e<<7),e=a[n+7&7],e^=e<<13,r^=e^e<<9,a[n]=r,t.i=n+1&7,r};var r,a=e,n=[];if(a===(0|a))n[0]=a;else for(r=0,a=""+a;r<a.length;++r)n[7&r]=n[7&r]<<15^a.charCodeAt(r)+n[r+1&7]<<13;for(;n.length<8;)n.push(0);for(r=0;r<8&&0===n[r];++r);for(8==r?n[7]=-1:n[r],t.x=n,t.i=0,r=256;r>0;--r)t.next()}function n(e,t){return t.x=e.x.slice(),t.i=e.i,t}function s(e,t){null==e&&(e=+new Date);var r=new a(e),s=t&&t.state,o=function(){return(r.next()>>>0)/0x100000000};return o.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/0x100000000,a=(e+t)/2097152;while(0===a)return a},o.int32=r.next,o.quick=o,s&&(s.x&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xorshift7=s}(0,e,"function"==typeof define&&define)}),h("gBs5C",function(e,t){!function(e,t,r){function a(e){var t=this;t.next=function(){var e,r,a=t.w,n=t.X,s=t.i;return t.w=a=a+0x61c88647|0,r=n[s+34&127],e=n[s=s+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,r=n[s]=r^e,t.i=s,r+(a^a>>>16)|0},!function(e,t){var r,a,n,s,o,i=[],l=128;for(t===(0|t)?(a=t,t=null):(t+="\0",a=0,l=Math.max(l,t.length)),n=0,s=-32;s<l;++s)t&&(a^=t.charCodeAt((s+32)%t.length)),0===s&&(o=a),a^=a<<10,a^=a>>>15,a^=a<<4,a^=a>>>13,s>=0&&(o=o+0x61c88647|0,n=0==(r=i[127&s]^=a+o)?n+1:0);for(n>=128&&(i[127&(t&&t.length||0)]=-1),n=127,s=512;s>0;--s)a=i[n+34&127],r=i[n=n+1&127],a^=a<<13,r^=r<<17,a^=a>>>15,r^=r>>>12,i[n]=a^r;e.w=o,e.X=i,e.i=n}(t,e)}function n(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function s(e,t){null==e&&(e=+new Date);var r=new a(e),s=t&&t.state,o=function(){return(r.next()>>>0)/0x100000000};return o.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/0x100000000,a=(e+t)/2097152;while(0===a)return a},o.int32=r.next,o.quick=o,s&&(s.X&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xor4096=s}(0,e,"function"==typeof define&&define)}),h("ktLSh",function(e,t){!function(e,t,r){function a(e){var t=this,r="";t.next=function(){var e=t.b,r=t.c,a=t.d,n=t.a;return e=e<<25^e>>>7^r,r=r-a|0,a=a<<24^a>>>8^n,n=n-e|0,t.b=e=e<<20^e>>>12^r,t.c=r=r-a|0,t.d=a<<16^r>>>16^n,t.a=n-e|0},t.a=0,t.b=0,t.c=-0x61c88647,t.d=0x517cc1b7,e===Math.floor(e)?(t.a=e/0x100000000|0,t.b=0|e):r+=e;for(var a=0;a<r.length+20;a++)t.b^=r.charCodeAt(a),t.next()}function n(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function s(e,t){var r=new a(e),s=t&&t.state,o=function(){return(r.next()>>>0)/0x100000000};return o.double=function(){do var e=r.next()>>>11,t=(r.next()>>>0)/0x100000000,a=(e+t)/2097152;while(0===a)return a},o.int32=r.next,o.quick=o,s&&("object"==typeof s&&n(s,r),o.state=function(){return n(r,{})}),o}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.tychei=s}(0,e,"function"==typeof define&&define)}),h("g1SDc",function(e,t){a(e.exports,"load",()=>k),d("8cIQ2");var r=d("jO0nh"),n=d("fM0z2"),s=d("1c9K8"),o=d("lCbVL"),i=d("ciqGg"),l=d("2tkTo"),u=d("iY58J"),p=d("gjmji"),c=d("bVaGH"),h=d("2GEz9"),f=d("jUNqu"),m=d("hXFvf"),g=d("6R8FV"),x=d("gwcMA");function y(e,t,r,a){return new(r||(r=Promise))(function(n,s){function o(e){try{l(a.next(e))}catch(e){s(e)}}function i(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,i)}l((a=a.apply(e,t||[])).next())})}function b(e,t){var r,a,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){var l=[s,i];if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&l[0]?a.return:l[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,l[1])).done)return n;switch(a=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{r=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}}var v={0:"tench, Tinca tinca",1:"goldfish, Carassius auratus",2:"great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias",3:"tiger shark, Galeocerdo cuvieri",4:"hammerhead, hammerhead shark",5:"electric ray, crampfish, numbfish, torpedo",6:"stingray",7:"cock",8:"hen",9:"ostrich, Struthio camelus",10:"brambling, Fringilla montifringilla",11:"goldfinch, Carduelis carduelis",12:"house finch, linnet, Carpodacus mexicanus",13:"junco, snowbird",14:"indigo bunting, indigo finch, indigo bird, Passerina cyanea",15:"robin, American robin, Turdus migratorius",16:"bulbul",17:"jay",18:"magpie",19:"chickadee",20:"water ouzel, dipper",21:"kite",22:"bald eagle, American eagle, Haliaeetus leucocephalus",23:"vulture",24:"great grey owl, great gray owl, Strix nebulosa",25:"European fire salamander, Salamandra salamandra",26:"common newt, Triturus vulgaris",27:"eft",28:"spotted salamander, Ambystoma maculatum",29:"axolotl, mud puppy, Ambystoma mexicanum",30:"bullfrog, Rana catesbeiana",31:"tree frog, tree-frog",32:"tailed frog, bell toad, ribbed toad, tailed toad, Ascaphus trui",33:"loggerhead, loggerhead turtle, Caretta caretta",34:"leatherback turtle, leatherback, leathery turtle, Dermochelys coriacea",35:"mud turtle",36:"terrapin",37:"box turtle, box tortoise",38:"banded gecko",39:"common iguana, iguana, Iguana iguana",40:"American chameleon, anole, Anolis carolinensis",41:"whiptail, whiptail lizard",42:"agama",43:"frilled lizard, Chlamydosaurus kingi",44:"alligator lizard",45:"Gila monster, Heloderma suspectum",46:"green lizard, Lacerta viridis",47:"African chameleon, Chamaeleo chamaeleon",48:"Komodo dragon, Komodo lizard, dragon lizard, giant lizard, Varanus komodoensis",49:"African crocodile, Nile crocodile, Crocodylus niloticus",50:"American alligator, Alligator mississipiensis",51:"triceratops",52:"thunder snake, worm snake, Carphophis amoenus",53:"ringneck snake, ring-necked snake, ring snake",54:"hognose snake, puff adder, sand viper",55:"green snake, grass snake",56:"king snake, kingsnake",57:"garter snake, grass snake",58:"water snake",59:"vine snake",60:"night snake, Hypsiglena torquata",61:"boa constrictor, Constrictor constrictor",62:"rock python, rock snake, Python sebae",63:"Indian cobra, Naja naja",64:"green mamba",65:"sea snake",66:"horned viper, cerastes, sand viper, horned asp, Cerastes cornutus",67:"diamondback, diamondback rattlesnake, Crotalus adamanteus",68:"sidewinder, horned rattlesnake, Crotalus cerastes",69:"trilobite",70:"harvestman, daddy longlegs, Phalangium opilio",71:"scorpion",72:"black and gold garden spider, Argiope aurantia",73:"barn spider, Araneus cavaticus",74:"garden spider, Aranea diademata",75:"black widow, Latrodectus mactans",76:"tarantula",77:"wolf spider, hunting spider",78:"tick",79:"centipede",80:"black grouse",81:"ptarmigan",82:"ruffed grouse, partridge, Bonasa umbellus",83:"prairie chicken, prairie grouse, prairie fowl",84:"peacock",85:"quail",86:"partridge",87:"African grey, African gray, Psittacus erithacus",88:"macaw",89:"sulphur-crested cockatoo, Kakatoe galerita, Cacatua galerita",90:"lorikeet",91:"coucal",92:"bee eater",93:"hornbill",94:"hummingbird",95:"jacamar",96:"toucan",97:"drake",98:"red-breasted merganser, Mergus serrator",99:"goose",100:"black swan, Cygnus atratus",101:"tusker",102:"echidna, spiny anteater, anteater",103:"platypus, duckbill, duckbilled platypus, duck-billed platypus, Ornithorhynchus anatinus",104:"wallaby, brush kangaroo",105:"koala, koala bear, kangaroo bear, native bear, Phascolarctos cinereus",106:"wombat",107:"jelly fish",108:"sea anemone, anemone",109:"brain coral",110:"flatworm, platyhelminth",111:"nematode, nematode worm, roundworm",112:"conch",113:"snail",114:"slug",115:"sea slug, nudibranch",116:"chiton, coat-of-mail shell, sea cradle, polyplacophore",117:"chambered nautilus, pearly nautilus, nautilus",118:"Dungeness crab, Cancer magister",119:"rock crab, Cancer irroratus",120:"fiddler crab",121:"king crab, Alaska crab, Alaskan king crab, Alaska king crab, Paralithodes camtschatica",122:"American lobster, Northern lobster, Maine lobster, Homarus americanus",123:"spiny lobster, langouste, rock lobster, crawfish, crayfish, sea crawfish",124:"crayfish, crawfish, crawdad, crawdaddy",125:"hermit crab",126:"isopod",127:"white stork, Ciconia ciconia",128:"black stork, Ciconia nigra",129:"spoonbill",130:"flamingo",131:"little blue heron, Egretta caerulea",132:"American egret, great white heron, Egretta albus",133:"bittern",134:"crane",135:"limpkin, Aramus pictus",136:"European gallinule, Porphyrio porphyrio",137:"American coot, marsh hen, mud hen, water hen, Fulica americana",138:"bustard",139:"ruddy turnstone, Arenaria interpres",140:"red-backed sandpiper, dunlin, Erolia alpina",141:"redshank, Tringa totanus",142:"dowitcher",143:"oystercatcher, oyster catcher",144:"pelican",145:"king penguin, Aptenodytes patagonica",146:"albatross, mollymawk",147:"grey whale, gray whale, devilfish, Eschrichtius gibbosus, Eschrichtius robustus",148:"killer whale, killer, orca, grampus, sea wolf, Orcinus orca",149:"dugong, Dugong dugon",150:"sea lion",151:"Chihuahua",152:"Japanese spaniel",153:"Maltese dog, Maltese terrier, Maltese",154:"Pekinese, Pekingese, Peke",155:"Shih-Tzu",156:"Blenheim spaniel",157:"papillon",158:"toy terrier",159:"Rhodesian ridgeback",160:"Afghan hound, Afghan",161:"basset, basset hound",162:"beagle",163:"bloodhound, sleuthhound",164:"bluetick",165:"black-and-tan coonhound",166:"Walker hound, Walker foxhound",167:"English foxhound",168:"redbone",169:"borzoi, Russian wolfhound",170:"Irish wolfhound",171:"Italian greyhound",172:"whippet",173:"Ibizan hound, Ibizan Podenco",174:"Norwegian elkhound, elkhound",175:"otterhound, otter hound",176:"Saluki, gazelle hound",177:"Scottish deerhound, deerhound",178:"Weimaraner",179:"Staffordshire bullterrier, Staffordshire bull terrier",180:"American Staffordshire terrier, Staffordshire terrier, American pit bull terrier, pit bull terrier",181:"Bedlington terrier",182:"Border terrier",183:"Kerry blue terrier",184:"Irish terrier",185:"Norfolk terrier",186:"Norwich terrier",187:"Yorkshire terrier",188:"wire-haired fox terrier",189:"Lakeland terrier",190:"Sealyham terrier, Sealyham",191:"Airedale, Airedale terrier",192:"cairn, cairn terrier",193:"Australian terrier",194:"Dandie Dinmont, Dandie Dinmont terrier",195:"Boston bull, Boston terrier",196:"miniature schnauzer",197:"giant schnauzer",198:"standard schnauzer",199:"Scotch terrier, Scottish terrier, Scottie",200:"Tibetan terrier, chrysanthemum dog",201:"silky terrier, Sydney silky",202:"soft-coated wheaten terrier",203:"West Highland white terrier",204:"Lhasa, Lhasa apso",205:"flat-coated retriever",206:"curly-coated retriever",207:"golden retriever",208:"Labrador retriever",209:"Chesapeake Bay retriever",210:"German short-haired pointer",211:"vizsla, Hungarian pointer",212:"English setter",213:"Irish setter, red setter",214:"Gordon setter",215:"Brittany spaniel",216:"clumber, clumber spaniel",217:"English springer, English springer spaniel",218:"Welsh springer spaniel",219:"cocker spaniel, English cocker spaniel, cocker",220:"Sussex spaniel",221:"Irish water spaniel",222:"kuvasz",223:"schipperke",224:"groenendael",225:"malinois",226:"briard",227:"kelpie",228:"komondor",229:"Old English sheepdog, bobtail",230:"Shetland sheepdog, Shetland sheep dog, Shetland",231:"collie",232:"Border collie",233:"Bouvier des Flandres, Bouviers des Flandres",234:"Rottweiler",235:"German shepherd, German shepherd dog, German police dog, alsatian",236:"Doberman, Doberman pinscher",237:"miniature pinscher",238:"Greater Swiss Mountain dog",239:"Bernese mountain dog",240:"Appenzeller",241:"EntleBucher",242:"boxer",243:"bull mastiff",244:"Tibetan mastiff",245:"French bulldog",246:"Great Dane",247:"Saint Bernard, St Bernard",248:"Eskimo dog, husky",249:"malamute, malemute, Alaskan malamute",250:"Siberian husky",251:"dalmatian, coach dog, carriage dog",252:"affenpinscher, monkey pinscher, monkey dog",253:"basenji",254:"pug, pug-dog",255:"Leonberg",256:"Newfoundland, Newfoundland dog",257:"Great Pyrenees",258:"Samoyed, Samoyede",259:"Pomeranian",260:"chow, chow chow",261:"keeshond",262:"Brabancon griffon",263:"Pembroke, Pembroke Welsh corgi",264:"Cardigan, Cardigan Welsh corgi",265:"toy poodle",266:"miniature poodle",267:"standard poodle",268:"Mexican hairless",269:"timber wolf, grey wolf, gray wolf, Canis lupus",270:"white wolf, Arctic wolf, Canis lupus tundrarum",271:"red wolf, maned wolf, Canis rufus, Canis niger",272:"coyote, prairie wolf, brush wolf, Canis latrans",273:"dingo, warrigal, warragal, Canis dingo",274:"dhole, Cuon alpinus",275:"African hunting dog, hyena dog, Cape hunting dog, Lycaon pictus",276:"hyena, hyaena",277:"red fox, Vulpes vulpes",278:"kit fox, Vulpes macrotis",279:"Arctic fox, white fox, Alopex lagopus",280:"grey fox, gray fox, Urocyon cinereoargenteus",281:"tabby, tabby cat",282:"tiger cat",283:"Persian cat",284:"Siamese cat, Siamese",285:"Egyptian cat",286:"cougar, puma, catamount, mountain lion, painter, panther, Felis concolor",287:"lynx, catamount",288:"leopard, Panthera pardus",289:"snow leopard, ounce, Panthera uncia",290:"jaguar, panther, Panthera onca, Felis onca",291:"lion, king of beasts, Panthera leo",292:"tiger, Panthera tigris",293:"cheetah, chetah, Acinonyx jubatus",294:"brown bear, bruin, Ursus arctos",295:"American black bear, black bear, Ursus americanus, Euarctos americanus",296:"ice bear, polar bear, Ursus Maritimus, Thalarctos maritimus",297:"sloth bear, Melursus ursinus, Ursus ursinus",298:"mongoose",299:"meerkat, mierkat",300:"tiger beetle",301:"ladybug, ladybeetle, lady beetle, ladybird, ladybird beetle",302:"ground beetle, carabid beetle",303:"long-horned beetle, longicorn, longicorn beetle",304:"leaf beetle, chrysomelid",305:"dung beetle",306:"rhinoceros beetle",307:"weevil",308:"fly",309:"bee",310:"ant, emmet, pismire",311:"grasshopper, hopper",312:"cricket",313:"walking stick, walkingstick, stick insect",314:"cockroach, roach",315:"mantis, mantid",316:"cicada, cicala",317:"leafhopper",318:"lacewing, lacewing fly",319:"dragonfly, darning needle, devil's darning needle, sewing needle, snake feeder, snake doctor, mosquito hawk, skeeter hawk",320:"damselfly",321:"admiral",322:"ringlet, ringlet butterfly",323:"monarch, monarch butterfly, milkweed butterfly, Danaus plexippus",324:"cabbage butterfly",325:"sulphur butterfly, sulfur butterfly",326:"lycaenid, lycaenid butterfly",327:"starfish, sea star",328:"sea urchin",329:"sea cucumber, holothurian",330:"wood rabbit, cottontail, cottontail rabbit",331:"hare",332:"Angora, Angora rabbit",333:"hamster",334:"porcupine, hedgehog",335:"fox squirrel, eastern fox squirrel, Sciurus niger",336:"marmot",337:"beaver",338:"guinea pig, Cavia cobaya",339:"sorrel",340:"zebra",341:"hog, pig, grunter, squealer, Sus scrofa",342:"wild boar, boar, Sus scrofa",343:"warthog",344:"hippopotamus, hippo, river horse, Hippopotamus amphibius",345:"ox",346:"water buffalo, water ox, Asiatic buffalo, Bubalus bubalis",347:"bison",348:"ram, tup",349:"bighorn, bighorn sheep, cimarron, Rocky Mountain bighorn, Rocky Mountain sheep, Ovis canadensis",350:"ibex, Capra ibex",351:"hartebeest",352:"impala, Aepyceros melampus",353:"gazelle",354:"Arabian camel, dromedary, Camelus dromedarius",355:"llama",356:"weasel",357:"mink",358:"polecat, fitch, foulmart, foumart, Mustela putorius",359:"black-footed ferret, ferret, Mustela nigripes",360:"otter",361:"skunk, polecat, wood pussy",362:"badger",363:"armadillo",364:"three-toed sloth, ai, Bradypus tridactylus",365:"orangutan, orang, orangutang, Pongo pygmaeus",366:"gorilla, Gorilla gorilla",367:"chimpanzee, chimp, Pan troglodytes",368:"gibbon, Hylobates lar",369:"siamang, Hylobates syndactylus, Symphalangus syndactylus",370:"guenon, guenon monkey",371:"patas, hussar monkey, Erythrocebus patas",372:"baboon",373:"macaque",374:"langur",375:"colobus, colobus monkey",376:"proboscis monkey, Nasalis larvatus",377:"marmoset",378:"capuchin, ringtail, Cebus capucinus",379:"howler monkey, howler",380:"titi, titi monkey",381:"spider monkey, Ateles geoffroyi",382:"squirrel monkey, Saimiri sciureus",383:"Madagascar cat, ring-tailed lemur, Lemur catta",384:"indri, indris, Indri indri, Indri brevicaudatus",385:"Indian elephant, Elephas maximus",386:"African elephant, Loxodonta africana",387:"lesser panda, red panda, panda, bear cat, cat bear, Ailurus fulgens",388:"giant panda, panda, panda bear, coon bear, Ailuropoda melanoleuca",389:"barracouta, snoek",390:"eel",391:"coho, cohoe, coho salmon, blue jack, silver salmon, Oncorhynchus kisutch",392:"rock beauty, Holocanthus tricolor",393:"anemone fish",394:"sturgeon",395:"gar, garfish, garpike, billfish, Lepisosteus osseus",396:"lionfish",397:"puffer, pufferfish, blowfish, globefish",398:"abacus",399:"abaya",400:"academic gown, academic robe, judge's robe",401:"accordion, piano accordion, squeeze box",402:"acoustic guitar",403:"aircraft carrier, carrier, flattop, attack aircraft carrier",404:"airliner",405:"airship, dirigible",406:"altar",407:"ambulance",408:"amphibian, amphibious vehicle",409:"analog clock",410:"apiary, bee house",411:"apron",412:"ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin",413:"assault rifle, assault gun",414:"backpack, back pack, knapsack, packsack, rucksack, haversack",415:"bakery, bakeshop, bakehouse",416:"balance beam, beam",417:"balloon",418:"ballpoint, ballpoint pen, ballpen, Biro",419:"Band Aid",420:"banjo",421:"bannister, banister, balustrade, balusters, handrail",422:"barbell",423:"barber chair",424:"barbershop",425:"barn",426:"barometer",427:"barrel, cask",428:"barrow, garden cart, lawn cart, wheelbarrow",429:"baseball",430:"basketball",431:"bassinet",432:"bassoon",433:"bathing cap, swimming cap",434:"bath towel",435:"bathtub, bathing tub, bath, tub",436:"beach wagon, station wagon, wagon, estate car, beach waggon, station waggon, waggon",437:"beacon, lighthouse, beacon light, pharos",438:"beaker",439:"bearskin, busby, shako",440:"beer bottle",441:"beer glass",442:"bell cote, bell cot",443:"bib",444:"bicycle-built-for-two, tandem bicycle, tandem",445:"bikini, two-piece",446:"binder, ring-binder",447:"binoculars, field glasses, opera glasses",448:"birdhouse",449:"boathouse",450:"bobsled, bobsleigh, bob",451:"bolo tie, bolo, bola tie, bola",452:"bonnet, poke bonnet",453:"bookcase",454:"bookshop, bookstore, bookstall",455:"bottlecap",456:"bow",457:"bow tie, bow-tie, bowtie",458:"brass, memorial tablet, plaque",459:"brassiere, bra, bandeau",460:"breakwater, groin, groyne, mole, bulwark, seawall, jetty",461:"breastplate, aegis, egis",462:"broom",463:"bucket, pail",464:"buckle",465:"bulletproof vest",466:"bullet train, bullet",467:"butcher shop, meat market",468:"cab, hack, taxi, taxicab",469:"caldron, cauldron",470:"candle, taper, wax light",471:"cannon",472:"canoe",473:"can opener, tin opener",474:"cardigan",475:"car mirror",476:"carousel, carrousel, merry-go-round, roundabout, whirligig",477:"carpenter's kit, tool kit",478:"carton",479:"car wheel",480:"cash machine, cash dispenser, automated teller machine, automatic teller machine, automated teller, automatic teller, ATM",481:"cassette",482:"cassette player",483:"castle",484:"catamaran",485:"CD player",486:"cello, violoncello",487:"cellular telephone, cellular phone, cellphone, cell, mobile phone",488:"chain",489:"chainlink fence",490:"chain mail, ring mail, mail, chain armor, chain armour, ring armor, ring armour",491:"chain saw, chainsaw",492:"chest",493:"chiffonier, commode",494:"chime, bell, gong",495:"china cabinet, china closet",496:"Christmas stocking",497:"church, church building",498:"cinema, movie theater, movie theatre, movie house, picture palace",499:"cleaver, meat cleaver, chopper",500:"cliff dwelling",501:"cloak",502:"clog, geta, patten, sabot",503:"cocktail shaker",504:"coffee mug",505:"coffeepot",506:"coil, spiral, volute, whorl, helix",507:"combination lock",508:"computer keyboard, keypad",509:"confectionery, confectionary, candy store",510:"container ship, containership, container vessel",511:"convertible",512:"corkscrew, bottle screw",513:"cornet, horn, trumpet, trump",514:"cowboy boot",515:"cowboy hat, ten-gallon hat",516:"cradle",517:"crane",518:"crash helmet",519:"crate",520:"crib, cot",521:"Crock Pot",522:"croquet ball",523:"crutch",524:"cuirass",525:"dam, dike, dyke",526:"desk",527:"desktop computer",528:"dial telephone, dial phone",529:"diaper, nappy, napkin",530:"digital clock",531:"digital watch",532:"dining table, board",533:"dishrag, dishcloth",534:"dishwasher, dish washer, dishwashing machine",535:"disk brake, disc brake",536:"dock, dockage, docking facility",537:"dogsled, dog sled, dog sleigh",538:"dome",539:"doormat, welcome mat",540:"drilling platform, offshore rig",541:"drum, membranophone, tympan",542:"drumstick",543:"dumbbell",544:"Dutch oven",545:"electric fan, blower",546:"electric guitar",547:"electric locomotive",548:"entertainment center",549:"envelope",550:"espresso maker",551:"face powder",552:"feather boa, boa",553:"file, file cabinet, filing cabinet",554:"fireboat",555:"fire engine, fire truck",556:"fire screen, fireguard",557:"flagpole, flagstaff",558:"flute, transverse flute",559:"folding chair",560:"football helmet",561:"forklift",562:"fountain",563:"fountain pen",564:"four-poster",565:"freight car",566:"French horn, horn",567:"frying pan, frypan, skillet",568:"fur coat",569:"garbage truck, dustcart",570:"gasmask, respirator, gas helmet",571:"gas pump, gasoline pump, petrol pump, island dispenser",572:"goblet",573:"go-kart",574:"golf ball",575:"golfcart, golf cart",576:"gondola",577:"gong, tam-tam",578:"gown",579:"grand piano, grand",580:"greenhouse, nursery, glasshouse",581:"grille, radiator grille",582:"grocery store, grocery, food market, market",583:"guillotine",584:"hair slide",585:"hair spray",586:"half track",587:"hammer",588:"hamper",589:"hand blower, blow dryer, blow drier, hair dryer, hair drier",590:"hand-held computer, hand-held microcomputer",591:"handkerchief, hankie, hanky, hankey",592:"hard disc, hard disk, fixed disk",593:"harmonica, mouth organ, harp, mouth harp",594:"harp",595:"harvester, reaper",596:"hatchet",597:"holster",598:"home theater, home theatre",599:"honeycomb",600:"hook, claw",601:"hoopskirt, crinoline",602:"horizontal bar, high bar",603:"horse cart, horse-cart",604:"hourglass",605:"iPod",606:"iron, smoothing iron",607:"jack-o'-lantern",608:"jean, blue jean, denim",609:"jeep, landrover",610:"jersey, T-shirt, tee shirt",611:"jigsaw puzzle",612:"jinrikisha, ricksha, rickshaw",613:"joystick",614:"kimono",615:"knee pad",616:"knot",617:"lab coat, laboratory coat",618:"ladle",619:"lampshade, lamp shade",620:"laptop, laptop computer",621:"lawn mower, mower",622:"lens cap, lens cover",623:"letter opener, paper knife, paperknife",624:"library",625:"lifeboat",626:"lighter, light, igniter, ignitor",627:"limousine, limo",628:"liner, ocean liner",629:"lipstick, lip rouge",630:"Loafer",631:"lotion",632:"loudspeaker, speaker, speaker unit, loudspeaker system, speaker system",633:"loupe, jeweler's loupe",634:"lumbermill, sawmill",635:"magnetic compass",636:"mailbag, postbag",637:"mailbox, letter box",638:"maillot",639:"maillot, tank suit",640:"manhole cover",641:"maraca",642:"marimba, xylophone",643:"mask",644:"matchstick",645:"maypole",646:"maze, labyrinth",647:"measuring cup",648:"medicine chest, medicine cabinet",649:"megalith, megalithic structure",650:"microphone, mike",651:"microwave, microwave oven",652:"military uniform",653:"milk can",654:"minibus",655:"miniskirt, mini",656:"minivan",657:"missile",658:"mitten",659:"mixing bowl",660:"mobile home, manufactured home",661:"Model T",662:"modem",663:"monastery",664:"monitor",665:"moped",666:"mortar",667:"mortarboard",668:"mosque",669:"mosquito net",670:"motor scooter, scooter",671:"mountain bike, all-terrain bike, off-roader",672:"mountain tent",673:"mouse, computer mouse",674:"mousetrap",675:"moving van",676:"muzzle",677:"nail",678:"neck brace",679:"necklace",680:"nipple",681:"notebook, notebook computer",682:"obelisk",683:"oboe, hautboy, hautbois",684:"ocarina, sweet potato",685:"odometer, hodometer, mileometer, milometer",686:"oil filter",687:"organ, pipe organ",688:"oscilloscope, scope, cathode-ray oscilloscope, CRO",689:"overskirt",690:"oxcart",691:"oxygen mask",692:"packet",693:"paddle, boat paddle",694:"paddlewheel, paddle wheel",695:"padlock",696:"paintbrush",697:"pajama, pyjama, pj's, jammies",698:"palace",699:"panpipe, pandean pipe, syrinx",700:"paper towel",701:"parachute, chute",702:"parallel bars, bars",703:"park bench",704:"parking meter",705:"passenger car, coach, carriage",706:"patio, terrace",707:"pay-phone, pay-station",708:"pedestal, plinth, footstall",709:"pencil box, pencil case",710:"pencil sharpener",711:"perfume, essence",712:"Petri dish",713:"photocopier",714:"pick, plectrum, plectron",715:"pickelhaube",716:"picket fence, paling",717:"pickup, pickup truck",718:"pier",719:"piggy bank, penny bank",720:"pill bottle",721:"pillow",722:"ping-pong ball",723:"pinwheel",724:"pirate, pirate ship",725:"pitcher, ewer",726:"plane, carpenter's plane, woodworking plane",727:"planetarium",728:"plastic bag",729:"plate rack",730:"plow, plough",731:"plunger, plumber's helper",732:"Polaroid camera, Polaroid Land camera",733:"pole",734:"police van, police wagon, paddy wagon, patrol wagon, wagon, black Maria",735:"poncho",736:"pool table, billiard table, snooker table",737:"pop bottle, soda bottle",738:"pot, flowerpot",739:"potter's wheel",740:"power drill",741:"prayer rug, prayer mat",742:"printer",743:"prison, prison house",744:"projectile, missile",745:"projector",746:"puck, hockey puck",747:"punching bag, punch bag, punching ball, punchball",748:"purse",749:"quill, quill pen",750:"quilt, comforter, comfort, puff",751:"racer, race car, racing car",752:"racket, racquet",753:"radiator",754:"radio, wireless",755:"radio telescope, radio reflector",756:"rain barrel",757:"recreational vehicle, RV, R.V.",758:"reel",759:"reflex camera",760:"refrigerator, icebox",761:"remote control, remote",762:"restaurant, eating house, eating place, eatery",763:"revolver, six-gun, six-shooter",764:"rifle",765:"rocking chair, rocker",766:"rotisserie",767:"rubber eraser, rubber, pencil eraser",768:"rugby ball",769:"rule, ruler",770:"running shoe",771:"safe",772:"safety pin",773:"saltshaker, salt shaker",774:"sandal",775:"sarong",776:"sax, saxophone",777:"scabbard",778:"scale, weighing machine",779:"school bus",780:"schooner",781:"scoreboard",782:"screen, CRT screen",783:"screw",784:"screwdriver",785:"seat belt, seatbelt",786:"sewing machine",787:"shield, buckler",788:"shoe shop, shoe-shop, shoe store",789:"shoji",790:"shopping basket",791:"shopping cart",792:"shovel",793:"shower cap",794:"shower curtain",795:"ski",796:"ski mask",797:"sleeping bag",798:"slide rule, slipstick",799:"sliding door",800:"slot, one-armed bandit",801:"snorkel",802:"snowmobile",803:"snowplow, snowplough",804:"soap dispenser",805:"soccer ball",806:"sock",807:"solar dish, solar collector, solar furnace",808:"sombrero",809:"soup bowl",810:"space bar",811:"space heater",812:"space shuttle",813:"spatula",814:"speedboat",815:"spider web, spider's web",816:"spindle",817:"sports car, sport car",818:"spotlight, spot",819:"stage",820:"steam locomotive",821:"steel arch bridge",822:"steel drum",823:"stethoscope",824:"stole",825:"stone wall",826:"stopwatch, stop watch",827:"stove",828:"strainer",829:"streetcar, tram, tramcar, trolley, trolley car",830:"stretcher",831:"studio couch, day bed",832:"stupa, tope",833:"submarine, pigboat, sub, U-boat",834:"suit, suit of clothes",835:"sundial",836:"sunglass",837:"sunglasses, dark glasses, shades",838:"sunscreen, sunblock, sun blocker",839:"suspension bridge",840:"swab, swob, mop",841:"sweatshirt",842:"swimming trunks, bathing trunks",843:"swing",844:"switch, electric switch, electrical switch",845:"syringe",846:"table lamp",847:"tank, army tank, armored combat vehicle, armoured combat vehicle",848:"tape player",849:"teapot",850:"teddy, teddy bear",851:"television, television system",852:"tennis ball",853:"thatch, thatched roof",854:"theater curtain, theatre curtain",855:"thimble",856:"thresher, thrasher, threshing machine",857:"throne",858:"tile roof",859:"toaster",860:"tobacco shop, tobacconist shop, tobacconist",861:"toilet seat",862:"torch",863:"totem pole",864:"tow truck, tow car, wrecker",865:"toyshop",866:"tractor",867:"trailer truck, tractor trailer, trucking rig, rig, articulated lorry, semi",868:"tray",869:"trench coat",870:"tricycle, trike, velocipede",871:"trimaran",872:"tripod",873:"triumphal arch",874:"trolleybus, trolley coach, trackless trolley",875:"trombone",876:"tub, vat",877:"turnstile",878:"typewriter keyboard",879:"umbrella",880:"unicycle, monocycle",881:"upright, upright piano",882:"vacuum, vacuum cleaner",883:"vase",884:"vault",885:"velvet",886:"vending machine",887:"vestment",888:"viaduct",889:"violin, fiddle",890:"volleyball",891:"waffle iron",892:"wall clock",893:"wallet, billfold, notecase, pocketbook",894:"wardrobe, closet, press",895:"warplane, military plane",896:"washbasin, handbasin, washbowl, lavabo, wash-hand basin",897:"washer, automatic washer, washing machine",898:"water bottle",899:"water jug",900:"water tower",901:"whiskey jug",902:"whistle",903:"wig",904:"window screen",905:"window shade",906:"Windsor tie",907:"wine bottle",908:"wing",909:"wok",910:"wooden spoon",911:"wool, woolen, woollen",912:"worm fence, snake fence, snake-rail fence, Virginia fence",913:"wreck",914:"yawl",915:"yurt",916:"web site, website, internet site, site",917:"comic book",918:"crossword puzzle, crossword",919:"street sign",920:"traffic light, traffic signal, stoplight",921:"book jacket, dust cover, dust jacket, dust wrapper",922:"menu",923:"plate",924:"guacamole",925:"consomme",926:"hot pot, hotpot",927:"trifle",928:"ice cream, icecream",929:"ice lolly, lolly, lollipop, popsicle",930:"French loaf",931:"bagel, beigel",932:"pretzel",933:"cheeseburger",934:"hotdog, hot dog, red hot",935:"mashed potato",936:"head cabbage",937:"broccoli",938:"cauliflower",939:"zucchini, courgette",940:"spaghetti squash",941:"acorn squash",942:"butternut squash",943:"cucumber, cuke",944:"artichoke, globe artichoke",945:"bell pepper",946:"cardoon",947:"mushroom",948:"Granny Smith",949:"strawberry",950:"orange",951:"lemon",952:"fig",953:"pineapple, ananas",954:"banana",955:"jackfruit, jak, jack",956:"custard apple",957:"pomegranate",958:"hay",959:"carbonara",960:"chocolate sauce, chocolate syrup",961:"dough",962:"meat loaf, meatloaf",963:"pizza, pizza pie",964:"potpie",965:"burrito",966:"red wine",967:"espresso",968:"cup",969:"eggnog",970:"alp",971:"bubble",972:"cliff, drop, drop-off",973:"coral reef",974:"geyser",975:"lakeside, lakeshore",976:"promontory, headland, head, foreland",977:"sandbar, sand bar",978:"seashore, coast, seacoast, sea-coast",979:"valley, vale",980:"volcano",981:"ballplayer, baseball player",982:"groom, bridegroom",983:"scuba diver",984:"rapeseed",985:"daisy",986:"yellow lady's slipper, yellow lady-slipper, Cypripedium calceolus, Cypripedium parviflorum",987:"corn",988:"acorn",989:"hip, rose hip, rosehip",990:"buckeye, horse chestnut, conker",991:"coral fungus",992:"agaric",993:"gyromitra",994:"stinkhorn, carrion fungus",995:"earthstar",996:"hen-of-the-woods, hen of the woods, Polyporus frondosus, Grifola frondosa",997:"bolete",998:"ear, spike, capitulum",999:"toilet tissue, toilet paper, bathroom tissue"},T={"1.00":"module_apply_default/MobilenetV1/Logits/global_pool","2.00":"module_apply_default/MobilenetV2/Logits/AvgPool"},w={"1.00":{.25:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_025_224/classification/1",inputRange:[0,1]},"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_050_224/classification/1",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_075_224/classification/1",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v1_100_224/classification/1",inputRange:[0,1]}},"2.00":{"0.50":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_050_224/classification/2",inputRange:[0,1]},.75:{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_075_224/classification/2",inputRange:[0,1]},"1.00":{url:"https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2",inputRange:[0,1]}}};function k(e){return void 0===e&&(e={version:1,alpha:1}),y(this,void 0,void 0,function(){var t,r,a,s,o,i,l;return b(this,function(u){switch(u.label){case 0:if(null==n)throw Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(t=e.version.toFixed(2),r=e.alpha?e.alpha.toFixed(2):"",a=-1,s=1,null==e.modelUrl){if(!(t in w))throw Error("Invalid version of MobileNet. Valid versions are: "+Object.keys(w));if(!(r in w[t]))throw Error("MobileNet constructed with invalid alpha "+e.alpha+". Valid multipliers for this version are: "+Object.keys(w[t])+".");a=(i=w[t][r].inputRange)[0],s=i[1]}return null!=e.inputRange&&(a=(l=e.inputRange)[0],s=l[1]),[4,(o=new N(t,r,e.modelUrl,a,s)).load()];case 1:return u.sent(),[2,o]}})})}var N=function(){function e(e,t,r,a,n){void 0===a&&(a=-1),void 0===n&&(n=1),this.version=e,this.alpha=t,this.modelUrl=r,this.inputMin=a,this.inputMax=n,this.normalizationConstant=(n-a)/255}return e.prototype.load=function(){return y(this,void 0,void 0,function(){var e,t,a,n,i=this;return b(this,function(l){switch(l.label){case 0:return this.modelUrl?(e=this,[4,(0,r.loadGraphModel)(this.modelUrl)]):[3,2];case 1:return e.model=l.sent(),[3,4];case 2:return t=w[this.version][this.alpha].url,a=this,[4,(0,r.loadGraphModel)(t,{fromTFHub:!0})];case 3:a.model=l.sent(),l.label=4;case 4:return[4,(n=(0,s.tidy)(function(){return i.model.predict((0,o.zeros)([1,224,224,3]))})).data()];case 5:return l.sent(),n.dispose(),[2]}})})},e.prototype.infer=function(e,t){var r=this;return void 0===t&&(t=!1),(0,s.tidy)(function(){e instanceof i.Tensor||(e=l.fromPixels(e));var a=(0,u.add)((0,p.mul)((0,c.cast)(e,"float32"),r.normalizationConstant),r.inputMin),n=a;(224!==e.shape[0]||224!==e.shape[1])&&(n=h.image.resizeBilinear(a,[224,224],!0));var s,o=(0,f.reshape)(n,[-1,224,224,3]);if(t){var d=T[r.version],x=r.model.execute(o,d);s=(0,m.squeeze)(x,[1,2])}else{var y=r.model.predict(o);s=(0,g.slice)(y,[0,1],[-1,1e3])}return s})},e.prototype.classify=function(e,t){return void 0===t&&(t=3),y(this,void 0,void 0,function(){var r,a;return b(this,function(n){switch(n.label){case 0:return[4,function(e,t){return y(this,void 0,void 0,function(){var r,a,n,s,o,i,l;return b(this,function(u){switch(u.label){case 0:return[4,(r=(0,x.softmax)(e)).data()];case 1:for(a=u.sent(),r.dispose(),n=[],l=0;l<a.length;l++)n.push({value:a[l],index:l});for(n.sort(function(e,t){return t.value-e.value}),s=new Float32Array(t),o=new Int32Array(t),l=0;l<t;l++)s[l]=n[l].value,o[l]=n[l].index;for(i=[],l=0;l<o.length;l++)i.push({className:v[o[l]],probability:s[l]});return[2,i]}})})}(r=this.infer(e),t)];case 1:return a=n.sent(),r.dispose(),[2,a]}})})},e}()}),h("8cIQ2",function(e,t){a(e.exports,"loadGraphModel",()=>d("jO0nh").loadGraphModel),d("1GgoK"),d("jO0nh"),d("1nLTi"),d("2cnG1")}),h("1GgoK",function(e,t){d("fM0z2"),(0,d("alePs").env)().registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})}),h("fM0z2",function(e,t){d("13ZOs");var r=d("6OjBO"),a=d("6ZR38");(0,r.registerOptimizers)(),n(e.exports,a)}),h("13ZOs",function(e,t){var r=d("bv3K9");d("3kUb9"),d("5Yqt2"),d("lHprL");var a=d("hPfZs"),n=d("bVaGH"),s=d("gtIz2"),o=d("3NELQ"),i=d("ciqGg");(0,r.getOrMakeEngine)();let l={buffer:a.buffer,cast:n.cast,clone:s.clone,print:o.print};(0,i.setOpHandler)(l)}),h("bv3K9",function(e,t){a(e.exports,"ENGINE",()=>v),a(e.exports,"getOrMakeEngine",()=>b);var r=d("6DWy4"),n=d("alePs"),s=d("bhrSX"),o=d("dcVMt"),i=d("3ytnp"),l=d("ivRg5"),u=d("lKc9s"),p=d("1AtPa"),c=d("ciqGg"),h=d("kyuDB"),f=d("3SJNW"),m=d("a9Xyg");function g(e){return null!=e.kernelName}class x{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}}class y{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new x}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let r=e[t];if(await this.initializeBackend(r).success)return void await this.setBackend(r)}throw Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(!(e in this.registryFactory))return null;else{let{asyncInit:t}=this.initializeBackend(e);if(t)return null}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,r=1){return e in this.registryFactory?(l.warn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:r},!0)}async setBackend(e){if(null==this.registryFactory[e])throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;let{success:t,asyncInit:r}=this.initializeBackend(e);if(!(r?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new(0,u.Profiler)(this.backendInstance),!0}setupRegisteredKernels(){(0,i.getKernelsForBackend)(this.backendName).forEach(e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){(0,i.getKernelsForBackend)(e).forEach(t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(null==t)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let a=t.factory();if(!a||a instanceof r.KernelBackend||"function"!=typeof a.then)return this.registry[e]=a,{success:!0,asyncInit:!1};{let t=++this.pendingBackendInitId,r=a.then(r=>!(t<this.pendingBackendInitId)&&(this.registry[e]=r,this.pendingBackendInit=null,!0)).catch(r=>!(t<this.pendingBackendInitId)&&(this.pendingBackendInit=null,l.warn(`Initialization of backend ${e} failed`),l.warn(r.stack||r.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return l.warn(`Initialization of backend ${e} failed`),l.warn(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let r=e[t],{success:a,asyncInit:n}=this.initializeBackend(r);if(n||a)return{name:r,asyncInit:n}}throw Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let r=this.state.tensorInfo.get(t),a=r.backend,n=this.readSync(t),s=a.refCount(t);a.disposeData(t,!0),r.backend=e,e.move(t,n,r.shape,r.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let r,a=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e}return this.scopedRun(()=>this.startScope(a),()=>this.endScope(r),()=>((r=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(e,t,r){e();try{let e=r();return t(),e}catch(e){throw t(),e}}nextTensorId(){return y.nextTensorId++}nextVariableId(){return y.nextVariableId++}clone(e){let t=v.runKernel(o.Identity,{x:e});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],e=>({x:()=>v.runKernel(o.Cast,{x:e},{dtype:"float32"})}),[],{}),t}runKernel(e,t,r){if(null==this.backendName&&this.backend,null==(0,i.getKernel)(e,this.backendName))throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,r){let a=this.backend.numDataIds(),n=0;r.forEach(e=>{n+="complex64"===e.dtype?3:1});let s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=a-t-n-s;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,r,a,n,s=[],o=this.isTapeOn(),l=this.state.numBytes,u=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;let p=g(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(g(e)){let{kernelName:t,inputs:n,attrs:l}=e;null==this.backendName&&this.backend;let u=(0,i.getKernel)(t,this.backendName);f.assert(null!=u,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),r=()=>{let e=this.backend.numDataIds(),r=Array.isArray(a=u.kernelFunc({inputs:n,attrs:l,backend:this.backend}))?a:[a];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,r);let i=r.map(e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e));if(o){let e=this.getTensorsForGradient(t,n,i);s=this.saveTensorsForBackwardMode(e)}return i}}else{let{forwardFunc:t}=e,n=e=>{o&&(s=e.map(e=>this.keep(this.clone(e))))};r=()=>{let e=this.backend.numDataIds(),r=Array.isArray(a=this.tidy(()=>t(this.backend,n)))?a:[a];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,e,r),r}}let{inputs:c,attrs:d}=e,h=g(e)?null:e.backwardsFunc;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(n=this.profiler.profileKernel(p,c,()=>r()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(n),t=n.outputs):t=r()}),o&&this.addTapeNode(p,c,t,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:p,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-u,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(e=>null!=c[e]?c[e].shape:null),outputShapes:t.map(e=>e.shape),kernelTimeMs:n.timeMs,extraInfo:n.extraInfo}),Array.isArray(a)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,r){let a=(0,i.getGradient)(e);if(null!=a){let e,n=a.inputsToSave||[],s=a.outputsToSave||[];a.saveAllInputs?(f.assert(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),e=Object.keys(t).map(e=>t[e])):e=n.map(e=>t[e]);let o=r.filter((e,t)=>s[t]);return e.concat(o)}return[]}makeTensor(e,t,r,a){if(null==e)throw Error("Values passed to engine.makeTensor() are null");r=r||"float32",a=a||this.backend;let n=e;"string"===r&&f.isString(e[0])&&(n=e.map(e=>m.encodeString(e)));let s=a.write(n,t,r),o=new(0,c.Tensor)(t,r,s,this.nextTensorId());if(this.trackTensor(o,a),"string"===r){let e=this.state.tensorInfo.get(s),t=(0,f.bytesFromStringArray)(n);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,r,a){let n={dataId:e,shape:t,dtype:r=r||"float32"};return this.makeTensorFromTensorInfo(n,a)}makeTensorFromTensorInfo(e,t){let{dataId:r,shape:a,dtype:n}=e,s=new(0,c.Tensor)(a,n,r,this.nextTensorId());return this.trackTensor(s,t),s}makeVariable(e,t=!0,r,a){r=r||this.nextVariableId().toString(),null!=a&&a!==e.dtype&&(e=e.cast(a));let n=new(0,c.Variable)(e,t,r,this.nextTensorId());if(null!=this.state.registeredVariables[n.name])throw Error(`Variable with name ${n.name} was already registered`);return this.state.registeredVariables[n.name]=n,this.incRef(n,this.backend),n}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*f.bytesPerElement(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof c.Variable||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){let t=e.size*f.bytesPerElement(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,r=this.state.numTensors;for(let a of(this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r,this.state.activeProfile.kernels))a.kernelTimeMs=await a.kernelTimeMs,a.extraInfo=await a.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,r,a,n,s){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:n},l=(0,i.getGradient)(e);null!=l&&(a=l.gradFunc),null!=a&&(o.gradient=e=>(e=e.map((e,t)=>{if(null==e){let e=r[t],a=f.makeZerosTypedArray(e.size,e.dtype);return this.makeTensor(a,e.shape,e.dtype)}return e}),a(e.length>1?e:e[0],n,s))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=(0,h.getTensorsInContainer)(e),r=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];t.kept||r.has(t.id)||t.dispose()}let a=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{e.kept||e.scopeId!==a.id||this.track(e)})}gradients(e,t,r,a=!1){if(f.assert(t.length>0,()=>"gradients() received an empty list of xs."),null!=r&&"float32"!==r.dtype)throw Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);let n=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));f.assert(n instanceof c.Tensor,()=>"The result y returned by f() must be a tensor.");let s=(0,p.getFilteredNodesXToY)(this.state.activeTape,t,n);if(!a&&0===s.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let e={};e[n.id]=null==r?function(e){let t=(0,f.makeOnesTypedArray)((0,f.sizeFromShape)(e),"float32");return v.makeTensor(t,e,"float32")}(n.shape):r,(0,p.backpropagateGradients)(e,s,e=>this.tidy(e),T);let a=t.map(t=>e[t.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:n,grads:a}})}customGrad(e){return f.assert(f.isFunction(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{let r;f.assert(t.every(e=>e instanceof c.Tensor),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let a={};return t.forEach((e,t)=>{a[t]=e}),this.runKernelFunc({forwardFunc:(a,n)=>(r=e(...t,n),f.assert(r.value instanceof c.Tensor,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),f.assert(f.isFunction(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),backwardsFunc:(e,a)=>{let n=r.gradFunc(e,a),s=Array.isArray(n)?n:[n];f.assert(s.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),f.assert(s.every(e=>e instanceof c.Tensor),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return s.forEach((e,t)=>{o[t]=()=>e}),o},inputs:a})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=(0,m.now)(),r=await this.backend.time(e);return r.wallMs=(0,m.now)()-t,r}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){for(let e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new x,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function b(){let e=(0,s.getGlobalNamespace)();if(null==e._tfengine){let t=new(0,n.Environment)(e);e._tfengine=new y(t)}return(0,n.setEnvironmentGlobal)(e._tfengine.ENV),(0,c.setTensorTracker)(()=>e._tfengine),e._tfengine}y.nextTensorId=0,y.nextVariableId=0;let v=b();function T(e,t){return v.runKernel(o.Add,{a:e,b:t})}}),h("6DWy4",function(e,t){a(e.exports,"DataStorage",()=>r),a(e.exports,"KernelBackend",()=>n);class r{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class n{refCount(e){return s("refCount")}incRef(e){return s("incRef")}timerAvailable(){return!0}time(e){return s("time")}read(e){return s("read")}readSync(e){return s("readSync")}readToGPU(e,t){return s("readToGPU")}numDataIds(){return s("numDataIds")}disposeData(e,t){return s("disposeData")}write(e,t,r){return s("write")}move(e,t,r,a,n){return s("move")}createTensorFromGPUData(e,t,r){return s("createTensorFromGPUData")}memory(){return s("memory")}floatPrecision(){return s("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return s("dispose")}}function s(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}}),h("alePs",function(e,t){a(e.exports,"Environment",()=>s),a(e.exports,"env",()=>i),a(e.exports,"ENV",()=>l),a(e.exports,"setEnvironmentGlobal",()=>u);var r=d("3SJNW");let n="tfjsflags";class s{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=o,this.populateURLFlags()}setPlatform(e,t){null==this.platform||l.getBool("IS_TEST")||l.getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=e,this.platform=t}registerFlag(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},null!=this.urlFlags[e]){let t=this.urlFlags[e];l.getBool("IS_TEST")||l.getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if((0,r.isPromise)(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;let e=this.getQueryParams(this.global.location.search);n in e&&e[n].split(",").forEach(e=>{let[t,r]=e.split(":");this.urlFlags[t]=function(e,t){let r=t.toLowerCase();return"true"===r||"false"===r?"true"===r:`${+r}`===r?+r:t}(0,r)})}}function o(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>{var a,n,s;return a=t,n=r[0],s=r[1],a[decodeURIComponent(n)]=decodeURIComponent(s||""),r.join("=")}),t}function i(){return l}let l=null;function u(e){l=e}}),h("3SJNW",function(e,t){function r(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,i(e,--t,r)}function n(e,t){if(e.length!==t.length)throw Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,a=0;for(;r>0;)a=Math.random()*r|0,i(e,--r,a),i(t,r,a)}function s(e,t,r){return Math.max(e,Math.min(t,r))}function o(e){return e%2==0?e:e+1}function i(e,t,r){let a=e[t];e[t]=e[r],e[r]=a}function l(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function u(e,t){let r=Math.random();return t*r+(1-r)*e}function p(e,t){let r=0;for(let a=0;a<e.length;a++){let n=Number(e[a])-Number(t[a]);r+=n*n}return r}function c(e,t){if(!e)throw Error("string"==typeof t?t:t())}function d(e,t,r=""){c(x(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function h(e){c(null!=e,()=>"The input to the tensor constructor must be a non-null value.")}function f(e){if(0===e.length)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function m(e){return 0===e.length}function g(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(null!==e[r]&&null!==t[r]&&e[r]!==t[r])return!1;return!0}function x(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function y(e){return e%1==0}function b(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;{if(e===-1/0)return -1;let t=Math.exp(2*e);return(t-1)/(t+1)}}function v(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function T(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return r(t),t}function w(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function k(e,t=e=>0,r,a){return new Promise((n,s)=>{let o=0,i=()=>{if(e())return void n();let l=t(++o);if(null!=r&&o>=r)return void s();null!=a?a(i,l):setTimeout(i,l)};i()})}function N(e,t){let r=1,a=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)r*=e[t];else if(-1===e[t]){if(-1!==a)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${a} and dim ${t}`);a=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===a){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===r)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let n=e.slice();return n[a]=t/r,n}function S(e,t){let r=t.length;return c((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-r&&e<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),c(e.every(e=>y(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?r+e:e)}function E(e,t){let r=[],a=[],n=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||n?null:S(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(null!=s){if(s[o]===t&&1!==e[t])throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==s[o]||s[o]>t)&&1===e[t]&&(r.push(e[t]),a.push(t)),s[o]<=t&&o++}1!==e[t]&&(r.push(e[t]),a.push(t))}return{newShape:r,keptDims:a}}function I(e,t){return C(e,t)}function C(e,t){let r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else if("bool"===e)r=new Uint8Array(t);else if("string"===e)r=Array(t);else throw Error(`Unknown data type ${e}`);return r}function $(e,t){for(let r=0;r<e.length;r++){let a=e[r];if(isNaN(a)||!isFinite(a))throw Error(`A tensor of type ${t} being uploaded contains ${a}.`)}}function A(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function R(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)}function M(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error(`Unknown dtype ${e}`)}function O(e){if(null==e)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function V(e){return"string"==typeof e||e instanceof String}function P(e){return"boolean"==typeof e}function D(e){return"number"==typeof e}function _(e){return!!(e&&e.constructor&&e.call&&e.apply)}function F(e,t){for(let r=t;r<e;++r)if(e%r==0)return r;return e}function z(e){let t=e.length;if(t<2)return[];let r=Array(t-1);r[t-2]=e[t-1];for(let a=t-3;a>=0;--a)r[a]=r[a+1]*e[a+1];return r}function L(e,t,r=!1){if(0===e.length)return t[0];let a=e.reduce((e,t)=>e*t)*(r?2:1);if(0===a)return[];if(a!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return function e(t,r,a,n=!1){let s=[];if(1===r.length){let e=r[0]*(n?2:1);for(let r=0;r<e;r++)s[r]=a[t+r]}else{let o=r[0],i=r.slice(1),l=i.reduce((e,t)=>e*t)*(n?2:1);for(let r=0;r<o;r++)s[r]=e(t+r*l,i,a,n)}return s}(0,e,t,r)}function G(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function B(e,t){let r=W(e,t);for(let e=0;e<r.length;e++)r[e]=1;return r}function W(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function U(e,t){let r=e.reduce((e,t)=>e*t,1);if(null==t||"float32"===t)return L(e,new Float32Array(r));if("int32"===t)return L(e,new Int32Array(r));if("bool"===t)return L(e,new Uint8Array(r));throw Error(`Unknown data type ${t}`)}function j(e){e.forEach(t=>{c(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function K(e,t,r){if(0===t)return 0;if(1===t)return e[0];let a=e[e.length-1];for(let t=0;t<e.length-1;++t)a+=r[t]*e[t];return a}function q(e,t,r){if(0===t)return[];if(1===t)return[e];let a=Array(t);for(let t=0;t<a.length-1;++t)a[t]=Math.floor(e/r[t]),e-=a[t]*r[t];return a[a.length-1]=e,a}function H(e){return e&&e.then&&"function"==typeof e.then}a(e.exports,"shuffle",()=>r),a(e.exports,"swap",()=>i),a(e.exports,"shuffleCombo",()=>n),a(e.exports,"clamp",()=>s),a(e.exports,"nearestLargerEven",()=>o),a(e.exports,"sum",()=>l),a(e.exports,"randUniform",()=>u),a(e.exports,"distSquared",()=>p),a(e.exports,"assert",()=>c),a(e.exports,"assertShapesMatch",()=>d),a(e.exports,"arraysEqual",()=>x),a(e.exports,"assertNonNull",()=>h),a(e.exports,"sizeFromShape",()=>f),a(e.exports,"isScalarShape",()=>m),a(e.exports,"arraysEqualWithNull",()=>g),a(e.exports,"isInt",()=>y),a(e.exports,"tanh",()=>b),a(e.exports,"sizeToSquarishShape",()=>v),a(e.exports,"createShuffledIndices",()=>T),a(e.exports,"rightPad",()=>w),a(e.exports,"repeatedTry",()=>k),a(e.exports,"inferFromImplicitShape",()=>N),a(e.exports,"parseAxisParam",()=>S),a(e.exports,"squeezeShape",()=>E),a(e.exports,"getTypedArrayFromDType",()=>I),a(e.exports,"getArrayFromDType",()=>C),a(e.exports,"checkConversionForErrors",()=>$),a(e.exports,"isValidDtype",()=>A),a(e.exports,"hasEncodingLoss",()=>R),a(e.exports,"bytesPerElement",()=>M),a(e.exports,"bytesFromStringArray",()=>O),a(e.exports,"isString",()=>V),a(e.exports,"isBoolean",()=>P),a(e.exports,"isNumber",()=>D),a(e.exports,"inferDtype",()=>function e(t){if(Array.isArray(t))return e(t[0]);if(t instanceof Float32Array);else if(t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray)return"int32";else if(D(t));else if(V(t))return"string";else if(P(t))return"bool";return"float32"}),a(e.exports,"isFunction",()=>_),a(e.exports,"nearestDivisor",()=>F),a(e.exports,"computeStrides",()=>z),a(e.exports,"toNestedArray",()=>L),a(e.exports,"convertBackendValuesAndArrayBuffer",()=>G),a(e.exports,"makeOnesTypedArray",()=>B),a(e.exports,"makeZerosTypedArray",()=>W),a(e.exports,"makeZerosNestedTypedArray",()=>U),a(e.exports,"assertNonNegativeIntegerDimensions",()=>j),a(e.exports,"locToIndex",()=>K),a(e.exports,"indexToLoc",()=>q),a(e.exports,"isPromise",()=>H)}),h("bhrSX",function(e,t){let r;a(e.exports,"getGlobalNamespace",()=>s),a(e.exports,"getGlobal",()=>o);var n=d("ibaza");function s(){if(null==r){let e;if("undefined"!=typeof window)e=window;else if(void 0!==u)e=u;else if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");r=e}return r}function o(e,t){let r=function(){let e=s();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(r.has(e))return r.get(e);{let a=t();return r.set(e,a),r.get(e)}}}),h("ibaza",function(e,t){var r,a,n,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{a="function"==typeof clearTimeout?clearTimeout:i}catch(e){a=i}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}var u=[],p=!1,c=-1;function d(){p&&n&&(p=!1,n.length?u=n.concat(u):c=-1,u.length&&h())}function h(){if(!p){var e=l(d);p=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new f(e,t)),1!==u.length||p||l(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),h("dcVMt",function(e,t){a(e.exports,"Abs",()=>r),a(e.exports,"Acos",()=>n),a(e.exports,"Acosh",()=>s),a(e.exports,"Add",()=>o),a(e.exports,"AddN",()=>i),a(e.exports,"All",()=>l),a(e.exports,"Any",()=>u),a(e.exports,"ArgMax",()=>p),a(e.exports,"ArgMin",()=>c),a(e.exports,"Asin",()=>d),a(e.exports,"Asinh",()=>h),a(e.exports,"Atan",()=>f),a(e.exports,"Atanh",()=>m),a(e.exports,"Atan2",()=>g),a(e.exports,"AvgPool",()=>x),a(e.exports,"AvgPoolGrad",()=>y),a(e.exports,"AvgPool3D",()=>b),a(e.exports,"AvgPool3DGrad",()=>v),a(e.exports,"BatchMatMul",()=>T),a(e.exports,"BatchToSpaceND",()=>w),a(e.exports,"Bincount",()=>k),a(e.exports,"BitwiseAnd",()=>N),a(e.exports,"BroadcastTo",()=>S),a(e.exports,"BroadcastArgs",()=>E),a(e.exports,"Cast",()=>I),a(e.exports,"Ceil",()=>C),a(e.exports,"ClipByValue",()=>$),a(e.exports,"Complex",()=>A),a(e.exports,"ComplexAbs",()=>R),a(e.exports,"Concat",()=>M),a(e.exports,"Conv2D",()=>O),a(e.exports,"Conv2DBackpropFilter",()=>V),a(e.exports,"Conv2DBackpropInput",()=>P),a(e.exports,"Conv3D",()=>D),a(e.exports,"Conv3DBackpropFilterV2",()=>_),a(e.exports,"Conv3DBackpropInputV2",()=>F),a(e.exports,"Cos",()=>z),a(e.exports,"Cosh",()=>L),a(e.exports,"Cumprod",()=>G),a(e.exports,"Cumsum",()=>B),a(e.exports,"CropAndResize",()=>W),a(e.exports,"DenseBincount",()=>U),a(e.exports,"DepthToSpace",()=>j),a(e.exports,"DepthwiseConv2dNative",()=>K),a(e.exports,"DepthwiseConv2dNativeBackpropFilter",()=>q),a(e.exports,"DepthwiseConv2dNativeBackpropInput",()=>H),a(e.exports,"Diag",()=>X),a(e.exports,"Dilation2D",()=>J),a(e.exports,"Dilation2DBackpropInput",()=>Y),a(e.exports,"Dilation2DBackpropFilter",()=>Z),a(e.exports,"Draw",()=>Q),a(e.exports,"RealDiv",()=>ee),a(e.exports,"Einsum",()=>et),a(e.exports,"Elu",()=>er),a(e.exports,"EluGrad",()=>ea),a(e.exports,"Erf",()=>en),a(e.exports,"Equal",()=>es),a(e.exports,"Exp",()=>eo),a(e.exports,"ExpandDims",()=>ei),a(e.exports,"Expm1",()=>el),a(e.exports,"FFT",()=>eu),a(e.exports,"Fill",()=>ep),a(e.exports,"FlipLeftRight",()=>ec),a(e.exports,"Floor",()=>ed),a(e.exports,"FloorDiv",()=>eh),a(e.exports,"FusedBatchNorm",()=>ef),a(e.exports,"GatherV2",()=>em),a(e.exports,"GatherNd",()=>eg),a(e.exports,"Greater",()=>ex),a(e.exports,"GreaterEqual",()=>ey),a(e.exports,"Identity",()=>eb),a(e.exports,"IFFT",()=>ev),a(e.exports,"Imag",()=>eT),a(e.exports,"IsFinite",()=>ew),a(e.exports,"IsInf",()=>ek),a(e.exports,"IsNan",()=>eN),a(e.exports,"LeakyRelu",()=>eS),a(e.exports,"Less",()=>eE),a(e.exports,"LessEqual",()=>eI),a(e.exports,"LinSpace",()=>eC),a(e.exports,"Log",()=>e$),a(e.exports,"Log1p",()=>eA),a(e.exports,"LogicalAnd",()=>eR),a(e.exports,"LogicalNot",()=>eM),a(e.exports,"LogicalOr",()=>eO),a(e.exports,"LogicalXor",()=>eV),a(e.exports,"LogSoftmax",()=>eP),a(e.exports,"LowerBound",()=>eD),a(e.exports,"LRN",()=>e_),a(e.exports,"LRNGrad",()=>eF),a(e.exports,"MatrixBandPart",()=>ez),a(e.exports,"Max",()=>eL),a(e.exports,"Maximum",()=>eG),a(e.exports,"MaxPool",()=>eB),a(e.exports,"MaxPoolGrad",()=>eW),a(e.exports,"MaxPool3D",()=>eU),a(e.exports,"MaxPool3DGrad",()=>ej),a(e.exports,"MaxPoolWithArgmax",()=>eK),a(e.exports,"Mean",()=>eq),a(e.exports,"Min",()=>eH),a(e.exports,"Minimum",()=>eX),a(e.exports,"MirrorPad",()=>eJ),a(e.exports,"Mod",()=>eY),a(e.exports,"Multinomial",()=>eZ),a(e.exports,"Multiply",()=>eQ),a(e.exports,"Neg",()=>e0),a(e.exports,"NotEqual",()=>e1),a(e.exports,"NonMaxSuppressionV3",()=>e2),a(e.exports,"NonMaxSuppressionV4",()=>e3),a(e.exports,"NonMaxSuppressionV5",()=>e4),a(e.exports,"OnesLike",()=>e6),a(e.exports,"OneHot",()=>e5),a(e.exports,"Pack",()=>e8),a(e.exports,"PadV2",()=>e9),a(e.exports,"Pool",()=>e7),a(e.exports,"Pow",()=>te),a(e.exports,"Prelu",()=>tt),a(e.exports,"Prod",()=>tr),a(e.exports,"RaggedGather",()=>ta),a(e.exports,"RaggedRange",()=>tn),a(e.exports,"RaggedTensorToTensor",()=>ts),a(e.exports,"Range",()=>to),a(e.exports,"Real",()=>ti),a(e.exports,"Reciprocal",()=>tl),a(e.exports,"Relu",()=>tu),a(e.exports,"Reshape",()=>tp),a(e.exports,"ResizeNearestNeighbor",()=>tc),a(e.exports,"ResizeNearestNeighborGrad",()=>td),a(e.exports,"ResizeBilinear",()=>th),a(e.exports,"ResizeBilinearGrad",()=>tm),a(e.exports,"Relu6",()=>tg),a(e.exports,"Reverse",()=>tx),a(e.exports,"Round",()=>ty),a(e.exports,"Rsqrt",()=>tb),a(e.exports,"ScatterNd",()=>tv),a(e.exports,"TensorScatterUpdate",()=>tT),a(e.exports,"SearchSorted",()=>tw),a(e.exports,"Select",()=>tk),a(e.exports,"Selu",()=>tN),a(e.exports,"Slice",()=>tS),a(e.exports,"Sin",()=>tE),a(e.exports,"Sinh",()=>tI),a(e.exports,"Sign",()=>tC),a(e.exports,"Sigmoid",()=>t$),a(e.exports,"Softplus",()=>tA),a(e.exports,"Sqrt",()=>tR),a(e.exports,"Sum",()=>tM),a(e.exports,"SpaceToBatchND",()=>tO),a(e.exports,"SplitV",()=>tV),a(e.exports,"Softmax",()=>tP),a(e.exports,"SparseFillEmptyRows",()=>tD),a(e.exports,"SparseReshape",()=>t_),a(e.exports,"SparseSegmentMean",()=>tF),a(e.exports,"SparseSegmentSum",()=>tz),a(e.exports,"SparseToDense",()=>tL),a(e.exports,"SquaredDifference",()=>tG),a(e.exports,"Square",()=>tB),a(e.exports,"StaticRegexReplace",()=>tW),a(e.exports,"StridedSlice",()=>tU),a(e.exports,"StringNGrams",()=>tj),a(e.exports,"StringSplit",()=>tK),a(e.exports,"StringToHashBucketFast",()=>tq),a(e.exports,"Sub",()=>tH),a(e.exports,"Tan",()=>tX),a(e.exports,"Tanh",()=>tJ),a(e.exports,"Tile",()=>tY),a(e.exports,"TopK",()=>tZ),a(e.exports,"Transform",()=>tQ),a(e.exports,"Transpose",()=>t0),a(e.exports,"Unique",()=>t1),a(e.exports,"Unpack",()=>t2),a(e.exports,"UnsortedSegmentSum",()=>t3),a(e.exports,"UpperBound",()=>t4),a(e.exports,"ZerosLike",()=>t6),a(e.exports,"Step",()=>t5),a(e.exports,"FromPixels",()=>t8),a(e.exports,"RotateWithOffset",()=>t9),a(e.exports,"_FusedMatMul",()=>t7),a(e.exports,"FusedConv2D",()=>re),a(e.exports,"FusedDepthwiseConv2D",()=>rt);let r="Abs",n="Acos",s="Acosh",o="Add",i="AddN",l="All",u="Any",p="ArgMax",c="ArgMin",d="Asin",h="Asinh",f="Atan",m="Atanh",g="Atan2",x="AvgPool",y="AvgPoolGrad",b="AvgPool3D",v="AvgPool3DGrad",T="BatchMatMul",w="BatchToSpaceND",k="Bincount",N="BitwiseAnd",S="BroadcastTo",E="BroadcastArgs",I="Cast",C="Ceil",$="ClipByValue",A="Complex",R="ComplexAbs",M="Concat",O="Conv2D",V="Conv2DBackpropFilter",P="Conv2DBackpropInput",D="Conv3D",_="Conv3DBackpropFilterV2",F="Conv3DBackpropInputV2",z="Cos",L="Cosh",G="Cumprod",B="Cumsum",W="CropAndResize",U="DenseBincount",j="DepthToSpace",K="DepthwiseConv2dNative",q="DepthwiseConv2dNativeBackpropFilter",H="DepthwiseConv2dNativeBackpropInput",X="Diag",J="Dilation2D",Y="Dilation2DBackpropInput",Z="Dilation2DBackpropFilter",Q="Draw",ee="RealDiv",et="Einsum",er="Elu",ea="EluGrad",en="Erf",es="Equal",eo="Exp",ei="ExpandDims",el="Expm1",eu="FFT",ep="Fill",ec="FlipLeftRight",ed="Floor",eh="FloorDiv",ef="FusedBatchNorm",em="GatherV2",eg="GatherNd",ex="Greater",ey="GreaterEqual",eb="Identity",ev="IFFT",eT="Imag",ew="IsFinite",ek="IsInf",eN="IsNan",eS="LeakyRelu",eE="Less",eI="LessEqual",eC="LinSpace",e$="Log",eA="Log1p",eR="LogicalAnd",eM="LogicalNot",eO="LogicalOr",eV="LogicalXor",eP="LogSoftmax",eD="LowerBound",e_="LRN",eF="LRNGrad",ez="MatrixBandPart",eL="Max",eG="Maximum",eB="MaxPool",eW="MaxPoolGrad",eU="MaxPool3D",ej="MaxPool3DGrad",eK="MaxPoolWithArgmax",eq="Mean",eH="Min",eX="Minimum",eJ="MirrorPad",eY="Mod",eZ="Multinomial",eQ="Multiply",e0="Neg",e1="NotEqual",e2="NonMaxSuppressionV3",e3="NonMaxSuppressionV4",e4="NonMaxSuppressionV5",e6="OnesLike",e5="OneHot",e8="Pack",e9="PadV2",e7="Pool",te="Pow",tt="Prelu",tr="Prod",ta="RaggedGather",tn="RaggedRange",ts="RaggedTensorToTensor",to="Range",ti="Real",tl="Reciprocal",tu="Relu",tp="Reshape",tc="ResizeNearestNeighbor",td="ResizeNearestNeighborGrad",th="ResizeBilinear",tm="ResizeBilinearGrad",tg="Relu6",tx="Reverse",ty="Round",tb="Rsqrt",tv="ScatterNd",tT="TensorScatterUpdate",tw="SearchSorted",tk="Select",tN="Selu",tS="Slice",tE="Sin",tI="Sinh",tC="Sign",t$="Sigmoid",tA="Softplus",tR="Sqrt",tM="Sum",tO="SpaceToBatchND",tV="SplitV",tP="Softmax",tD="SparseFillEmptyRows",t_="SparseReshape",tF="SparseSegmentMean",tz="SparseSegmentSum",tL="SparseToDense",tG="SquaredDifference",tB="Square",tW="StaticRegexReplace",tU="StridedSlice",tj="StringNGrams",tK="StringSplit",tq="StringToHashBucketFast",tH="Sub",tX="Tan",tJ="Tanh",tY="Tile",tZ="TopK",tQ="Transform",t0="Transpose",t1="Unique",t2="Unpack",t3="UnsortedSegmentSum",t4="UpperBound",t6="ZerosLike",t5="Step",t8="FromPixels",t9="RotateWithOffset",t7="_FusedMatMul",re="FusedConv2D",rt="FusedDepthwiseConv2D"}),h("3ytnp",function(e,t){a(e.exports,"getKernel",()=>l),a(e.exports,"getGradient",()=>u),a(e.exports,"getKernelsForBackend",()=>p),a(e.exports,"registerKernel",()=>c),a(e.exports,"registerGradient",()=>h),a(e.exports,"unregisterKernel",()=>f),a(e.exports,"unregisterGradient",()=>m),a(e.exports,"copyRegisteredKernels",()=>g);var r=d("alePs"),n=d("bhrSX"),s=d("ivRg5");let o=(0,n.getGlobal)("kernelRegistry",()=>new Map),i=(0,n.getGlobal)("gradRegistry",()=>new Map);function l(e,t){let r=x(e,t);return o.get(r)}function u(e){return i.get(e)}function p(e){let t=o.entries(),r=[];for(;;){let{done:a,value:n}=t.next();if(a)break;let[s,o]=n,[i]=s.split("_");i===e&&r.push(o)}return r}function c(e){let{kernelName:t,backendName:r}=e,a=x(t,r);o.has(a)&&s.warn(`The kernel '${t}' for backend '${r}' is already registered`),o.set(a,e)}function h(e){let{kernelName:t}=e;i.has(t)&&(0,r.env)().getBool("DEBUG")&&s.warn(`Overriding the gradient for '${t}'`),i.set(t,e)}function f(e,t){let r=x(e,t);if(!o.has(r))throw Error(`The kernel '${e}' for backend '${t}' is not registered`);o.delete(r)}function m(e){if(!i.has(e))throw Error(`The gradient '${e}' for backend is not registered`);i.delete(e)}function g(e,t){p(e).forEach(e=>{c(Object.assign({},e,{backendName:t}))})}function x(e,t){return`${t}_${e}`}}),h("ivRg5",function(e,t){a(e.exports,"warn",()=>n),a(e.exports,"log",()=>s);var r=d("alePs");function n(...e){(0,r.env)().getBool("IS_TEST")||(0,r.env)().getBool("PROD")||console.warn(...e)}function s(...e){(0,r.env)().getBool("IS_TEST")||(0,r.env)().getBool("PROD")||console.log(...e)}}),h("lKc9s",function(e,t){a(e.exports,"Profiler",()=>o);var r=d("alePs"),n=d("a9Xyg"),s=d("3SJNW");class o{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new i)}profileKernel(e,t,a){let s,o,i=()=>{s=a()},l=n.now();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(i);else{for(let e of(i(),s))e.dataSync();o=Promise.resolve({kernelMs:n.now()-l})}if((0,r.env)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<s.length;t++){let r=s[t];r.data().then(t=>{!function(e,t,r){if("float32"===t)for(let t=0;t<e.length;t++){let a=e[t];if(isNaN(a)||!isFinite(a))return console.warn(`Found ${a} in the result of '${r}'`),!0}}(t,r.dtype,e)})}return{kernelName:e,outputs:s,inputs:t,timeMs:o.then(e=>e.kernelMs),extraInfo:o.then(e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():"")}}logKernelProfile(e){let{kernelName:t,outputs:r,timeMs:a,inputs:n,extraInfo:s}=e;r.forEach(e=>{Promise.all([e.data(),a,s]).then(r=>{this.logger.logKernelProfile(t,e,r[0],r[1],n,r[2])})})}}class i{logKernelProfile(e,t,r,a,n,o){let i="number"==typeof a?s.rightPad(`${a}ms`,9):a.error,l=s.rightPad(e,25),u=t.rank,p=t.size,c=s.rightPad(t.shape.toString(),14),d="";for(let e in n){let r=n[e];if(null!=r){let a=r.shape||t.shape,n=a.length;d+=`${e}: ${n}D ${n>0?a:""} `}}console.log(`%c${l}	%c${i}	%c${u}D ${c}	%c${p}	%c${d}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}}),h("a9Xyg",function(e,t){a(e.exports,"createScalarValue",()=>l),a(e.exports,"encodeString",()=>h),a(e.exports,"toTypedArray",()=>u),a(e.exports,"flatten",()=>g),a(e.exports,"now",()=>p),a(e.exports,"fetch",()=>c),a(e.exports,"decodeString",()=>f),a(e.exports,"isTypedArray",()=>m);var r=d("alePs"),s=d("cQqZ2"),o=d("3SJNW"),i=d("hd5Or");function l(e,t){return"string"===t?h(e):u([e],t)}function u(e,t){var a;if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=g(e)),(0,r.env)().getBool("DEBUG")&&o.checkConversionForErrors(e,t),(a=e)instanceof Float32Array&&"float32"===t||a instanceof Int32Array&&"int32"===t||a instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){let t=new Uint8Array(e.length);for(let r=0;r<t.length;++r)0!==Math.round(e[r])&&(t[r]=1);return t}throw Error(`Unknown data type ${t}`)}function p(){return(0,r.env)().platform.now()}function c(e,t){return(0,r.env)().platform.fetch(e,t)}function h(e,t="utf-8"){return t=t||"utf-8",(0,r.env)().platform.encode(e,t)}function f(e,t="utf-8"){return t=t||"utf-8",(0,r.env)().platform.decode(e,t)}function m(e){return null!=(0,r.env)().platform.isTypedArray?(0,r.env)().platform.isTypedArray(e):(0,s.isTypedArrayBrowser)(e)}function g(e,t=[],r=!1){if(null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||o.isPromise(e)||null==e||m(e)&&r)t.push(e);else if(Array.isArray(e)||m(e))for(let a=0;a<e.length;++a)g(e[a],t,r);else{let a=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(a=Math.max(a,Number(t)));for(let n=0;n<=a;n++)g(e[n],t,r)}return t}n(e.exports,o),n(e.exports,i)}),h("cQqZ2",function(e,t){a(e.exports,"isTypedArrayBrowser",()=>r);function r(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}}),h("hd5Or",function(e,t){a(e.exports,"hexToLong",()=>s),a(e.exports,"fingerPrint64",()=>g);var r=d("3gmZQ");let n=r.default||r;function s(e){return n.fromString(e,!0,16)}let o=s("c3a5c85c97cb3127"),i=s("b492b66fbe98f273"),l=s("9ae16a3b2f90404f");function u(e){return e.xor(e.shru(47))}function p(e,t,r){let a=e.slice(t,t+r);return n.fromBytes(Array.from(a),!0,!0)}function c(e,t){return p(e,t,8)}function h(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function f(e,t,r=s("9ddfea08eb382d69")){let a=e.xor(t).mul(r);a=a.xor(a.shru(47));let n=t.xor(a).mul(r);return(n=n.xor(n.shru(47))).mul(r)}function m(e,t,r,a){return function(e,t,r,a,n,s){n=n.add(e),s=h(s.add(n).add(a),21);let o=n;return n=(n=n.add(t)).add(r),s=s.add(h(n,44)),[n.add(a),s.add(o)]}(c(e,t),c(e,t+8),c(e,t+16),c(e,t+24),r,a)}function g(e,t=e.length){let r=n.fromNumber(81,!0);if(t<=32)if(t<=16)return function(e,t=e.length){if(t>=8){let r=l.add(2*t),a=c(e,0).add(l),n=c(e,t-8);return f(h(n,37).mul(r).add(a),h(a,25).add(n).mul(r),r)}if(t>=4){let r=l.add(2*t);return f(p(e,0,4).shl(3).add(t),p(e,t-4,4),r)}if(t>0){let r=e[0],a=e[t>>1],n=e[t-1];return u(l.mul(r+(a<<8)).xor(o.mul(t+(n<<2)))).mul(l)}return l}(e,t);else return function(e,t=e.length){let r=l.add(2*t),a=c(e,0).mul(i),n=c(e,8),s=c(e,t-8).mul(r),o=c(e,t-16).mul(l);return f(h(a.add(n),43).add(h(s,30)).add(o),a.add(h(n.add(l),18)).add(s),r)}(e,t);if(t<=64)return function(e,t=e.length){let r=l.add(2*t),a=c(e,0).mul(l),n=c(e,8),s=c(e,t-8).mul(r),o=c(e,t-16).mul(l),i=h(a.add(n),43).add(h(s,30)).add(o),u=f(i,a.add(h(n.add(l),18)).add(s),r),p=c(e,16).mul(r),d=c(e,24),m=i.add(c(e,t-32)).mul(r),g=u.add(c(e,t-24)).mul(r);return f(h(p.add(d),43).add(h(m,30)).add(g),p.add(h(d.add(a),18)).add(m),r)}(e,t);let a=r,s=r.mul(i).add(113),d=u(s.mul(l).add(113)).mul(l),x=[n.UZERO,n.UZERO],y=[n.UZERO,n.UZERO];a=a.mul(l).add(c(e,0));let b=0,v=(t-1>>6)*64,T=v+(t-1&63)-63;do a=h(a.add(s).add(x[0]).add(c(e,b+8)),37).mul(i),s=h(s.add(x[1]).add(c(e,b+48)),42).mul(i),a=a.xor(y[1]),s=s.add(x[0]).add(c(e,b+40)),d=h(d.add(y[0]),33).mul(i),x=m(e,b,x[1].mul(i),a.add(y[0])),y=m(e,b+32,d.add(y[1]),s.add(c(e,b+16))),[d,a]=[a,d],b+=64;while(b!==v)let w=i.add(d.and(255).shl(1));return b=T,y[0]=y[0].add(t-1&63),x[0]=x[0].add(y[0]),y[0]=y[0].add(x[0]),a=h(a.add(s).add(x[0]).add(c(e,b+8)),37).mul(w),s=h(s.add(x[1]).add(c(e,b+48)),42).mul(w),a=a.xor(y[1].mul(9)),s=s.add(x[0].mul(9).add(c(e,b+40))),d=h(d.add(y[0]),33).mul(w),x=m(e,b,x[1].mul(w),a.add(y[0])),y=m(e,b+32,d.add(y[1]),s.add(c(e,b+16))),[d,a]=[a,d],f(f(x[0],y[0],w).add(u(s).mul(o)).add(d),f(x[1],y[1],w).add(a),w)}}),h("3gmZQ",function(e,t){e.exports=a;var r=null;try{r=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function a(e,t,r){this.low=0|e,this.high=0|t,this.unsigned=!!r}function n(e){return!0===(e&&e.__isLong__)}a.prototype.__isLong__,Object.defineProperty(a.prototype,"__isLong__",{value:!0}),a.isLong=n;var s={},o={};function i(e,t){var r,a,n;if(t)return(e>>>=0,(n=0<=e&&e<256)&&(a=o[e]))?a:(r=u(e,(0|e)<0?-1:0,!0),n&&(o[e]=r),r);return(e|=0,(n=-128<=e&&e<128)&&(a=s[e]))?a:(r=u(e,e<0?-1:0,!1),n&&(s[e]=r),r)}function l(e,t){if(isNaN(e))return t?y:x;if(t){if(e<0)return y;if(e>=f)return k}else{if(e<=-m)return N;if(e+1>=m)return w}return e<0?l(-e,t).neg():u(e%h|0,e/h|0,t)}function u(e,t,r){return new a(e,t,r)}a.fromInt=i,a.fromNumber=l,a.fromBits=u;var p=Math.pow;function c(e,t,r){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return x;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");if((a=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===a)return c(e.substring(1),t,r).neg();for(var a,n=l(p(r,8)),s=x,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),u=parseInt(e.substring(o,o+i),r);if(i<8){var d=l(p(r,i));s=s.mul(d).add(l(u))}else s=(s=s.mul(n)).add(l(u))}return s.unsigned=t,s}function d(e,t){return"number"==typeof e?l(e,t):"string"==typeof e?c(e,t):u(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}a.fromString=c,a.fromValue=d;var h=0x100000000,f=0xffffffffffffffff,m=0x8000000000000000,g=i(0x1000000),x=i(0);a.ZERO=x;var y=i(0,!0);a.UZERO=y;var b=i(1);a.ONE=b;var v=i(1,!0);a.UONE=v;var T=i(-1);a.NEG_ONE=T;var w=u(-1,0x7fffffff,!1);a.MAX_VALUE=w;var k=u(-1,-1,!0);a.MAX_UNSIGNED_VALUE=k;var N=u(0,-0x80000000,!1);a.MIN_VALUE=N;var S=a.prototype;S.toInt=function(){return this.unsigned?this.low>>>0:this.low},S.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},S.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(!this.eq(N))return"-"+this.neg().toString(e);else{var t=l(e),r=this.div(t),a=r.mul(t).sub(this);return r.toString(e)+a.toInt().toString(e)}for(var n=l(p(e,6),this.unsigned),s=this,o="";;){var i=s.div(n),u=(s.sub(i.mul(n)).toInt()>>>0).toString(e);if((s=i).isZero())return u+o;for(;u.length<6;)u="0"+u;o=""+u+o}},S.getHighBits=function(){return this.high},S.getHighBitsUnsigned=function(){return this.high>>>0},S.getLowBits=function(){return this.low},S.getLowBitsUnsigned=function(){return this.low>>>0},S.getNumBitsAbs=function(){if(this.isNegative())return this.eq(N)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return 0!=this.high?t+33:t+1},S.isZero=function(){return 0===this.high&&0===this.low},S.eqz=S.isZero,S.isNegative=function(){return!this.unsigned&&this.high<0},S.isPositive=function(){return this.unsigned||this.high>=0},S.isOdd=function(){return(1&this.low)==1},S.isEven=function(){return(1&this.low)==0},S.equals=function(e){return n(e)||(e=d(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},S.eq=S.equals,S.notEquals=function(e){return!this.eq(e)},S.neq=S.notEquals,S.ne=S.notEquals,S.lessThan=function(e){return 0>this.comp(e)},S.lt=S.lessThan,S.lessThanOrEqual=function(e){return 0>=this.comp(e)},S.lte=S.lessThanOrEqual,S.le=S.lessThanOrEqual,S.greaterThan=function(e){return this.comp(e)>0},S.gt=S.greaterThan,S.greaterThanOrEqual=function(e){return this.comp(e)>=0},S.gte=S.greaterThanOrEqual,S.ge=S.greaterThanOrEqual,S.compare=function(e){if(n(e)||(e=d(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},S.comp=S.compare,S.negate=function(){return!this.unsigned&&this.eq(N)?N:this.not().add(b)},S.neg=S.negate,S.add=function(e){n(e)||(e=d(e));var t,r,a=this.high>>>16,s=65535&this.high,o=this.low>>>16,i=65535&this.low,l=e.high>>>16,p=65535&e.high,c=e.low>>>16,h=65535&e.low,f=0,m=0;return t=0+((r=0+(i+h))>>>16),r&=65535,t+=o+c,m+=t>>>16,t&=65535,m+=s+p,f+=m>>>16,m&=65535,f+=a+l,u(t<<16|r,(f&=65535)<<16|m,this.unsigned)},S.subtract=function(e){return n(e)||(e=d(e)),this.add(e.neg())},S.sub=S.subtract,S.multiply=function(e){if(this.isZero())return x;if(n(e)||(e=d(e)),r)return u(r.mul(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned);if(e.isZero())return x;if(this.eq(N))return e.isOdd()?N:x;if(e.eq(N))return this.isOdd()?N:x;if(this.isNegative())if(e.isNegative())return this.neg().mul(e.neg());else return this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(g)&&e.lt(g))return l(this.toNumber()*e.toNumber(),this.unsigned);var t,a,s=this.high>>>16,o=65535&this.high,i=this.low>>>16,p=65535&this.low,c=e.high>>>16,h=65535&e.high,f=e.low>>>16,m=65535&e.low,y=0,b=0;return t=0+((a=0+p*m)>>>16),a&=65535,t+=i*m,b+=t>>>16,t&=65535,t+=p*f,b+=t>>>16,t&=65535,b+=o*m,y+=b>>>16,b&=65535,b+=i*f,y+=b>>>16,b&=65535,b+=p*h,y+=b>>>16,b&=65535,y+=s*m+o*f+i*h+p*c,u(t<<16|a,(y&=65535)<<16|b,this.unsigned)},S.mul=S.multiply,S.divide=function(e){if(n(e)||(e=d(e)),e.isZero())throw Error("division by zero");if(r){var t,a,s;return this.unsigned||-0x80000000!==this.high||-1!==e.low||-1!==e.high?u((this.unsigned?r.div_u:r.div_s)(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned):this}if(this.isZero())return this.unsigned?y:x;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return y;if(e.gt(this.shru(1)))return v;s=y}else{if(this.eq(N))if(e.eq(b)||e.eq(T))return N;else return e.eq(N)?b:(t=this.shr(1).div(e).shl(1)).eq(x)?e.isNegative()?b:T:(a=this.sub(e.mul(t)),s=t.add(a.div(e)));if(e.eq(N))return this.unsigned?y:x;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=x}for(a=this;a.gte(e);){for(var o=Math.ceil(Math.log(t=Math.max(1,Math.floor(a.toNumber()/e.toNumber())))/Math.LN2),i=o<=48?1:p(2,o-48),c=l(t),h=c.mul(e);h.isNegative()||h.gt(a);)t-=i,h=(c=l(t,this.unsigned)).mul(e);c.isZero()&&(c=b),s=s.add(c),a=a.sub(h)}return s},S.div=S.divide,S.modulo=function(e){return(n(e)||(e=d(e)),r)?u((this.unsigned?r.rem_u:r.rem_s)(this.low,this.high,e.low,e.high),r.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},S.mod=S.modulo,S.rem=S.modulo,S.not=function(){return u(~this.low,~this.high,this.unsigned)},S.and=function(e){return n(e)||(e=d(e)),u(this.low&e.low,this.high&e.high,this.unsigned)},S.or=function(e){return n(e)||(e=d(e)),u(this.low|e.low,this.high|e.high,this.unsigned)},S.xor=function(e){return n(e)||(e=d(e)),u(this.low^e.low,this.high^e.high,this.unsigned)},S.shiftLeft=function(e){return(n(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?u(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):u(0,this.low<<e-32,this.unsigned)},S.shl=S.shiftLeft,S.shiftRight=function(e){return(n(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?u(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):u(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},S.shr=S.shiftRight,S.shiftRightUnsigned=function(e){if(n(e)&&(e=e.toInt()),0==(e&=63))return this;var t=this.high;return e<32?u(this.low>>>e|t<<32-e,t>>>e,this.unsigned):32===e?u(t,0,this.unsigned):u(t>>>e-32,0,this.unsigned)},S.shru=S.shiftRightUnsigned,S.shr_u=S.shiftRightUnsigned,S.toSigned=function(){return this.unsigned?u(this.low,this.high,!1):this},S.toUnsigned=function(){return this.unsigned?this:u(this.low,this.high,!0)},S.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},S.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},S.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},a.fromBytes=function(e,t,r){return r?a.fromBytesLE(e,t):a.fromBytesBE(e,t)},a.fromBytesLE=function(e,t){return new a(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},a.fromBytesBE=function(e,t){return new a(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}),h("1AtPa",function(e,t){a(e.exports,"getFilteredNodesXToY",()=>n),a(e.exports,"backpropagateGradients",()=>s);var r=d("3SJNW");function n(e,t,r){let a={},n={};for(let e=0;e<t.length;e++)a[t[e].id]=!0;for(let r=0;r<e.length;r++){let s=e[r],o=s.inputs;for(let e in o){let r=o[e],i=!1;for(let e=0;e<t.length;e++)if(a[r.id]){s.outputs.forEach(e=>a[e.id]=!0),i=!0,n[s.id]=!0;break}if(i)break}}let s={};s[r.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let r=e[t],a=r.inputs;for(let e=0;e<r.outputs.length;e++)if(s[r.outputs[e].id]){for(let e in a)s[a[e].id]=!0,o[r.id]=!0;break}}let i=[];for(let t=0;t<e.length;t++){let r=e[t];if(n[r.id]&&o[r.id]){let e={};for(let t in r.inputs){let n=r.inputs[t];a[n.id]&&(e[t]=n)}let t=Object.assign({},r);t.inputs=e,t.outputs=r.outputs,i.push(t)}}return i}function s(e,t,a,n){for(let s=t.length-1;s>=0;s--){let o=t[s],i=[];if(o.outputs.forEach(t=>{let r=e[t.id];null!=r?i.push(r):i.push(null)}),null==o.gradient)throw Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);let l=o.gradient(i);for(let t in o.inputs){if(!(t in l))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(l)}.`);let s=a(()=>l[t]());if("float32"!==s.dtype)throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${s.dtype}'`);let i=o.inputs[t];if(!r.arraysEqual(s.shape,i.shape))throw Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${t}' has shape '${s.shape}', which does not match the shape of the input '${i.shape}'`);if(null==e[i.id])e[i.id]=s;else{let t=e[i.id];e[i.id]=n(t,s),t.dispose()}}}}}),h("ciqGg",function(e,t){a(e.exports,"TensorBuffer",()=>i),a(e.exports,"setTensorTracker",()=>p),a(e.exports,"setOpHandler",()=>c),a(e.exports,"setDeprecationWarningFn",()=>h),a(e.exports,"Tensor",()=>f),a(e.exports,"getGlobalTensorClass",()=>m),a(e.exports,"Variable",()=>g);var r=d("bhrSX"),n=d("XrPWI"),s=d("3SJNW"),o=d("a9Xyg");class i{constructor(e,t,r){if(this.dtype=t,this.shape=e.slice(),this.size=s.sizeFromShape(e),null!=r){let e=r.length;s.assert(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||s.getArrayFromDType(t,this.size),this.strides=(0,s.computeStrides)(e)}set(e,...t){0===t.length&&(t=[0]),s.assert(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let r=this.locToIndex(t);this.values[r]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(let r of e){if(r<0||r>=this.shape[t])throw Error(`Requested out of range element at ${e}.   Buffer shape=${this.shape}`);t++}let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=this.strides[t]*e[t];return this.values[r]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];let t=Array(this.shape.length);for(let r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return l().makeTensor(this.values,this.shape,this.dtype)}}let l=null,u=null;function p(e){l=e}function c(e){u=e}function h(e){}class f{constructor(e,t,r,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=s.sizeFromShape(e),this.strides=(0,s.computeStrides)(e),this.dataId=r,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return u.buffer(this.shape,this.dtype,e)}bufferSync(){return u.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return(0,s.toNestedArray)(this.shape,e,"complex64"===this.dtype)}arraySync(){return(0,s.toNestedArray)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();let e=l().read(this.dataId);if("string"===this.dtype){let t=await e;try{return t.map(e=>o.decodeString(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),l().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=l().readSync(this.dataId);if("string"===this.dtype)try{return e.map(e=>o.decodeString(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await l().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),l().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error("Tensor is disposed.")}print(e=!1){return u.print(this,e)}clone(){return this.throwIfDisposed(),u.clone(this)}toString(e=!1){let t=this.dataSync();return(0,n.tensorToString)(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),u.cast(this,e)}variable(e=!0,t,r){return this.throwIfDisposed(),l().makeVariable(this,e,t,r)}}function m(){return(0,r.getGlobal)("Tensor",()=>f)}Object.defineProperty(f,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),m();class g extends f{constructor(e,t,r,a){super(e.shape,e.dtype,e.dataId,a),this.trainable=t,this.name=r}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!s.arraysEqual(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);l().disposeTensor(this),this.dataId=e.dataId,l().incRef(this,null)}dispose(){l().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(g,Symbol.hasInstance,{value:e=>e instanceof f&&null!=e.assign&&e.assign instanceof Function})}),h("XrPWI",function(e,t){a(e.exports,"tensorToString",()=>n);var r=d("3SJNW");function n(e,t,a,n){let l=(0,r.computeStrides)(t),u=function(e,t,a,n){let o=(0,r.sizeFromShape)(t),l=n[n.length-1],u=Array(l).fill(0),p=t.length,c="complex64"===a?i(e):e;if(p>1)for(let e=0;e<o/l;e++){let t=e*l;for(let e=0;e<l;e++)u[e]=Math.max(u[e],s(c[t+e],0,a).length)}return u}(e,t,a,l),p=t.length,c=function e(t,r,a,n,l,u=!0){let p="complex64"===a?2:1,c=r[0],d=r.length;if(0===d)return"complex64"===a?[s(i(t)[0],0,a)]:"bool"===a?[o(t[0])]:[t[0].toString()];if(1===d){if(c>20){let e=Array.from(t.slice(0,3*p)),r=Array.from(t.slice((c-3)*p,c*p));return"complex64"===a&&(e=i(e),r=i(r)),["["+e.map((e,t)=>s(e,l[t],a)).join(", ")+", ..., "+r.map((e,t)=>s(e,l[c-3+t],a)).join(", ")+"]"]}return["["+("complex64"===a?i(t):Array.from(t)).map((e,t)=>s(e,l[t],a)).join(", ")+"]"]}let h=r.slice(1),f=n.slice(1),m=n[0]*p,g=[];if(c>20){for(let r=0;r<3;r++){let n=r*m,s=n+m;g.push(...e(t.slice(n,s),h,a,f,l,!1))}g.push("...");for(let r=c-3;r<c;r++){let n=r*m,s=n+m;g.push(...e(t.slice(n,s),h,a,f,l,r===c-1))}}else for(let r=0;r<c;r++){let n=r*m,s=n+m;g.push(...e(t.slice(n,s),h,a,f,l,r===c-1))}let x=2===d?",":"";g[0]="["+(c>0?g[0]+x:"");for(let e=1;e<g.length-1;e++)g[e]=" "+g[e]+x;let y=",\n";for(let e=2;e<d;e++)y+="\n";return g[g.length-1]=" "+g[g.length-1]+"]"+(u?"":y),g}(e,t,a,l,u),d=["Tensor"];return n&&(d.push(`  dtype: ${a}`),d.push(`  rank: ${p}`),d.push(`  shape: [${t}]`),d.push("  values:")),d.push(c.map(e=>"    "+e).join("\n")),d.join("\n")}function s(e,t,a){let n;return n=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:(0,r.isString)(e)?`'${e}'`:"bool"===a?o(e):parseFloat(e.toFixed(7)).toString(),(0,r.rightPad)(n,t)}function o(e){return 0===e?"false":"true"}function i(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}}),h("kyuDB",function(e,t){a(e.exports,"makeTypesMatch",()=>o),a(e.exports,"assertTypesMatch",()=>i),a(e.exports,"isTensorInList",()=>l),a(e.exports,"getTensorsInContainer",()=>u);var r=d("ciqGg"),n=d("8IARK"),s=d("3SJNW");function o(e,t){if(e.dtype===t.dtype)return[e,t];let r=(0,n.upcastType)(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function i(e,t){(0,s.assert)(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function l(e,t){return t.some(t=>t.id===e.id)}function u(e){let t=[];return function e(t,a,n){var s;if(null!=t){if(t instanceof r.Tensor)return void a.push(t);if(Array.isArray(s=t)||"object"==typeof s)for(let r in t){let s=t[r];n.has(s)||(n.add(s),e(s,a,n))}}}(e,t,new Set),t}}),h("8IARK",function(e,t){var r,n,s,o,i,l,u,p,c,d;a(e.exports,"Rank",()=>r),a(e.exports,"upcastType",()=>f),a(e.exports,"sumOutType",()=>m),a(e.exports,"isWebGLData",()=>g),a(e.exports,"isWebGPUData",()=>x),(l=r||(r={})).R0="R0",l.R1="R1",l.R2="R2",l.R3="R3",l.R4="R4",l.R5="R5",l.R6="R6",(u=n||(n={})).float32="float32",u.int32="int32",u.bool="int32",u.complex64="complex64",(p=s||(s={})).float32="float32",p.int32="int32",p.bool="bool",p.complex64="complex64",(c=o||(o={})).float32="float32",c.int32="float32",c.bool="float32",c.complex64="complex64",(d=i||(i={})).float32="complex64",d.int32="complex64",d.bool="complex64",d.complex64="complex64";let h={float32:o,int32:n,bool:s,complex64:i};function f(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error(`Can not upcast ${e} with ${t}`)}return h[e][t]}function m(e){return f(e,"int32")}function g(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function x(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}}),h("3kUb9",function(e,t){d("bv3K9");var r=d("9kvpY");let a=(0,d("alePs").env)();a.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),a.registerFlag("IS_BROWSER",()=>r.isBrowser()),a.registerFlag("IS_NODE",()=>!1),a.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),a.registerFlag("IS_SAFARI",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),a.registerFlag("PROD",()=>!1),a.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>a.getBool("DEBUG")),a.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),a.registerFlag("IS_TEST",()=>!1),a.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>a.getBool("DEBUG")),a.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),a.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),a.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1)}),h("9kvpY",function(e,t){let r;function n(e){r=e}function s(e){if(void 0!==r)return r;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;let t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function o(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}a(e.exports,"mockIsMobile",()=>n),a(e.exports,"isMobile",()=>s),a(e.exports,"isBrowser",()=>o)}),h("5Yqt2",function(e,t){d("3kUb9");var r=d("alePs"),a=d("5JUfu"),n=d("9aF7M"),s=d("l5j1O"),o=d("cQqZ2");if((0,r.env)().get("IS_BROWSER")){(0,r.env)().setPlatform("browser",new class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if("undefined"==typeof window||!(0,r.env)().getBool("USE_SETTIMEOUTCUSTOM"))return void setTimeout(e,t);this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",e=>{e.source===window&&e.data.name===this.messageName&&(e.stopPropagation(),(0,this.functionRefs[e.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0))},!0))}isTypedArray(e){return(0,o.isTypedArrayBrowser)(e)}});try{s.ModelStoreManagerRegistry.registerManager(n.BrowserLocalStorage.URL_SCHEME,new(0,n.BrowserLocalStorageManager))}catch(e){}try{s.ModelStoreManagerRegistry.registerManager(a.BrowserIndexedDB.URL_SCHEME,new(0,a.BrowserIndexedDBManager))}catch(e){}}}),h("5JUfu",function(e,t){a(e.exports,"BrowserIndexedDB",()=>h),a(e.exports,"BrowserIndexedDBManager",()=>m),d("3kUb9");var r=d("alePs"),n=d("eqf4o"),s=d("cKITo"),o=d("9kinH");let i="tensorflowjs",l="models_store",u="model_info_store";function p(){if(!(0,r.env)().getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function c(e){let t=e.result;t.createObjectStore(l,{keyPath:"modelPath"}),t.createObjectStore(u,{keyPath:"modelPath"})}class h{constructor(e){if(this.indexedDB=p(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,r)=>{let a=this.indexedDB.open(i,1);a.onupgradeneeded=()=>c(a),a.onsuccess=()=>{let s=a.result;if(null==t){let t=s.transaction(l,"readonly"),a=t.objectStore(l).get(this.modelPath);a.onsuccess=()=>{if(null==a.result)return s.close(),r(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(a.result.modelArtifacts)},a.onerror=e=>(s.close(),r(a.error)),t.oncomplete=()=>s.close()}else{let a,i;t.weightData=o.CompositeArrayBuffer.join(t.weightData);let p=(0,n.getModelArtifactsInfoForJSON)(t),c=s.transaction(u,"readwrite"),d=c.objectStore(u);try{a=d.put({modelPath:this.modelPath,modelArtifactsInfo:p})}catch(e){return r(e)}a.onsuccess=()=>{let a,n=(i=s.transaction(l,"readwrite")).objectStore(l);try{a=n.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:p})}catch(e){return r(e)}a.onsuccess=()=>e({modelArtifactsInfo:p}),a.onerror=e=>{let t=(d=c.objectStore(u)).delete(this.modelPath);t.onsuccess=()=>(s.close(),r(a.error)),t.onerror=e=>(s.close(),r(a.error))}},a.onerror=e=>(s.close(),r(a.error)),c.oncomplete=()=>{null==i?s.close():i.oncomplete=()=>s.close()}}},a.onerror=e=>r(a.error)})}}h.URL_SCHEME="indexeddb://";let f=e=>{var t;return(0,r.env)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(h.URL_SCHEME)?(t=e.slice(h.URL_SCHEME.length),new h(t)):null};s.IORouterRegistry.registerSaveRouter(f),s.IORouterRegistry.registerLoadRouter(f);class m{constructor(){this.indexedDB=p()}async listModels(){return new Promise((e,t)=>{let r=this.indexedDB.open(i,1);r.onupgradeneeded=()=>c(r),r.onsuccess=()=>{let a=r.result,n=a.transaction(u,"readonly"),s=n.objectStore(u).getAll();s.onsuccess=()=>{let t={};for(let e of s.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},s.onerror=e=>(a.close(),t(s.error)),n.oncomplete=()=>a.close()},r.onerror=e=>t(r.error)})}async removeModel(e){var t;return e=(t=e).startsWith(h.URL_SCHEME)?t.slice(h.URL_SCHEME.length):t,new Promise((t,r)=>{let a=this.indexedDB.open(i,1);a.onupgradeneeded=()=>c(a),a.onsuccess=()=>{let n,s=a.result,o=s.transaction(u,"readwrite"),i=o.objectStore(u),p=i.get(e);p.onsuccess=()=>{if(null==p.result)return s.close(),r(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let a=i.delete(e),o=()=>{let a=(n=s.transaction(l,"readwrite")).objectStore(l).delete(e);a.onsuccess=()=>t(p.result.modelArtifactsInfo),a.onerror=e=>r(p.error)};a.onsuccess=o,a.onerror=e=>(o(),s.close(),r(p.error))}},p.onerror=e=>(s.close(),r(p.error)),o.oncomplete=()=>{null==n?s.close():n.oncomplete=()=>s.close()}},a.onerror=e=>r(a.error)})}}}),h("eqf4o",function(e,t){a(e.exports,"encodeWeights",()=>c),a(e.exports,"decodeWeights",()=>h),a(e.exports,"decodeWeightsStream",()=>x),a(e.exports,"arrayBufferToBase64String",()=>v),a(e.exports,"base64StringToArrayBuffer",()=>T),a(e.exports,"concatenateArrayBuffers",()=>w),a(e.exports,"basename",()=>k),a(e.exports,"getModelJSONForModelArtifacts",()=>N),a(e.exports,"getModelArtifactsForJSONSync",()=>S),a(e.exports,"getModelArtifactsForJSON",()=>E),a(e.exports,"getModelArtifactsInfoForJSON",()=>I),a(e.exports,"getWeightSpecs",()=>C);var r=d("eEMF3"),n=d("DXGru"),s=d("3SJNW"),o=d("7waw0"),i=d("9kinH"),l=d("1c9K8"),u=d("alePs"),p=d("N0o3H").Buffer;async function c(e,t){let r=[],a=[],n=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let s=0;s<n.length;++s){let o=n[s],i=Array.isArray(e)?e[s].tensor:e[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);let l={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){let e=new Promise(async e=>{let t=await i.bytes(),r=new Uint8Array(t.reduce((e,t)=>e+t.length,0)+4*t.length),a=0;for(let e=0;e<t.length;e++){let n=t[e],s=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(s,a),a+=4,r.set(n,a),a+=n.length}e(r)});a.push(e)}else a.push(i.data());null!=t&&(l.group=t),r.push(l)}return{data:function(e){if(null===e)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,r=[];e.forEach(e=>{if(t+=e.byteLength,r.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let a=new Uint8Array(t),n=0;return r.forEach(e=>{a.set(new Uint8Array(e.buffer),n),n+=e.byteLength}),a.buffer}(await Promise.all(a)),specs:r}}function h(e,t){let r=new(0,i.CompositeArrayBuffer)(e),a={},n=0;for(let e of t){let t=function(e,t){let r,a=(0,s.sizeFromShape)(e.shape);if("quantization"in e){let t=e.quantization;r=o.DTYPE_VALUE_SIZE_MAP[t.dtype]}else if("string"===e.dtype){let e=0;for(let r=0;r<a;r++)e+=4+new Uint32Array(t(e,e+4))[0];return e}else r=o.DTYPE_VALUE_SIZE_MAP[e.dtype];return a*r}(e,(e,t)=>r.slice(n+e,n+t));a[e.name]=m(e,r.slice(n,n+t)),n+=t}return a}async function f(e,t){let r,a=(0,s.sizeFromShape)(e.shape);if("quantization"in e){let t=e.quantization;r=o.DTYPE_VALUE_SIZE_MAP[t.dtype]}else if("string"===e.dtype){let e=0;for(let r=0;r<a;r++)e+=4+new Uint32Array(await t(e,e+4))[0];return e}else r=o.DTYPE_VALUE_SIZE_MAP[e.dtype];return a*r}function m(e,t){let a,i=e.name,l=e.dtype,u=e.shape,p=(0,s.sizeFromShape)(u),c=0;if("quantization"in e){let r=e.quantization;if("uint8"===r.dtype||"uint16"===r.dtype){if(!("min"in r&&"scale"in r))throw Error(`Weight ${e.name} with quantization ${r.dtype} doesn't have corresponding metadata min and scale.`)}else if("float16"===r.dtype){if("float32"!==l)throw Error(`Weight ${e.name} is quantized with ${r.dtype} which only supports weights of type float32 not ${l}.`)}else throw Error(`Weight ${e.name} has unknown quantization dtype ${r.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let n=o.DTYPE_VALUE_SIZE_MAP[r.dtype],s="uint8"===r.dtype?new Uint8Array(t):new Uint16Array(t);if("float32"===l)if("uint8"===r.dtype||"uint16"===r.dtype){a=new Float32Array(s.length);for(let e=0;e<s.length;e++){let t=s[e];a[e]=t*r.scale+r.min}}else if("float16"===r.dtype)a=(function(){let e=function(){let e=e=>{let t=e<<13,r=0;for(;(8388608&t)==0;)r-=8388608,t<<=1;return(t&=-8388609)|(r+=0x38800000)},t=new Uint32Array(2048);t[0]=0;for(let r=1;r<1024;r++)t[r]=e(r);for(let e=1024;e<2048;e++)t[e]=0x38000000+(e-1024<<13);return t}(),t=function(){let e=new Uint32Array(64);e[0]=0,e[31]=0x47800000,e[32]=0x80000000,e[63]=0xc7800000;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=0x80000000+(t-32<<23);return e}(),r=function(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return a=>{let n=new ArrayBuffer(4*a.length),s=new Uint32Array(n);for(let n=0;n<a.length;n++){let o=a[n],i=e[r[o>>10]+(1023&o)]+t[o>>10];s[n]=i}return new Float32Array(n)}})()(s);else throw Error(`Unsupported quantization type ${r.dtype} for weight type float32.`);else if("int32"===l){if("uint8"!==r.dtype&&"uint16"!==r.dtype)throw Error(`Unsupported quantization type ${r.dtype} for weight type int32.`);a=new Int32Array(s.length);for(let e=0;e<s.length;e++){let t=s[e];a[e]=Math.round(t*r.scale+r.min)}}else throw Error(`Unsupported dtype in weight '${i}': ${l}`);c+=p*n}else if("string"===l){let r=(0,s.sizeFromShape)(e.shape);a=[];for(let e=0;e<r;e++){let e=new Uint32Array(t.slice(c,c+4))[0];c+=4;let r=new Uint8Array(t.slice(c,c+e));a.push(r),c+=e}}else{let e=o.DTYPE_VALUE_SIZE_MAP[l];if("float32"===l)a=new Float32Array(t);else if("int32"===l)a=new Int32Array(t);else if("bool"===l)a=new Uint8Array(t);else if("complex64"===l){a=new Float32Array(t);let e=new Float32Array(a.length/2),s=new Float32Array(a.length/2);for(let t=0;t<e.length;t++)e[t]=a[2*t],s[t]=a[2*t+1];let o=(0,n.tensor)(e,u,"float32"),i=(0,n.tensor)(s,u,"float32"),l=(0,r.complex)(o,i);return o.dispose(),i.dispose(),l}else throw Error(`Unsupported dtype in weight '${i}': ${l}`);c+=p*e}return(0,n.tensor)(a,u,l)}async function g(e,t,r){let a=new Uint8Array(t);for(;a.byteLength<r;){let{done:t,value:n}=await e.read();if(t&&null==n){let e=r-a.byteLength;throw Error(`Reader is done but ${e} bytes are still expected`)}let s=new Uint8Array(a.length+n.byteLength);s.set(a,0),s.set(new Uint8Array(n),a.length),a=s}return a.buffer}async function x(e,t){let r={},a=e.getReader(),n=new ArrayBuffer(0);for(let e of t){let t=await f(e,async(e,t)=>(n=await g(a,n,t)).slice(e,t)),o=(n=await g(a,n,t)).slice(0,t);n=n.slice(t);let i=m(e,o);if(r[e.name]=i,"webgpu"===(0,l.getBackend)()){let e=(0,l.backend)();"uploadToGPU"in e&&(0,s.sizeFromShape)(i.shape)>=(0,u.env)().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&e.uploadToGPU(i.dataId)}}return r}let y=void 0!==p&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function b(e){return y?p.byteLength(e,"utf8"):new Blob([e]).size}function v(e){if(y)return p.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let e=0,a=t.length;e<a;e++)r+=String.fromCharCode(t[e]);return btoa(r)}function T(e){if(y){let t=p.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let e=0;e<t.length;++e)r.set([t.charCodeAt(e)],e);return r.buffer}function w(e){return i.CompositeArrayBuffer.join(e)}function k(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);let t=e.split("/");return t[t.length-1]}function N(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),r}function S(e,t,r){let a={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(a.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw Error("modelJSON has weightsManifest but weightData is null");a.weightSpecs=t,a.weightData=r}return null!=e.signature&&(a.signature=e.signature),null!=e.userDefinedMetadata&&(a.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(a.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(a.initializerSignature=e.initializerSignature),a}async function E(e,t){let r,a;return null!=e.weightsManifest&&([r,a]=await t(e.weightsManifest)),S(e,r,a)}function I(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:b(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:b(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new(0,i.CompositeArrayBuffer)(e.weightData).byteLength}}function C(e){let t=[];for(let r of e)t.push(...r.weights);return t}}),h("eEMF3",function(e,t){a(e.exports,"complex",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({complex_:function(e,t){let a=(0,s.convertToTensor)(e,"real","complex"),i=(0,s.convertToTensor)(t,"imag","complex");return o.assertShapesMatch(a.shape,i.shape,`real and imag shapes, ${a.shape} and ${i.shape}, must match in call to tf.complex().`),r.ENGINE.runKernel(n.Complex,{real:a,imag:i})}})}),h("jAOpV",function(e,t){a(e.exports,"inferShape",()=>u),a(e.exports,"convertToTensor",()=>c),a(e.exports,"convertToTensorArray",()=>h);var r=d("bv3K9"),n=d("alePs"),s=d("ciqGg"),o=d("8IARK"),i=d("3SJNW"),l=d("a9Xyg"),i=d("3SJNW");function u(e,t){let r=e;if((0,l.isTypedArray)(e))return"string"===t?[]:[e.length];if((0,o.isWebGLData)(e)){let t=e.channels||"RGBA";return[e.height,e.width*t.length]}if((0,o.isWebGPUData)(e))return[e.buffer.size/(null==t?4:(0,i.bytesPerElement)(t))];if(!Array.isArray(e))return[];let a=[];for(;Array.isArray(r)||(0,l.isTypedArray)(r)&&"string"!==t;)a.push(r.length),r=r[0];return Array.isArray(e)&&(0,n.env)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function e(t,r,a){if(a=a||[],!Array.isArray(t)&&!(0,l.isTypedArray)(t))return void(0,i.assert)(0===r.length,()=>`Element arr[${a.join("][")}] is a primitive, but should be an array/TypedArray of ${r[0]} elements`);(0,i.assert)(r.length>0,()=>`Element arr[${a.join("][")}] should be a primitive, but is an array of ${t.length} elements`),(0,i.assert)(t.length===r[0],()=>`Element arr[${a.join("][")}] should have ${r[0]} elements, but has ${t.length} elements`);let n=r.slice(1);for(let r=0;r<t.length;++r)e(t[r],n,a.concat(r))}(e,a,[]),a}function p(e,t,r,a){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error(`Argument '${r}' passed to '${a}' must be ${e} tensor, but got ${t} tensor`)}}function c(e,t,a,n="numeric"){if(e instanceof(0,s.getGlobalTensorClass)())return p(n,e.dtype,t,a),e;let o=(0,i.inferDtype)(e);if("string"!==o&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),p(n,o,t,a),null==e||!(0,l.isTypedArray)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){let r=null==e?"null":e.constructor.name;throw Error(`Argument '${t}' passed to '${a}' must be a Tensor or TensorLike, but got '${r}'`)}let d=u(e,o);(0,l.isTypedArray)(e)||Array.isArray(e)||(e=[e]);let h="string"!==o?(0,l.toTypedArray)(e,o):(0,l.flatten)(e,[],!0);return r.ENGINE.makeTensor(h,d,o)}function h(e,t,r,a="numeric"){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${r} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,n)=>c(e,`${t}[${n}]`,r,a))}}),h("1zGvd",function(e,t){a(e.exports,"OP_SCOPE_SUFFIX",()=>s),a(e.exports,"op",()=>o);var r=d("bv3K9"),n=d("3SJNW");let s="__op";function o(e){let t=Object.keys(e);if(1!==t.length)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let a=t[0],o=e[a];a.endsWith("_")&&(a=a.substring(0,a.length-1));let i=(...e)=>{r.ENGINE.startScope(a);try{let t=o(...e);return(0,n.isPromise)(t)&&console.error("Cannot return a Promise inside of tidy."),r.ENGINE.endScope(t),t}catch(e){throw r.ENGINE.endScope(null),e}};return Object.defineProperty(i,"name",{value:a+=s,configurable:!0}),i}}),h("DXGru",function(e,t){a(e.exports,"tensor",()=>s);var r=d("jAOpV"),n=d("7vxE5");function s(e,t,a){let s=(0,r.inferShape)(e,a);return(0,n.makeTensor)(e,t,s,a)}}),h("7vxE5",function(e,t){a(e.exports,"makeTensor",()=>i);var r=d("bv3K9"),n=d("8IARK"),s=d("3SJNW"),o=d("a9Xyg");function i(e,t,a,i){if(null==i)i=(0,s.inferDtype)(e);else if("complex64"===i)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if((0,n.isWebGPUData)(e)||(0,n.isWebGLData)(e)){if("float32"!==i&&"int32"!==i)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${i}.`);return r.ENGINE.backend.createTensorFromGPUData(e,t||a,i)}if(!(0,o.isTypedArray)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){(0,s.assertNonNegativeIntegerDimensions)(t);let e=(0,s.sizeFromShape)(t),r=(0,s.sizeFromShape)(a);(0,s.assert)(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<a.length;++e){let r=a[e],n=e!==a.length-1||r!==(0,s.sizeFromShape)(t.slice(e));(0,s.assert)(a[e]===t[e]||!n,()=>`Error creating a new Tensor. Inferred shape (${a}) does not match the provided shape (${t}). `)}}return(0,o.isTypedArray)(e)||Array.isArray(e)||(e=[e]),t=t||a,e="string"!==i?(0,o.toTypedArray)(e,i):(0,o.flatten)(e,[],!0),r.ENGINE.makeTensor(e,t,i)}}),h("7waw0",function(e,t){a(e.exports,"DTYPE_VALUE_SIZE_MAP",()=>r);let r={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8}}),h("9kinH",function(e,t){a(e.exports,"CompositeArrayBuffer",()=>n);var r=d("a9Xyg");class n{static join(e){return new n(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,null==e||(e instanceof Array||(e=[e]),0===(e=e.map(e=>r.isTypedArray(e)?e.buffer:e)).length))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let r=0;r<e.length;r++){let a=e[r];r!==e.length-1&&a.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let n=t+a.byteLength;this.shards.push({buffer:a,start:t,end:n}),t=n}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(0===this.shards.length||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e))return new ArrayBuffer(0);let r=this.findShardForByte(e);if(-1===r)throw Error(`Could not find start shard for byte ${e}`);let a=new ArrayBuffer(t-e),n=new Uint8Array(a),s=0;for(let a=r;a<this.shards.length;a++){let r=this.shards[a],o=e+s-r.start,i=s,l=Math.min(t,r.end)-r.start,u=new Uint8Array(r.buffer,o,l-o);if(n.set(u,i),s+=u.length,t<r.end)break}return a}findShardForByte(e){if(0===this.shards.length||e<0||e>=this.byteLength)return -1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:+(e>=t.end)}if(0===t(this.shards[this.previousShardIndex]))return this.previousShardIndex;let r=function(e,t){let r=0,a=e.length;for(;r<=a;){let n=Math.floor((a-r)/2)+r,s=t(e[n]);if(0===s)return n;s<0?a=n:r=n+1}return -1}(this.shards,t);return -1===r?-1:(this.previousShardIndex=r,this.previousShardIndex)}}}),h("1c9K8",function(e,t){a(e.exports,"enableProdMode",()=>i),a(e.exports,"enableDebugMode",()=>l),a(e.exports,"disableDeprecationWarnings",()=>u),a(e.exports,"deprecationWarn",()=>p),a(e.exports,"disposeVariables",()=>c),a(e.exports,"engine",()=>h),a(e.exports,"memory",()=>f),a(e.exports,"profile",()=>m),a(e.exports,"tidy",()=>g),a(e.exports,"dispose",()=>x),a(e.exports,"keep",()=>y),a(e.exports,"time",()=>b),a(e.exports,"setBackend",()=>v),a(e.exports,"ready",()=>T),a(e.exports,"getBackend",()=>w),a(e.exports,"removeBackend",()=>k),a(e.exports,"findBackend",()=>N),a(e.exports,"findBackendFactory",()=>S),a(e.exports,"registerBackend",()=>E),a(e.exports,"backend",()=>I),a(e.exports,"setPlatform",()=>C);var r=d("bv3K9"),n=d("alePs"),s=d("ciqGg"),o=d("kyuDB");function i(){(0,n.env)().set("PROD",!0)}function l(){(0,n.env)().set("DEBUG",!0)}function u(){(0,n.env)().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function p(e){(0,n.env)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function c(){r.ENGINE.disposeVariables()}function h(){return r.ENGINE}function f(){return r.ENGINE.memory()}function m(e){return r.ENGINE.profile(e)}function g(e,t){return r.ENGINE.tidy(e,t)}function x(e){(0,o.getTensorsInContainer)(e).forEach(e=>e.dispose())}function y(e){return r.ENGINE.keep(e)}function b(e){return r.ENGINE.time(e)}function v(e){return r.ENGINE.setBackend(e)}function T(){return r.ENGINE.ready()}function w(){return r.ENGINE.backendName}function k(e){r.ENGINE.removeBackend(e)}function N(e){return r.ENGINE.findBackend(e)}function S(e){return r.ENGINE.findBackendFactory(e)}function E(e,t,a=1){return r.ENGINE.registerBackend(e,t,a)}function I(){return r.ENGINE.backend}function C(e,t){(0,n.env)().setPlatform(e,t)}(0,s.setDeprecationWarningFn)(p)}),h("N0o3H",function(e,t){"use strict";a(e.exports,"Buffer",()=>r,e=>r=e),a(e.exports,"INSPECT_MAX_BYTES",()=>n,e=>n=e);var r,n,s=d("bQMRt"),o=d("dbnIE");let i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function l(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,u.prototype),t}function u(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return h(e)}return p(e,t,r)}function p(e,t,r){if("string"==typeof e){var a=e,n=t;if(("string"!=typeof n||""===n)&&(n="utf8"),!u.isEncoding(n))throw TypeError("Unknown encoding: "+n);let r=0|x(a,n),s=l(r),o=s.write(a,n);return o!==r&&(s=s.slice(0,o)),s}if(ArrayBuffer.isView(e)){var s=e;if(L(s,Uint8Array)){let e=new Uint8Array(s);return m(e.buffer,e.byteOffset,e.byteLength)}return f(s)}if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(L(e,ArrayBuffer)||e&&L(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(L(e,SharedArrayBuffer)||e&&L(e.buffer,SharedArrayBuffer)))return m(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let o=e.valueOf&&e.valueOf();if(null!=o&&o!==e)return u.from(o,t,r);let i=function(e){if(u.isBuffer(e)){let t=0|g(e.length),r=l(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?l(0):f(e):"Buffer"===e.type&&Array.isArray(e.data)?f(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return u.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return c(e),l(e<0?0:0|g(e))}function f(e){let t=e.length<0?0:0|g(e.length),r=l(t);for(let a=0;a<t;a+=1)r[a]=255&e[a];return r}function m(e,t,r){let a;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(a=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),u.prototype),a}function g(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}r=u,n=50,u.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(e,t,r){return p(e,t,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(e,t,r){return(c(e),e<=0)?l(e):void 0!==t?"string"==typeof r?l(e).fill(t,r):l(e).fill(t):l(e)},u.allocUnsafe=function(e){return h(e)},u.allocUnsafeSlow=function(e){return h(e)};function x(e,t){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||L(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,a=arguments.length>2&&!0===arguments[2];if(!a&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return _(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(e).length;default:if(n)return a?-1:_(e).length;t=(""+t).toLowerCase(),n=!0}}function y(e,t,r){let a=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let a=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>a)&&(r=a);let n="";for(let a=t;a<r;++a)n+=G[e[a]];return n}(this,t,r);case"utf8":case"utf-8":return w(this,t,r);case"ascii":return function(e,t,r){let a="";r=Math.min(e.length,r);for(let n=t;n<r;++n)a+=String.fromCharCode(127&e[n]);return a}(this,t,r);case"latin1":case"binary":return function(e,t,r){let a="";r=Math.min(e.length,r);for(let n=t;n<r;++n)a+=String.fromCharCode(e[n]);return a}(this,t,r);case"base64":var n,o,i;return n=this,o=t,i=r,0===o&&i===n.length?s.fromByteArray(n):s.fromByteArray(n.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let a=e.slice(t,r),n="";for(let e=0;e<a.length-1;e+=2)n+=String.fromCharCode(a[e]+256*a[e+1]);return n}(this,t,r);default:if(a)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function b(e,t,r){let a=e[t];e[t]=e[r],e[r]=a}function v(e,t,r,a,n){var s;if(0===e.length)return -1;if("string"==typeof r?(a=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r*=1)!=s&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(n)return -1;else r=e.length-1;else if(r<0)if(!n)return -1;else r=0;if("string"==typeof t&&(t=u.from(t,a)),u.isBuffer(t))return 0===t.length?-1:T(e,t,r,a,n);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(n)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return T(e,[t],r,a,n)}throw TypeError("val must be string, number or Buffer")}function T(e,t,r,a,n){let s,o=1,i=e.length,l=t.length;if(void 0!==a&&("ucs2"===(a=String(a).toLowerCase())||"ucs-2"===a||"utf16le"===a||"utf-16le"===a)){if(e.length<2||t.length<2)return -1;o=2,i/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(n){let a=-1;for(s=r;s<i;s++)if(u(e,s)===u(t,-1===a?0:s-a)){if(-1===a&&(a=s),s-a+1===l)return a*o}else -1!==a&&(s-=s-a),a=-1}else for(r+l>i&&(r=i-l),s=r;s>=0;s--){let r=!0;for(let a=0;a<l;a++)if(u(e,s+a)!==u(t,a)){r=!1;break}if(r)return s}return -1}function w(e,t,r){r=Math.min(e.length,r);let a=[],n=t;for(;n<r;){let t=e[n],s=null,o=t>239?4:t>223?3:t>191?2:1;if(n+o<=r){let r,a,i,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[n+1],a=e[n+2],(192&r)==128&&(192&a)==128&&(l=(15&t)<<12|(63&r)<<6|63&a)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[n+1],a=e[n+2],i=e[n+3],(192&r)==128&&(192&a)==128&&(192&i)==128&&(l=(15&t)<<18|(63&r)<<12|(63&a)<<6|63&i)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,a.push(s>>>10&1023|55296),s=56320|1023&s),a.push(s),n+=o}var s=a;let o=s.length;if(o<=4096)return String.fromCharCode.apply(String,s);let i="",l=0;for(;l<o;)i+=String.fromCharCode.apply(String,s.slice(l,l+=4096));return i}function k(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function N(e,t,r,a,n,s){if(!u.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<s)throw RangeError('"value" argument is out of bounds');if(r+a>e.length)throw RangeError("Index out of range")}function S(e,t,r,a,n){O(t,a,n,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function E(e,t,r,a,n){O(t,a,n,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function I(e,t,r,a,n,s){if(r+a>e.length||r<0)throw RangeError("Index out of range")}function C(e,t,r,a,n){return t*=1,r>>>=0,n||I(e,t,r,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,r,a,23,4),r+4}function $(e,t,r,a,n){return t*=1,r>>>=0,n||I(e,t,r,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,r,a,52,8),r+8}u.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==u.prototype},u.compare=function(e,t){if(L(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),L(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(e)||!u.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,a=t.length;for(let n=0,s=Math.min(r,a);n<s;++n)if(e[n]!==t[n]){r=e[n],a=t[n];break}return r<a?-1:+(a<r)},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let a=u.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(L(t,Uint8Array))n+t.length>a.length?(u.isBuffer(t)||(t=u.from(t)),t.copy(a,n)):Uint8Array.prototype.set.call(a,t,n);else if(u.isBuffer(t))t.copy(a,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return a},u.byteLength=x,u.prototype._isBuffer=!0,u.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},u.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},u.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},u.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?w(this,0,e):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(e){if(!u.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){let e="",t=n;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(e,t,r,a,n){if(L(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===a&&(a=0),void 0===n&&(n=this.length),t<0||r>e.length||a<0||n>this.length)throw RangeError("out of range index");if(a>=n&&t>=r)return 0;if(a>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,a>>>=0,n>>>=0,this===e)return 0;let s=n-a,o=r-t,i=Math.min(s,o),l=this.slice(a,n),p=e.slice(t,r);for(let e=0;e<i;++e)if(l[e]!==p[e]){s=l[e],o=p[e];break}return s<o?-1:+(o<s)},u.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},u.prototype.write=function(e,t,r,a){var n,s,o,i,l,u,p,c;if(void 0===t)a="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)a=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===a&&(a="utf8")):(a=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let h=!1;for(;;)switch(a){case"hex":return function(e,t,r,a){let n;r=Number(r)||0;let s=e.length-r;a?(a=Number(a))>s&&(a=s):a=s;let o=t.length;for(a>o/2&&(a=o/2),n=0;n<a;++n){var i;let a=parseInt(t.substr(2*n,2),16);if((i=a)!=i)break;e[r+n]=a}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,s=r,z(_(e,this.length-n),this,n,s);case"ascii":case"latin1":case"binary":return o=t,i=r,z(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,i);case"base64":return l=t,u=r,z(F(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p=t,c=r,z(function(e,t){let r,a,n=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)a=(r=e.charCodeAt(s))>>8,n.push(r%256),n.push(a);return n}(e,this.length-p),this,p,c);default:if(h)throw TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),h=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,u.prototype),a},u.prototype.readUintLE=u.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let a=this[e],n=1,s=0;for(;++s<t&&(n*=256);)a+=this[e+s]*n;return a},u.prototype.readUintBE=u.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a},u.prototype.readUint8=u.prototype.readUInt8=function(e,t){return e>>>=0,t||k(e,1,this.length),this[e]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(e,t){return e>>>=0,t||k(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(e,t){return e>>>=0,t||k(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(e,t){return e>>>=0,t||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(e,t){return e>>>=0,t||k(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readBigUInt64LE=B(function(e){V(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let a=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(a)+(BigInt(n)<<BigInt(32))}),u.prototype.readBigUInt64BE=B(function(e){V(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let a=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],n=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(a)<<BigInt(32))+BigInt(n)}),u.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let a=this[e],n=1,s=0;for(;++s<t&&(n*=256);)a+=this[e+s]*n;return a>=(n*=128)&&(a-=Math.pow(2,8*t)),a},u.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let a=t,n=1,s=this[e+--a];for(;a>0&&(n*=256);)s+=this[e+--a]*n;return s>=(n*=128)&&(s-=Math.pow(2,8*t)),s},u.prototype.readInt8=function(e,t){return(e>>>=0,t||k(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},u.prototype.readInt16LE=function(e,t){e>>>=0,t||k(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},u.prototype.readInt16BE=function(e,t){e>>>=0,t||k(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},u.prototype.readInt32LE=function(e,t){return e>>>=0,t||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return e>>>=0,t||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readBigInt64LE=B(function(e){V(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),u.prototype.readBigInt64BE=B(function(e){V(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),u.prototype.readFloatLE=function(e,t){return e>>>=0,t||k(e,4,this.length),o.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return e>>>=0,t||k(e,4,this.length),o.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return e>>>=0,t||k(e,8,this.length),o.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return e>>>=0,t||k(e,8,this.length),o.read(this,e,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(e,t,r,a){if(e*=1,t>>>=0,r>>>=0,!a){let a=Math.pow(2,8*r)-1;N(this,e,t,r,a,0)}let n=1,s=0;for(this[t]=255&e;++s<r&&(n*=256);)this[t+s]=e/n&255;return t+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(e,t,r,a){if(e*=1,t>>>=0,r>>>=0,!a){let a=Math.pow(2,8*r)-1;N(this,e,t,r,a,0)}let n=r-1,s=1;for(this[t+n]=255&e;--n>=0&&(s*=256);)this[t+n]=e/s&255;return t+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,1,255,0),this[t]=255&e,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigUInt64LE=B(function(e,t=0){return S(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=B(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(e,t,r,a){if(e*=1,t>>>=0,!a){let a=Math.pow(2,8*r-1);N(this,e,t,r,a-1,-a)}let n=0,s=1,o=0;for(this[t]=255&e;++n<r&&(s*=256);)e<0&&0===o&&0!==this[t+n-1]&&(o=1),this[t+n]=(e/s|0)-o&255;return t+r},u.prototype.writeIntBE=function(e,t,r,a){if(e*=1,t>>>=0,!a){let a=Math.pow(2,8*r-1);N(this,e,t,r,a-1,-a)}let n=r-1,s=1,o=0;for(this[t+n]=255&e;--n>=0&&(s*=256);)e<0&&0===o&&0!==this[t+n+1]&&(o=1),this[t+n]=(e/s|0)-o&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},u.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},u.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},u.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||N(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},u.prototype.writeBigInt64LE=B(function(e,t=0){return S(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=B(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeFloatLE=function(e,t,r){return C(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return C(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return $(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return $(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,a){if(!u.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),a||0===a||(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(a<0)throw RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);let n=a-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),n},u.prototype.fill=function(e,t,r,a){let n;if("string"==typeof e){if("string"==typeof t?(a=t,t=0,r=this.length):"string"==typeof r&&(a=r,r=this.length),void 0!==a&&"string"!=typeof a)throw TypeError("encoding must be a string");if("string"==typeof a&&!u.isEncoding(a))throw TypeError("Unknown encoding: "+a);if(1===e.length){let t=e.charCodeAt(0);("utf8"===a&&t<128||"latin1"===a)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let s=u.isBuffer(e)?e:u.from(e,a),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=s[n%o]}return this};let A={};function R(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function M(e){let t="",r=e.length,a=+("-"===e[0]);for(;r>=a+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function O(e,t,r,a,n,s){if(e>r||e<t){let a,n="bigint"==typeof t?"n":"";throw a=s>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(s+1)*8}${n}`:`>= -(2${n} ** ${(s+1)*8-1}${n}) and < 2 ** ${(s+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new A.ERR_OUT_OF_RANGE("value",a,e)}V(n,"offset"),(void 0===a[n]||void 0===a[n+s])&&P(n,a.length-(s+1))}function V(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function P(e,t,r){if(Math.floor(e)!==e)throw V(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}R("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),R("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),R("ERR_OUT_OF_RANGE",function(e,t,r){let a=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?n=M(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=M(n)),n+="n"),a+=` It must be ${t}. Received ${n}`},RangeError);let D=/[^+/0-9A-Za-z-_]/g;function _(e,t){let r;t=t||1/0;let a=e.length,n=null,s=[];for(let o=0;o<a;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!n){if(r>56319||o+1===a){(t-=3)>-1&&s.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&s.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function F(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(D,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function z(e,t,r,a){let n;for(n=0;n<a&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function L(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let G=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let a=16*r;for(let n=0;n<16;++n)t[a+n]=e[r]+e[n]}return t}();function B(e){return"undefined"==typeof BigInt?W:e}function W(){throw Error("BigInt not supported")}}),h("bQMRt",function(e,t){"use strict";a(e.exports,"toByteArray",()=>r,e=>r=e),a(e.exports,"fromByteArray",()=>n,e=>n=e);for(var r=function(e){var t,r,a=c(e),n=a[0],s=a[1],l=new i((n+s)*3/4-s),u=0,p=s>0?n-4:n;for(r=0;r<p;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===s&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},n=function(e){for(var t,r=e.length,a=r%3,n=[],o=0,i=r-a;o<i;o+=16383)n.push(function(e,t,r){for(var a,n=[],o=t;o<r;o+=3)a=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]),n.push(s[a>>18&63]+s[a>>12&63]+s[a>>6&63]+s[63&a]);return n.join("")}(e,o,o+16383>i?i:o+16383));return 1===a?n.push(s[(t=e[r-1])>>2]+s[t<<4&63]+"=="):2===a&&n.push(s[(t=(e[r-2]<<8)+e[r-1])>>10]+s[t>>4&63]+s[t<<2&63]+"="),n.join("")},s=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,p=l.length;u<p;++u)s[u]=l[u],o[l.charCodeAt(u)]=u;function c(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var a=r===t?0:4-r%4;return[r,a]}o[45]=62,o[95]=63}),h("dbnIE",function(e,t){var r,n;a(e.exports,"read",()=>r,e=>r=e),a(e.exports,"write",()=>n,e=>n=e),r=function(e,t,r,a,n){var s,o,i=8*n-a-1,l=(1<<i)-1,u=l>>1,p=-7,c=r?n-1:0,d=r?-1:1,h=e[t+c];for(c+=d,s=h&(1<<-p)-1,h>>=-p,p+=i;p>0;s=256*s+e[t+c],c+=d,p-=8);for(o=s&(1<<-p)-1,s>>=-p,p+=a;p>0;o=256*o+e[t+c],c+=d,p-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,a),s-=u}return(h?-1:1)*o*Math.pow(2,s-a)},n=function(e,t,r,a,n,s){var o,i,l,u=8*s-n-1,p=(1<<u)-1,c=p>>1,d=5960464477539062e-23*(23===n),h=a?0:s-1,f=a?1:-1,m=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(i=+!!isNaN(t),o=p):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=d/l:t+=d*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=p?(i=0,o=p):o+c>=1?(i=(t*l-1)*Math.pow(2,n),o+=c):(i=t*Math.pow(2,c-1)*Math.pow(2,n),o=0));n>=8;e[r+h]=255&i,h+=f,i/=256,n-=8);for(o=o<<n|i,u+=n;u>0;e[r+h]=255&o,h+=f,o/=256,u-=8);e[r+h-f]|=128*m}}),h("cKITo",function(e,t){a(e.exports,"IORouterRegistry",()=>r),a(e.exports,"registerSaveRouter",()=>n),a(e.exports,"registerLoadRouter",()=>s),a(e.exports,"getSaveHandlers",()=>o),a(e.exports,"getLoadHandlers",()=>i);class r{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==r.instance&&(r.instance=new r),r.instance}static registerSaveRouter(e){r.getInstance().saveRouters.push(e)}static registerLoadRouter(e){r.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return r.getHandlers(e,"save")}static getLoadHandlers(e,t){return r.getHandlers(e,"load",t)}static getHandlers(e,t,a){let n=[];return("load"===t?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(t=>{let r=t(e,a);null!==r&&n.push(r)}),n}}let n=e=>r.registerSaveRouter(e),s=e=>r.registerLoadRouter(e),o=e=>r.getSaveHandlers(e),i=(e,t)=>r.getLoadHandlers(e,t)}),h("9aF7M",function(e,t){a(e.exports,"BrowserLocalStorage",()=>h),a(e.exports,"BrowserLocalStorageManager",()=>m),d("3kUb9");var r=d("alePs"),n=d("3SJNW"),s=d("eqf4o"),o=d("9kinH"),i=d("cKITo");let l="tensorflowjs_models",u="info";function p(e){return{info:[l,e,u].join("/"),topology:[l,e,"model_topology"].join("/"),weightSpecs:[l,e,"weight_specs"].join("/"),weightData:[l,e,"weight_data"].join("/"),modelMetadata:[l,e,"model_metadata"].join("/")}}function c(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}class h{constructor(e){if(!(0,r.env)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=p(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),a=(0,s.getModelArtifactsInfoForJSON)(e),n=o.CompositeArrayBuffer.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,(0,s.arrayBufferToBase64String)(n));let o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:a}}catch(e){throw c(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${a.modelTopologyBytes}, weightSpecsBytes=${a.weightSpecsBytes}, weightDataBytes=${a.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(null==r)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=r;let a=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==a)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=a;let n=this.LS.getItem(this.keys.modelMetadata);if(null!=n){let e=JSON.parse(n);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}let o=this.LS.getItem(this.keys.weightData);if(null==o)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=(0,s.base64StringToArrayBuffer)(o),t}}h.URL_SCHEME="localstorage://";let f=e=>{var t;return(0,r.env)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(h.URL_SCHEME)?(t=e.slice(h.URL_SCHEME.length),new h(t)):null};i.IORouterRegistry.registerSaveRouter(f),i.IORouterRegistry.registerLoadRouter(f);class m{constructor(){(0,n.assert)((0,r.env)().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),(0,n.assert)("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=l+"/",r="/"+u;for(let a=0;a<this.LS.length;++a){let n=this.LS.key(a);n.startsWith(t)&&n.endsWith(r)&&(e[function(e){let t=e.split("/");if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join("/")}(n)]=JSON.parse(this.LS.getItem(n)))}return e}async removeModel(e){var t;let r=p(e=(t=e).startsWith(h.URL_SCHEME)?t.slice(h.URL_SCHEME.length):t);if(null==this.LS.getItem(r.info))throw Error(`Cannot find model at path '${e}'`);let a=JSON.parse(this.LS.getItem(r.info));return c(r),a}}}),h("l5j1O",function(e,t){a(e.exports,"ModelStoreManagerRegistry",()=>s),a(e.exports,"listModels",()=>l),a(e.exports,"removeModel",()=>u),a(e.exports,"copyModel",()=>p),a(e.exports,"moveModel",()=>c);var r=d("3SJNW"),n=d("cKITo");class s{constructor(){this.managers={}}static getInstance(){return null==s.instance&&(s.instance=new s),s.instance}static registerManager(e,t){(0,r.assert)(null!=e,()=>"scheme must not be undefined or null."),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),(0,r.assert)(e.length>0,()=>"scheme must not be an empty string.");let a=s.getInstance();(0,r.assert)(null==a.managers[e],()=>`A model store manager is already registered for scheme '${e}'.`),a.managers[e]=t}static getManager(e){let t=s.getInstance().managers[e];if(null==t)throw Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(s.getInstance().managers)}}function o(e){if(-1===e.indexOf("://"))throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${s.getSchemes().join(",")}`);return{scheme:e.split("://")[0],path:e.split("://")[1]}}async function i(e,t,a=!1){(0,r.assert)(e!==t,()=>`Old path and new path are the same: '${e}'`);let l=n.IORouterRegistry.getLoadHandlers(e);(0,r.assert)(l.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),(0,r.assert)(l.length<2,()=>`Copying failed because more than one (${l.length}) load handlers for source URL ${e}.`);let u=l[0],p=n.IORouterRegistry.getSaveHandlers(t);(0,r.assert)(p.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),(0,r.assert)(p.length<2,()=>`Copying failed because more than one (${l.length}) save handlers for destination URL ${t}.`);let c=p[0],d=o(e).scheme,h=o(e).path,f=d===o(e).scheme,m=await u.load();a&&f&&await s.getManager(d).removeModel(h);let g=await c.save(m);return a&&!f&&await s.getManager(d).removeModel(h),g.modelArtifactsInfo}async function l(){let e=s.getSchemes(),t={};for(let r of e){let e=await s.getManager(r).listModels();for(let a in e)t[r+"://"+a]=e[a]}return t}async function u(e){let t=o(e);return s.getManager(t.scheme).removeModel(t.path)}async function p(e,t){return i(e,t,!1)}async function c(e,t){return i(e,t,!0)}}),h("lHprL",function(e,t){let r;var a=d("alePs"),n=d("ibaza");let s={importFetch:()=>d("foUwZ")};(0,a.env)().get("IS_NODE")&&!(0,a.env)().get("IS_BROWSER")&&(0,a.env)().setPlatform("node",new class{constructor(){this.util=d("foUwZ"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=(0,a.env)().global.fetch?(0,a.env)().global.fetch(e,t):(null==r&&(r=s.importFetch()),r(e,t))}now(){let e=n.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}})}),h("hPfZs",function(e,t){a(e.exports,"buffer",()=>s);var r=d("ciqGg"),n=d("3SJNW");function s(e,t="float32",a){return t=t||"float32",n.assertNonNegativeIntegerDimensions(e),new(0,r.TensorBuffer)(e,t,a)}}),h("bVaGH",function(e,t){a(e.exports,"cast",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({cast_:function(e,t){let a=(0,s.convertToTensor)(e,"x","cast");if(!o.isValidDtype(t))throw Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==a.dtype||"string"!==t&&"string"===a.dtype)throw Error("Only strings can be casted to strings");return r.ENGINE.runKernel(n.Cast,{x:a},{dtype:t})}})}),h("gtIz2",function(e,t){a(e.exports,"clone",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({clone_:function(e){let t=(0,s.convertToTensor)(e,"x","clone","string_or_numeric");return r.ENGINE.runKernel(n.Identity,{x:t})}})}),h("3NELQ",function(e,t){a(e.exports,"print",()=>r);function r(e,t=!1){console.log(e.toString(t))}}),h("6OjBO",function(e,t){a(e.exports,"registerOptimizers",()=>h);var r=d("6ZsXp"),n=d("hHpD2"),s=d("9zrfQ"),o=d("441Lv"),i=d("c0RPC"),l=d("gYhVX"),u=d("1i8wr"),p=d("fqv1v");let c=[r.AdadeltaOptimizer,n.AdagradOptimizer,s.AdamOptimizer,o.AdamaxOptimizer,i.MomentumOptimizer,l.RMSPropOptimizer,u.SGDOptimizer];function h(){for(let e of c)(0,p.registerClass)(e)}}),h("6ZsXp",function(e,t){a(e.exports,"AdadeltaOptimizer",()=>h);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("auyfQ"),i=d("gjmji"),l=d("bwdHy"),u=d("koTLO"),p=d("jdxSj"),c=d("bsu9P");class h extends c.Optimizer{static get className(){return"Adadelta"}constructor(e,t,a=null){super(),this.learningRate=e,this.rho=t,this.epsilon=a,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==a&&(this.epsilon=r.ENGINE.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,a)=>{let c=r.ENGINE.registeredVariables[t];null==this.accumulatedGrads[a]&&(this.accumulatedGrads[a]={originalName:`${t}/accum_grad`,variable:(0,n.tidy)(()=>(0,p.zerosLike)(c).variable(!1))}),null==this.accumulatedUpdates[a]&&(this.accumulatedUpdates[a]={originalName:`${t}/accum_var`,variable:(0,n.tidy)(()=>(0,p.zerosLike)(c).variable(!1))});let d=Array.isArray(e)?e[a].tensor:e[t];if(null==d)return;let h=this.accumulatedGrads[a].variable,f=this.accumulatedUpdates[a].variable;(0,n.tidy)(()=>{let e=(0,s.add)((0,i.mul)(h,this.rho),(0,i.mul)((0,u.square)(d),1-this.rho)),t=(0,i.mul)((0,o.div)((0,l.sqrt)((0,s.add)(f,this.epsilon)),(0,l.sqrt)((0,s.add)(h,this.epsilon))),d),r=(0,s.add)((0,i.mul)(f,this.rho),(0,i.mul)((0,u.square)(t),1-this.rho));h.assign(e),f.assign(r);let a=(0,s.add)((0,i.mul)(t,-this.learningRate),c);c.assign(a)})}),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&((0,n.dispose)(this.accumulatedGrads.map(e=>e.variable)),(0,n.dispose)(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){let t=(e=await this.extractIterations(e)).length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}}),h("iY58J",function(e,t){a(e.exports,"add",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({add_:function(e,t){let a=(0,o.convertToTensor)(e,"a","add"),i=(0,o.convertToTensor)(t,"b","add");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Add,l)}})}),h("auyfQ",function(e,t){a(e.exports,"div",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("c4lR7");let l=(0,d("1zGvd").op)({div_:function(e,t){let a=(0,o.convertToTensor)(e,"a","div"),l=(0,o.convertToTensor)(t,"b","div");if([a,l]=(0,s.makeTypesMatch)(a,l),"int32"===a.dtype&&"int32"===l.dtype)return(0,i.floorDiv)(a,l);let u={a:a,b:l};return r.ENGINE.runKernel(n.RealDiv,u,{})}})}),h("c4lR7",function(e,t){a(e.exports,"floorDiv",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({floorDiv_:function(e,t){let a=(0,o.convertToTensor)(e,"a","floorDiv"),i=(0,o.convertToTensor)(t,"b","floorDiv");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.FloorDiv,l)}})}),h("gjmji",function(e,t){a(e.exports,"mul",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({mul_:function(e,t){let a=(0,o.convertToTensor)(e,"a","mul"),i=(0,o.convertToTensor)(t,"b","mul");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Multiply,l)}})}),h("bwdHy",function(e,t){a(e.exports,"sqrt",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sqrt_:function(e){let t=(0,s.convertToTensor)(e,"x","sqrt","float32");return r.ENGINE.runKernel(n.Sqrt,{x:t})}})}),h("koTLO",function(e,t){a(e.exports,"square",()=>s);var r=d("bv3K9"),n=d("jAOpV");let s=(0,d("1zGvd").op)({square_:function(e){let t=(0,n.convertToTensor)(e,"x","square");return r.ENGINE.runKernel("Square",{x:t},{})}})}),h("jdxSj",function(e,t){a(e.exports,"zerosLike",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({zerosLike_:function(e){let t=(0,s.convertToTensor)(e,"x","zerosLike");return r.ENGINE.runKernel(n.ZerosLike,{x:t})}})}),h("bsu9P",function(e,t){a(e.exports,"Optimizer",()=>i);var r=d("1c9K8"),n=d("fYbCG"),s=d("3tgJG"),o=d("fqv1v");class i extends o.Serializable{minimize(e,t=!1,a){let{value:n,grads:s}=this.computeGradients(e,a);if(null!=a){let e=a.map(e=>({name:e.name,tensor:s[e.name]}));this.applyGradients(e)}else this.applyGradients(s);return((0,r.dispose)(s),t)?n:(n.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return(0,n.variableGrads)(e,t)}dispose(){null!=this.iterations_&&(0,r.dispose)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:(0,s.scalar)(this.iterations_,"int32")}}async getWeights(){throw Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(i,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients})}),h("fYbCG",function(e,t){a(e.exports,"grad",()=>i),a(e.exports,"grads",()=>l),a(e.exports,"valueAndGrad",()=>u),a(e.exports,"valueAndGrads",()=>p),a(e.exports,"variableGrads",()=>c),a(e.exports,"customGrad",()=>h);var r=d("bv3K9"),n=d("ciqGg"),s=d("jAOpV"),o=d("3SJNW");function i(e){return o.assert(o.isFunction(e),()=>"The f passed in grad(f) must be a function"),(t,a)=>{let n=(0,s.convertToTensor)(t,"x","tf.grad","string_or_numeric"),i=null!=a?(0,s.convertToTensor)(a,"dy","tf.grad"):null;return r.ENGINE.tidy(()=>{let{value:t,grads:a}=r.ENGINE.gradients(()=>e(n),[n],i);return null!=i&&o.assertShapesMatch(t.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),f(a),a[0]})}}function l(e){return o.assert(o.isFunction(e),()=>"The f passed in grads(f) must be a function"),(t,a)=>{o.assert(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");let n=(0,s.convertToTensorArray)(t,"args","tf.grads","string_or_numeric"),i=null!=a?(0,s.convertToTensor)(a,"dy","tf.grads"):null;return r.ENGINE.tidy(()=>{let{value:t,grads:a}=r.ENGINE.gradients(()=>e(...n),n,i);return null!=i&&o.assertShapesMatch(t.shape,i.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),f(a),a})}}function u(e){return o.assert(o.isFunction(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,a)=>{o.assert(t instanceof n.Tensor,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),o.assert(null==a||a instanceof n.Tensor,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");let{grads:s,value:i}=r.ENGINE.gradients(()=>e(t),[t],a);return f(s),{grad:s[0],value:i}}}function p(e){return o.assert(o.isFunction(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,a)=>{o.assert(Array.isArray(t)&&t.every(e=>e instanceof n.Tensor),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),o.assert(null==a||a instanceof n.Tensor,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");let s=r.ENGINE.gradients(()=>e(...t),t,a);return null!=a&&o.assertShapesMatch(s.value.shape,a.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),f(s.grads),s}}function c(e,t){o.assert(o.isFunction(e),()=>"The f passed in variableGrads(f) must be a function"),o.assert(null==t||Array.isArray(t)&&t.every(e=>e instanceof n.Variable),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let a=null!=t;if(!a)for(let e in t=[],r.ENGINE.registeredVariables)t.push(r.ENGINE.registeredVariables[e]);let s=a?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),o.assert(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:l,grads:u}=r.ENGINE.gradients(e,t,null,!0);o.assert(u.some(e=>null!=e),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),o.assert(0===l.rank,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${l.rank} tensor`);let p={};return t.forEach((e,t)=>{null!=u[t]&&(p[e.name]=u[t])}),null!=s&&s.forEach(e=>p[e.name]=null),{value:l,grads:p}}function h(e){return r.ENGINE.customGrad(e)}function f(e){if(e.filter(e=>null==e).length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}}),h("3tgJG",function(e,t){a(e.exports,"scalar",()=>s);var r=d("a9Xyg"),n=d("7vxE5");function s(e,t){if(((0,r.isTypedArray)(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&(0,r.isTypedArray)(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return(0,n.makeTensor)(e,[],[],t)}}),h("fqv1v",function(e,t){a(e.exports,"Serializable",()=>o),a(e.exports,"SerializationMap",()=>i),a(e.exports,"registerClass",()=>l),a(e.exports,"getRegisteredName",()=>u);var r=d("3SJNW");let n=new Map,s=new Map;class o{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class i{constructor(){this.classNameMap={}}static getMap(){return null==i.instance&&(i.instance=new i),i.instance}static register(e){i.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function l(e,t,a){(0,r.assert)(null!=e.className,()=>"Class being registered does not have the static className property defined."),(0,r.assert)("string"==typeof e.className,()=>"className is required to be a string, but got type "+typeof e.className),(0,r.assert)(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),void 0===t&&(t="Custom"),void 0===a&&(a=e.className);let o=t+">"+a;return i.register(e),n.set(o,e),s.set(e,o),e}function u(e){return s.has(e)?s.get(e):e.className}}),h("hHpD2",function(e,t){a(e.exports,"AdagradOptimizer",()=>h);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("auyfQ"),i=d("3Nhg4"),l=d("gjmji"),u=d("bwdHy"),p=d("koTLO"),c=d("bsu9P");class h extends c.Optimizer{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,a)=>{let c=r.ENGINE.registeredVariables[t];null==this.accumulatedGrads[a]&&(this.accumulatedGrads[a]={originalName:`${t}/accumulator`,variable:(0,n.tidy)(()=>(0,i.fill)(c.shape,this.initialAccumulatorValue).variable(!1))});let d=Array.isArray(e)?e[a].tensor:e[t];if(null==d)return;let h=this.accumulatedGrads[a].variable;(0,n.tidy)(()=>{let e=(0,s.add)(h,(0,p.square)(d));h.assign(e);let t=(0,s.add)((0,l.mul)((0,o.div)(d,(0,u.sqrt)((0,s.add)(e,r.ENGINE.backend.epsilon()))),-this.learningRate),c);c.assign(t)})}),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&(0,n.dispose)(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}}),h("3Nhg4",function(e,t){a(e.exports,"fill",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=(d("3SJNW"),d("3SJNW"));function o(e,t,a){(0,s.assertNonNegativeIntegerDimensions)(e),a=a||(0,s.inferDtype)(t);let o={shape:e,value:t,dtype:a};return r.ENGINE.runKernel(n.Fill,{},o)}}),h("9zrfQ",function(e,t){a(e.exports,"AdamOptimizer",()=>g);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("auyfQ"),i=d("gjmji"),l=d("fKPt4"),u=d("3tgJG"),p=d("bwdHy"),c=d("koTLO"),h=d("5gdOH"),f=d("jdxSj"),m=d("bsu9P");class g extends m.Optimizer{static get className(){return"Adam"}constructor(e,t,a,s=null){super(),this.learningRate=e,this.beta1=t,this.beta2=a,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],(0,n.tidy)(()=>{this.accBeta1=(0,u.scalar)(t).variable(),this.accBeta2=(0,u.scalar)(a).variable()}),null==s&&(this.epsilon=r.ENGINE.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);(0,n.tidy)(()=>{let a=(0,h.sub)(1,this.accBeta1),l=(0,h.sub)(1,this.accBeta2);t.forEach((t,u)=>{let d=r.ENGINE.registeredVariables[t];null==this.accumulatedFirstMoment[u]&&(this.accumulatedFirstMoment[u]={originalName:`${t}/m`,variable:(0,n.tidy)(()=>(0,f.zerosLike)(d).variable(!1))}),null==this.accumulatedSecondMoment[u]&&(this.accumulatedSecondMoment[u]={originalName:`${t}/v`,variable:(0,n.tidy)(()=>(0,f.zerosLike)(d).variable(!1))});let h=Array.isArray(e)?e[u].tensor:e[t];if(null==h)return;let m=this.accumulatedFirstMoment[u].variable,g=this.accumulatedSecondMoment[u].variable,x=(0,s.add)((0,i.mul)(m,this.beta1),(0,i.mul)(h,1-this.beta1)),y=(0,s.add)((0,i.mul)(g,this.beta2),(0,i.mul)((0,c.square)(h),1-this.beta2)),b=(0,o.div)(x,a),v=(0,o.div)(y,l);m.assign(x),g.assign(y);let T=(0,s.add)((0,i.mul)((0,o.div)(b,(0,s.add)((0,p.sqrt)(v),this.epsilon)),-this.learningRate),d);d.assign(T)}),this.accBeta1.assign((0,i.mul)(this.accBeta1,this.beta1)),this.accBeta2.assign((0,i.mul)(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&(0,n.dispose)(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedSecondMoment&&(0,n.dispose)(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),(0,n.tidy)(()=>{this.accBeta1.assign((0,l.pow)(this.beta1,this.iterations_+1)),this.accBeta2.assign((0,l.pow)(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}}),h("fKPt4",function(e,t){a(e.exports,"pow",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({pow_:function(e,t){let a=(0,o.convertToTensor)(e,"base","pow"),i=(0,o.convertToTensor)(t,"exp","pow");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Pow,l)}})}),h("5gdOH",function(e,t){a(e.exports,"sub",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({sub_:function(e,t){let a=(0,o.convertToTensor)(e,"a","sub"),i=(0,o.convertToTensor)(t,"b","sub");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Sub,l)}})}),h("441Lv",function(e,t){a(e.exports,"AdamaxOptimizer",()=>m);var r=d("bv3K9"),n=d("1c9K8"),s=d("dvCKL"),o=d("iY58J"),i=d("auyfQ"),l=d("8V4MS"),u=d("gjmji"),p=d("3tgJG"),c=d("5gdOH"),h=d("jdxSj"),f=d("bsu9P");class m extends f.Optimizer{static get className(){return"Adamax"}constructor(e,t,a,s=null,o=0){super(),this.learningRate=e,this.beta1=t,this.beta2=a,this.epsilon=s,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],(0,n.tidy)(()=>{this.iteration=(0,p.scalar)(0).variable(),this.accBeta1=(0,p.scalar)(t).variable()}),null==s&&(this.epsilon=r.ENGINE.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);(0,n.tidy)(()=>{let a=(0,c.sub)(1,this.accBeta1),n=(0,i.div)(-this.learningRate,(0,o.add)((0,u.mul)(this.iteration,this.decay),1));t.forEach((t,p)=>{let c=r.ENGINE.registeredVariables[t];null==this.accumulatedFirstMoment[p]&&(this.accumulatedFirstMoment[p]={originalName:`${t}/m`,variable:(0,h.zerosLike)(c).variable(!1)}),null==this.accumulatedWeightedInfNorm[p]&&(this.accumulatedWeightedInfNorm[p]={originalName:`${t}/v`,variable:(0,h.zerosLike)(c).variable(!1)});let d=Array.isArray(e)?e[p].tensor:e[t];if(null==d)return;let f=this.accumulatedFirstMoment[p].variable,m=this.accumulatedWeightedInfNorm[p].variable,g=(0,o.add)((0,u.mul)(f,this.beta1),(0,u.mul)(d,1-this.beta1)),x=(0,u.mul)(m,this.beta2),y=(0,s.abs)(d),b=(0,l.maximum)(x,y);f.assign(g),m.assign(b);let v=(0,o.add)((0,u.mul)((0,i.div)(n,a),(0,i.div)(g,(0,o.add)(b,this.epsilon))),c);c.assign(v)}),this.iteration.assign((0,o.add)(this.iteration,1)),this.accBeta1.assign((0,u.mul)(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&(0,n.dispose)(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedWeightedInfNorm&&(0,n.dispose)(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}}),h("dvCKL",function(e,t){a(e.exports,"abs",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({abs_:function(e){let t=(0,s.convertToTensor)(e,"x","abs");return"complex64"===t.dtype?r.ENGINE.runKernel(n.ComplexAbs,{x:t}):r.ENGINE.runKernel(n.Abs,{x:t})}})}),h("8V4MS",function(e,t){a(e.exports,"maximum",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ"),l=d("bVaGH");let u=(0,d("1zGvd").op)({maximum_:function(e,t){let a=(0,o.convertToTensor)(e,"a","maximum"),u=(0,o.convertToTensor)(t,"b","maximum");[a,u]=(0,s.makeTypesMatch)(a,u),"bool"===a.dtype&&(a=(0,l.cast)(a,"int32"),u=(0,l.cast)(u,"int32")),(0,i.assertAndGetBroadcastShape)(a.shape,u.shape);let p={a:a,b:u};return r.ENGINE.runKernel(n.Maximum,p)}})}),h("eCyVZ",function(e,t){function r(e,t){let r=e.length,a=[];for(let n=0;n<r;n++){let s=r-1-n,o=e[s]||1;(t[t.length-1-n]||1)>1&&1===o&&a.unshift(s)}return a}function n(e,t){let r=[];for(let a=0;a<t.length;a++){let n=e[e.length-a-1],s=t.length-a-1,o=t[s];(null==n||1===n&&o>1)&&r.unshift(s)}return r}function s(e,t){let r=Math.max(e.length,t.length),a=Array(r);for(let n=0;n<r;n++){let s=e[e.length-n-1];null==s&&(s=1);let o=t[t.length-n-1];if(null==o&&(o=1),1===s)a[r-n-1]=o;else if(1===o)a[r-n-1]=s;else if(s!==o)throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`);else a[r-n-1]=s}return a}a(e.exports,"getBroadcastDims",()=>r),a(e.exports,"getReductionAxes",()=>n),a(e.exports,"assertAndGetBroadcastShape",()=>s)}),h("c0RPC",function(e,t){a(e.exports,"MomentumOptimizer",()=>p);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("gjmji"),i=d("3tgJG"),l=d("jdxSj"),u=d("1i8wr");class p extends u.SGDOptimizer{static get className(){return"Momentum"}constructor(e,t,r=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=r,this.accumulations=[],this.m=(0,i.scalar)(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,a)=>{let i=r.ENGINE.registeredVariables[t];null==this.accumulations[a]&&(this.accumulations[a]={originalName:`${t}/momentum`,variable:(0,n.tidy)(()=>(0,l.zerosLike)(i).variable(!1))});let u=this.accumulations[a].variable,p=Array.isArray(e)?e[a].tensor:e[t];null!=p&&(0,n.tidy)(()=>{let e,t=(0,s.add)((0,o.mul)(this.m,u),p);e=this.useNesterov?(0,s.add)((0,o.mul)(this.c,(0,s.add)(p,(0,o.mul)(t,this.m))),i):(0,s.add)((0,o.mul)(this.c,t),i),u.assign(t),i.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&(0,n.dispose)(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}}),h("1i8wr",function(e,t){a(e.exports,"SGDOptimizer",()=>u);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("gjmji"),i=d("3tgJG"),l=d("bsu9P");class u extends l.Optimizer{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,a)=>{let i=Array.isArray(e)?e[a].tensor:e[t];if(null==i)return;let l=r.ENGINE.registeredVariables[t];(0,n.tidy)(()=>{let e=(0,s.add)((0,o.mul)(this.c,i),l);l.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=(0,n.keep)((0,i.scalar)(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(0!==(e=await this.extractIterations(e)).length)throw Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}}),h("gYhVX",function(e,t){a(e.exports,"RMSPropOptimizer",()=>f);var r=d("bv3K9"),n=d("1c9K8"),s=d("iY58J"),o=d("auyfQ"),i=d("gjmji"),l=d("bwdHy"),u=d("koTLO"),p=d("5gdOH"),c=d("jdxSj"),h=d("bsu9P");class f extends h.Optimizer{static get className(){return"RMSProp"}constructor(e,t=.9,a=0,n=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=a,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,null==n&&(this.epsilon=r.ENGINE.backend.epsilon()),null==e)throw Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,a)=>{let d=r.ENGINE.registeredVariables[t];null==this.accumulatedMeanSquares[a]&&(this.accumulatedMeanSquares[a]={originalName:`${t}/rms`,variable:(0,n.tidy)(()=>(0,c.zerosLike)(d).variable(!1))}),null==this.accumulatedMoments[a]&&(this.accumulatedMoments[a]={originalName:`${t}/momentum`,variable:(0,n.tidy)(()=>(0,c.zerosLike)(d).variable(!1))}),null==this.accumulatedMeanGrads[a]&&this.centered&&(this.accumulatedMeanGrads[a]={originalName:`${t}/mg`,variable:(0,n.tidy)(()=>(0,c.zerosLike)(d).variable(!1))});let h=Array.isArray(e)?e[a].tensor:e[t];if(null==h)return;let f=this.accumulatedMeanSquares[a].variable,m=this.accumulatedMoments[a].variable;(0,n.tidy)(()=>{let e=(0,s.add)((0,i.mul)(f,this.decay),(0,i.mul)((0,u.square)(h),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[a].variable,r=(0,s.add)((0,i.mul)(t,this.decay),(0,i.mul)(h,1-this.decay)),n=(0,o.div)((0,i.mul)(h,this.learningRate),(0,l.sqrt)((0,p.sub)(e,(0,s.add)((0,u.square)(r),this.epsilon)))),c=(0,s.add)((0,i.mul)(m,this.momentum),n);f.assign(e),t.assign(r),m.assign(c);let g=(0,p.sub)(d,c);d.assign(g)}else{let e=(0,s.add)((0,i.mul)(f,this.decay),(0,i.mul)((0,u.square)(h),1-this.decay)),t=(0,s.add)((0,i.mul)(m,this.momentum),(0,o.div)((0,i.mul)(h,this.learningRate),(0,l.sqrt)((0,s.add)(e,this.epsilon))));f.assign(e),m.assign(t);let r=(0,p.sub)(d,t);d.assign(r)}})}),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&(0,n.dispose)(this.accumulatedMeanSquares.map(e=>e.variable)),null!=this.accumulatedMeanGrads&&this.centered&&(0,n.dispose)(this.accumulatedMeanGrads.map(e=>e.variable)),null!=this.accumulatedMoments&&(0,n.dispose)(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}}),h("6ZR38",function(e,t){a(e.exports,"AdadeltaOptimizer",()=>d("6ZsXp").AdadeltaOptimizer),a(e.exports,"AdagradOptimizer",()=>d("hHpD2").AdagradOptimizer),a(e.exports,"AdamOptimizer",()=>d("9zrfQ").AdamOptimizer),a(e.exports,"AdamaxOptimizer",()=>d("441Lv").AdamaxOptimizer),a(e.exports,"MomentumOptimizer",()=>d("c0RPC").MomentumOptimizer),a(e.exports,"Optimizer",()=>d("bsu9P").Optimizer),a(e.exports,"OptimizerConstructors",()=>d("cmAqQ").OptimizerConstructors),a(e.exports,"RMSPropOptimizer",()=>d("gYhVX").RMSPropOptimizer),a(e.exports,"SGDOptimizer",()=>d("1i8wr").SGDOptimizer),a(e.exports,"Tensor",()=>d("ciqGg").Tensor),a(e.exports,"TensorBuffer",()=>d("ciqGg").TensorBuffer),a(e.exports,"Variable",()=>d("ciqGg").Variable),a(e.exports,"Rank",()=>d("8IARK").Rank),a(e.exports,"sumOutType",()=>d("8IARK").sumOutType),a(e.exports,"upcastType",()=>d("8IARK").upcastType),a(e.exports,"Reduction",()=>d("bbwI4").Reduction),a(e.exports,"customGrad",()=>d("fYbCG").customGrad),a(e.exports,"grad",()=>d("fYbCG").grad),a(e.exports,"grads",()=>d("fYbCG").grads),a(e.exports,"valueAndGrad",()=>d("fYbCG").valueAndGrad),a(e.exports,"valueAndGrads",()=>d("fYbCG").valueAndGrads),a(e.exports,"variableGrads",()=>d("fYbCG").variableGrads),a(e.exports,"Environment",()=>d("alePs").Environment),a(e.exports,"env",()=>d("alePs").env),a(e.exports,"ENV",()=>d("alePs").ENV),a(e.exports,"version_core",()=>d("jjNEG").version),a(e.exports,"nextFrame",()=>d("gsLG9").nextFrame),a(e.exports,"browser",()=>d("2tkTo")),a(e.exports,"io",()=>d("fbSa3")),a(e.exports,"math",()=>d("bGjJi")),a(e.exports,"serialization",()=>d("fqv1v")),a(e.exports,"test_util",()=>d("egaFx")),a(e.exports,"util",()=>d("a9Xyg")),a(e.exports,"backend_util",()=>d("4ajhx")),a(e.exports,"broadcast_util",()=>d("eCyVZ")),a(e.exports,"tensor_util",()=>d("kyuDB")),a(e.exports,"slice_util",()=>d("2vt64")),a(e.exports,"gather_util",()=>d("2t9oE")),a(e.exports,"scatter_util",()=>d("jvRff")),a(e.exports,"device_util",()=>d("9kvpY")),a(e.exports,"kernel_impls",()=>d("eu00D")),a(e.exports,"KernelBackend",()=>d("6DWy4").KernelBackend),a(e.exports,"DataStorage",()=>d("6DWy4").DataStorage),d("fbSa3"),d("bGjJi"),d("eCyVZ"),d("2tkTo"),d("2t9oE"),d("jvRff"),d("2vt64"),d("fqv1v"),d("kyuDB"),d("egaFx"),d("a9Xyg"),d("jjNEG"),d("6ZsXp"),d("hHpD2"),d("9zrfQ"),d("441Lv"),d("c0RPC"),d("bsu9P"),d("cmAqQ"),d("gYhVX"),d("1i8wr"),d("ciqGg"),d("8IARK");var r=d("2GEz9");d("bbwI4");var s=d("aHWgz"),o=d("1c9K8"),i=d("3ytnp");d("fYbCG"),d("alePs"),d("gsLG9"),d("4ajhx"),d("9kvpY"),d("eu00D"),d("6DWy4");var l=d("dcVMt");n(e.exports,r),n(e.exports,s),n(e.exports,o),n(e.exports,i),n(e.exports,l)}),h("fbSa3",function(e,t){a(e.exports,"copyModel",()=>d("l5j1O").copyModel),a(e.exports,"listModels",()=>d("l5j1O").listModels),a(e.exports,"moveModel",()=>d("l5j1O").moveModel),a(e.exports,"removeModel",()=>d("l5j1O").removeModel),a(e.exports,"browserFiles",()=>d("aCcH6").browserFiles),a(e.exports,"browserHTTPRequest",()=>d("dM7E1").browserHTTPRequest),a(e.exports,"CompositeArrayBuffer",()=>d("9kinH").CompositeArrayBuffer),a(e.exports,"concatenateArrayBuffers",()=>d("eqf4o").concatenateArrayBuffers),a(e.exports,"decodeWeights",()=>d("eqf4o").decodeWeights),a(e.exports,"decodeWeightsStream",()=>d("eqf4o").decodeWeightsStream),a(e.exports,"encodeWeights",()=>d("eqf4o").encodeWeights),a(e.exports,"fromMemory",()=>d("cOnj9").fromMemory),a(e.exports,"fromMemorySync",()=>d("cOnj9").fromMemorySync),a(e.exports,"getLoadHandlers",()=>d("cKITo").getLoadHandlers),a(e.exports,"getModelArtifactsForJSON",()=>d("eqf4o").getModelArtifactsForJSON),a(e.exports,"getModelArtifactsForJSONSync",()=>d("eqf4o").getModelArtifactsForJSONSync),a(e.exports,"getModelArtifactsInfoForJSON",()=>d("eqf4o").getModelArtifactsInfoForJSON),a(e.exports,"getSaveHandlers",()=>d("cKITo").getSaveHandlers),a(e.exports,"getWeightSpecs",()=>d("eqf4o").getWeightSpecs),a(e.exports,"http",()=>d("dM7E1").http),a(e.exports,"isHTTPScheme",()=>d("dM7E1").isHTTPScheme),a(e.exports,"loadWeights",()=>d("9PULT").loadWeights),a(e.exports,"registerLoadRouter",()=>d("cKITo").registerLoadRouter),a(e.exports,"registerSaveRouter",()=>d("cKITo").registerSaveRouter),a(e.exports,"weightsLoaderFactory",()=>d("9PULT").weightsLoaderFactory),a(e.exports,"withSaveHandler",()=>d("cOnj9").withSaveHandler),a(e.exports,"withSaveHandlerSync",()=>d("cOnj9").withSaveHandlerSync),d("5JUfu"),d("9aF7M"),d("aCcH6"),d("dM7E1"),d("eqf4o"),d("cOnj9"),d("cKITo"),d("9PULT"),d("9kinH"),d("l5j1O")}),h("aCcH6",function(e,t){a(e.exports,"browserFiles",()=>p),d("3kUb9");var r=d("alePs"),n=d("eqf4o"),s=d("cKITo"),o=d("9kinH");function i(e){return new Promise(e=>setTimeout(e)).then(e)}class l{constructor(e){if(!(0,r.env)().getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(l.URL_SCHEME)&&(e=e.slice(l.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=o.CompositeArrayBuffer.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let t=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=(0,n.getModelJSONForModelArtifacts)(e,t),s=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),o=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=s,await i(()=>o.dispatchEvent(new MouseEvent("click"))),null!=e.weightData){let e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=r,await i(()=>e.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:(0,n.getModelArtifactsInfoForJSON)(e)}}}}l.URL_SCHEME="downloads://";class u{constructor(e){if(null==e||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let r=new FileReader;r.onload=r=>{let a=JSON.parse(r.target.result),s=a.modelTopology;return null==s?void t(Error(`modelTopology field is missing from file ${this.jsonFile.name}`)):null==a.weightsManifest?void t(Error(`weightManifest field is missing from file ${this.jsonFile.name}`)):0===this.weightsFiles.length?void e({modelTopology:s}):void e((0,n.getModelArtifactsForJSON)(a,e=>this.loadWeights(e)))},r.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){let t=[],r=[];for(let a of e)t.push(...a.weights),r.push(...a.paths);let a=this.checkManifestAndWeightFiles(e);return Promise.all(r.map(e=>this.loadWeightsFile(e,a[e]))).then(e=>[t,e])}loadWeightsFile(e,t){return new Promise((r,a)=>{let n=new FileReader;n.onload=e=>{r(e.target.result)},n.onerror=t=>a(`Failed to weights data from file of path '${e}'.`),n.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],r=this.weightsFiles.map(e=>(0,n.basename)(e.name)),a={};for(let s of e)s.paths.forEach(e=>{let s=(0,n.basename)(e);if(-1!==t.indexOf(s))throw Error(`Duplicate file basename found in weights manifest: '${s}'`);if(t.push(s),-1===r.indexOf(s))throw Error(`Weight file with basename '${s}' is not provided.`);a[e]=this.weightsFiles[r.indexOf(s)]});if(t.length!==this.weightsFiles.length)throw Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return a}}function p(e){return new u(e)}s.IORouterRegistry.registerSaveRouter(e=>(0,r.env)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(l.URL_SCHEME)?function(e="model"){return new l(e)}(e.slice(l.URL_SCHEME.length)):null)}),h("dM7E1",function(e,t){a(e.exports,"isHTTPScheme",()=>p),a(e.exports,"http",()=>h),a(e.exports,"browserHTTPRequest",()=>f);var r=d("alePs"),n=d("3SJNW"),s=d("eqf4o"),o=d("9kinH"),i=d("cKITo"),l=d("9PULT");class u{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?((0,n.assert)("function"==typeof t.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=(0,r.env)().platform.fetch,(0,n.assert)(null!=e&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&(0,n.assert)(2===e.length,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],a=(0,s.getModelJSONForModelArtifacts)(e,r);if(t.body.append("model.json",new Blob([JSON.stringify(a)],{type:"application/json"}),"model.json"),null!=e.weightData){let r=o.CompositeArrayBuffer.join(e.weightData);t.body.append("model.weights.bin",new Blob([r],{type:"application/octet-stream"}),"model.weights.bin")}let n=await this.fetch(this.path,t);if(n.ok)return{modelArtifactsInfo:(0,s.getModelArtifactsInfoForJSON)(e),responses:[n]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${n.status}.`)}async loadModelJSON(){let e,t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",Error(e)}let r=e.modelTopology,a=e.weightsManifest;if(null==r&&null==a)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();let e=await this.loadModelJSON();return(0,s.getModelArtifactsForJSON)(e,e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),r=(0,s.getWeightSpecs)(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:()=>(0,l.streamWeights)(t,this.loadOptions)})}async getWeightUrls(e){let[t,r]=function(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?");return[e.substring(0,t)+"/",r>t?e.substring(r):""]}(Array.isArray(this.path)?this.path[1]:this.path),a=this.weightPathPrefix||t,n=[],s=[];for(let t of e)for(let e of t.paths)null!=this.weightUrlConverter?s.push(this.weightUrlConverter(e)):n.push(a+e+r);return this.weightUrlConverter&&n.push(...await Promise.all(s)),n}async loadWeights(e){let t=await this.getWeightUrls(e);return[(0,s.getWeightSpecs)(e),await (0,l.loadWeightsAsArrayBuffer)(t,this.loadOptions)]}}function p(e){return null!=e.match(u.URL_SCHEME_REGEX)}u.URL_SCHEME_REGEX=/^https?:\/\//;let c=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(e=>p(e)):p(e))return h(e,t);return null};function h(e,t){return new u(e,t)}function f(e,t){return h(e,t)}i.IORouterRegistry.registerSaveRouter(c),i.IORouterRegistry.registerLoadRouter(c)}),h("9PULT",function(e,t){a(e.exports,"loadWeightsAsArrayBuffer",()=>u),a(e.exports,"streamWeights",()=>p),a(e.exports,"loadWeights",()=>c),a(e.exports,"weightsLoaderFactory",()=>h);var r=d("alePs"),n=d("3SJNW"),s=d("9kinH"),o=d("eqf4o"),i=d("aXF96"),l=d("7waw0");async function u(e,t){null==t&&(t={});let a=null==t.fetchFunc?(0,r.env)().platform.fetch:t.fetchFunc,n=e.map(e=>a(e,t.requestInit,{isBinary:!0})),s=(null==t.onProgress?await Promise.all(n):await (0,i.monitorPromisesProgress)(n,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return null==t.onProgress?await Promise.all(s):await (0,i.monitorPromisesProgress)(s,t.onProgress,.5,1)}function p(e,t){var a;let n,s=null==t.fetchFunc?(0,r.env)().platform.fetch:t.fetchFunc,o=0;return null==(a=t.onProgress)||a.call(t,0),new ReadableStream({pull:async r=>{for(var a;o<e.length;){n||(n=(await s(e[o],t.requestInit,{isBinary:!0})).body.getReader());let{done:i,value:l}=await n.read();if(i){o++,n=void 0,null==(a=t.onProgress)||a.call(t,o/e.length);continue}r.enqueue(l);return}r.close()}})}async function c(e,t="",r,a){return h(e=>u(e,{requestInit:a}))(e,t,r)}function h(e){return async(t,r="",a)=>{let i=t.map(()=>!1),u={},p=null!=a?a.map(()=>!1):[],c=[];if(t.forEach((e,t)=>{let r=0;e.weights.forEach(e=>{let s="quantization"in e?e.quantization.dtype:e.dtype,o=l.DTYPE_VALUE_SIZE_MAP[s]*n.sizeFromShape(e.shape),d=()=>{i[t]=!0,null==u[t]&&(u[t]=[]),u[t].push({manifestEntry:e,groupOffset:r,sizeBytes:o})};null!=a?a.forEach((t,r)=>{t===e.name&&(d(),p[r]=!0)}):d(),c.push(e.name),r+=o})}),!p.every(e=>e)){let e=a.filter((e,t)=>!p[t]);throw Error(`Could not find weights in manifest with names: ${e.join(", ")}. 
Manifest JSON has weights with names: ${c.join(", ")}.`)}let d=i.reduce((e,t,r)=>(t&&e.push(r),e),[]),h=[];d.forEach(e=>{t[e].paths.forEach(e=>{let t=r+(r.endsWith("/")?"":"/")+e;h.push(t)})});let f=await e(h),m={},g=0;return d.forEach(e=>{let r=t[e].paths.length,a=new(0,s.CompositeArrayBuffer)(f.slice(g,g+r));u[e].forEach(e=>{let t=a.slice(e.groupOffset,e.groupOffset+e.sizeBytes),r=(0,o.decodeWeights)(t,[e.manifestEntry]);for(let e in r)m[e]=r[e]}),g+=r}),m}}}),h("aXF96",function(e,t){a(e.exports,"monitorPromisesProgress",()=>n);var r=d("3SJNW");function n(e,t,a,n){var s,o,i;s=e,(0,r.assert)(null!=s&&Array.isArray(s)&&s.length>0,()=>"promises must be a none empty array"),o=a=null==a?0:a,i=n=null==n?1:n,(0,r.assert)(o>=0&&o<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${o}`),(0,r.assert)(i>=0&&i<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${i}`),(0,r.assert)(i>=o,()=>`startFraction must be no more than endFraction, but got startFraction ${o} and endFraction ${i}`);let l=0;return Promise.all(e.map(r=>(r.then(r=>(t(a+ ++l/e.length*(n-a)),r)),r)))}}),h("cOnj9",function(e,t){a(e.exports,"fromMemory",()=>o),a(e.exports,"fromMemorySync",()=>i),a(e.exports,"withSaveHandler",()=>l),a(e.exports,"withSaveHandlerSync",()=>u);class r{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class n{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class s{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function o(e,t,r,a){let n=arguments;return new s(i(...n))}function i(e,t,a,n){return 1!=arguments.length?(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new r({modelTopology:e,weightSpecs:t,weightData:a,trainingConfig:n})):null!=e.modelTopology||null!=e.weightSpecs?new r(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new r({modelTopology:e}))}function l(e){return new n(e)}function u(e){return new n(e)}}),h("bGjJi",function(e,t){a(e.exports,"confusionMatrix",()=>d("hfWAM").confusionMatrix),d("hfWAM")}),h("hfWAM",function(e,t){a(e.exports,"confusionMatrix",()=>p);var r=d("jAOpV"),n=d("3SJNW"),s=d("bVaGH"),o=d("bJTeV"),i=d("6P6xF"),l=d("1zGvd"),u=d("jKgnL");let p=(0,l.op)({confusionMatrix_:function(e,t,a){let l=(0,r.convertToTensor)(e,"labels","confusionMatrix"),p=(0,r.convertToTensor)(t,"predictions","confusionMatrix");n.assert(null==a||a>0&&Number.isInteger(a),()=>`If provided, numClasses must be a positive integer, but got ${a}`),n.assert(1===l.rank,()=>`Expected the rank of labels to be 1, but got ${l.rank}`),n.assert(1===p.rank,()=>`Expected the rank of predictions to be 1, but got ${p.rank}`),n.assert(l.shape[0]===p.shape[0],()=>`Mismatch in the number of examples: ${l.shape[0]} vs. ${p.shape[0]}. Labels and predictions should have the same number of elements.`),n.assert(a>0&&Number.isInteger(a),()=>`numClasses is required to be a positive integer, but got ${a}`);let c=(0,i.oneHot)((0,s.cast)(l,"int32"),a),d=(0,i.oneHot)((0,s.cast)(p,"int32"),a),h=(0,u.transpose)(c),f=(0,o.matMul)(h,d);return(0,s.cast)(f,"int32")}})}),h("bJTeV",function(e,t){a(e.exports,"matMul",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({matMul_:function(e,t,a=!1,i=!1){let l=(0,o.convertToTensor)(e,"a","matMul"),u=(0,o.convertToTensor)(t,"b","matMul");[l,u]=(0,s.makeTypesMatch)(l,u);let p={a:l,b:u};return r.ENGINE.runKernel(n.BatchMatMul,p,{transposeA:a,transposeB:i})}})}),h("6P6xF",function(e,t){a(e.exports,"oneHot",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({oneHot_:function(e,t,a=1,o=0,i="int32"){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let l=(0,s.convertToTensor)(e,"indices","oneHot","int32");return r.ENGINE.runKernel(n.OneHot,{indices:l},{dtype:i,depth:t,onValue:a,offValue:o})}})}),h("jKgnL",function(e,t){a(e.exports,"transpose",()=>f);var r=d("bv3K9"),n=d("1c9K8"),s=d("dcVMt"),o=d("jAOpV"),i=d("3SJNW"),l=d("eEMF3"),u=d("14oP5"),p=d("5ByfE"),c=d("1zGvd"),h=d("8g72B");let f=(0,c.op)({transpose_:function(e,t,a){let c=(0,o.convertToTensor)(e,"x","transpose");if(null==t&&(t=c.shape.map((e,t)=>t).reverse()),i.assert(c.rank===t.length,()=>`Error in transpose: rank of input ${c.rank} must match length of perm ${t}.`),t.forEach(e=>{i.assert(e>=0&&e<c.rank,()=>`All entries in 'perm' must be between 0 and ${c.rank-1} but got ${t}`)}),c.rank<=1)return c.clone();let d={perm:t};return"complex64"===c.dtype?(0,n.tidy)(()=>{let e=(0,h.real)(c),t=(0,u.imag)(c);return e=r.ENGINE.runKernel(s.Transpose,{x:e},d),t=r.ENGINE.runKernel(s.Transpose,{x:t},d),a&&(t=(0,p.neg)(t)),(0,l.complex)(e,t)}):r.ENGINE.runKernel(s.Transpose,{x:c},d)}})}),h("14oP5",function(e,t){a(e.exports,"imag",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({imag_:function(e){let t=(0,s.convertToTensor)(e,"input","imag");return r.ENGINE.runKernel(n.Imag,{input:t})}})}),h("5ByfE",function(e,t){a(e.exports,"neg",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({neg_:function(e){let t=(0,s.convertToTensor)(e,"x","neg");return r.ENGINE.runKernel(n.Neg,{x:t})}})}),h("8g72B",function(e,t){a(e.exports,"real",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({real_:function(e){let t=(0,s.convertToTensor)(e,"input","real");return r.ENGINE.runKernel(n.Real,{input:t})}})}),h("2tkTo",function(e,t){let r;a(e.exports,"fromPixelsAsync",()=>g),a(e.exports,"toPixels",()=>y),a(e.exports,"draw",()=>b),a(e.exports,"fromPixels",()=>v);var n=d("bv3K9"),s=d("alePs"),o=d("dcVMt"),i=d("3ytnp"),l=d("ciqGg"),u=d("jAOpV"),p=d("bVaGH"),c=d("1zGvd"),h=d("4QkHD");let f=!1;function m(e,t=3){let a,s;if(t>4)throw Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw Error("pixels passed to tf.browser.fromPixels() can not be null");let l=!1,u=!1,p=!1,c=!1,d=!1,f=!1;if(e.data instanceof Uint8Array)l=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)u=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)p=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)c=!0;else if(null!=e.getContext)d=!0;else if("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap)f=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(null!=(0,i.getKernel)(o.FromPixels,n.ENGINE.backendName))return n.ENGINE.runKernel(o.FromPixels,{pixels:e},{numChannels:t});let[g,x]=p?[e.videoWidth,e.videoHeight]:[e.width,e.height];if(d)a=e.getContext("2d").getImageData(0,0,g,x).data;else if(u||l)a=e.data;else if(c||p||f){if(null==r)if("undefined"==typeof document)if("undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof OffscreenCanvasRenderingContext2D)r=new OffscreenCanvas(1,1).getContext("2d");else throw Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else r=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});r.canvas.width=g,r.canvas.height=x,r.drawImage(e,0,0,g,x),a=r.getImageData(0,0,g,x).data}if(4===t)s=new Int32Array(a);else{let e=g*x;s=new Int32Array(e*t);for(let r=0;r<e;r++)for(let e=0;e<t;++e)s[r*t+e]=a[4*r+e]}let y=[x,g,t];return(0,h.tensor3d)(s,y,"int32")}async function g(e,t=3){var r;let a=null;if((0,s.env)().getBool("WRAP_TO_IMAGEBITMAP")&&"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&null!=(r=e)&&0!==r.width&&0!==r.height&&!(null!=e&&e.data instanceof Uint8Array)){let t;try{t=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(e){t=null}a=null!=t&&t.width===e.width&&t.height===e.height?t:e}else a=e;return m(a,t)}function x(e){if(2!==e.rank&&3!==e.rank)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);let t=2===e.rank?1:e.shape[2];if(t>4||2===t)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}async function y(e,t){let r=(0,u.convertToTensor)(e,"img","toPixels");if(!(e instanceof l.Tensor)){let e=r;r=(0,p.cast)(e,"int32"),e.dispose()}x(r);let[a,s]=r.shape.slice(0,2),c=2===r.rank?1:r.shape[2],d=await r.data(),h="float32"===r.dtype?255:1,m=new Uint8ClampedArray(s*a*4);for(let e=0;e<a*s;++e){let t=[0,0,0,255];for(let a=0;a<c;a++){let n=d[e*c+a];if("float32"===r.dtype){if(n<0||n>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${n}.`)}else if("int32"===r.dtype&&(n<0||n>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${n}.`);1===c?(t[0]=n*h,t[1]=n*h,t[2]=n*h):t[a]=n*h}let a=4*e;m[a+0]=Math.round(t[0]),m[a+1]=Math.round(t[1]),m[a+2]=Math.round(t[2]),m[a+3]=Math.round(t[3])}if(null!=t){f||null!=(0,i.getKernel)(o.Draw,n.ENGINE.backendName)&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),f=!0),t.width=s,t.height=a;let e=t.getContext("2d"),r=new ImageData(m,s,a);e.putImageData(r,0,0)}return r!==e&&r.dispose(),m}function b(e,t,r){let a=(0,u.convertToTensor)(e,"img","draw");if(!(e instanceof l.Tensor)){let e=a;a=(0,p.cast)(e,"int32"),e.dispose()}x(a);var s=null==r?void 0:r.imageOptions;let i=(null==s?void 0:s.alpha)||1;if(i>1||i<0)throw Error(`Alpha value ${i} is suppoed to be in range [0 - 1].`);let c={image:a};n.ENGINE.runKernel(o.Draw,c,{canvas:t,options:r})}let v=(0,c.op)({fromPixels_:m})}),h("4QkHD",function(e,t){a(e.exports,"tensor3d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t,a){if((0,n.assertNonNull)(e),null!=t&&3!==t.length)throw Error("tensor3d() requires shape to have three numbers");let o=(0,r.inferShape)(e,a);if(3!==o.length&&1!==o.length)throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===o.length&&null==t)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,s.makeTensor)(e,t,o,a)}}),h("2t9oE",function(e,t){a(e.exports,"prepareAndValidate",()=>n);var r=d("3SJNW");function n(e,t){let a=e.shape.length,n=t.shape.length;if(a<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${a}.`);if(n<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${n}.`);if("int32"!==t.dtype)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[n-1]>a)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[n-1]} vs. ${a}`);if(0===(0,r.sizeFromShape)(e.shape))throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let s=t.shape,o=s[s.length-1],i=1;for(let e=0;e<s.length-1;++e)i*=s[e];let l=e.shape,u=s.slice();u.pop();let p=1;for(let e=o;e<a;++e)p*=l[e],u.push(l[e]);let c=[...(0,r.computeStrides)(e.shape).map(e=>e/p),1].slice(0,o);return[u,i,p,c]}}),h("jvRff",function(e,t){a(e.exports,"validateUpdateShape",()=>n),a(e.exports,"validateInput",()=>s),a(e.exports,"calculateShapes",()=>o);var r=d("3SJNW");function n(e,t,r){let a=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${a}, and batchDim: ${n}.`;if(r.rank<n)throw Error(s+` update.rank < ${n}. `);if(e.length<a+(r.rank-n))throw Error(s+` Output shape length < ${a+(r.rank-n)}`);if(r.rank!==n+e.length-a)throw Error(s+` update.rank != ${n+e.length-a}`);for(let e=0;e<n;++e)if(r.shape[e]!==t.shape[e])throw Error(s+` updates.shape[${e}] (${r.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<r.rank-n;++t)if(r.shape[t+n]!==e[t+a])throw Error(s+` updates.shape[${t+n}] (${r.shape[t+n]}) != shape[${t+n}] (${e[t+n]})`)}function s(e,t,r){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(0===r.length){if(0===t.size)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}n(r,t,e)}function o(e,t,a){let n=t.shape.length,s=n>1?t.shape[n-1]:1,o=a.length,i=1;for(let e=s;e<o;++e)i*=a[e];let l=s<1?1:s,u=(0,r.sizeFromShape)(t.shape)/l,p=[...(0,r.computeStrides)(a.slice(0,s)),1];return{sliceRank:s,numUpdates:u,sliceSize:i,strides:p,outputSize:(0,r.sizeFromShape)(a)}}}),h("2vt64",function(e,t){a(e.exports,"assertParamsValid",()=>n),a(e.exports,"maskToAxes",()=>s),a(e.exports,"computeOutShape",()=>o),a(e.exports,"stridesWithElidedDims",()=>i),a(e.exports,"getNormalizedAxes",()=>u),a(e.exports,"startIndicesWithElidedDims",()=>p),a(e.exports,"stopIndicesWithElidedDims",()=>c),a(e.exports,"startForAxis",()=>f),a(e.exports,"stopForAxis",()=>m),a(e.exports,"stridesForAxis",()=>h),a(e.exports,"isSliceContinous",()=>g),a(e.exports,"computeFlatOffset",()=>x),a(e.exports,"parseSliceParams",()=>y),a(e.exports,"sliceInfo",()=>b);var r=d("3SJNW");function n(e,t,a){let n=e.shape.length;r.assert(n===t.length,()=>`Error in slice${n}D: Length of begin ${t} must match the rank of the array (${n}).`),r.assert(n===a.length,()=>`Error in slice${n}D: Length of size ${a} must match the rank of the array (${n}).`);for(let s=0;s<n;++s)r.assert(t[s]+a[s]<=e.shape[s],()=>`Error in slice${n}D: begin[${s}] + size[${s}] (${t[s]+a[s]}) would overflow input.shape[${s}] (${e.shape[s]})`)}function s(e){let t=[],r=0;for(;e>0;)1&e&&t.push(r),e/=2,r++;return t}function o(e,t,r){let a=[];for(let n=0;n<e.length;n++)a[n]=Math.ceil((t[n]-e[n])/r[n]);return a}function i(e,t,r,a){let n=[...e];for(let e=n.length;e<a.length;e++)n.push(1);for(let e=0;e<r;e++)0===e?n[t]=1:(n.splice(t,0,1),n.pop());return n}function l(e,t){let r=[];for(let a=0;a<e;a++)r.push(t+a);return r}function u(e,t,r,a,n,s,o,l,u){let d=e.length,g=Array(d),x=Array(d),y=Array(d);if(t.length&&r>0){let u=t[0],d=r+1;g=p(o,u,d,a,e),x=c(l,u,d,n,e),y=i(s,u,d,e)}else for(let t=0;t<d;t++)g[t]=f(o,a,s,e,t,u),x[t]=m(l,n,s,e,t,u),y[t]=h(s,t,u);return{begin:g,end:x,strides:y}}function p(e,t,r,a,n){let s=[...n],o=l(r,t);for(let n=0;n<s.length;n++)if(o.indexOf(n)>-1)s[n]=0;else{var i,u,p;let o=(i=t,u=r,(p=n)<=i?p:p-(u-1)),l=a[o];e&1<<o&&(l=0),s[n]=l}return s}function c(e,t,a,n,s){let o=[...s],i=l(a,t);for(let r=0;r<o.length;r++)if(i.indexOf(r)>-1)o[r]=Number.MAX_SAFE_INTEGER;else{var u,p,c;let s=(u=t,p=a,(c=r)<=u?c:c-(p-1)),i=n[s];e&1<<s&&(i=Number.MAX_SAFE_INTEGER),o[r]=i}for(let e=0;e<o.length;e++){let t=s[e];o[e]<0&&(o[e]+=t),o[e]=r.clamp(0,o[e],s[e])}return o}function h(e,t,r){let a=e[t];return(r&1<<t||null==a)&&(a=1),a}function f(e,t,a,n,s,o){let i=t[s],l=a[s]||1;(e&1<<s||o&1<<s||null==i)&&(i=l>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);let u=n[s];return i<0&&(i+=u),i=r.clamp(0,i,u-1)}function m(e,t,a,n,s,o){let i=t[s],l=a[s]||1;(e&1<<s||o&1<<s||null==i)&&(i=l>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);let u=n[s];return i<0&&(i+=u),i=l>0?r.clamp(0,i,u):r.clamp(-1,i,u-1)}function g(e,t,r){let a=r.length;for(let e=0;e<r.length;e++)if(r[e]>1){a=e;break}for(let n=a+1;n<r.length;n++)if(t[n]>0||r[n]!==e[n])return!1;return!0}function x(e,t){let r=e.length>0?e[e.length-1]:1;for(let a=0;a<e.length-1;a++)r+=e[a]*t[a];return r}function y(e,t,a){let n,s,o=e.shape.length;return(n="number"==typeof t?[t,...Array(o-1).fill(0)]:t.length<o?t.concat(Array(o-t.length).fill(0)):t.slice()).forEach(e=>{r.assert(-1!==e,()=>"slice() does not support negative begin indexing.")}),s=(s=null==a?Array(o).fill(-1):"number"==typeof a?[a,...Array(o-1).fill(-1)]:a.length<o?a.concat(Array(o-a.length).fill(-1)):a).map((t,a)=>t>=0?t:(r.assert(-1===t,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${a}.`),e.shape[a]-n[a])),[n,s]}function b(e,t,r,a,n,s,o,i,l){let u;if(null==a?(u=Array(t.length)).fill(1):u=a,null!=o&&(o&o-1)!=0)throw Error("Multiple ellipses in slice is not allowed.");let p=!1,c={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:r.slice(),strides:u.slice(),beginMask:n,endMask:s,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};for(let e=0;e<c.dims;e++)p&&(1<<e&i)!=0&&c.numAddAxisAfterEllipsis++,1<<e&o&&(p=!0);!p&&(c.ellipsisMask|=1<<c.dims,c.dims++);let d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};var h=c,f=d;f.beginMask=0,f.endMask=0,f.shrinkAxisMask=0;let m=0;f.beginValid=null!=h.begin,f.endValid=null!=h.end,f.begin=Array(f.dims),f.end=Array(f.dims),f.strides=Array(f.dims),f.finalShapeGatherIndices=[],f.finalShapeGatherIndicesSparse=[],f.inputShapeGatherIndicesSparse=Array(f.dims);for(let e=0;e<h.dims;e++)if(1<<e&h.ellipsisMask){let t=Math.min(f.dims-(h.dims-e)+1+h.numAddAxisAfterEllipsis,f.dims);for(;m<t;m++)f.begin[m]=0,f.end[m]=0,f.strides[m]=1,f.beginMask|=1<<m,f.endMask|=1<<m,f.finalShapeGatherIndices.push(m),f.finalShapeGatherIndicesSparse.push(-1),f.inputShapeGatherIndicesSparse[m]=e}else if(1<<e&h.newAxisMask)f.finalShapeGatherIndices.push(-2),f.finalShapeGatherIndicesSparse.push(-1);else{if(m===f.begin.length)throw Error(`Index out of range using input dim ${m}; input has only ${f.dims} dims, ${f.begin.length}.`);null!=h.begin&&(f.begin[m]=h.begin[e]),null!=h.end&&(f.end[m]=h.end[e]),f.strides[m]=h.strides[e],h.beginMask&1<<e&&(f.beginMask|=1<<m),h.endMask&1<<e&&(f.endMask|=1<<m),h.shrinkAxisMask&1<<e?(f.finalShapeGatherIndices.push(-1),f.finalShapeGatherIndicesSparse.push(-1),f.shrinkAxisMask|=1<<m):(f.finalShapeGatherIndices.push(m),f.finalShapeGatherIndicesSparse.push(e)),f.inputShapeGatherIndicesSparse[m]=e,m++}let g=!0,x=!0,y=!0,b=[],T=[];for(let t=0;t<e.length;++t){let r;if(0===d.strides[t])throw Error(`strides[${t}] must be non-zero`);let a=!!(d.shrinkAxisMask&1<<t),n=e[t];if(-1===n){b.push(a?1:-1);continue}let s=[d.beginMask&1<<t,d.endMask&1<<t],o=[d.strides[t]>0?0:-1,d.strides[t]>0?n:n-1];if(a&&d.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&1===d.strides[t];let i=!!(d.beginMask&1<<t&&d.endMask&1<<t);if(d.beginValid&&d.endValid){if(a){let e=d.begin[t]<0?n+d.begin[t]:d.begin[t];if(d.begin[t]=e,d.end[t]=d.begin[t]+1,e<0||e>=n)throw Error(`slice index ${d.begin[t]} of dimension ${t} out of bounds.`)}else d.begin[t]=v(d.begin[t],0,d.strides[t],n,s,o),d.end[t]=v(d.end[t],1,d.strides[t],n,s,o);let e=1===d.strides[t]&&0===d.begin[t]&&d.end[t]===n;g=g&&e,x=x&&(0===t&&1===d.strides[t]||e)}else g=g&&1===d.strides[t]&&i,x=x&&(0===t&&1===d.strides[t]||i);let l=!1;if(d.beginValid&&d.endValid?(r=d.end[t]-d.begin[t],l=!0):a?(r=1,l=!0):i&&n>=0&&(r=d.strides[t]<0?-n:n,l=!0),l){let e;e=0===r||r<0!=d.strides[t]<0?0:Math.trunc(r/d.strides[t])+ +(r%d.strides[t]!=0),b.push(e)}else b.push(-1)}for(let e=0;e<d.finalShapeGatherIndices.length;++e){let t=d.finalShapeGatherIndices[e];t>=0?T.push(b[t]):-2===t&&T.push(1)}return{finalShapeSparse:T.filter((e,t)=>-2!==d.finalShapeGatherIndices[t]),finalShape:T,isIdentity:g,sliceDim0:x,isSimpleSlice:y,begin:d.begin,end:d.end,strides:d.strides}}function v(e,t,r,a,n,s){if(n[t])return r>0?s[t]:s[t+1&1];{let t=e<0?a+e:e;return t<s[0]?s[0]:t>s[1]?s[1]:t}}}),h("egaFx",function(e,t){a(e.exports,"TEST_EPSILON_FLOAT16",()=>i),a(e.exports,"expectArraysClose",()=>l),a(e.exports,"testEpsilon",()=>u),a(e.exports,"expectPromiseToFail",()=>c),a(e.exports,"expectArraysEqual",()=>h),a(e.exports,"expectNumbersClose",()=>f),a(e.exports,"expectValuesInRange",()=>g),a(e.exports,"expectArrayBuffersEqual",()=>x),a(e.exports,"encodeStrings",()=>function e(t){for(let r=0;r<t.length;r++){let a=t[r];Array.isArray(a)?e(a):t[r]=(0,o.encodeString)(a)}return t}),a(e.exports,"createVideoElement",()=>y),a(e.exports,"play",()=>b);var r=d("bv3K9"),n=d("jAOpV"),s=d("3SJNW"),o=d("a9Xyg");let i=.1;function l(e,t,r){return null==r&&(r=u()),p(e,t,(e,t)=>m(e,t,r))}function u(){return 32===r.ENGINE.backend.floatPrecision()?.001:i}function p(e,t,r){let a=!0;if(((0,o.isTypedArray)(e)||(0,o.isTypedArray)(t))&&(a=!1),(0,o.isTypedArray)(e)&&(0,o.isTypedArray)(t)&&(a=!0),a){let r=e.constructor.name,a=t.constructor.name;if(r!==a)throw Error(`Arrays are of different type. Actual: ${r}. Expected: ${a}`)}if(Array.isArray(e)&&Array.isArray(t)){let r=(0,n.inferShape)(e),a=(0,n.inferShape)(t);if(!(0,s.arraysEqual)(r,a))throw Error(`Arrays have different shapes. Actual: [${r}]. Expected: [${a}]`)}let i=(0,o.isTypedArray)(e)?e:(0,o.flatten)(e),l=(0,o.isTypedArray)(t)?t:(0,o.flatten)(t);if(i.length!==l.length)throw Error(`Arrays have different lengths actual: ${i.length} vs expected: ${l.length}.
Actual:   ${i}.
Expected: ${l}.`);for(let e=0;e<l.length;++e){let t=i[e],a=l[e];if(!r(t,a))throw Error(`Arrays differ: actual[${e}] = ${t}, expected[${e}] = ${a}.
Actual:   ${i}.
Expected: ${l}.`)}"undefined"!=typeof expect&&expect().nothing()}function c(e,t){e().then(()=>t.fail(),()=>t()),"undefined"!=typeof expect&&expect().nothing()}function h(e,t){let r="string"==typeof t||"number"==typeof t||"boolean"==typeof t?[t]:t;return(0,s.isString)(e)||(0,s.isString)(e[0])||(0,s.isString)(t)||(0,s.isString)(t[0])?p(e,r,(e,t)=>e==t):p(e,t,(e,t)=>m(e,t,0))}function f(e,t,r){if(null==r&&(r=u()),!m(e,t,r))throw Error(`Numbers differ: actual === ${e}, expected === ${t}`);"undefined"!=typeof expect&&expect().nothing()}function m(e,t,r){return!(isFinite(e)||isFinite(t))||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>r)}function g(e,t,r){for(let a=0;a<e.length;a++)if(e[a]<t||e[a]>r)throw Error(`Value out of range:${e[a]} low: ${t}, high: ${r}`)}function x(e,t){let r=new Float32Array(e),a=new Float32Array(t);if(r.length!==a.length)throw Error(`Expected ArrayBuffer to be of length ${a.length}, but it was ${r.length}`);for(let e=0;e<a.length;e++)if(r[e]!==a[e])throw Error(`Expected ArrayBuffer value at ${e} to be ${a[e]} but got ${r[e]} instead`)}function y(e){let t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(e=>{t.addEventListener("loadeddata",r=>e(t)),t.load()})}async function b(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}}),h("jjNEG",function(e,t){a(e.exports,"version",()=>r);let r="4.22.0"}),h("cmAqQ",function(e,t){a(e.exports,"OptimizerConstructors",()=>p);var r=d("6ZsXp"),n=d("hHpD2"),s=d("9zrfQ"),o=d("441Lv"),i=d("c0RPC"),l=d("gYhVX"),u=d("1i8wr");class p{static sgd(e){return new(0,u.SGDOptimizer)(e)}static momentum(e,t,r=!1){return new(0,i.MomentumOptimizer)(e,t,r)}static rmsprop(e,t=.9,r=0,a=null,n=!1){return new(0,l.RMSPropOptimizer)(e,t,r,a,n)}static adam(e=.001,t=.9,r=.999,a=null){return new(0,s.AdamOptimizer)(e,t,r,a)}static adadelta(e=.001,t=.95,a=null){return new(0,r.AdadeltaOptimizer)(e,t,a)}static adamax(e=.002,t=.9,r=.999,a=null,n=0){return new(0,o.AdamaxOptimizer)(e,t,r,a,n)}static adagrad(e,t=.1){return new(0,n.AdagradOptimizer)(e,t)}}}),h("2GEz9",function(e,t){a(e.exports,"spectral",()=>es),a(e.exports,"signal",()=>eo),a(e.exports,"image",()=>ei),a(e.exports,"linalg",()=>el),a(e.exports,"losses",()=>eu),a(e.exports,"sparse",()=>ep),a(e.exports,"string",()=>ec),a(e.exports,"abs",()=>d("dvCKL").abs),a(e.exports,"acos",()=>d("eNOLU").acos),a(e.exports,"acosh",()=>d("j7w4b").acosh),a(e.exports,"add",()=>d("iY58J").add),a(e.exports,"addN",()=>d("jbuE4").addN),a(e.exports,"all",()=>d("dyOW3").all),a(e.exports,"any",()=>d("eoBQh").any),a(e.exports,"argMax",()=>d("hWhWw").argMax),a(e.exports,"argMin",()=>d("kX8xE").argMin),a(e.exports,"asin",()=>d("hBDFC").asin),a(e.exports,"asinh",()=>d("aDXZX").asinh),a(e.exports,"atan",()=>d("2wCc8").atan),a(e.exports,"atan2",()=>d("3jl0g").atan2),a(e.exports,"atanh",()=>d("8RcIm").atanh),a(e.exports,"avgPool",()=>d("9BRz9").avgPool),a(e.exports,"avgPool3d",()=>d("eLKvD").avgPool3d),a(e.exports,"basicLSTMCell",()=>d("a7cP8").basicLSTMCell),a(e.exports,"batchToSpaceND",()=>d("bEW2b").batchToSpaceND),a(e.exports,"batchNorm",()=>d("esSBy").batchNorm),a(e.exports,"batchNorm2d",()=>d("inaki").batchNorm2d),a(e.exports,"batchNorm3d",()=>d("3Wm0t").batchNorm3d),a(e.exports,"batchNorm4d",()=>d("2mEs1").batchNorm4d),a(e.exports,"bincount",()=>d("33fB8").bincount),a(e.exports,"bitwiseAnd",()=>d("csKAf").bitwiseAnd),a(e.exports,"broadcastArgs",()=>d("iOjB5").broadcastArgs),a(e.exports,"broadcastTo",()=>d("jR1yo").broadcastTo),a(e.exports,"buffer",()=>d("hPfZs").buffer),a(e.exports,"cast",()=>d("bVaGH").cast),a(e.exports,"ceil",()=>d("dVVtG").ceil),a(e.exports,"clipByValue",()=>d("8KqjW").clipByValue),a(e.exports,"clone",()=>d("gtIz2").clone),a(e.exports,"complex",()=>d("eEMF3").complex),a(e.exports,"concat",()=>d("cW6ER").concat),a(e.exports,"concat1d",()=>d("khxUq").concat1d),a(e.exports,"concat2d",()=>d("bxhZ3").concat2d),a(e.exports,"concat3d",()=>d("4W1rV").concat3d),a(e.exports,"concat4d",()=>d("by3ur").concat4d),a(e.exports,"conv1d",()=>d("7GZmK").conv1d),a(e.exports,"conv2d",()=>d("4dtjs").conv2d),a(e.exports,"conv2dTranspose",()=>d("9LNZ1").conv2dTranspose),a(e.exports,"conv3d",()=>d("97ECh").conv3d),a(e.exports,"conv3dTranspose",()=>d("21D0d").conv3dTranspose),a(e.exports,"cos",()=>d("5zIqU").cos),a(e.exports,"cosh",()=>d("h8lc4").cosh),a(e.exports,"cumprod",()=>d("bURsR").cumprod),a(e.exports,"cumsum",()=>d("kMdUt").cumsum),a(e.exports,"denseBincount",()=>d("bDz3C").denseBincount),a(e.exports,"depthToSpace",()=>d("76jUS").depthToSpace),a(e.exports,"depthwiseConv2d",()=>d("jhTCw").depthwiseConv2d),a(e.exports,"diag",()=>d("1Vgdv").diag),a(e.exports,"dilation2d",()=>d("UmArk").dilation2d),a(e.exports,"div",()=>d("auyfQ").div),a(e.exports,"divNoNan",()=>d("6TJVY").divNoNan),a(e.exports,"dot",()=>d("izexE").dot),a(e.exports,"einsum",()=>d("4CEfs").einsum),a(e.exports,"elu",()=>d("7bpLo").elu),a(e.exports,"ensureShape",()=>d("35GWK").ensureShape),a(e.exports,"equal",()=>d("ixsiT").equal),a(e.exports,"erf",()=>d("9GzWW").erf),a(e.exports,"euclideanNorm",()=>d("6usDy").euclideanNorm),a(e.exports,"exp",()=>d("l8bnG").exp),a(e.exports,"expandDims",()=>d("5enz8").expandDims),a(e.exports,"expm1",()=>d("knr6F").expm1),a(e.exports,"eye",()=>d("g8vRk").eye),a(e.exports,"fill",()=>d("3Nhg4").fill),a(e.exports,"floor",()=>d("1YPDA").floor),a(e.exports,"floorDiv",()=>d("c4lR7").floorDiv),a(e.exports,"gather",()=>d("j5A35").gather),a(e.exports,"greater",()=>d("fgKkJ").greater),a(e.exports,"greaterEqual",()=>d("50T2r").greaterEqual),a(e.exports,"imag",()=>d("14oP5").imag),a(e.exports,"isFinite",()=>d("8b3Vd").isFinite),a(e.exports,"isInf",()=>d("bOHQp").isInf),a(e.exports,"isNaN",()=>d("go7NU").isNaN),a(e.exports,"leakyRelu",()=>d("b2CE4").leakyRelu),a(e.exports,"less",()=>d("a8Ii2").less),a(e.exports,"lessEqual",()=>d("cYhYB").lessEqual),a(e.exports,"linspace",()=>d("WLoRA").linspace),a(e.exports,"localResponseNormalization",()=>d("j4I2B").localResponseNormalization),a(e.exports,"log",()=>d("3v0me").log),a(e.exports,"log1p",()=>d("2mGnu").log1p),a(e.exports,"logSigmoid",()=>d("4OBKd").logSigmoid),a(e.exports,"logSoftmax",()=>d("J50VT").logSoftmax),a(e.exports,"logSumExp",()=>d("73tT9").logSumExp),a(e.exports,"logicalAnd",()=>d("jCv5M").logicalAnd),a(e.exports,"logicalNot",()=>d("7dekz").logicalNot),a(e.exports,"logicalOr",()=>d("aVN20").logicalOr),a(e.exports,"logicalXor",()=>d("tZKgJ").logicalXor),a(e.exports,"lowerBound",()=>d("lUnZ7").lowerBound),a(e.exports,"matMul",()=>d("bJTeV").matMul),a(e.exports,"max",()=>d("j3Gpj").max),a(e.exports,"maxPool",()=>d("aVm19").maxPool),a(e.exports,"maxPool3d",()=>d("lLaBa").maxPool3d),a(e.exports,"maxPoolWithArgmax",()=>d("iNSc9").maxPoolWithArgmax),a(e.exports,"maximum",()=>d("8V4MS").maximum),a(e.exports,"mean",()=>d("fuyCY").mean),a(e.exports,"meshgrid",()=>d("6wB20").meshgrid),a(e.exports,"min",()=>d("ccTDz").min),a(e.exports,"minimum",()=>d("jU2Kr").minimum),a(e.exports,"mirrorPad",()=>d("fN0Qz").mirrorPad),a(e.exports,"mod",()=>d("iP5sa").mod),a(e.exports,"moments",()=>d("6qQsw").moments),a(e.exports,"mul",()=>d("gjmji").mul),a(e.exports,"multiRNNCell",()=>d("7L8Ps").multiRNNCell),a(e.exports,"multinomial",()=>d("bm6bO").multinomial),a(e.exports,"neg",()=>d("5ByfE").neg),a(e.exports,"notEqual",()=>d("h5yKf").notEqual),a(e.exports,"oneHot",()=>d("6P6xF").oneHot),a(e.exports,"ones",()=>d("hjAWM").ones),a(e.exports,"onesLike",()=>d("7exVQ").onesLike),a(e.exports,"outerProduct",()=>d("gg9wZ").outerProduct),a(e.exports,"pad",()=>d("97OJS").pad),a(e.exports,"pad1d",()=>d("kVoxX").pad1d),a(e.exports,"pad2d",()=>d("gFnaE").pad2d),a(e.exports,"pad3d",()=>d("cFIrV").pad3d),a(e.exports,"pad4d",()=>d("jyX64").pad4d),a(e.exports,"pool",()=>d("9xgIX").pool),a(e.exports,"pow",()=>d("fKPt4").pow),a(e.exports,"prelu",()=>d("a5fAD").prelu),a(e.exports,"print",()=>d("3NELQ").print),a(e.exports,"prod",()=>d("88JGI").prod),a(e.exports,"raggedGather",()=>d("dgoxI").raggedGather),a(e.exports,"raggedRange",()=>d("huq08").raggedRange),a(e.exports,"raggedTensorToTensor",()=>d("hEGPa").raggedTensorToTensor),a(e.exports,"rand",()=>d("gK1uc").rand),a(e.exports,"randomGamma",()=>d("aikdH").randomGamma),a(e.exports,"randomNormal",()=>d("04qCA").randomNormal),a(e.exports,"randomStandardNormal",()=>d("dhuWN").randomStandardNormal),a(e.exports,"randomUniform",()=>d("kAGVn").randomUniform),a(e.exports,"randomUniformInt",()=>d("cUMu1").randomUniformInt),a(e.exports,"range",()=>d("lOa1U").range),a(e.exports,"real",()=>d("8g72B").real),a(e.exports,"reciprocal",()=>d("2uDjp").reciprocal),a(e.exports,"relu",()=>d("c13YB").relu),a(e.exports,"relu6",()=>d("eMkCY").relu6),a(e.exports,"reshape",()=>d("jUNqu").reshape),a(e.exports,"reverse",()=>d("4efDp").reverse),a(e.exports,"reverse1d",()=>d("79Mtg").reverse1d),a(e.exports,"reverse2d",()=>d("3I6sE").reverse2d),a(e.exports,"reverse3d",()=>d("1mltb").reverse3d),a(e.exports,"reverse4d",()=>d("9bgY2").reverse4d),a(e.exports,"round",()=>d("5HOK9").round),a(e.exports,"rsqrt",()=>d("jXvOs").rsqrt),a(e.exports,"scalar",()=>d("3tgJG").scalar),a(e.exports,"selu",()=>d("5yubi").selu),a(e.exports,"separableConv2d",()=>d("g49SP").separableConv2d),a(e.exports,"setdiff1dAsync",()=>d("7EzH6").setdiff1dAsync),a(e.exports,"sigmoid",()=>d("apbhs").sigmoid),a(e.exports,"sign",()=>d("2naKB").sign),a(e.exports,"sin",()=>d("ecNZ3").sin),a(e.exports,"sinh",()=>d("36fWO").sinh),a(e.exports,"slice",()=>d("6R8FV").slice),a(e.exports,"slice1d",()=>d("dzSkv").slice1d),a(e.exports,"slice2d",()=>d("b3YMl").slice2d),a(e.exports,"slice3d",()=>d("6u6Pu").slice3d),a(e.exports,"slice4d",()=>d("bfJgo").slice4d),a(e.exports,"softmax",()=>d("gwcMA").softmax),a(e.exports,"softplus",()=>d("3IsQe").softplus),a(e.exports,"spaceToBatchND",()=>d("hqB7f").spaceToBatchND),a(e.exports,"fft",()=>d("88T8T").fft),a(e.exports,"ifft",()=>d("8Amut").ifft),a(e.exports,"irfft",()=>d("67Jhy").irfft),a(e.exports,"rfft",()=>d("knyJ1").rfft),a(e.exports,"split",()=>d("hnrac").split),a(e.exports,"sqrt",()=>d("bwdHy").sqrt),a(e.exports,"square",()=>d("koTLO").square),a(e.exports,"squaredDifference",()=>d("72iFe").squaredDifference),a(e.exports,"squeeze",()=>d("hXFvf").squeeze),a(e.exports,"stack",()=>d("a5zZz").stack),a(e.exports,"step",()=>d("49Lag").step),a(e.exports,"stridedSlice",()=>d("5d7e8").stridedSlice),a(e.exports,"sub",()=>d("5gdOH").sub),a(e.exports,"sum",()=>d("fdJKX").sum),a(e.exports,"tan",()=>d("jrLW7").tan),a(e.exports,"tanh",()=>d("Z61Hu").tanh),a(e.exports,"tensor",()=>d("DXGru").tensor),a(e.exports,"tensor1d",()=>d("iruxo").tensor1d),a(e.exports,"tensor2d",()=>d("kyebq").tensor2d),a(e.exports,"tensor3d",()=>d("4QkHD").tensor3d),a(e.exports,"tensor4d",()=>d("a66Rf").tensor4d),a(e.exports,"tensor5d",()=>d("knEF5").tensor5d),a(e.exports,"tensor6d",()=>d("9E90g").tensor6d),a(e.exports,"tensorScatterUpdate",()=>d("jc5lM").tensorScatterUpdate),a(e.exports,"tile",()=>d("avklb").tile),a(e.exports,"topk",()=>d("bRZUr").topk),a(e.exports,"truncatedNormal",()=>d("kDWl9").truncatedNormal),a(e.exports,"unique",()=>d("i4fwT").unique),a(e.exports,"unsortedSegmentSum",()=>d("g8wPY").unsortedSegmentSum),a(e.exports,"unstack",()=>d("dqFom").unstack),a(e.exports,"upperBound",()=>d("kdYX1").upperBound),a(e.exports,"variable",()=>d("k8G4i").variable),a(e.exports,"where",()=>d("6itdN").where),a(e.exports,"whereAsync",()=>d("5f6SY").whereAsync),a(e.exports,"zeros",()=>d("lCbVL").zeros),a(e.exports,"zerosLike",()=>d("jdxSj").zerosLike),a(e.exports,"op",()=>d("1zGvd").op),a(e.exports,"OP_SCOPE_SUFFIX",()=>d("1zGvd").OP_SCOPE_SUFFIX),a(e.exports,"fused",()=>d("drqO4")),d("dvCKL"),d("eNOLU"),d("j7w4b"),d("iY58J"),d("jbuE4"),d("dyOW3"),d("eoBQh"),d("hWhWw"),d("kX8xE"),d("hBDFC"),d("aDXZX"),d("2wCc8"),d("3jl0g"),d("8RcIm"),d("9BRz9"),d("eLKvD"),d("a7cP8"),d("bEW2b"),d("esSBy"),d("inaki"),d("3Wm0t"),d("2mEs1"),d("33fB8"),d("csKAf"),d("iOjB5"),d("jR1yo"),d("hPfZs"),d("bVaGH"),d("dVVtG"),d("8KqjW"),d("gtIz2"),d("eEMF3"),d("cW6ER"),d("khxUq"),d("bxhZ3"),d("4W1rV"),d("by3ur"),d("7GZmK"),d("4dtjs"),d("9LNZ1"),d("97ECh"),d("21D0d"),d("5zIqU"),d("h8lc4"),d("bURsR"),d("kMdUt"),d("bDz3C"),d("76jUS"),d("jhTCw"),d("1Vgdv"),d("UmArk"),d("auyfQ"),d("6TJVY"),d("izexE"),d("4CEfs"),d("7bpLo"),d("35GWK"),d("ixsiT"),d("9GzWW"),d("6usDy"),d("l8bnG"),d("5enz8"),d("knr6F"),d("g8vRk"),d("3Nhg4"),d("1YPDA"),d("c4lR7"),d("j5A35"),d("fgKkJ"),d("50T2r"),d("14oP5"),d("8b3Vd"),d("bOHQp"),d("go7NU"),d("b2CE4"),d("a8Ii2"),d("cYhYB"),d("WLoRA"),d("j4I2B"),d("3v0me"),d("2mGnu"),d("4OBKd"),d("J50VT"),d("73tT9"),d("jCv5M"),d("7dekz"),d("aVN20"),d("tZKgJ"),d("lUnZ7"),d("bJTeV"),d("j3Gpj"),d("aVm19"),d("lLaBa"),d("iNSc9"),d("8V4MS"),d("fuyCY"),d("6wB20"),d("ccTDz"),d("jU2Kr"),d("fN0Qz"),d("iP5sa"),d("6qQsw"),d("gjmji"),d("7L8Ps"),d("bm6bO"),d("5ByfE"),d("h5yKf"),d("6P6xF"),d("hjAWM"),d("7exVQ"),d("gg9wZ"),d("97OJS"),d("kVoxX"),d("gFnaE"),d("cFIrV"),d("jyX64"),d("9xgIX"),d("fKPt4"),d("a5fAD"),d("3NELQ"),d("88JGI"),d("dgoxI"),d("huq08"),d("hEGPa"),d("gK1uc"),d("aikdH"),d("04qCA"),d("dhuWN"),d("kAGVn"),d("cUMu1"),d("lOa1U"),d("8g72B"),d("2uDjp"),d("c13YB"),d("eMkCY"),d("jUNqu"),d("4efDp"),d("79Mtg"),d("3I6sE"),d("1mltb"),d("9bgY2"),d("5HOK9"),d("jXvOs"),d("3tgJG"),d("5yubi"),d("g49SP"),d("7EzH6"),d("apbhs"),d("2naKB"),d("ecNZ3"),d("36fWO"),d("6R8FV"),d("dzSkv"),d("b3YMl"),d("6u6Pu"),d("bfJgo"),d("gwcMA"),d("3IsQe"),d("hqB7f");var r=d("88T8T"),s=d("8Amut"),o=d("67Jhy"),i=d("knyJ1");d("hnrac"),d("bwdHy"),d("koTLO"),d("72iFe"),d("hXFvf"),d("a5zZz"),d("49Lag"),d("5d7e8"),d("5gdOH"),d("fdJKX"),d("jrLW7"),d("Z61Hu"),d("DXGru"),d("iruxo"),d("kyebq"),d("4QkHD"),d("a66Rf"),d("knEF5"),d("9E90g"),d("jc5lM"),d("avklb"),d("bRZUr"),d("kDWl9"),d("i4fwT"),d("g8wPY"),d("dqFom"),d("kdYX1"),d("k8G4i"),d("6itdN"),d("5f6SY"),d("lCbVL"),d("jdxSj");var l=d("lo5i8"),u=d("jKgnL"),p=d("80uD0"),c=d("aQvZc"),h=d("8Ylzi"),f=d("ik7I9"),m=d("5Z7oe"),g=d("h7zRE"),x=d("lIyaB"),y=d("8NziA"),b=d("6j4Wh");d("1zGvd"),d("drqO4");var v=d("eh0jq"),T=d("6qbVE"),w=d("i2qak"),k=d("gpFst"),N=d("hSrkT"),S=d("gPX4c"),E=d("8wTUz"),I=d("fy4VU"),C=d("c7fgq"),$=d("aglDy"),A=d("cGx90"),R=d("18z5H"),M=d("aCFhG"),O=d("dUM4R"),V=d("Dl0Lq"),P=d("kY1Wo"),D=d("e5v4z"),_=d("xPQdT"),F=d("hWEZ2"),z=d("55pNK"),L=d("gjqRL"),G=d("9uatt"),B=d("d76J4"),W=d("hJ3bA"),U=d("7mbgc"),j=d("dReKg"),K=d("bNOGd"),q=d("63o5e"),H=d("65Iyn"),X=d("bkp5t"),J=d("kVhbr"),Y=d("aHaNt"),Z=d("8sRSJ"),Q=d("jIPJM"),ee=d("keKmo"),et=d("4XWrr"),er=d("3ZCQE"),ea=d("ddzZX"),en=d("4bju1");let es={fft:r.fft,ifft:s.ifft,rfft:i.rfft,irfft:o.irfft},eo={hammingWindow:v.hammingWindow,hannWindow:T.hannWindow,frame:w.frame,stft:k.stft},ei={flipLeftRight:S.flipLeftRight,grayscaleToRGB:E.grayscaleToRGB,resizeNearestNeighbor:D.resizeNearestNeighbor,resizeBilinear:P.resizeBilinear,rgbToGrayscale:I.rgbToGrayscale,rotateWithOffset:C.rotateWithOffset,cropAndResize:N.cropAndResize,nonMaxSuppression:$.nonMaxSuppression,nonMaxSuppressionAsync:A.nonMaxSuppressionAsync,nonMaxSuppressionWithScore:R.nonMaxSuppressionWithScore,nonMaxSuppressionWithScoreAsync:M.nonMaxSuppressionWithScoreAsync,nonMaxSuppressionPadded:O.nonMaxSuppressionPadded,nonMaxSuppressionPaddedAsync:V.nonMaxSuppressionPaddedAsync,threshold:_.threshold,transform:F.transform},el={bandPart:z.bandPart,gramSchmidt:L.gramSchmidt,qr:G.qr},eu={absoluteDifference:B.absoluteDifference,computeWeightedLoss:W.computeWeightedLoss,cosineDistance:U.cosineDistance,hingeLoss:j.hingeLoss,huberLoss:K.huberLoss,logLoss:q.logLoss,meanSquaredError:H.meanSquaredError,sigmoidCrossEntropy:X.sigmoidCrossEntropy,softmaxCrossEntropy:J.softmaxCrossEntropy},ep={sparseFillEmptyRows:Y.sparseFillEmptyRows,sparseReshape:Z.sparseReshape,sparseSegmentMean:Q.sparseSegmentMean,sparseSegmentSum:ee.sparseSegmentSum},ec={stringNGrams:et.stringNGrams,stringSplit:er.stringSplit,stringToHashBucketFast:ea.stringToHashBucketFast,staticRegexReplace:en.staticRegexReplace};n(e.exports,l),n(e.exports,u),n(e.exports,p),n(e.exports,c),n(e.exports,h),n(e.exports,f),n(e.exports,m),n(e.exports,g),n(e.exports,x),n(e.exports,y),n(e.exports,b)}),h("eNOLU",function(e,t){a(e.exports,"acos",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({acos_:function(e){let t=(0,s.convertToTensor)(e,"x","acos");return r.ENGINE.runKernel(n.Acos,{x:t})}})}),h("j7w4b",function(e,t){a(e.exports,"acosh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({acosh_:function(e){let t=(0,s.convertToTensor)(e,"x","acosh");return r.ENGINE.runKernel(n.Acosh,{x:t})}})}),h("jbuE4",function(e,t){a(e.exports,"addN",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({addN_:function(e){o.assert(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),o.assert(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>(0,s.convertToTensor)(e,`tensors${t}`,"addN")),a=t[0];return t.forEach(e=>{if(e.dtype!==a.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(e=>{if(!o.arraysEqual(e.shape,a.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),r.ENGINE.runKernel(n.AddN,t)}})}),h("dyOW3",function(e,t){a(e.exports,"all",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({all_:function(e,t=null,a=!1){let o=(0,s.convertToTensor)(e,"x","all","bool");return r.ENGINE.runKernel(n.All,{x:o},{axis:t,keepDims:a})}})}),h("eoBQh",function(e,t){a(e.exports,"any",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({any_:function(e,t=null,a=!1){let o=(0,s.convertToTensor)(e,"x","any","bool");return r.ENGINE.runKernel(n.Any,{x:o},{axis:t,keepDims:a})}})}),h("hWhWw",function(e,t){a(e.exports,"argMax",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({argMax_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","argMax");return r.ENGINE.runKernel(n.ArgMax,{x:a},{axis:t})}})}),h("kX8xE",function(e,t){a(e.exports,"argMin",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({argMin_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","argMin");return r.ENGINE.runKernel(n.ArgMin,{x:a},{axis:t})}})}),h("hBDFC",function(e,t){a(e.exports,"asin",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({asin_:function(e){let t=(0,s.convertToTensor)(e,"x","asin");return r.ENGINE.runKernel(n.Asin,{x:t})}})}),h("aDXZX",function(e,t){a(e.exports,"asinh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({asinh_:function(e){let t=(0,s.convertToTensor)(e,"x","asinh");return r.ENGINE.runKernel(n.Asinh,{x:t})}})}),h("2wCc8",function(e,t){a(e.exports,"atan",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({atan_:function(e){let t=(0,s.convertToTensor)(e,"x","atan");return r.ENGINE.runKernel(n.Atan,{x:t})}})}),h("3jl0g",function(e,t){a(e.exports,"atan2",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({atan2_:function(e,t){let a=(0,o.convertToTensor)(e,"a","atan2"),i=(0,o.convertToTensor)(t,"b","atan2");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Atan2,l)}})}),h("8RcIm",function(e,t){a(e.exports,"atanh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({atanh_:function(e){let t=(0,s.convertToTensor)(e,"x","atanh");return r.ENGINE.runKernel(n.Atanh,{x:t})}})}),h("9BRz9",function(e,t){a(e.exports,"avgPool",()=>c);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("bVaGH"),l=d("79jYH"),u=d("1zGvd"),p=d("jUNqu");let c=(0,u.op)({avgPool_:function(e,t,a,u,c){let d=(0,s.convertToTensor)(e,"x","avgPool","float32");o.assert(l.eitherStridesOrDilationsAreOne(a,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '1'`);let h=d,f=!1;3===d.rank&&(f=!0,h=(0,p.reshape)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),o.assert(4===h.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${h.rank}.`),l.checkPadOnDimRoundingMode("avgPool",u,c);let m={x:h},g=r.ENGINE.runKernel(n.AvgPool,m,{filterSize:t,strides:a,pad:u,dimRoundingMode:c});return(g=(0,i.cast)(g,d.dtype),f)?(0,p.reshape)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}})}),h("79jYH",function(e,t){a(e.exports,"computeDilation2DInfo",()=>n),a(e.exports,"convertConv2DDataFormat",()=>y),a(e.exports,"computeConv2DInfo",()=>i),a(e.exports,"computePool2DInfo",()=>s),a(e.exports,"computePool3DInfo",()=>o),a(e.exports,"computeConv3DInfo",()=>l),a(e.exports,"computeDefaultPad",()=>u),a(e.exports,"tupleValuesAreOne",()=>m),a(e.exports,"eitherStridesOrDilationsAreOne",()=>g),a(e.exports,"stridesOrDilationsArePositive",()=>x),a(e.exports,"checkPadOnDimRoundingMode",()=>b);var r=d("3SJNW");function n(e,t,r,a,s="NHWC",o){let l=[...t,e[3]];return i(e,l,r,o,a,null,null,y(s))}function s(e,t,r,a,n,o,l="channelsLast"){let u,[c,d]=p(t);if("channelsLast"===l)u=[c,d,e[3],e[3]];else if("channelsFirst"===l)u=[c,d,e[1],e[1]];else throw Error(`Unknown dataFormat ${l}`);return i(e,u,r,a,n,o,!1,l)}function o(e,t,r,a,n,s,i="NDHWC"){let u,p,[d,h,f]=c(t);if("NDHWC"===i)p="channelsLast",u=[d,h,f,e[4],e[4]];else if("NCDHW"===i)p="channelsFirst",u=[d,h,f,e[1],e[1]];else throw Error(`Unknown dataFormat ${i}`);return l(e,u,r,a,n,!1,p,s)}function i(e,t,r,a,n,s,o=!1,l="channelsLast"){let c,[d,m,g,x]=[-1,-1,-1,-1];if("channelsLast"===l)[d,m,g,x]=e;else if("channelsFirst"===l)[d,x,m,g]=e;else throw Error(`Unknown dataFormat ${l}`);let[y,b,,v]=t,[T,w]=p(r),[k,N]=p(a),S=h(y,k),E=h(b,N),{padInfo:I,outHeight:C,outWidth:$}=function(e,t,r,a,n,s,o,i,l){let p,c,d;if("number"==typeof e){let n=0===e?"VALID":"NUMBER";p={top:e,bottom:e,left:e,right:e,type:n};let o=function(e,t,r,a,n){null==a&&(a=u(e,t,r));let s=e[0],o=e[1];return[f((s-t+2*a)/r+1,n),f((o-t+2*a)/r+1,n)]}([t,r],s,a,e,i);c=o[0],d=o[1]}else if("same"===e){let e=Math.max(0,((c=Math.ceil(t/a))-1)*a+s-t),i=Math.max(0,((d=Math.ceil(r/n))-1)*n+o-r),l=Math.floor(e/2),u=Math.floor(i/2);p={top:l,bottom:e-l,left:u,right:i-u,type:"SAME"}}else if("valid"===e)p={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/a),d=Math.ceil((r-o+1)/n);else if("object"==typeof e){let u="channelsLast"===l?e[1][0]:e[2][0],h="channelsLast"===l?e[1][1]:e[2][1],m="channelsLast"===l?e[2][0]:e[3][0],g="channelsLast"===l?e[2][1]:e[3][1];p={top:u,bottom:h,left:m,right:g,type:0===u&&0===h&&0===m&&0===g?"VALID":"EXPLICIT"},c=f((t-s+u+h)/a+1,i),d=f((r-o+m+g)/n+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outHeight:c,outWidth:d}}(n,m,g,T,w,S,E,s,l),A=o?v*x:v;return"channelsFirst"===l?c=[d,A,C,$]:"channelsLast"===l&&(c=[d,C,$,A]),{batchSize:d,dataFormat:l,inHeight:m,inWidth:g,inChannels:x,outHeight:C,outWidth:$,outChannels:A,padInfo:I,strideHeight:T,strideWidth:w,filterHeight:y,filterWidth:b,effectiveFilterHeight:S,effectiveFilterWidth:E,dilationHeight:k,dilationWidth:N,inShape:e,outShape:c,filterShape:t}}function l(e,t,r,a,n,s=!1,o="channelsLast",i){let p,[d,m,g,x,y]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[d,m,g,x,y]=e;else if("channelsFirst"===o)[d,y,m,g,x]=e;else throw Error(`Unknown dataFormat ${o}`);let[b,v,T,,w]=t,[k,N,S]=c(r),[E,I,C]=c(a),$=h(b,E),A=h(v,I),R=h(T,C),{padInfo:M,outDepth:O,outHeight:V,outWidth:P}=function(e,t,r,a,n,s,o,i,l,p,c){let d,h,m,g;if("valid"===e&&(e=0),"number"==typeof e){let x=0===e?"VALID":"NUMBER";d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:x};let y=function(e,t,r,a,n,s){null==n&&(n=u(e,t[0],a[0]));let o=[0,0,0,1];for(let r=0;r<3;r++)e[r]+2*n>=t[r]&&(o[r]=f((e[r]-t[r]+2*n)/a[r]+1,s));return o}([t,r,a,1],[i,l,p],0,[n,s,o],e,c);h=y[0],m=y[1],g=y[2]}else if("same"===e){let e=((h=Math.ceil(t/n))-1)*n+i-t,u=((m=Math.ceil(r/s))-1)*s+l-r,c=((g=Math.ceil(a/o))-1)*o+p-a,f=Math.floor(e/2),x=Math.floor(u/2),y=Math.floor(c/2);d={top:x,bottom:u-x,left:y,right:c-y,front:f,back:e-f,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:h,outHeight:m,outWidth:g}}(n,m,g,x,k,N,S,$,A,R,i),D=s?w*y:w;return"channelsFirst"===o?p=[d,D,O,V,P]:"channelsLast"===o&&(p=[d,O,V,P,D]),{batchSize:d,dataFormat:o,inDepth:m,inHeight:g,inWidth:x,inChannels:y,outDepth:O,outHeight:V,outWidth:P,outChannels:D,padInfo:M,strideDepth:k,strideHeight:N,strideWidth:S,filterDepth:b,filterHeight:v,filterWidth:T,effectiveFilterDepth:$,effectiveFilterHeight:A,effectiveFilterWidth:R,dilationDepth:E,dilationHeight:I,dilationWidth:C,inShape:e,outShape:p,filterShape:t}}function u(e,t,r,a=1){let n=h(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)}function p(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function c(e){return"number"==typeof e?[e,e,e]:e}function h(e,t){return t<=1?e:e+(e-1)*(t-1)}function f(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function m(e){let[t,r,a]=p(e);return 1===t&&1===r&&1===a}function g(e,t){return m(e)||m(t)}function x(e){return p(e).every(e=>e>0)}function y(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw Error(`Unknown dataFormat ${e}`)}function b(e,t,a){if(null!=a)if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${a} but got pad ${t}.`);else if("number"==typeof t)r.assert(r.isInt(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${a} but got pad ${t}.`);else if("object"==typeof t)t.forEach(t=>{t.forEach(t=>{r.assert(r.isInt(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${a} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}),h("jUNqu",function(e,t){a(e.exports,"reshape",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({reshape_:function(e,t){let a=(0,s.convertToTensor)(e,"x","reshape","string_or_numeric");return r.ENGINE.runKernel(n.Reshape,{x:a},{shape:t})}})}),h("eLKvD",function(e,t){a(e.exports,"avgPool3d",()=>c);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("bVaGH"),l=d("79jYH"),u=d("1zGvd"),p=d("jUNqu");let c=(0,u.op)({avgPool3d_:function(e,t,a,u,c,d="NDHWC"){let h=(0,s.convertToTensor)(e,"x","avgPool3d","float32"),f=h,m=!1;4===h.rank&&(m=!0,f=(0,p.reshape)(h,[1,h.shape[0],h.shape[1],h.shape[2],h.shape[3]])),o.assert(5===f.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${f.rank}.`),o.assert("NDHWC"===d,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${d}`),o.assert("number"==typeof a&&a>0||Array.isArray(a)&&a[0]>0&&a[1]>0&&a[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${a}'`),(0,l.checkPadOnDimRoundingMode)("avgPool3d",u,c);let g={x:f},x=r.ENGINE.runKernel(n.AvgPool3D,g,{filterSize:t,strides:a,pad:u,dimRoundingMode:c,dataFormat:d});return(x=(0,i.cast)(x,f.dtype),m)?(0,p.reshape)(x,[x.shape[1],x.shape[2],x.shape[3],x.shape[4]]):x}})}),h("a7cP8",function(e,t){a(e.exports,"basicLSTMCell",()=>h);var r=d("jAOpV"),n=d("iY58J"),s=d("cW6ER"),o=d("bJTeV"),i=d("gjmji"),l=d("1zGvd"),u=d("apbhs"),p=d("6R8FV"),c=d("Z61Hu");let h=(0,l.op)({basicLSTMCell_:function(e,t,a,l,d,h){let f=(0,r.convertToTensor)(e,"forgetBias","basicLSTMCell"),m=(0,r.convertToTensor)(t,"lstmKernel","basicLSTMCell"),g=(0,r.convertToTensor)(a,"lstmBias","basicLSTMCell"),x=(0,r.convertToTensor)(l,"data","basicLSTMCell"),y=(0,r.convertToTensor)(d,"c","basicLSTMCell"),b=(0,r.convertToTensor)(h,"h","basicLSTMCell"),v=(0,s.concat)([x,b],1),T=(0,o.matMul)(v,m),w=(0,n.add)(T,g),k=w.shape[0],N=w.shape[1]/4,S=[k,N],E=(0,p.slice)(w,[0,0],S),I=(0,p.slice)(w,[0,N],S),C=(0,p.slice)(w,[0,2*N],S),$=(0,p.slice)(w,[0,3*N],S),A=(0,n.add)((0,i.mul)((0,u.sigmoid)(E),(0,c.tanh)(I)),(0,i.mul)(y,(0,u.sigmoid)((0,n.add)(f,C)))),R=(0,i.mul)((0,c.tanh)(A),(0,u.sigmoid)($));return[A,R]}})}),h("cW6ER",function(e,t){a(e.exports,"concat",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("gtIz2");let l=(0,d("1zGvd").op)({concat_:function(e,t=0){(0,o.assert)(e.length>=1,()=>"Pass at least one tensor to concat");let a=(0,s.convertToTensorArray)(e,"tensors","concat","string_or_numeric");return("complex64"===a[0].dtype&&a.forEach(e=>{if("complex64"!==e.dtype)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),1===a.length)?(0,i.clone)(a[0]):r.ENGINE.runKernel(n.Concat,a,{axis:t})}})}),h("apbhs",function(e,t){a(e.exports,"sigmoid",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sigmoid_:function(e){let t=(0,s.convertToTensor)(e,"x","sigmoid","float32");return r.ENGINE.runKernel(n.Sigmoid,{x:t})}})}),h("6R8FV",function(e,t){a(e.exports,"slice",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({slice_:function(e,t,a){let o=(0,s.convertToTensor)(e,"x","slice","string_or_numeric");if(0===o.rank)throw Error("Slicing scalar is not possible");return r.ENGINE.runKernel(n.Slice,{x:o},{begin:t,size:a})}})}),h("Z61Hu",function(e,t){a(e.exports,"tanh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({tanh_:function(e){let t=(0,s.convertToTensor)(e,"x","tanh","float32");return r.ENGINE.runKernel(n.Tanh,{x:t})}})}),h("bEW2b",function(e,t){a(e.exports,"batchToSpaceND",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({batchToSpaceND_:function(e,t,a){let i=(0,s.convertToTensor)(e,"x","batchToSpaceND"),l=t.reduce((e,t)=>e*t);return o.assert(i.rank>=1+t.length,()=>`input rank is ${i.rank} but should be > than blockShape.length ${t.length}`),o.assert(a.length===t.length,()=>`crops.length is ${a.length} but should be equal to blockShape.length  ${t.length}`),o.assert(i.shape[0]%l==0,()=>`input tensor batch is ${i.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${l}`),r.ENGINE.runKernel(n.BatchToSpaceND,{x:i},{blockShape:t,crops:a})}})}),h("esSBy",function(e,t){a(e.exports,"batchNorm",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("8CyQU"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({batchNorm_:function(e,t,a,l,p,c){let d,h;null==c&&(c=.001);let f=(0,s.convertToTensor)(e,"x","batchNorm"),m=(0,s.convertToTensor)(t,"mean","batchNorm"),g=(0,s.convertToTensor)(a,"variance","batchNorm");null!=p&&(d=(0,s.convertToTensor)(p,"scale","batchNorm")),null!=l&&(h=(0,s.convertToTensor)(l,"offset","batchNorm")),o.assert(m.rank===g.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),o.assert(null==h||m.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),o.assert(null==d||m.rank===d.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let x={x:(0,i.xAs4D)(f),scale:d,offset:h,mean:m,variance:g},y={varianceEpsilon:c},b=r.ENGINE.runKernel(n.FusedBatchNorm,x,y);return(0,u.reshape)(b,f.shape)}})}),h("8CyQU",function(e,t){a(e.exports,"xAs4D",()=>n);var r=d("jUNqu");function n(e){return 0===e.rank||1===e.rank?(0,r.reshape)(e,[1,1,1,e.size]):2===e.rank?(0,r.reshape)(e,[1,1,e.shape[0],e.shape[1]]):3===e.rank?(0,r.reshape)(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e}}),h("inaki",function(e,t){a(e.exports,"batchNorm2d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("esSBy");let o=(0,d("1zGvd").op)({batchNorm2d_:function(e,t,a,o,i,l){let u,p,c=(0,r.convertToTensor)(e,"x","batchNorm"),d=(0,r.convertToTensor)(t,"mean","batchNorm"),h=(0,r.convertToTensor)(a,"variance","batchNorm");return null!=i&&(u=(0,r.convertToTensor)(i,"scale","batchNorm")),null!=o&&(p=(0,r.convertToTensor)(o,"offset","batchNorm")),n.assert(2===c.rank,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${c.rank}.`),n.assert(2===d.rank||1===d.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${d.rank}.`),n.assert(2===h.rank||1===h.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${h.rank}.`),null!=u&&n.assert(2===u.rank||1===u.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),null!=p&&n.assert(2===p.rank||1===p.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),(0,s.batchNorm)(c,d,h,p,u,l)}})}),h("3Wm0t",function(e,t){a(e.exports,"batchNorm3d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("esSBy");let o=(0,d("1zGvd").op)({batchNorm3d_:function(e,t,a,o,i,l){let u,p,c=(0,r.convertToTensor)(e,"x","batchNorm"),d=(0,r.convertToTensor)(t,"mean","batchNorm"),h=(0,r.convertToTensor)(a,"variance","batchNorm");return null!=i&&(u=(0,r.convertToTensor)(i,"scale","batchNorm")),null!=o&&(p=(0,r.convertToTensor)(o,"offset","batchNorm")),n.assert(3===c.rank,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${c.rank}.`),n.assert(3===d.rank||1===d.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${d.rank}.`),n.assert(3===h.rank||1===h.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${h.rank}.`),null!=u&&n.assert(3===u.rank||1===u.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),null!=p&&n.assert(3===p.rank||1===p.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),(0,s.batchNorm)(c,d,h,p,u,l)}})}),h("2mEs1",function(e,t){a(e.exports,"batchNorm4d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("esSBy");let o=(0,d("1zGvd").op)({batchNorm4d_:function(e,t,a,o,i,l){let u,p,c=(0,r.convertToTensor)(e,"x","batchNorm"),d=(0,r.convertToTensor)(t,"mean","batchNorm"),h=(0,r.convertToTensor)(a,"variance","batchNorm");return null!=i&&(u=(0,r.convertToTensor)(i,"scale","batchNorm")),null!=o&&(p=(0,r.convertToTensor)(o,"offset","batchNorm")),n.assert(4===c.rank,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${c.rank}.`),n.assert(4===d.rank||1===d.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${d.rank}.`),n.assert(4===h.rank||1===h.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${h.rank}.`),null!=u&&n.assert(4===u.rank||1===u.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),null!=p&&n.assert(4===p.rank||1===p.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),(0,s.batchNorm)(c,d,h,p,u,l)}})}),h("33fB8",function(e,t){a(e.exports,"bincount",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({bincount_:function(e,t,a){let i=(0,s.convertToTensor)(e,"x","bincount"),l=(0,s.convertToTensor)(t,"weights","bincount");return o.assert("int32"===i.dtype,()=>`Error in bincount: input dtype must be int32, but got ${i.dtype}`),o.assert(a>=0,()=>`size must be non-negative, but got ${a}.`),o.assert(l.size===i.size||0===l.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${i.shape}, weights shape: ${l.shape}.`),r.ENGINE.runKernel(n.Bincount,{x:i,weights:l},{size:a})}})}),h("csKAf",function(e,t){a(e.exports,"bitwiseAnd",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({bitwiseAnd_:function(e,t){let a=(0,s.convertToTensor)(e,"x","bitwiseAnd"),i=(0,s.convertToTensor)(t,"y","bitwiseAnd");if(!(0,o.arraysEqual)(a.shape,i.shape))throw Error(`BitwiseAnd: Tensors must have the same shape. x: ${a.shape}, y: ${i.shape}`);if("int32"!==a.dtype||"int32"!==i.dtype)throw Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${a.dtype} and type of y: ${i.dtype}`);return r.ENGINE.runKernel(n.BitwiseAnd,{a:a,b:i})}})}),h("iOjB5",function(e,t){a(e.exports,"broadcastArgs",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({broadcastArgs_:function(e,t){let a=(0,s.convertToTensor)(e,"s0","broadcastArgs","int32"),o=(0,s.convertToTensor)(t,"s1","broadcastArgs","int32");if(1!==a.rank)throw Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${a.rank}`);if(1!==o.rank)throw Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${o.rank}`);return r.ENGINE.runKernel(n.BroadcastArgs,{s0:a,s1:o})}})}),h("jR1yo",function(e,t){a(e.exports,"broadcastTo",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("gtIz2"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({broadcastTo_:function(e,t){let a=(0,s.convertToTensor)(e,"broadcastTo","x"),l=a.shape;if((0,o.assertNonNegativeIntegerDimensions)(t),t.length<a.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${a.rank}.`);if(t.length>a.rank){let e=a.shape.slice();for(;e.length<t.length;)e.unshift(1);a=(0,u.reshape)(a,e)}let p=a.shape,c=Array.from(t);for(let e=t.length-1;e>=0;e--)if(p[e]===t[e])c[e]=1;else if(1!==a.shape[e])throw Error(`broadcastTo(): [${l}] cannot be broadcast to [${t}].`);if(0===c.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length)return(0,i.clone)(a);let d={x:a};return r.ENGINE.runKernel(n.Tile,d,{reps:c})}})}),h("dVVtG",function(e,t){a(e.exports,"ceil",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({ceil_:function(e){let t=(0,s.convertToTensor)(e,"x","ceil","float32");return r.ENGINE.runKernel(n.Ceil,{x:t})}})}),h("8KqjW",function(e,t){a(e.exports,"clipByValue",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("3Nhg4");let l=(0,d("1zGvd").op)({clipByValue_:function(e,t,a){let l=(0,s.convertToTensor)(e,"x","clipByValue");return(o.assert(t<=a,()=>`Error in clip: min (${t}) must be less than or equal to max (${a}).`),t===a)?(0,i.fill)(l.shape,t,l.dtype):r.ENGINE.runKernel(n.ClipByValue,{x:l},{clipValueMin:t,clipValueMax:a})}})}),h("khxUq",function(e,t){a(e.exports,"concat1d",()=>n);var r=d("cW6ER");let n=(0,d("1zGvd").op)({concat1d_:function(e){return(0,r.concat)(e,0)}})}),h("bxhZ3",function(e,t){a(e.exports,"concat2d",()=>n);var r=d("cW6ER");let n=(0,d("1zGvd").op)({concat2d_:function(e,t){return(0,r.concat)(e,t)}})}),h("4W1rV",function(e,t){a(e.exports,"concat3d",()=>n);var r=d("cW6ER");let n=(0,d("1zGvd").op)({concat3d_:function(e,t){return(0,r.concat)(e,t)}})}),h("by3ur",function(e,t){a(e.exports,"concat4d",()=>n);var r=d("cW6ER");let n=(0,d("1zGvd").op)({concat4d_:function(e,t){return(0,r.concat)(e,t)}})}),h("7GZmK",function(e,t){a(e.exports,"conv1d",()=>u);var r=d("jAOpV"),n=d("3SJNW"),s=d("4dtjs"),o=d("79jYH"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({conv1d_:function(e,t,a,i,u="NWC",p=1,c){let d=(0,r.convertToTensor)(e,"x","conv1d"),h=(0,r.convertToTensor)(t,"filter","conv1d"),f=d,m=!1;2===d.rank&&(m=!0,f=(0,l.reshape)(d,[1,d.shape[0],d.shape[1]])),n.assert(3===f.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${f.rank}.`),n.assert(3===h.rank,()=>`Error in conv1d: filter must be rank 3, but got rank ${h.rank}.`),o.checkPadOnDimRoundingMode("conv1d",i,c),n.assert(f.shape[2]===h.shape[1],()=>`Error in conv1d: depth of input (${f.shape[2]}) must match input depth for filter ${h.shape[1]}.`),n.assert(o.eitherStridesOrDilationsAreOne(a,p),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${a} and dilation '${p}'`),n.assert(o.stridesOrDilationsArePositive(p),()=>"Error in conv1D: Dilated rates should be larger than 0."),n.assert(o.stridesOrDilationsArePositive(a),()=>"Error in conv1D: Stride should be larger than 0."),n.assert("NWC"===u,()=>`Error in conv1d: got dataFormat of ${u} but only NWC is currently supported.`);let g=(0,l.reshape)(h,[1,h.shape[0],h.shape[1],h.shape[2]]),x=(0,l.reshape)(f,[f.shape[0],1,f.shape[1],f.shape[2]]),y=(0,s.conv2d)(x,g,[1,a],i,"NHWC",[1,p],c);return m?(0,l.reshape)(y,[y.shape[2],y.shape[3]]):(0,l.reshape)(y,[y.shape[0],y.shape[2],y.shape[3]])}})}),h("4dtjs",function(e,t){a(e.exports,"conv2d",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("79jYH"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({conv2d_:function(e,t,a,l,p="NHWC",c=[1,1],d){let h=(0,s.convertToTensor)(e,"x","conv2d","float32"),f=(0,s.convertToTensor)(t,"filter","conv2d","float32"),m=h,g=!1;3===h.rank&&(g=!0,m=(0,u.reshape)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),o.assert(4===m.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${m.rank}.`),o.assert(4===f.rank,()=>`Error in conv2d: filter must be rank 4, but got rank ${f.rank}.`),i.checkPadOnDimRoundingMode("conv2d",l,d);let x="NHWC"===p?m.shape[3]:m.shape[1];o.assert(x===f.shape[2],()=>`Error in conv2d: depth of input (${x}) must match input depth for filter ${f.shape[2]}.`),o.assert(i.eitherStridesOrDilationsAreOne(a,c),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${a} and dilations '${c}'`),o.assert(i.stridesOrDilationsArePositive(c),()=>"Error in conv2D: Dilated rates should be larger than 0."),o.assert(i.stridesOrDilationsArePositive(a),()=>"Error in conv2D: Strides should be larger than 0.");let y={x:m,filter:f},b=r.ENGINE.runKernel(n.Conv2D,y,{strides:a,pad:l,dataFormat:p,dilations:c,dimRoundingMode:d});return g?(0,u.reshape)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}})}),h("9LNZ1",function(e,t){a(e.exports,"conv2dTranspose",()=>s);var r=d("jAOpV"),n=d("chVmA");let s=(0,d("1zGvd").op)({conv2dTranspose_:function(e,t,a,s,o,i){let l=(0,r.convertToTensor)(e,"x","conv2dTranspose"),u=(0,r.convertToTensor)(t,"filter","conv2dTranspose");return(0,n.conv2DBackpropInput)(a,l,u,s,o,"NHWC",i)}})}),h("chVmA",function(e,t){a(e.exports,"conv2DBackpropInput",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("3SJNW"),o=d("79jYH"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({conv2DBackpropInput_:function(e,t,a,i,u,p="NHWC",c){s.assert(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let d=e,h=t,f=!1;3===t.rank&&(f=!0,h=(0,l.reshape)(t,[1,t.shape[0],t.shape[1],t.shape[2]]),d=[1,e[0],e[1],e[2]]),s.assert(4===d.length,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${d.length}.`),s.assert(4===h.rank,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${h.rank}`),s.assert(4===a.rank,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${a.rank}`);let m="NHWC"===p?d[3]:d[1],g="NHWC"===p?h.shape[3]:h.shape[1];s.assert(m===a.shape[2],()=>`Error in conv2dDerInput: depth of input (${m}) must match input depth for filter ${a.shape[2]}.`),s.assert(g===a.shape[3],()=>`Error in conv2dDerInput: depth of output (${g}) must match output depth for filter ${a.shape[3]}.`),o.checkPadOnDimRoundingMode("conv2dDerInput",u,c);let x={dy:h,filter:a},y={strides:i,pad:u,dataFormat:p,dimRoundingMode:c,inputShape:d},b=r.ENGINE.runKernel(n.Conv2DBackpropInput,x,y);return f?(0,l.reshape)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}})}),h("97ECh",function(e,t){a(e.exports,"conv3d",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("79jYH"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({conv3d_:function(e,t,a,l,p="NDHWC",c=[1,1,1]){let d=(0,s.convertToTensor)(e,"x","conv3d"),h=(0,s.convertToTensor)(t,"filter","conv3d"),f=d,m=!1;4===d.rank&&(m=!0,f=(0,u.reshape)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]])),o.assert(5===f.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${f.rank}.`),o.assert(5===h.rank,()=>`Error in conv3d: filter must be rank 5, but got rank ${h.rank}.`),o.assert(f.shape[4]===h.shape[3],()=>`Error in conv3d: depth of input (${f.shape[4]}) must match input depth for filter ${h.shape[3]}.`),o.assert((0,i.eitherStridesOrDilationsAreOne)(a,c),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${a} and dilations '${c}'`),o.assert("NDHWC"===p,()=>`Error in conv3d: got dataFormat of ${p} but only NDHWC is currently supported.`),o.assert((0,i.stridesOrDilationsArePositive)(c),()=>"Error in conv3D: Dilated rates should be larger than 0."),o.assert((0,i.stridesOrDilationsArePositive)(a),()=>"Error in conv3D: Strides should be larger than 0.");let g={x:f,filter:h},x=r.ENGINE.runKernel(n.Conv3D,g,{strides:a,pad:l,dataFormat:p,dilations:c});return m?(0,u.reshape)(x,[x.shape[1],x.shape[2],x.shape[3],x.shape[4]]):x}})}),h("21D0d",function(e,t){a(e.exports,"conv3dTranspose",()=>s);var r=d("jAOpV"),n=d("lSLOI");let s=(0,d("1zGvd").op)({conv3dTranspose_:function(e,t,a,s,o){let i=(0,r.convertToTensor)(e,"x","conv3dTranspose"),l=(0,r.convertToTensor)(t,"filter","conv3dTranspose");return(0,n.conv3DBackpropInput)(a,i,l,s,o)}})}),h("lSLOI",function(e,t){a(e.exports,"conv3DBackpropInput",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("3SJNW"),o=d("1zGvd"),i=d("jUNqu");let l=(0,o.op)({conv3DBackpropInput_:function(e,t,a,o,l){s.assert(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let u=e,p=t,c=!1;4===t.rank&&(c=!0,p=(0,i.reshape)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),u=[1,e[0],e[1],e[2],e[3]]);let d=u[4],h=p.shape[4];s.assert(5===u.length,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${u.length}.`),s.assert(5===p.rank,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${p.rank}`),s.assert(5===a.rank,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${a.rank}`),s.assert(d===a.shape[3],()=>`Error in conv3dDerInput: depth of input (${d}) must match input depth for filter ${a.shape[3]}.`),s.assert(h===a.shape[4],()=>`Error in conv3dDerInput: depth of output (${h}) must match output depth for filter ${a.shape[4]}.`);let f={dy:p,filter:a},m={pad:l,strides:o,inputShape:u},g=r.ENGINE.runKernel(n.Conv3DBackpropInputV2,f,m);return c?(0,i.reshape)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}})}),h("5zIqU",function(e,t){a(e.exports,"cos",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({cos_:function(e){let t=(0,s.convertToTensor)(e,"x","cos","float32");return r.ENGINE.runKernel(n.Cos,{x:t})}})}),h("h8lc4",function(e,t){a(e.exports,"cosh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({cosh_:function(e){let t=(0,s.convertToTensor)(e,"x","cosh","float32");return r.ENGINE.runKernel(n.Cosh,{x:t})}})}),h("bURsR",function(e,t){a(e.exports,"cumprod",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({cumprod_:function(e,t=0,a=!1,o=!1){let i=(0,s.convertToTensor)(e,"x","cumprod");return r.ENGINE.runKernel(n.Cumprod,{x:i},{axis:t,exclusive:a,reverse:o})}})}),h("kMdUt",function(e,t){a(e.exports,"cumsum",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({cumsum_:function(e,t=0,a=!1,o=!1){let i=(0,s.convertToTensor)(e,"x","cumsum");return r.ENGINE.runKernel(n.Cumsum,{x:i},{axis:t,exclusive:a,reverse:o})}})}),h("bDz3C",function(e,t){a(e.exports,"denseBincount",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({denseBincount_:function(e,t,a,i=!1){let l=(0,s.convertToTensor)(e,"x","denseBincount"),u=(0,s.convertToTensor)(t,"weights","denseBincount");return o.assert("int32"===l.dtype,()=>`Error in denseBincount: input dtype must be int32, but got ${l.dtype}`),o.assert(l.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${l.rank}.`),o.assert(a>=0,()=>`size must be non-negative, but got ${a}.`),o.assert(u.size===l.size||0===u.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${l.shape}, weights shape: ${u.shape}.`),r.ENGINE.runKernel(n.DenseBincount,{x:l,weights:u},{size:a,binaryOutput:i})}})}),h("76jUS",function(e,t){a(e.exports,"depthToSpace",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({depthToSpace_:function(e,t,a="NHWC"){let i=(0,s.convertToTensor)(e,"x","depthToSpace","float32"),l="NHWC"===a?i.shape[1]:i.shape[2],u="NHWC"===a?i.shape[2]:i.shape[3],p="NHWC"===a?i.shape[3]:i.shape[1];return o.assert(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),o.assert(l*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${l} and ${t}  for depthToSpace with input shape
    ${i.shape}`),o.assert(u*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${u} and ${t} for depthToSpace with input shape
        ${i.shape}`),o.assert(p%(t*t)==0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${p} for depthToSpace with input shape ${i.shape}`),r.ENGINE.runKernel(n.DepthToSpace,{x:i},{blockSize:t,dataFormat:a})}})}),h("jhTCw",function(e,t){a(e.exports,"depthwiseConv2d",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("79jYH"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({depthwiseConv2d_:function(e,t,a,l,p="NHWC",c=[1,1],d){let h=(0,s.convertToTensor)(e,"x","depthwiseConv2d","float32"),f=(0,s.convertToTensor)(t,"filter","depthwiseConv2d","float32"),m=h,g=!1;3===h.rank&&(g=!0,m=(0,u.reshape)(h,[1,h.shape[0],h.shape[1],h.shape[2]])),o.assert(4===m.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`),o.assert(4===f.rank,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`);let x="NHWC"===p?m.shape[3]:m.shape[1];o.assert(x===f.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${x}) must match the inChannels dimension in filter ${f.shape[2]}.`),i.checkPadOnDimRoundingMode("depthwiseConv2d",l,d);let y={x:m,filter:f},b=r.ENGINE.runKernel(n.DepthwiseConv2dNative,y,{strides:a,pad:l,dataFormat:p,dilations:c,dimRoundingMode:d});return g?(0,u.reshape)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}})}),h("1Vgdv",function(e,t){a(e.exports,"diag",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({diag_:function(e){let t=(0,s.convertToTensor)(e,"x","diag");return r.ENGINE.runKernel(n.Diag,{x:t})}})}),h("UmArk",function(e,t){a(e.exports,"dilation2d",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({dilation2d_:function(e,t,a,i,u=[1,1],p="NHWC"){let c=(0,s.convertToTensor)(e,"x","dilation2d"),d=(0,s.convertToTensor)(t,"filter","dilation2d");o.assert(3===c.rank||4===c.rank,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${c.rank}.`),o.assert(3===d.rank,()=>`Error in dilation2d: filter must be rank 3, but got rank ${d.rank}.`),o.assert("NHWC"===p,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${p}`);let h=c,f=!1;3===c.rank&&(h=(0,l.reshape)(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=!0),o.assert(h.shape[3]===d.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${h.shape[3]} vs ${d.shape[2]}`);let m={x:h,filter:d},g=r.ENGINE.runKernel(n.Dilation2D,m,{strides:a,pad:i,dilations:u});return f?(0,l.reshape)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}})}),h("6TJVY",function(e,t){a(e.exports,"divNoNan",()=>p);var r=d("kyuDB"),n=d("jAOpV"),s=d("auyfQ"),o=d("ixsiT"),i=d("1zGvd"),l=d("6itdN"),u=d("jdxSj");let p=(0,i.op)({divNoNan_:function(e,t){let a=(0,n.convertToTensor)(e,"a","div"),i=(0,n.convertToTensor)(t,"b","div");[a,i]=(0,r.makeTypesMatch)(a,i);let p=(0,s.div)(a,i),c=(0,u.zerosLike)(p),d=(0,o.equal)(i,c);return(0,l.where)(d,c,p)}})}),h("ixsiT",function(e,t){a(e.exports,"equal",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({equal_:function(e,t){let a=(0,o.convertToTensor)(e,"a","equal","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","equal","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.Equal,u)}})}),h("6itdN",function(e,t){a(e.exports,"where",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("jR1yo"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({where_:function(e,t,a){let l=(0,s.convertToTensor)(t,"a","where"),u=(0,s.convertToTensor)(a,"b","where"),p=(0,s.convertToTensor)(e,"condition","where","bool"),c=(0,i.assertAndGetBroadcastShape)((0,i.assertAndGetBroadcastShape)(p.shape,l.shape),u.shape),d=(0,o.broadcastTo)(p,c),h=(0,o.broadcastTo)(l,c),f=(0,o.broadcastTo)(u,c);return r.ENGINE.runKernel(n.Select,{condition:d,t:h,e:f})}})}),h("izexE",function(e,t){a(e.exports,"dot",()=>l);var r=d("jAOpV"),n=d("3SJNW"),s=d("bJTeV"),o=d("1zGvd"),i=d("jUNqu");let l=(0,o.op)({dot_:function(e,t){let a=(0,r.convertToTensor)(e,"t1","dot"),o=(0,r.convertToTensor)(t,"t2","dot");n.assert((1===a.rank||2===a.rank)&&(1===o.rank||2===o.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${a.rank} and ${o.rank}.`);let l=1===a.rank?a.size:a.shape[1],u=1===o.rank?o.size:o.shape[0];if(n.assert(l===u,()=>`Error in dot: inner dimensions of inputs must match, but got ${l} and ${u}.`),1===a.rank&&1===o.rank){let e=(0,i.reshape)(a,[1,-1]),t=(0,i.reshape)(o,[-1,1]),r=(0,s.matMul)(e,t);return(0,i.reshape)(r,[])}if(1===a.rank&&2===o.rank){let e=(0,i.reshape)(a,[1,-1]),t=(0,i.reshape)(o,[o.shape[0],o.shape[1]]),r=(0,s.matMul)(e,t);return(0,i.reshape)(r,[r.size])}if(2===a.rank&&1===o.rank){let e=(0,i.reshape)(o,[-1,1]),t=(0,s.matMul)(a,e);return(0,i.reshape)(t,[t.size])}{let e=(0,i.reshape)(o,[o.shape[0],o.shape[1]]);return(0,s.matMul)(a,e)}}})}),h("4CEfs",function(e,t){a(e.exports,"einsum",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({einsum_:function(e,...t){let a=t.map((e,t)=>(0,s.convertToTensor)(e,`tensors${t}`,"einsum"));return r.ENGINE.runKernel(n.Einsum,a,{equation:e})}})}),h("7bpLo",function(e,t){a(e.exports,"elu",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({elu_:function(e){let t=(0,s.convertToTensor)(e,"x","elu","float32");return r.ENGINE.runKernel(n.Elu,{x:t})}})}),h("35GWK",function(e,t){a(e.exports,"ensureShape",()=>s);var r=d("jAOpV"),n=d("3SJNW");let s=(0,d("1zGvd").op)({ensureShape_:function(e,t){let a=(0,r.convertToTensor)(e,"x","ensureShape","string_or_numeric");if(!(0,n.arraysEqualWithNull)(a.shape,t))throw Error(`EnsureShape: Shape of tensor ${a.shape} is not compatible with expected shape ${t}`);return e}})}),h("9GzWW",function(e,t){a(e.exports,"erf",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("bVaGH");let l=(0,d("1zGvd").op)({erf_:function(e){let t=(0,s.convertToTensor)(e,"x","erf");o.assert("int32"===t.dtype||"float32"===t.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===t.dtype&&(t=(0,i.cast)(t,"float32"));let a={x:t};return r.ENGINE.runKernel(n.Erf,a)}})}),h("6usDy",function(e,t){a(e.exports,"euclideanNorm",()=>n);var r=d("80uD0");let n=(0,d("1zGvd").op)({euclideanNorm_:function(e,t=null,a=!1){return(0,r.norm)(e,"euclidean",t,a)}})}),h("80uD0",function(e,t){a(e.exports,"norm",()=>x);var r=d("jAOpV"),n=d("3SJNW"),s=d("dvCKL"),o=d("5oASc"),i=d("j3Gpj"),l=d("ccTDz"),u=d("1zGvd"),p=d("fKPt4"),c=d("jUNqu"),h=d("3tgJG"),f=d("bwdHy"),m=d("koTLO"),g=d("fdJKX");let x=(0,u.op)({norm_:function(e,t="euclidean",a=null,u=!1){let d=function e(t,r,a=null){if(0===t.rank)return(0,s.abs)(t);if(1!==t.rank&&null===a)return e((0,c.reshape)(t,[-1]),r,a);if(1===t.rank||"number"==typeof a||Array.isArray(a)&&1===a.length){if(1===r)return(0,g.sum)((0,s.abs)(t),a);if(r===1/0)return(0,i.max)((0,s.abs)(t),a);if(r===-1/0)return(0,l.min)((0,s.abs)(t),a);if("euclidean"===r||2===r)return(0,f.sqrt)((0,g.sum)((0,p.pow)((0,s.abs)(t),(0,h.scalar)(2,"int32")),a));throw Error(`Error in norm: invalid ord value: ${r}`)}if(Array.isArray(a)&&2===a.length){if(1===r)return(0,i.max)((0,g.sum)((0,s.abs)(t),a[0]),a[1]-1);if(r===1/0)return(0,i.max)((0,g.sum)((0,s.abs)(t),a[1]),a[0]);if(r===-1/0)return(0,l.min)((0,g.sum)((0,s.abs)(t),a[1]),a[0]);if("fro"===r||"euclidean"===r)return(0,f.sqrt)((0,g.sum)((0,m.square)(t),a));throw Error(`Error in norm: invalid ord value: ${r}`)}throw Error(`Error in norm: invalid axis: ${a}`)}(e=(0,r.convertToTensor)(e,"x","norm"),t,a),x=d.shape;if(u){let t=(0,n.parseAxisParam)(a,e.shape);x=o.expandShapeToKeepDim(d.shape,t)}return(0,c.reshape)(d,x)}})}),h("5oASc",function(e,t){a(e.exports,"axesAreInnerMostDims",()=>n),a(e.exports,"combineLocations",()=>s),a(e.exports,"computeOutAndReduceShapes",()=>o),a(e.exports,"expandShapeToKeepDim",()=>i),a(e.exports,"assertAxesAreInnerMostDims",()=>l),a(e.exports,"getAxesPermutation",()=>u),a(e.exports,"getUndoAxesPermutation",()=>p),a(e.exports,"getInnerMostAxes",()=>c);var r=d("3SJNW");function n(e,t){for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0}function s(e,t,r){let a=e.length+t.length,n=[],s=0,o=0;for(let i=0;i<a;i++)-1===r.indexOf(i)?n.push(e[s++]):n.push(t[o++]);return n}function o(e,t){let r=[],a=e.length;for(let n=0;n<a;n++)-1===t.indexOf(n)&&r.push(e[n]);return[r,t.map(t=>e[t])]}function i(e,t){return s(e,t.map(e=>1),t)}function l(e,t,a){r.assert(n(t,a),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${a} input.`)}function u(e,t){if(n(e,t))return null;let r=[];for(let a=0;a<t;++a)-1===e.indexOf(a)&&r.push(a);return e.forEach(e=>r.push(e)),r}function p(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function c(e,t){let r=[];for(let a=t-e;a<t;++a)r.push(a);return r}}),h("j3Gpj",function(e,t){a(e.exports,"max",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({max_:function(e,t=null,a=!1){let o=(0,s.convertToTensor)(e,"x","max");return r.ENGINE.runKernel(n.Max,{x:o},{reductionIndices:t,keepDims:a})}})}),h("ccTDz",function(e,t){a(e.exports,"min",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({min_:function(e,t=null,a=!1){let o=(0,s.convertToTensor)(e,"x","min");return r.ENGINE.runKernel(n.Min,{x:o},{axis:t,keepDims:a})}})}),h("fdJKX",function(e,t){a(e.exports,"sum",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("bVaGH");let i=(0,d("1zGvd").op)({sum_:function(e,t=null,a=!1){let i=(0,s.convertToTensor)(e,"x","sum");"bool"===i.dtype&&(i=(0,o.cast)(i,"int32"));let l={x:i};return r.ENGINE.runKernel(n.Sum,l,{axis:t,keepDims:a})}})}),h("l8bnG",function(e,t){a(e.exports,"exp",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({exp_:function(e){let t=(0,s.convertToTensor)(e,"x","exp");return r.ENGINE.runKernel(n.Exp,{x:t})}})}),h("5enz8",function(e,t){a(e.exports,"expandDims",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({expandDims_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","expandDims","string_or_numeric");return o.assert(t<=a.rank,()=>"Axis must be <= rank of the tensor"),r.ENGINE.runKernel(n.ExpandDims,{input:a},{dim:t})}})}),h("knr6F",function(e,t){a(e.exports,"expm1",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({expm1_:function(e){let t=(0,s.convertToTensor)(e,"x","expm1");return r.ENGINE.runKernel(n.Expm1,{x:t})}})}),h("g8vRk",function(e,t){a(e.exports,"eye",()=>l);var r=d("hPfZs"),n=d("5enz8"),s=d("1zGvd"),o=d("jUNqu"),i=d("avklb");let l=(0,s.op)({eye_:function(e,t,a,s="float32"){null==t&&(t=e);let l=(0,r.buffer)([e,t],s),u=e<=t?e:t;for(let e=0;e<u;++e)l.set(1,e,e);let p=(0,o.reshape)(l.toTensor(),[e,t]);if(null==a)return p;if(1===a.length)return(0,i.tile)((0,n.expandDims)(p,0),[a[0],1,1]);if(2===a.length)return(0,i.tile)((0,n.expandDims)((0,n.expandDims)(p,0),0),[a[0],a[1],1,1]);if(3===a.length)return(0,i.tile)((0,n.expandDims)((0,n.expandDims)((0,n.expandDims)(p,0),0),0),[a[0],a[1],a[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${a.length}D.`)}})}),h("avklb",function(e,t){a(e.exports,"tile",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({tile_:function(e,t){let a=(0,s.convertToTensor)(e,"x","tile","string_or_numeric");return o.assert(a.rank===t.length,()=>`Error in transpose: rank of input ${a.rank} must match length of reps ${t}.`),r.ENGINE.runKernel(n.Tile,{x:a},{reps:t})}})}),h("1YPDA",function(e,t){a(e.exports,"floor",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({floor_:function(e){let t=(0,s.convertToTensor)(e,"x","floor","float32");return r.ENGINE.runKernel(n.Floor,{x:t})}})}),h("j5A35",function(e,t){a(e.exports,"gather",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({gather_:function(e,t,a=0,o=0){let i=(0,s.convertToTensor)(e,"x","gather"),l=(0,s.convertToTensor)(t,"indices","gather","int32");return r.ENGINE.runKernel(n.GatherV2,{x:i,indices:l},{axis:a,batchDims:o})}})}),h("fgKkJ",function(e,t){a(e.exports,"greater",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({greater_:function(e,t){let a=(0,o.convertToTensor)(e,"a","greater","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","greater","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.Greater,u)}})}),h("50T2r",function(e,t){a(e.exports,"greaterEqual",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({greaterEqual_:function(e,t){let a=(0,o.convertToTensor)(e,"a","greaterEqual","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","greaterEqual","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.GreaterEqual,u)}})}),h("8b3Vd",function(e,t){a(e.exports,"isFinite",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({isFinite_:function(e){let t=(0,s.convertToTensor)(e,"x","isFinite");return r.ENGINE.runKernel(n.IsFinite,{x:t})}})}),h("bOHQp",function(e,t){a(e.exports,"isInf",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({isInf_:function(e){let t=(0,s.convertToTensor)(e,"x","isInf");return r.ENGINE.runKernel(n.IsInf,{x:t})}})}),h("go7NU",function(e,t){a(e.exports,"isNaN",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({isNaN_:function(e){let t=(0,s.convertToTensor)(e,"x","isNaN");return r.ENGINE.runKernel(n.IsNan,{x:t})}})}),h("b2CE4",function(e,t){a(e.exports,"leakyRelu",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({leakyRelu_:function(e,t=.2){let a=(0,s.convertToTensor)(e,"x","leakyRelu");return r.ENGINE.runKernel(n.LeakyRelu,{x:a},{alpha:t})}})}),h("a8Ii2",function(e,t){a(e.exports,"less",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({less_:function(e,t){let a=(0,o.convertToTensor)(e,"a","less","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","less","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.Less,u)}})}),h("cYhYB",function(e,t){a(e.exports,"lessEqual",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({lessEqual_:function(e,t){let a=(0,o.convertToTensor)(e,"a","lessEqual","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","lessEqual","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.LessEqual,u)}})}),h("WLoRA",function(e,t){a(e.exports,"linspace",()=>s);var r=d("bv3K9"),n=d("dcVMt");function s(e,t,a){if(a<=0)throw Error("The number of values should be positive.");return r.ENGINE.runKernel(n.LinSpace,{},{start:e,stop:t,num:a})}}),h("j4I2B",function(e,t){a(e.exports,"localResponseNormalization",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({localResponseNormalization_:function(e,t=5,a=1,i=1,u=.5){let p=(0,s.convertToTensor)(e,"x","localResponseNormalization");o.assert(4===p.rank||3===p.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${p.rank}.`),o.assert(o.isInt(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let c=p,d=!1;3===p.rank&&(d=!0,c=(0,l.reshape)(p,[1,p.shape[0],p.shape[1],p.shape[2]]));let h={x:c},f=r.ENGINE.runKernel(n.LRN,h,{depthRadius:t,bias:a,alpha:i,beta:u});return d?(0,l.reshape)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}})}),h("3v0me",function(e,t){a(e.exports,"log",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({log_:function(e){let t=(0,s.convertToTensor)(e,"x","log","float32");return r.ENGINE.runKernel(n.Log,{x:t})}})}),h("2mGnu",function(e,t){a(e.exports,"log1p",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({log1p_:function(e){let t=(0,s.convertToTensor)(e,"x","log1p");return r.ENGINE.runKernel(n.Log1p,{x:t})}})}),h("4OBKd",function(e,t){a(e.exports,"logSigmoid",()=>p);var r=d("fYbCG"),n=d("jAOpV"),s=d("gjmji"),o=d("5ByfE"),i=d("1zGvd"),l=d("apbhs"),u=d("3IsQe");let p=(0,i.op)({logSigmoid_:function(e){let t=(0,n.convertToTensor)(e,"x","logSigmoid");return(0,r.customGrad)(e=>({value:(0,o.neg)((0,u.softplus)((0,o.neg)(e))),gradFunc:t=>(0,s.mul)(t,(0,l.sigmoid)((0,o.neg)(e)))}))(t)}})}),h("3IsQe",function(e,t){a(e.exports,"softplus",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({softplus_:function(e){let t=(0,s.convertToTensor)(e,"x","softplus");return r.ENGINE.runKernel(n.Softplus,{x:t})}})}),h("J50VT",function(e,t){a(e.exports,"logSoftmax",()=>f);var r=d("fYbCG"),n=d("jAOpV"),s=d("bVaGH"),o=d("l8bnG"),i=d("3v0me"),l=d("j3Gpj"),u=d("gjmji"),p=d("1zGvd"),c=d("5gdOH"),h=d("fdJKX");let f=(0,p.op)({logSoftmax_:function(e,t=-1){let a=(0,n.convertToTensor)(e,"logits","logSoftmax");if(-1===t&&(t=a.rank-1),t!==a.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${a.rank} and axis was ${t}`);return(0,r.customGrad)((e,r)=>{let a=(0,l.max)(e,t,!0),n=(0,c.sub)(e,a),p=(0,c.sub)((0,s.cast)(n,"float32"),(0,i.log)((0,h.sum)((0,o.exp)(n),t,!0)));return r([p]),{value:p,gradFunc:(e,r)=>{let[a]=r,n=(0,o.exp)(a);return(0,c.sub)(e,(0,u.mul)((0,h.sum)(e,t,!0),n))}}})(a)}})}),h("73tT9",function(e,t){a(e.exports,"logSumExp",()=>m);var r=d("jAOpV"),n=d("3SJNW"),s=d("iY58J"),o=d("5oASc"),i=d("l8bnG"),l=d("3v0me"),u=d("j3Gpj"),p=d("1zGvd"),c=d("jUNqu"),h=d("5gdOH"),f=d("fdJKX");let m=(0,p.op)({logSumExp_:function(e,t=null,a=!1){let p=(0,r.convertToTensor)(e,"x","logSumExp"),d=(0,n.parseAxisParam)(t,p.shape),m=(0,u.max)(p,d,!0),g=(0,h.sub)(p,m),x=(0,i.exp)(g),y=(0,f.sum)(x,d),b=(0,l.log)(y),v=(0,s.add)((0,c.reshape)(m,b.shape),b);if(a){let e=(0,o.expandShapeToKeepDim)(v.shape,d);return(0,c.reshape)(v,e)}return v}})}),h("jCv5M",function(e,t){a(e.exports,"logicalAnd",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("eCyVZ");let i=(0,d("1zGvd").op)({logicalAnd_:function(e,t){let a=(0,s.convertToTensor)(e,"a","logicalAnd","bool"),i=(0,s.convertToTensor)(t,"b","logicalAnd","bool");return(0,o.assertAndGetBroadcastShape)(a.shape,i.shape),r.ENGINE.runKernel(n.LogicalAnd,{a:a,b:i})}})}),h("7dekz",function(e,t){a(e.exports,"logicalNot",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({logicalNot_:function(e){let t=(0,s.convertToTensor)(e,"x","logicalNot","bool");return r.ENGINE.runKernel(n.LogicalNot,{x:t})}})}),h("aVN20",function(e,t){a(e.exports,"logicalOr",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("eCyVZ");let i=(0,d("1zGvd").op)({logicalOr_:function(e,t){let a=(0,s.convertToTensor)(e,"a","logicalOr","bool"),i=(0,s.convertToTensor)(t,"b","logicalOr","bool");return(0,o.assertAndGetBroadcastShape)(a.shape,i.shape),r.ENGINE.runKernel(n.LogicalOr,{a:a,b:i})}})}),h("tZKgJ",function(e,t){a(e.exports,"logicalXor",()=>l);var r=d("jAOpV"),n=d("eCyVZ"),s=d("jCv5M"),o=d("7dekz"),i=d("aVN20");let l=(0,d("1zGvd").op)({logicalXor_:function(e,t){let a=(0,r.convertToTensor)(e,"a","logicalXor","bool"),l=(0,r.convertToTensor)(t,"b","logicalXor","bool");return(0,n.assertAndGetBroadcastShape)(a.shape,l.shape),(0,s.logicalAnd)((0,i.logicalOr)(e,t),(0,o.logicalNot)((0,s.logicalAnd)(e,t)))}})}),h("lUnZ7",function(e,t){a(e.exports,"lowerBound",()=>n);var r=d("ik7I9");function n(e,t){return(0,r.searchSorted)(e,t,"left")}}),h("ik7I9",function(e,t){a(e.exports,"searchSorted",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({searchSorted_:function(e,t,a="left"){let i=(0,s.convertToTensor)(e,"sortedSequence","searchSorted"),u=(0,s.convertToTensor)(t,"values","searchSorted"),p=i.shape[i.shape.length-1],c=u.shape[u.shape.length-1],d=(0,l.reshape)(i,[-1,p]),h=(0,l.reshape)(u,[-1,c]);if(d.rank<2)throw Error("Sorted input argument must be at least 2-dimensional");if(d.shape[0]!==h.shape[0])throw Error("Leading dimension of 'sortedSequence' and 'values' must match.");if((0,o.sizeFromShape)(h.shape)>=0x80000000)throw Error("values tensor size must less than 2147483648");if(d.shape[1]>=0x80000000)throw Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${d.shape[1]}`);return r.ENGINE.runKernel(n.SearchSorted,{sortedSequence:d,values:h},{side:a})}})}),h("aVm19",function(e,t){a(e.exports,"maxPool",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("79jYH"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({maxPool_:function(e,t,a,l,p){let c=(0,s.convertToTensor)(e,"x","maxPool"),d=c,h=!1;3===c.rank&&(h=!0,d=(0,u.reshape)(c,[1,c.shape[0],c.shape[1],c.shape[2]])),o.assert(4===d.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${d.rank}.`),o.assert(i.eitherStridesOrDilationsAreOne(a,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '1'`),i.checkPadOnDimRoundingMode("maxPool",l,p);let f={x:d},m=r.ENGINE.runKernel(n.MaxPool,f,{filterSize:t,strides:a,pad:l,dimRoundingMode:p});return h?(0,u.reshape)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}})}),h("lLaBa",function(e,t){a(e.exports,"maxPool3d",()=>p);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("79jYH"),l=d("1zGvd"),u=d("jUNqu");let p=(0,l.op)({maxPool3d_:function(e,t=[1,1,1],a,l,p,c="NDHWC"){let d=(0,s.convertToTensor)(e,"x","maxPool3d"),h=d,f=!1;4===d.rank&&(f=!0,h=(0,u.reshape)(d,[1,d.shape[0],d.shape[1],d.shape[2],d.shape[3]])),o.assert(5===h.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${h.rank}.`),o.assert("NDHWC"===c,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${c}`),(0,i.checkPadOnDimRoundingMode)("maxPool3d",l,p);let m={x:h},g=r.ENGINE.runKernel(n.MaxPool3D,m,{filterSize:t,strides:a,pad:l,dimRoundingMode:p,dataFormat:c});return f?(0,u.reshape)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}})}),h("iNSc9",function(e,t){a(e.exports,"maxPoolWithArgmax",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({maxPoolWithArgmax_:function(e,t,a,o,i=!1){let l=(0,s.convertToTensor)(e,"x","maxPoolWithArgmax"),u=r.ENGINE.runKernel(n.MaxPoolWithArgmax,{x:l},{filterSize:t,strides:a,pad:o,includeBatchInIndex:i});return{result:u[0],indexes:u[1]}}})}),h("fuyCY",function(e,t){a(e.exports,"mean",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({mean_:function(e,t=null,a=!1){let o=(0,s.convertToTensor)(e,"x","mean");return r.ENGINE.runKernel(n.Mean,{x:o},{axis:t,keepDims:a})}})}),h("6wB20",function(e,t){a(e.exports,"meshgrid",()=>u);var r=d("bJTeV"),n=d("hjAWM"),s=d("jUNqu"),o=d("ciqGg"),i=d("jAOpV"),l=d("3SJNW");function u(e,t,{indexing:a="xy"}={}){if("xy"!==a&&"ij"!==a)throw TypeError(`${a} is not a valid third argument to meshgrid`);if(void 0===e)return[];let p=(0,i.convertToTensor)(e,"x","meshgrid",e instanceof o.Tensor?e.dtype:"float32");if(void 0===t)return[p];let c=(0,i.convertToTensor)(t,"y","meshgrid",t instanceof o.Tensor?t.dtype:"float32"),d=(0,l.sizeFromShape)(p.shape),h=(0,l.sizeFromShape)(c.shape);return"xy"===a?(p=(0,s.reshape)(p,[1,-1]),c=(0,s.reshape)(c,[-1,1]),[(0,r.matMul)((0,n.ones)([h,1],p.dtype),p),(0,r.matMul)(c,(0,n.ones)([1,d],c.dtype))]):(p=(0,s.reshape)(p,[-1,1]),c=(0,s.reshape)(c,[1,-1]),[(0,r.matMul)(p,(0,n.ones)([1,h],p.dtype)),(0,r.matMul)((0,n.ones)([d,1],c.dtype),c)])}}),h("hjAWM",function(e,t){a(e.exports,"ones",()=>function e(t,a="float32"){if((0,n.assertNonNegativeIntegerDimensions)(t),"complex64"===a){let r=e(t,"float32"),a=(0,o.zeros)(t,"float32");return(0,s.complex)(r,a)}let i=(0,n.makeOnesTypedArray)((0,n.sizeFromShape)(t),a);return r.ENGINE.makeTensor(i,t,a)});var r=d("bv3K9"),n=(d("3SJNW"),d("3SJNW")),s=d("eEMF3"),o=d("lCbVL")}),h("lCbVL",function(e,t){a(e.exports,"zeros",()=>function e(t,a="float32"){if((0,n.assertNonNegativeIntegerDimensions)(t),"complex64"===a){let r=e(t,"float32"),a=e(t,"float32");return(0,s.complex)(r,a)}let o=(0,n.makeZerosTypedArray)((0,n.sizeFromShape)(t),a);return r.ENGINE.makeTensor(o,t,a)});var r=d("bv3K9"),n=d("3SJNW"),s=d("eEMF3")}),h("jU2Kr",function(e,t){a(e.exports,"minimum",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ"),l=d("bVaGH");let u=(0,d("1zGvd").op)({minimum_:function(e,t){let a=(0,o.convertToTensor)(e,"a","minimum"),u=(0,o.convertToTensor)(t,"b","minimum");[a,u]=(0,s.makeTypesMatch)(a,u),"bool"===a.dtype&&(a=(0,l.cast)(a,"int32"),u=(0,l.cast)(u,"int32")),(0,i.assertAndGetBroadcastShape)(a.shape,u.shape);let p={a:a,b:u};return r.ENGINE.runKernel(n.Minimum,p)}})}),h("fN0Qz",function(e,t){a(e.exports,"mirrorPad",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({mirrorPad_:function(e,t,a){o.assert("reflect"===a||"symmetric"===a,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${a}.`);let i=(0,s.convertToTensor)(e,"x","mirrorPad");if(0===i.rank)throw Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");o.assert(t.length===i.rank,()=>`Padding doesn't match input. Must be ${i.rank}. Got ${t.length}.`);let l=+("reflect"===a);for(let e=0;e<i.rank;e++)o.assert(2===t[e].length,()=>"Invalid number of paddings. Must be length of 2 each."),o.assert(t[e][0]>=0&&t[e][0]<=i.shape[e]-l&&t[e][1]>=0&&t[e][1]<=i.shape[e]-l,()=>`Padding in dimension ${e} cannot be greater than or equal to ${i.shape[e]-l} or less than 0 for input of shape ${i.shape}`);return r.ENGINE.runKernel(n.MirrorPad,{x:i},{paddings:t,mode:a})}})}),h("iP5sa",function(e,t){a(e.exports,"mod",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV");let i=(0,d("1zGvd").op)({mod_:function(e,t){let a=(0,o.convertToTensor)(e,"a","mod"),i=(0,o.convertToTensor)(t,"b","mod");[a,i]=(0,s.makeTypesMatch)(a,i);let l={a:a,b:i};return r.ENGINE.runKernel(n.Mod,l)}})}),h("6qQsw",function(e,t){a(e.exports,"moments",()=>h);var r=d("jAOpV"),n=d("3SJNW"),s=d("5oASc"),o=d("bVaGH"),i=d("fuyCY"),l=d("1zGvd"),u=d("jUNqu"),p=d("koTLO"),c=d("5gdOH");let h=(0,l.op)({moments_:function(e,t=null,a=!1){e=(0,r.convertToTensor)(e,"x","moments");let l=(0,n.parseAxisParam)(t,e.shape),d=(0,i.mean)(e,l,a),h=d.shape;a||(h=(0,s.expandShapeToKeepDim)(d.shape,l));let f=(0,p.square)((0,c.sub)((0,o.cast)(e,"float32"),(0,u.reshape)(d,h)));return{mean:d,variance:(0,i.mean)(f,l,a)}}})}),h("7L8Ps",function(e,t){a(e.exports,"multiRNNCell",()=>n);var r=d("jAOpV");let n=(0,d("1zGvd").op)({multiRNNCell_:function(e,t,a,n){let s=(0,r.convertToTensor)(t,"data","multiRNNCell"),o=(0,r.convertToTensorArray)(a,"c","multiRNNCell"),i=(0,r.convertToTensorArray)(n,"h","multiRNNCell"),l=s,u=[];for(let t=0;t<e.length;t++){let r=e[t](l,o[t],i[t]);u.push(r[0]),u.push(r[1]),l=r[1]}let p=[],c=[];for(let e=0;e<u.length;e+=2)p.push(u[e]),c.push(u[e+1]);return[p,c]}})}),h("bm6bO",function(e,t){a(e.exports,"multinomial",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("1zGvd"),i=d("jUNqu");let l=(0,o.op)({multinomial_:function(e,t,a,o=!1){let l=(0,s.convertToTensor)(e,"logits","multinomial"),u=l.size,p=l.rank;if(u<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${u}.`);if(p>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${p}`);a=a||Math.random();let c=1===p?(0,i.reshape)(l,[1,-1]):l,d={numSamples:t,seed:a,normalized:o},h=r.ENGINE.runKernel(n.Multinomial,{logits:c},d);return 1===p?(0,i.reshape)(h,[h.size]):h}})}),h("h5yKf",function(e,t){a(e.exports,"notEqual",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({notEqual_:function(e,t){let a=(0,o.convertToTensor)(e,"a","notEqual","string_or_numeric"),l=(0,o.convertToTensor)(t,"b","notEqual","string_or_numeric");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.NotEqual,u)}})}),h("7exVQ",function(e,t){a(e.exports,"onesLike",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({onesLike_:function(e){let t=(0,s.convertToTensor)(e,"x","onesLike");return r.ENGINE.runKernel(n.OnesLike,{x:t})}})}),h("gg9wZ",function(e,t){a(e.exports,"outerProduct",()=>l);var r=d("jAOpV"),n=d("3SJNW"),s=d("bJTeV"),o=d("1zGvd"),i=d("jUNqu");let l=(0,o.op)({outerProduct_:function(e,t){let a=(0,r.convertToTensor)(e,"v1","outerProduct"),o=(0,r.convertToTensor)(t,"v2","outerProduct");n.assert(1===a.rank&&1===o.rank,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${a.rank} and ${o.rank}.`);let l=(0,i.reshape)(a,[-1,1]),u=(0,i.reshape)(o,[1,-1]);return(0,s.matMul)(l,u)}})}),h("97OJS",function(e,t){a(e.exports,"pad",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({pad_:function(e,t,a=0){let o=(0,s.convertToTensor)(e,"x","pad");if(0===o.rank)throw Error("pad(scalar) is not defined. Pass non-scalar to pad");return r.ENGINE.runKernel(n.PadV2,{x:o},{paddings:t,constantValue:a})}})}),h("kVoxX",function(e,t){a(e.exports,"pad1d",()=>o);var r=d("3SJNW"),n=d("1zGvd"),s=d("97OJS");let o=(0,n.op)({pad1d_:function(e,t,a=0){return(0,r.assert)(2===t.length,()=>"Invalid number of paddings. Must be length of 2."),(0,s.pad)(e,[t],a)}})}),h("gFnaE",function(e,t){a(e.exports,"pad2d",()=>o);var r=d("3SJNW"),n=d("1zGvd"),s=d("97OJS");let o=(0,n.op)({pad2d_:function(e,t,a=0){return(0,r.assert)(2===t.length&&2===t[0].length&&2===t[1].length,()=>"Invalid number of paddings. Must be length of 2 each."),(0,s.pad)(e,t,a)}})}),h("cFIrV",function(e,t){a(e.exports,"pad3d",()=>o);var r=d("3SJNW"),n=d("1zGvd"),s=d("97OJS");let o=(0,n.op)({pad3d_:function(e,t,a=0){return(0,r.assert)(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,()=>"Invalid number of paddings. Must be length of 2 each."),(0,s.pad)(e,t,a)}})}),h("jyX64",function(e,t){a(e.exports,"pad4d",()=>o);var r=d("3SJNW"),n=d("1zGvd"),s=d("97OJS");let o=(0,n.op)({pad4d_:function(e,t,a=0){return(0,r.assert)(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,()=>"Invalid number of paddings. Must be length of 2 each."),(0,s.pad)(e,t,a)}})}),h("9xgIX",function(e,t){a(e.exports,"pool",()=>h);var r=d("jAOpV"),n=d("3SJNW"),s=d("9BRz9"),o=d("bEW2b"),i=d("79jYH"),l=d("aVm19"),u=d("1zGvd"),p=d("jUNqu"),c=d("hqB7f");let h=(0,u.op)({pool_:function(e,t,a,u,d,h,f){let m;null==d&&(d=[1,1]),null==h&&(h=1),0===u&&(u="valid");let g=(0,r.convertToTensor)(e,"x","maxPool"),x=g,y=!1;3===g.rank&&(y=!0,x=(0,p.reshape)(g,[1,g.shape[0],g.shape[1],g.shape[2]])),n.assert(i.eitherStridesOrDilationsAreOne(h,d),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${h} and dilations '${d}'`);let b=i.computePool2DInfo(x.shape,t,h,d,u),v=[b.dilationHeight,b.dilationWidth];m="same"===u?function(e,t){let r=e.map((e,r)=>e+(e-1)*(t[r]-1)).map(e=>e-1),a=r.map(e=>Math.floor(e/2)),n=r.map((e,t)=>e-a[t]);return r.map((e,t)=>[a[t],n[t]])}([b.filterHeight,b.filterWidth],v):[[0,0],[0,0]];let T=1===v[0]&&1===v[1],[w,k]=function(e,t,r){let a=r.map(e=>e[0]),n=r.map(e=>e[1]),s=e.concat(a,n),o=t.map((e,t)=>(e-s[t]%e)%e),i=n.map((e,t)=>e+o[t]);return[t.map((e,t)=>[a[t],i[t]]),t.map((e,t)=>[0,o[t]])]}([b.inHeight,b.inWidth],v,m),N=T?u:"valid",S=T?x:(0,c.spaceToBatchND)(x,v,w),E=("avg"===a?()=>(0,s.avgPool)(S,t,h,N,f):()=>(0,l.maxPool)(S,t,h,N,f))(),I=T?E:(0,o.batchToSpaceND)(E,v,k);return y?(0,p.reshape)(I,[I.shape[1],I.shape[2],I.shape[3]]):I}})}),h("hqB7f",function(e,t){a(e.exports,"spaceToBatchND",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({spaceToBatchND_:function(e,t,a){let i=(0,s.convertToTensor)(e,"x","spaceToBatchND");return o.assert(i.rank>=1+t.length,()=>`input rank ${i.rank} should be > than [blockShape] ${t.length}`),o.assert(a.length===t.length,()=>`paddings.shape[0] ${a.length} must be equal to [blockShape] ${t.length}`),o.assert(i.shape.reduce((e,r,n)=>n>0&&n<=t.length?e&&(r+a[n-1][0]+a[n-1][1])%t[n-1]==0:e,!0),()=>`input spatial dimensions ${i.shape.slice(1)} with paddings ${a.toString()} must be divisible by blockShapes ${t.toString()}`),r.ENGINE.runKernel(n.SpaceToBatchND,{x:i},{blockShape:t,paddings:a})}})}),h("a5fAD",function(e,t){a(e.exports,"prelu",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({prelu_:function(e,t){let a=(0,s.convertToTensor)(e,"x","prelu"),o=(0,s.convertToTensor)(t,"alpha","prelu");return r.ENGINE.runKernel(n.Prelu,{x:a,alpha:o})}})}),h("88JGI",function(e,t){a(e.exports,"prod",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("bVaGH");let i=(0,d("1zGvd").op)({prod_:function(e,t=null,a=!1){let i=(0,s.convertToTensor)(e,"x","prod");"bool"===i.dtype&&(i=(0,o.cast)(i,"int32"));let l={x:i};return r.ENGINE.runKernel(n.Prod,l,{axis:t,keepDims:a})}})}),h("dgoxI",function(e,t){a(e.exports,"raggedGather",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({raggedGather_:function(e,t,a,o){let i=e.map((e,t)=>(0,s.convertToTensor)(e,`tensors${t}`,"raggedGather","int32")),l=(0,s.convertToTensor)(t,"paramsDenseValues","raggedGather"),u=(0,s.convertToTensor)(a,"indices","raggedGather","int32"),p=r.ENGINE.runKernel(n.RaggedGather,{paramsNestedSplits:i,paramsDenseValues:l,indices:u},{outputRaggedRank:o});return{outputNestedSplits:p.slice(0,p.length-1),outputDenseValues:p[p.length-1]}}})}),h("huq08",function(e,t){a(e.exports,"raggedRange",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({raggedRange_:function(e,t,a){let o=(0,s.convertToTensor)(e,"starts","raggedRange"),i=(0,s.convertToTensor)(t,"limits","raggedRange",o.dtype),l=(0,s.convertToTensor)(a,"deltas","raggedRange",o.dtype),u=r.ENGINE.runKernel(n.RaggedRange,{starts:o,limits:i,deltas:l});return{rtNestedSplits:u[0],rtDenseValues:u[1]}}})}),h("hEGPa",function(e,t){a(e.exports,"raggedTensorToTensor",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({raggedTensorToTensor_:function(e,t,a,o,i){let l=(0,s.convertToTensor)(e,"shape","raggedTensorToTensor","int32"),u=(0,s.convertToTensor)(t,"values","raggedTensorToTensor"),p=(0,s.convertToTensor)(a,"defaultValue","raggedTensorToTensor",u.dtype),c=o.map((e,t)=>(0,s.convertToTensor)(e,`tensors${t}`,"raggedTensorToTensor","int32"));return r.ENGINE.runKernel(n.RaggedTensorToTensor,{shape:l,values:u,defaultValue:p,rowPartitionTensors:c},{rowPartitionTypes:i})}})}),h("gK1uc",function(e,t){a(e.exports,"rand",()=>s);var r=d("bv3K9"),n=(d("3SJNW"),d("3SJNW"));let s=(0,d("1zGvd").op)({rand_:function(e,t,a){(0,n.assertNonNegativeIntegerDimensions)(e);let s=(0,n.sizeFromShape)(e),o=null;if(null==a||"float32"===a)o=new Float32Array(s);else if("int32"===a)o=new Int32Array(s);else if("bool"===a)o=new Uint8Array(s);else throw Error(`Unknown data type ${a}`);for(let e=0;e<s;e++)o[e]=t();return r.ENGINE.makeTensor(o,e,a)}})}),h("aikdH",function(e,t){a(e.exports,"randomGamma",()=>i);var r=d("3SJNW"),n=d("hPfZs"),s=d("1zGvd"),o=d("47XRh");let i=(0,s.op)({randomGamma_:function(e,t,a=1,s="float32",i){if((0,r.assertNonNegativeIntegerDimensions)(e),null==a&&(a=1),null==s&&(s="float32"),"float32"!==s&&"int32"!==s)throw Error(`Unsupported data type ${s}`);let l=new(0,o.RandGamma)(t,a,s,i),u=(0,n.buffer)(e,s);for(let e=0;e<u.values.length;e++)u.values[e]=l.nextValue();return u.toTensor()}})}),h("47XRh",function(e,t){a(e.exports,"MPRandGauss",()=>n),a(e.exports,"RandGamma",()=>s),a(e.exports,"UniformRandom",()=>o);var r=d("kQI8j");d("egaFx");class n{constructor(e,t,a,n,s){this.mean=e,this.stdDev=t,this.dtype=a,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);let o=s||Math.random();this.random=r.alea(o.toString())}nextValue(){let e,t;if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let r=!1;for(;!r;){let a,n,s;do s=(a=2*this.random()-1)*a+(n=2*this.random()-1)*n;while(s>=1||0===s)let o=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*o,t=this.mean+this.stdDev*n*o,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class s{constructor(e,t,a,s){this.alpha=e,this.beta=1/t,this.dtype=a;let o=s||Math.random();this.randu=r.alea(o.toString()),this.randn=new n(0,1,a,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,r,a,n,s;for(;;){do a=this.randn.nextValue(),s=1+this.c*a;while(s<=0)if(s*=s*s,t=1-.331*(e=a*a)*e,r=.5*e+this.d*(1-s+Math.log(s)),(n=this.randu())<t||Math.log(n)<r)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class o{constructor(e=0,t=1,a,n){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=a,null==n&&(n=Math.random()),"number"==typeof n&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=r.alea(n)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}}),h("kQI8j",function(e,t){var r=d("gj6Et"),a=d("4gDjz"),n=d("HLBv4"),s=d("ktaoY"),o=d("gBs5C"),i=d("ktLSh"),l=d("luGK3");l.alea=r,l.xor128=a,l.xorwow=n,l.xorshift7=s,l.xor4096=o,l.tychei=i,e.exports=l}),h("luGK3",function(e,t){!function(t,r,a){var n,s="random",o=a.pow(256,6),i=a.pow(2,52),l=2*i;function u(e,u,d){var m=[],g=h(function e(t,r){var a,n=[],s=typeof t;if(r&&"object"==s)for(a in t)try{n.push(e(t[a],r-1))}catch(e){}return n.length?n:"string"==s?t:t+"\0"}((u=!0==u?{entropy:!0}:u||{}).entropy?[e,f(r)]:null==e?function(){try{var e;return n&&(e=n.randomBytes)?e=e(256):(e=new Uint8Array(256),(t.crypto||t.msCrypto).getRandomValues(e)),f(e)}catch(e){var a=t.navigator,s=a&&a.plugins;return[+new Date,t,s,t.screen,f(r)]}}():e,3),m),x=new p(m),y=function(){for(var e=x.g(6),t=o,r=0;e<i;)e=(e+r)*256,t*=256,r=x.g(1);for(;e>=l;)e/=2,t/=2,r>>>=1;return(e+r)/t};return y.int32=function(){return 0|x.g(4)},y.quick=function(){return x.g(4)/0x100000000},y.double=y,h(f(x.S),r),(u.pass||d||function(e,t,r,n){return(n&&(n.S&&c(n,x),e.state=function(){return c(x,{})}),r)?(a[s]=e,t):e})(y,g,"global"in u?u.global:this==a,u.state)}function p(e){var t,r=e.length,a=this,n=0,s=a.i=a.j=0,o=a.S=[];for(r||(e=[r++]);n<256;)o[n]=n++;for(n=0;n<256;n++)o[n]=o[s=255&s+e[n%r]+(t=o[n])],o[s]=t;(a.g=function(e){for(var t,r=0,n=a.i,s=a.j,o=a.S;e--;)t=o[n=255&n+1],r=256*r+o[255&(o[n]=o[s=255&s+t])+(o[s]=t)];return a.i=n,a.j=s,r})(256)}function c(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function h(e,t){for(var r,a=e+"",n=0;n<a.length;)t[255&n]=255&(r^=19*t[255&n])+a.charCodeAt(n++);return f(t)}function f(e){return String.fromCharCode.apply(0,e)}if(h(a.random(),r),e.exports){e.exports=u;try{n=d("foUwZ")}catch(e){}}else"function"==typeof define&&define.amd?define(function(){return u}):a["seed"+s]=u}("undefined"!=typeof self?self:e.exports,[],Math)}),h("04qCA",function(e,t){a(e.exports,"randomNormal",()=>i);var r=d("3SJNW"),n=d("hPfZs"),s=d("1zGvd"),o=d("47XRh");let i=(0,s.op)({randomNormal_:function(e,t=0,a=1,s,i){if((0,r.assertNonNegativeIntegerDimensions)(e),null!=s&&"bool"===s)throw Error(`Unsupported data type ${s}`);let l=new(0,o.MPRandGauss)(t,a,s,!1,i),u=(0,n.buffer)(e,s);for(let e=0;e<u.values.length;e++)u.values[e]=l.nextValue();return u.toTensor()}})}),h("dhuWN",function(e,t){a(e.exports,"randomStandardNormal",()=>s);var r=d("1zGvd"),n=d("04qCA");let s=(0,r.op)({randomStandardNormal_:function(e,t,r){if(null!=t&&"bool"===t)throw Error(`Unsupported data type ${t}`);return(0,n.randomNormal)(e,0,1,t,r)}})}),h("kAGVn",function(e,t){a(e.exports,"randomUniform",()=>i);var r=d("3SJNW"),n=d("hPfZs"),s=d("1zGvd"),o=d("47XRh");let i=(0,s.op)({randomUniform_:function(e,t=0,a=1,s="float32",i){(0,r.assertNonNegativeIntegerDimensions)(e);let l=(0,n.buffer)(e,s),u=new(0,o.UniformRandom)(t,a,null,i);for(let e=0;e<l.values.length;e++)l.values[e]=u.nextValue();return l.toTensor()}})}),h("cUMu1",function(e,t){a(e.exports,"randomUniformInt",()=>s);var r=d("1zGvd"),n=d("kAGVn");let s=(0,r.op)({randomUniformInt_:function(e,t,r,a){return(0,n.randomUniform)(e,t,r,"int32",a)}})}),h("lOa1U",function(e,t){a(e.exports,"range",()=>s);var r=d("bv3K9"),n=d("dcVMt");function s(e,t,a=1,o="float32"){if(0===a)throw Error("Cannot have a step of zero");return r.ENGINE.runKernel(n.Range,{},{start:e,stop:t,step:a,dtype:o})}}),h("2uDjp",function(e,t){a(e.exports,"reciprocal",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({reciprocal_:function(e){let t=(0,s.convertToTensor)(e,"x","reciprocal");return r.ENGINE.runKernel(n.Reciprocal,{x:t})}})}),h("c13YB",function(e,t){a(e.exports,"relu",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({relu_:function(e){let t=(0,s.convertToTensor)(e,"x","relu");return r.ENGINE.runKernel(n.Relu,{x:t})}})}),h("eMkCY",function(e,t){a(e.exports,"relu6",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({relu6_:function(e){let t=(0,s.convertToTensor)(e,"x","relu6");return r.ENGINE.runKernel(n.Relu6,{x:t})}})}),h("4efDp",function(e,t){a(e.exports,"reverse",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({reverse_:function(e,t){let a=(0,s.convertToTensor)(e,"x","reverse");return r.ENGINE.runKernel(n.Reverse,{x:a},{dims:t})}})}),h("79Mtg",function(e,t){a(e.exports,"reverse1d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("4efDp");let i=(0,s.op)({reverse1d_:function(e){let t=(0,r.convertToTensor)(e,"x","reverse");return n.assert(1===t.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),(0,o.reverse)(t,0)}})}),h("3I6sE",function(e,t){a(e.exports,"reverse2d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("4efDp");let i=(0,s.op)({reverse2d_:function(e,t){let a=(0,r.convertToTensor)(e,"x","reverse");return n.assert(2===a.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${a.rank}.`),(0,o.reverse)(a,t)}})}),h("1mltb",function(e,t){a(e.exports,"reverse3d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("4efDp");let i=(0,s.op)({reverse3d_:function(e,t){let a=(0,r.convertToTensor)(e,"x","reverse");return n.assert(3===a.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${a.rank}.`),(0,o.reverse)(a,t)}})}),h("9bgY2",function(e,t){a(e.exports,"reverse4d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("4efDp");let i=(0,s.op)({reverse4d_:function(e,t){let a=(0,r.convertToTensor)(e,"x","reverse");return n.assert(4===a.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${a.rank}.`),(0,o.reverse)(a,t)}})}),h("5HOK9",function(e,t){a(e.exports,"round",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({round_:function(e){let t=(0,s.convertToTensor)(e,"x","round");return r.ENGINE.runKernel(n.Round,{x:t})}})}),h("jXvOs",function(e,t){a(e.exports,"rsqrt",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({rsqrt_:function(e){let t=(0,s.convertToTensor)(e,"x","rsqrt","float32");return r.ENGINE.runKernel(n.Rsqrt,{x:t})}})}),h("5yubi",function(e,t){a(e.exports,"selu",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({selu_:function(e){let t=(0,s.convertToTensor)(e,"x","selu");return r.ENGINE.runKernel(n.Selu,{x:t})}})}),h("g49SP",function(e,t){a(e.exports,"separableConv2d",()=>u);var r=d("jAOpV"),n=d("3SJNW"),s=d("4dtjs"),o=d("jhTCw"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({separableConv2d_:function(e,t,a,i,u,p=[1,1],c="NHWC"){let d=(0,r.convertToTensor)(e,"x","separableConv2d"),h=(0,r.convertToTensor)(t,"depthwiseFilter","separableConv2d"),f=(0,r.convertToTensor)(a,"pointwiseFilter","separableConv2d"),m=d,g=!1;if(3===d.rank&&(g=!0,m=(0,l.reshape)(d,[1,d.shape[0],d.shape[1],d.shape[2]])),"NCHW"===c)throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");n.assert(4===m.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${m.rank}.`),n.assert(4===h.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${h.rank}.`),n.assert(4===f.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${h.rank}.`),n.assert(1===f.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${f.shape[0]}.`),n.assert(1===f.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${f.shape[1]}.`);let x=h.shape[2],y=h.shape[3];n.assert(f.shape[2]===x*y,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${x*y}, but got ${f.shape[2]}.`);let b=(0,o.depthwiseConv2d)(m,h,i,u,c,p),v=(0,s.conv2d)(b,f,1,"valid",c);return g?(0,l.reshape)(v,[v.shape[1],v.shape[2],v.shape[3]]):v}})}),h("7EzH6",function(e,t){a(e.exports,"setdiff1dAsync",()=>o);var r=d("ciqGg"),n=d("jAOpV"),s=d("3SJNW");let o=async function(e,t){let a=(0,n.convertToTensor)(e,"x","setdiff1d"),o=(0,n.convertToTensor)(t,"y","setdiff1d");s.assert(a.dtype===o.dtype,()=>`x and y should have the same dtype, but got x (${a.dtype}) and y (${o.dtype}).`),s.assert(1===a.rank,()=>`x should be 1D tensor, but got x (${a.shape}).`),s.assert(1===o.rank,()=>`y should be 1D tensor, but got y (${o.shape}).`);let i=await a.data(),l=new Set(await o.data()),u=0;for(let e=0;e<i.length;e++)!l.has(i[e])&&u++;let p=new(0,r.TensorBuffer)([u],a.dtype),c=new(0,r.TensorBuffer)([u],"int32");for(let e=0,t=0;e<i.length;e++)!l.has(i[e])&&(p.values[t]=i[e],c.values[t]=e,t++);return[p.toTensor(),c.toTensor()]}}),h("2naKB",function(e,t){a(e.exports,"sign",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sign_:function(e){let t=(0,s.convertToTensor)(e,"x","sign");return r.ENGINE.runKernel(n.Sign,{x:t})}})}),h("ecNZ3",function(e,t){a(e.exports,"sin",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sin_:function(e){let t=(0,s.convertToTensor)(e,"x","sin","float32");return r.ENGINE.runKernel(n.Sin,{x:t})}})}),h("36fWO",function(e,t){a(e.exports,"sinh",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sinh_:function(e){let t=(0,s.convertToTensor)(e,"x","sinh");return r.ENGINE.runKernel(n.Sinh,{x:t})}})}),h("dzSkv",function(e,t){a(e.exports,"slice1d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("6R8FV");let i=(0,s.op)({slice1d_:function(e,t,a){let s=(0,r.convertToTensor)(e,"x","slice1d");return n.assert(1===s.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),(0,o.slice)(s,[t],[a])}})}),h("b3YMl",function(e,t){a(e.exports,"slice2d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("6R8FV");let i=(0,s.op)({slice2d_:function(e,t,a){let s=(0,r.convertToTensor)(e,"x","slice2d");return n.assert(2===s.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),(0,o.slice)(s,t,a)}})}),h("6u6Pu",function(e,t){a(e.exports,"slice3d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("6R8FV");let i=(0,s.op)({slice3d_:function(e,t,a){let s=(0,r.convertToTensor)(e,"x","slice3d");return n.assert(3===s.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),(0,o.slice)(s,t,a)}})}),h("bfJgo",function(e,t){a(e.exports,"slice4d",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("6R8FV");let i=(0,s.op)({slice4d_:function(e,t,a){let s=(0,r.convertToTensor)(e,"x","slice4d");return n.assert(4===s.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),(0,o.slice)(s,t,a)}})}),h("gwcMA",function(e,t){a(e.exports,"softmax",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({softmax_:function(e,t=-1){let a=(0,s.convertToTensor)(e,"logits","softmax","float32");if(-1===t&&(t=a.rank-1),t!==a.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${a.rank} and dim was ${t}`);let o={dim:t};return r.ENGINE.runKernel(n.Softmax,{logits:a},o)}})}),h("88T8T",function(e,t){a(e.exports,"fft",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("3SJNW");let o=(0,d("1zGvd").op)({fft_:function(e){return(0,s.assert)("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`),r.ENGINE.runKernel(n.FFT,{input:e})}})}),h("8Amut",function(e,t){a(e.exports,"ifft",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("3SJNW");let o=(0,d("1zGvd").op)({ifft_:function(e){return(0,s.assert)("complex64"===e.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`),r.ENGINE.runKernel(n.IFFT,{input:e})}})}),h("67Jhy",function(e,t){a(e.exports,"irfft",()=>m);var r=d("eEMF3"),n=d("cW6ER"),s=d("14oP5"),o=d("gjmji"),i=d("1zGvd"),l=d("8g72B"),u=d("jUNqu"),p=d("4efDp"),c=d("3tgJG"),h=d("6R8FV"),f=d("8Amut");let m=(0,i.op)({irfft_:function(e){let t,a=e.shape[e.shape.length-1],i=e.size/a;if(a<=2){let r=(0,u.reshape)(e,[i,a]);t=(0,f.ifft)(r)}else{let d=[i,2*(a-1)],m=(0,u.reshape)((0,l.real)(e),[i,a]),g=(0,u.reshape)((0,s.imag)(e),[i,a]),x=(0,p.reverse)((0,h.slice)(m,[0,1],[i,a-2]),1),y=(0,o.mul)((0,p.reverse)((0,h.slice)(g,[0,1],[i,a-2]),1),(0,c.scalar)(-1)),b=(0,n.concat)([m,x],1),v=(0,n.concat)([g,y],1),T=(0,u.reshape)((0,r.complex)(b,v),[d[0],d[1]]);t=(0,f.ifft)(T)}if(t=(0,l.real)(t),3===e.rank&&0!==e.shape[0]){let r=t,a=e.shape[0];t=(0,u.reshape)(t,[a,t.shape[0]/a,t.shape[1]]),r.dispose()}return t}})}),h("knyJ1",function(e,t){a(e.exports,"rfft",()=>g);var r=d("3SJNW"),n=d("eEMF3"),s=d("cW6ER"),o=d("14oP5"),i=d("1zGvd"),l=d("8g72B"),u=d("jUNqu"),p=d("6R8FV"),c=d("hnrac"),h=d("lCbVL"),f=d("jdxSj"),m=d("88T8T");let g=(0,i.op)({rfft_:function(e,t){let a;(0,r.assert)("float32"===e.dtype,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let i=e.shape[e.shape.length-1],d=e.size/i;if(null!=t&&t<i){let r=e.shape.map(e=>0),n=e.shape.map(e=>e);n[e.shape.length-1]=t,a=(0,p.slice)(e,r,n),i=t}else if(null!=t&&t>i){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-i,a=(0,s.concat)([e,(0,h.zeros)(r)],e.shape.length-1),i=t}else a=e;let g=(0,f.zerosLike)(a),x=(0,u.reshape)((0,n.complex)(a,g),[d,i]),y=(0,m.fft)(x),b=Math.floor(i/2)+1,v=(0,l.real)(y),T=(0,o.imag)(y),w=(0,c.split)(v,[b,i-b],v.shape.length-1),k=(0,c.split)(T,[b,i-b],T.shape.length-1),N=a.shape.slice();return N[a.shape.length-1]=b,(0,u.reshape)((0,n.complex)(w[0],k[0]),N)}})}),h("hnrac",function(e,t){a(e.exports,"split",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({split_:function(e,t,a=0){let o=(0,s.convertToTensor)(e,"x","split");return r.ENGINE.runKernel(n.SplitV,{x:o},{numOrSizeSplits:t,axis:a})}})}),h("72iFe",function(e,t){a(e.exports,"squaredDifference",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("kyuDB"),o=d("jAOpV"),i=d("eCyVZ");let l=(0,d("1zGvd").op)({squaredDifference_:function(e,t){let a=(0,o.convertToTensor)(e,"a","squaredDifference"),l=(0,o.convertToTensor)(t,"b","squaredDifference");[a,l]=(0,s.makeTypesMatch)(a,l),(0,i.assertAndGetBroadcastShape)(a.shape,l.shape);let u={a:a,b:l};return r.ENGINE.runKernel(n.SquaredDifference,u,{})}})}),h("hXFvf",function(e,t){a(e.exports,"squeeze",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("jUNqu");let i=(0,s.op)({squeeze_:function(e,t){let a=(0,r.convertToTensor)(e,"x","squeeze","string_or_numeric");return(0,o.reshape)(a,(0,n.squeezeShape)(a.shape,t).newShape)}})}),h("a5zZz",function(e,t){a(e.exports,"stack",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({stack_:function(e,t=0){let a=(0,s.convertToTensorArray)(e,"tensors","stack","string_or_numeric");return o.assert(a.length>=1,()=>"Pass at least one tensor to tf.stack"),a.length>0&&o.assert(t<=a[0].rank,()=>"Axis must be <= rank of the tensor"),r.ENGINE.runKernel(n.Pack,a,{axis:t})}})}),h("49Lag",function(e,t){a(e.exports,"step",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({step_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","step");return r.ENGINE.runKernel(n.Step,{x:a},{alpha:t})}})}),h("5d7e8",function(e,t){a(e.exports,"stridedSlice",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({stridedSlice_:function(e,t,a,o,i=0,l=0,u=0,p=0,c=0){let d=(0,s.convertToTensor)(e,"x","stridedSlice","string_or_numeric");return r.ENGINE.runKernel(n.StridedSlice,{x:d},{begin:t,end:a,strides:o,beginMask:i,endMask:l,ellipsisMask:u,newAxisMask:p,shrinkAxisMask:c})}})}),h("jrLW7",function(e,t){a(e.exports,"tan",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({tan_:function(e){let t=(0,s.convertToTensor)(e,"x","tan","float32");return r.ENGINE.runKernel(n.Tan,{x:t})}})}),h("iruxo",function(e,t){a(e.exports,"tensor1d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t){(0,n.assertNonNull)(e);let a=(0,r.inferShape)(e,t);if(1!==a.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return(0,s.makeTensor)(e,null,a,t)}}),h("kyebq",function(e,t){a(e.exports,"tensor2d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t,a){if((0,n.assertNonNull)(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");let o=(0,r.inferShape)(e,a);if(2!==o.length&&1!==o.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===o.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,s.makeTensor)(e,t,o,a)}}),h("a66Rf",function(e,t){a(e.exports,"tensor4d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t,a){if((0,n.assertNonNull)(e),null!=t&&4!==t.length)throw Error("tensor4d() requires shape to have four numbers");let o=(0,r.inferShape)(e,a);if(4!==o.length&&1!==o.length)throw Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===o.length&&null==t)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return(0,s.makeTensor)(e,t,o,a)}}),h("knEF5",function(e,t){a(e.exports,"tensor5d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t,a){if((0,n.assertNonNull)(e),null!=t&&5!==t.length)throw Error("tensor5d() requires shape to have five numbers");let o=(0,r.inferShape)(e,a);if(5!==o.length&&1!==o.length)throw Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===o.length&&null==t)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return(0,s.makeTensor)(e,t,o,a)}}),h("9E90g",function(e,t){a(e.exports,"tensor6d",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("7vxE5");function o(e,t,a){if((0,n.assertNonNull)(e),null!=t&&6!==t.length)throw Error("tensor6d() requires shape to have six numbers");let o=(0,r.inferShape)(e,a);if(6!==o.length&&1!==o.length)throw Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===o.length&&null==t)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||o,(0,s.makeTensor)(e,t,o,a)}}),h("jc5lM",function(e,t){a(e.exports,"tensorScatterUpdate",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("1zGvd"),i=d("jvRff");let l=(0,o.op)({tensorScatterUpdate_:function(e,t,a){let o=(0,s.convertToTensor)(e,"tensor","tensorScatterupdate"),l=(0,s.convertToTensor)(t,"indices","tensorScatterupdate","int32"),u=(0,s.convertToTensor)(a,"updates","tensorScatterupdate");if(i.validateInput(u,l,o.shape),o.dtype!==u.dtype)throw Error(`tensor and updates must have the same dtype, instead they are ${o.dtype} and ${u.dtype}.`);return r.ENGINE.runKernel(n.TensorScatterUpdate,{tensor:o,indices:l,updates:u},{})}})}),h("bRZUr",function(e,t){a(e.exports,"topk",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({topk_:function(e,t=1,a=!0){let o=(0,s.convertToTensor)(e,"x","topk");if(0===o.rank)throw Error("topk() expects the input to be of rank 1 or higher");let i=o.shape[o.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let[l,u]=r.ENGINE.runKernel(n.TopK,{x:o},{k:t,sorted:a});return{values:l,indices:u}}})}),h("kDWl9",function(e,t){a(e.exports,"truncatedNormal",()=>i);var r=d("3SJNW"),n=d("hPfZs"),s=d("1zGvd"),o=d("47XRh");let i=(0,s.op)({truncatedNormal_:function(e,t=0,a=1,s,i){if((0,r.assertNonNegativeIntegerDimensions)(e),null!=s&&"bool"===s)throw Error("Unsupported data type $ { dtype }");let l=new(0,o.MPRandGauss)(t,a,s,!0,i),u=(0,n.buffer)(e,s);for(let e=0;e<u.values.length;e++)u.values[e]=l.nextValue();return u.toTensor()}})}),h("i4fwT",function(e,t){a(e.exports,"unique",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({unique_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","unique","string_or_numeric");(0,o.assert)(a.rank>0,()=>"The input tensor must be at least 1D");let[i,l]=r.ENGINE.runKernel(n.Unique,{x:a},{axis:t});return{values:i,indices:l}}})}),h("g8wPY",function(e,t){a(e.exports,"unsortedSegmentSum",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({unsortedSegmentSum_:function(e,t,a){let i=(0,s.convertToTensor)(e,"x","unsortedSegmentSum"),l=(0,s.convertToTensor)(t,"segmentIds","unsortedSegmentSum","int32");return(0,o.assert)((0,o.isInt)(a),()=>"numSegments must be of dtype int"),r.ENGINE.runKernel(n.UnsortedSegmentSum,{x:i,segmentIds:l},{numSegments:a})}})}),h("dqFom",function(e,t){a(e.exports,"unstack",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({unstack_:function(e,t=0){let a=(0,s.convertToTensor)(e,"x","unstack","string_or_numeric");return o.assert(t>=-a.shape.length&&t<a.shape.length,()=>`Axis = ${t} is not in [-${a.shape.length}, ${a.shape.length})`),r.ENGINE.runKernel(n.Unpack,{value:a},{axis:t})}})}),h("kdYX1",function(e,t){a(e.exports,"upperBound",()=>n);var r=d("ik7I9");function n(e,t){return(0,r.searchSorted)(e,t,"right")}}),h("k8G4i",function(e,t){a(e.exports,"variable",()=>n);var r=d("bv3K9");function n(e,t=!0,a,s){return r.ENGINE.makeVariable(e,t,a,s)}}),h("5f6SY",function(e,t){a(e.exports,"whereAsync",()=>s);var r=d("i01WV"),n=d("jAOpV");let s=async function(e){let t=(0,n.convertToTensor)(e,"condition","whereAsync","bool"),a=await t.data(),s=(0,r.whereImpl)(t.shape,a);return e!==t&&t.dispose(),s}}),h("i01WV",function(e,t){a(e.exports,"whereImpl",()=>n);var r=d("hPfZs");function n(e,t){let a=[];for(let e=0;e<t.length;e++)t[e]&&a.push(e);let n=(0,r.buffer)(e,"int32"),s=(0,r.buffer)([a.length,e.length],"int32");for(let t=0;t<a.length;t++){let r=n.indexToLoc(a[t]),o=t*e.length;s.values.set(r,o)}return s.toTensor()}}),h("lo5i8",function(e,t){a(e.exports,"booleanMaskAsync",()=>u);var r=d("jAOpV"),n=d("3SJNW"),s=d("j5A35"),o=d("jUNqu"),i=d("hXFvf"),l=d("5f6SY");let u=async function(e,t,a){let u=(0,r.convertToTensor)(e,"tensor","boolMask"),p=(0,r.convertToTensor)(t,"mask","boolMask","bool"),c=null==a?0:a,d=p.rank,h=u.shape;n.assert(d>0,()=>"mask cannot be scalar"),n.assertShapesMatch(h.slice(c,c+d),p.shape,"mask's shape must match the first K dimensions of tensor's shape,");let f=1;for(let e=c;e<c+d;e++)f*=h[e];let m=h.slice(0,c).concat([f],h.slice(c+d)),g=(0,o.reshape)(u,m),x=(0,o.reshape)(p,[-1]),y=await (0,l.whereAsync)(x),b=(0,i.squeeze)(y,[1]),v=(0,s.gather)(g,b,c);return e!==u&&u.dispose(),t!==p&&p.dispose(),b.dispose(),g.dispose(),x.dispose(),y.dispose(),v}}),h("aQvZc",function(e,t){a(e.exports,"movingAverage",()=>f);var r=d("kyuDB"),n=d("jAOpV"),s=d("3SJNW"),o=d("iY58J"),i=d("auyfQ"),l=d("gjmji"),u=d("1zGvd"),p=d("fKPt4"),c=d("3tgJG"),h=d("5gdOH");let f=(0,u.op)({movingAverage_:function(e,t,a,u,d=!0){let f=(0,n.convertToTensor)(e,"v","movingAverage"),m=(0,n.convertToTensor)(t,"x","movingAverage"),g=(0,n.convertToTensor)(a,"decay","movingAverage");(0,r.assertTypesMatch)(f,m),s.assert(s.arraysEqual(f.shape,m.shape),()=>"Shape mismatch in v and x");let x=(0,c.scalar)(1),y=(0,h.sub)(x,g),b=(0,l.mul)((0,h.sub)(m,f),y);if(d){s.assert(null!=u,()=>"When using zeroDebias: true, step is required.");let e=(0,n.convertToTensor)(u,"step","movingAverage");b=(0,i.div)(b,(0,h.sub)(x,(0,p.pow)(g,e)))}return(0,o.add)(f,b)}})}),h("8Ylzi",function(e,t){a(e.exports,"scatterND",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jvRff");let u=(0,i.op)({scatterND_:function(e,t,a){(0,o.assertNonNegativeIntegerDimensions)(a);let i=(0,s.convertToTensor)(e,"indices","scatterND","int32"),u=(0,s.convertToTensor)(t,"updates","scatterND");return l.validateInput(u,i,a),r.ENGINE.runKernel(n.ScatterNd,{indices:i,updates:u},{shape:a})}})}),h("5Z7oe",function(e,t){a(e.exports,"sparseToDense",()=>l);var r=d("bv3K9"),n=d("dcVMt"),s=d("7VhC9"),o=d("jAOpV"),i=d("3SJNW");let l=(0,d("1zGvd").op)({sparseToDense_:function(e,t,a,l=0){(0,i.assertNonNegativeIntegerDimensions)(a);let u=(0,o.convertToTensor)(e,"sparseIndices","sparseToDense","int32"),p=(0,o.convertToTensor)(t,"sparseValues","sparseToDense","string_or_numeric"),c=(0,o.convertToTensor)(l,"defaultValue","sparseToDense",p.dtype);return s.validateInput(u,p,a,c),r.ENGINE.runKernel(n.SparseToDense,{sparseIndices:u,sparseValues:p,defaultValue:c},{outputShape:a})}})}),h("7VhC9",function(e,t){a(e.exports,"validateInput",()=>r);function r(e,t,r,a){if("int32"!==e.dtype)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let n=e.rank>0?e.shape[0]:1,s=e.rank>1?e.shape[1]:1;if(r.length!==s)throw Error(`outputShape has incorrect number of elements:, ${r.length}, should be: ${s}.`);let o=t.size;if(0!==t.rank&&(1!==t.rank||o!==n))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${n}]`);if(t.dtype!==a.dtype)throw Error("sparseValues.dtype must match defaultValues.dtype")}}),h("h7zRE",function(e,t){a(e.exports,"gatherND",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({gatherND_:function(e,t){let a=(0,s.convertToTensor)(t,"indices","gatherND","int32"),o=(0,s.convertToTensor)(e,"x","gatherND","string_or_numeric");return r.ENGINE.runKernel(n.GatherNd,{params:o,indices:a})}})}),h("lIyaB",function(e,t){a(e.exports,"dropout",()=>f);var r=d("ciqGg"),n=d("jAOpV"),s=d("3SJNW"),o=d("iY58J"),i=d("auyfQ"),l=d("4lBoc"),u=d("1YPDA"),p=d("gjmji"),c=d("1zGvd"),h=d("kAGVn");let f=(0,c.op)({dropout_:function(e,t,a,c){let d=(0,n.convertToTensor)(e,"x","dropout");if(s.assert("float32"===d.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${d.dtype} tensor instead.`),s.assert(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),0===t)return e instanceof r.Tensor?d.clone():d;let f=(0,l.getNoiseShape)(d,a),m=1-t,g=(0,i.div)((0,u.floor)((0,o.add)((0,h.randomUniform)(f,0,1,"float32",c),m)),m);return(0,p.mul)(d,g)}})}),h("4lBoc",function(e,t){a(e.exports,"getNoiseShape",()=>n);var r=d("3SJNW");function n(e,t){if(null==t)return e.shape.slice();if(r.arraysEqual(e.shape,t))return t;if(e.shape.length===t.length){let r=[];for(let a=0;a<e.shape.length;a++)null==t[a]&&null!=e.shape[a]?r.push(e.shape[a]):r.push(t[a]);return r}return t}}),h("8NziA",function(e,t){a(e.exports,"enclosingPowerOfTwo",()=>n),a(e.exports,"cosineWindow",()=>s);var r=d("iruxo");function n(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function s(e,t,a){let n=1-e%2,s=new Float32Array(e);for(let r=0;r<e;++r){let o=2*Math.PI*r/(e+n-1);s[r]=t-a*Math.cos(o)}return(0,r.tensor1d)(s,"float32")}}),h("6j4Wh",function(e,t){a(e.exports,"inTopKAsync",()=>o);var r=d("jAOpV"),n=d("3SJNW"),s=d("DXGru");let o=async function(e,t,a=1){let o=(0,r.convertToTensor)(e,"predictions","inTopK"),i=(0,r.convertToTensor)(t,"targets","inTopK");(0,n.assert)(o.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${o.rank}`),(0,n.assert)(o.rank-1===i.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${i.rank}`),(0,n.assertShapesMatch)(o.shape.slice(0,o.shape.length-1),i.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let l=o.shape[o.shape.length-1];(0,n.assert)(a>0&&a<=l,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${l}), but got ${a}`);let u=await o.data(),p=await i.data(),[c,d]=[u.length/l,l],h=(0,n.getTypedArrayFromDType)("bool",c);for(let e=0;e<c;e++){let t=e*d,r=u.subarray(t,t+d),n=[];for(let e=0;e<r.length;e++)n.push({value:r[e],index:e});n.sort((e,t)=>t.value-e.value),h[e]=0;for(let t=0;t<a;t++)if(n[t].index===p[e]){h[e]=1;break}}return e!==o&&o.dispose(),t!==i&&i.dispose(),(0,s.tensor)(h,i.shape,"bool")}}),h("drqO4",function(e,t){a(e.exports,"conv2d",()=>d("lMHbw").conv2d),a(e.exports,"depthwiseConv2d",()=>d("9W4U3").depthwiseConv2d),a(e.exports,"matMul",()=>d("9sNgB").matMul),d("lMHbw"),d("9W4U3"),d("9sNgB")}),h("lMHbw",function(e,t){a(e.exports,"conv2d",()=>b);var r=d("bv3K9"),n=d("fYbCG"),s=d("dcVMt"),o=d("kyuDB"),i=d("jAOpV"),l=d("3SJNW"),u=d("iY58J"),p=d("eCyVZ"),c=d("4dtjs"),h=d("2Y5wf"),f=d("chVmA"),m=d("79jYH"),g=d("jDnTu"),x=d("1zGvd"),y=d("jUNqu");let b=(0,x.op)({fusedConv2d_:function({x:e,filter:t,strides:a,pad:d,dataFormat:x="NHWC",dilations:b=[1,1],dimRoundingMode:v,bias:T,activation:w="linear",preluActivationWeights:k,leakyreluAlpha:N}){let S,E;if(w=w||"linear",!1===(0,g.shouldFuse)(r.ENGINE.state.gradientDepth,w)){l.assert("NHWC"===x,()=>`Error in fused conv2d: got dataFormat of ${x} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let r=(0,c.conv2d)(e,t,a,d,x,b,v);return null!=T&&(r=(0,u.add)(r,T)),(0,g.applyActivation)(r,w,k,N)}let I=(0,i.convertToTensor)(e,"x","conv2d","float32"),C=(0,i.convertToTensor)(t,"filter","conv2d","float32"),$=I,A=!1;3===I.rank&&(A=!0,$=(0,y.reshape)(I,[1,I.shape[0],I.shape[1],I.shape[2]])),l.assert(4===$.rank,()=>`Error in fused conv2d: input must be rank 4, but got rank ${$.rank}.`),l.assert(4===C.rank,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${C.rank}.`),m.checkPadOnDimRoundingMode("fused conv2d",d,v);let R="NHWC"===x?$.shape[3]:$.shape[1];l.assert(C.shape[2]===R,()=>`Error in conv2d: depth of input (${R}) must match input depth for filter ${C.shape[2]}.`),l.assert(m.eitherStridesOrDilationsAreOne(a,b),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${a} and dilations '${b}'`);let M=m.computeConv2DInfo($.shape,C.shape,a,b,d,v);if(null!=T&&(S=(0,i.convertToTensor)(T,"bias","fused conv2d"),[S]=(0,o.makeTypesMatch)(S,I),"NHWC"===x?p.assertAndGetBroadcastShape(M.outShape,S.shape):(l.assert(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),l.assert(0===S.shape.length||S.shape[0]===M.outChannels||1===S.shape[0],()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${M.outChannels})`))),null!=k){let e=k.shape;if(l.assert(e.length<=1||3===e.length,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),1===e.length)l.assert(1===e[0]||e[0]===M.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${M.outChannels}).`);else if(3===e.length)try{p.assertAndGetBroadcastShape(e,M.outShape)}catch(t){throw Error(`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${M.outShape}).`)}E=(0,i.convertToTensor)(k,"prelu weights","fused conv2d")}let O=(e,t)=>{l.assert("NHWC"===x,()=>`Error in gradient of fused conv2D: got dataFormat of ${x} but only NHWC is currently supported.`);let[r,n,s,o]=t,i=(0,g.getFusedDyActivation)(e,s,w);l.assert(m.tupleValuesAreOne(b),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${b}'`);let u=[(0,f.conv2DBackpropInput)(n.shape,i,r,a,d),(0,h.conv2DBackpropFilter)(n,i,r.shape,a,d)];if(null!=o){let e=(0,g.getFusedBiasGradient)(o,i);u.push(e)}return u},V={x:$,filter:C,bias:S,preluActivationWeights:E},P={strides:a,pad:d,dataFormat:x,dilations:b,dimRoundingMode:v,activation:w,leakyreluAlpha:N};return null==T?(0,n.customGrad)((e,t,a)=>{let n=r.ENGINE.runKernel(s.FusedConv2D,V,P);return a([t,e,n]),A&&(n=(0,y.reshape)(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:O}})($,C):(0,n.customGrad)((e,t,a,n)=>{let o=r.ENGINE.runKernel(s.FusedConv2D,V,P);return n([t,e,o,a]),A&&(o=(0,y.reshape)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:O}})($,C,S)}})}),h("2Y5wf",function(e,t){a(e.exports,"conv2DBackpropFilter",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("3SJNW"),o=d("79jYH"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({conv2DBackpropFilter_:function(e,t,a,i,u,p="NHWC",c){let d=e;3===e.rank&&(d=(0,l.reshape)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let h=t;3===h.rank&&(h=(0,l.reshape)(t,[1,t.shape[0],t.shape[1],t.shape[2]])),s.assert(4===d.rank,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${d.shape}.`),s.assert(4===h.rank,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${h.shape}.`),s.assert(4===a.length,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${a}.`);let f="NHWC"===p?d.shape[3]:d.shape[1],m="NHWC"===p?h.shape[3]:h.shape[1];s.assert(f===a[2],()=>`Error in conv2dDerFilter: depth of input ${f}) must match input depth in filter (${a[2]}.`),s.assert(m===a[3],()=>`Error in conv2dDerFilter: depth of dy (${m}) must match output depth for filter (${a[3]}).`),o.checkPadOnDimRoundingMode("conv2dDerFilter",u,c);let g={x:d,dy:h};return r.ENGINE.runKernel(n.Conv2DBackpropFilter,g,{strides:i,pad:u,dataFormat:p,dimRoundingMode:c,filterShape:a})}})}),h("jDnTu",function(e,t){a(e.exports,"getFusedDyActivation",()=>m),a(e.exports,"getFusedBiasGradient",()=>g),a(e.exports,"applyActivation",()=>x),a(e.exports,"shouldFuse",()=>y);var r=d("eCyVZ"),n=d("7bpLo"),s=d("b2CE4"),o=d("gjmji"),i=d("a5fAD"),l=d("c13YB"),u=d("eMkCY"),p=d("jUNqu"),c=d("apbhs"),h=d("49Lag"),f=d("fdJKX");function m(e,t,r){if(null==r||"linear"===r)return e;if("relu"===r)return(0,o.mul)(e,(0,h.step)(t));throw Error(`Cannot compute gradient for fused activation ${r}.`)}function g(e,t){let a=t,n=r.getReductionAxes(e.shape,t.shape);return n.length>0&&(a=(0,f.sum)(a,n)),(0,p.reshape)(a,e.shape)}function x(e,t,r,a){if("linear"===t)return e;if("relu"===t)return(0,l.relu)(e);if("elu"===t)return(0,n.elu)(e);if("relu6"===t)return(0,u.relu6)(e);if("prelu"===t)return(0,i.prelu)(e,r);else if("leakyrelu"===t)return(0,s.leakyRelu)(e,a);else if("sigmoid"===t)return(0,c.sigmoid)(e);throw Error(`Unknown fused activation ${t}.`)}let y=(e,t)=>!(e>0)||"linear"===t}),h("9W4U3",function(e,t){a(e.exports,"depthwiseConv2d",()=>b);var r=d("bv3K9"),n=d("fYbCG"),s=d("dcVMt"),o=d("kyuDB"),i=d("jAOpV"),l=d("3SJNW"),u=d("iY58J"),p=d("eCyVZ"),c=d("79jYH"),h=d("jhTCw"),f=d("9F0kl"),m=d("3NbvC"),g=d("jDnTu"),x=d("1zGvd"),y=d("jUNqu");let b=(0,x.op)({fusedDepthwiseConv2d_:function({x:e,filter:t,strides:a,pad:d,dataFormat:x="NHWC",dilations:b=[1,1],dimRoundingMode:v,bias:T,activation:w="linear",preluActivationWeights:k,leakyreluAlpha:N}){let S,E;if(!1===(0,g.shouldFuse)(r.ENGINE.state.gradientDepth,w)){let r=(0,h.depthwiseConv2d)(e,t,a,d,x,b,v);return null!=T&&(r=(0,u.add)(r,T)),(0,g.applyActivation)(r,w,k,N)}let I=(0,i.convertToTensor)(e,"x","depthwiseConv2d","float32"),C=(0,i.convertToTensor)(t,"filter","depthwiseConv2d","float32"),$=I,A=!1;3===I.rank&&(A=!0,$=(0,y.reshape)(I,[1,I.shape[0],I.shape[1],I.shape[2]])),l.assert(4===$.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${$.rank}.`),l.assert(4===C.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${C.rank}.`),l.assert($.shape[3]===C.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${$.shape[3]}) must match the inChannels dimension in filter ${C.shape[2]}.`),null==b&&(b=[1,1]),l.assert(c.eitherStridesOrDilationsAreOne(a,b),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${b}'`),c.checkPadOnDimRoundingMode("fused depthwiseConv2d",d,v);let R=c.computeConv2DInfo($.shape,C.shape,a,b,d,v,!0);null!=T&&(S=(0,i.convertToTensor)(T,"bias","fused conv2d"),[S]=(0,o.makeTypesMatch)(S,I),p.assertAndGetBroadcastShape(R.outShape,S.shape)),null!=k&&(E=(0,i.convertToTensor)(k,"prelu weights","fused depthwiseConv2d"));let M=(e,t)=>{l.assert(c.tupleValuesAreOne(b),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${b}'`);let[r,n,s,o]=t,i=(0,g.getFusedDyActivation)(e,s,w),u=(0,m.depthwiseConv2dNativeBackpropInput)(n.shape,i,r,a,d,b,v),p=(0,f.depthwiseConv2dNativeBackpropFilter)(n,i,r.shape,a,d,b,v);return null!=o?[u,p,(0,g.getFusedBiasGradient)(S,i)]:[u,p]},O={x:$,filter:C,bias:S,preluActivationWeights:E},V={strides:a,pad:d,dataFormat:x,dilations:b,dimRoundingMode:v,activation:w,leakyreluAlpha:N};return null==T?(0,n.customGrad)((e,t,a)=>{let n=r.ENGINE.runKernel(s.FusedDepthwiseConv2D,O,V);return a([t,e,n]),A&&(n=(0,y.reshape)(n,[n.shape[1],n.shape[2],n.shape[3]])),{value:n,gradFunc:M}})($,C):(0,n.customGrad)((e,t,a,n)=>{let o=r.ENGINE.runKernel(s.FusedDepthwiseConv2D,O,V);return n([t,e,o,a]),A&&(o=(0,y.reshape)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:M}})($,C,S)}})}),h("9F0kl",function(e,t){a(e.exports,"depthwiseConv2dNativeBackpropFilter",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("1zGvd"),o=d("jUNqu");let i=(0,s.op)({depthwiseConv2dNativeBackpropFilter_:function(e,t,a,s,i,l=[1,1],u){let p=e;3===e.rank&&(p=(0,o.reshape)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;3===c.rank&&(c=(0,o.reshape)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let d={x:p,dy:c};return r.ENGINE.runKernel(n.DepthwiseConv2dNativeBackpropFilter,d,{strides:s,pad:i,dimRoundingMode:u,dilations:l,filterShape:a})}})}),h("3NbvC",function(e,t){a(e.exports,"depthwiseConv2dNativeBackpropInput",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("1zGvd"),o=d("jUNqu");let i=(0,s.op)({depthwiseConv2dNativeBackpropInput_:function(e,t,a,s,i,l=[1,1],u){let p=t,c=!1;3===t.rank&&(c=!0,p=(0,o.reshape)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let d={dy:p,filter:a},h=r.ENGINE.runKernel(n.DepthwiseConv2dNativeBackpropInput,d,{strides:s,pad:i,dimRoundingMode:u,dilations:l,inputShape:e});return c?(0,o.reshape)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})}),h("9sNgB",function(e,t){a(e.exports,"matMul",()=>g);var r=d("bv3K9"),n=d("fYbCG"),s=d("dcVMt"),o=d("kyuDB"),i=d("jAOpV"),l=d("3SJNW"),u=d("iY58J"),p=d("eCyVZ"),c=d("jDnTu"),h=d("bJTeV"),f=d("1zGvd"),m=d("jUNqu");let g=(0,f.op)({fusedMatMul_:function({a:e,b:t,transposeA:a=!1,transposeB:d=!1,bias:f,activation:g="linear",preluActivationWeights:x,leakyreluAlpha:y=.2}){let b,v;if(!1===(0,c.shouldFuse)(r.ENGINE.state.gradientDepth,g)){let r=(0,h.matMul)(e,t,a,d);return null!=f&&(r=(0,u.add)(r,f)),(0,c.applyActivation)(r,g,x,y)}let T=(0,i.convertToTensor)(e,"a","fused matMul"),w=(0,i.convertToTensor)(t,"b","fused matMul");[T,w]=(0,o.makeTypesMatch)(T,w);let k=a?T.shape[T.rank-2]:T.shape[T.rank-1],N=d?w.shape[w.rank-1]:w.shape[w.rank-2],S=a?T.shape[T.rank-1]:T.shape[T.rank-2],E=d?w.shape[w.rank-2]:w.shape[w.rank-1],I=T.shape.slice(0,-2),C=w.shape.slice(0,-2),$=l.sizeFromShape(I),A=l.sizeFromShape(C);l.assert(k===N,()=>`Error in fused matMul: inner shapes (${k}) and (${N}) of Tensors with shapes ${T.shape} and ${w.shape} and transposeA=${a} and transposeB=${d} must match.`);let R=p.assertAndGetBroadcastShape(T.shape.slice(0,-2),w.shape.slice(0,-2)).concat([S,E]),M=a?(0,m.reshape)(T,[$,k,S]):(0,m.reshape)(T,[$,S,k]),O=d?(0,m.reshape)(w,[A,E,N]):(0,m.reshape)(w,[A,N,E]);null!=f&&(b=(0,i.convertToTensor)(f,"bias","fused matMul"),[b]=(0,o.makeTypesMatch)(b,T),p.assertAndGetBroadcastShape(R,b.shape)),null!=x&&(v=(0,i.convertToTensor)(x,"prelu weights","fused matMul"));let V=(e,t)=>{let r,n,[s,o,i,l]=t,u=(0,c.getFusedDyActivation)((0,m.reshape)(e,i.shape),i,g);return(a||d?!a&&d?(r=(0,h.matMul)(u,o,!1,!1),n=(0,h.matMul)(u,s,!0,!1)):a&&!d?(r=(0,h.matMul)(o,u,!1,!0),n=(0,h.matMul)(s,u,!1,!1)):(r=(0,h.matMul)(o,u,!0,!0),n=(0,h.matMul)(u,s,!0,!0)):(r=(0,h.matMul)(u,o,!1,!0),n=(0,h.matMul)(s,u,!0,!1)),null!=f)?[r,n,(0,c.getFusedBiasGradient)(l,u)]:[r,n]},P={a:M,b:O,bias:b,preluActivationWeights:v},D={transposeA:a,transposeB:d,activation:g,leakyreluAlpha:y};return null==f?(0,n.customGrad)((e,t,a)=>{let n=r.ENGINE.runKernel(s._FusedMatMul,P,D);return a([e,t,n]),{value:(0,m.reshape)(n,R),gradFunc:V}})(M,O):(0,n.customGrad)((e,t,a,n)=>{let o=r.ENGINE.runKernel(s._FusedMatMul,P,D);return n([e,t,o,a]),{value:(0,m.reshape)(o,R),gradFunc:V}})(M,O,b)}})}),h("eh0jq",function(e,t){a(e.exports,"hammingWindow",()=>s);var r=d("1zGvd"),n=d("8NziA");let s=(0,r.op)({hammingWindow_:function(e){return(0,n.cosineWindow)(e,.54,.46)}})}),h("6qbVE",function(e,t){a(e.exports,"hannWindow",()=>s);var r=d("1zGvd"),n=d("8NziA");let s=(0,r.op)({hannWindow_:function(e){return(0,n.cosineWindow)(e,.5,.5)}})}),h("i2qak",function(e,t){a(e.exports,"frame",()=>u);var r=d("cW6ER"),n=d("3Nhg4"),s=d("1zGvd"),o=d("jUNqu"),i=d("6R8FV"),l=d("kyebq");let u=(0,s.op)({frame_:function(e,t,a,s=!1,u=0){let p=0,c=[];for(;p+t<=e.size;)c.push((0,i.slice)(e,p,t)),p+=a;if(s)for(;p<e.size;){let s=p+t-e.size,o=(0,r.concat)([(0,i.slice)(e,p,t-s),(0,n.fill)([s],u)]);c.push(o),p+=a}return 0===c.length?(0,l.tensor2d)([],[0,t]):(0,o.reshape)((0,r.concat)(c),[c.length,t])}})}),h("gpFst",function(e,t){a(e.exports,"stft",()=>u);var r=d("gjmji"),n=d("1zGvd"),s=d("8NziA"),o=d("knyJ1"),i=d("i2qak"),l=d("6qbVE");let u=(0,n.op)({stft_:function(e,t,a,n,u=l.hannWindow){null==n&&(n=(0,s.enclosingPowerOfTwo)(t));let p=(0,i.frame)(e,t,a),c=(0,r.mul)(p,u(t));return(0,o.rfft)(c,n)}})}),h("hSrkT",function(e,t){a(e.exports,"cropAndResize",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({cropAndResize_:function(e,t,a,i,l="bilinear",u=0){let p=(0,s.convertToTensor)(e,"image","cropAndResize"),c=(0,s.convertToTensor)(t,"boxes","cropAndResize","float32"),d=(0,s.convertToTensor)(a,"boxInd","cropAndResize","int32"),h=c.shape[0];return o.assert(4===p.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${p.rank}.`),o.assert(2===c.rank&&4===c.shape[1],()=>`Error in cropAndResize: boxes must be have size [${h},4] but had shape ${c.shape}.`),o.assert(1===d.rank&&d.shape[0]===h,()=>`Error in cropAndResize: boxInd must be have size [${h}] but had shape ${c.shape}.`),o.assert(2===i.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${i.length}.`),o.assert(i[0]>=1&&i[1]>=1,()=>`cropSize must be atleast [1,1], but was ${i}`),o.assert("bilinear"===l||"nearest"===l,()=>`method must be bilinear or nearest, but was ${l}`),r.ENGINE.runKernel(n.CropAndResize,{image:p,boxes:c,boxInd:d},{method:l,extrapolationValue:u,cropSize:i})}})}),h("gPX4c",function(e,t){a(e.exports,"flipLeftRight",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({flipLeftRight_:function(e){let t=(0,s.convertToTensor)(e,"image","flipLeftRight","float32");return o.assert(4===t.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`),r.ENGINE.runKernel(n.FlipLeftRight,{image:t},{})}})}),h("8wTUz",function(e,t){a(e.exports,"grayscaleToRGB",()=>i);var r=d("jAOpV"),n=d("3SJNW"),s=d("1zGvd"),o=d("avklb");let i=(0,s.op)({grayscaleToRGB_:function(e){let t=(0,r.convertToTensor)(e,"image","grayscaleToRGB"),a=t.rank-1,s=t.shape[a];n.assert(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),n.assert(1===s,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);let i=Array(t.rank);return i.fill(1,0,a),i[a]=3,(0,o.tile)(t,i)}})}),h("fy4VU",function(e,t){a(e.exports,"rgbToGrayscale",()=>p);var r=d("jAOpV"),n=d("3SJNW"),s=d("bVaGH"),o=d("4CEfs"),i=d("5enz8"),l=d("1zGvd"),u=d("iruxo");let p=(0,l.op)({rgbToGrayscale_:function(e){let t,a=(0,r.convertToTensor)(e,"image","RGBToGrayscale"),l=a.rank-1,p=a.shape[l];n.assert(a.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${a.rank}.`),n.assert(3===p,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${p}.`);let c=a.dtype,d=(0,s.cast)(a,"float32"),h=(0,u.tensor1d)([.2989,.587,.114]);switch(a.rank){case 2:t=(0,o.einsum)("ij,j->i",d,h);break;case 3:t=(0,o.einsum)("ijk,k->ij",d,h);break;case 4:t=(0,o.einsum)("ijkl,l->ijk",d,h);break;case 5:t=(0,o.einsum)("ijklm,m->ijkl",d,h);break;case 6:t=(0,o.einsum)("ijklmn,n->ijklm",d,h);break;default:throw Error("Not a valid tensor rank.")}return t=(0,i.expandDims)(t,-1),(0,s.cast)(t,c)}})}),h("c7fgq",function(e,t){a(e.exports,"rotateWithOffset",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({rotateWithOffset_:function(e,t,a=0,i=.5){let l=(0,s.convertToTensor)(e,"image","rotateWithOffset","float32");return o.assert(4===l.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${l.rank}.`),r.ENGINE.runKernel(n.RotateWithOffset,{image:l},{radians:t,fillValue:a,center:i})}})}),h("aglDy",function(e,t){a(e.exports,"nonMaxSuppression",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("fekLc");let i=(0,d("1zGvd").op)({nonMaxSuppression_:function(e,t,a,i=.5,l=Number.NEGATIVE_INFINITY){let u=(0,s.convertToTensor)(e,"boxes","nonMaxSuppression","float32"),p=(0,s.convertToTensor)(t,"scores","nonMaxSuppression","float32"),c=(0,o.nonMaxSuppSanityCheck)(u,p,a,i,l);a=c.maxOutputSize;let d={maxOutputSize:a,iouThreshold:i=c.iouThreshold,scoreThreshold:l=c.scoreThreshold};return r.ENGINE.runKernel(n.NonMaxSuppressionV3,{boxes:u,scores:p},d)}})}),h("fekLc",function(e,t){a(e.exports,"nonMaxSuppSanityCheck",()=>n);var r=d("3SJNW");function n(e,t,a,n,s,o){null==n&&(n=.5),null==s&&(s=Number.NEGATIVE_INFINITY),null==o&&(o=0);let i=e.shape[0];return a=Math.min(a,i),r.assert(0<=n&&n<=1,()=>`iouThreshold must be in [0, 1], but was '${n}'`),r.assert(2===e.rank,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),r.assert(4===e.shape[1],()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),r.assert(1===t.rank,()=>"scores must be a 1D tensor"),r.assert(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),r.assert(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:a,iouThreshold:n,scoreThreshold:s,softNmsSigma:o}}}),h("cGx90",function(e,t){a(e.exports,"nonMaxSuppressionAsync",()=>i);var r=d("gaMz8"),n=d("jAOpV"),s=d("fekLc"),o=d("iruxo");let i=async function(e,t,a,i=.5,l=Number.NEGATIVE_INFINITY){let u=(0,n.convertToTensor)(e,"boxes","nonMaxSuppressionAsync"),p=(0,n.convertToTensor)(t,"scores","nonMaxSuppressionAsync"),c=(0,s.nonMaxSuppSanityCheck)(u,p,a,i,l);a=c.maxOutputSize,i=c.iouThreshold,l=c.scoreThreshold;let d=await Promise.all([u.data(),p.data()]),h=d[0],f=d[1],{selectedIndices:m}=(0,r.nonMaxSuppressionV3Impl)(h,f,a,i,l);return u!==e&&u.dispose(),p!==t&&p.dispose(),(0,o.tensor1d)(m,"int32")}}),h("gaMz8",function(e,t){a(e.exports,"nonMaxSuppressionV3Impl",()=>n),a(e.exports,"nonMaxSuppressionV4Impl",()=>s),a(e.exports,"nonMaxSuppressionV5Impl",()=>o);var r=d("1R2cz");function n(e,t,r,a,n){return i(e,t,r,a,n,0)}function s(e,t,r,a,n,s){return i(e,t,r,a,n,0,!1,s,!0)}function o(e,t,r,a,n,s){return i(e,t,r,a,n,s,!0)}function i(e,t,a,n,s,o,u=!1,p=!1,c=!1){let d=[];for(let e=0;e<t.length;e++)t[e]>s&&d.push({score:t[e],boxIndex:e,suppressBeginIndex:0});d.sort(l);let h=o>0?-.5/o:0,f=[],m=[];for(;f.length<a&&d.length>0;){let t=d.pop(),{score:a,boxIndex:o,suppressBeginIndex:i}=t;if(a<s)break;let u=!1;for(let r=f.length-1;r>=i;--r){let a=function(e,t,r){let a=e.subarray(4*t,4*t+4),n=e.subarray(4*r,4*r+4),s=Math.min(a[0],a[2]),o=Math.min(a[1],a[3]),i=Math.max(a[0],a[2]),l=Math.max(a[1],a[3]),u=Math.min(n[0],n[2]),p=Math.min(n[1],n[3]),c=Math.max(n[0],n[2]),d=Math.max(n[1],n[3]),h=(i-s)*(l-o),f=(c-u)*(d-p);if(h<=0||f<=0)return 0;let m=Math.max(Math.min(i,c)-Math.max(s,u),0)*Math.max(Math.min(l,d)-Math.max(o,p),0);return m/(h+f-m)}(e,o,f[r]);if(a>=n){u=!0;break}if(t.score=t.score*function(e,t,r){let a=Math.exp(t*r*r);return r<=e?a:0}(n,h,a),t.score<=s)break}t.suppressBeginIndex=f.length,!u&&(t.score===a?(f.push(o),m.push(t.score)):t.score>s&&(0,r.binaryInsert)(d,t,l))}let g=f.length,x=a-g;p&&x>0&&(f.push(...Array(x).fill(0)),m.push(...Array(x).fill(0)));let y={selectedIndices:f};return u&&(y.selectedScores=m),c&&(y.validOutputs=g),y}function l(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}}),h("1R2cz",function(e,t){function r(e,t,r){let a=function(e,t,r){let a=0,n=e.length,s=0,o=!1;for(;a<n;){let i=r(t,e[s=a+(n-a>>>1)]);i>0?a=s+1:(n=s,o=!i)}return o?a:-a-1}(e,t,r||n);e.splice(a<0?-(a+1):a,0,t)}function n(e,t){return e>t?1:e<t?-1:0}a(e.exports,"binaryInsert",()=>r)}),h("18z5H",function(e,t){a(e.exports,"nonMaxSuppressionWithScore",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("fekLc");let i=(0,d("1zGvd").op)({nonMaxSuppressionWithScore_:function(e,t,a,i=.5,l=Number.NEGATIVE_INFINITY,u=0){let p=(0,s.convertToTensor)(e,"boxes","nonMaxSuppression"),c=(0,s.convertToTensor)(t,"scores","nonMaxSuppression"),d=(0,o.nonMaxSuppSanityCheck)(p,c,a,i,l,u);a=d.maxOutputSize,i=d.iouThreshold,l=d.scoreThreshold;let h={maxOutputSize:a,iouThreshold:i,scoreThreshold:l,softNmsSigma:u=d.softNmsSigma},f=r.ENGINE.runKernel(n.NonMaxSuppressionV5,{boxes:p,scores:c},h);return{selectedIndices:f[0],selectedScores:f[1]}}})}),h("aCFhG",function(e,t){a(e.exports,"nonMaxSuppressionWithScoreAsync",()=>i);var r=d("gaMz8"),n=d("jAOpV"),s=d("fekLc"),o=d("iruxo");let i=async function(e,t,a,i=.5,l=Number.NEGATIVE_INFINITY,u=0){let p=(0,n.convertToTensor)(e,"boxes","nonMaxSuppressionAsync"),c=(0,n.convertToTensor)(t,"scores","nonMaxSuppressionAsync"),d=(0,s.nonMaxSuppSanityCheck)(p,c,a,i,l,u);a=d.maxOutputSize,i=d.iouThreshold,l=d.scoreThreshold,u=d.softNmsSigma;let h=await Promise.all([p.data(),c.data()]),f=h[0],m=h[1],{selectedIndices:g,selectedScores:x}=(0,r.nonMaxSuppressionV5Impl)(f,m,a,i,l,u);return p!==e&&p.dispose(),c!==t&&c.dispose(),{selectedIndices:(0,o.tensor1d)(g,"int32"),selectedScores:(0,o.tensor1d)(x)}}}),h("dUM4R",function(e,t){a(e.exports,"nonMaxSuppressionPadded",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("fekLc");let i=(0,d("1zGvd").op)({nonMaxSuppressionPadded_:function(e,t,a,i=.5,l=Number.NEGATIVE_INFINITY,u=!1){let p=(0,s.convertToTensor)(e,"boxes","nonMaxSuppression"),c=(0,s.convertToTensor)(t,"scores","nonMaxSuppression"),d=(0,o.nonMaxSuppSanityCheck)(p,c,a,i,l,null),h=d.maxOutputSize,f=d.iouThreshold,m=d.scoreThreshold,g=r.ENGINE.runKernel(n.NonMaxSuppressionV4,{boxes:p,scores:c},{maxOutputSize:h,iouThreshold:f,scoreThreshold:m,padToMaxOutputSize:u});return{selectedIndices:g[0],validOutputs:g[1]}}})}),h("Dl0Lq",function(e,t){a(e.exports,"nonMaxSuppressionPaddedAsync",()=>l);var r=d("gaMz8"),n=d("jAOpV"),s=d("fekLc"),o=d("3tgJG"),i=d("iruxo");let l=async function(e,t,a,l=.5,u=Number.NEGATIVE_INFINITY,p=!1){let c=(0,n.convertToTensor)(e,"boxes","nonMaxSuppressionAsync"),d=(0,n.convertToTensor)(t,"scores","nonMaxSuppressionAsync"),h=(0,s.nonMaxSuppSanityCheck)(c,d,a,l,u,null),f=h.maxOutputSize,m=h.iouThreshold,g=h.scoreThreshold,[x,y]=await Promise.all([c.data(),d.data()]),{selectedIndices:b,validOutputs:v}=(0,r.nonMaxSuppressionV4Impl)(x,y,f,m,g,p);return c!==e&&c.dispose(),d!==t&&d.dispose(),{selectedIndices:(0,i.tensor1d)(b,"int32"),validOutputs:(0,o.scalar)(v,"int32")}}}),h("kY1Wo",function(e,t){a(e.exports,"resizeBilinear",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({resizeBilinear_:function(e,t,a=!1,i=!1){let u=(0,s.convertToTensor)(e,"images","resizeBilinear");o.assert(3===u.rank||4===u.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${u.rank}.`),o.assert(2===t.length,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),o.assert(!1===i||!1===a,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let p=u,c=!1;3===u.rank&&(c=!0,p=(0,l.reshape)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));let[]=t,d={images:p},h=r.ENGINE.runKernel(n.ResizeBilinear,d,{alignCorners:a,halfPixelCenters:i,size:t});return c?(0,l.reshape)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})}),h("e5v4z",function(e,t){a(e.exports,"resizeNearestNeighbor",()=>u);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW"),i=d("1zGvd"),l=d("jUNqu");let u=(0,i.op)({resizeNearestNeighbor_:function(e,t,a=!1,i=!1){let u=(0,s.convertToTensor)(e,"images","resizeNearestNeighbor");o.assert(3===u.rank||4===u.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${u.rank}.`),o.assert(2===t.length,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),o.assert("float32"===u.dtype||"int32"===u.dtype,()=>"`images` must have `int32` or `float32` as dtype"),o.assert(!1===i||!1===a,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let p=u,c=!1;3===u.rank&&(c=!0,p=(0,l.reshape)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));let[]=t,d={images:p},h=r.ENGINE.runKernel(n.ResizeNearestNeighbor,d,{alignCorners:a,halfPixelCenters:i,size:t});return c?(0,l.reshape)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}})}),h("xPQdT",function(e,t){a(e.exports,"threshold",()=>N);var r=d("iruxo"),n=d("1zGvd"),s=d("bVaGH"),o=d("hnrac"),i=d("33fB8"),l=d("cYhYB"),u=d("fgKkJ"),p=d("fdJKX"),c=d("iY58J"),h=d("gjmji"),f=d("auyfQ"),m=d("5gdOH"),g=d("5HOK9"),x=d("6itdN"),y=d("3Nhg4"),b=d("6R8FV"),v=d("lOa1U"),T=d("DXGru"),w=d("3SJNW"),k=d("jAOpV");let N=(0,n.op)({threshold_:function(e,t="binary",a=!1,n=.5){let d,N,S,E,I=(0,k.convertToTensor)(e,"image","threshold"),C=I.shape[0]*I.shape[1],$=(0,h.mul)((0,r.tensor1d)([n]),255);if(w.assert(3===I.rank,()=>`Error in threshold: image must be rank 3,but got rank ${I.rank}.`),w.assert(3===I.shape[2]||1===I.shape[2],()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${I.shape[2]}.`),w.assert("int32"===I.dtype||"float32"===I.dtype,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${I.dtype}.`),w.assert("otsu"===t||"binary"===t,()=>`Method must be binary or otsu, but was ${t}`),3===I.shape[2]){[d,N,S]=(0,o.split)(I,[1,1,1],-1);let e=(0,h.mul)(d,.2989),t=(0,h.mul)(N,.587),r=(0,h.mul)(S,.114);E=(0,c.add)((0,c.add)(e,t),r)}else E=e;"otsu"===t&&($=function(e,t){let a,n,s,o,i,l,d=(0,r.tensor1d)([-1]),g=(0,r.tensor1d)([0]),T=(0,r.tensor1d)([0]);for(let w=0;w<e.size-1;w++){a=(0,b.slice)(e,0,w+1),n=(0,b.slice)(e,w+1),i=(0,f.div)((0,p.sum)(a),t),l=(0,f.div)((0,p.sum)(n),t);let k=(0,p.sum)((0,h.mul)(a,(0,v.range)(0,a.size)));s=(0,f.div)(k,(0,p.sum)(a));let N=(0,y.fill)(n.shape,a.size),S=(0,c.add)((0,v.range)(0,n.size),N),E=(0,h.mul)(n,S);o=(0,f.div)((0,p.sum)(E),(0,p.sum)(n));let I=(0,m.sub)(s,o),C=(0,m.sub)(s,o),$=(0,h.mul)(i,l);T=(0,h.mul)((0,h.mul)($,I),C);let A=(0,u.greater)(T,g);g=(0,x.where)(A,T,g),d=(0,x.where)(A,(0,r.tensor1d)([w]),d)}return d}((0,i.bincount)((0,s.cast)((0,g.round)(E),"int32"),(0,T.tensor)([]),256),C));let A=a?(0,l.lessEqual)(E,$):(0,u.greater)(E,$);return(0,s.cast)((0,h.mul)(A,255),"int32")}})}),h("hWEZ2",function(e,t){a(e.exports,"transform",()=>i);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV"),o=d("3SJNW");let i=(0,d("1zGvd").op)({transform_:function(e,t,a="nearest",i="constant",l=0,u){let p=(0,s.convertToTensor)(e,"image","transform","float32"),c=(0,s.convertToTensor)(t,"transforms","transform","float32");return o.assert(4===p.rank,()=>`Error in transform: image must be rank 4,but got rank ${p.rank}.`),o.assert(2===c.rank&&(c.shape[0]===p.shape[0]||1===c.shape[0])&&8===c.shape[1],()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),o.assert(null==u||2===u.length,()=>`Error in transform: outputShape must be [height, width] or null, but got ${u}.`),r.ENGINE.runKernel(n.Transform,{image:p,transforms:c},{interpolation:a,fillMode:i,fillValue:l,outputShape:u})}})}),h("55pNK",function(e,t){a(e.exports,"bandPart",()=>v);var r=d("jAOpV"),n=d("3SJNW"),s=d("50T2r"),o=d("a8Ii2"),i=d("cYhYB"),l=d("jCv5M"),u=d("jU2Kr"),p=d("5ByfE"),c=d("1zGvd"),h=d("lOa1U"),f=d("jUNqu"),m=d("a5zZz"),g=d("5gdOH"),x=d("dqFom"),y=d("6itdN"),b=d("lCbVL");let v=(0,c.op)({bandPart_:function(e,t,a){let c,d,v=(0,r.convertToTensor)(e,"a","bandPart");(0,n.assert)(v.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${v.rank}.`);let T=v.shape,[w,k]=v.shape.slice(-2);"number"==typeof t?((0,n.assert)(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),(0,n.assert)(t<=w,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${w}).`),c=(0,r.convertToTensor)(t<0?w:t,"numLower","bandPart")):((0,n.assert)("int32"===t.dtype,()=>"bandPart(): numLower's dtype must be an int32."),c=(0,y.where)((0,o.less)(t,0),w,(0,u.minimum)(t,w))),"number"==typeof a?((0,n.assert)(a%1==0,()=>`bandPart(): numUpper must be an integer, got ${a}.`),(0,n.assert)(a<=k,()=>`bandPart(): numUpper (${a}) must not be greater than the number of columns (${k}).`),d=(0,r.convertToTensor)(a<0?k:a,"numUpper","bandPart")):((0,n.assert)("int32"===a.dtype,()=>"bandPart(): numUpper's dtype must be an int32."),d=(0,y.where)((0,o.less)(a,0),k,(0,u.minimum)(a,k)));let N=(0,f.reshape)((0,h.range)(0,w,1,"int32"),[-1,1]),S=(0,h.range)(0,k,1,"int32"),E=(0,g.sub)(N,S),I=(0,l.logicalAnd)((0,i.lessEqual)(E,c),(0,s.greaterEqual)(E,(0,p.neg)(d))),C=(0,b.zeros)([w,k],v.dtype);return(0,f.reshape)((0,m.stack)((0,x.unstack)((0,f.reshape)(v,[-1,w,k])).map(e=>(0,y.where)(I,e,C))),T)}})}),h("gjqRL",function(e,t){a(e.exports,"gramSchmidt",()=>m);var r=d("bv3K9"),n=d("3SJNW"),s=d("auyfQ"),o=d("gjmji"),i=d("80uD0"),l=d("1zGvd"),u=d("hnrac"),p=d("hXFvf"),c=d("a5zZz"),h=d("5gdOH"),f=d("fdJKX");let m=(0,l.op)({gramSchmidt_:function(e){let t;if(Array.isArray(e)){t=!1,(0,n.assert)(null!=e&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let r=e[0].shape[0];for(let t=1;t<e.length;++t)(0,n.assert)(e[t].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${r})`)}else t=!0,e=(0,u.split)(e,e.shape[0],0).map(e=>(0,p.squeeze)(e,[0]));(0,n.assert)(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let a=[],l=e;for(let t=0;t<e.length;++t)a.push(r.ENGINE.tidy(()=>{let e=l[t];if(t>0)for(let r=0;r<t;++r){let t=(0,o.mul)((0,f.sum)((0,o.mul)(a[r],e)),a[r]);e=(0,h.sub)(e,t)}return(0,s.div)(e,(0,i.norm)(e,"euclidean"))}));return t?(0,c.stack)(a,0):a}})}),h("9uatt",function(e,t){a(e.exports,"qr",()=>E);var r=d("bv3K9"),n=d("1c9K8"),s=d("3SJNW"),o=d("gtIz2"),i=d("cW6ER"),l=d("auyfQ"),u=d("g8vRk"),p=d("fgKkJ"),c=d("bJTeV"),h=d("gjmji"),f=d("5ByfE"),m=d("80uD0"),g=d("1zGvd"),x=d("jUNqu"),y=d("6R8FV"),b=d("a5zZz"),v=d("5gdOH"),T=d("kyebq"),w=d("jKgnL"),k=d("dqFom"),N=d("6itdN");function S(e,t=!1){return r.ENGINE.tidy(()=>{(0,s.assert)(2===e.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let a=e.shape[0],d=e.shape[1],g=(0,u.eye)(a),x=(0,o.clone)(e),b=(0,T.tensor2d)([[1]],[1,1]),k=(0,o.clone)(b),S=a>=d?d:a;for(let e=0;e<S;++e){let t=x,s=k,u=g;[k,x,g]=r.ENGINE.tidy(()=>{let t=(0,y.slice)(x,[e,e],[a-e,1]),r=(0,m.norm)(t),n=(0,y.slice)(x,[e,e],[1,1]),s=(0,N.where)((0,p.greater)(n,0),(0,T.tensor2d)([[-1]]),(0,T.tensor2d)([[1]])),u=(0,v.sub)(n,(0,h.mul)(s,r)),S=(0,l.div)(t,u);k=1===S.shape[0]?(0,o.clone)(b):(0,i.concat)([b,(0,y.slice)(S,[1,0],[S.shape[0]-1,S.shape[1]])],0);let E=(0,f.neg)((0,l.div)((0,c.matMul)(s,u),r)),I=(0,y.slice)(x,[e,0],[a-e,d]),C=(0,h.mul)(E,k),$=(0,w.transpose)(k);if(0===e)x=(0,v.sub)(I,(0,c.matMul)(C,(0,c.matMul)($,I)));else{let t=(0,v.sub)(I,(0,c.matMul)(C,(0,c.matMul)($,I)));x=(0,i.concat)([(0,y.slice)(x,[0,0],[e,d]),t],0)}let A=(0,w.transpose)(C),R=(0,y.slice)(g,[0,e],[a,g.shape[1]-e]);if(0===e)g=(0,v.sub)(R,(0,c.matMul)((0,c.matMul)(R,k),A));else{let t=(0,v.sub)(R,(0,c.matMul)((0,c.matMul)(R,k),A));g=(0,i.concat)([(0,y.slice)(g,[0,0],[a,e]),t],1)}return[k,x,g]}),(0,n.dispose)([t,s,u])}return!t&&a>d&&(g=(0,y.slice)(g,[0,0],[a,d]),x=(0,y.slice)(x,[0,0],[d,d])),[g,x]})}let E=(0,g.op)({qr_:function(e,t=!1){if((0,s.assert)(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),2===e.rank)return S(e,t);{let r=e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),a=(0,k.unstack)((0,x.reshape)(e,[r,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),n=[],s=[];return a.forEach(e=>{let[r,a]=S(e,t);n.push(r),s.push(a)}),[(0,x.reshape)((0,b.stack)(n,0),e.shape),(0,x.reshape)((0,b.stack)(s,0),e.shape)]}}})}),h("d76J4",function(e,t){a(e.exports,"absoluteDifference",()=>p);var r=d("jAOpV"),n=d("3SJNW"),s=d("dvCKL"),o=d("bbwI4"),i=d("1zGvd"),l=d("5gdOH"),u=d("hJ3bA");let p=(0,i.op)({absoluteDifference_:function(e,t,a,i=o.Reduction.SUM_BY_NONZERO_WEIGHTS){let p=(0,r.convertToTensor)(e,"labels","absoluteDifference"),c=(0,r.convertToTensor)(t,"predictions","absoluteDifference"),d=null;null!=a&&(d=(0,r.convertToTensor)(a,"weights","absoluteDifference")),(0,n.assertShapesMatch)(p.shape,c.shape,"Error in absoluteDifference: ");let h=(0,s.abs)((0,l.sub)(p,c));return(0,u.computeWeightedLoss)(h,d,i)}})}),h("bbwI4",function(e,t){var r,n;a(e.exports,"Reduction",()=>r),(n=r||(r={}))[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}),h("hJ3bA",function(e,t){a(e.exports,"computeWeightedLoss",()=>m);var r=d("jAOpV"),n=d("bVaGH"),s=d("auyfQ"),o=d("bbwI4"),i=d("fuyCY"),l=d("gjmji"),u=d("h5yKf"),p=d("hjAWM"),c=d("1zGvd"),h=d("3tgJG"),f=d("fdJKX");let m=(0,c.op)({computeWeightedLoss_:function(e,t,a=o.Reduction.SUM_BY_NONZERO_WEIGHTS){let c=(0,r.convertToTensor)(e,"losses","computeWeightedLoss"),d=null;null!=t&&(d=(0,r.convertToTensor)(t,"weights","computeWeightedLoss"));let m=null==d?c:(0,l.mul)(c,d);if(a===o.Reduction.NONE)return m;if(a===o.Reduction.SUM)return(0,f.sum)(m);if(a===o.Reduction.MEAN)if(null==d)return(0,i.mean)(m);else{let e=c.size/d.size,t=(0,s.div)((0,f.sum)(m),(0,f.sum)(d));return e>1?(0,s.div)(t,(0,h.scalar)(e)):t}if(a===o.Reduction.SUM_BY_NONZERO_WEIGHTS)if(null==d)return(0,s.div)((0,f.sum)(m),(0,h.scalar)(c.size));else{let e=(0,l.mul)(d,(0,p.ones)(c.shape)),t=(0,n.cast)((0,f.sum)((0,u.notEqual)(e,(0,h.scalar)(0))),"float32");return(0,s.div)((0,f.sum)(m),t)}throw Error(`Unknown reduction: ${a}`)}})}),h("7mbgc",function(e,t){a(e.exports,"cosineDistance",()=>h);var r=d("jAOpV"),n=d("3SJNW"),s=d("bbwI4"),o=d("gjmji"),i=d("1zGvd"),l=d("3tgJG"),u=d("5gdOH"),p=d("fdJKX"),c=d("hJ3bA");let h=(0,i.op)({cosineDistance_:function(e,t,a,i,d=s.Reduction.SUM_BY_NONZERO_WEIGHTS){let h=(0,r.convertToTensor)(e,"labels","cosineDistance"),f=(0,r.convertToTensor)(t,"predictions","cosineDistance"),m=null;null!=i&&(m=(0,r.convertToTensor)(i,"weights","cosineDistance")),(0,n.assertShapesMatch)(h.shape,f.shape,"Error in cosineDistance: ");let g=(0,l.scalar)(1),x=(0,u.sub)(g,(0,p.sum)((0,o.mul)(h,f),a,!0));return(0,c.computeWeightedLoss)(x,m,d)}})}),h("dReKg",function(e,t){a(e.exports,"hingeLoss",()=>h);var r=d("jAOpV"),n=d("3SJNW"),s=d("bbwI4"),o=d("gjmji"),i=d("1zGvd"),l=d("c13YB"),u=d("3tgJG"),p=d("5gdOH"),c=d("hJ3bA");let h=(0,i.op)({hingeLoss_:function(e,t,a,i=s.Reduction.SUM_BY_NONZERO_WEIGHTS){let d=(0,r.convertToTensor)(e,"labels","hingeLoss"),h=(0,r.convertToTensor)(t,"predictions","hingeLoss"),f=null;null!=a&&(f=(0,r.convertToTensor)(a,"weights","hingeLoss")),(0,n.assertShapesMatch)(d.shape,h.shape,"Error in hingeLoss: ");let m=(0,u.scalar)(1);d=(0,p.sub)((0,o.mul)((0,u.scalar)(2),d),m);let g=(0,l.relu)((0,p.sub)(m,(0,o.mul)(d,h)));return(0,c.computeWeightedLoss)(g,f,i)}})}),h("bNOGd",function(e,t){a(e.exports,"huberLoss",()=>g);var r=d("jAOpV"),n=d("3SJNW"),s=d("dvCKL"),o=d("iY58J"),i=d("bbwI4"),l=d("jU2Kr"),u=d("gjmji"),p=d("1zGvd"),c=d("3tgJG"),h=d("koTLO"),f=d("5gdOH"),m=d("hJ3bA");let g=(0,p.op)({huberLoss_:function(e,t,a,p=1,d=i.Reduction.SUM_BY_NONZERO_WEIGHTS){let g=(0,r.convertToTensor)(e,"labels","huberLoss"),x=(0,r.convertToTensor)(t,"predictions","huberLoss"),y=null;null!=a&&(y=(0,r.convertToTensor)(a,"weights","huberLoss")),(0,n.assertShapesMatch)(g.shape,x.shape,"Error in huberLoss: ");let b=(0,c.scalar)(p),v=(0,s.abs)((0,f.sub)(x,g)),T=(0,l.minimum)(v,b),w=(0,f.sub)(v,T),k=(0,o.add)((0,u.mul)((0,c.scalar)(.5),(0,h.square)(T)),(0,u.mul)(b,w));return(0,m.computeWeightedLoss)(k,y,d)}})}),h("63o5e",function(e,t){a(e.exports,"logLoss",()=>m);var r=d("jAOpV"),n=d("3SJNW"),s=d("iY58J"),o=d("3v0me"),i=d("bbwI4"),l=d("gjmji"),u=d("5ByfE"),p=d("1zGvd"),c=d("3tgJG"),h=d("5gdOH"),f=d("hJ3bA");let m=(0,p.op)({logLoss_:function(e,t,a,p=1e-7,d=i.Reduction.SUM_BY_NONZERO_WEIGHTS){let m=(0,r.convertToTensor)(e,"labels","logLoss"),g=(0,r.convertToTensor)(t,"predictions","logLoss"),x=null;null!=a&&(x=(0,r.convertToTensor)(a,"weights","logLoss")),(0,n.assertShapesMatch)(m.shape,g.shape,"Error in logLoss: ");let y=(0,c.scalar)(1),b=(0,c.scalar)(p),v=(0,u.neg)((0,l.mul)(m,(0,o.log)((0,s.add)(g,b)))),T=(0,l.mul)((0,h.sub)(y,m),(0,o.log)((0,s.add)((0,h.sub)(y,g),b))),w=(0,h.sub)(v,T);return(0,f.computeWeightedLoss)(w,x,d)}})}),h("65Iyn",function(e,t){a(e.exports,"meanSquaredError",()=>u);var r=d("jAOpV"),n=d("3SJNW"),s=d("bbwI4"),o=d("1zGvd"),i=d("72iFe"),l=d("hJ3bA");let u=(0,o.op)({meanSquaredError_:function(e,t,a,o=s.Reduction.SUM_BY_NONZERO_WEIGHTS){let u=(0,r.convertToTensor)(e,"labels","meanSquaredError"),p=(0,r.convertToTensor)(t,"predictions","meanSquaredError"),c=null;null!=a&&(c=(0,r.convertToTensor)(a,"weights","meanSquaredError")),(0,n.assertShapesMatch)(u.shape,p.shape,"Error in meanSquaredError: ");let d=(0,i.squaredDifference)(u,p);return(0,l.computeWeightedLoss)(d,c,o)}})}),h("bkp5t",function(e,t){a(e.exports,"sigmoidCrossEntropy",()=>y);var r=d("jAOpV"),n=d("3SJNW"),s=d("dvCKL"),o=d("iY58J"),i=d("l8bnG"),l=d("2mGnu"),u=d("bbwI4"),p=d("gjmji"),c=d("5ByfE"),h=d("1zGvd"),f=d("c13YB"),m=d("3tgJG"),g=d("5gdOH"),x=d("hJ3bA");let y=(0,h.op)({sigmoidCrossEntropy_:function(e,t,a,d=0,h=u.Reduction.SUM_BY_NONZERO_WEIGHTS){let y=(0,r.convertToTensor)(e,"multiClassLabels","sigmoidCrossEntropy"),b=(0,r.convertToTensor)(t,"logits","sigmoidCrossEntropy"),v=null;if(null!=a&&(v=(0,r.convertToTensor)(a,"weights","sigmoidCrossEntropy")),(0,n.assertShapesMatch)(y.shape,b.shape,"Error in sigmoidCrossEntropy: "),d>0){let e=(0,m.scalar)(d),t=(0,m.scalar)(1),r=(0,m.scalar)(.5);y=(0,o.add)((0,p.mul)(y,(0,g.sub)(t,e)),(0,p.mul)(r,e))}let T=function(e,t){let a=(0,r.convertToTensor)(e,"labels","sigmoidCrossEntropyWithLogits"),u=(0,r.convertToTensor)(t,"logits","sigmoidCrossEntropyWithLogits");(0,n.assertShapesMatch)(a.shape,u.shape,"Error in sigmoidCrossEntropyWithLogits: ");let d=(0,f.relu)(u),h=(0,p.mul)(u,a),m=(0,l.log1p)((0,i.exp)((0,c.neg)((0,s.abs)(u))));return(0,o.add)((0,g.sub)(d,h),m)}(y,b);return(0,x.computeWeightedLoss)(T,v,h)}})}),h("kVhbr",function(e,t){a(e.exports,"softmaxCrossEntropy",()=>w);var r=d("fYbCG"),n=d("jAOpV"),s=d("3SJNW"),o=d("iY58J"),i=d("5oASc"),l=d("bVaGH"),u=d("auyfQ"),p=d("l8bnG"),c=d("73tT9"),h=d("bbwI4"),f=d("gjmji"),m=d("5ByfE"),g=d("1zGvd"),x=d("jUNqu"),y=d("3tgJG"),b=d("5gdOH"),v=d("fdJKX"),T=d("hJ3bA");let w=(0,g.op)({softmaxCrossEntropy_:function(e,t,a,d=0,g=h.Reduction.SUM_BY_NONZERO_WEIGHTS){let w=(0,n.convertToTensor)(e,"onehotLabels","softmaxCrossEntropy"),k=(0,n.convertToTensor)(t,"logits","softmaxCrossEntropy"),N=null;if(null!=a&&(N=(0,n.convertToTensor)(a,"weights","softmaxCrossEntropy")),(0,s.assertShapesMatch)(w.shape,k.shape,"Error in softmaxCrossEntropy: "),d>0){let e=(0,y.scalar)(d),t=(0,y.scalar)(1),r=(0,y.scalar)(w.shape[1]);w=(0,o.add)((0,f.mul)(w,(0,b.sub)(t,e)),(0,u.div)(e,r))}let S=function(e,t,a=-1){if(-1===a&&(a=t.rank-1),a!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${a}`);return(0,r.customGrad)((e,t,r)=>{let n=(0,c.logSumExp)(t,[a],!0),s=(0,b.sub)((0,l.cast)(t,"float32"),n);r([e,s]);let o=(0,m.neg)((0,f.mul)(s,e));return{value:(0,v.sum)(o,[a]),gradFunc:(e,t)=>{let[r,n]=t,s=(0,i.expandShapeToKeepDim)(e.shape,[a]);return[(0,f.mul)((0,x.reshape)(e,s),(0,b.sub)((0,l.cast)(r,"float32"),(0,p.exp)(n))),(0,f.mul)((0,x.reshape)(e,s),(0,b.sub)((0,p.exp)(n),(0,l.cast)(r,"float32")))]}}})(e,t)}(w,k);return(0,T.computeWeightedLoss)(S,N,g)}})}),h("aHaNt",function(e,t){a(e.exports,"sparseFillEmptyRows",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sparseFillEmptyRows_:function(e,t,a,o){let i=(0,s.convertToTensor)(e,"indices","sparseFillEmptyRows","int32"),l=(0,s.convertToTensor)(t,"values","sparseFillEmptyRows"),u=(0,s.convertToTensor)(a,"denseShape","sparseFillEmptyRows","int32"),p=(0,s.convertToTensor)(o,"defaultValue","sparseFillEmptyRows",l.dtype);if(2!==i.rank)throw Error(`Indices should be Tensor2D but received shape
        ${i.shape}`);if(1!==l.rank)throw Error(`Values should be Tensor1D but received shape ${l.shape}`);if(1!==u.rank)throw Error(`Dense shape should be Tensor1D but received shape ${u.shape}`);if(0!==p.rank)throw Error(`Default value should be a scalar but received shape ${p.shape}`);let c=r.ENGINE.runKernel(n.SparseFillEmptyRows,{indices:i,values:l,denseShape:u,defaultValue:p});return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}})}),h("8sRSJ",function(e,t){a(e.exports,"sparseReshape",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sparseReshape_:function(e,t,a){let o=(0,s.convertToTensor)(e,"inputIndices","sparseReshape","int32"),i=(0,s.convertToTensor)(t,"inputShape","sparseReshape","int32"),l=(0,s.convertToTensor)(a,"newShape","sparseReshape","int32");if(2!==o.rank)throw Error(`Input indices should be Tensor2D but received shape
        ${o.shape}`);if(1!==i.rank)throw Error(`Input shape should be Tensor1D but received shape ${i.shape}`);if(1!==l.rank)throw Error(`New shape should be Tensor1D but received shape ${l.shape}`);let u=r.ENGINE.runKernel(n.SparseReshape,{inputIndices:o,inputShape:i,newShape:l});return{outputIndices:u[0],outputShape:u[1]}}})}),h("jIPJM",function(e,t){a(e.exports,"sparseSegmentMean",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sparseSegmentMean_:function(e,t,a){let o=(0,s.convertToTensor)(e,"data","sparseSegmentMean"),i=(0,s.convertToTensor)(t,"indices","sparseSegmentMean","int32"),l=(0,s.convertToTensor)(a,"segmentIds","sparseSegmentMean","int32");if(o.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw Error(`Indices should be Tensor1D but received shape
          ${i.shape}`);if(1!==l.rank)throw Error(`Segment ids should be Tensor1D but received shape
          ${l.shape}`);return r.ENGINE.runKernel(n.SparseSegmentMean,{data:o,indices:i,segmentIds:l})}})}),h("keKmo",function(e,t){a(e.exports,"sparseSegmentSum",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({sparseSegmentSum_:function(e,t,a){let o=(0,s.convertToTensor)(e,"data","sparseSegmentSum"),i=(0,s.convertToTensor)(t,"indices","sparseSegmentSum","int32"),l=(0,s.convertToTensor)(a,"segmentIds","sparseSegmentSum","int32");if(o.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==i.rank)throw Error(`Indices should be Tensor1D but received shape
         ${i.shape}`);if(1!==l.rank)throw Error(`Segment ids should be Tensor1D but received shape
         ${l.shape}`);return r.ENGINE.runKernel(n.SparseSegmentSum,{data:o,indices:i,segmentIds:l})}})}),h("4XWrr",function(e,t){a(e.exports,"stringNGrams",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({stringNGrams_:function(e,t,a,o,i,l,u,p){let c=(0,s.convertToTensor)(e,"data","stringNGrams","string");if("string"!==c.dtype)throw Error("Data must be of datatype string");if(1!==c.shape.length)throw Error(`Data must be a vector, saw: ${c.shape}`);let d=(0,s.convertToTensor)(t,"dataSplits","stringNGrams");if("int32"!==d.dtype)throw Error("Data splits must be of datatype int32");let h=r.ENGINE.runKernel(n.StringNGrams,{data:c,dataSplits:d},{separator:a,nGramWidths:o,leftPad:i,rightPad:l,padWidth:u,preserveShortSequences:p});return{nGrams:h[0],nGramsSplits:h[1]}}})}),h("3ZCQE",function(e,t){a(e.exports,"stringSplit",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({stringSplit_:function(e,t,a=!0){let o=(0,s.convertToTensor)(e,"input","stringSplit","string"),i=(0,s.convertToTensor)(t,"delimiter","stringSplit","string");if(1!==o.rank)throw Error(`Input should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw Error(`Delimiter should be a scalar but received shape ${i.shape}`);let l=r.ENGINE.runKernel(n.StringSplit,{input:o,delimiter:i},{skipEmpty:a});return{indices:l[0],values:l[1],shape:l[2]}}})}),h("ddzZX",function(e,t){a(e.exports,"stringToHashBucketFast",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({stringToHashBucketFast_:function(e,t){let a=(0,s.convertToTensor)(e,"input","stringToHashBucketFast","string");if(t<=0)throw Error("Number of buckets must be at least 1");return r.ENGINE.runKernel(n.StringToHashBucketFast,{input:a},{numBuckets:t})}})}),h("4bju1",function(e,t){a(e.exports,"staticRegexReplace",()=>o);var r=d("bv3K9"),n=d("dcVMt"),s=d("jAOpV");let o=(0,d("1zGvd").op)({staticRegexReplace_:function(e,t,a,o=!0){let i=(0,s.convertToTensor)(e,"input","staticRegexReplace","string");return r.ENGINE.runKernel(n.StaticRegexReplace,{x:i},{pattern:t,rewrite:a,replaceGlobal:o})}})}),h("aHWgz",function(e,t){a(e.exports,"train",()=>r);let r=d("cmAqQ").OptimizerConstructors}),h("gsLG9",function(e,t){a(e.exports,"nextFrame",()=>n);let r="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:e=>e();function n(){return new Promise(e=>r(()=>e()))}}),h("4ajhx",function(e,t){a(e.exports,"fromUint8ToStringArray",()=>I),a(e.exports,"fromStringArrayToUint8",()=>C),a(e.exports,"slice_util",()=>d("2vt64")),a(e.exports,"upcastType",()=>d("8IARK").upcastType),a(e.exports,"segment_util",()=>d("jlU24"));var r=d("a9Xyg"),s=d("5oASc"),o=d("eCyVZ"),i=d("go5QX"),l=d("79jYH"),u=d("jDnTu"),p=d("lD97P"),c=d("kaUKj"),h=d("3ypkR");d("2vt64"),d("8IARK");var f=d("bvBNV"),m=d("3mM9e"),g=d("2t9oE"),x=d("jvRff"),y=d("jHZNC"),b=d("iZUxC"),v=d("ivRg5"),T=d("4ZEVz"),w=d("5lsMI"),k=d("j1ggi"),N=d("hX01i"),S=d("ltmkQ"),E=d("8MGAa");function I(e){try{return e.map(e=>(0,r.decodeString)(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function C(e){return e.map(e=>(0,r.encodeString)(e))}d("jlU24"),n(e.exports,s),n(e.exports,o),n(e.exports,i),n(e.exports,l),n(e.exports,u),n(e.exports,p),n(e.exports,c),n(e.exports,h),n(e.exports,f),n(e.exports,m),n(e.exports,g),n(e.exports,x),n(e.exports,y),n(e.exports,b),n(e.exports,v),n(e.exports,T),n(e.exports,w),n(e.exports,k),n(e.exports,N),n(e.exports,S),n(e.exports,E)}),h("go5QX",function(e,t){a(e.exports,"assertParamsConsistent",()=>n),a(e.exports,"computeOutShape",()=>s);var r=d("3SJNW");function n(e,t){let a=e[0].length;e.forEach((e,t)=>{r.assert(e.length===a,()=>`Error in concat${a}D: rank of tensors[${t}] must be the same as the rank of the rest (${a})`)}),r.assert(t>=0&&t<a,()=>`Error in concat${a}D: axis must be between 0 and ${a-1}.`);let n=e[0];e.forEach((e,s)=>{for(let o=0;o<a;o++)r.assert(o===t||e[o]===n[o],()=>`Error in concat${a}D: Shape of tensors[${s}] (${e}) does not match the shape of the rest (${n}) along the non-concatenated axis ${s}.`)})}function s(e,t){let r=e[0].slice();for(let a=1;a<e.length;a++)r[t]+=e[a][t];return r}}),h("lD97P",function(e,t){}),h("kaUKj",function(e,t){var r,n;function s(e,t,r){let a=[];if(null==r&&null==t)return a;if(null==t)for(;a.length<e+r.length;)a.push(-1);else a=t.slice();if(null==r)return a;if(e+r.length!==a.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+r.length}, but shape.rank = ${a.length}`);for(let n=1;n<r.length;++n){let s=r[n],o=a[a.length-r.length+n],i=a[o];if(s>=0)if(i>=0){if(i!==s)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+e}] = ${s} but shape[${n+e}] = ${i}`)}else a[o]=s}return a}function o(e){let t={FIRST_DIM_SIZE:r.FIRST_DIM_SIZE,VALUE_ROWIDS:r.VALUE_ROWIDS,ROW_LENGTHS:r.ROW_LENGTHS,ROW_SPLITS:r.ROW_SPLITS,ROW_LIMITS:r.ROW_LIMITS,ROW_STARTS:r.ROW_STARTS},a=[];for(let r of e)if(r in t)a.push(t[r]);else break;return a}function i(e){return 0===e.length?0:e[0]===r.FIRST_DIM_SIZE?e.length-1:e.length}function l(e,t){if(null==e||null==t)return;let r=e.length,a=t.length;if(r>=a)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${r} must be less than ragged tensor input flatValues.rank = ${a})`);for(let n=0;n<Math.min(r,a-1);++n){let r=e[n],a=t[n+1];if(r>=0&&a>=0&&1!==r&&r!==a)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-e.length}] = ${r} but ragged tensor input.flatValues.shape[${n-e.length}] = ${a}`)}}a(e.exports,"RowPartitionType",()=>r),a(e.exports,"combineRaggedTensorToTensorShapes",()=>s),a(e.exports,"getRowPartitionTypesHelper",()=>o),a(e.exports,"getRaggedRank",()=>i),a(e.exports,"validateDefaultValueShape",()=>l),(n=r||(r={}))[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"}),h("3ypkR",function(e,t){a(e.exports,"PARALLELIZE_THRESHOLD",()=>n),a(e.exports,"computeOptimalWindowSize",()=>s);var r=d("3SJNW");let n=30;function s(e){return e<=n?e:(0,r.nearestDivisor)(e,Math.floor(Math.sqrt(e)))}}),h("bvBNV",function(e,t){a(e.exports,"getImageCenter",()=>r);function r(e,t,r){return[r*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]}}),h("3mM9e",function(e,t){function r(e,t,a,n=!0){let s=[];if(n)(s=s.concat(t.slice(0))).push(e[0]/a),s=s.concat(e.slice(1));else{s=s.concat(e[0]);let r=t.length;for(let a=0;a<r;++a)s=s.concat([e[a+1]/t[a],t[a]]);s=s.concat(e.slice(r+1))}return s}function n(e,t,r=!0){let a=[];if(r){a.push(t);for(let r=t+1;r<e;++r)r<=2*t?(a.push(r),a.push(r-(t+1))):a.push(r)}else{let r=[],n=[];for(let a=1;a<e;++a)a>=2*t+1||a%2==1?n.push(a):r.push(a);a.push(...r),a.push(0),a.push(...n)}return a}function s(e,t,r,a=!0){let n=[];a?n.push(e[0]/r):n.push(e[0]*r);for(let r=1;r<e.length;++r)r<=t.length?a?n.push(t[r-1]*e[r]):n.push(e[r]/t[r-1]):n.push(e[r]);return n}function o(e,t){let r=[0];for(let a=0;a<t;++a)r.push(e[a][0]);return r}function i(e,t,r){let a=e.slice(0,1);for(let n=0;n<r;++n)a.push(e[n+1]-t[n][0]-t[n][1]);return a}a(e.exports,"getReshaped",()=>r),a(e.exports,"getPermuted",()=>n),a(e.exports,"getReshapedPermuted",()=>s),a(e.exports,"getSliceBeginCoords",()=>o),a(e.exports,"getSliceSize",()=>i)}),h("jHZNC",function(e,t){a(e.exports,"SELU_SCALEALPHA",()=>r),a(e.exports,"SELU_SCALE",()=>n);let r=1.7580993408473768,n=1.0507009873554805}),h("iZUxC",function(e,t){a(e.exports,"ERF_P",()=>r),a(e.exports,"ERF_A1",()=>n),a(e.exports,"ERF_A2",()=>s),a(e.exports,"ERF_A3",()=>o),a(e.exports,"ERF_A4",()=>i),a(e.exports,"ERF_A5",()=>l);let r=.3275911,n=.254829592,s=-.284496736,o=1.421413741,i=-1.453152027,l=1.061405429}),h("4ZEVz",function(e,t){function r(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let r=new Float32Array(2*e.length);for(let a=0;a<r.length;a+=2)r[a]=e[a/2],r[a+1]=t[a/2];return r}function n(e){let t=new Float32Array(e.length/2),r=new Float32Array(e.length/2);for(let a=0;a<e.length;a+=2)t[a/2]=e[a],r[a/2]=e[a+1];return{real:t,imag:r}}function s(e){let t=Math.ceil(e.length/4),r=new Float32Array(t),a=new Float32Array(t);for(let t=0;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],a[Math.floor(t/4)]=e[t+1];return{real:r,imag:a}}function o(e){let t=Math.floor(e.length/4),r=new Float32Array(t),a=new Float32Array(t);for(let t=2;t<e.length;t+=4)r[Math.floor(t/4)]=e[t],a[Math.floor(t/4)]=e[t+1];return{real:r,imag:a}}function i(e,t){return{real:e[2*t],imag:e[2*t+1]}}function l(e,t,r,a){e[2*a]=t,e[2*a+1]=r}function u(e,t){let r=new Float32Array(e/2),a=new Float32Array(e/2);for(let n=0;n<Math.ceil(e/2);n++){let s=(t?2:-2)*Math.PI*(n/e);r[n]=Math.cos(s),a[n]=Math.sin(s)}return{real:r,imag:a}}function p(e,t,r){let a=(r?2:-2)*Math.PI*(e/t);return{real:Math.cos(a),imag:Math.sin(a)}}a(e.exports,"mergeRealAndImagArrays",()=>r),a(e.exports,"splitRealAndImagArrays",()=>n),a(e.exports,"complexWithEvenIndex",()=>s),a(e.exports,"complexWithOddIndex",()=>o),a(e.exports,"getComplexWithIndex",()=>i),a(e.exports,"assignToTypedArray",()=>l),a(e.exports,"exponents",()=>u),a(e.exports,"exponent",()=>p)}),h("5lsMI",function(e,t){a(e.exports,"decodeEinsumEquation",()=>s),a(e.exports,"getEinsumPermutation",()=>o),a(e.exports,"checkEinsumDimSizes",()=>i),a(e.exports,"getEinsumComputePath",()=>l),a(e.exports,"isIdentityPermutation",()=>u);var r=d("3SJNW");let n=/->/g;function s(e,t){let a=((e=e.replace(/\s/g,"")).length-e.replace(n,"").length)/2;if(a<1)throw Error("Equations without an arrow are not supported.");if(a>1)throw Error('Equation must contain exactly one arrow ("->").');let[s,o]=e.split("->");(0,r.assert)(-1===s.indexOf("..."),()=>'The ellipsis notation ("...") is not supported yet.');let i=s.split(","),l=i.length;if(t!==l)throw Error(`Expected ${l} input tensors, received ${t}`);if(l>2)throw Error("Support for more than 2 input tensors is not implemented yet.");let u=[];for(let e=0;e<o.length;++e){let t=o[e];if(!i.some(e=>-1!==e.indexOf(t)))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===u.indexOf(t)&&u.push(t)}for(let e=0;e<s.length;++e){let t=s[e];-1===u.indexOf(t)&&","!==t&&u.push(t)}let p=Array(i.length);for(let e=0;e<l;++e){if(new Set(i[e].split("")).size!==i[e].length)throw Error(`Found duplicate axes in input component ${i[e]}. Support for duplicate axes in input is not implemented yet.`);p[e]=[];for(let t=0;t<i[e].length;++t)p[e].push(u.indexOf(i[e][t]))}let c=u.length,d=o.length,h=[];for(let e=d;e<c;++e)h.push(e);return{allDims:u,summedDims:h,idDims:p}}function o(e,t){let r=Array(e);r.fill(-1);for(let e=0;e<t.length;++e)r[t[e]]=e;let a=[];for(let t=0;t<e;++t)-1===r[t]&&a.push(t);return{permutationIndices:r=r.filter(e=>-1!==e),expandDims:a}}function i(e,t,a){let n=Array(e);for(let e=0;e<a.length;++e){let s=a[e].shape;for(let a=0;a<t[e].length;++a)void 0===n[t[e][a]]?n[t[e][a]]=s[a]:(0,r.assert)(n[t[e][a]]===s[a],()=>`Expected dimension ${n[t[e][a]]} at axis ${a} of input shaped ${JSON.stringify(s)}, but got dimension ${s[a]}`)}}function l(e,t){let r=[],a=0;0===e.length&&e.push(-1),a=e.length+1;for(let e=0;e<a;++e)r.push([]);let n=[];for(let a=0;a<e.length;++a)for(let s of function(e,t){let r=[];for(let a=0;a<e.length;++a)(0===e[a].length||-1!==e[a].indexOf(t)||-1===t)&&r.push(a);return r}(t,e[a]))-1===n.indexOf(s)&&(r[a].push(s),n.push(s));return{path:e,steps:r}}function u(e){return e.every((e,t)=>e===t)}}),h("j1ggi",function(e,t){a(e.exports,"prepareSplitSize",()=>n);var r=d("3SJNW");function n(e,t,a=0){let s=[];if("number"==typeof t)(0,r.assert)(e.shape[a]%t==0,()=>"Number of splits must evenly divide the axis."),s=Array(t).fill(e.shape[a]/t);else{let n=t.reduce((e,t)=>(-1===t&&(e+=1),e),0);(0,r.assert)(n<=1,()=>"There should be only one negative value in split array.");let o=t.indexOf(-1);if(-1!==o){let r=t.reduce((e,t)=>t>0?e+t:e);t[o]=e.shape[a]-r}(0,r.assert)(e.shape[a]===t.reduce((e,t)=>e+t),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}}),h("hX01i",function(e,t){function r(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function n(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function s(e,t,r){return`indices(${e}, 0) is invalid: ${t} >= ${r}`}a(e.exports,"getSparseFillEmptyRowsIndicesDenseShapeMismatch",()=>r),a(e.exports,"getSparseFillEmptyRowsNegativeIndexErrorMessage",()=>n),a(e.exports,"getSparseFillEmptyRowsOutOfRangeIndexErrorMessage",()=>s)}),h("ltmkQ",function(e,t){a(e.exports,"getSparseReshapeMultipleNegativeOneOutputDimErrorMessage",()=>n),a(e.exports,"getSparseReshapeNegativeOutputDimErrorMessage",()=>s),a(e.exports,"getSparseReshapeEmptyTensorZeroOutputDimErrorMessage",()=>o),a(e.exports,"getSparseReshapeInputOutputMultipleErrorMessage",()=>i),a(e.exports,"getSparseReshapeInputOutputMismatchErrorMessage",()=>l);var r=d("3SJNW");function n(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function s(e,t){return`size ${e} must be non-negative, not ${t}`}function o(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function i(e,t){let a=(0,r.sizeFromShape)(e),n=(0,r.sizeFromShape)(t);return`Input to reshape is a SparseTensor with ${a}
  dense values, but the requested shape requires a multiple of ${n}. inputShape=${e} outputShape= ${t}`}function l(e,t){let a=(0,r.sizeFromShape)(e),n=(0,r.sizeFromShape)(t);return`Input to reshape is a tensor with ${a} dense values, but the requested shape has ${n}. inputShape=${e} outputShape=${t}`}}),h("8MGAa",function(e,t){function r(){return"segment ids must be >= 0"}function n(){return"segment ids are not increasing"}function s(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function o(e,t,r){return`Bad: indices[${e}] == ${t} out of range [0, ${r})`}a(e.exports,"getSparseSegmentReductionNegativeSegmentIdsErrorMessage",()=>r),a(e.exports,"getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage",()=>n),a(e.exports,"getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage",()=>s),a(e.exports,"getSparseSegmentReductionIndicesOutOfRangeErrorMessage",()=>o)}),h("jlU24",function(e,t){a(e.exports,"segOpComputeOptimalWindowSize",()=>s),a(e.exports,"computeOutShape",()=>o),a(e.exports,"collectGatherOpShapeInfo",()=>i);var r=d("3SJNW"),n=d("3ypkR");function s(e,t){let a,s=!1;for(e<=n.PARALLELIZE_THRESHOLD?(a=e,s=!0):a=(0,r.nearestDivisor)(e,Math.floor(Math.sqrt(e)));!s;)a>t||a===e?s=!0:a=(0,r.nearestDivisor)(e,a+1);return a}function o(e,t,r){let a=[],n=e.length;for(let s=0;s<n;s++)s!==t?a.push(e[s]):a.push(r);return a}function i(e,t,r,a){let n=t.shape.length,s=e.shape.length;if(0!==a&&(a<-n||a>n))throw Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${a}`);if(a<0&&(a+=n),a>s)throw Error(`batchDims (${a}) must be less than rank(x) (
    ${s}).`);if(r<a)throw Error(`batchDims (${a}) must be less than or equal to axis (${r}).`);for(let r=0;r<a;++r)if(e.shape[r]!==t.shape[r])throw Error(`x.shape[${r}]: ${e.shape[r]} should be equal to indices.shape[${r}]: ${t.shape[r]}.`);let o=e.shape[r],i=[],l=1,u=1,p=1;for(let t=0;t<a;++t)i.push(e.shape[t]),l*=e.shape[t];for(let t=a;t<r;t++)i.push(e.shape[t]),u*=e.shape[t];for(let e=a;e<n;e++)i.push(t.shape[e]);for(let t=r+1;t<s;t++)i.push(e.shape[t]),p*=e.shape[t];return{batchSize:l,sliceSize:p,outerSize:u,dimSize:o,outputShape:i}}}),h("eu00D",function(e,t){a(e.exports,"nonMaxSuppressionV3Impl",()=>d("gaMz8").nonMaxSuppressionV3Impl),a(e.exports,"nonMaxSuppressionV4Impl",()=>d("gaMz8").nonMaxSuppressionV4Impl),a(e.exports,"nonMaxSuppressionV5Impl",()=>d("gaMz8").nonMaxSuppressionV5Impl),a(e.exports,"whereImpl",()=>d("i01WV").whereImpl),d("gaMz8"),d("i01WV")}),h("jO0nh",function(e,t){a(e.exports,"loadGraphModel",()=>h),d("fM0z2");var r=d("1c9K8"),n=d("fbSa3"),s=d("ciqGg"),o=d("a9Xyg"),i=d("82Kho"),l=d("i0fHp"),u=d("fQ6FR"),p=d("eqf4o");class c{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},r=n){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=r,null==t&&(this.loadOptions={}),this.resourceManager=new(0,u.ResourceManager)}findIOHandler(){let e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{let t=this.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=this.handler.load();return o.isPromise(e)?e.then(e=>null==e.getWeightStream?this.loadSync(e):this.loadStreaming(e)):this.loadSync(e)}loadSync(e){let t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(null==e.getWeightStream)throw Error("Model artifacts missing streamWeights function");let t=await (0,p.decodeWeightsStream)(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;let r=this.artifacts.modelTopology,a=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){let e=this.artifacts.userDefinedMetadata;null!=e.signature&&(a=e.signature),null!=e.structuredOutputKeys&&(this.structuredOutputKeys=e.structuredOutputKeys)}if(this.signature=a,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new(0,l.GraphExecutor)(i.OperationMapper.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){let t=i.OperationMapper.Instance.transformGraph(e.modelInitializer);this.initializer=new(0,l.GraphExecutor)(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if("string"==typeof e){let t=this.io.getSaveHandlers(e);if(0===t.length)throw Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){let t=e instanceof s.Tensor?[e]:e,r={};return t.forEach((e,t)=>r[this.structuredOutputKeys[t]]=e),r}return e}predict(e,t){let r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,t){let r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var t;if(!(e instanceof s.Tensor)&&!Array.isArray(e)){let r=null==(t=this.signature)?void 0:t.inputs;if(null!=r)for(let t in r){let a=r[t];null!=a.resourceId&&(e[t]=this.resourceIdToCapturedInput[a.resourceId])}return e}e=Array.isArray(e)?e:[e];let r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let a=0;return this.inputNodes.reduce((t,r)=>{var n,s,o;let i=null==(o=null==(s=null==(n=this.signature)?void 0:n.inputs)?void 0:s[r])?void 0:o.resourceId;return null!=i?t[r]=this.resourceIdToCapturedInput[i]:t[r]=e[a++],t},{})}normalizeOutputs(e){return Array.isArray(e=e||this.outputNodes)?e:[e]}executeInitializerGraph(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){let t=this.initializerSignature.outputs,r=Object.keys(t);for(let a=0;a<r.length;a++){let n=t[r[a]];this.resourceIdToCapturedInput[n.resourceId]=e[a]}}}execute(e,t){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let r=this.executor.execute(e,t);return r.length>1?r:r[0]}async executeAsync(e,t){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let r=await this.executor.executeAsync(e,t);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,r)=>(t[r]=[e[r]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&(0,r.dispose)(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function h(e,t={},r=n){var a;if(null==e)throw Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"==typeof e&&((a=e).endsWith("/")||(a+="/"),e=`${a}model.json?tfjs-format=file`);let s=new c(e,t,r);return await s.load(),s}}),h("82Kho",function(e,t){a(e.exports,"OperationMapper",()=>C),a(e.exports,"getStringParam",()=>A),a(e.exports,"getStringArrayParam",()=>L),a(e.exports,"getNumberParam",()=>M),a(e.exports,"getNumericArrayParam",()=>z),a(e.exports,"getBoolParam",()=>R),a(e.exports,"getBoolArrayParam",()=>B),a(e.exports,"getTensorShapeParam",()=>F),a(e.exports,"getTensorShapeArrayParam",()=>G),a(e.exports,"getDtypeParam",()=>P),a(e.exports,"getDtypeArrayParam",()=>D),d("fM0z2");var r=d("alePs"),n=d("fO8Ws"),s=d("1nLTi"),o=d("eLhss"),i=d("dOUvj"),l=d("hZ4ja"),u=d("4MM1F"),p=d("lBhYf"),c=d("dDvfA"),h=d("gASwE"),f=d("6Z3rt"),m=d("93pcS"),g=d("7Plky"),x=d("gMXov"),y=d("25W1e"),b=d("85zsY"),v=d("1PWqd"),T=d("jqwKA"),w=d("kVF2q"),k=d("l0zBk"),N=d("8rft0"),S=d("5Vt4t"),E=d("8z931"),I=d("N0o3H").Buffer;class C{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let e=[].concat(...[i,l,u,p,c,h,f,m,g,x,y,b,v,T,w,k,N,S,E].map(e=>e.json));this.opMappers=e.reduce((e,t)=>(e[t.tfOpName]=t,e),{})}transformGraph(e,t={}){let r=e.node,a=[],n=[],s=[],i=r.reduce((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?a.push(e[t.name]):"Const"===t.op?n.push(e[t.name]):(null==t.input||0===t.input.length)&&s.push(e[t.name]),e),{}),l=[],u=[],p={},c={};null!=t&&(p=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));let d=Object.keys(i);d.forEach(e=>{let t=i[e];t.inputNames.forEach((e,r)=>{let[a,,n]=(0,o.getNodeNameAndIndex)(e),s=i[a];if(null!=s.outputs){let e=s.outputs.indexOf(n);if(-1!==e){let n=`${a}:${e}`;t.inputNames[r]=n}}t.inputs.push(s),s.children.push(t)})}),0===Object.keys(c).length?d.forEach(e=>{let t=i[e];0===t.children.length&&u.push(t)}):Object.keys(c).forEach(e=>{let[t]=(0,o.getNodeNameAndIndex)(e),r=i[t];null!=r&&(r.signatureKey=c[e],u.push(r))}),Object.keys(p).length>0?Object.keys(p).forEach(e=>{let[t]=(0,o.getNodeNameAndIndex)(e),r=i[t];r&&(r.signatureKey=p[e],l.push(r))}):l=a;let h={};null!=e.library&&null!=e.library.function&&(h=e.library.function.reduce((e,t)=>(e[t.signature.name]=this.mapFunction(t),e),{}));let f={nodes:i,inputs:l,outputs:u,weights:n,placeholders:a,signature:t,functions:h};return s.length>0&&(f.initNodes=s),f}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,r)=>(t[e[r].name]=r,t),{})}mapNode(e){let t=(0,s.getRegisteredOp)(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});let r={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(e=>e.startsWith("^")?e.slice(1):e),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(r.inputParams=t.inputs.reduce((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e),{})),null!=t.attrs&&(r.attrParams=t.attrs.reduce((t,r)=>{let a,n=r.type;switch(r.type){case"string":void 0===(a=A(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=A(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"string[]":void 0===(a=L(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=L(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"number":void 0===(a=M(e.attr,r.tfName,r.defaultValue||0))&&r.tfDeprecatedName&&(a=M(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"number[]":void 0===(a=z(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=z(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"bool":void 0===(a=R(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=R(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"bool[]":void 0===(a=B(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=B(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"shape":void 0===(a=F(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=F(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"shape[]":void 0===(a=G(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=G(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"dtype":void 0===(a=P(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=P(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"dtype[]":void 0===(a=D(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=D(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"func":void 0===(a=V(e.attr,r.tfName,r.defaultValue))&&r.tfDeprecatedName&&(a=V(e.attr,r.tfDeprecatedName,r.defaultValue));break;case"tensor":case"tensors":break;default:throw Error(`Unsupported param type: ${r.type} for op: ${e.op}`)}return t[r.name]={value:a,type:n},t},{})),r}mapFunction(e){let t=e.nodeDef,r=[],a={};null!=t&&(a=t.reduce((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&r.push(e[t.name]),e),{}));let n=[],s=[];e.signature.inputArg.forEach(e=>{let[t]=(0,o.getNodeNameAndIndex)(e.name),r={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:O(e.type),type:"dtype"}},children:[]};r.signatureKey=e.name,n.push(r),a[t]=r}),Object.keys(a).forEach(e=>{let t=a[e];t.inputNames.forEach((e,r)=>{let[n,,s]=(0,o.getNodeNameAndIndex)(e),i=a[n];if(null!=i.outputs){let e=i.outputs.indexOf(s);if(-1!==e){let a=`${n}:${e}`;t.inputNames[r]=a}}t.inputs.push(i),i.children.push(t)})});let i=e.ret;e.signature.outputArg.forEach(e=>{let[t,r]=(0,o.getNodeNameAndIndex)(i[e.name]),n=a[t];null!=n&&(n.defaultOutput=r,s.push(n))});let l=this.mapArgsToSignature(e);return{nodes:a,inputs:n,outputs:s,weights:r,placeholders:[],signature:l}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e),{}),outputs:e.signature.outputArg.reduce((t,r)=>(t[r.name]=this.mapArgToTensorInfo(r,e.ret),t),{})}}mapArgToTensorInfo(e,t){let r=e.name;return null!=t&&(r=t[r]),{name:r,dtype:e.type}}}function $(e,t){let a=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){let t=(0,r.env)().global;if(void 0!==t.atob)return t.atob(e);if(void 0!==I)return new I(e,"base64").toString();throw Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return t?a:a.toLowerCase()}function A(e,t,r,a=!1){let n=e[t];return null!=n?$(n.s,a):r}function R(e,t,r){let a=e[t];return a?a.b:r}function M(e,t,r){let a=e[t]||{},n=null!=a.i?a.i:null!=a.f?a.f:r;return"number"==typeof n?n:parseInt(n,10)}function O(e){switch("string"==typeof e&&(e=n.DataType[e]),e){case n.DataType.DT_FLOAT:case n.DataType.DT_HALF:return"float32";case n.DataType.DT_INT32:case n.DataType.DT_INT64:case n.DataType.DT_INT8:case n.DataType.DT_UINT8:return"int32";case n.DataType.DT_BOOL:return"bool";case n.DataType.DT_DOUBLE:return"float32";case n.DataType.DT_STRING:return"string";case n.DataType.DT_COMPLEX64:case n.DataType.DT_COMPLEX128:return"complex64";default:return null}}function V(e,t,r){let a=e[t];return a&&a.func?a.func.name:r}function P(e,t,r){let a=e[t];return a&&a.type?O(a.type):r}function D(e,t,r){let a=e[t];return a&&a.list&&a.list.type?a.list.type.map(e=>O(e)):r}function _(e){if(!e.unknownRank)return null!=e.dim?e.dim.map(e=>"number"==typeof e.size?e.size:parseInt(e.size,10)):[]}function F(e,t,r){let a=e[t];return a&&a.shape?_(a.shape):r}function z(e,t,r){let a=e[t];return a?((a.list.f&&a.list.f.length?a.list.f:a.list.i)||[]).map(e=>"number"==typeof e?e:parseInt(e,10)):r}function L(e,t,r,a=!1){let n=e[t];return n&&n.list&&n.list.s?n.list.s.map(e=>$(e,a)):r}function G(e,t,r){let a=e[t];return a&&a.list&&a.list.shape?a.list.shape.map(e=>_(e)):r}function B(e,t,r){let a=e[t];return a&&a.list&&a.list.b?a.list.b:r}}),h("fO8Ws",function(e,t){var r,n,s,o,i;a(e.exports,"DataType",()=>r),(s=r||(r={}))[s.DT_INVALID=0]="DT_INVALID",s[s.DT_FLOAT=1]="DT_FLOAT",s[s.DT_DOUBLE=2]="DT_DOUBLE",s[s.DT_INT32=3]="DT_INT32",s[s.DT_UINT8=4]="DT_UINT8",s[s.DT_INT16=5]="DT_INT16",s[s.DT_INT8=6]="DT_INT8",s[s.DT_STRING=7]="DT_STRING",s[s.DT_COMPLEX64=8]="DT_COMPLEX64",s[s.DT_INT64=9]="DT_INT64",s[s.DT_BOOL=10]="DT_BOOL",s[s.DT_QINT8=11]="DT_QINT8",s[s.DT_QUINT8=12]="DT_QUINT8",s[s.DT_QINT32=13]="DT_QINT32",s[s.DT_BFLOAT16=14]="DT_BFLOAT16",s[s.DT_QINT16=15]="DT_QINT16",s[s.DT_QUINT16=16]="DT_QUINT16",s[s.DT_UINT16=17]="DT_UINT16",s[s.DT_COMPLEX128=18]="DT_COMPLEX128",s[s.DT_HALF=19]="DT_HALF",s[s.DT_RESOURCE=20]="DT_RESOURCE",s[s.DT_VARIANT=21]="DT_VARIANT",s[s.DT_UINT32=22]="DT_UINT32",s[s.DT_UINT64=23]="DT_UINT64",s[s.DT_FLOAT_REF=101]="DT_FLOAT_REF",s[s.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",s[s.DT_INT32_REF=103]="DT_INT32_REF",s[s.DT_UINT8_REF=104]="DT_UINT8_REF",s[s.DT_INT16_REF=105]="DT_INT16_REF",s[s.DT_INT8_REF=106]="DT_INT8_REF",s[s.DT_STRING_REF=107]="DT_STRING_REF",s[s.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",s[s.DT_INT64_REF=109]="DT_INT64_REF",s[s.DT_BOOL_REF=110]="DT_BOOL_REF",s[s.DT_QINT8_REF=111]="DT_QINT8_REF",s[s.DT_QUINT8_REF=112]="DT_QUINT8_REF",s[s.DT_QINT32_REF=113]="DT_QINT32_REF",s[s.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",s[s.DT_QINT16_REF=115]="DT_QINT16_REF",s[s.DT_QUINT16_REF=116]="DT_QUINT16_REF",s[s.DT_UINT16_REF=117]="DT_UINT16_REF",s[s.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",s[s.DT_HALF_REF=119]="DT_HALF_REF",s[s.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",s[s.DT_VARIANT_REF=121]="DT_VARIANT_REF",s[s.DT_UINT32_REF=122]="DT_UINT32_REF",s[s.DT_UINT64_REF=123]="DT_UINT64_REF",(i=(o=n||(n={})).CheckpointFormatVersion||(o.CheckpointFormatVersion={}))[i.LEGACY=0]="LEGACY",i[i.V1=1]="V1",i[i.V2=2]="V2"}),h("1nLTi",function(e,t){a(e.exports,"getRegisteredOp",()=>n);let r={};function n(e){return r[e]}}),h("eLhss",function(e,t){a(e.exports,"getParamValue",()=>s),a(e.exports,"getTensor",()=>o),a(e.exports,"parseNodeName",()=>p),a(e.exports,"getTensorsForCurrentContext",()=>i),a(e.exports,"getNodeNameAndIndex",()=>l),a(e.exports,"getPadding",()=>c),a(e.exports,"cloneTensor",()=>h),d("fM0z2");var r=d("gtIz2"),n=d("a9Xyg");function s(e,t,r,a,s){let i=t.inputParams[e];if(i&&void 0!==i.inputIndexStart){let e=i.inputIndexStart,l=0===i.inputIndexEnd?void 0:void 0===i.inputIndexEnd?e+1:i.inputIndexEnd,u=e<0?t.inputNames.length+e:e;if("tensor"===i.type)return o(t.inputNames[u],r,a,s);if("tensors"===i.type){let n=t.inputs.slice(e,l);return t.inputNames.slice(e,l).filter((e,t)=>{var r;return(null==(r=n[t])?void 0:r.op)!=="NoOp"}).map(e=>o(e,r,a,s))}let p=o(t.inputNames[u],r,a,s),c=p.dataSync();return"number"===i.type?c[0]:n.toNestedArray(p.shape,c)}let l=t.attrParams[e];return l&&l.value}function o(e,t,r,a){let[n,s]=p(e,r);if(null!=a){let e=a.getHashTableHandleByName(n);if(null!=e)return e}let o=r.currentContextIds.find(e=>!!t[u(n,e)]);return void 0!==o?t[u(n,o)][s]:void 0}function i(e,t,r){return t[u(e,r.currentContextId)]}function l(e,t){let[r,a,n]=p(e,t);return[u(r,t&&t.currentContextId),a,n]}function u(e,t){return t?`${e}-${t}`:e}function p(e,t){let r;if(""===e)return["",0,void 0];let a=null!=t&&null!=t.parseNodeNameCache;if(a){let r=t.parseNodeNameCache.get(e);if(null!=r)return r}let n=e.split(":");if(1===n.length)r=[e,0,void 0];else{let e=n[0],t=3===n.length?n[1]:void 0;r=[e,Number(n[n.length-1]),t]}return a&&t.parseNodeNameCache.set(e,r),r}function c(e,t,r){let a=s("pad",e,t,r);if("explicit"===a){a=s("explicitPaddings",e,t,r);let n=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)n[e][0]=a[2*e],n[e][1]=a[2*e+1];return n}return a}function h(e){return e.kept?e:(0,r.clone)(e)}}),h("dOUvj",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]}),h("hZ4ja",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]}),h("4MM1F",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}]}),h("lBhYf",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}]}),h("dDvfA",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}]}),h("gASwE",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]}),h("6Z3rt",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}]}),h("93pcS",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}]}),h("7Plky",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]}),h("gMXov",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}]}),h("25W1e",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}]}),h("85zsY",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}]}),h("1PWqd",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}]}),h("jqwKA",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}]}),h("kVF2q",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]}),h("l0zBk",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}]}),h("8rft0",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}]}),h("5Vt4t",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}]}),h("8z931",function(e,t){a(e.exports,"json",()=>r);let r=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}]}),h("i0fHp",function(e,t){a(e.exports,"GraphExecutor",()=>p),d("fM0z2");var r=d("alePs"),n=d("1c9K8"),s=d("a9Xyg"),o=d("eLhss"),i=d("fFZJu"),l=d("7RZdJ"),u=d("eL8sQ");class p{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(t=>e[t].map(e=>e.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach(t=>{this._functionExecutorMap[t]=new p(e.functions[t],this)})}getCompilationKey(e,t){let r=e.map(e=>e.name).sort(),a=t.map(e=>e.name).sort();return r.join(this.SEPARATOR)+"--"+a.join(this.SEPARATOR)}compile(e,t){let r=(0,u.getExecutionSubgraph)(e,t,this.weightMap,this._initNodes),{missingInputs:a,dynamicNode:n,syncInputs:s}=r;if(null!=n)throw Error(`This execution contains the node '${n.name}', which has the dynamic op '${n.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(a.length>0){let r=t.map(e=>e.name),n=Object.keys(e);throw Error(`Cannot compute the outputs [${r}] from the provided inputs [${n}]. Missing the following inputs: [${a}]`)}let o=(0,u.getNodesInTopologicalOrder)(this.graph,r),i=(0,u.getNodeLiveUntilMap)(o);return{orderedNodes:o,nodeLiveUntilMap:i}}cloneAndKeepTensor(e){if(null==e)return null;let t=e.clone();return(0,n.keep)(t),t}cloneTensorList(e){return e?e.map(e=>this.cloneAndKeepTensor(e)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,this.cloneTensorList(t)]))}execute(e,t){this.disposeIntermediateTensors();let a=Object.keys(e=this.mapInputs(e)).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let u=a.map(e=>this.graph.nodes[(0,o.parseNodeName)(e)[0]]),p=t.map(e=>(0,o.parseNodeName)(e)[0]),c=new Set(p),d=p.map(e=>this.graph.nodes[e]);0===d.length&&(d=this._outputs);let h=this.getCompilationKey(u,d),f=this.compiledMap.get(h);null==f&&(f=this.compile(e,d),this.compiledMap.set(h,f));try{this.keepIntermediateTensors=(0,r.env)().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){this.keepIntermediateTensors=!1,console.warn(e.message)}let m={},g={};return(0,n.tidy)(()=>{let r=new(0,l.ExecutionContext)(this.weightMap,m,g,this.functionExecutorMap,this.parseNodeNameCache),a=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(t=>{let[n,s]=(0,o.parseNodeName)(t,r),i=[];i[s]=e[t],a[n]=i,this.keepIntermediateTensors&&(this.clonedTensorsMap[n]=this.cloneTensorList(i))});let n=this.getFrozenTensorIds(a),{orderedNodes:u,nodeLiveUntilMap:p}=f;for(let e of u){if(a[e.name])continue;let t=(0,i.executeOp)(e,a,r,this._resourceManager);if(s.isPromise(t))throw Error(`The execution of the op '${e.op}' returned a promise. Please use model.executeAsync() instead.`);a[e.name]=t,this.keepIntermediateTensors&&(this.clonedTensorsMap[e.name]=this.cloneTensorList(t)),this.checkTensorForDisposalWithNodeLiveUntilInfo(e,a,r,n,c,p.get(e.name))}return null==this.parent&&r.dispose(n),t.map(e=>(0,o.getTensor)(e,a,r))})}getFrozenTensorIds(e){return new Set([].concat.apply([],Object.keys(e).map(t=>e[t]).map(e=>e.map(e=>e.id))))}checkTensorForDisposal(e,t,r,a,n,s,i){if(!((0,u.isControlFlow)(t)||s.has(e))){for(let a of r[e])null!=a&&(i[a.id]=(i[a.id]||0)+t.children.length);for(let e of t.inputs){if((0,u.isControlFlow)(e))continue;let t=(0,o.getTensorsForCurrentContext)(e.name,r,a);if(null!=t)for(let e of t){if(!e||e.kept||n.has(e.id))continue;let t=i[e.id];1===t?(e.dispose(),delete i[e.id]):null!=t&&i[e.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,r,a,n,s){if(!(0,u.isControlFlow)(e)&&null!=s){for(let e of s)if(!((0,u.isControlFlow)(e)||n.has(e.name)))for(let n of(0,o.getTensorsForCurrentContext)(e.name,t,r))!n||n.kept||a.has(n.id)||n.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(let t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,a=!1,n={},s={}){this.disposeIntermediateTensors(),a||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=(0,r.env)().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){this.keepIntermediateTensors=!1,console.warn(e.message)}let i=new(0,l.ExecutionContext)(this.weightMap,n,s,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let u=await this.executeWithControlFlow(e,i,t,a),p=t.map(e=>(0,o.getTensor)(e,u,i)),c=new Set([...p.map(e=>e.id),...Object.keys(e).map(t=>e[t].id),...this.weightIds]);return Object.values(u).forEach(e=>{e.forEach(e=>{!e||e.isDisposed||c.has(e.id)||e.dispose()})}),null==this.parent&&i.dispose(c),p}async executeFunctionAsync(e,t,r){let a=e.reduce((e,t,r)=>(e[this.inputs[r].name]=t,e),{});return this._executeAsync(a,this.outputNodes,!0,t,r)}async executeWithControlFlow(e,t,r,a){let n=Object.keys(e),s=n.map(e=>this.graph.nodes[(0,o.parseNodeName)(e)[0]]),i=r.map(e=>(0,o.parseNodeName)(e)[0]),l=new Set(i),p=i.map(e=>this.graph.nodes[e]);0===p.length&&(p=this._outputs);let{usedNodes:c,missingInputs:d,dynamicNode:h,syncInputs:f}=(0,u.getExecutionSubgraph)(e,p,this.weightMap,this._initNodes),m=[...s,...this.graph.weights,...this._initNodes||[]].map(e=>({node:e,contexts:t.currentContext})),g=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[r,a]=(0,o.parseNodeName)(t),n=[];n[a]=e[t],g[r]=n});let x={},y=this.getFrozenTensorIds(g),b={};for(;m.length>0;){let e=this.processStack(s,m,t,g,b,y,l,x,c);await Promise.all(e)}null!=h||a||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let v=p.filter(e=>!(0,u.isControlFlow)(e)&&!(0,o.getTensor)(e.name,g,t)).map(e=>e.name);if(v.length>0){let e="";throw null!=h&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${f}]`),Error(`Cannot compute the outputs [${v}] from the provided inputs [${n}]. Consider providing the following inputs: [${d}]. ${e}`)}return g}processStack(e,t,r,a,n,l,u,p,c){let d=[];for(;t.length>0;){let e=t.pop();r.currentContext=e.contexts;let h="";if("Enter"===e.node.op&&(0,o.getParamValue)("isConstant",e.node,a,r)&&([h]=(0,o.getNodeNameAndIndex)(e.node.name,r)),null==a[e.node.name]){let f=(0,i.executeOp)(e.node,a,r,this._resourceManager);h||([h]=(0,o.getNodeNameAndIndex)(e.node.name,r));let m=r.currentContext;s.isPromise(f)?d.push(f.then(s=>(a[h]=s,this.keepIntermediateTensors&&(this.clonedTensorsMap[h]=this.cloneTensorList(s)),r.currentContext=m,this.checkTensorForDisposal(h,e.node,a,r,l,u,p),this.processChildNodes(e.node,t,r,a,n,c),s))):(a[h]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[h]=this.cloneTensorList(f)),this.checkTensorForDisposal(h,e.node,a,r,l,u,p),this.processChildNodes(e.node,t,r,a,n,c))}else this.processChildNodes(e.node,t,r,a,n,c)}return d}processChildNodes(e,t,r,a,n,s){e.children.forEach(e=>{let[i]=(0,o.getNodeNameAndIndex)(e.name,r);!n[i]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some(e=>!!(0,o.getTensor)(e,a,r))&&(n[i]=!0,t.push({contexts:r.currentContext,node:e})):e.inputNames.every(e=>!!(0,o.getTensor)(e,a,r))&&(n[i]=!0,t.push({contexts:r.currentContext,node:e})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(e=>e.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let r=e[t],[a]=(0,o.parseNodeName)(t),n=this.graph.nodes[a];if(n.attrParams.shape&&n.attrParams.shape.value){let e=n.attrParams.shape.value,t=e.length===r.shape.length&&r.shape.every((t,r)=>-1===e[r]||e[r]===t);s.assert(t,()=>`The shape of dict['${n.name}'] provided in model.execute(dict) must be [${e}], but was [${r.shape}]`)}n.attrParams.dtype&&n.attrParams.dtype.value&&s.assert(r.dtype===n.attrParams.dtype.value,()=>`The dtype of dict['${n.name}'] provided in model.execute(dict) must be ${n.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var t,r;let a={};for(let n in e){let s=null==(r=null==(t=this._signature)?void 0:t.inputs)?void 0:r[n];null!=s?a[s.name]=e[n]:a[n]=e[n]}return a}checkInputs(e){let t=Object.keys(e).filter(e=>{let[t]=(0,o.parseNodeName)(e);return null==this.graph.nodes[t]});if(t.length>0)throw Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(e=>{var t,r;let a=null==(r=null==(t=this._signature)?void 0:t.outputs)?void 0:r[e];return null!=a?a.name:e},{})}checkOutputs(e){e.forEach(e=>{let[t]=(0,o.parseNodeName)(e);if(!this.graph.nodes[t])throw Error(`The output '${e}' is not found in the graph`)})}}}),h("fFZJu",function(e,t){a(e.exports,"executeOp",()=>C),d("fM0z2");var r=d("1c9K8"),n=d("a9Xyg"),s=d("644ed"),o=d("1nLTi"),i=d("lN2sU"),l=d("gCGm1"),u=d("lFgbZ"),p=d("2rhXH"),c=d("eiBMW"),h=d("jUONW"),f=d("jx7v1"),m=d("lbM8w"),g=d("kePnV"),x=d("hwAfr"),y=d("2egYX"),b=d("e6vw5"),v=d("a1jAI"),T=d("jsdeb"),w=d("i04xX"),k=d("7RBqt"),N=d("dI4yk"),S=d("gNpY4"),E=d("juQc8"),I=d("eCydU");function C(e,t,a,d,$=r.tidy){let A=((e,t,r)=>{switch(e.category){case"arithmetic":return $(()=>i.executeOp(e,t,r));case"basic_math":return $(()=>l.executeOp(e,t,r));case"control":return u.executeOp(e,t,r);case"convolution":return $(()=>p.executeOp(e,t,r));case"creation":return $(()=>c.executeOp(e,t,r));case"dynamic":return h.executeOp(e,t,r);case"evaluation":return $(()=>f.executeOp(e,t,r));case"image":return $(()=>x.executeOp(e,t,r));case"graph":return $(()=>m.executeOp(e,t,r));case"logical":return $(()=>y.executeOp(e,t,r));case"matrices":return $(()=>b.executeOp(e,t,r));case"normalization":return $(()=>v.executeOp(e,t,r));case"ragged":return $(()=>T.executeOp(e,t,r));case"reduction":return $(()=>w.executeOp(e,t,r));case"slice_join":return $(()=>k.executeOp(e,t,r));case"sparse":return $(()=>N.executeOp(e,t,r));case"spectral":return $(()=>S.executeOp(e,t,r));case"string":return $(()=>E.executeOp(e,t,r));case"transformation":return $(()=>I.executeOp(e,t,r));case"hash_table":return g.executeOp(e,t,r,d);case"custom":let a=(0,o.getRegisteredOp)(e.op);if(a&&a.customExecutor)return a.customExecutor(new(0,s.NodeValueImpl)(e,t,r));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,a);return n.isPromise(A)?A.then(e=>[].concat(e)):[].concat(A)}}),h("644ed",function(e,t){a(e.exports,"NodeValueImpl",()=>s);var r=d("eLhss"),n=d("82Kho");class s{constructor(e,t,r){this.node=e,this.tensorMap=t,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(e=>this.getInput(e)),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce((e,t)=>(e[t]=this.getAttr(t),e),{}))}getInput(e){return(0,r.getTensor)(e,this.tensorMap,this.context)}getAttr(e,t){let a=this.node.rawAttrs[e];if(null!=a.tensor)return(0,r.getTensor)(e,this.tensorMap,this.context);if(null!=a.i||null!=a.f)return(0,n.getNumberParam)(this.node.rawAttrs,e,t);if(null!=a.s)return(0,n.getStringParam)(this.node.rawAttrs,e,t);if(null!=a.b)return(0,n.getBoolParam)(this.node.rawAttrs,e,t);if(null!=a.shape)return(0,n.getTensorShapeParam)(this.node.rawAttrs,e,t);if(null!=a.type)return(0,n.getDtypeParam)(this.node.rawAttrs,e,t);if(null!=a.list){if(null!=a.list.i||null!=a.list.f)return(0,n.getNumericArrayParam)(this.node.rawAttrs,e,t);if(null!=a.list.s)return(0,n.getStringArrayParam)(this.node.rawAttrs,e,t);if(null!=a.list.shape)return(0,n.getTensorShapeArrayParam)(this.node.rawAttrs,e,t);if(null!=a.list.b)return(0,n.getBoolArrayParam)(this.node.rawAttrs,e,t);if(null!=a.list.type)return(0,n.getDtypeArrayParam)(this.node.rawAttrs,e,t)}return t}}}),h("lN2sU",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[s.add((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"AddN":return[s.addN((0,n.getParamValue)("tensors",e,t,a))];case"FloorMod":case"Mod":return[s.mod((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Mul":return[s.mul((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"RealDiv":case"Div":return[s.div((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"DivNoNan":return[s.divNoNan((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"FloorDiv":return[s.floorDiv((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Sub":return[s.sub((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Minimum":return[s.minimum((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Maximum":return[s.maximum((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Pow":return[s.pow((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"SquaredDifference":return[s.squaredDifference((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("1MgZ1",function(e,t){var r=d("2GEz9");n(e.exports,r)}),h("gCGm1",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Abs":case"ComplexAbs":return[s.abs((0,n.getParamValue)("x",e,t,a))];case"Acos":return[s.acos((0,n.getParamValue)("x",e,t,a))];case"Acosh":return[s.acosh((0,n.getParamValue)("x",e,t,a))];case"Asin":return[s.asin((0,n.getParamValue)("x",e,t,a))];case"Asinh":return[s.asinh((0,n.getParamValue)("x",e,t,a))];case"Atan":return[s.atan((0,n.getParamValue)("x",e,t,a))];case"Atan2":return[s.atan2((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("y",e,t,a))];case"Atanh":return[s.atanh((0,n.getParamValue)("x",e,t,a))];case"Ceil":return[s.ceil((0,n.getParamValue)("x",e,t,a))];case"Complex":return[s.complex((0,n.getParamValue)("real",e,t,a),(0,n.getParamValue)("imag",e,t,a))];case"Cos":return[s.cos((0,n.getParamValue)("x",e,t,a))];case"Cosh":return[s.cosh((0,n.getParamValue)("x",e,t,a))];case"Elu":return[s.elu((0,n.getParamValue)("x",e,t,a))];case"Erf":return[s.erf((0,n.getParamValue)("x",e,t,a))];case"Exp":return[s.exp((0,n.getParamValue)("x",e,t,a))];case"Expm1":return[s.expm1((0,n.getParamValue)("x",e,t,a))];case"Floor":return[s.floor((0,n.getParamValue)("x",e,t,a))];case"Log":return[s.log((0,n.getParamValue)("x",e,t,a))];case"Log1p":return[s.log1p((0,n.getParamValue)("x",e,t,a))];case"Imag":return[s.imag((0,n.getParamValue)("x",e,t,a))];case"Neg":return[s.neg((0,n.getParamValue)("x",e,t,a))];case"Reciprocal":return[s.reciprocal((0,n.getParamValue)("x",e,t,a))];case"Real":return[s.real((0,n.getParamValue)("x",e,t,a))];case"Relu":return[s.relu((0,n.getParamValue)("x",e,t,a))];case"Round":return[s.round((0,n.getParamValue)("x",e,t,a))];case"Selu":return[s.selu((0,n.getParamValue)("x",e,t,a))];case"Sigmoid":return[s.sigmoid((0,n.getParamValue)("x",e,t,a))];case"Sin":return[s.sin((0,n.getParamValue)("x",e,t,a))];case"Sign":return[s.sign((0,n.getParamValue)("x",e,t,a))];case"Sinh":return[s.sinh((0,n.getParamValue)("x",e,t,a))];case"Softplus":return[s.softplus((0,n.getParamValue)("x",e,t,a))];case"Sqrt":return[s.sqrt((0,n.getParamValue)("x",e,t,a))];case"Square":return[s.square((0,n.getParamValue)("x",e,t,a))];case"Tanh":return[s.tanh((0,n.getParamValue)("x",e,t,a))];case"Tan":return[s.tan((0,n.getParamValue)("x",e,t,a))];case"ClipByValue":return[s.clipByValue((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("clipValueMin",e,t,a),(0,n.getParamValue)("clipValueMax",e,t,a))];case"Relu6":return[s.relu6((0,n.getParamValue)("x",e,t,a))];case"Rsqrt":return[s.rsqrt((0,n.getTensor)(e.inputNames[0],t,a))];case"LeakyRelu":return[s.leakyRelu((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("alpha",e,t,a))];case"Prelu":return[s.prelu((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("alpha",e,t,a))];case"IsNan":return[s.isNaN((0,n.getTensor)(e.inputNames[0],t,a))];case"IsInf":return[s.isInf((0,n.getTensor)(e.inputNames[0],t,a))];case"IsFinite":return[s.isFinite((0,n.getTensor)(e.inputNames[0],t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("lFgbZ",function(e,t){a(e.exports,"executeOp",()=>i),d("fM0z2");var r=d("3tgJG"),n=d("bC7ZE"),s=d("h8IW2"),o=d("eLhss");let i=async(e,t,a)=>{switch(e.op){case"If":case"StatelessIf":{let r=(0,o.getParamValue)("thenBranch",e,t,a),n=(0,o.getParamValue)("elseBranch",e,t,a),s=(0,o.getParamValue)("cond",e,t,a),i=(0,o.getParamValue)("args",e,t,a);if((await s.data())[0])return a.functionMap[r].executeFunctionAsync(i,a.tensorArrayMap,a.tensorListMap);return a.functionMap[n].executeFunctionAsync(i,a.tensorArrayMap,a.tensorListMap)}case"While":case"StatelessWhile":{let r=(0,o.getParamValue)("body",e,t,a),n=(0,o.getParamValue)("cond",e,t,a),s=(0,o.getParamValue)("args",e,t,a),i=await a.functionMap[n].executeFunctionAsync(s,a.tensorArrayMap,a.tensorListMap),l=s.map(e=>e.id),u=await i[0].data();i.forEach(e=>{e.kept||-1!==l.indexOf(e.id)||e.dispose()});let p=s;for(;u[0];){let e=p,t=(p=await a.functionMap[r].executeFunctionAsync(p,a.tensorArrayMap,a.tensorListMap)).map(e=>e.id);e.forEach(e=>{e.kept||-1!==l.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()});let s=await a.functionMap[n].executeFunctionAsync(p,a.tensorArrayMap,a.tensorListMap);u=await s[0].data(),s.forEach(e=>{e.kept||-1!==l.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()})}return p}case"LoopCond":{let r=(0,o.getParamValue)("pred",e,t,a);return[(0,o.cloneTensor)(r)]}case"Switch":{let r=(0,o.getParamValue)("pred",e,t,a),n=(0,o.getParamValue)("data",e,t,a);return n.kept||(n=(0,o.cloneTensor)(n)),(await r.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{let r=e.inputNames.find(e=>void 0!==(0,o.getTensor)(e,t,a));if(r){let e=(0,o.getTensor)(r,t,a);return[(0,o.cloneTensor)(e)]}return}case"Enter":{let r=(0,o.getParamValue)("frameName",e,t,a),n=(0,o.getParamValue)("tensor",e,t,a);return a.enterFrame(r),[(0,o.cloneTensor)(n)]}case"Exit":{let r=(0,o.getParamValue)("tensor",e,t,a);return a.exitFrame(),[(0,o.cloneTensor)(r)]}case"NextIteration":{let r=(0,o.getParamValue)("tensor",e,t,a);return a.nextIteration(),[(0,o.cloneTensor)(r)]}case"TensorArrayV3":{let s=(0,o.getParamValue)("size",e,t,a),i=(0,o.getParamValue)("dtype",e,t,a),l=(0,o.getParamValue)("elementShape",e,t,a),u=(0,o.getParamValue)("dynamicSize",e,t,a),p=(0,o.getParamValue)("clearAfterRead",e,t,a),c=(0,o.getParamValue)("identicalElementShapes",e,t,a),d=(0,o.getParamValue)("name",e,t,a),h=new(0,n.TensorArray)(d,i,s,l,c,u,p);return a.addTensorArray(h),[h.idTensor,(0,r.scalar)(1)]}case"TensorArrayWriteV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=(0,o.getParamValue)("index",e,t,a),s=(0,o.getParamValue)("tensor",e,t,a),i=a.getTensorArray(r.id);return i.write(n,s),[i.idTensor]}case"TensorArrayReadV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=(0,o.getParamValue)("index",e,t,a);return[a.getTensorArray(r.id).read(n)]}case"TensorArrayGatherV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=(0,o.getParamValue)("indices",e,t,a),s=(0,o.getParamValue)("dtype",e,t,a);return[a.getTensorArray(r.id).gather(n,s)]}case"TensorArrayScatterV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=(0,o.getParamValue)("indices",e,t,a),s=(0,o.getParamValue)("tensor",e,t,a),i=a.getTensorArray(r.id);return i.scatter(n,s),[i.idTensor]}case"TensorArrayConcatV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=a.getTensorArray(r.id),s=(0,o.getParamValue)("dtype",e,t,a);return[n.concat(s)]}case"TensorArraySplitV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=(0,o.getParamValue)("tensor",e,t,a),s=(0,o.getParamValue)("lengths",e,t,a),i=a.getTensorArray(r.id);return i.split(s,n),[i.idTensor]}case"TensorArraySizeV3":{let n=(0,o.getParamValue)("tensorArrayId",e,t,a),s=a.getTensorArray(n.id);return[(0,r.scalar)(s.size(),"int32")]}case"TensorArrayCloseV3":{let r=(0,o.getParamValue)("tensorArrayId",e,t,a),n=a.getTensorArray(r.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("index",e,t,a),s=(0,o.getParamValue)("tensor",e,t,a),i=a.getTensorList(r.id);return i.setItem(n,s),[i.idTensor]}case"TensorListGetItem":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("index",e,t,a),s=(0,o.getParamValue)("elementShape",e,t,a),i=(0,o.getParamValue)("elementDType",e,t,a);return[a.getTensorList(r.id).getItem(n,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{let r=(0,o.getParamValue)("indices",e,t,a),n=(0,o.getParamValue)("tensor",e,t,a),i=(0,o.getParamValue)("elementShape",e,t,a),l=(0,o.getParamValue)("numElements",e,t,a),u=(0,s.scatter)(n,r,i,l);return a.addTensorList(u),[u.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let r,n=(0,o.getParamValue)("elementShape",e,t,a),i=(0,o.getParamValue)("elementDType",e,t,a);r="TensorListReserve"===e.op?"numElements":"maxNumElements";let l=(0,o.getParamValue)(r,e,t,a),u="TensorListReserve"===e.op?-1:l,p=(0,s.reserve)(n,i,l,u);return a.addTensorList(p),[p.idTensor]}case"TensorListGather":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("indices",e,t,a),s=(0,o.getParamValue)("elementShape",e,t,a),i=(0,o.getParamValue)("elementDType",e,t,a);return[a.getTensorList(r.id).gather(n,i,s)]}case"TensorListStack":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("elementShape",e,t,a),s=(0,o.getParamValue)("elementDType",e,t,a),i=(0,o.getParamValue)("numElements",e,t,a);return[a.getTensorList(r.id).stack(n,s,i)]}case"TensorListFromTensor":{let r=(0,o.getParamValue)("tensor",e,t,a),n=(0,o.getParamValue)("elementShape",e,t,a),i=(0,o.getParamValue)("elementDType",e,t,a),l=(0,s.fromTensor)(r,n,i);return a.addTensorList(l),[l.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=a.getTensorList(r.id),s=(0,o.getParamValue)("dtype",e,t,a),i=(0,o.getParamValue)("elementShape",e,t,a);return[n.concat(s,i)]}case"TensorListPushBack":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("tensor",e,t,a),s=a.getTensorList(r.id);return s.pushBack(n),[s.idTensor]}case"TensorListPopBack":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("elementShape",e,t,a),s=(0,o.getParamValue)("elementDType",e,t,a);return[a.getTensorList(r.id).popBack(n,s)]}case"TensorListSplit":{let r=(0,o.getParamValue)("tensor",e,t,a),n=(0,o.getParamValue)("elementShape",e,t,a),i=(0,o.getParamValue)("lengths",e,t,a),l=(0,s.split)(r,i,n);return a.addTensorList(l),[l.idTensor]}case"TensorListLength":{let n=(0,o.getParamValue)("tensorListId",e,t,a),s=a.getTensorList(n.id);return[(0,r.scalar)(s.size(),"int32")]}case"TensorListResize":{let r=(0,o.getParamValue)("tensorListId",e,t,a),n=(0,o.getParamValue)("size",e,t,a),s=a.getTensorList(r.id).resize(n);return a.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("bC7ZE",function(e,t){a(e.exports,"TensorArray",()=>h),d("fM0z2");var r=d("cW6ER"),n=d("1c9K8"),s=d("jUNqu"),o=d("3tgJG"),i=d("6R8FV"),l=d("a5zZz"),u=d("DXGru"),p=d("dqFom"),c=d("9iM8P");class h{constructor(e,t,r,a,s,i,l){this.name=e,this.dtype=t,this.maxSize=r,this.elementShape=a,this.identicalElementShapes=s,this.dynamicSize=i,this.clearAfterRead=l,this.tensors=[],this.closed_=!1,this.idTensor=(0,o.scalar)(0),(0,n.keep)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(e=>this.read(e))}write(e,t){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let r=this.tensors[e]||{};if(t.dtype!==this.dtype)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0===this.size()&&(null==this.elementShape||0===this.elementShape.length)&&(this.elementShape=t.shape),(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=t,(0,n.keep)(t),r.written=!0,this.tensors[e]=r}writeMany(e,t){if(e.length!==t.length)throw Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((e,r)=>this.write(e,t[r]))}gather(e,t){if(t&&t!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return(0,u.tensor)([],[0].concat(this.elementShape));let r=this.readMany(e);return(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),(0,l.stack)(r,0)}concat(e){if(e&&e!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return(0,u.tensor)([],[0].concat(this.elementShape));let t=[];for(let e=0;e<this.size();e++)t.push(e);let a=this.readMany(t);return(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,a[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`),(0,r.concat)(a,0)}scatter(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,(0,p.unstack)(t,0))}split(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let r=0,a=e.map(e=>r+=e);if(r!==t.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let o=0===r?0:t.size/r,l=[];(0,n.tidy)(()=>{t=(0,s.reshape)(t,[1,r,o]);for(let r=0;r<e.length;++r){let n=[0,0===r?0:a[r-1],0],u=[1,e[r],o];l[r]=(0,s.reshape)((0,i.slice)(t,n,u),this.elementShape)}return l});let u=[];for(let t=0;t<e.length;t++)u[t]=t;this.writeMany(u,l)}}}),h("9iM8P",function(e,t){a(e.exports,"assertShapesMatchAllowUndefinedSize",()=>n),a(e.exports,"inferElementShape",()=>o),a(e.exports,"mergeElementShape",()=>i),d("fM0z2");var r=d("a9Xyg");function n(e,t,a=""){if("number"!=typeof e&&"number"!=typeof t){r.assert(e.length===t.length,()=>a+` Shapes ${e} and ${t} must match`);for(let n=0;n<e.length;n++){let s=e[n],o=t[n];r.assert(s<0||o<0||s===o,()=>a+` Shapes ${e} and ${t} must match`)}}}function s(e){return!("number"==typeof e||e.some(e=>e<0))}function o(e,t,r){let a=i(e,r),n=!s(a);if(n&&0===t.length)throw Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);if(n&&t.forEach(e=>{a=i(e.shape,a)}),!s(a))throw Error(`Non-fully-defined elementShape: ${a}`);return a}function i(e,t){if("number"==typeof e)return t;if("number"==typeof t)return e;if(e.length!==t.length)throw Error(`Incompatible ranks during merge: ${e} vs. ${t}`);let r=[];for(let a=0;a<e.length;++a){let n=e[a],s=t[a];if(n>=0&&s>=0&&n!==s)throw Error(`Incompatible shape during merge: ${e} vs. ${t}`);r[a]=n>=0?n:s}return r}}),h("h8IW2",function(e,t){a(e.exports,"fromTensor",()=>f),a(e.exports,"reserve",()=>m),a(e.exports,"scatter",()=>g),a(e.exports,"split",()=>x),d("fM0z2");var r=d("cW6ER"),n=d("1c9K8"),s=d("jUNqu"),o=d("3tgJG"),i=d("6R8FV"),l=d("a5zZz"),u=d("DXGru"),p=d("dqFom"),c=d("9iM8P");class h{get id(){return this.idTensor.id}constructor(e,t,r,a=-1){this.tensors=e,this.elementShape=t,this.elementDtype=r,null!=e&&e.forEach(e=>{if(r!==e.dtype)throw Error(`Invalid data types; op elements ${r}, but list elements ${e.dtype}`);(0,c.assertShapesMatchAllowUndefinedSize)(t,e.shape,"TensorList shape mismatch: "),(0,n.keep)(e)}),this.idTensor=(0,o.scalar)(0),this.maxNumElements=a,(0,n.keep)(this.idTensor)}copy(){return new h([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.id)||t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,r=-1){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==r&&this.tensors.length!==r)throw Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);(0,c.assertShapesMatchAllowUndefinedSize)(e,this.elementShape,"TensorList shape mismatch: ");let a=(0,c.inferElementShape)(this.elementShape,this.tensors,e);return(0,n.tidy)(()=>{let e=this.tensors.map(e=>(0,s.reshape)(e,a));return(0,l.stack)(e,0)})}popBack(e,t){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw Error("Trying to pop from an empty list.");let r=(0,c.inferElementShape)(this.elementShape,this.tensors,e),a=this.tensors.pop();return a.kept=!1,(0,c.assertShapesMatchAllowUndefinedSize)(a.shape,e,"TensorList shape mismatch: "),(0,s.reshape)(a,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if((0,c.assertShapesMatchAllowUndefinedSize)(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw Error("Trying to push element into a full list.");(0,n.keep)(e),this.tensors.push(e)}resize(e){if(e<0)throw Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);let t=new h([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)t.tensors[r]=this.tensors[r];return t}getItem(e,t,r){if(r!==this.elementDtype)throw Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw Error(`element at index ${e} is null.`);(0,c.assertShapesMatchAllowUndefinedSize)(this.tensors[e].shape,t,"TensorList shape mismatch: ");let a=(0,c.inferElementShape)(this.elementShape,this.tensors,t);return(0,s.reshape)(this.tensors[e],a)}setItem(e,t){if(t.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,t.shape,"TensorList shape mismatch: "),(0,n.keep)(t),null!=this.tensors[e]&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,r){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());let a=(0,c.inferElementShape)(this.elementShape,this.tensors,r);return 0===e.length?(0,u.tensor)([],[0].concat(a)):(0,n.tidy)(()=>{let t=e.map(e=>(0,s.reshape)(this.tensors[e],a));return(0,l.stack)(t,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);(0,c.assertShapesMatchAllowUndefinedSize)(this.elementShape,t,"TensorList shape mismatch: ");let a=(0,c.inferElementShape)(this.elementShape,this.tensors,t);return 0===this.size()?(0,u.tensor)([],[0].concat(a)):(0,n.tidy)(()=>{let e=this.tensors.map(e=>(0,s.reshape)(e,a));return(0,r.concat)(e,0)})}}function f(e,t,r){let a=e.dtype;if(e.shape.length<1)throw Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==r)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${r}`);let n=e.shape.slice(1);return(0,c.assertShapesMatchAllowUndefinedSize)(n,t,"TensorList shape mismatch: "),new h((0,p.unstack)(e),t,a)}function m(e,t,r,a){return new h([],e,t,a)}function g(e,t,r,a){if(t.length!==e.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let n=Math.max(...t);if(null!=a&&-1!==a&&n>=a)throw Error(`Max index must be < array size (${n}  vs. ${a})`);let s=new h([],r,e.dtype,a),o=(0,p.unstack)(e,0);return t.forEach((e,t)=>{s.setItem(e,o[t])}),s}function x(e,t,r){let a=0,o=t.map(e=>a+=e);if(a!==e.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${e.shape}`);let l=e.shape.slice(1),u=(0,c.mergeElementShape)(l,r),p=0===a?0:e.size/a,d=(0,n.tidy)(()=>{let r=[];e=(0,s.reshape)(e,[1,a,p]);for(let a=0;a<t.length;++a){let n=[0,0===a?0:o[a-1],0],l=[1,t[a],p];r[a]=(0,s.reshape)((0,i.slice)(e,n,l),u)}return e.dispose(),r}),f=new h([],r,e.dtype,t.length);for(let e=0;e<d.length;e++)f.setItem(e,d[e]);return f}}),h("2rhXH",function(e,t){a(e.exports,"executeOp",()=>o);var r=d("1MgZ1"),n=d("eLhss");function s(e,t,r){let[a,s]=(0,n.getParamValue)("fusedOps",e,t,r),o="biasadd"===a,i="prelu"===s,l=(0,n.getParamValue)("numArgs",e,t,r);if(o){if(i&&2!==l)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&o&&1!==l)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if("fusedbatchnorm"===a)throw Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let u=(0,n.getParamValue)("strides",e,t,r),p=(0,n.getPadding)(e,t,r),c=(0,n.getParamValue)("dataFormat",e,t,r).toUpperCase(),d=(0,n.getParamValue)("dilations",e,t,r),[h,f]=(0,n.getParamValue)("args",e,t,r);return o||(f=h,h=void 0),{stride:u,pad:p,dataFormat:c,dilations:d,biasArg:h,preluArg:f,activationFunc:s,leakyreluAlpha:(0,n.getParamValue)("leakyreluAlpha",e,t,r)}}let o=(e,t,a,o=r)=>{switch(e.op){case"Conv1D":{let r=(0,n.getParamValue)("stride",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("dataFormat",e,t,a).toUpperCase(),l=(0,n.getParamValue)("dilation",e,t,a);return[o.conv1d((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("filter",e,t,a),r,s,i,l)]}case"Conv2D":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getPadding)(e,t,a),i=(0,n.getParamValue)("dataFormat",e,t,a).toUpperCase(),l=(0,n.getParamValue)("dilations",e,t,a);return[o.conv2d((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("filter",e,t,a),[r[1],r[2]],s,i,[l[1],l[2]])]}case"_FusedConv2D":{let{stride:r,pad:i,dataFormat:l,dilations:u,biasArg:p,preluArg:c,activationFunc:d,leakyreluAlpha:h}=s(e,t,a);return[o.fused.conv2d({x:(0,n.getParamValue)("x",e,t,a),filter:(0,n.getParamValue)("filter",e,t,a),strides:[r[1],r[2]],pad:i,dataFormat:l,dilations:[u[1],u[2]],bias:p,activation:d,preluActivationWeights:c,leakyreluAlpha:h})]}case"FusedDepthwiseConv2dNative":{let{stride:r,pad:i,dataFormat:l,dilations:u,biasArg:p,preluArg:c,activationFunc:d,leakyreluAlpha:h}=s(e,t,a);return[o.fused.depthwiseConv2d({x:(0,n.getParamValue)("x",e,t,a),filter:(0,n.getParamValue)("filter",e,t,a),strides:[r[1],r[2]],pad:i,dataFormat:l,dilations:[u[1],u[2]],bias:p,activation:d,preluActivationWeights:c,leakyreluAlpha:h})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let r=(0,n.getParamValue)("outputShape",e,t,a),s=(0,n.getParamValue)("strides",e,t,a),i=(0,n.getPadding)(e,t,a);return[o.conv2dTranspose((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("filter",e,t,a),r,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getPadding)(e,t,a),i=(0,n.getParamValue)("dilations",e,t,a),l=(0,n.getParamValue)("dataFormat",e,t,a).toUpperCase();return[o.depthwiseConv2d((0,n.getParamValue)("input",e,t,a),(0,n.getParamValue)("filter",e,t,a),[r[1],r[2]],s,l,[i[1],i[2]])]}case"Conv3D":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("dataFormat",e,t,a).toUpperCase(),l=(0,n.getParamValue)("dilations",e,t,a);return[o.conv3d((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("filter",e,t,a),[r[1],r[2],r[3]],s,i,[l[1],l[2],l[3]])]}case"AvgPool":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("kernelSize",e,t,a);return[o.avgPool((0,n.getParamValue)("x",e,t,a),[i[1],i[2]],[r[1],r[2]],s)]}case"MaxPool":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("kernelSize",e,t,a);return[o.maxPool((0,n.getParamValue)("x",e,t,a),[i[1],i[2]],[r[1],r[2]],s)]}case"MaxPoolWithArgmax":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("kernelSize",e,t,a),l=(0,n.getParamValue)("includeBatchInIndex",e,t,a),{result:u,indexes:p}=o.maxPoolWithArgmax((0,n.getParamValue)("x",e,t,a),[i[1],i[2]],[r[1],r[2]],s,l);return[u,p]}case"AvgPool3D":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("kernelSize",e,t,a);return[o.avgPool3d((0,n.getParamValue)("x",e,t,a),[i[1],i[2],i[3]],[r[1],r[2],r[3]],s)]}case"MaxPool3D":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("kernelSize",e,t,a);return[o.maxPool3d((0,n.getParamValue)("x",e,t,a),[i[1],i[2],i[3]],[r[1],r[2],r[3]],s)]}case"Dilation2D":{let r=(0,n.getParamValue)("strides",e,t,a),s=(0,n.getParamValue)("pad",e,t,a),i=(0,n.getParamValue)("dilations",e,t,a),l=r[1],u=r[2],p=i[1],c=i[2];return[o.dilation2d((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("filter",e,t,a),[l,u],s,[p,c],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("eiBMW",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Fill":{let r=(0,n.getParamValue)("shape",e,t,a),o=(0,n.getParamValue)("dtype",e,t,a),i=(0,n.getParamValue)("value",e,t,a);return[s.fill(r,i,o)]}case"LinSpace":{let r=(0,n.getParamValue)("start",e,t,a),o=(0,n.getParamValue)("stop",e,t,a),i=(0,n.getParamValue)("num",e,t,a);return[s.linspace(r,o,i)]}case"Multinomial":{let r=(0,n.getParamValue)("logits",e,t,a),o=(0,n.getParamValue)("numSamples",e,t,a),i=(0,n.getParamValue)("seed",e,t,a);return[s.multinomial(r,o,i)]}case"OneHot":{let r=(0,n.getParamValue)("indices",e,t,a),o=(0,n.getParamValue)("depth",e,t,a),i=(0,n.getParamValue)("onValue",e,t,a),l=(0,n.getParamValue)("offValue",e,t,a),u=(0,n.getParamValue)("dtype",e,t,a);return[s.oneHot(r,o,i,l,u)]}case"Ones":return[s.ones((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("dtype",e,t,a))];case"OnesLike":return[s.onesLike((0,n.getParamValue)("x",e,t,a))];case"RandomStandardNormal":return[s.randomStandardNormal((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("dtype",e,t,a),(0,n.getParamValue)("seed",e,t,a))];case"RandomUniform":return[s.randomUniform((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("minval",e,t,a),(0,n.getParamValue)("maxval",e,t,a),(0,n.getParamValue)("dtype",e,t,a))];case"RandomUniformInt":return[s.randomUniformInt((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("minval",e,t,a),(0,n.getParamValue)("maxval",e,t,a),(0,n.getParamValue)("seed",e,t,a))];case"Range":{let r=(0,n.getParamValue)("start",e,t,a),o=(0,n.getParamValue)("stop",e,t,a),i=(0,n.getParamValue)("step",e,t,a);return[s.range(r,o,i,(0,n.getParamValue)("dtype",e,t,a))]}case"TruncatedNormal":{let r=(0,n.getParamValue)("shape",e,t,a),o=(0,n.getParamValue)("mean",e,t,a),i=(0,n.getParamValue)("stdDev",e,t,a),l=(0,n.getParamValue)("seed",e,t,a);return[s.truncatedNormal(r,o,i,(0,n.getParamValue)("dtype",e,t,a),l)]}case"Zeros":return[s.zeros((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("dtype",e,t,a))];case"ZerosLike":return[s.zerosLike((0,n.getParamValue)("x",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("jUONW",function(e,t){a(e.exports,"executeOp",()=>o);var r=d("1MgZ1"),n=d("eLhss");function s(e,t,r){let a=(0,n.getParamValue)("boxes",e,t,r),s=(0,n.getParamValue)("scores",e,t,r),o=(0,n.getParamValue)("maxOutputSize",e,t,r),i=(0,n.getParamValue)("iouThreshold",e,t,r);return{boxes:a,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:(0,n.getParamValue)("scoreThreshold",e,t,r),softNmsSigma:(0,n.getParamValue)("softNmsSigma",e,t,r)}}let o=async(e,t,a,o,i=r)=>{switch(e.op){case"NonMaxSuppressionV5":{let{boxes:r,scores:n,maxOutputSize:o,iouThreshold:l,scoreThreshold:u,softNmsSigma:p}=s(e,t,a),c=await i.image.nonMaxSuppressionWithScoreAsync(r,n,o,l,u,p);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:r,scores:o,maxOutputSize:l,iouThreshold:u,scoreThreshold:p}=s(e,t,a),c=(0,n.getParamValue)("padToMaxOutputSize",e,t,a),d=await i.image.nonMaxSuppressionPaddedAsync(r,o,l,u,p,c);return[d.selectedIndices,d.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:r,scores:n,maxOutputSize:o,iouThreshold:l,scoreThreshold:u}=s(e,t,a);return[await i.image.nonMaxSuppressionAsync(r,n,o,l,u)]}case"Where":{let r=i.cast((0,n.getParamValue)("condition",e,t,a),"bool"),s=[await i.whereAsync(r)];return r.dispose(),s}case"ListDiff":return i.setdiff1dAsync((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("y",e,t,a));default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("jx7v1",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"LowerBound":{let r=(0,n.getParamValue)("sortedSequence",e,t,a),o=(0,n.getParamValue)("values",e,t,a);return[s.lowerBound(r,o)]}case"TopKV2":{let r=(0,n.getParamValue)("x",e,t,a),o=(0,n.getParamValue)("k",e,t,a),i=(0,n.getParamValue)("sorted",e,t,a),l=s.topk(r,o,i);return[l.values,l.indices]}case"UpperBound":{let r=(0,n.getParamValue)("sortedSequence",e,t,a),o=(0,n.getParamValue)("values",e,t,a);return[s.upperBound(r,o)]}case"Unique":{let r=(0,n.getParamValue)("x",e,t,a),o=s.unique(r);return[o.values,o.indices]}case"UniqueV2":{let r=(0,n.getParamValue)("x",e,t,a),o=(0,n.getParamValue)("axis",e,t,a),i=s.unique(r,o);return[i.values,i.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("lbM8w",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":let o=(0,n.getParamValue)("default",e,t,a);return[(0,n.getTensor)(e.name,t,a)||o];case"Placeholder":return[(0,n.getTensor)(e.name,t,a)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let r=(0,n.getParamValue)("x",e,t,a);return[(0,n.cloneTensor)(r)]}case"IdentityN":return(0,n.getParamValue)("x",e,t,a).map(e=>(0,n.cloneTensor)(e));case"Snapshot":let i=(0,n.getParamValue)("x",e,t,a);return[(0,n.cloneTensor)(i)];case"Shape":return[s.tensor1d((0,n.getParamValue)("x",e,t,a).shape,"int32")];case"ShapeN":return(0,n.getParamValue)("x",e,t,a).map(e=>s.tensor1d(e.shape));case"Size":return[s.scalar((0,n.getParamValue)("x",e,t,a).size,"int32")];case"Rank":return[s.scalar((0,n.getParamValue)("x",e,t,a).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":let l=(0,n.getParamValue)("x",e,t,a),u=(0,n.getParamValue)("data",e,t,a),p=(0,n.getParamValue)("message",e,t,a),c=(0,n.getParamValue)("summarize",e,t,a);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(p);for(let e=0;e<u.length;e++)console.log(Array.prototype.slice.call(u[e].dataSync()).slice(0,c));return[l];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("kePnV",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("9H2wk"),n=d("eLhss");let s=async(e,t,a,s)=>{switch(e.op){case"HashTable":case"HashTableV2":{let o=s.getHashTableHandleByName(e.name);if(null!=o)return[o];{let o=(0,n.getParamValue)("keyDType",e,t,a),i=(0,n.getParamValue)("valueDType",e,t,a),l=new(0,r.HashTable)(o,i);return s.addHashTable(e.name,l),[l.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let r=(0,n.getParamValue)("tableHandle",e,t,a,s),o=(0,n.getParamValue)("keys",e,t,a),i=(0,n.getParamValue)("values",e,t,a),l=s.getHashTableById(r.id);return[await l.import(o,i)]}case"LookupTableFind":case"LookupTableFindV2":{let r=(0,n.getParamValue)("tableHandle",e,t,a,s),o=(0,n.getParamValue)("keys",e,t,a),i=(0,n.getParamValue)("defaultValue",e,t,a),l=s.getHashTableById(r.id);return[await l.find(o,i)]}case"LookupTableSize":case"LookupTableSizeV2":{let r=(0,n.getParamValue)("tableHandle",e,t,a,s);return[s.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("9H2wk",function(e,t){a(e.exports,"HashTable",()=>l),d("fM0z2");var r=d("1c9K8"),n=d("3tgJG"),s=d("a5zZz"),o=d("dqFom"),i=d("a9Xyg"),n=d("3tgJG");class l{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=(0,n.scalar)(0),this.tensorMap=new Map,(0,r.keep)(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return n.scalar(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);let a=await e.data();return this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),(0,r.tidy)(()=>{let e=(0,o.unstack)(t),n=a.length,s=e.length;i.assert(n===s,()=>`The number of elements doesn't match, keys has ${n} elements, the values has ${s} elements.`);for(let t=0;t<n;t++){let n=a[t],s=e[t];(0,r.keep)(s),this.tensorMap.set(n,s)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);let a=await e.data();return(0,r.tidy)(()=>{let e=[];for(let r=0;r<a.length;r++){let n=a[r],s=this.findWithDefault(n,t);e.push(s)}return(0,s.stack)(e)})}findWithDefault(e,t){let r=this.tensorMap.get(e);return null!=r?r:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}}),h("hwAfr",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"ResizeBilinear":{let r=(0,n.getParamValue)("images",e,t,a),o=(0,n.getParamValue)("size",e,t,a),i=(0,n.getParamValue)("alignCorners",e,t,a),l=(0,n.getParamValue)("halfPixelCenters",e,t,a);return[s.image.resizeBilinear(r,[o[0],o[1]],i,l)]}case"ResizeNearestNeighbor":{let r=(0,n.getParamValue)("images",e,t,a),o=(0,n.getParamValue)("size",e,t,a),i=(0,n.getParamValue)("alignCorners",e,t,a),l=(0,n.getParamValue)("halfPixelCenters",e,t,a);return[s.image.resizeNearestNeighbor(r,[o[0],o[1]],i,l)]}case"CropAndResize":{let r=(0,n.getParamValue)("image",e,t,a),o=(0,n.getParamValue)("boxes",e,t,a),i=(0,n.getParamValue)("boxInd",e,t,a),l=(0,n.getParamValue)("cropSize",e,t,a),u=(0,n.getParamValue)("method",e,t,a),p=(0,n.getParamValue)("extrapolationValue",e,t,a);return[s.image.cropAndResize(r,o,i,l,u,p)]}case"ImageProjectiveTransformV3":{let r=(0,n.getParamValue)("images",e,t,a),o=(0,n.getParamValue)("transforms",e,t,a),i=(0,n.getParamValue)("outputShape",e,t,a),l=(0,n.getParamValue)("fillValue",e,t,a),u=(0,n.getParamValue)("interpolation",e,t,a),p=(0,n.getParamValue)("fillMode",e,t,a);return[s.image.transform(r,o,u.toLowerCase(),p.toLowerCase(),l,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("2egYX",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Equal":return[s.equal((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"NotEqual":return[s.notEqual((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Greater":return[s.greater((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"GreaterEqual":return[s.greaterEqual((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Less":return[s.less((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"LessEqual":return[s.lessEqual((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"LogicalAnd":return[s.logicalAnd((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"LogicalNot":return[s.logicalNot((0,n.getParamValue)("a",e,t,a))];case"LogicalOr":return[s.logicalOr((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"Select":case"SelectV2":return[s.where((0,n.getParamValue)("condition",e,t,a),(0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];case"BitwiseAnd":return[s.bitwiseAnd((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("e6vw5",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("b",e,t,a),(0,n.getParamValue)("transposeA",e,t,a),(0,n.getParamValue)("transposeB",e,t,a))];case"Einsum":return[s.einsum((0,n.getParamValue)("equation",e,t,a),...(0,n.getParamValue)("tensors",e,t,a))];case"Transpose":return[s.transpose((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("perm",e,t,a))];case"_FusedMatMul":let[o,i]=(0,n.getParamValue)("fusedOps",e,t,a),l="prelu"===i,u=(0,n.getParamValue)("numArgs",e,t,a),p=(0,n.getParamValue)("leakyreluAlpha",e,t,a);if("biasadd"===o){if(l&&2!==u)throw Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!l&&1!==u)throw Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[c,d]=(0,n.getParamValue)("args",e,t,a);return[s.fused.matMul({a:(0,n.getParamValue)("a",e,t,a),b:(0,n.getParamValue)("b",e,t,a),transposeA:(0,n.getParamValue)("transposeA",e,t,a),transposeB:(0,n.getParamValue)("transposeB",e,t,a),bias:c,activation:i,preluActivationWeights:d,leakyreluAlpha:p})];case"MatrixBandPart":return[s.linalg.bandPart((0,n.getParamValue)("a",e,t,a),(0,n.getParamValue)("numLower",e,t,a),(0,n.getParamValue)("numUpper",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("a1jAI",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"EuclideanNorm":return[s.euclideanNorm((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("axis",e,t,a),(0,n.getParamValue)("keepDims",e,t,a))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[s.batchNorm((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("mean",e,t,a),(0,n.getParamValue)("variance",e,t,a),(0,n.getParamValue)("offset",e,t,a),(0,n.getParamValue)("scale",e,t,a),(0,n.getParamValue)("epsilon",e,t,a))];case"LRN":return[s.localResponseNormalization((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("radius",e,t,a),(0,n.getParamValue)("bias",e,t,a),(0,n.getParamValue)("alpha",e,t,a),(0,n.getParamValue)("beta",e,t,a))];case"Softmax":return[s.softmax((0,n.getParamValue)("x",e,t,a))];case"LogSoftmax":return[s.logSoftmax((0,n.getParamValue)("x",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("jsdeb",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"RaggedGather":{let{outputNestedSplits:r,outputDenseValues:o}=s.raggedGather((0,n.getParamValue)("paramsNestedSplits",e,t,a),(0,n.getParamValue)("paramsDenseValues",e,t,a),(0,n.getParamValue)("indices",e,t,a),(0,n.getParamValue)("outputRaggedRank",e,t,a));return r.concat(o)}case"RaggedRange":{let{rtNestedSplits:r,rtDenseValues:o}=s.raggedRange((0,n.getParamValue)("starts",e,t,a),(0,n.getParamValue)("limits",e,t,a),(0,n.getParamValue)("splits",e,t,a));return[r,o]}case"RaggedTensorToTensor":return[s.raggedTensorToTensor((0,n.getParamValue)("shape",e,t,a),(0,n.getParamValue)("values",e,t,a),(0,n.getParamValue)("defaultValue",e,t,a),(0,n.getParamValue)("rowPartitionTensors",e,t,a),(0,n.getParamValue)("rowPartitionTypes",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("i04xX",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Max":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.max((0,n.getParamValue)("x",e,t,a),r,o)]}case"Mean":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.mean((0,n.getParamValue)("x",e,t,a),r,o)]}case"Min":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.min((0,n.getParamValue)("x",e,t,a),r,o)]}case"Sum":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.sum((0,n.getParamValue)("x",e,t,a),r,o)]}case"All":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.all((0,n.getParamValue)("x",e,t,a),r,o)]}case"Any":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.any((0,n.getParamValue)("x",e,t,a),r,o)]}case"ArgMax":{let r=(0,n.getParamValue)("axis",e,t,a);return[s.argMax((0,n.getParamValue)("x",e,t,a),r)]}case"ArgMin":{let r=(0,n.getParamValue)("axis",e,t,a);return[s.argMin((0,n.getParamValue)("x",e,t,a),r)]}case"Prod":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("keepDims",e,t,a);return[s.prod((0,n.getParamValue)("x",e,t,a),r,o)]}case"Cumprod":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("exclusive",e,t,a),i=(0,n.getParamValue)("reverse",e,t,a);return[s.cumprod((0,n.getParamValue)("x",e,t,a),r,o,i)]}case"Cumsum":{let r=(0,n.getParamValue)("axis",e,t,a),o=(0,n.getParamValue)("exclusive",e,t,a),i=(0,n.getParamValue)("reverse",e,t,a);return[s.cumsum((0,n.getParamValue)("x",e,t,a),r,o,i)]}case"Bincount":let o=(0,n.getParamValue)("x",e,t,a),i=(0,n.getParamValue)("weights",e,t,a),l=(0,n.getParamValue)("size",e,t,a);return[s.bincount(o,i,l)];case"DenseBincount":{let r=(0,n.getParamValue)("x",e,t,a),o=(0,n.getParamValue)("weights",e,t,a),i=(0,n.getParamValue)("size",e,t,a),l=(0,n.getParamValue)("binaryOutput",e,t,a);return[s.denseBincount(r,o,i,l)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("7RBqt",function(e,t){a(e.exports,"executeOp",()=>i),d("fM0z2");var r=d("1c9K8"),n=d("a9Xyg"),s=d("1MgZ1"),o=d("eLhss");let i=(e,t,a,i=s)=>{switch(e.op){case"ConcatV2":case"Concat":{let r=(0,o.getParamValue)("n",e,t,a),n=(0,o.getParamValue)("axis",e,t,a),s=(0,o.getParamValue)("tensors",e,t,a);return s=s.slice(0,r),[i.concat(s,n)]}case"Gather":{let r=(0,o.getParamValue)("x",e,t,a),n=(0,o.getParamValue)("indices",e,t,a);return[i.gather(r,i.cast(n,"int32"),0)]}case"GatherV2":{let r=(0,o.getParamValue)("axis",e,t,a),n=(0,o.getParamValue)("batchDims",e,t,a),s=(0,o.getParamValue)("x",e,t,a),l=(0,o.getParamValue)("indices",e,t,a);return[i.gather(s,i.cast(l,"int32"),r,n)]}case"Reverse":{let r=(0,o.getParamValue)("dims",e,t,a),n=[];for(let e=0;e<r.length;e++)r[e]&&n.push(e);let s=(0,o.getParamValue)("x",e,t,a);return[i.reverse(s,n)]}case"ReverseV2":{let r=(0,o.getParamValue)("axis",e,t,a),n=(0,o.getParamValue)("x",e,t,a);return[i.reverse(n,r)]}case"Slice":{let r=(0,o.getParamValue)("begin",e,t,a),n=(0,o.getParamValue)("size",e,t,a);return[i.slice((0,o.getParamValue)("x",e,t,a),r,n)]}case"StridedSlice":{let r=(0,o.getParamValue)("begin",e,t,a),n=(0,o.getParamValue)("end",e,t,a),s=(0,o.getParamValue)("strides",e,t,a),l=(0,o.getParamValue)("beginMask",e,t,a),u=(0,o.getParamValue)("endMask",e,t,a),p=(0,o.getParamValue)("ellipsisMask",e,t,a),c=(0,o.getParamValue)("newAxisMask",e,t,a),d=(0,o.getParamValue)("shrinkAxisMask",e,t,a),h=(0,o.getParamValue)("x",e,t,a);return[i.stridedSlice(h,r,n,s,l,u,p,c,d)]}case"Pack":return(0,r.tidy)(()=>{let r=(0,o.getParamValue)("axis",e,t,a),s=(0,o.getParamValue)("tensors",e,t,a),l=s[0].shape,u=i.squeeze(s[0]).shape,p=s.map(e=>{let t=n.arraysEqual(e.shape,l);if(!t&&!n.arraysEqual(i.squeeze(e).shape,u))throw Error("the input tensors shape does not match");return t?e:i.reshape(e,l)});return[i.stack(p,r)]});case"Unpack":{let r=(0,o.getParamValue)("axis",e,t,a),n=(0,o.getParamValue)("tensor",e,t,a);return i.unstack(n,r)}case"Tile":{let r=(0,o.getParamValue)("reps",e,t,a);return[i.tile((0,o.getParamValue)("x",e,t,a),r)]}case"Split":case"SplitV":{let r=(0,o.getParamValue)("axis",e,t,a),n=(0,o.getParamValue)("numOrSizeSplits",e,t,a),s=(0,o.getParamValue)("x",e,t,a);return i.split(s,n,r)}case"ScatterNd":{let r=(0,o.getParamValue)("indices",e,t,a),n=(0,o.getParamValue)("values",e,t,a),s=(0,o.getParamValue)("shape",e,t,a);return[i.scatterND(r,n,s)]}case"GatherNd":{let r=(0,o.getParamValue)("x",e,t,a),n=(0,o.getParamValue)("indices",e,t,a);return[i.gatherND(r,n)]}case"SparseToDense":{let r=(0,o.getParamValue)("sparseIndices",e,t,a),n=(0,o.getParamValue)("outputShape",e,t,a),s=(0,o.getParamValue)("sparseValues",e,t,a),l=(0,o.getParamValue)("defaultValue",e,t,a);return[i.sparseToDense(r,s,n,s.dtype===l.dtype?l:i.cast(l,s.dtype))]}case"TensorScatterUpdate":{let r=(0,o.getParamValue)("indices",e,t,a),n=(0,o.getParamValue)("values",e,t,a),s=(0,o.getParamValue)("tensor",e,t,a);return[i.tensorScatterUpdate(s,r,n)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("dI4yk",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"SparseFillEmptyRows":{let{outputIndices:r,outputValues:o,emptyRowIndicator:i,reverseIndexMap:l}=s.sparse.sparseFillEmptyRows((0,n.getParamValue)("indices",e,t,a),(0,n.getParamValue)("values",e,t,a),(0,n.getParamValue)("denseShape",e,t,a),(0,n.getParamValue)("defaultValue",e,t,a));return[r,o,i,l]}case"SparseReshape":{let{outputIndices:r,outputShape:o}=s.sparse.sparseReshape((0,n.getParamValue)("inputIndices",e,t,a),(0,n.getParamValue)("inputShape",e,t,a),(0,n.getParamValue)("newShape",e,t,a));return[r,o]}case"SparseSegmentMean":return[s.sparse.sparseSegmentMean((0,n.getParamValue)("data",e,t,a),(0,n.getParamValue)("indices",e,t,a),(0,n.getParamValue)("segmentIds",e,t,a))];case"SparseSegmentSum":return[s.sparse.sparseSegmentSum((0,n.getParamValue)("data",e,t,a),(0,n.getParamValue)("indices",e,t,a),(0,n.getParamValue)("segmentIds",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("gNpY4",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"FFT":return[s.fft((0,n.getParamValue)("x",e,t,a))];case"IFFT":return[s.ifft((0,n.getParamValue)("x",e,t,a))];case"RFFT":return[s.rfft((0,n.getParamValue)("x",e,t,a))];case"IRFFT":return[s.irfft((0,n.getParamValue)("x",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("juQc8",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"StaticRegexReplace":return[s.string.staticRegexReplace((0,n.getParamValue)("input",e,t,a),(0,n.getParamValue)("pattern",e,t,a),(0,n.getParamValue)("rewrite",e,t,a),(0,n.getParamValue)("replaceGlobal",e,t,a))];case"StringNGrams":{let{nGrams:r,nGramsSplits:o}=s.string.stringNGrams((0,n.getParamValue)("data",e,t,a),(0,n.getParamValue)("dataSplits",e,t,a),(0,n.getParamValue)("separator",e,t,a),(0,n.getParamValue)("nGramWidths",e,t,a),(0,n.getParamValue)("leftPad",e,t,a),(0,n.getParamValue)("rightPad",e,t,a),(0,n.getParamValue)("padWidth",e,t,a),(0,n.getParamValue)("preserveShortSequences",e,t,a));return[r,o]}case"StringSplit":{let{indices:r,values:o,shape:i}=s.string.stringSplit((0,n.getParamValue)("input",e,t,a),(0,n.getParamValue)("delimiter",e,t,a),(0,n.getParamValue)("skipEmpty",e,t,a));return[r,o,i]}case"StringToHashBucketFast":return[s.string.stringToHashBucketFast((0,n.getParamValue)("input",e,t,a),(0,n.getParamValue)("numBuckets",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("eCydU",function(e,t){a(e.exports,"executeOp",()=>s);var r=d("1MgZ1"),n=d("eLhss");let s=(e,t,a,s=r)=>{switch(e.op){case"Cast":return[s.cast((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("dtype",e,t,a))];case"ExpandDims":{let r=(0,n.getParamValue)("axis",e,t,a);return[s.expandDims((0,n.getParamValue)("x",e,t,a),r)]}case"Squeeze":{let r=(0,n.getParamValue)("axis",e,t,a);return[s.squeeze((0,n.getParamValue)("x",e,t,a),r)]}case"Reshape":return[s.reshape((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("shape",e,t,a))];case"EnsureShape":return[s.ensureShape((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("shape",e,t,a))];case"MirrorPad":return[s.mirrorPad((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("padding",e,t,a),(0,n.getParamValue)("mode",e,t,a))];case"PadV2":case"Pad":return[s.pad((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("padding",e,t,a),(0,n.getParamValue)("constantValue",e,t,a))];case"SpaceToBatchND":{let r=(0,n.getParamValue)("blockShape",e,t,a),o=(0,n.getParamValue)("paddings",e,t,a);return[s.spaceToBatchND((0,n.getParamValue)("x",e,t,a),r,o)]}case"BatchToSpaceND":{let r=(0,n.getParamValue)("blockShape",e,t,a),o=(0,n.getParamValue)("crops",e,t,a);return[s.batchToSpaceND((0,n.getParamValue)("x",e,t,a),r,o)]}case"DepthToSpace":{let r=(0,n.getParamValue)("blockSize",e,t,a),o=(0,n.getParamValue)("dataFormat",e,t,a).toUpperCase();return[s.depthToSpace((0,n.getParamValue)("x",e,t,a),r,o)]}case"BroadcastTo":return[s.broadcastTo((0,n.getParamValue)("x",e,t,a),(0,n.getParamValue)("shape",e,t,a))];case"BroadcastArgs":return[s.broadcastArgs((0,n.getParamValue)("s0",e,t,a),(0,n.getParamValue)("s1",e,t,a))];default:throw TypeError(`Node type ${e.op} is not implemented`)}}}),h("7RZdJ",function(e,t){a(e.exports,"ExecutionContext",()=>r);class r{constructor(e={},t={},r={},a={},n){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=r,this.functionMap=a,this.parseNodeNameCache=n,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let r=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}}),h("eL8sQ",function(e,t){a(e.exports,"getExecutionSubgraph",()=>n),a(e.exports,"isControlFlow",()=>c),a(e.exports,"getNodesInTopologicalOrder",()=>s),a(e.exports,"getNodeLiveUntilMap",()=>i);var r=d("eLhss");function n(e,t,a,n){let s=new Set,o=[],i=null,l=null,d=new Set,h=new Set(Object.keys(e).map(e=>(0,r.parseNodeName)(e)[0])),f=new Set((n=n||[]).map(e=>(0,r.parseNodeName)(e.name)[0])),m=[...t];for(;m.length>0;){var g,x;let e=m.pop();if((c(e)||(g=e,u.has(g.op))||(x=e,p.has(x.op)))&&null==i&&(l=(i=e).children.map(e=>e.name).filter(e=>s.has(e))),s.add(e.name),!(null!=a[e.name]||h.has(e.name)||f.has(e.name))){if(0===e.inputs.length){o.push(e.name);continue}e.inputs.forEach(e=>{d.has(e.name)||(d.add(e.name),m.push(e))})}}return{inputs:e,outputs:t,usedNodes:s,missingInputs:o,dynamicNode:i,syncInputs:l}}function s(e,t){let{usedNodes:a,inputs:n}=t,s=Object.keys(n).map(e=>(0,r.parseNodeName)(e)[0]).map(t=>e.nodes[t]),i=e.initNodes||[],l=e=>a.has("string"==typeof e?e:e.name);function u(e){return[...new Map(e.map(e=>[e.name,e])).values()]}let p=u([...s,...e.weights,...i]).filter(l),c=u([...p,...Object.values(e.nodes)]).filter(l),d=new Map(c.map(e=>[e.name,e])),h={};for(let e of c)for(let t of(h[e.name]=h[e.name]||0,e.children))l(t)||(h[t.name]=Number.POSITIVE_INFINITY),h[t.name]=(h[t.name]||0)+1;let f=Object.entries(h).filter(([,e])=>0===e).map(([e])=>e),m=[...f];for(;f.length>0;){let e=f.pop();for(let t of d.get(e).children.filter(l))0==--h[t.name]&&(m.push(t.name),f.push(t.name))}let g=function(e,t){let r=new Map(e.map(e=>[e.name,e])),a=t.map(e=>e.name),n=new Set(a);for(;a.length>0;){let e=a.pop();for(let t of r.get(e).children)!r.has(t.name)||n.has(t.name)||(n.add(t.name),a.push(t.name))}return e.filter(e=>n.has(e.name))}(m.map(e=>d.get(e)),p);return function(e,t){let r=new Map(e.map((e,t)=>[e.name,t])),a=new Set(t.map(e=>e.name)),n=e=>a.has("string"==typeof e?e:e.name),s=new Set(e.map(e=>e.name)),i=e=>s.has("string"==typeof e?e:e.name);for(let t of e){for(let e of t.children.filter(i)){if(!r.has(e.name))throw new o(`Child ${e.name} of node ${t.name} is unreachable.`);if(r.get(t.name)>r.get(e.name))throw new o(`Node ${t.name} is scheduled to run after its child ${e.name}.`)}if(!n(t))for(let e of t.inputs){if(!r.has(e.name))throw new o(`Input ${e.name} of node ${t.name} is unreachable.`);if(r.get(e.name)>r.get(t.name))throw new o(`Node ${t.name} is scheduled to run before its input ${e.name}.`)}}}(g,p),g}class o extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function i(e){let t=new Map(e.map((e,t)=>[e.name,t])),r=Number.MAX_SAFE_INTEGER,a=e.map((e,t)=>c(e)?r:t),n=e=>{let r=a[t.get(e.name)];return null==r?-1:r},s=e.map((e,t)=>e.children.map(n).reduce((e,t)=>Math.max(e,t),a[t])),o=new Map;for(let t=0;t<e.length;++t){let a=s[t];if(a===r)continue;let n=e[t],i=e[a];o.has(i.name)||o.set(i.name,[]),o.get(i.name).push(n)}return o}let l=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),u=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),p=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function c(e){return l.has(e.op)}}),h("fQ6FR",function(e,t){a(e.exports,"ResourceManager",()=>r);class r{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}}),h("2cnG1",function(e,t){}),d("fM0z2"),d("fM0z2");var f=d("9kvpY"),m=d("1c9K8");d("fM0z2");var f=d("9kvpY"),g=d("alePs");d("fM0z2");var g=d("alePs"),x=d("a9Xyg");d("fM0z2");var g=d("alePs");let y={},b={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function v(e,t){if(!(e in y)||null!=t){let r=function(e,t){if(1!==e&&2!==e)throw Error("Cannot get WebGL rendering context, WebGL is disabled.");let r=null==t?function(e){if(!(0,g.env)().getBool("IS_SAFARI")&&"undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw Error("Cannot create a canvas in this context")}(e):t;return(r.addEventListener("webglcontextlost",t=>{t.preventDefault(),delete y[e]},!1),(0,g.env)().getBool("SOFTWARE_WEBGL_ENABLED")&&(b.failIfMajorPerformanceCaveat=!1),1===e)?r.getContext("webgl",b)||r.getContext("experimental-webgl",b):r.getContext("webgl2",b)}(e,t);if(null===r)return console.log("Could not get context for WebGL version",e),null;y[e]=r}let r=y[e];return null==r||r.isContextLost()?(delete y[e],v(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),y[e])}d("fM0z2");var g=d("alePs"),x=d("a9Xyg");function T(e){let t=Math.ceil(x.sizeFromShape(e)/4);return x.sizeToSquarishShape(t)}function w(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function k(e,t){let r,a,n,s,o,i,l,u,p,c;return 2===(0,g.env)().getNumber("WEBGL_VERSION")?(r=e.R32F,a=e.R16F,n=e.RGBA16F,s=e.RGBA32F,o=e.RED,l=4,u=1,p=e.HALF_FLOAT,c=e.FLOAT,i=e.RGBA8):(r=e.RGBA,a=e.RGBA,n=e.RGBA,s=e.RGBA,o=e.RGBA,l=4,u=4,p=null!=t?t.HALF_FLOAT_OES:null,c=e.FLOAT,i=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:a,internalFormatPackedHalfFloat:n,internalFormatPackedFloat:s,textureFormatFloat:o,downloadTextureFormat:i,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:p,textureTypeFloat:c}}function N(e,t){let r=t();return(0,g.env)().getBool("DEBUG")&&function(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error("WebGL Error: "+function(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}(e,t))}(e),r}function S(e,t){return O(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}!function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"}(s||(s={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(o||(o={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(i||(i={}));let E=/ERROR: [0-9]+:([0-9]+):/g;function I(e,t){let r=E.exec(t);if(null==r){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let a=+r[1],n=e.split("\n"),s=n.length.toString().length+2,o=n.map((e,t)=>x.rightPad((t+1).toString(),s)+e),i=0;for(let e=0;e<o.length;e++)i=Math.max(o[e].length,i);let l=o.slice(0,a-1),u=o.slice(a-1,a),p=o.slice(a);console.log(l.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${x.rightPad(u[0],i)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join("\n"))}function C(e,t){if(N(e,()=>e.validateProgram(t)),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Shader program validation failed.")}function $(e,t,r,a,n,s,o){let i=e.getAttribLocation(t,r);return -1!==i&&(N(e,()=>e.bindBuffer(e.ARRAY_BUFFER,a)),N(e,()=>e.vertexAttribPointer(i,n,e.FLOAT,!1,s,o)),N(e,()=>e.enableVertexAttribArray(i)),!0)}function A(e,t,r){N(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,r)),N(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function R(e,t){N(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),N(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function M(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error("Error binding framebuffer: "+function(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}(e,t))}function O(e,t,r){let a=N(e,()=>t());if(null==a)throw Error(r);return a}function V(e,t=2){return x.sizeFromShape(e.slice(0,e.length-t))}function P(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function D(e){let t=[1,1,1];return 0!==e.length&&(1!==e.length||1!==e[0])&&(t=[V(e),...P(e)]),t}function _(e,t){if(e=e.slice(-2),t=t.slice(-2),x.arraysEqual(e,t)||!e.length||!t.length||0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){let r=e[e.length-1],a=t[t.length-1];if(r===a||r%2==0&&a%2==0&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&e[0]%2==0&&t[0]%2==0}function F(e,t){return null!=e.getExtension(t)}function z(e){try{let t=v(e);if(null!=t)return!0}catch(e){console.log("Error when getting WebGL context: ",e)}return!1}function L(e){let t=k(e),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let n=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(a),n}function G(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&x.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}let B=(0,g.env)();B.registerFlag("HAS_WEBGL",()=>B.getNumber("WEBGL_VERSION")>0),B.registerFlag("WEBGL_VERSION",()=>z(2)?2:+!!z(1)),B.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),B.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===B.get("WEBGL_VERSION")),B.registerFlag("WEBGL_CPU_FORWARD",()=>!0),B.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),B.registerFlag("WEBGL_PACK",()=>B.getBool("HAS_WEBGL")),B.registerFlag("WEBGL_PACK_NORMALIZATION",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_CLIP",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_REDUCE",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_LAZILY_UNPACK",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_CONV_IM2COL",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>B.getBool("WEBGL_PACK")),B.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>(function(t){if(null==e){let r=v(t);e=r.getParameter(r.MAX_TEXTURE_SIZE)}return e})(B.getNumber("WEBGL_VERSION"))),B.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>(function(e){if(null==t){let r=v(e);t=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,t)})(B.getNumber("WEBGL_VERSION"))),B.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=B.getNumber("WEBGL_VERSION");return 0===e?0:function(e){if(0===e)return 0;let t=v(e);return F(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:+!!F(t,"EXT_disjoint_timer_query")}(e)}),B.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>B.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!f.isMobile()),B.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>(function(e){if(0===e)return!1;let t=v(e);if(1===e){if(!F(t,"OES_texture_float"))return!1}else if(!F(t,"EXT_color_buffer_float"))return!1;return L(t)})(B.getNumber("WEBGL_VERSION"))),B.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!B.getBool("WEBGL_FORCE_F16_TEXTURES")&&B.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),B.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>(function(e){if(0===e)return!1;let t=v(e);if(1===e){if(!F(t,"OES_texture_float")||!F(t,"WEBGL_color_buffer_float"))return!1}else{if(F(t,"EXT_color_buffer_float"))return L(t);let e="EXT_color_buffer_half_float";if(F(t,e)){let n=t.getExtension(e);var r=t,a=n;let s=k(r,a),o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,s.internalFormatHalfFloat,1,1,0,s.textureFormatFloat,s.textureTypeHalfFloat,null);let i=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0);let l=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(o),r.deleteFramebuffer(i),l}return!1}return L(t)})(B.getNumber("WEBGL_VERSION"))),B.registerFlag("WEBGL_FENCE_API_ENABLED",()=>(function(e){return 2===e&&null!=v(e).fenceSync})(B.getNumber("WEBGL_VERSION"))),B.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>4*!!B.getBool("WEBGL_RENDER_FLOAT32_ENABLED")),B.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),B.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>f.isMobile()?1:-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),B.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),B.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),B.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),B.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),B.registerFlag("WEBGL_EXP_CONV",()=>!1),B.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>B.getBool("IS_TEST")),B.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),B.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),B.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),B.registerFlag("ENGINE_COMPILE_ONLY",()=>!1),d("fM0z2");var W=d("4ajhx"),U=d("hPfZs"),j=d("6DWy4"),m=d("1c9K8"),g=d("alePs"),K=d("eu00D"),q=d("gsLG9"),H=d("3tgJG"),x=d("a9Xyg");d("fM0z2");var g=d("alePs");function X(){let e,t,r,a,n,s,o,i,l,u;return 2===(0,g.env)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",r="out",a="in",n="texture",s="outputColor",o="out vec4 outputColor;",i=(0,g.env)().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",r="varying",a="varying",n="texture2D",s="gl_FragColor",o="",i=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:r,varyingFs:a,texture2D:n,output:s,defineOutput:o,defineSpecialNaN:i,defineSpecialInf:l,defineRound:u}}d("fM0z2");var W=d("4ajhx"),g=d("alePs"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");d("fM0z2");var x=d("a9Xyg");function J(e,t,r="index"){let a=x.computeStrides(t);return a.map((t,n)=>{let s=`int ${e[n]} = ${r} / ${t}`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * ${t}`:`index -= ${e[n]} * ${t}`;return`${s}; ${o};`}).join("")}function Y(e,t,r="index"){let a=x.computeStrides(t);return a.map((t,n)=>{let s=`int ${e[n]} = ${r} / outShapeStrides[${n}]`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * outShapeStrides[${n}]`:`index -= ${e[n]} * outShapeStrides[${n}]`;return`${s}; ${o};`}).join("")}function Z(e){let t=x.computeStrides(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Q(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}let ee=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`,{getBroadcastDims:et}=W,er=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ea=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,en=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,es=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function eo(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function ei(e){return`offset${e}`}function el(e){let t=e.name,r=x.sizeFromShape(e.shapeInfo.logicalShape);return r<2?`return ${t};`:`
    for (int i = 0; i < ${r}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function eu(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";else if(6===e)return"ivec6";else throw Error(`GPU for rank ${e} is not yet supported`)}function ep(e,t,r){let{newShape:a,keptDims:n}=x.squeezeShape(t),s=t.length,o=e&&3===s&&1===t[0],i=o?t.slice(1):a,l=!e&&s>1&&!x.arraysEqual(t,r)&&a.length<s||o,u=l?i:t;return{useSqueezeShape:l,uniformShape:u,keptDims:n}}function ec(e,t){let r=JSON.parse(JSON.stringify(e));return r.shapeInfo.logicalShape=t,r}function ed(e,t){return t.map(t=>e[t]).join(", ")}function eh(e,t,r){let a,n,s,o=[],i=[],l=null,u=null;for(let a of(u=e.getUniformLocation(r,"NAN",!1),1===(0,g.env)().getNumber("WEBGL_VERSION")&&(l=e.getUniformLocation(r,"INFINITY",!1)),t.variableNames)){let n={name:a,uniform:e.getUniformLocation(r,a,!1),offset:e.getUniformLocation(r,`offset${a}`,!1)};t.enableShapeUniforms&&(n.shape=e.getUniformLocation(r,`${a}Shape`,!1),n.texShape=e.getUniformLocation(r,`${a}TexShape`,!1)),o.push(n)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(r,"outShape",!1),s=e.getUniformLocation(r,"outShapeStrides",!1),n=e.getUniformLocation(r,"outTexShape",!1)),t.customUniforms)for(let a of t.customUniforms)i.push(e.getUniformLocation(r,a.name,!1));return{variablesLocations:o,customUniformLocations:i,infLoc:l,nanLoc:u,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:n}}function ef(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,r)=>{let a=e.logicalShape,n=t[r],s=n.shape;if(!x.arraysEqual(a,s))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${a} and ${s} must match`);if(e.isUniform&&n.isUniform)return;let o=e.texShape,i=n.isUniform?null:n.texData.texShape;if(!x.arraysEqual(o,i))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${i} must match`)})}function em(e){return(0,g.env)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}class eg{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=s.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=X();this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Y(["r","c","d"],e):J(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}class ex{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=s.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=X();this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Y(["r","c","d"],e):J(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}class ey{constructor(e){this.variableNames=["A"],this.outTexUsage=o.DOWNLOAD;let t=X();this.outputShape=e,this.userCode=`
      ${ee}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}class eb{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=o.DOWNLOAD;let t=X();this.outputShape=e,this.userCode=`
      ${ee}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}let ev={R:0,G:1,B:2,A:3};class eT{constructor(e,t=!1,r="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let a=X();this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length);let n="result";t&&(n="floor(result * 255. + 0.5)");let s="";for(let e=0;e<r.length;e++){let t=r[e];s+=`
          if(offset == ${e}) {
            result = values[${ev[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Q():Z(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${r.length});

        flatIndex = idiv(flatIndex, ${r.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${a.texture2D}(A, uv);
          ${s}
        }
        ${a.output} = vec4(${n}, 0., 0., 0.);
      }
    `}}class ew{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let r=X();this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length);let a="",n="result";t&&(n="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){let s=2*t+n;a+=`
          localCoords = coords;
          if(localCoords[2] + ${n} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${n};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${r.texture2D}(A, uv);

            if (offset == 0) {
              result[${s}] = values[0];
            } else if (offset == 1) {
              result[${s}] = values[1];
            } else if (offset == 2) {
              result[${s}] = values[2];
            } else {
              result[${s}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Q():Z(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${a}

          ${r.output} = ${n};
        }
    `}}d("fM0z2");var g=d("alePs"),x=d("a9Xyg");d("fM0z2");var g=d("alePs");function ek(e,t,r,a,n,s){let o=(0,g.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||r<=0)throw Error(`Requested texture size [${t}x${r}] is invalid.`);if(t>o||r>o)throw Error(`Requested texture size [${t}x${r}] greater than WebGL maximum on this browser / GPU [${o}x${o}].`);let i=O(e,()=>e.createTexture(),"Unable to create WebGLTexture."),l=e.TEXTURE_2D;return N(e,()=>e.bindTexture(l,i)),N(e,()=>e.texParameteri(l,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),N(e,()=>e.texParameteri(l,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),N(e,()=>e.texParameteri(l,e.TEXTURE_MIN_FILTER,e.NEAREST)),N(e,()=>e.texParameteri(l,e.TEXTURE_MAG_FILTER,e.NEAREST)),1===(0,g.env)().getNumber("WEBGL_VERSION")?N(e,()=>e.texImage2D(l,0,a,t,r,0,n,s,null)):N(e,()=>e.texStorage2D(l,1,a,t,r)),N(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:i,texShape:[r,t]}}function eN(e){return e.internalFormatFloat}function eS(e){return e.internalFormatHalfFloat}function eE(e){return e.downloadTextureFormat}function eI(e){return e.internalFormatPackedFloat}function eC(e){return e.internalFormatPackedHalfFloat}class e${constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=(0,g.env)().getNumber("WEBGL_VERSION");if(null!=e){var r;this.gl=e,r=e,y[t]=r}else this.gl=v(t);if(e=this.gl,2===(0,g.env)().getNumber("WEBGL_VERSION")){let t=e;this.createVertexArray=()=>N(t,()=>t.createVertexArray()),this.bindVertexArray=e=>N(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>N(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>N(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(null!=e){let t=e.getExtension("OES_vertex_array_object");if(null==t)throw Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>N(e,()=>t.createVertexArrayOES()),this.bindVertexArray=r=>N(e,()=>t.bindVertexArrayOES(r)),this.deleteVertexArray=r=>N(e,()=>t.deleteVertexArrayOES(r)),this.getVertexArray=()=>N(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let a="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,g.env)().getNumber("WEBGL_VERSION")){let e="OES_texture_half_float";if(this.textureFloatExtension=S(this.gl,"OES_texture_float"),F(this.gl,e))this.textureHalfFloatExtension=S(this.gl,e);else if((0,g.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(a),F(this.gl,n))this.colorBufferHalfFloatExtension=S(this.gl,n);else if((0,g.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(a="EXT_color_buffer_float",F(this.gl,a))this.colorBufferFloatExtension=this.gl.getExtension(a);else if(F(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw Error("GL context does not support color renderable floats");this.vertexBuffer=function(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]),r=O(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return N(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),N(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),r}(this.gl),this.indexBuffer=function(e){let t=new Uint16Array([0,1,2,2,1,3]),r=O(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return N(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)),N(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),r}(this.gl),this.framebuffer=function(e){return O(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}(this.gl),this.textureConfig=k(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,g.env)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;N(e,()=>e.finish()),N(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),N(e,()=>e.deleteFramebuffer(this.framebuffer)),N(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),N(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),N(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,r,a){let[n,s]=[r,t];return ek(e,n,s,eN(a),a.textureFormatFloat,e.FLOAT)}(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,r,a){let[n,s]=[r,t];return ek(e,n,s,eS(a),a.textureFormatFloat,a.textureTypeHalfFloat)}(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,r,a){let[n,s]=[r,t];return ek(e,n,s,eE(a),e.RGBA,e.UNSIGNED_BYTE)}(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){var r;this.throwIfDisposed(),r=this.gl,N(r,()=>r.bindTexture(r.TEXTURE_2D,e)),t.data instanceof Uint8Array?2===(0,g.env)().getNumber("WEBGL_VERSION")?N(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t.width,t.height,r.RGBA,r.UNSIGNED_BYTE,t.data)):N(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)):2===(0,g.env)().getNumber("WEBGL_VERSION")?N(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,t)):N(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),N(r,()=>r.bindTexture(r.TEXTURE_2D,null))}uploadDenseMatrixToTexture(e,t,r,a){var n,s;let o,i,l;this.throwIfDisposed(),n=this.gl,s=this.textureConfig,N(n,()=>n.bindTexture(n.TEXTURE_2D,e)),a instanceof Uint8Array?(o=new Uint8Array(t*r*4),i=n.UNSIGNED_BYTE,l=n.RGBA):(o=new Float32Array(t*r*4),i=n.FLOAT,l=s.internalFormatPackedFloat),o.set(a),2===(0,g.env)().getNumber("WEBGL_VERSION")?N(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,r,n.RGBA,i,o)):N(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,t,r,0,n.RGBA,i,o)),N(n,()=>n.bindTexture(n.TEXTURE_2D,null))}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,r,a){let[n,s]=w(t,r);return ek(e,n,s,eC(a),e.RGBA,a.textureTypeHalfFloat)}(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),function(e,t,r,a){let[n,s]=w(t,r);return ek(e,n,s,eI(a),e.RGBA,e.FLOAT)}(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(R(this.gl,this.framebuffer),this.outputTexture=null),N(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,r){return this.downloadMatrixDriver(e,()=>(function(e,t,r,a){let[n,s]=[r,t],o=new Uint8Array(t*r*4);return N(e,()=>e.readPixels(0,0,n,s,a.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)})(this.gl,t,r,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,r,a,n,s){return function(e,t,r,a,n,s,o,i){let l=new Float32Array(function(e,t){let[r,a]=w(e,t);return r*a*4}(s,o));return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,l),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),l}(this.gl,e,0,0,0,n,s,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){var r=this.gl;let a=new Float32Array(t);return r.bindBuffer(r.PIXEL_PACK_BUFFER,e),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,a),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),a}createBufferFromTexture(e,t,r){this.bindTextureToFrameBuffer(e);let a=function(e,t,r,a){let n=e.createBuffer();N(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,n));let s=16*t*r;return N(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,s,e.STREAM_READ)),N(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,0)),N(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),n}(this.gl,t,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),a}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r;if((0,g.env)().getBool("WEBGL_FENCE_API_ENABLED")){let a=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),r=()=>{let t=e.clientWaitSync(a,0,0);return t===e.ALREADY_SIGNALED||t===e.CONDITION_SATISFIED},t=a}else(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),r=()=>this.isQueryAvailable(t,(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):r=()=>!0;return{query:t,isFencePassed:r}}downloadMatrixFromPackedTexture(e,t,r){return this.downloadMatrixDriver(e,()=>(function(e,t,r){let a=new Float32Array(t*r*4);return N(e,()=>e.readPixels(0,0,r,t,e.RGBA,e.FLOAT,a)),a})(this.gl,t,r))}createProgram(e){this.throwIfDisposed();let t=this.gl;null==this.vertexShader&&(this.vertexShader=function(e){let t=X(),r=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`,a=O(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(N(e,()=>e.shaderSource(a,r)),N(e,()=>e.compileShader(a)),!1===e.getShaderParameter(a,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(a)),Error("Failed to compile vertex shader.");return a}(t));let r=O(t,()=>t.createProgram(),"Unable to create WebGLProgram.");if(N(t,()=>t.attachShader(r,this.vertexShader)),N(t,()=>t.attachShader(r,e)),N(t,()=>t.linkProgram(r)),!(0,g.env)().get("ENGINE_COMPILE_ONLY")&&!1===t.getProgramParameter(r,t.LINK_STATUS))throw console.log(t.getProgramInfoLog(r)),Error("Failed to link vertex and fragment shaders.");let a=Object.assign(r,{vao:this.createVertexArray()});return this.debug&&C(t,a),a}buildVao(e){var t;this.setProgram(e),this.bindVertexArray(e.vao);let r=this.gl;N(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),t=this.vertexBuffer,N(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),$(r,e,"clipSpacePos",t,3,20,0)&&$(r,e,"uv",t,2,20,12)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&(N(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&C(this.gl,this.program),N(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,r=!0){var a,n,s;return(this.throwIfDisposed(),r)?(a=this.gl,O(a,()=>a.getUniformLocation(e,n),'uniform "'+(n=t)+'" not present in program.')):(s=this.gl,s.getUniformLocation(e,t))}getAttributeLocation(e,t){return this.throwIfDisposed(),N(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,r){var a;this.throwIfDisposed(),this.throwIfNoProgram(),a=this.gl,N(a,()=>{(function(e,t){let r=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,a=t+e.TEXTURE0;if(a<e.TEXTURE0||a>r){let e=`[gl.TEXTURE0, gl.TEXTURE${r}]`;throw Error(`textureUnit must be in ${e}.`)}})(a,r),N(a,()=>a.activeTexture(a.TEXTURE0+r)),N(a,()=>a.bindTexture(a.TEXTURE_2D,e))}),N(a,()=>a.uniform1i(t,r))}setOutputMatrixTexture(e,t,r){this.setOutputMatrixTextureDriver(e,r,t)}setOutputPackedMatrixTexture(e,t,r){this.throwIfDisposed();let[a,n]=w(t,r);this.setOutputMatrixTextureDriver(e,a,n)}setOutputMatrixWriteRegion(e,t,r,a){this.setOutputMatrixWriteRegionDriver(r,e,a,t)}setOutputPackedMatrixWriteRegion(e,t,r,a){throw Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&C(this.gl,this.program),M(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;this.debug&&(console.assert(this.getVertexArray()===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()),N(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),N(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=S(this.gl,2===(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await x.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){let t=this.gl,r=this.getQueryTimerExtensionWebGL2(),a=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(r.GPU_DISJOINT_EXT)),a&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),r=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),r&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=function(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){let r;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||("setTimeoutCustom"in(0,g.env)().platform&&(r=(0,g.env)().platform.setTimeoutCustom.bind((0,g.env)().platform)),x.repeatedTry(()=>(this.pollItems(),0===this.itemsToPoll.length),()=>0,null,r))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),A(this.gl,e,this.framebuffer),this.debug&&M(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(A(this.gl,this.outputTexture,this.framebuffer),this.debug&&M(this.gl)):R(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let r=t();return this.unbindTextureToFrameBuffer(),r}setOutputMatrixTextureDriver(e,t,r){this.throwIfDisposed();let a=this.gl;A(a,e,this.framebuffer),this.debug&&M(a),this.outputTexture=e,N(a,()=>a.viewport(0,0,t,r)),N(a,()=>a.scissor(0,0,t,r))}setOutputMatrixWriteRegionDriver(e,t,r,a){this.throwIfDisposed(),N(this.gl,()=>this.gl.scissor(e,t,r,a))}throwIfDisposed(){if(this.disposed)throw Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw Error("No GPU program is currently set.")}}var eA={};a(eA,"simpleAbsImpl",()=>eO),a(eA,"addImpl",()=>eG),a(eA,"bincountImpl",()=>eW),a(eA,"bincountReduceImpl",()=>eU),a(eA,"bitwiseAndImpl",()=>ej),a(eA,"castImpl",()=>e_),a(eA,"ceilImpl",()=>eH),a(eA,"concatImpl",()=>eX),a(eA,"equalImpl",()=>eJ),a(eA,"expImpl",()=>eY),a(eA,"expm1Impl",()=>eZ),a(eA,"floorImpl",()=>eQ),a(eA,"floorDivImpl",()=>e0),a(eA,"gatherNdImpl",()=>e1),a(eA,"gatherV2Impl",()=>e2),a(eA,"greaterImpl",()=>e3),a(eA,"greaterEqualImpl",()=>e4),a(eA,"lessImpl",()=>e6),a(eA,"lessEqualImpl",()=>e5),a(eA,"linSpaceImpl",()=>e8),a(eA,"logImpl",()=>e9),a(eA,"maxImpl",()=>e7),a(eA,"maximumImpl",()=>te),a(eA,"minimumImpl",()=>tt),a(eA,"multiplyImpl",()=>tr),a(eA,"negImpl",()=>tn),a(eA,"notEqualImpl",()=>ts),a(eA,"prodImpl",()=>tl),a(eA,"raggedGatherImpl",()=>tp),a(eA,"raggedRangeImpl",()=>tc),a(eA,"raggedTensorToTensorImpl",()=>tb),a(eA,"rangeImpl",()=>tv),a(eA,"rsqrtImpl",()=>tT),a(eA,"scatterImpl",()=>tk),a(eA,"sigmoidImpl",()=>tN),a(eA,"sliceImpl",()=>tE),a(eA,"sparseFillEmptyRowsImpl",()=>tI),a(eA,"sparseReshapeImpl",()=>tC),a(eA,"sparseSegmentReductionImpl",()=>t$),a(eA,"sqrtImpl",()=>tA),a(eA,"squaredDifferenceImpl",()=>tR),a(eA,"staticRegexReplaceImpl",()=>tM),a(eA,"stridedSliceImpl",()=>tO),a(eA,"stringNGramsImpl",()=>tP),a(eA,"stringSplitImpl",()=>tD),a(eA,"stringToHashBucketFastImpl",()=>t_),a(eA,"subImpl",()=>tF),a(eA,"tileImpl",()=>tL),a(eA,"topKImpl",()=>tB),a(eA,"transposeImpl",()=>ti),a(eA,"uniqueImpl",()=>tW),d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var x=d("a9Xyg");function eM(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&x.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function eO(e){let t=new Float32Array(e.length);for(let r=0;r<e.length;++r)t[r]=Math.abs(e[r]);return t}eR.Abs,d("fM0z2");var eR=d("dcVMt");d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");function eV(e){return(t,r,a,n,s)=>{let o=W.assertAndGetBroadcastShape(t,r),i=o.length,l=x.computeStrides(o),u=x.sizeFromShape(o),p=x.getTypedArrayFromDType(s,u),c=t.length,d=r.length,h=x.computeStrides(t),f=x.computeStrides(r),m=W.getBroadcastDims(t,o),g=W.getBroadcastDims(r,o);if(m.length+g.length===0)for(let t=0;t<p.length;++t)p[t]=e(a[t%a.length],n[t%n.length]);else for(let t=0;t<p.length;++t){let r=x.indexToLoc(t,i,l),s=r.slice(-c);m.forEach(e=>s[e]=0);let o=x.locToIndex(s,c,h),u=r.slice(-d);g.forEach(e=>u[e]=0);let y=x.locToIndex(u,d,f);p[t]=e(a[o],n[y])}return[p,o]}}d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var x=d("a9Xyg");d("fM0z2");var eR=d("dcVMt");function eP(e){let{inputs:t,backend:r}=e,{real:a,imag:n}=t,s=r.data.get(a.dataId).values,o=r.data.get(n.dataId).values,i=r.makeTensorInfo(a.shape,"complex64");return r.data.get(i.dataId).complexTensorInfos={real:r.makeTensorInfo(a.shape,"float32",s),imag:r.makeTensorInfo(n.shape,"float32",o)},i}eR.Complex,d("fM0z2");var eR=d("dcVMt");function eD(e){let{inputs:t,backend:r}=e,{x:a}=t;return r.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}eR.Identity,d("fM0z2");var eR=d("dcVMt");function e_(e,t,r,a){if("int32"===a)return[t,"int32",Int32Array.from(e)];if("bool"===a){let a=x.toTypedArray([0],r),[n,s]=eV((e,t)=>+(e!==t))(t,[],e,a,"bool");return[s,"bool",n]}throw Error(`Error in Cast: failed to cast ${r} to ${a}`)}function eF(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{dtype:s}=a;if("complex64"===s){if("complex64"===n.dtype)return eD({inputs:{x:n},backend:r});let e=function e(t,r,a="float32"){if("complex64"===a)return eP({inputs:{real:e(t,r,"float32"),imag:e(t,r,"float32")},backend:t});let n=x.makeZerosTypedArray(x.sizeFromShape(r),a);return t.makeTensorInfo(r,a,n)}(r,n.shape,n.dtype),t=eF({inputs:{x:n},backend:r,attrs:{dtype:"float32"}}),a=eP({inputs:{real:t,imag:e},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),a}if("complex64"===n.dtype){let e=function(e){let{inputs:t,backend:r}=e,{input:a}=t,n=r.data.get(a.dataId).complexTensorInfos.real,s=r.data.get(n.dataId).values;return r.makeTensorInfo(n.shape,n.dtype,s)}({inputs:{input:n},backend:r}),t=eF({inputs:{x:e},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(e),t}if(!x.hasEncodingLoss(n.dtype,s)){let e=eD({inputs:{x:n},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:s}}let[o,i,l]=e_(r.data.get(n.dataId).values,n.shape,n.dtype,s);return r.makeTensorInfo(o,i,l)}function ez(e,t,r,a){return null==r?({inputs:r,backend:n})=>{let{a:s,b:o}=r;eM([s,o],e);let i=n.data.get(s.dataId).values,l=n.data.get(o.dataId).values,u="string"===s.dtype?W.fromUint8ToStringArray(i):i,p="string"===s.dtype?W.fromUint8ToStringArray(l):l,c=a||s.dtype,[d,h]=t(s.shape,o.shape,u,p,c);return n.makeTensorInfo(h,c,d)}:({inputs:e,backend:n})=>{let{a:s,b:o}=e;if("complex64"===s.dtype||"complex64"===o.dtype){let e=eF({inputs:{x:s},backend:n,attrs:{dtype:"complex64"}}),t=n.data.get(e.dataId),a=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,l=n.data.get(a.dataId).values,u=n.data.get(i.dataId).values,p=eF({inputs:{x:o},backend:n,attrs:{dtype:"complex64"}}),c=n.data.get(p.dataId),d=c.complexTensorInfos.real,h=c.complexTensorInfos.imag,f=n.data.get(d.dataId).values,m=n.data.get(h.dataId).values,[g,x,y]=r(s.shape,o.shape,l,u,f,m),b=n.makeTensorInfo(y,"float32",g),v=n.makeTensorInfo(y,"float32",x),T=eP({inputs:{real:b,imag:v},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(v),T}{let e=n.data.get(s.dataId).values,r=n.data.get(o.dataId).values,i=a||s.dtype,[l,u]=t(s.shape,o.shape,e,r,i);return n.makeTensorInfo(u,i,l)}}}function eL(e){return(t,r,a,n,s,o)=>{let i=W.assertAndGetBroadcastShape(t,r),l=x.sizeFromShape(i),u=i.length,p=x.computeStrides(i),c=x.getTypedArrayFromDType("float32",l),d=x.getTypedArrayFromDType("float32",l),h=W.getBroadcastDims(t,i),f=W.getBroadcastDims(r,i),m=W.mergeRealAndImagArrays(a,n),g=W.mergeRealAndImagArrays(s,o),y=t.length,b=x.computeStrides(t),v=r.length,T=x.computeStrides(r);if(h.length+f.length===0)for(let t=0;t<c.length;t++){let r=t%m.length,a=t%g.length,n=e(m[2*r],m[2*r+1],g[2*a],g[2*a+1]);c[t]=n.real,d[t]=n.imag}else for(let t=0;t<c.length;t++){let r=x.indexToLoc(t,u,p),a=r.slice(-y);h.forEach(e=>a[e]=0);let n=x.locToIndex(a,y,b),s=r.slice(-v);f.forEach(e=>s[e]=0);let o=x.locToIndex(s,v,T),i=e(m[2*n],m[2*n+1],g[2*o],g[2*o+1]);c[t]=i.real,d[t]=i.imag}return[c,d,i]}}eR.Real,eR.Cast;let eG=eV((e,t)=>e+t),eB=eL((e,t,r,a)=>({real:e+r,imag:t+a}));ez(eR.Add,eG,eB),eR.Add,d("fM0z2");var U=d("hPfZs"),x=d("a9Xyg");function eW(e,t,r,a,n){let s=x.sizeFromShape(a),o=x.makeZerosTypedArray(n,r);for(let r=0;r<e.length;r++){let a=e[r];if(a<0)throw Error("Input x must be non-negative!");a>=n||(s>0?o[a]+=t[r]:o[a]+=1)}return o}function eU(e,t,r,a=!1){let n=e.shape[0],s=e.shape[1],o=(0,U.buffer)([n,r],t.dtype);for(let i=0;i<n;i++)for(let n=0;n<s;n++){let s=e.get(i,n);if(s<0)throw Error("Input x must be non-negative!");s>=r||(a?o.set(1,i,s):t.size>0?o.set(o.get(i,s)+t.get(i,n),i,s):o.set(o.get(i,s)+1,i,s))}return o}d("fM0z2");var eR=d("dcVMt");let ej=eV((e,t)=>e&t);ez(eR.BitwiseAnd,ej),eR.BitwiseAnd,d("fM0z2");var eR=d("dcVMt");d("fM0z2");var x=d("a9Xyg");function eK(e){return(t,r,a)=>{let n=x.getArrayFromDType(r,t.length);for(let r=0;r<t.length;++r)n[r]=e(t[r],a);return n}}d("fM0z2");var W=d("4ajhx");function eq(e,t,r){return({inputs:a,attrs:n,backend:s})=>{let o,{x:i}=a;eM(i,e);let l=s.data.get(i.dataId).values;if("string"===i.dtype){if(!Array.isArray(l))throw Error("String tensor's value was not an instance of Array");o=W.fromUint8ToStringArray(l)}else o=l;let u=r||i.dtype,p=t(o,u,n);return s.makeTensorInfo(i.shape,u,p)}}let eH=eK(e=>Math.ceil(e));eq(eR.Ceil,eH),eR.Ceil,d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");function eX(e,t,r,a){let n=x.getArrayFromDType(r,x.sizeFromShape(t));if(a&&"string"!==r){let t=0;e.forEach(e=>{let r=x.sizeFromShape(e.shape);n.set(e.vals,t),t+=r})}else{let a=0;e.forEach(e=>{let s="string"===r?W.fromUint8ToStringArray(e.vals):e.vals,o=0;for(let r=0;r<e.shape[0];++r){let i=r*t[1]+a;for(let t=0;t<e.shape[1];++t)n[i+t]=s[o++]}a+=e.shape[1]})}return n}d("fM0z2");var eR=d("dcVMt");let eJ=eV((e,t)=>+(e===t));ez(eR.Equal,eJ,null,"bool"),eR.Equal,d("fM0z2");var eR=d("dcVMt");let eY=eK(e=>Math.exp(e));eq(eR.Exp,eY,"float32"),eR.Exp,d("fM0z2");var eR=d("dcVMt");let eZ=eK(e=>Math.expm1(e));eq(eR.Expm1,eZ),eR.Expm1,d("fM0z2");var eR=d("dcVMt");let eQ=eK(e=>Math.floor(e));eq(eR.Floor,eQ),eR.Floor,d("fM0z2");var eR=d("dcVMt");let e0=eV((e,t)=>Math.floor(e/t));ez(eR.FloorDiv,e0,null,"int32"),eR.FloorDiv,d("fM0z2");var U=d("hPfZs");function e1(e,t,r,a,n,s,o,i,l){let u=(0,U.buffer)([a,s],r);for(let r=0;r<a;r++){let a=[],p=0;for(let t=0;t<n;t++){let s=e[r*n+t];p+=s*o[t],a.push(s)}if(p<0||p>=l/s)throw Error(`Invalid indices: ${a} does not index into ${i}`);for(let e=0;e<s;e++)u.values[r*s+e]=t.get(...t.indexToLoc(p*s+e))}return u}d("fM0z2");var U=d("hPfZs");function e2(e,t,r){let a=(0,U.buffer)(r,e.dtype);for(let r=0;r<a.size;++r){let n=a.indexToLoc(r).slice(),s=n[0],o=n[2],i=t.locToIndex([s,o]);n[2]=t.values[i];let l=e.locToIndex(n);0<=l&&l<e.values.length&&(a.values[r]=e.values[l])}return a}d("fM0z2");var eR=d("dcVMt");let e3=eV((e,t)=>+(e>t));ez(eR.Greater,e3,null,"bool"),eR.Greater,d("fM0z2");var eR=d("dcVMt");let e4=eV((e,t)=>+(e>=t));ez(eR.GreaterEqual,e4,null,"bool"),eR.GreaterEqual,d("fM0z2");var eR=d("dcVMt");let e6=eV((e,t)=>+(e<t));ez(eR.Less,e6,null,"bool"),eR.Less,d("fM0z2");var eR=d("dcVMt");let e5=eV((e,t)=>+(e<=t));ez(eR.LessEqual,e5,null,"bool"),eR.LessEqual,d("fM0z2");var x=d("a9Xyg");function e8(e,t,r){let a=(t-e)/(r-1),n=x.makeZerosTypedArray(r,"float32");n[0]=e;for(let e=1;e<n.length;e++)n[e]=n[e-1]+a;return n}d("fM0z2");var eR=d("dcVMt");let e9=eK(e=>Math.log(e));eq(eR.Log,e9),eR.Log,d("fM0z2");var x=d("a9Xyg");function e7(e,t,r,a){let n=x.getTypedArrayFromDType(a,x.sizeFromShape(r));for(let r=0;r<n.length;++r){let a=r*t,s=e[a];for(let r=0;r<t;++r){let t=e[a+r];(Number.isNaN(t)||t>s)&&(s=t)}n[r]=s}return n}d("fM0z2");var eR=d("dcVMt");let te=eV((e,t)=>Math.max(e,t));ez(eR.Maximum,te),eR.Maximum,d("fM0z2");var eR=d("dcVMt");let tt=eV((e,t)=>Math.min(e,t));ez(eR.Minimum,tt),eR.Minimum,d("fM0z2");var eR=d("dcVMt");let tr=eV((e,t)=>e*t),ta=eL((e,t,r,a)=>({real:e*r-t*a,imag:e*a+t*r}));ez(eR.Multiply,tr,ta),eR.Multiply,d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");function tn(e,t,r){return tr([],t,x.createScalarValue(-1,r),e,r)}eR.Neg,d("fM0z2");var eR=d("dcVMt");let ts=eV((e,t)=>+(e!==t));ez(eR.NotEqual,ts,null,"bool"),eR.NotEqual,d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),to=d("8IARK"),x=d("a9Xyg");d("fM0z2");var eR=d("dcVMt");d("fM0z2");var x=d("a9Xyg");function ti(e,t,r,a,n){let s=t.length,o=x.sizeFromShape(t),i=x.computeStrides(t),l=x.computeStrides(n),u=x.getTypedArrayFromDType(r,x.sizeFromShape(n));for(let t=0;t<o;++t){let r=x.indexToLoc(t,s,i),n=Array(r.length);for(let e=0;e<n.length;e++)n[e]=r[a[e]];u[x.locToIndex(n,s,l)]=e[t]}return u}function tl(e,t,r,a){let[n,s]=W.computeOutAndReduceShapes(e,a),o=(0,to.upcastType)(t,"int32"),i=x.makeZerosTypedArray(x.sizeFromShape(n),o),l=x.sizeFromShape(s);for(let e=0;e<i.length;++e){let t=e*l,a=1;for(let e=0;e<l;++e)a*=r[t+e];i[e]=a}return{outVals:i,outShape:n,outDtype:o}}eR.Transpose,eR.Prod,d("fM0z2");var x=d("a9Xyg");function tu(e,t){let r=e.slice(0,t);for(;r.length<t;)r.push(1);for(let a=t;a<e.length;a++)r[t-1]*=e[a];return r}function tp(e,t,r,a,n,s,o,i){if(0===e.length)throw Error("paramsNestedSplits must be non empty");if(0===t[0].length)throw Error("Split tensors must not be scalars");let l=t[0][0]-1;if(s.forEach((e,t)=>{if(e<0||e>=l){let r=x.indexToLoc(t,o.length,x.computeStrides(o)).join(",");throw Error(`indices[${r}] = ${e} is not in [0, ${l})`)}}),0===a.length)throw Error("params.rank must be nonzero");let{outSplits:u,valueSlices:p,numValues:c}=function(e,t,r,a){let n=[],s=0,o=Array(t.length-1+r.length).fill(null).map(()=>[0]);for(let e=0;e<r.length;++e){let t=r[e],n=e===r.length-1?a:r[e+1].length;if(0===t.length)throw Error("Ragged splits may not be empty");if(t[0]<0)throw Error("Ragged splits must be non-negative");if(t[t.length-1]>n)throw Error("Ragged splits must not point past values");for(let e=1;e<t.length;++e)if(t[e-1]>t[e])throw Error("Ragged splits must be sorted in ascending order")}let i=1;for(let e=0;e<t.length-1;++e){i*=t[e];let r=t[e+1];for(let t=1;t<i+1;++t)o[e].push(t*r)}for(let a=0;a<e.length;++a){let i=e[a],l=e[a]+1;for(let e=0;e<r.length;++e){let a=r[e],n=e+t.length-1;if(n>=0){let e=o[n],t=e[e.length-1]-a[i];for(let e=i;e<l;++e)o[n].push(a[e+1]+t)}i=a[i],l=a[l]}l!==i&&(n.push([i,l]),s+=l-i)}return{outSplits:o,valueSlices:n,numValues:s}}(s,o,e,a[0]),d=function(e){let t=[];for(let r=0;r<e.length;++r){let a=e[r].length,n=x.getArrayFromDType("int32",a);t.push(n),e[r].forEach((e,t)=>n[t]=e)}return t}(u),h=function(e,t,r,a,n){let s=t.slice();s[0]=n;let o=x.getArrayFromDType(r,x.sizeFromShape(s)),i=e.length,l=0===i?0:i/t[0];return!function(e,t,r,a,n,s){let o=tu(t,2)[1],i=tu(s,2)[1],l=0;for(let t of r)for(let r=t[0];r<t[1];++r){for(let t=0;t<a;++t)n[l*i+t]=e[r*o+t];++l}}(e,t,a,l,o,s),[o,s]}(r,a,n,p,c);return[d,h[0],h[1]]}d("fM0z2");var x=d("a9Xyg");function tc(e,t,r,a,n,s,o){if(t.length>1)throw Error("starts must be a scalar or vector");if(n.length>1)throw Error("limits must be a scalar or vector");if(o.length>1)throw Error("deltas must be a scalar or vector");let i=0===t.length,l=0===n.length,u=0===o.length,p=[];i||p.push(t[0]),l||p.push(n[0]),u||p.push(o[0]);for(let e=1;e<p.length;++e)if(p[e]!==p[e-1])throw Error("starts, limits, and deltas must have the same shape");let c=0===p.length?1:p[0],d=x.getArrayFromDType("int32",c+1);d[0]=0;for(let t=0;t<c;++t){let r,n=i?e[0]:e[t],o=l?a[0]:a[t],p=u?s[0]:s[t];if(0===p)throw Error("Requires delta != 0");if(p>0&&o<n||p<0&&o>n)r=0;else if((r=Math.ceil(Math.abs((o-n)/p)))>0x7fffffff)throw Error("Requires ((limit - start) / delta) <= 2147483647");d[t+1]=d[t]+r}let h=d[c],f=x.getArrayFromDType(r,h),m=0;for(let t=0;t<c;++t){let r=d[t+1]-d[t],a=i?e[0]:e[t],n=u?s[0]:s[t];for(let e=0;e<r;++e)f[m++]=a,a+=n}return[d,f]}d("fM0z2");var W=d("4ajhx"),td=d("jR1yo"),th=d("jUNqu"),m=d("1c9K8"),x=d("a9Xyg"),tm=W.RowPartitionType;class tg{constructor(e,t,r,a,n,s,o,i,l,u){this.shape=e,this.shapeShape=t,this.values=r,this.valuesShape=a,this.valuesDType=n,this.defaultValue=s,this.defaultValueShape=o,this.rowPartitionValues=i,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=W.getRowPartitionTypesHelper(u),this.raggedRank=W.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===tm.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===tm.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case tm.VALUE_ROWIDS:return tg.getMaxWidthValueRowID(t);case tm.ROW_SPLITS:return tg.getMaxWidthRowSplit(t);default:throw Error(`Cannot handle partition type ${tm[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(0===t||1===t)return 0;let r=0;for(let a=0;a<t-1;++a){let t=e[a+1]-e[a];t>r&&(r=t)}return r}static getMaxWidthValueRowID(e){let t=e.length;if(0===t)return 0;let r=0,a=e[0],n=0;for(let s=1;s<t;++s){let t=e[s];t!==a&&(a=t,n=Math.max(s-r,n),r=s)}return Math.max(t-r,n)}tensorShapeFromTensor(e,t,r=!0){if(0===t.length){if(-1===e[0])return[];throw Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return ty(e,r)}calculateOutputSize(e){let t=this.valuesShape,r=this.defaultValueShape;W.validateDefaultValueShape(r,t);let a=this.tensorShapeFromTensor(this.shape,this.shapeShape),n=W.combineRaggedTensorToTensorShapes(this.raggedRank,a,t);n[0]<0&&(n[0]=e);for(let e=1;e<=this.raggedRank;++e)n[e]<0&&(n[e]=this.getMaxWidth(e));return n}calculateFirstParentOutputIndex(e,t,r){let a=Math.min(e,r),n=[],s=0;for(let e=0;e<a;++e,s+=t)n.push(s);for(let t=a;t<e;++t)n.push(-1);return x.assert(n.length===e,()=>"Final length of result must be equal to firstDimension."),n}calculateOutputIndexRowSplit(e,t,r,a){let n=e.length,s=[];for(let o=0;o<n-1;++o){let n=e[o+1]-e[o],i=Math.min(a,n),l=t[o];-1===l&&(i=0);for(let e=0;e<i;++e)s.push(l),l+=r;for(let e=0;e<n-i;++e)s.push(-1)}if(n>0&&s.length!==e[n-1])throw Error("Invalid row split size.");return s}calculateOutputIndexValueRowID(e,t,r,a){let n=e.length,s=[];if(0===n)return[];let o=0,i=e[0];if(i>=t.length)throw Error(`Got currentValueRowId=${i}, which is not less than ${t.length}`);let l=t[i];s.push(l);for(let u=1;u<n;++u){let n=e[u];if(n===i)l>=0&&(++o<a?l+=r:l=-1);else{if(o=0,i=n,n>=t.length)throw Error(`Got nextValueRowId=${n} which is not less than ${t.length}`);l=t[n]}s.push(l)}if(s.length!==e.length)throw Error("Invalid row ids.");return s}calculateOutputIndex(e,t,r,a){let n=this.getRowPartitionTensor(e),s=this.getRowPartitionTypeByDimension(e);switch(s){case tm.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(n,t,r,a);case tm.ROW_SPLITS:if(n.length-1>t.length)throw Error(`Row partition size is greater than output size: ${n.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(n,t,r,a);default:throw Error(`Unsupported partition type: ${tm[s]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case tm.FIRST_DIM_SIZE:return e[0];case tm.VALUE_ROWIDS:throw Error("Cannot handle VALUE_ROWIDS in first dimension.");case tm.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${tm[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),r=Array(this.raggedRank+1);r[r.length-1]=1;for(let e=r.length-2;e>=0;--e)r[e]=r[e+1]*t[e+1];let a=ty(t,!1),n=x.getArrayFromDType(this.valuesDType,x.sizeFromShape(a));if(r[0]*t[0]>0){let s=this.calculateFirstParentOutputIndex(e,r[0],t[0]);for(let e=1;e<=this.raggedRank;++e)s=this.calculateOutputIndex(e-1,s,r[e],t[e]);this.setOutput(this.raggedRank,s,n,a)}return[a,n]}setOutput(e,t,r,a){if(0===r.length)return;let n=this.values,s=a.slice();s=s.slice(e+1);let o=x.sizeFromShape(s),i=t.length,l=this.defaultValue;if(l.length!==o&&1!==l.length){let e=this.defaultValueShape;(0,m.tidy)(()=>{let t=(0,th.reshape)(l,e);l=(0,td.broadcastTo)(t,s).dataSync()})}let u=0,p=0,c=0;for(let e=0;e<=i;++e){let a=e<i?t[e]:-1;if(a===c){++c;continue}if(p<c){let e=n.subarray(u*o);tx(r.subarray(p*o),e,(c-p)*o)}if(e>=i&&(a=Math.floor(r.length/o)),a>c)if(1===this.defaultValue.length)r.subarray(c*o,a*o).fill(this.defaultValue[0]),c=a;else for(;a>c;)tx(r.slice(c*o),l,o),++c;a<0?(u=e+1,p=c):(u=e,c=(p=c)+1)}}}function tx(e,t,r){for(let a=0;a<r;a++)e[a]=t[a]}function ty(e,t){let r=[];for(let a of e){if(a<0){if(!t)throw Error(`Dimension ${a} must be >= 0`);if(a<-1)throw Error(`Dimension ${a} must be >= -1`);a=-1}r.push(a)}return r}function tb(e,t,r,a,n,s,o,i,l,u){return new tg(e,t,r,a,n,s,o,i,l,u).compute()}d("fM0z2");var x=d("a9Xyg");function tv(e,t,r,a){let n=e===t,s=e<t&&r<0,o=t<e&&r>1;if(n||s||o)return x.makeZerosTypedArray(0,a);let i=Math.abs(Math.ceil((t-e)/r)),l=x.makeZerosTypedArray(i,a);t<e&&1===r&&(r=-1),l[0]=e;for(let e=1;e<l.length;e++)l[e]=l[e-1]+r;return l}d("fM0z2");var eR=d("dcVMt");let tT=eK(e=>1/Math.sqrt(e));eq(eR.Rsqrt,tT),eR.Rsqrt,d("fM0z2");var U=d("hPfZs"),tw=d("ciqGg");function tk(e,t,r,a,n,s,o,i,l,u){let p=e.values,c=t.values;if(0===a)return(0,U.buffer)(r,t.dtype);let d=l instanceof tw.TensorBuffer?l:(0,U.buffer)([a/n,n],t.dtype);"string"==typeof l||"number"==typeof l?d.values.fill(l):"boolean"==typeof l&&d.values.fill(+l);for(let e=0;e<s;e++){let s=[],l=0;for(let t=0;t<o;t++){let r=p[e*o+t];s.push(r),l+=r*i[t]}if(l<0||l>=a/n)throw Error(`Invalid indices: ${s} does not index into ${r}`);for(let r=0;r<n;r++)u?d.values[l*n+r]+=c[e*n+r]:d.values[l*n+r]=0===t.rank?c[0]:c[e*n+r]}return d}d("fM0z2");var eR=d("dcVMt");let tN=eK(e=>1/(1+Math.exp(-e)));eq(eR.Sigmoid,eK(e=>1/(1+Math.exp(-e))),void 0),eR.Sigmoid,d("fM0z2");var W=d("4ajhx"),U=d("hPfZs"),eR=d("dcVMt"),tS=d("2vt64"),x=d("a9Xyg");function tE(e,t,r,a,n){let s=tS.isSliceContinous(a,t,r),o=x.sizeFromShape(r),i=x.computeStrides(a);if(s){let r=tS.computeFlatOffset(t,i);return"string"===n?e.slice(r,r+o):e.subarray(r,r+o)}let l="string"===n?W.fromUint8ToStringArray(e):e,u=(0,U.buffer)(a,n,l),p=(0,U.buffer)(r,n);for(let e=0;e<p.size;++e){let r=p.indexToLoc(e),a=r.map((e,r)=>e+t[r]);p.set(u.get(...a),...r)}return"string"===n?W.fromStringArrayToUint8(p.values):p.values}eR.Slice,d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");function tI(e,t,r,a,n,s,o){let i=t[0],l=s[0],u=Array(l),p=Array(i),c=t[1];if(0===l){if(0!==i)throw Error(W.getSparseFillEmptyRowsIndicesDenseShapeMismatch(i));return[x.getArrayFromDType(r,0),[0,c],x.getArrayFromDType(n,0),u,p]}let d=!0,h=0,f=Array(l).fill(0);for(let t=0;t<i;++t){let r=e[t*c];if(r<0)throw Error(W.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,r));if(r>=l)throw Error(W.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,r,l));++f[r],d=d&&r>=h,h=r}let m=!0;for(let e=0;e<l;++e){let t=0===f[e];u[e]=t,m=m&&!t,f[e]=Math.max(f[e],1),e>0&&(f[e]+=f[e-1])}if(m&&d){for(let e=0;e<i;++e)p[e]=e;return[e,[i,c],a,u,p]}{let t=f[l-1],s=x.getArrayFromDType(r,t*c),d=x.getArrayFromDType(n,t),h=Array(l).fill(0);for(let t=0;t<i;++t){let r=e[t*c],n=h[r],o=(0===r?0:f[r-1])+n;h[r]++;for(let r=0;r<c;++r)s[o*c+r]=e[t*c+r];d[o]=a[t],p[t]=o}for(let e=0;e<l;++e)if(0===h[e]){let t=0===e?0:f[e-1];s[t*c+0]=e;for(let e=1;e<c;++e)s[t*c+e]=0;d[t]=o}return[s,[t,c],d,u,p]}}d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");function tC(e,t,r,a,n){let s=x.sizeFromShape(a),o=t[0],i=n.length,l=[],u=1,p=-1;for(let e=0;e<i;++e){let t=n[e];if(-1===t){if(-1!==p)throw Error(W.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(p,e));p=e,l.push(1)}else{if(t<0)throw Error(W.getSparseReshapeNegativeOutputDimErrorMessage(e,t));u*=t,l.push(t)}}if(-1!==p){if(u<=0)throw Error(W.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let e=Math.trunc(s/u);if(u*e!==s)throw Error(W.getSparseReshapeInputOutputMultipleErrorMessage(a,l));l[p]=e}if(x.sizeFromShape(l)!==s)throw Error(W.getSparseReshapeInputOutputMismatchErrorMessage(a,l));let c=a.length,d=[];if(c>0){d[c-1]=1;for(let e=c-2;e>=0;--e)d[e]=d[e+1]*a[e+1]}let h=[];if(i>0){h[i-1]=1;for(let e=i-2;e>=0;--e)h[e]=h[e+1]*l[e+1]}let f=x.getArrayFromDType(r,o*i);for(let t=0;t<o;++t){let r=0;for(let a=0;a<c;++a)r+=e[t*c+a]*d[a];for(let e=0;e<i;++e)f[t*i+e]=Math.trunc(r/h[e]),r%=h[e]}return[f,[o,i],l]}d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");function t$(e,t,r,a,n,s=!1,o=0){let i=a.length,l=[t[0],e.length/t[0]],u=l[1],p=i>0?n[i-1]+1:0;if(p<0)throw Error(W.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let c=t.slice();c[0]=p;let d=c.reduce((e,t)=>e*t,1),h=x.getArrayFromDType(r,d);if(0===i)return p>0&&h.fill(o),[h,c];if(p<=0)throw Error(W.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let f=0,m=1,g=0,y=n[0];for(;;){let t=0;if(m<i){if(y===(t=n[m])){++m;continue}if(y>=t)throw Error(W.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=p)throw Error(W.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,p));y>g&&h.fill(o,g*u,y*u);for(let t=f;t<m;++t){let r=a[t];if(r<0||r>=l[0])throw Error(W.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,a[t],l[0]));for(let t=0;t<u;t++)h[y*u+t]+=e[r*u+t]}if(s)for(let e=0;e<u;e++)h[y*u+e]/=m-f;if(f=m,++m,g=y+1,y=t,m>i)break}return g<p&&h.fill(o,g*u,p*u),[h,c]}d("fM0z2");var eR=d("dcVMt");let tA=eK(e=>Math.sqrt(e));eq(eR.Sqrt,eK(e=>Math.sqrt(e)),void 0),eR.Sqrt,d("fM0z2");var eR=d("dcVMt");let tR=eV((e,t)=>{let r=e-t;return r*r});ez(eR.SquaredDifference,tR),eR.SquaredDifference,d("fM0z2");var eR=d("dcVMt");let tM=eK((e,t)=>{let{pattern:r,replaceGlobal:a,rewrite:n}=t;return e.replace(new RegExp(r,a?"g":""),n)});eq(eR.StaticRegexReplace,tM),eR.StaticRegexReplace,d("fM0z2");var U=d("hPfZs");function tO(e,t,r,a){let n=(0,U.buffer)(e,t.dtype);for(let e=0;e<n.size;e++){let s=n.indexToLoc(e),o=Array(s.length);for(let e=0;e<o.length;e++)o[e]=s[e]*r[e]+a[e];n.set(t.get(...o),...s)}return n}d("fM0z2");var x=d("a9Xyg");class tV{constructor(e,t,r,a,n,s){this.separator=x.encodeString(e),this.nGramWidths=t,this.leftPad=x.encodeString(r),this.rightPad=x.encodeString(a),this.padWidth=n,this.preserveShort=s}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){return Math.max(0,e+2*this.getPadWidth(t)-t+1)}createNGrams(e,t,r,a,n,s){for(let o=0;o<n;++o){let i,l=this.getPadWidth(s),u=Math.max(0,l-o),p=Math.max(0,l-(n-(o+1))),c=s-(u+p),d=t+(u>0?0:o-l);i=0+u*this.leftPad.length;for(let t=0;t<c;++t)i+=e[d+t].length;i+=p*this.rightPad.length,i+=(u+p+c-1)*this.separator.length,r[a+o]=new Uint8Array(i);let h=r[a+o],f=0,m=e=>e.forEach(e=>h[f++]=e);for(let e=0;e<u;++e)m(this.leftPad),m(this.separator);for(let t=0;t<c-1;++t)m(e[d+t]),m(this.separator);if(c>0){m(e[d+c-1]);for(let e=0;e<p;++e)m(this.separator),m(this.rightPad)}else{for(let e=0;e<p-1;++e)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(e,t){let r=e.length,a=t.length;if(a>0){let e=t[0];if(0!==e)throw Error(`First split value must be 0, got ${e}`);for(let n=1;n<a;++n){let a=t[n]>=e;if(!(a=a&&t[n]<=r))throw Error(`Invalid split value ${t[n]}, must be in [${e}, ${r}]`);e=t[n]}if(e!==r)throw Error(`Last split value must be data size. Expected ${r}, got ${e}`)}let n=a-1,s=x.getArrayFromDType("int32",a);if(0===r||0===a){let e=Array(r);for(let e=0;e<=n;++e)s[e]=0;return[e,s]}s[0]=0;for(let e=1;e<=n;++e){let r=t[e]-t[e-1],a=0;this.nGramWidths.forEach(e=>{a+=this.getNumNGrams(r,e)}),this.preserveShort&&r>0&&0===a&&(a=1),s[e]=s[e-1]+a}let o=Array(s[n]);for(let r=0;r<n;++r){let a=t[r],n=s[r];if(this.nGramWidths.forEach(s=>{let i=t[r+1]-t[r],l=this.getNumNGrams(i,s);this.createNGrams(e,a,o,n,l,s),n+=l}),this.preserveShort&&n===s[r]){let s=t[r+1]-t[r];if(0===s)continue;let i=s+2*this.padWidth;this.createNGrams(e,a,o,n,1,i)}}return[o,s]}}function tP(e,t,r,a,n,s,o,i){return new tV(r,a,n,s,o,i).compute(e,t)}d("fM0z2");var x=d("a9Xyg");function tD(e,t,r){let a=e.length,n=[],s=0,o=0,i=Array(a);for(let l=0;l<a;++l){let a=n.length;!function(e,t,r,a){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)a.push(e.subarray(t,t+1));return}if(1===t.length){let n=t[0],s=e.indexOf(n);for(;-1!==s;){let t=e.subarray(0,s);r&&0===t.length||a.push(t),s=(e=e.subarray(s+1)).indexOf(n)}r&&0===e.length||a.push(e);return}let n=0;for(let s=0;s<e.length+1;s++)if(s===e.length||-1!==t.indexOf(e[s])){let t=e.subarray(n,s);r&&0===t.length||a.push(t),n=s+1}}(e[l],t,r,n);let u=n.length-a;i[l]=u,s+=u,o=Math.max(o,u)}let l=x.getArrayFromDType("int32",2*s),u=Array(s),p=[a,o],c=0;for(let e=0;e<a;++e)for(let t=0;t<i[e];++t)l[2*c]=e,l[2*c+1]=t,u[c]=n[c],++c;return[l,u,p]}d("fM0z2");var x=d("a9Xyg");function t_(e,t){let r=x.getArrayFromDType("int32",e.length);for(let a=0;a<e.length;++a)r[a]=x.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();return r}d("fM0z2");var eR=d("dcVMt");let tF=eV((e,t)=>e-t),tz=eL((e,t,r,a)=>({real:e-r,imag:t-a}));ez(eR.Sub,tF,tz),eR.Sub,d("fM0z2");var U=d("hPfZs");function tL(e,t){let r=Array(e.rank);for(let a=0;a<r.length;a++)r[a]=e.shape[a]*t[a];let a=(0,U.buffer)(r,e.dtype);for(let t=0;t<a.values.length;++t){let r=a.indexToLoc(t),n=Array(e.rank);for(let t=0;t<n.length;t++)n[t]=r[t]%e.shape[t];let s=e.locToIndex(n);a.values[t]=e.values[s]}return a}d("fM0z2");var U=d("hPfZs"),x=d("a9Xyg");let tG=(e,t)=>{let r=t.value-e.value;return 0===r?e.index-t.index:r};function tB(e,t,r,a,n){let s=t[t.length-1],[o,i]=[e.length/s,s],l=x.getTypedArrayFromDType(r,o*a),u=x.getTypedArrayFromDType("int32",o*a);for(let t=0;t<o;t++){let r=t*i,s=e.subarray(r,r+i),o=Array(s.length);s.forEach((e,t)=>o[t]={value:e,index:t}),a<o.length&&(!function e(t,r,a=0,n=t.length-1){for(;n>a;){if(n-a>600){let s=n-a+1,o=r-a+1,i=Math.log(s),l=.5*Math.exp(2*i/3),u=.5*Math.sqrt(i*l*(s-l)/s)*Math.sign(o-s/2),p=Math.max(a,Math.floor(r-o*l/s+u)),c=Math.min(n,Math.floor(r+(s-o)*l/s+u));e(t,r,p,c)}let s=t[r],o=a,i=n;for(x.swap(t,a,r),tG(t[n],s)>0&&x.swap(t,a,n);o<i;){for(x.swap(t,o,i),o++,i--;0>tG(t[o],s);)o+=1;for(;tG(t[i],s)>0;)i-=1}0===tG(t[a],s)?x.swap(t,a,i):(i+=1,x.swap(t,i,n)),i<=r&&(a=i+1),r<=i&&(n=i-1)}}(o,a),o=o.slice(0,a)),n&&o.sort(tG);let p=t*a,c=l.subarray(p,p+a),d=u.subarray(p,p+a);for(let e=0;e<a;e++)c[e]=o[e].value,d[e]=o[e].index}let p=t.slice();return p[p.length-1]=a,[(0,U.buffer)(p,r,l),(0,U.buffer)(p,"int32",u)]}d("fM0z2");var tw=d("ciqGg"),x=d("a9Xyg");function tW(e,t,r,a){let n=x.parseAxisParam(t,r)[0],s=[1,r[0],1];for(let e=0;e<n;e++)s[0]*=r[e];s[1]=r[n];for(let e=n+1;e<r.length;e++)s[2]*=r[e];let o=new Map,i=new Int32Array(r[n]),l=new(0,tw.TensorBuffer)(s,a,e),u=[],p=1===s[0]&&1===s[2];for(let t=0;t<r[n];t++){let r;if(p)r=e[t].toString();else{let e=[];for(let r=0;r<s[0];r++)for(let a=0;a<s[2];a++)e.push(l.get(r,t,a));r=e.join(",")}let a=o.get(r);if(null!=a)i[t]=a;else{let e=o.size;o.set(r,e),i[t]=e,u.push(t)}}let c=s.slice();c[1]=o.size;let d=new(0,tw.TensorBuffer)(c,a);u.forEach((e,t)=>{for(let r=0;r<s[0];r++)for(let a=0;a<s[2];a++)d.set(l.get(r,e,a),r,t,a)});let h=r.slice();return h[n]=c[1],{outputValues:d.values,outputShape:h,indices:i}}let{addImpl:tU,bincountImpl:tj,bincountReduceImpl:tK,bitwiseAndImpl:tq,castImpl:tH,ceilImpl:tX,concatImpl:tJ,equalImpl:tY,expImpl:tZ,expm1Impl:tQ,floorImpl:t0,gatherNdImpl:t1,gatherV2Impl:t2,greaterImpl:t3,greaterEqualImpl:t4,lessImpl:t6,lessEqualImpl:t5,linSpaceImpl:t8,logImpl:t9,maxImpl:t7,maximumImpl:re,minimumImpl:rt,multiplyImpl:rr,negImpl:ra,notEqualImpl:rn,prodImpl:rs,raggedGatherImpl:ro,raggedRangeImpl:ri,raggedTensorToTensorImpl:rl,rangeImpl:ru,rsqrtImpl:rp,scatterImpl:rc,sigmoidImpl:rd,simpleAbsImpl:rh,sliceImpl:rf,sparseFillEmptyRowsImpl:rm,sparseReshapeImpl:rg,sparseSegmentReductionImpl:rx,sqrtImpl:ry,staticRegexReplaceImpl:rb,stridedSliceImpl:rv,stringNGramsImpl:rT,stringSplitImpl:rw,stringToHashBucketFastImpl:rk,subImpl:rN,tileImpl:rS,topKImpl:rE,transposeImpl:rI,uniqueImpl:rC}=eA;function r$(e,t){return["x","y","z","w","u","v"].slice(0,t).map(t=>`${e}.${t}`)}function rA(e,t){return 1===t?[e]:r$(e,t)}class rR{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=em(this.outputShape.length),0===this.rank)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=rA("rc",this.rank),t=eu(this.rank),r=this.getOutOfBoundsCondition(e),a=this.getSetup(e),n=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${r}) {
            setOutput(vec4(0));
          } else {
            ${a}

            setOutput(vec4(${n}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let r=0;r<=1;r++)for(let a=0;a<=1;a++){let n=`${0===r?"r":"rp1"}, ${0===a?"c":"cp1"}`;for(let t=2;t<this.rank;t++)n=`${e[e.length-1-t]},`+n;t.push(n)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let r=this.rank-2;r<this.rank;r++)t+=`${e[r]} >= ${this.enableShapeUniforms?`outShape[${r}]`:this.outputShape[r]}`,r<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";let t=e.slice(-2),r=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],a=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${r};
      bool rEdge = rp1 >= ${a};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);if(1===this.rank){let e=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${e} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}class rM{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length);let r="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),r+=`
        ${t}
        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?"}":""}
      `}this.userCode=`
      ${function(e,t){let r=t?function(e,t,r="index"){let a=function(e,t){let r=e.length,a=e.map(e=>`${t}[${e}]`),n=Array(r-1);n[r-2]=a[r-1];for(let e=r-3;e>=0;--e)n[e]=`(${n[e+1]} * ${a[e+1]})`;return n}(e.map((e,t)=>t),t);return a.map((t,n)=>{let s=`int ${e[n]} = ${r} / ${a[n]}`,o=n===a.length-1?`int ${e[n+1]} = ${r} - ${e[n]} * ${a[n]}`:`index -= ${e[n]} * ${a[n]}`;return`${s}; ${o};`}).join("")}(["r","c","d"],"inputShape"):J(["r","c","d"],e);return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${r}
      return ivec3(r, c, d);
    }
  `}(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Q():Z(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${r}

        setOutput(result);
      }
    `}}d("fM0z2");var g=d("alePs");class rO{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,r){let a,n=rP(t,r),s=rD(e,n,r);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let o=rV(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,r);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=o,this.log();let e=this.freeTextures[s].pop();return this.usedTextures[s].push(e),e}return n===i.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===i.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===i.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===i.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===i.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=o,this.log(),a}releaseTexture(e,t,r,a){if(null==this.freeTextures)return;let n=rP(r,a),s=rD(t,n,a);s in this.freeTextures||(this.freeTextures[s]=[]);let o=rV(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,a),i=(0,g.env)().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==i&&this._numBytesAllocated>i?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[s].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let l=this.usedTextures[s],u=l&&l.indexOf(e);if(null==u||u<0)throw Error("Cannot release a texture that was never provided by this texture manager");l[u]=l[l.length-1],l.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function rV(e,t,r,a,n){let s,o=function(e,t){switch(e){case i.PACKED_2X2_FLOAT32:return eI(t);case i.PACKED_2X2_FLOAT16:return eC(t);case i.UNPACKED_FLOAT32:return eN(t);case i.UNPACKED_FLOAT16:return eS(t);case i.PACKED_4X1_UNSIGNED_BYTE:return eE(t);default:throw Error(`Unknown physical texture type ${e}`)}}(t,a);if(n){let[t,r]=w(e[0],e[1]);s=t*r}else{var l;let[t,r]=(l=e[0],[e[1],l]);s=t*r}return s*function(e,t){if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===e.RGBA)return 16;if(t===e.RGBA16F)return 8;else if(t===e.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}(r,o)}function rP(e,t){if(e===o.UPLOAD)return i.PACKED_2X2_FLOAT32;if(e===o.RENDER||null==e)return(0,g.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?i.PACKED_2X2_FLOAT32:i.UNPACKED_FLOAT32:t?i.PACKED_2X2_FLOAT16:i.UNPACKED_FLOAT16;if(e===o.DOWNLOAD||e===o.PIXELS)return i.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function rD(e,t,r){return`${e[0]}_${e[1]}_${t}_${r}`}class r_{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}let rF="if (isnan(x)) return x;",rz="return abs(x);",rL=rF+`
  return (x < 0.0) ? 0.0 : x;
`,rG=rF+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,rB="return x;",rW=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,rU=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,rj=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;class rK{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class rq{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length);let t=e.length,r=rA("rc",t),a=eu(t),n=function(e,t){if(1===e)return"rc";let r="";for(let a=0;a<e;a++)r+=t[a],a<e-1&&(r+=",");return r}(t,r),s=r.slice(-2),o=t<=1?"rc":`vec2(${s.join(",")})`;this.userCode=`
      void main() {
        ${a} rc = getOutputCoords();
        vec4 packedInput = getA(${n});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}}let rH=K.whereImpl,rX={},rJ=(0,g.env)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class rY extends j.KernelBackend{nextDataId(){return rY.nextDataId++}constructor(e){let t;if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,g.env)().getBool("HAS_WEBGL"))throw Error("WebGL is not supported on this device");null!=e?(t=e instanceof e$?e:new e$(v((0,g.env)().getNumber("WEBGL_VERSION"),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1):(t=new e$(v((0,g.env)().getNumber("WEBGL_VERSION"))),this.binaryCache=function(e){return e in rX||(rX[e]={}),rX[e]}((0,g.env)().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new rO(this.gpgpu),this.numMBBeforeWarning=null==(0,g.env)().global.screen?1024:(0,g.env)().global.screen.height*(0,g.env)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new(0,j.DataStorage)(this,(0,m.engine)())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,r,a,n,s){let o=this.makeTensorInfo(t,r),i=this.texData.get(o.dataId);i.isPacked=!1,i.texture={texture:e,texShape:[a,n]},i.texShape=[a,n];let l=new eT(D(t),!1,s),u=this.runWebGLProgram(l,[o],r,[[a,n]]);return u.shape=t,i.texture=null,this.disposeIntermediateTensorInfo(o),u.dataId}write(e,t,r){if(((0,g.env)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,g.env)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===r&&null!=e)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let a={id:this.nextDataId()};return this.texData.set(a,{shape:t,dtype:r,values:e,usage:o.UPLOAD,refCount:1}),a}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,r,a,n){if((0,g.env)().getBool("DEBUG")&&this.checkNumericalProblems(t),"complex64"===a)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:r,dtype:a,values:t,usage:o.UPLOAD,refCount:n})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let t,r,{values:a,dtype:n,complexTensorInfos:s,slice:o,shape:i,isPacked:l}=this.texData.get(e);if(null!=o){let t;t=l?new rK(i,rB):new r_(i,rB);let r=this.runWebGLProgram(t,[{dataId:e,shape:i,dtype:n}],n),a=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(null!=a)return this.convertAndCacheOnCPU(e);if("string"===n)return a;let u=null!=this.activeTimers;if(u&&(t=x.now()),"complex64"===n){let e=this.readSync(s.real.dataId),t=this.readSync(s.imag.dataId);r=W.mergeRealAndImagArrays(e,t)}else r=this.getValuesFromTexture(e);return u&&(this.downloadWaitMs+=x.now()-t),this.convertAndCacheOnCPU(e,r)}async read(e){let t,r;if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:a,shape:n,slice:s,dtype:o,complexTensorInfos:i,isPacked:l}=this.texData.get(e);if(null!=s){let t;t=l?new rK(n,rB):new r_(n,rB);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:o}],o),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(null!=a)return this.convertAndCacheOnCPU(e);if((0,g.env)().getBool("DEBUG")&&!(0,g.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,g.env)().getNumber("WEBGL_VERSION"))throw Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let u=null;if("complex64"!==o&&(0,g.env)().get("WEBGL_BUFFER_SUPPORTED")){t=this.decode(e);let r=this.texData.get(t.dataId);u=this.gpgpu.createBufferFromTexture(r.texture.texture,...T(n))}if(this.pendingRead.set(e,[]),"complex64"!==o&&await this.gpgpu.createAndWaitForFence(),"complex64"===o){let e=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),t=e[0],a=e[1];r=W.mergeRealAndImagArrays(t,a)}else if(null==u)r=this.getValuesFromTexture(e);else{let e=x.sizeFromShape(n);r=this.gpgpu.downloadFloat32MatrixFromBuffer(u,e)}if(null!=t&&this.disposeIntermediateTensorInfo(t),null!=u){let e=this.gpgpu.gl;N(e,()=>e.deleteBuffer(u))}let p=this.convertAndCacheOnCPU(e,r),c=this.pendingRead.get(e);return this.pendingRead.delete(e),c.forEach(e=>e(p)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,m.engine)().removeDataId(e,this),this.pendingDeletes--),p}readToGPU(e,t={}){let{values:r,shape:a,slice:n,dtype:s,isPacked:o,texture:i}=this.texData.get(e);if("complex64"===s)throw Error("Does not support reading texture for complex64 dtype.");if(null!=n){let r;r=o?new rK(a,rB):new r_(a,rB);let n=this.runWebGLProgram(r,[{dataId:e,shape:a,dtype:s}],s),i=this.readToGPU(n,t);return this.disposeIntermediateTensorInfo(n),i}if(null==i)if(null!=r)throw Error("Data is not on GPU but on CPU.");else throw Error("There is no data on GPU or CPU.");let l=this.decode(e,t.customTexShape);return Object.assign({tensorRef:(0,m.engine)().makeTensorFromTensorInfo(l)},this.texData.get(l.dataId).texture)}bufferSync(e){let t=this.readSync(e.dataId);if("string"===e.dtype)try{let r=t.map(e=>x.decodeString(e));return(0,U.buffer)(e.shape,e.dtype,r)}catch(e){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,U.buffer)(e.shape,e.dtype,t)}checkNumericalProblems(e){if(null!=e)for(let t=0;t<e.length;t++){let r=e[t];if(!((0,g.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===r||596e-10<Math.abs(r)&&65504>Math.abs(r))&&1){if((0,g.env)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${r} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${r} cannot be represented on this device.`)}}}getValuesFromTexture(e){let{shape:t,dtype:r,isPacked:a}=this.texData.get(e),n=x.sizeFromShape(t);if((0,g.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let r=this.decode(e),a=this.texData.get(r.dataId),s=this.gpgpu.downloadMatrixFromPackedTexture(a.texture.texture,...T(t)).subarray(0,n);return this.disposeIntermediateTensorInfo(r),s}let s=(0,g.env)().getBool("WEBGL_PACK")&&!0===a,o=s?D(t):t,i=s?new eb(o):new ey(o),l=this.runWebGLProgram(i,[{shape:o,dtype:r,dataId:e}],"float32"),u=this.texData.get(l.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,n);return this.disposeIntermediateTensorInfo(l),p}timerAvailable(){return(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){let t=this.activeTimers,r=[],a=!1;null==this.programTimersStack?(this.programTimersStack=r,a=!0):this.activeTimers.push(r),this.activeTimers=r,e();let n=x.flatten(this.activeTimers.map(e=>e.query)).filter(e=>null!=e),s=x.flatten(this.activeTimers.map(e=>e.name)).filter(e=>null!=e);this.activeTimers=t,a&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let e=await Promise.all(n);o.kernelMs=x.sum(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:s[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(", ")}else o.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:x.now(),endMs:null}}endTimer(e){return(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.endQuery():e.endMs=x.now(),e}async getQueryTime(e){return(0,g.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.waitForQueryAndGetTime(e):e.endMs-e.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:r}=this.texData.get(e);return null!=r&&(this.disposeData(r.real.dataId,t),this.disposeData(r.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:r,texShape:a,usage:n,isPacked:s,slice:o}=this.texData.get(e),i=o&&o.origDataId||e,l=this.dataRefCount.get(i);l>1?this.dataRefCount.set(i,l-1):(this.dataRefCount.delete(i),null!=t&&(this.numBytesInGPU-=this.computeBytes(a,r),this.textureManager.releaseTexture(t,a,n,s)));let u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=rJ){return(0,g.env)().getBool("WEBGL_CPU_FORWARD")&&e.every(e=>null==this.texData.get(e.dataId).texture&&x.sizeFromShape(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){W.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let t=e.dataSync();return rH(e.shape,t)}packedUnaryOp(e,t,r){let a=new rK(e.shape,t),n=this.compileAndRun(a,[e],r);return(0,m.engine)().makeTensorFromTensorInfo(n)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){let t=rh(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if((0,g.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,rz,e.dtype);let t=new r_(e.shape,rz),r=this.compileAndRun(t,[e]);return(0,m.engine)().makeTensorFromTensorInfo(r)}makeTensorInfo(e,t,r){let a;if("string"===t&&null!=r&&r.length>0&&x.isString(r[0])){let n=r.map(e=>x.encodeString(e));a=this.write(n,e,t)}else a=this.write(r,e,t);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:t}}makeOutput(e,t,r){return(0,m.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,r),this)}unpackTensor(e){let t=new rq(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new rR(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let r=[V(e.shape),...P(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},n=new rM([V(t),...P(t)],r),s=this.runWebGLProgram(n,[a],e.dtype,[r],!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}decode(e,t){let r,{isPacked:a,shape:n,dtype:s}=this.texData.get(e);if(null!=t){let e=x.sizeFromShape(n),r=t[0]*t[1]*4;x.assert(e<=r,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let o=D(n);r=a?new ex(o):new eg(o);let i=[null!=t?t:T(o)],l=this.runWebGLProgram(r,[{shape:o,dtype:s,dataId:e}],s,i,!0,t);return{dtype:s,shape:n,dataId:l.dataId}}runWebGLProgram(e,t,r,a,n=!1,o){let i,l=this.makeTensorInfo(e.outputShape,r),u=this.texData.get(l.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===s.DENSE&&(u.texShape=(null!=o?o:T(e.outputShape)).map(e=>2*e)),null!=e.outTexUsage&&(u.usage=e.outTexUsage),0===x.sizeFromShape(l.shape))return u.values=x.getTypedArrayFromDType(l.dtype,0),l;let p=[],c=t.map(t=>{if("complex64"===t.dtype)throw Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let r=this.texData.get(t.dataId);if(null==r.texture){if(!e.packedInputs&&x.sizeFromShape(t.shape)<=(0,g.env)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:r.values};e.packedInputs&&(r.isPacked=!0,r.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!r.isPacked!=!!e.packedInputs)t=r.isPacked?this.unpackTensor(t):this.packTensor(t),p.push(t),r=this.texData.get(t.dataId);else if(r.isPacked&&!_(r.shape,t.shape)){let e=t,a=t.shape;t.shape=r.shape,t=this.packedReshape(t,a),p.push(t),r=this.texData.get(t.dataId),e.shape=a}return{shape:t.shape,texData:r,isUniform:!1}});this.uploadToGPU(l.dataId);let d={shape:l.shape,texData:u,isUniform:!1},h=function(e,t,r){let a="";t.concat(r).forEach(t=>{let n=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let s=t.texData.texShape,{useSqueezeShape:o,uniformShape:i,keptDims:l}=ep(e.packedInputs,t.shape,s),u="",p="",c="";if(1===i.length&&e.packedInputs){let e=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];u=`${e[0]>1}_${e[1]>1}`}else if(2!==i.length||e.packedInputs){if(i.length>2&&!e.packedInputs){let e=x.computeStrides(i);c=`${e[0]===s[1]}_${e[e.length-1]===s[1]}`}}else p=`${i[0]>1}_${i[1]>1}`;let d=t.shape.length,h=2===i.length&&x.arraysEqual(t.shape,s),f=1===x.sizeFromShape(t.shape),m=W.getBroadcastDims(t.shape,r.shape),g=!e.packedInputs&&d===r.shape.length&&x.arraysEqual(s,r.texData.texShape),y=e.packedInputs||i.length>2?"":`${s[0]>1}_${s[1]>1}`;a+=`${d}_${g}_${o?l:""}_${i.length}_${f}_${m}_${h}_${u}_${p}_${c}_${y}_${n}`}else{let e=t.isUniform?"uniform":t.texData.texShape;a+=`${t.shape}_${e}_${n}`}});let n=e.userCode,s=e.constructor.name;return s+("_"+a+"_"+n+`${(0,g.env)().getNumber("WEBGL_VERSION")}`)}(e,c,d),f=this.getAndSaveBinary(h,()=>(function(e,t,r,a){let n=r.map((e,r)=>{let a={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(a.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[r],shapeInfo:a}}),s=n.map(e=>e.shapeInfo),o={logicalShape:a.shape,texShape:a.texData.texShape,isUniform:!1,isPacked:a.texData.isPacked,flatOffset:null},i=function(e,t,r){var a,n,s,o;let i,l,u=[];if(e.forEach(e=>{let t=x.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?u.push(`uniform float ${e.name}${t>1?`[${t}]`:""};`):(u.push(`uniform sampler2D ${e.name};`),u.push(`uniform int offset${e.name};`)),r.enableShapeUniforms){let{uniformShape:t}=ep(r.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:u.push(`uniform int ${e.name}Shape;`);break;case 2:u.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:u.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:u.push(`uniform ivec4 ${e.name}Shape;`)}u.push(`uniform ivec2 ${e.name}TexShape;`)}}),r.enableShapeUniforms){switch(t.logicalShape.length){case 1:u.push("uniform int outShape;");break;case 2:u.push("uniform ivec2 outShape;"),u.push("uniform int outShapeStrides;");break;case 3:u.push("uniform ivec3 outShape;"),u.push("uniform ivec2 outShapeStrides;");break;case 4:u.push("uniform ivec4 outShape;"),u.push("uniform ivec3 outShapeStrides;")}u.push("uniform ivec2 outTexShape;")}r.customUniforms&&r.customUniforms.forEach(e=>{u.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)});let p=u.join("\n"),c=e.map(e=>(function(e,t,r=!1,a){let n="";r?n+=function e(t,r){switch(t.shapeInfo.logicalShape.length){case 0:var a=t;let n=a.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=X();return`
    vec4 ${s}() {
      return ${o.texture2D}(${n}, halfCR);
    }
  `;case 1:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),n=e.shapeInfo.texShape,s=X();if(t)return`
    vec4 ${a}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${r}, uv);
    }
  `;let o=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${a}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${s.texture2D}(${r}, uv);
    }
  `}(t,r);case 2:return function(e,t){let r=e.shapeInfo.logicalShape,a=e.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),s=e.shapeInfo.texShape,o=s[0],i=s[1],l=X();if(null!=s&&x.arraysEqual(r,s))return t?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}TexShape[1], ${a}TexShape[0]);

        return ${l.texture2D}(${a}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${i}.0, ${o}.0);

        return ${l.texture2D}(${a}, uv);
      }
    `;if(t)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${a}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${a}, uv);
    }
  `;let u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],p=Math.ceil(r[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${a}, uv);
    }
  `}(t,r);case 3:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===a[0]){let n=ec(t,a.slice(1));return`
        ${e(n,r)}
        vec4 ${s}(int b, int row, int col) {
          return ${s}(${ed(["b","row","col"],[1,2])});
        }
      `}let l=X();if(r)return`
    vec4 ${s}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${n}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${l.texture2D}(${n}, uv);
    }
  `;let u=i[0],p=i[1],c=Math.ceil(a[2]/2),d=c*Math.ceil(a[1]/2);return`
    vec4 ${s}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${u}, ${p}, ${d}, ${c}, b, row, col);
      return ${l.texture2D}(${n}, uv);
    }
  `}(t,r);default:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1),n=X();if(t)return`
    vec4 ${a}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${r}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${r}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${r}, uv);
    }
  `;let s=e.shapeInfo.logicalShape,o=s.length,i=e.shapeInfo.texShape,l=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],u=l[0],p=l[1],c=Math.ceil(s[o-1]/2),d=c*Math.ceil(s[o-2]/2),h="int b, int row, int col",f=`b * ${d} + (row / 2) * ${c} + (col / 2)`;for(let e=2;e<o-1;e++)h=`int b${e}, `+h,d*=s[o-e-1],f=`b${e} * ${d} + `+f;return`
    vec4 ${a}(${h}) {
      int index = ${f};
      int texR = index / ${p};
      int texC = index - texR * ${p};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}, ${u});
      return ${n.texture2D}(${r}, uv);
    }
  `}(t,r)}}(e,a):n+=function e(t,r=!1){let a=t.shapeInfo.logicalShape;switch(a.length){case 0:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`float ${a}() {return ${r};}`;let[n,s]=e.shapeInfo.texShape;if(1===n&&1===s)return`
      float ${a}() {
        return sampleTexture(${r}, halfCR);
      }
    `;let o=ei(r);if(t)return`
    float ${a}() {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], ${o});
      return sampleTexture(${r}, uv);
    }
  `;let[i,l]=e.shapeInfo.texShape;return`
    float ${a}() {
      vec2 uv = uvFromFlat(${i}, ${l}, ${o});
      return sampleTexture(${r}, uv);
    }
  `}(t,r);case 1:return function(e,t){let r=e.name,a="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float ${a}(int index) {
        ${el(e)}
      }
    `;let n=e.shapeInfo.texShape,s=n[0],o=n[1];if(1===o&&1===s)return`
      float ${a}(int index) {
        return sampleTexture(${r}, halfCR);
      }
    `;let i=ei(r);return 1===o?t?`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);
        return sampleTexture(${r}, uv);
      }
    `:1===s?t?`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${a}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${r}, uv);
      }
    `:t?`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${i});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${a}(int index) {
      vec2 uv = uvFromFlat(${s}, ${o}, index + ${i});
      return sampleTexture(${r}, uv);
    }
  `}(t,r);case 2:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape;if(null!=o&&x.arraysEqual(a,o)){if(r)return`
      float ${s}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `;let e=o[0],t=o[1];return`
    float ${s}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${t}.0, ${e}.0);
      return sampleTexture(${n}, uv);
    }
  `}let{newShape:i,keptDims:l}=x.squeezeShape(a);if(i.length<a.length){let a=ec(t,i);return`
      ${e(a,r)}
      float ${s}(int row, int col) {
        return ${s}(${ed(["row","col"],l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${a[1]}, 1)));
        ${el(t)}
      }
    `;let u=o[0],p=o[1],c=ei(n);return 1===p?r?`
      float ${s}(int row, int col) {
        float index = dot(vec3(row, col, ${c}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${s}(int row, int col) {
      float index = dot(vec3(row, col, ${c}), vec3(${a[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${n}, uv);
    }
  `:1===u?r?`
      float ${s}(int row, int col) {
        float index = dot(vec3(row, col, ${c}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${s}(int row, int col) {
      float index = dot(vec3(row, col, ${c}), vec3(${a[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${p}.0, 0.5);
      return sampleTexture(${n}, uv);
    }
  `:r?`
      float ${s}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${n}Shape[1] + col + ${c};
        vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
        return sampleTexture(${n}, uv);
      }
    `:`
  float ${s}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${a[1]} + col + ${c};
    vec2 uv = uvFromFlat(${u}, ${p}, index);
    return sampleTexture(${n}, uv);
  }
`}(t,r);case 3:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=a[1]*a[2],i=a[2],{newShape:l,keptDims:u}=x.squeezeShape(a);if(l.length<a.length){let a=ec(t,l);return`
        ${e(a,r)}
        float ${s}(int row, int col, int depth) {
          return ${s}(${ed(["row","col","depth"],u)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${o}, ${i}, 1)));
        ${el(t)}
      }
    `;let p=t.shapeInfo.texShape,c=p[0],d=p[1],h=t.shapeInfo.flatOffset;if(d===o&&null==h)return r?`
      float ${s}(int row, int col, int depth) {
        int stride1 = ${n}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
        float ${s}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${c}.0);
          return sampleTexture(${n}, uv);
        }
      `;if(d===i&&null==h)return r?`
      float ${s}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${n}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${s}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${a[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${c}.0);
      return sampleTexture(${n}, uv);
    }
  `;let f=ei(n);return r?`
    float ${s}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${n}Shape[1] * ${n}Shape[2];
      int stride1 = ${n}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
      return sampleTexture(${n}, uv);
    }
    `:`
      float ${s}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o} + col * ${i} + depth + ${f};
        vec2 uv = uvFromFlat(${c}, ${d}, index);
        return sampleTexture(${n}, uv);
      }
  `}(t,r);case 4:return function(t,r){let a=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=a[3],i=a[2]*o,l=a[1]*i,{newShape:u,keptDims:p}=x.squeezeShape(a);if(u.length<a.length){let a=ec(t,u);return`
      ${e(a,r)}
      float ${s}(int row, int col, int depth, int depth2) {
        return ${s}(${ed(["row","col","depth","depth2"],p)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${l}, ${i}, ${o}, 1)));
        ${el(t)}
      }
    `;let c=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1],m=`int stride2 = ${n}Shape[3];`,g=`int stride1 = ${n}Shape[2] * stride2;`,y=`int stride0 = ${n}Shape[1] * stride1;`;if(f===l&&null==c)return r?`
      float ${s}(int row, int col, int depth, int depth2) {
        ${m}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===o&&null==c)return r?`
      float ${s}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n}Shape[1] * ${n}Shape[2], ${n}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${a[1]*a[2]}, ${a[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;let b=ei(n);return r?`
    float ${s}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${g}
      ${y}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${b});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${s}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${i} +
          depth * ${o} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${b});
      return sampleTexture(${n}, uv);
    }
  `}(t,r);case 5:return function(t){let r=t.shapeInfo.logicalShape,a=t.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),s=r[4],o=r[3]*s,i=r[2]*o,l=r[1]*i,{newShape:u,keptDims:p}=x.squeezeShape(r);if(u.length<r.length){let r=ec(t,u);return`
      ${e(r)}
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        return ${n}(${ed(["row","col","depth","depth2","depth3"],p)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${l}, ${i}, ${o}, ${s})) +
          depth3;
        ${el(t)}
      }
    `;let c=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1];if(f===l&&null==c)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${o}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${a}, uv);
      }
    `;if(f===s&&null==c)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${r[1]*r[2]*r[3]},
               ${r[2]*r[3]}, ${r[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${a}, uv);
      }
    `;let m=ei(a);return`
    float ${n}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${i} + depth * ${o} +
          depth2 * ${s} + depth3 + ${m};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${a}, uv);
    }
  `}(t);case 6:return function(t){let r=t.shapeInfo.logicalShape,a=t.name,n="get"+a.charAt(0).toUpperCase()+a.slice(1),{newShape:s,keptDims:o}=x.squeezeShape(r);if(s.length<r.length){let r=ec(t,s);return`
      ${e(r)}
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${n}(${ed(["row","col","depth","depth2","depth3","depth4"],o)});
      }
    `}let i=r[5],l=r[4]*i,u=r[3]*l,p=r[2]*u,c=r[1]*p;if(t.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${p}, ${u}, ${l})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${el(t)}
      }
    `;let d=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],m=h[1];if(m===c&&null==d)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${p}, ${u}, ${l}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${f}.0);
        return sampleTexture(${a}, uv);
      }
    `;if(m===i&&null==d)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${r[1]*r[2]*r[3]*r[4]},
               ${r[2]*r[3]*r[4]},
               ${r[3]*r[4]},
               ${r[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${f}.0);
        return sampleTexture(${a}, uv);
      }
    `;let g=ei(a);return`
    float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${p} + depth * ${u} +
          depth2 * ${l} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${m}, index);
      return sampleTexture(${a}, uv);
    }
  `}(t);default:throw Error(`${a.length}-D input sampling is not yet supported`)}}(e,a);let s=e.shapeInfo.logicalShape,o=t.logicalShape;return s.length<=o.length&&(r?n+=function(e,t){let r,a=e.name,n=a.charAt(0).toUpperCase()+a.slice(1),s=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,i=et(e.shapeInfo.logicalShape,t.logicalShape),l=eu(o),u=o-s,p=["x","y","z","w","u","v"];r=0===s?"":o<2&&i.length>=1?"coords = 0;":i.map(e=>`coords.${p[e+u]} = 0;`).join("\n");let c="";c=o<2&&s>0?"coords":e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+u]}`).join(", ");let d="return outputValue;",h=1===x.sizeFromShape(e.shapeInfo.logicalShape),f=1===x.sizeFromShape(t.logicalShape);if(1!==s||h||f){if(h&&!f)d=1===o?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(i.length){let e=s-2,t=s-1;i.indexOf(e)>-1&&i.indexOf(t)>-1?d="return vec4(outputValue.x);":i.indexOf(e)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":i.indexOf(t)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}}else d=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 ${"get"+n+"AtOutCoords"}() {
      ${l} coords = getOutputCoords();
      ${r}
      vec4 outputValue = get${n}(${c});
      ${d}
    }
  `}(e,t):n+=function(e,t){let r,a=e.name,n=a.charAt(0).toUpperCase()+a.slice(1),s="get"+n+"AtOutCoords",o=t.texShape,i=e.shapeInfo.texShape,l=e.shapeInfo.logicalShape.length,u=t.logicalShape.length;if(!e.shapeInfo.isUniform&&l===u&&null==e.shapeInfo.flatOffset&&x.arraysEqual(i,o))return`
      float ${s}() {
        return sampleTexture(${a}, resultUV);
      }
    `;let p=eu(u),c=et(e.shapeInfo.logicalShape,t.logicalShape),d=u-l,h=["x","y","z","w","u","v"];r=0===l?"":u<2&&c.length>=1?"coords = 0;":c.map(e=>`coords.${h[e+d]} = 0;`).join("\n");let f="";return f=u<2&&l>0?"coords":e.shapeInfo.logicalShape.map((e,t)=>`coords.${h[t+d]}`).join(", "),`
    float ${s}() {
      ${p} coords = getOutputCoords();
      ${r}
      return get${n}(${f});
    }
  `}(e,t)),n})(e,t,r.packedInputs,r.enableShapeUniforms)).join("\n"),d=t.texShape,h=X(),f=(a=h,`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${a.texture2D}(textureSampler, uv).r;
    }
  `),m=(n=h,`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${er}
    ${ea}
    ${en}
  `);return t.isPacked?(i=function(e,t,r){switch(e.length){case 0:return eo();case 1:var a=t,n=r;let s=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return 1===s[0]?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:1===s[1]?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `;case 2:var o=e,i=t,l=r;let u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];if(x.arraysEqual(o,i))return l?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${u[0]}, ${u[1]}));
      }
    `;let p=Math.ceil(o[1]/2);return l?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${u[0]}, ${u[1]}));

      int index = resTexRC.x * ${u[1]} + resTexRC.y;
      int r = 2 * (index / ${p});
      int c = imod(index, ${p}) * 2;

      return ivec2(r, c);
    }
  `;case 3:var c=e,d=t,h=r;if(h)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let f=[Math.ceil(d[0]/2),Math.ceil(d[1]/2)],m=Math.ceil(c[2]/2),g=m*Math.ceil(c[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${f[0]}, ${f[1]}));
      int index = resTexRC.x * ${f[1]} + resTexRC.y;

      int b = index / ${g};
      index -= b * ${g};

      int r = 2 * (index / ${m});
      int c = imod(index, ${m}) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(e,t,r){if(r)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let a=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(e[e.length-1]/2),s=n*Math.ceil(e[e.length-2]/2),o=s,i="",l="b, r, c";for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],i=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+i,l=`b${t}, `+l;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      int index = resTexRC.x * ${a[1]} + resTexRC.y;

      ${i}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${e.length}(${l});
    }
  `}(e,t,r)}}(t.logicalShape,d,r.enableShapeUniforms),s=h,l=`
    void setOutput(vec4 val) {
      ${s.output} = val;
    }
  `):(i=function(e,t,r){switch(e.length){case 0:return eo();case 1:return a=t,n=r,1===a[0]?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${a[1]}.0);
      }
    `:1===a[1]?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${a[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${a[0]}, ${a[1]}));
      return resTexRC.x * ${a[1]} + resTexRC.y;
    }
  `;case 2:return s=e,o=t,i=r,x.arraysEqual(s,o)?i?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `:1===s[1]?i?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.x * ${o[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:1===s[0]?i?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.x * ${o[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:i?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = index / ${s[1]};
      int c = index - r * ${s[1]};
      return ivec2(r, c);
    }
  `;case 3:var a,n,s,o,i,l=e,u=t,p=r;if(p){let e=Y(["r","c","d"],l);return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${e}
    return ivec3(r, c, d);
  }
`}let c=J(["r","c","d"],l);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${u[0]}, ${u[1]}));
      int index = resTexRC.x * ${u[1]} + resTexRC.y;
      ${c}
      return ivec3(r, c, d);
    }
  `;case 4:var d=e,h=t,f=r;if(f){let e=Y(["r","c","d","d2"],d);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${e}
      return ivec4(r, c, d, d2);
    }
  `}let m=J(["r","c","d","d2"],d);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${h[0]}, ${h[1]}));
      int index = resTexRC.x * ${h[1]} + resTexRC.y;
      ${m}
      return ivec4(r, c, d, d2);
    }
  `;case 5:var g=e,y=t;let b=J(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${y[0]},
                             ${y[1]}));

      int index = resTexRC.x * ${y[1]} + resTexRC.y;

      ${b}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `;case 6:var v=e,T=t;let w=J(["r","c","d","d2","d3","d4"],v);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${T[0]}, ${T[1]}));
      int index = resTexRC.x * ${T[1]} + resTexRC.y;

      ${w}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `;default:throw Error(`${e.length}-D output sampling is not yet supported`)}}(t.logicalShape,d,r.enableShapeUniforms),o=h,l=`
    void setOutput(float val) {
      ${o.output} = vec4(val, 0, 0, 0);
    }
  `),r.packedInputs&&(m+=es),[m,f,l,p,i,c,r.userCode].join("\n")}(n,o,t),l=function(e,t){let r=O(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(N(e,()=>e.shaderSource(r,t)),N(e,()=>e.compileShader(r)),(0,g.env)().get("ENGINE_COMPILE_ONLY"))return r;if(!1===e.getShaderParameter(r,e.COMPILE_STATUS))throw I(t,e.getShaderInfoLog(r)),Error("Failed to compile fragment shader.");return r}(e.gl,i),u=e.createProgram(l);return(0,g.env)().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:i,webGLProgram:u,inShapeInfos:s,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(u),Object.assign({program:t,fragmentShader:l,source:i,webGLProgram:u,inShapeInfos:s,outShapeInfo:o},eh(e,t,u)))})(this.gpgpu,e,c,d)),m=null!=this.activeTimers;m&&(i=this.startTimer()),(0,g.env)().get("ENGINE_COMPILE_ONLY")||function(e,t,r,a,n){t.program.enableShapeUniforms||(ef(t.inShapeInfos,r),ef([t.outShapeInfo],[a]));let s=a.texData.texture,o=a.texData.texShape;a.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,o[0],o[1]):e.setOutputMatrixTexture(s.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),1===(0,g.env)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN);for(let a=0;a<r.length;++a){let n=r[a],{uniform:s,offset:o,shape:i,texShape:l}=t.variablesLocations[a];if(i){let{uniformShape:r}=ep(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(i,new Int32Array(r));break;case 2:e.gl.uniform2iv(i,new Int32Array(r));break;case 3:e.gl.uniform3iv(i,new Int32Array(r));break;case 4:e.gl.uniform4iv(i,new Int32Array(r))}}if(l&&e.gl.uniform2i(l,n.texData.texShape[0],n.texData.texShape[1]),null!=s){if(n.isUniform){if(2>x.sizeFromShape(n.shape))e.gl.uniform1f(s,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(s,t)}continue}null!=n.texData.slice&&null!=o&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,s,a)}}let i=t.outShapeLocation;if(i)switch(a.shape.length){case 1:e.gl.uniform1iv(i,new Int32Array(a.shape));break;case 2:e.gl.uniform2iv(i,new Int32Array(a.shape));break;case 3:e.gl.uniform3iv(i,new Int32Array(a.shape));break;case 4:e.gl.uniform4iv(i,new Int32Array(a.shape))}if(t.outShapeStridesLocation){let r=x.computeStrides(a.shape);switch(a.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(r));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(r));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(r))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,a.texData.texShape[0],a.texData.texShape[1]),t.program.customUniforms&&n)for(let r=0;r<t.program.customUniforms.length;++r){let a=t.program.customUniforms[r],s=t.customUniformLocations[r],o=n[r];if("float"===a.type)e.gl.uniform1fv(s,o);else if("vec2"===a.type)e.gl.uniform2fv(s,o);else if("vec3"===a.type)e.gl.uniform3fv(s,o);else if("vec4"===a.type)e.gl.uniform4fv(s,o);else if("int"===a.type)e.gl.uniform1iv(s,o);else if("ivec2"===a.type)e.gl.uniform2iv(s,o);else if("ivec3"===a.type)e.gl.uniform3iv(s,o);else if("ivec4"===a.type)e.gl.uniform4iv(s,o);else throw Error(`uniform type ${a.type} is not supported yet.`)}e.executeProgram()}(this.gpgpu,f,c,d,a),p.forEach(e=>this.disposeIntermediateTensorInfo(e)),m&&(i=this.endTimer(i),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(i)}));let y=(0,g.env)().getNumber("WEBGL_FLUSH_THRESHOLD");if(y>0){let e=x.now();e-this.lastGlFlushTime>y&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,g.env)().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&!1===n){let e=this.unpackTensor(l);return this.disposeIntermediateTensorInfo(l),e}return l}compileAndRun(e,t,r,a,n=!1){return r=r||t[0].dtype,this.runWebGLProgram(e,t,r,a,n)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||((0,g.env)().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,m.tidy)(()=>{if(!(0,g.env)().get("WEBGL_RENDER_FLOAT32_ENABLED")){let e=(0,g.env)().getBool("DEBUG");(0,g.env)().set("DEBUG",!1);let t=this.abs((0,H.scalar)(1e-8)).dataSync()[0];if((0,g.env)().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){let t,r=this.texData.get(e),{shape:a,dtype:n,values:s,texture:i,usage:l,isPacked:u}=r;if(null!=i)return;let p=null!=this.activeTimers;p&&(t=x.now());let c=r.texShape;if(null==c&&(r.texShape=c=function(e,t=!1){let r=(0,g.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),a=(0,g.env)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");a===1/0&&(0,g.env)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(a=r/2),t&&(r*=2,a*=2,1===(e=e.map((t,r)=>r>=e.length-2?x.nearestLargerEven(e[r]):e[r])).length&&(e=[2,e[0]])),2!==e.length&&(e=x.squeezeShape(e).newShape);let n=x.sizeFromShape(e),s=null;e.length<=1&&n<=r?s=[1,n]:2===e.length&&e[0]<=r&&e[1]<=r?s=e:3===e.length&&e[0]*e[1]<=r&&e[2]<=r?s=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=r&&e[1]*e[2]<=r?s=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=r&&e[3]<=r?s=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=r&&e[1]*e[2]*e[3]<=r&&(s=[e[0],e[1]*e[2]*e[3]]);let o=null!=s&&Math.max(...s)>a&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(null==s||o)if(t){let t=V(e),r=2,a=2;e.length&&([r,a]=P(e)),n=r/2*t*(a/2),s=x.sizeToSquarishShape(n).map(e=>2*e)}else s=x.sizeToSquarishShape(n);return s}(a,u)),null!=s){let e,i=D(a),l=c[1],d=c[0],h=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(u||!h)&&([l,d]=w(c[0],c[1])),e=u?new ew(i,h):new eT(i,h);let f=h?[d,l]:c,m=this.makeTensorInfo(f,n),y=this.texData.get(m.dataId);h?y.usage=o.PIXELS:y.usage=o.UPLOAD,y.texShape=f,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),l,d,s);let b=[[d,l]],v=this.runWebGLProgram(e,[m],n,b,!0),T=this.texData.get(v.dataId);r.texShape=T.texShape,r.isPacked=T.isPacked,r.usage=T.usage,(0,g.env)().get("ENGINE_COMPILE_ONLY")?this.disposeData(v.dataId):(r.texture=T.texture,r.values=null,this.texData.delete(v.dataId)),this.disposeIntermediateTensorInfo(m),p&&(this.uploadWaitMs+=x.now()-t)}else r.texture=this.acquireTexture(c,l,n,u)}convertAndCacheOnCPU(e,t){let r=this.texData.get(e),{dtype:a}=r;return null!=t&&(r.values=function(e,t){if("float32"===t||"complex64"===t)return e;if("int32"===t||"bool"===t){let r="int32"===t?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<r.length;++t)r[t]=Math.round(e[t]);return r}throw Error(`Unknown dtype ${t}`)}(t,a)),r.values}acquireTexture(e,t,r,a){if(this.numBytesInGPU+=this.computeBytes(e,r),!this.warnedAboutMemory&&this.numBytesInGPU>1048576*this.numMBBeforeWarning){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,a)}computeBytes(e,t){return e[0]*e[1]*x.bytesPerElement(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,t]of Object.entries(this.binaryCache)){let r=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(r)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await (0,q.nextFrame)(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw I(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error("Failed to compile fragment shader.");throw Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:r,infLoc:a,nanLoc:n,outShapeLocation:s,outShapeStridesLocation:o,outTexShapeLocation:i}=eh(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=r,e.infLoc=a,e.nanLoc=n,e.outShapeLocation=s,e.outShapeStridesLocation=o,e.outTexShapeLocation=i}}createTensorFromGPUData(e,t,r){e.channels=e.channels||"RGBA";let{texture:a,height:n,width:s,channels:o}=e,i=(0,m.engine)().backend;if(!i.gpgpu.gl.isTexture(a))throw Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let l=i.writeTexture(a,t,r,n,s,o);return(0,m.engine)().makeTensorFromDataId(l,t,r,i)}}rY.nextDataId=0,d("fM0z2");var g=d("alePs");f.isBrowser()&&(0,m.registerBackend)("webgl",()=>new rY,2),d("fM0z2");var rZ=d("3ytnp");d("fM0z2");var eR=d("dcVMt");d("fM0z2");var rQ=d("eCyVZ"),to=d("8IARK"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx"),g=d("alePs"),to=d("8IARK");d("fM0z2");var W=d("4ajhx");let r0=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class r1{constructor(e,t,r){this.variableNames=["A","B"],this.outputShape=W.assertAndGetBroadcastShape(t,r),this.enableShapeUniforms=em(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}d("fM0z2");var W=d("4ajhx"),x=d("a9Xyg");let r2=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class r3{constructor(e,t,r,a=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=W.assertAndGetBroadcastShape(t,r);let n=this.outputShape.length;this.enableShapeUniforms=em(n);let s="";if(a)if(0===n||1===x.sizeFromShape(this.outputShape))s=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else{let e=eu(n);if(s=`
          ${e} coords = getOutputCoords();
        `,1===n)this.enableShapeUniforms?s+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:s+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=rA("coords",n);this.enableShapeUniforms?s+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= outShape[${n} - 2];
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= outShape[${n} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:s+=`
            bool nextRowOutOfBounds =
              (${e[n-2]} + 1) >= ${this.outputShape[n-2]};
            bool nextColOutOfBounds =
              (${e[n-1]} + 1) >= ${this.outputShape[n-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${s}

        setOutput(result);
      }
    `}}d("fM0z2");var eR=d("dcVMt");d("fM0z2");var eR=d("dcVMt");function r4(e){let{inputs:t,backend:r}=e,{x:a}=t;return r.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}let r6={kernelName:eR.Identity,backendName:"webgl",kernelFunc:r4};function r5(e){let{inputs:t,backend:r}=e,{real:a,imag:n}=t,s=r.makeTensorInfo(a.shape,"complex64"),o=r.texData.get(s.dataId);return o.complexTensorInfos={real:r4({inputs:{x:a},backend:r}),imag:r4({inputs:{x:n},backend:r})},s}let r8={kernelName:eR.Complex,backendName:"webgl",kernelFunc:r5};d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");let r9="return (a < 0.) ? b * a : a;",r7=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,ae={kernelName:eR.LeakyRelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{alpha:s}=a,o=r.makeTensorInfo([],"float32",x.createScalarValue(s,"float32")),i=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new r3(r7,n.shape,o.shape):new r1(r9,n.shape,o.shape),l=r.runWebGLProgram(i,[n,o],"float32");return r.disposeIntermediateTensorInfo(o),l}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");let at="return (a < 0.) ? b * a : a;",ar=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,aa={kernelName:eR.Prelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a,alpha:n}=t,s=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new r3(ar,a.shape,n.shape):new r1(at,a.shape,n.shape);return r.runWebGLProgram(s,[a,n],"float32")}},an="if (isnan(x)) return x;";function as({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:r,dtype:a}){return({inputs:n,backend:s})=>{let o,{x:i}=n,l=a||i.dtype;if(s.shouldExecuteOnCPU([i])&&null!=r){let e=r(s.texData.get(i.dataId).values,l);return s.makeTensorInfo(i.shape,l,e)}return o=(0,g.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new rK(i.shape,t):new r_(i.shape,e),s.runWebGLProgram(o,[i],l)}}function ao({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:r=!1,supportsComplex:a=!1,cpuKernelImpl:n,dtype:s}){return({inputs:o,backend:i})=>{let l,{a:u,b:p}=o;if(a&&"complex64"===u.dtype){let t=i.texData.get(u.dataId),r=i.texData.get(p.dataId),[a,n]=[[t.complexTensorInfos.real,r.complexTensorInfos.real],[t.complexTensorInfos.imag,r.complexTensorInfos.imag]].map(t=>{let[r,a]=t,n={dataId:r.dataId,dtype:r.dtype,shape:u.shape},s={dataId:a.dataId,dtype:a.dtype,shape:p.shape},o=new r1(e,u.shape,p.shape);return i.runWebGLProgram(o,[n,s],(0,to.upcastType)(r.dtype,a.dtype))}),s=r5({inputs:{real:a,imag:n},backend:i});return i.disposeIntermediateTensorInfo(a),i.disposeIntermediateTensorInfo(n),s}let c=s||(0,to.upcastType)(u.dtype,p.dtype);if(("string"===u.dtype||"string"===p.dtype||i.shouldExecuteOnCPU([u,p]))&&null!=n){let e=i.texData.get(u.dataId).values,t=i.texData.get(p.dataId).values,r="string"===u.dtype?W.fromUint8ToStringArray(e):e,a="string"===u.dtype?W.fromUint8ToStringArray(t):t,[s,o]=n(u.shape,p.shape,r,a,c),l=i.makeTensorInfo(o,c);return i.texData.get(l.dataId).values=s,l}return l=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new r3(t,u.shape,p.shape,r):new r1(e,u.shape,p.shape),i.runWebGLProgram(l,[u,p],c)}}function ai(e,t=!1){if("linear"===e)return"return x;";if("relu"===e)return t?rU:rL;if("elu"===e)return t?rW:"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return t?rj:rG;if("prelu"===e)return t?ar:at;else if("leakyrelu"===e)return t?r7:r9;else if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}class al{constructor(e,t,r,a=!1,n=!1,s=!1,o=null,i=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.enableShapeUniforms=em(this.outputShape.length);let u=Math.ceil((a?e[1]:e[2])/2),p=a?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],c=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",h="";o&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:l?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,h="result = activation(result);"),s&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let f="rc.x",m="rc.x";e[0]<t[0]?f=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(m=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${d}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${f};
        int batchB = ${m};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${a?"i * 2, rc.y":"rc.y, i * 2"});
          vec4 b = getMatrixB(batchB, ${n?"rc.z, i * 2":"i * 2, rc.z"});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${c[0]});
          result += (${p[1]} * ${c[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${s?"result += getBiasAtOutCoords();":""}

        ${h}

        setOutput(result);
      }
    `}}d("fM0z2");var W=d("4ajhx"),g=d("alePs"),eR=d("dcVMt");d("fM0z2");var W=d("4ajhx");let au={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class ap{constructor(e,t,r){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=W.assertAndGetBroadcastShape(t,r),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}let ac="return a * b;";function ad(e){let t,{inputs:r,backend:a}=e,{a:n,b:s}=r,o=W.upcastType(n.dtype,s.dtype);if("complex64"===n.dtype){let e=a.texData.get(n.dataId),t=a.texData.get(s.dataId),r=new ap(au.REAL,n.shape,s.shape),o=new ap(au.IMAG,n.shape,s.shape),i=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:n.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:n.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:s.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:s.shape}],l=a.runWebGLProgram(r,i,"float32"),u=a.runWebGLProgram(o,i,"float32"),p=r5({inputs:{real:l,imag:u},backend:a});return a.disposeIntermediateTensorInfo(l),a.disposeIntermediateTensorInfo(u),p}if(a.shouldExecuteOnCPU([n,s])){let e=a.texData.get(n.dataId),t=a.texData.get(s.dataId),[r,i]=rr(n.shape,s.shape,e.values,t.values,o),l=a.makeTensorInfo(i,o);return a.texData.get(l.dataId).values=r,l}return t=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new r3(ac,n.shape,s.shape):new r1(ac,n.shape,s.shape),a.runWebGLProgram(t,[n,s],o)}let ah={kernelName:eR.Multiply,backendName:"webgl",kernelFunc:ad};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");function af(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{shape:s}=a,o=x.sizeFromShape(n.shape),i=x.inferFromImplicitShape(s,o),l=x.sizeFromShape(i);x.assert(o===l,()=>`The new shape (${i}) has ${l} elements and the old shape (${n.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`);let u=r.texData.get(n.dataId);return!u.isPacked||_(n.shape,i)||null!==u.texture&&_(u.shape,i)?(r.incRef(n.dataId),{dataId:n.dataId,shape:i,dtype:n.dtype}):function(e,t,r){let a=[V(e.shape),...P(e.shape)],n={dtype:e.dtype,shape:a,dataId:e.dataId},s=new rM([V(t),...P(t)],a),o=r.runWebGLProgram(s,[n],e.dtype,[a],!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}(n,i,r)}let am={kernelName:eR.Reshape,backendName:"webgl",kernelFunc:af};d("fM0z2");var eR=d("dcVMt");d("fM0z2");var W=d("4ajhx"),to=d("8IARK"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx");d("fM0z2");var x=d("a9Xyg");class ag{constructor(e,t){this.variableNames=["x"];let{windowSize:r,batchSize:a,inSize:n,outSize:s}=e;this.outputShape=[a,s];let o=4*Math.floor(r/4),i=r%4,l="sumValue += dot(values, ones);";if(null!=t){let e=1/t;l=`sumValue += dot(values * ${x.isInt(e)?e.toPrecision(2):e}, ones);`}let u="";n%r>0&&(u=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${o};
        if (${1===i}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${2===i}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${3===i}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}class ax{constructor(e,t){this.variableNames=["x"];let{windowSize:r,batchSize:a,inSize:n,outSize:s}=e;this.outputShape=[a,s];let o="0.0",i="";"prod"===t?o="1.0":"min"===t?(o="1.0 / 1e-20",i="min"):"max"===t&&(o="-1.0 / 1e-20",i="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?l="sumValue":"prod"===t?l="prodValue":"all"===t?l="allValue":"any"===t&&(l="anyValue");let u=4*Math.floor(r/4),p=r%4,c=`
      if (${"sum"===t}) {
        sumValue += dot(values, ones);
      } else if (${"prod"===t}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${i}(values, minMaxValue);
        if (${"min"===t} || ${"max"===t}) {
          minMaxValue = ${i}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,d="vec4";"all"===t?(o="1.0",c=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):"any"===t&&(o="0.0",c=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let h="";n%r>0&&(h=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${u};
        if (${1===p}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${2===p}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${c}
        } else if (${3===p}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${c}
        }
        setOutput(${l});
      }
    `}}function ay(e,t,r,a){let n=function(e){let t=[];for(;0===t.length||1!==t[t.length-1].outSize;){let r=t.length?t[t.length-1].outSize:e[1],a=W.computeOptimalWindowSize(r);t.push({inSize:r,windowSize:a,outSize:Math.ceil(r/a)})}return t}(e.shape),s=e;for(let o=0;o<n.length;o++){let i,l,{inSize:u,windowSize:p,outSize:c}=n[o];i="mean"===r?0===o?new ag({windowSize:p,inSize:u,batchSize:e.shape[0],outSize:c},u):new ag({windowSize:p,inSize:u,batchSize:e.shape[0],outSize:c}):new ax({windowSize:p,inSize:u,batchSize:e.shape[0],outSize:c},r),l=s,s=a.runWebGLProgram(i,[s],t),l.dataId!==e.dataId&&a.disposeIntermediateTensorInfo(l)}return s}d("fM0z2");var g=d("alePs");class ab{constructor(e,t){this.variableNames=["A"];let r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[t[a]];this.outputShape=r,this.rank=r.length;let a=eu(this.rank),n=function(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],a=Array(t);for(let t=0;t<e.length;t++)a[e[t]]=r[t];return a.join()}(t);this.userCode=`
    void main() {
      ${a} resRC = getOutputCoords();
      setOutput(getA(${n}));
    }
    `}}class av{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[t[a]];if(this.outputShape=r,this.rank=r.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let a=eu(this.rank),n=r$("rc",this.rank),s=Array(this.rank);for(let e=0;e<t.length;e++)s[t[e]]=n[e];let o=`vec2(${s.slice(-2).join()})`,i=`++${n[this.rank-1]} < ${r[this.rank-1]}`,l=`getChannel(getA(${s.join()}), ${o})`;this.userCode=`
    void main() {
      ${a} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${i}) {
        result[1] = ${l};
      }
      --${n[this.rank-1]};
      if(++${n[this.rank-2]} < ${r[this.rank-2]}) {
        result[2] = ${l};
        if(${i}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}function aT(e,t,r){let a=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new av(e.shape,t):new ab(e.shape,t);return r.runWebGLProgram(a,[e],e.dtype)}function aw(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:s,keepDims:o}=a;return function(e,t,r,a){let n=e.shape.length,s=x.parseAxisParam(t,e.shape),o=s,i=W.getAxesPermutation(o,n),l=null!=i,u=e;l&&(u=aT(e,i,a),o=W.getInnerMostAxes(o.length,n)),W.assertAxesAreInnerMostDims("sum",o,n);let[p,c]=W.computeOutAndReduceShapes(u.shape,o),d=p;r&&(d=W.expandShapeToKeepDim(p,s));let h=x.sizeFromShape(c),f=af({inputs:{x:u},attrs:{shape:[x.sizeFromShape(e.shape)/h,h]},backend:a}),m=ay(f,(0,to.sumOutType)(e.dtype),"sum",a),g=af({inputs:{x:m},attrs:{shape:d},backend:a});return a.disposeIntermediateTensorInfo(f),a.disposeIntermediateTensorInfo(m),l&&a.disposeIntermediateTensorInfo(u),g}(n,s,o,r)}let ak={kernelName:eR.Sum,backendName:"webgl",kernelFunc:aw};d("fM0z2");var eR=d("dcVMt");function aN(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{perm:o}=n,i=Array(s.shape.length);for(let e=0;e<i.length;e++)i[e]=s.shape[o[e]];if(a.shouldExecuteOnCPU([s])){let e=rI(a.texData.get(s.dataId).values,s.shape,s.dtype,o,i);t=a.makeTensorInfo(i,s.dtype),a.texData.get(t.dataId).values=e}else t=aT(s,o,a);return t}let aS={kernelName:eR.Transpose,backendName:"webgl",kernelFunc:aN};function aE({a:e,b:t,transposeA:r,transposeB:a,backend:n,bias:s=null,preluActivationWeights:o=null,leakyreluAlpha:i=0,activation:l=null}){let u,p=e.shape.length,c=t.shape.length,d=r?e.shape[p-2]:e.shape[p-1],h=a?t.shape[c-1]:t.shape[c-2],f=r?e.shape[p-1]:e.shape[p-2],m=a?t.shape[c-2]:t.shape[c-1],g=e.shape.slice(0,-2),y=t.shape.slice(0,-2),b=x.sizeFromShape(g),v=x.sizeFromShape(y),T=rQ.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,m]);x.assert(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${r} and transposeB=${a} must match.`);let w=r?[b,d,f]:[b,f,d],k=a?[v,m,h]:[v,h,m],N=af({inputs:{x:e},backend:n,attrs:{shape:w}}),S=af({inputs:{x:t},backend:n,attrs:{shape:k}}),E=[N,S],I=Math.max(b,v),C=r?N.shape[1]:N.shape[2],$=null!=s,A=null!=o,R="leakyrelu"===l,M=null!=l?ai(l,!0):null,O=$||A||R||null!=M;if((1===f||1===m)&&C>1e3&&!1===O){let e=N,t=S;r&&(e=aN({inputs:{x:N},backend:n,attrs:{perm:[0,2,1]}}),E.push(e)),a&&(t=aN({inputs:{x:S},backend:n,attrs:{perm:[0,2,1]}}),E.push(t));let s=1!==m,o=1===m,i=e;s&&(i=af({inputs:{x:e},backend:n,attrs:{shape:[I,C,1]}}),E.push(i));let l=t;o&&(l=af({inputs:{x:t},backend:n,attrs:{shape:[I,1,C]}}),E.push(l));let p=ad({inputs:{a:i,b:l},backend:n});u=aw({inputs:{x:p},backend:n,attrs:{axis:1===m?2:1,keepDims:!0}}),E.push(p)}else{let l=(0,to.upcastType)(e.dtype,t.dtype),p=new al(w,k,[I,f,m],r,a,$,M,A,R),c=[N,S];if(null!=s&&c.push(s),A&&c.push(o),R){let e=n.makeTensorInfo([],"float32",x.createScalarValue(i,"float32"));c.push(e),E.push(e)}u=n.runWebGLProgram(p,c,l)}let V=af({inputs:{x:u},backend:n,attrs:{shape:T}});for(let e of(E.push(u),E))n.disposeIntermediateTensorInfo(e);return V}let aI={kernelName:eR._FusedMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{a:n,b:s,bias:o,preluActivationWeights:i}=t,{transposeA:l,transposeB:u,activation:p,leakyreluAlpha:c}=a;return aE({a:n,b:s,transposeA:l,transposeB:u,backend:r,bias:o,preluActivationWeights:i,leakyreluAlpha:c,activation:p})}};d("fM0z2");var eR=d("dcVMt"),g=d("alePs");let aC="return abs(x);",a$={kernelName:eR.Abs,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{x:n}=r;if(a.shouldExecuteOnCPU([n])&&"complex64"!==n.dtype){let e=rh(a.texData.get(n.dataId).values);return a.makeTensorInfo(n.shape,n.dtype,e)}return t=(0,g.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new rK(n.shape,aC):new r_(n.shape,aC),a.runWebGLProgram(t,[n],n.dtype)}};d("fM0z2");var eR=d("dcVMt");let aA=as({opSnippet:rF+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`}),aR={kernelName:eR.Acos,backendName:"webgl",kernelFunc:aA};d("fM0z2");var eR=d("dcVMt");let aM=as({opSnippet:rF+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`}),aO={kernelName:eR.Acosh,backendName:"webgl",kernelFunc:aM};d("fM0z2");var eR=d("dcVMt");let aV="return a + b;",aP=ao({opSnippet:aV,packedOpSnippet:aV,supportsComplex:!0,cpuKernelImpl:tU}),aD={kernelName:eR.Add,backendName:"webgl",kernelFunc:aP};d("fM0z2");var eR=d("dcVMt"),g=d("alePs"),to=d("8IARK");class a_{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let r=[];this.variableNames.forEach(e=>{r.push(`float v${e} = get${e}AtOutCoords();`)});let a=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        float result = ${a};
        setOutput(result);
      }
    `}}class aF{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let r=[];this.variableNames.forEach(e=>{r.push(`vec4 v${e} = get${e}AtOutCoords();`)});let a=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${r.join("\n        ")}

        vec4 result = ${a};
        setOutput(result);
      }
    `}}let az={kernelName:eR.AddN,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a}=t;if(1===r.length)return r4({inputs:{x:r[0]},backend:a});if(r.length>(0,g.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let t=Math.floor(r.length/2),n=e({inputs:r.slice(0,t),backend:a}),s=e({inputs:r.slice(t),backend:a});return e({inputs:[n,s],backend:a})}let n=r.map(e=>e.dtype).reduce((e,t)=>(0,to.upcastType)(e,t)),s=r.map(e=>e.shape),o=(0,g.env)().getBool("WEBGL_PACK")?new aF(r[0].shape,s):new a_(r[0].shape,s);return a.runWebGLProgram(o,r,n)}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx"),x=d("a9Xyg");let aL={kernelName:eR.All,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{axis:o,keepDims:i}=n,l=s.shape.length,u=x.parseAxisParam(o,s.shape),p=u,c=W.getAxesPermutation(p,l),d=s;null!=c&&(d=aN({inputs:{x:s},backend:a,attrs:{perm:c}}),p=W.getInnerMostAxes(p.length,l)),W.assertAxesAreInnerMostDims("all",p,l);let[h,f]=W.computeOutAndReduceShapes(d.shape,p),m=af({inputs:{x:d},backend:a,attrs:{shape:[-1,x.sizeFromShape(f)]}}),g=ay(m,m.dtype,"all",a);return t=i?af({inputs:{x:g},backend:a,attrs:{shape:W.expandShapeToKeepDim(h,u)}}):af({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(d),t}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx"),x=d("a9Xyg");let aG={kernelName:eR.Any,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{axis:o,keepDims:i}=n,l=s.shape.length,u=x.parseAxisParam(o,s.shape),p=u,c=W.getAxesPermutation(p,l),d=s;null!=c&&(d=aN({inputs:{x:s},backend:a,attrs:{perm:c}}),p=W.getInnerMostAxes(p.length,l)),W.assertAxesAreInnerMostDims("any",p,l);let[h,f]=W.computeOutAndReduceShapes(d.shape,p),m=af({inputs:{x:d},backend:a,attrs:{shape:[-1,x.sizeFromShape(f)]}}),g=ay(m,m.dtype,"any",a);return t=i?af({inputs:{x:g},backend:a,attrs:{shape:W.expandShapeToKeepDim(h,u)}}):af({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(d),t}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx"),g=d("alePs"),x=d("a9Xyg");class aB{constructor(e,t,r){this.variableNames=["A"];let{windowSize:a,batchSize:n,outSize:s}=e;r||this.variableNames.push("bestIndicesA"),this.outputShape=[n,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${a};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${a}; i++) {
          int inIdx = ${r?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));"};
          float candidate = getA(batch, inIdx);
          if (candidate ${"max"===t?">":"<"} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}d("fM0z2");var x=d("a9Xyg");class aW{constructor(e,t,r,a){let n,s;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,x.assert(e.length>2,()=>`Packed arg${r.charAt(0).toUpperCase()+r.slice(1)} supports only inputs with rank above 2.`);let o=Math.ceil(e[e.length-1]/t);this.outputShape=e.slice(0,-1),o>1&&this.outputShape.push(o),a||this.variableNames.push("bestIndicesA");let i=this.outputShape,l=i.length,u=eu(l),p=rA("coords",l);if(1===o){let e=eu(s=l+1);n=`
        ${e} sourceLocR = ${e}(${p.join()}, 0);
        ++${p[l-1]};
        ${e} sourceLocG = ${e}(${p.join()}, 0);
        ++${p[l-2]};
        ${e} sourceLocA = ${e}(${p.join()}, 0);
        --${p[l-1]};
        ${e} sourceLocB = ${e}(${p.join()}, 0);
        --${p[l-2]};`}else s=l,n=`
        ${u} sourceLocR = coords;
        ++${p[l-1]};
        ${u} sourceLocG = coords;
        ++${p[l-2]};
        ${u} sourceLocA = coords;
        --${p[l-1]};
        ${u} sourceLocB = coords;
        --${p[l-2]};`;let c=["x","y","z","w","u","v"].slice(0,s),d="."+c[s-1],h=c.map(e=>"int "+e),f=rA("sourceLocR",s-1).concat("inIdx.r"),m=rA("sourceLocG",s-1).concat("inIdx.g"),g=rA("sourceLocB",s-1).concat("inIdx.b"),y=rA("sourceLocA",s-1).concat("inIdx.a"),b="max"===r?"greaterThan":"lessThan",v=a?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${f.join()}),
                             getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${y.join()})));`,T=`vec4(
            getAChannel(${f.join()}),
            hasNextCol ? getAChannel(${m.join()}) : 0.,
            hasNextRow ? getAChannel(${g.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${y.join()}) : 0.)`,w=a?"":`
      float getBestIndicesAChannel(${h.join()}) {
        return getChannel(getBestIndicesA(${c.join()}),
                                          vec2(${c.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${h.join()}) {
        return getChannel(getA(${c.join()}),
                               vec2(${c.slice(-2).join()}));
      }
      ${w}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${p[l-1]} < ${i[l-1]-1};
        bool hasNextRow = ${p[l-2]} < ${i[l-2]-1};
        ${n}
        ivec4 srcIdx = ivec4(sourceLocR${d}, sourceLocG${d},
          sourceLocB${d}, sourceLocA${d}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${T};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${T};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${b}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function aU(e,t,r,a){let n=[r];if(W.assertAxesAreInnerMostDims("arg"+a.charAt(0).toUpperCase()+a.slice(1),n,t.shape.length),!(0,g.env)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let r=[],s=e.texData.get(t.dataId),o=null!==s&&s.isPacked,i=t;o&&r.push(i=e.unpackTensor(t));let[l,u]=W.computeOutAndReduceShapes(i.shape,n),p=af({inputs:{x:i},backend:e,attrs:{shape:[-1,x.sizeFromShape(u)]}});r.push(p);let c=function e(t,r,a,n=null){let s=r.shape[0],o=r.shape[1];null!=n&&(s=n.shape[0],o=n.shape[1]);let i=W.computeOptimalWindowSize(o),l=new aB({windowSize:i,inSize:o,batchSize:s,outSize:Math.ceil(o/i)},a,null==n),u=[r];null!=n&&u.push(n);let p=t.runWebGLProgram(l,u,"int32");if(1===p.shape[1])return p;let c=e(t,r,a,p);return t.disposeIntermediateTensorInfo(p),c}(e,p,a);r.push(c);let d=af({inputs:{x:c},backend:e,attrs:{shape:l}});return r.forEach(t=>e.disposeIntermediateTensorInfo(t)),d}return function e(t,r,a,n=null){let s=null!=n?n.shape:r.shape,o=s[s.length-1],i=new aW(s,W.computeOptimalWindowSize(o),a,null==n),l=null==n?[r]:[r,n],u=t.runWebGLProgram(i,l,"int32");if(u.shape.length===r.shape.length){let n=e(t,r,a,u);return t.disposeIntermediateTensorInfo(u),n}return u}(e,t,a)}let aj={kernelName:eR.ArgMax,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:s}=a,o=x.parseAxisParam(s,n.shape),i=W.getAxesPermutation(o,n.shape.length),l=n,u=[];null!=i&&(u.push(l=aN({inputs:{x:n},backend:r,attrs:{perm:i}})),o=W.getInnerMostAxes(o.length,l.shape.length)),W.assertAxesAreInnerMostDims("argMax",[o[0]],l.shape.length);let p=aU(r,l,o[0],"max");return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),p}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx"),x=d("a9Xyg");let aK={kernelName:eR.ArgMin,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:s}=a,o=x.parseAxisParam(s,n.shape),i=W.getAxesPermutation(o,n.shape.length),l=n,u=[];null!=i&&(u.push(l=aN({inputs:{x:n},backend:r,attrs:{perm:i}})),o=W.getInnerMostAxes(o.length,l.shape.length)),W.assertAxesAreInnerMostDims("argMin",[o[0]],l.shape.length);let p=aU(r,l,o[0],"min");return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),p}};d("fM0z2");var eR=d("dcVMt");let aq=as({opSnippet:rF+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`}),aH={kernelName:eR.Asin,backendName:"webgl",kernelFunc:aq};d("fM0z2");var eR=d("dcVMt");let aX=as({opSnippet:rF+"return log(x + sqrt(x * x + 1.0));"}),aJ={kernelName:eR.Asinh,backendName:"webgl",kernelFunc:aX};d("fM0z2");var eR=d("dcVMt");let aY=as({opSnippet:rF+`
  return atan(x);
`}),aZ={kernelName:eR.Atan,backendName:"webgl",kernelFunc:aY};d("fM0z2");var eR=d("dcVMt");let aQ=ao({opSnippet:r0+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+r2+`
  return result;
`}),a0={kernelName:eR.Atan2,backendName:"webgl",kernelFunc:aQ};d("fM0z2");var eR=d("dcVMt");let a1=as({opSnippet:rF+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`}),a2={kernelName:eR.Atanh,backendName:"webgl",kernelFunc:a1};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx"),x=d("a9Xyg");class a3{constructor(e,t,r,a=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");let s=e.filterWidth,o=e.strideHeight,i=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,p=e.effectiveFilterHeight,c=e.effectiveFilterWidth,d=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;let f="avg"===t,m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,x="0.0";if(f||(x="-1.0 / 1e-20"),r){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${i});
        const ivec2 pads = ivec2(${d}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${c};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${a?n?m:g:`wR * ${c} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let y=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(y="avgValue / max(count, 1.0)");let b=4*Math.floor(s/4),v=s%4,T=`
      if (${f}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${i});
      const ivec2 pads = ivec2(${d}, ${h});
      const float initializationValue = ${x};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${x});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${b}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${T}
          }

          int xC = xCCorner + ${b};
          if (${1===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${2===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${T}
          } else if (${3===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${T}
          }
        }
        setOutput(${y});
      }
    `}}class a4{constructor(e,t,r,a=!1,n=!1){if(this.variableNames=["x"],"avg"===t&&r)throw Error("Cannot compute positions for average pool.");let s=e.filterWidth,o=e.strideDepth,i=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,p=e.dilationHeight,c=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,m=e.padInfo.front,g=e.padInfo.top,x=e.padInfo.left;this.outputShape=e.outShape;let y="avg"===t,b="0.0";if(y||(b="-1.0 / 1e-20"),r){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${i}, ${l});
        const ivec3 pads = ivec3(${m}, ${g}, ${x});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${d};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${f};
                  wC += ${c}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${a?n?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +
                      wR * ${f} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(v="avgValue / max(count, 1.0)");let T=4*Math.floor(s/4),w=s%4,k=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${i}, ${l});
      const ivec3 pads = ivec3(${m}, ${g}, ${x});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${T}; wC += 4) {
              int xC = xCCorner + wC * ${c};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                getValue(batch, xD, xR, xC + 3 * ${c}, ch)
              );

              ${k}
            }

            int xC = xCCorner + ${T};
            if (${1===w}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${2===w}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                initializationValue,
                initializationValue
              );

              ${k}
            } else if (${3===w}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${c}, ch),
                getValue(batch, xD, xR, xC + 2 * ${c}, ch),
                initializationValue
              );

              ${k}
            }
          }
        }
        setOutput(${v});
      }
    `}}let a6={kernelName:eR.AvgPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;G(n,"avgPool");let{filterSize:s,strides:o,pad:i,dimRoundingMode:l}=a;x.assert(W.eitherStridesOrDilationsAreOne(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let u=W.computePool2DInfo(n.shape,s,o,1,i,l);if(1===u.filterWidth&&1===u.filterHeight&&x.arraysEqual(u.inShape,u.outShape))return r4({inputs:{x:n},backend:r});let p=new a3(u,"avg",!1);return r.runWebGLProgram(p,[n],"float32")}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx");let a5={kernelName:eR.AvgPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{filterSize:s,strides:o,pad:i,dimRoundingMode:l,dataFormat:u}=a,p=new a4(W.computePool3DInfo(n.shape,s,o,[1,1,1],i,l,u),"avg",!1);return r.runWebGLProgram(p,[n],"float32")}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx");class a8{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=i-1-e.padInfo.top,p=l-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${u}, ${p});
      const float avgMultiplier = float(${1/(t*r)});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
            wR += ${s}) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class a9{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,p=e.effectiveFilterDepth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,h=p-1-e.padInfo.front,f=c-1-e.padInfo.top,m=d-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${f}, ${m});
      const float avgMultiplier = float(${1/(t*r*a)});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let a7={kernelName:eR.AvgPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:s}=t,{filterSize:o,strides:i,pad:l,dimRoundingMode:u}=a,p=new a9(W.computePool3DInfo(s.shape,o,i,[1,1,1],l,u));return r.runWebGLProgram(p,[n],s.dtype)}};d("fM0z2");var eR=d("dcVMt"),W=d("4ajhx");let ne={kernelName:eR.AvgPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:s}=t;G([n,s],"avgPoolGrad");let{filterSize:o,strides:i,pad:l}=a,u=new a8(W.computePool2DInfo(s.shape,o,i,1,l));return r.runWebGLProgram(u,[n],s.dtype)}};d("fM0z2");var eR=d("dcVMt");let nt={kernelName:eR.BatchMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{a:n,b:s}=t,{transposeA:o,transposeB:i}=a;return aE({a:n,b:s,transposeA:o,transposeB:i,backend:r})}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx");class nr{constructor(e,t,r,a,n,s){this.outputShape=[],this.variableNames=["x","mean","variance"],W.assertAndGetBroadcastShape(e,t),W.assertAndGetBroadcastShape(e,r);let o="0.0";null!=a&&(W.assertAndGetBroadcastShape(e,a),this.variableNames.push("offset"),o="getOffsetAtOutCoords()");let i="1.0";null!=n&&(W.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${i};
        float inv = scale * inversesqrt(variance + float(${s}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}d("fM0z2");var W=d("4ajhx");class na{constructor(e,t,r,a,n,s){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],W.assertAndGetBroadcastShape(e,t),W.assertAndGetBroadcastShape(e,r);let o="vec4(0.0)";null!=a&&(W.assertAndGetBroadcastShape(e,a),this.variableNames.push("offset"),o="getOffsetAtOutCoords()");let i="vec4(1.0)";null!=n&&(W.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale"),i="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${i};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${s}));

        setOutput((x - mean) * inv + offset);
      }
    `}}let nn={kernelName:eR.FusedBatchNorm,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:a,mean:n,variance:s,offset:o,scale:i}=e;x.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),x.assert(null==o||n.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),x.assert(null==i||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=r;null==l&&(l=.001);let u=[a,n,s],p=null;null!=o&&(p=o.shape,u.push(o));let c=null;null!=i&&(c=i.shape,u.push(i));let d=(0,g.env)().getBool("WEBGL_PACK_NORMALIZATION")?new na(a.shape,n.shape,s.shape,p,c,l):new nr(a.shape,n.shape,s.shape,p,c,l);return t.runWebGLProgram(d,u,u[0].dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),tS=d("2vt64"),x=d("a9Xyg");class ns{constructor(e){let t;this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let r=eu(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let a=function(e){if(1===e)return"sourceLoc";if(e<=6)return no.slice(0,e).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank),n=e.map((e,t)=>`sourceLoc.${no[t]} = start[${t}] + coords.${no[t]};`);t=`
        ${r} sourceLoc;
        ${r} coords = getOutputCoords();
        ${n.join("\n")}
      `,this.userCode=`
      void main() {
        ${t}
        setOutput(getSource(${a}));
      }
    `}}let no=["x","y","z","w","u","v"];class ni{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=eu(this.rank),r=rA("coords",this.rank),a=rA("sourceLoc",this.rank),n=1===this.rank?"sourceLoc":`vec2(${a.slice(-2).join()})`,s=`getChannel(getSource(${a.join()}), ${n})`,o=`
      result.x = ${s};
      if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
        ++${a[this.rank-1]};
        result.y = ${s};
        --${a[this.rank-1]};
      }
    `,i=1===this.rank?"":`
      --${r[this.rank-1]};
      if (++${r[this.rank-2]} < ${e[this.rank-2]}) {
        ++${a[this.rank-2]};
        result.z = ${s};
        if (++${r[this.rank-1]} < ${e[this.rank-1]}) {
          ++${a[this.rank-1]};
          result.w = ${s};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${a[t]} = ${r[t]} + start[${t}];`).join("\n");this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${o}
        ${i}
        setOutput(result);
      }
    `}}function nl(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{begin:s,size:o}=a,[i,l]=tS.parseSliceParams(n,s,o);if(tS.assertParamsValid(n,i,l),0===x.sizeFromShape(l))return r.makeTensorInfo(l,n.dtype,[]);if(r.shouldExecuteOnCPU([n])||"string"===n.dtype){let e=rf(r.texData.get(n.dataId).values,i,l,n.shape,n.dtype);return r.makeTensorInfo(l,n.dtype,e)}let{isPacked:u}=r.texData.get(n.dataId),p=tS.isSliceContinous(n.shape,i,l);if(u||!p){let e=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ni(l):new ns(l),t=[i];return r.runWebGLProgram(e,[n],n.dtype,t)}return r.uploadToGPU(n.dataId),function(e,t,r,a){let n=a.texData.get(e.dataId),s=a.makeTensorInfo(r,e.dtype),o=a.texData.get(s.dataId);Object.assign(o,n),o.refCount=1,o.shape=r,o.dtype=e.dtype;let i=tS.computeFlatOffset(t,x.computeStrides(e.shape));n.slice&&(i+=n.slice.flatOffset),o.slice={flatOffset:i,origDataId:n.slice&&n.slice.origDataId||e.dataId};let l=a.dataRefCount.get(o.slice.origDataId)||1;return a.dataRefCount.set(o.slice.origDataId,l+1),s}(n,i,l,r)}let nu={kernelName:eR.Slice,backendName:"webgl",kernelFunc:nl},np={kernelName:eR.BatchToSpaceND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockShape:s,crops:o}=a;x.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let i=s.reduce((e,t)=>e*t),l=W.getReshaped(n.shape,s,i),u=W.getPermuted(l.length,s.length),p=W.getReshapedPermuted(n.shape,s,i),c=W.getSliceBeginCoords(o,s.length),d=W.getSliceSize(p,o,s.length),h=[],f=af({inputs:{x:n},backend:r,attrs:{shape:l}}),m=aN({inputs:{x:f},backend:r,attrs:{perm:u}}),g=af({inputs:{x:m},backend:r,attrs:{shape:p}}),y=nl({inputs:{x:g},backend:r,attrs:{begin:c,size:d}});return h.push(f),h.push(m),h.push(g),h.forEach(e=>r.disposeIntermediateTensorInfo(e)),y}};d("fM0z2");var eR=d("dcVMt");let nc={kernelName:eR.Bincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,weights:s}=t,{size:o}=a,i=tj(r.readSync(n.dataId),r.readSync(s.dataId),s.dtype,s.shape,o);return r.makeTensorInfo([o],s.dtype,i)}};d("fM0z2");var eR=d("dcVMt"),g=d("alePs");let nd=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,nh=`
  return float(int(a.r) & int(b.r));
`,nf={kernelName:eR.BitwiseAnd,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{a:n,b:s}=r,o=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=(0,g.env)().getNumber("WEBGL_VERSION");if(a.shouldExecuteOnCPU([n,s])||1===i){let e=a.texData.get(n.dataId).values,t=a.texData.get(s.dataId).values,[r,o]=tq(n.shape,s.shape,e,t,n.dtype),i=a.makeTensorInfo(o,n.dtype);return a.texData.get(i.dataId).values=r,i}return t=o?new r3(nd,n.shape,s.shape,!1):new r1(nh,n.shape,s.shape),a.runWebGLProgram(t,[n,s],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let nm={kernelName:eR.BroadcastArgs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{s0:a,s1:n}=t,s=r.readSync(a.dataId),o=r.readSync(n.dataId),i=W.assertAndGetBroadcastShape(Array.from(s),Array.from(o));return r.makeTensorInfo([i.length],"int32",Int32Array.from(i))}};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg"),ng=d("lCbVL");d("fM0z2");var eR=d("dcVMt");let nx=ao({opSnippet:"return float(a != b);",cpuKernelImpl:rn,dtype:"bool"}),ny={kernelName:eR.NotEqual,backendName:"webgl",kernelFunc:nx};d("fM0z2");var eR=d("dcVMt");function nb(e){let{inputs:t,backend:r}=e,{input:a}=t;return r4({inputs:{x:r.texData.get(a.dataId).complexTensorInfos.real},backend:r})}let nv={kernelName:eR.Real,backendName:"webgl",kernelFunc:nb},nT={kernelName:eR.Cast,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a,attrs:n}=t,{x:s}=r,{dtype:o}=n;if("complex64"===o){if("complex64"===s.dtype)return r4({inputs:{x:s},backend:a});let t=ng.zeros(s.shape),r=e({inputs:{x:s},backend:a,attrs:{dtype:"float32"}}),n=r5({inputs:{real:r,imag:t},backend:a});return t.dispose(),a.disposeIntermediateTensorInfo(r),n}if("complex64"===s.dtype){let t=nb({inputs:{input:s},backend:a}),r=e({inputs:{x:t},backend:a,attrs:{dtype:o}});return a.disposeIntermediateTensorInfo(t),r}if(!x.hasEncodingLoss(s.dtype,o)){let e=r4({inputs:{x:s},backend:a});return{dataId:e.dataId,shape:e.shape,dtype:o}}if(a.shouldExecuteOnCPU([s])){let[e,t,r]=tH(a.texData.get(s.dataId).values,s.shape,s.dtype,o);return a.makeTensorInfo(e,t,r)}if("int32"===o){let e=new r_(s.shape,"return float(int(x));"),t=a.runWebGLProgram(e,[s],"int32");return{dataId:t.dataId,shape:t.shape,dtype:t.dtype}}if("bool"===o){let e=a.makeTensorInfo([],"bool",x.getTypedArrayFromDType("bool",1)),t=nx({inputs:{a:s,b:e},backend:a});return a.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${s.dtype} to ${o}`)}};d("fM0z2");var eR=d("dcVMt");let nw="return ceil(x);",nk=as({opSnippet:nw,packedOpSnippet:nw,cpuKernelImpl:tX}),nN={kernelName:eR.Ceil,backendName:"webgl",kernelFunc:nk};d("fM0z2");var eR=d("dcVMt"),g=d("alePs");class nS{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class nE{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}let nI={kernelName:eR.ClipByValue,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{clipValueMin:o,clipValueMax:i}=n;return t=(0,g.env)().getBool("WEBGL_PACK_CLIP")?new nE(s.shape):new nS(s.shape),a.runWebGLProgram(t,[s],s.dtype,[[o],[i]])}};d("fM0z2");var eR=d("dcVMt");class nC{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function n$(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let nA={kernelName:eR.ComplexAbs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a}=t,n=r.texData.get(a.dataId),s=new nC(a.shape),o=[n$(a,n.complexTensorInfos.real),n$(a,n.complexTensorInfos.imag)];return r.runWebGLProgram(s,o,o[0].dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx"),g=d("alePs"),x=d("a9Xyg");d("fM0z2");var W=d("4ajhx");class nR{constructor(e){this.outputShape=[],this.outputShape=W.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let r=1;r<t.length;r++)t[r]=t[r-1]+e[r][1];let r=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let a=t[e-1];r.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${a}));`)}let a=t.length,n=t[t.length-1];r.push(`else setOutput(getT${a}(yR, yC-${n}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${r.join("\n        ")}
      }
    `}}d("fM0z2");var W=d("4ajhx");class nM{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=W.computeOutShape(e,t);let r=this.outputShape,a=r.length,n=eu(a),s=rA("coords",a),o=["x","y","z","w","u","v"].slice(0,a);this.variableNames=e.map((e,t)=>`T${t}`);let i=Array(e.length-1);i[0]=e[0][t];for(let r=1;r<i.length;r++)i[r]=i[r-1]+e[r][t];let l=o[t],u=o.slice(-2),p=o.join(),c=`if (${l} < ${i[0]}) {
        return getChannel(
            getT0(${p}), vec2(${u.join()}));
        }`;for(let e=1;e<i.length;e++){let t=i[e-1];c+=`
        if (${l} < ${i[e]}  && ${l} >= ${i[e-1]}) {
          return getChannel(
            getT${e}(${nO(o,l,t)}),
            vec2(${nO(u,l,t)}));
        }`}let d=i.length,h=i[i.length-1];c+=`
        return getChannel(
          getT${d}(${nO(o,l,h)}),
          vec2(${nO(u,l,h)}));`,this.userCode=`
      float getValue(${o.map(e=>"int "+e)}) {
        ${c}
      }

      void main() {
        ${n} coords = getOutputCoords();
        vec4 result = vec4(getValue(${s}), 0., 0., 0.);

        ${s[a-1]} = ${s[a-1]} + 1;
        if (${s[a-1]} < ${r[a-1]}) {
          result.g = getValue(${s});
        }

        ${s[a-2]} = ${s[a-2]} + 1;
        if (${s[a-2]} < ${r[a-2]}) {
          result.a = getValue(${s});
        }

        ${s[a-1]} = ${s[a-1]} - 1;
        if (${s[a-2]} < ${r[a-2]} &&
            ${s[a-1]} < ${r[a-1]}) {
          result.b = getValue(${s});
        }
        setOutput(result);
      }
    `}}function nO(e,t,r){let a=e.indexOf(t);return e.map((e,t)=>t===a?`${e} - ${r}`:e).join()}d("fM0z2");var eR=d("dcVMt");function nV(e){let{inputs:t,backend:r}=e,{input:a}=t;return r4({inputs:{x:r.texData.get(a.dataId).complexTensorInfos.imag},backend:r})}let nP={kernelName:eR.Imag,backendName:"webgl",kernelFunc:nV};function nD(e){let{inputs:t,backend:r,attrs:a}=e,{axis:n}=a,s=x.parseAxisParam(n,t[0].shape)[0],o=t.map(e=>e.shape);W.assertParamsConsistent(o,s);let i=W.computeOutShape(t.map(e=>e.shape),s);if(0===x.sizeFromShape(i))return r.makeTensorInfo(i,t[0].dtype,[]);let l=t.filter(e=>x.sizeFromShape(e.shape)>0);return 1===l.length?r4({inputs:{x:l[0]},backend:r}):function e(t,r,a){let n=t[0].dtype;if("complex64"===n){let n=t.map(e=>nb({inputs:{input:e},backend:a})),s=t.map(e=>nV({inputs:{input:e},backend:a})),o=e(n,r,a),i=e(s,r,a),l=r5({inputs:{real:o,imag:i},backend:a});return n.forEach(e=>a.disposeIntermediateTensorInfo(e)),s.forEach(e=>a.disposeIntermediateTensorInfo(e)),a.disposeIntermediateTensorInfo(o),a.disposeIntermediateTensorInfo(i),l}let s=a.shouldExecuteOnCPU(t);if("string"===n&&(s=!0),s){let e=t.map(e=>{let t=x.sizeFromShape(e.shape.slice(r));return af({inputs:{x:e},backend:a,attrs:{shape:[-1,t]}})}),s=e.map(e=>({vals:a.readSync(e.dataId),shape:e.shape})),o=tJ(s,W.computeOutShape(e.map(e=>e.shape),1),n,1===e[0].shape[0]),i=W.computeOutShape(t.map(e=>e.shape),r),l=a.makeTensorInfo(i,n,o);return e.forEach(e=>a.disposeIntermediateTensorInfo(e)),l}let o=t.filter(e=>x.sizeFromShape(e.shape)>0),i=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&o[0].shape.length>1;if(1===o.length){let e=i?new r_(t[0].shape,rB):new rK(t[0].shape,rB);return a.runWebGLProgram(e,t,n)}let l=(0,g.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(o.length>l){let t=[];for(let n=0;n<o.length;n+=l){let s=o.slice(n,n+l);t.push(e(s,r,a))}let n=e(t,r,a);for(let e of t)a.disposeIntermediateTensorInfo(e);return n}if(i){let e=new nM(o.map(e=>e.shape),r);return a.runWebGLProgram(e,o,n)}let{tensors2D:u,outShape:p}=function(e,t,r){let a=W.computeOutShape(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>af({inputs:{x:e},attrs:{shape:[-1,x.sizeFromShape(e.shape.slice(t))]},backend:r})),outShape:a}}(o,r,a),c=new nR(u.map(e=>e.shape)),d=a.runWebGLProgram(c,u,n);u.forEach(e=>a.disposeIntermediateTensorInfo(e));let h=af({inputs:{x:d},attrs:{shape:p},backend:a});return a.disposeIntermediateTensorInfo(d),h}(l,s,r)}let n_={kernelName:eR.Concat,backendName:"webgl",kernelFunc:nD};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),g=d("alePs");class nF{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let s=e.padInfo.top,o=e.padInfo.left,i=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,p=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,m="channelsLast"===e.dataFormat,g="",x="";r&&(g=a?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,x="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${g}

      const ivec2 strides = ivec2(${i}, ${l});
      const ivec2 pads = ivec2(${s}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${m?3:1}];

        ivec2 xRCCorner =
            ivec2(coords[${m?1:2}], coords[${m?2:3}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${m}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${1===f}) {

              if (${m}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${2===f}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${m}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${3===f}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${m}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${x}
        setOutput(result);
      }
    `}}class nz{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,r=e.padInfo.top,a=e.padInfo.left,n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,p=e.filterDepth,c=e.filterHeight,d=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${n}, ${s}, ${o});
      const ivec3 pads = ivec3(${t}, ${r}, ${a});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${i};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${c}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${1===f}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${2===f}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${3===f}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}d("fM0z2");var x=d("a9Xyg");class nL{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=em(this.outputShape.length);let s=e.padInfo.left,o=e.strideWidth,i=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,p=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)p+=`
           vec4 xTexelC${2*e};
           int xTexelC${2*e}Ready;
           vec4 xTexelC${2*e+1};
           int xTexelC${2*e+1}Ready;
           vec4 xC${e};`;p+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<u;e++)p+=`
           xTexelC${2*e} = vec4(0.0);
           xTexelC${2*e}Ready = 0;
           xTexelC${2*e+1} = vec4(0.0);
           xTexelC${2*e+1}Ready = 0;
           xC${e} = vec4(0.0);`;p+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let r=2*t;if(p+=`
           xC = xCCorner + ${r*i};
           `,1===o){if(r<u&&(s%2==1?(p+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }
               `,1===i&&r>0?p+=`
                 xC${r} = vec4(xTexelC${r-2}.zw, xTexelC${r}.xy);
                 `:p+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${r} = vec4(previous.zw, xTexelC${r}.xy);
                   } else {
                     xC${r} = vec4(0.0, 0.0, xTexelC${r}.xy);
                   }
                   `):p+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xC${r} = xTexelC${r};
                 `,r+1<u)){let e=s%2==0?x.nearestLargerEven(i):i;i%2==0&&s%2==1||i%2!=0&&s%2!=1?(p+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                     xTexelC${r+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${r+1}.zw = vec2(0.0);
                     }
                     xTexelC${r+1}Ready = 1;
                   }
                   `,i>1?p+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${r+1} = vec4(previous.zw, xTexelC${r+1}.xy);
                     } else {
                      xC${r+1} = vec4(0.0, 0.0, xTexelC${r+1}.xy);
                     }
                     `:p+=`
                     xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.xy);
                     `):1===e?p+=`
                     xC${r+1} = xTexelC${r};
                     `:p+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                       xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${r+1}.zw = vec2(0.0);
                       }
                       xTexelC${r+1}Ready = 1;
                     }

                     xC${r+1} = xTexelC${r+1};
                     `}}else r<u&&(s%2==1?(p+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.0);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
               `,r+1<u&&(p+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${r+1} = vec4(xTexelC${r+1}.xy, final.xy);
                 `)):(p+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${r}Ready == 0) {
                   xTexelC${r} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${r}.zw = vec2(0.0);
                   }
                   xTexelC${r}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${r+1}Ready == 0) {
                   xTexelC${r+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${r+1}.zw = vec2(0.);
                   }
                   xTexelC${r+1}Ready = 1;
                 }

                 xC${r} = vec4(
                   xTexelC${r}.xy, xTexelC${r+1}.xy);
               `,r+1<u&&(p+=`
                   xC${r+1} = vec4(xTexelC${r}.zw, xTexelC${r+1}.zw);
                 `)));r<u&&(p+=`
             wTexel = getW(r, ${r}, d1, d2);
             dotProd += xC${r}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${r}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,r+1<u&&(p+=`
               wTexel = getW(r, ${r+1}, d1, d2);
               dotProd += xC${r+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${r+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}p+=`
     }
   
     }
   
     }
   `;let c="",d="";r&&(c=a?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${r}
         }`:n?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${r}
         }`:`vec4 activation(vec4 x) {
           ${r}
         }`,d="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${c}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${p}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${t?"result += getBiasAtOutCoords();":""}
         ${d}
         setOutput(result);
       }
     `}}d("fM0z2");var x=d("a9Xyg");class nG{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=em(this.outputShape.length);let{dataFormat:r}=t,a=X(),n="channelsLast"===r,s=n?1:2,o=n?2:3,i=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,l="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)l+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${i}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${s}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${n}) {
                  innerDims = vec2(d1, ch);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${a.output} = result;
      }
    `}}function nB(e,t){let r=e.length;return r>=3?t?[...e.slice(0,-3),e[r-3]*e[r-2],e[r-1]]:[...e.slice(0,-3),e[r-3],e[r-2]*e[r-1]]:!t&&1===r&&e[0]>1?[e[0],1]:null}function nW({x:e,filter:t,convInfo:r,backend:a,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:i=null}){let l,u=e.shape,p=a.texData.get(e.dataId),c=r.inChannels,d=u[0]*u[1]*u[2],h=r.outChannels,f="channelsLast"===r.dataFormat,m=[];if(null!=s){let e=nB(s.shape,f);null!=e&&(s=af({inputs:{x:s},backend:a,attrs:{shape:e}}),m.push(s))}if(null!=n){let e=nB(n.shape,f);null!=e&&(n=af({inputs:{x:n},backend:a,attrs:{shape:e}}),m.push(n))}if(!((1===d||1===h)&&c>1e3)&&p.isPacked&&f&&null!=p.texture&&u[2]%2!=0&&x.arraysEqual(p.shape.slice(-3),u.slice(-3))){let c=u[0]*u[1]*(u[2]+1),d={dataId:e.dataId,shape:[1,c,r.inChannels],dtype:e.dtype},h=p.shape;p.shape=p.shape.slice(),p.shape[p.shape.length-2]++,x.assert(_(p.shape,d.shape),()=>`packed reshape ${p.shape} to ${d.shape} isn't free`);let f=af({inputs:{x:t},backend:a,attrs:{shape:[1,r.inChannels,r.outChannels]}});m.push(f);let g=aE({a:d,b:f,backend:a,transposeA:!1,transposeB:!1,bias:n,activation:i,preluActivationWeights:s,leakyreluAlpha:o}),y=a.texData.get(g.dataId);x.assert(y.isPacked,()=>"batchMatMul result is expected to be packed"),p.shape=h,y.shape=r.outShape,(l=r4({inputs:{x:g},backend:a})).shape=r.outShape,m.push(g)}else{let u=r.outHeight*r.outWidth,p=af({inputs:{x:e},backend:a,attrs:{shape:f?[r.batchSize,u,r.inChannels]:[r.batchSize,r.inChannels,u]}}),c=af({inputs:{x:t},backend:a,attrs:{shape:[1,r.inChannels,r.outChannels]}}),d=aE({a:f?p:c,b:f?c:p,transposeA:!f,transposeB:!1,backend:a,bias:n,activation:i,preluActivationWeights:s,leakyreluAlpha:o});l=af({inputs:{x:d},backend:a,attrs:{shape:r.outShape}}),m.push(p),m.push(c),m.push(d)}for(let e of m)a.disposeIntermediateTensorInfo(e);return l}function nU({x:e,filter:t,convInfo:r,backend:a,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:i=null}){let{filterWidth:l,filterHeight:u,inChannels:p,outWidth:c,outHeight:d,dataFormat:h}=r,f="channelsLast"===h,m=l*u*p,g=d*c,y=[r.batchSize,m,g],b=[];if(null!=s){let e=nB(s.shape,f);null!=e&&(s=af({inputs:{x:s},backend:a,attrs:{shape:e}}),b.push(s))}if(null!=n){let e=nB(n.shape,f);null!=e&&(n=af({inputs:{x:n},backend:a,attrs:{shape:e}}),b.push(n))}let v=af({inputs:{x:t},backend:a,attrs:{shape:[1,m,x.sizeFromShape(t.shape)/m]}});b.push(v);let T=new nG(y,r),w=[e.shape,[r.padInfo.top,r.padInfo.left],[r.strideHeight,r.strideWidth],[r.dilationHeight,r.dilationWidth],[r.inChannels],[r.filterWidth*r.inChannels],[r.outWidth]],k=a.runWebGLProgram(T,[e],"float32",w),N=af({inputs:{x:k},backend:a,attrs:{shape:y}});b.push(k),b.push(N);let S=null!=n,E=null!=s,I="leakyrelu"===i,C=i?ai(i,!0):null,$=new al(f?N.shape:v.shape,f?v.shape:N.shape,f?[r.batchSize,g,r.outChannels]:[r.batchSize,r.outChannels,g],!0,!1,S,C,E,I),A=f?[N,v]:[v,N];if(n&&A.push(n),E&&A.push(s),I){let e=a.makeTensorInfo([],"float32",x.createScalarValue(o,"float32"));A.push(e),b.push(e)}let R=a.runWebGLProgram($,A,"float32"),M=af({inputs:{x:R},backend:a,attrs:{shape:r.outShape}});for(let e of(b.push(R),b))a.disposeIntermediateTensorInfo(e);return M}let nj={kernelName:eR.Conv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s,filter:o}=r,{strides:i,pad:l,dataFormat:u,dilations:p,dimRoundingMode:c}=n,d=W.convertConv2DDataFormat(u),h=W.computeConv2DInfo(s.shape,o.shape,i,p,l,c,!1,d);if(1===h.filterHeight&&1===h.filterWidth&&1===h.dilationHeight&&1===h.dilationWidth&&1===h.strideHeight&&1===h.strideWidth&&("SAME"===h.padInfo.type||"VALID"===h.padInfo.type))t=nW({x:s,filter:o,convInfo:h,backend:a});else if(h.strideWidth<=2&&"channelsLast"===d&&(0,g.env)().getBool("WEBGL_EXP_CONV")){let e=new nL(h),r=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];t=a.runWebGLProgram(e,[s,o],"float32",r)}else if((0,g.env)().getBool("WEBGL_CONV_IM2COL"))t=nU({x:s,filter:o,convInfo:h,backend:a});else{let e=new nF(h);t=a.runWebGLProgram(e,[s,o],"float32")}let f=af({inputs:{x:t},backend:a,attrs:{shape:h.outShape}});return a.disposeIntermediateTensorInfo(t),f}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");class nK{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,n=e.padInfo.left,s="channelsLast"===e.dataFormat;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${s?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class nq{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,s="channelsLast"===e.dataFormat,o=t-1-e.padInfo.top,i=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${s?3:1}];

        ivec2 dyCorner = ivec2(coords[${s?1:2}], coords[${s?2:3}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${s}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class nH{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,n=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${n};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${r} - ${s};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${a} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class nX{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,r=e.filterHeight,a=e.filterWidth,n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.front,l=r-1-e.padInfo.top,u=a-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${i}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${n}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${r}; wR++) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${r} - 1 - wR;

            for (int wC = 0; wC < ${a}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${a} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let nJ={kernelName:eR.Conv2DBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:s}=t,{strides:o,pad:i,dataFormat:l,dimRoundingMode:u,filterShape:p}=a,c=W.convertConv2DDataFormat(l),d=new nK(W.computeConv2DInfo(n.shape,p,o,1,i,u,!1,c));return r.runWebGLProgram(d,[n,s],"float32")}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),g=d("alePs");class nY{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=em(this.outputShape.length);let t=e.filterHeight,r=e.filterWidth,a=t-1-e.padInfo.top,n=r-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${n});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            int wCPerm = ${r} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}let nZ={kernelName:eR.Conv2DBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:s}=t,{inputShape:o,strides:i,pad:l,dataFormat:u,dimRoundingMode:p}=a,c=W.convertConv2DDataFormat(u),d=W.computeConv2DInfo(o,s.shape,i,1,l,p,!1,c);if((0,g.env)().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&"channelsLast"===c){let e=[[d.strideHeight,d.strideWidth]],t=new nY(d);return r.runWebGLProgram(t,[n,s],"float32",e)}{let e=new nq(d);return r.runWebGLProgram(e,[n,s],"float32")}}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let nQ={kernelName:eR.Conv3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,filter:s}=t,{strides:o,pad:i,dilations:l}=a,u=new nz(W.computeConv3DInfo(n.shape,s.shape,o,l,i));return r.runWebGLProgram(u,[n,s],"float32")}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let n0={kernelName:eR.Conv3DBackpropFilterV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:s}=t,{strides:o,pad:i,filterShape:l}=a,u=new nH(W.computeConv3DInfo(n.shape,l,o,1,i));return r.runWebGLProgram(u,[n,s],"float32")}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let n1={kernelName:eR.Conv3DBackpropInputV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:s}=t,{pad:o,strides:i,inputShape:l}=a,u=new nX(W.computeConv3DInfo(l,s.shape,i,1,o));return r.runWebGLProgram(u,[n,s],"float32")}};d("fM0z2");var eR=d("dcVMt");let n2=as({opSnippet:an+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${r2}
  return result;
`}),n3={kernelName:eR.Cos,backendName:"webgl",kernelFunc:n2};d("fM0z2");var eR=d("dcVMt");let n4=as({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),n6={kernelName:eR.Cosh,backendName:"webgl",kernelFunc:n4};d("fM0z2");var eR=d("dcVMt");class n5{constructor(e,t,r,a,n){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[s,o,i,l]=e,[u]=t,[p,c]=r;this.outputShape=[u,p,c,l];let[d,h]=[`${o-1}.0`,`${i-1}.0`],[f,m,g]=p>1?[`${(o-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${d} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${d}`],[x,y,b]=c>1?[`${(i-1)/(c-1)}`,"(x2-x1) * width_ratio",`x1*${h} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${h}`];this.userCode=`
      const float height_ratio = float(${f});
      const float width_ratio = float(${x});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${s}) {
          return;
        }

        float height_scale = ${m};
        float width_scale = ${y};

        float in_y = ${g};
        if( in_y < 0.0 || in_y > ${d} ) {
          setOutput(float(${n}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${h} ) {
          setOutput(float(${n}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${+("bilinear"===a)} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}let n8={kernelName:eR.CropAndResize,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{image:n,boxes:s,boxInd:o}=t,{cropSize:i,method:l,extrapolationValue:u}=a,p=new n5(n.shape,s.shape,i,l,u);return r.runWebGLProgram(p,[n,s,o],"float32")}};d("fM0z2");var eR=d("dcVMt");!function(e){e.Prod="*",e.Sum="+"}(l||(l={}));class n9{constructor(e,t,r,a){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let n=this.outputShape.length,s=this.op===l.Prod?"1.0":"0.0",o=r?s:`getX(${n7(n,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1],u="",p="";r?(u=a?`end != ${i-1}`:"end != 0",p=a?"end + 1":"end - 1"):(u=a?`end + pow2 < ${i}`:"end >= pow2",p=a?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${eu(n)} coords = getOutputCoords();
        int end = ${se(n,"coords",this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${p};
          ${se(n,"coords",this.op)} = idx;
          val ${this.op}= getX(${n7(n,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function n7(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}function se(e,t,r){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${r} for rank ${e} is not yet supported`)}d("fM0z2");var W=d("4ajhx");function st(e,t,r,a,n,s){let o=t.shape.length,i=W.getAxesPermutation([a],o),l=t;null!=i&&(l=aN({inputs:{x:t},backend:r,attrs:{perm:i}}));let u=W.getInnerMostAxes(1,o)[0];if(u!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${a}`);let p=l.shape[u],c=r4({inputs:{x:l},backend:r});for(let t=0;t<=Math.ceil(Math.log2(p))-1;t++){let a=new n9(e,l.shape,!1,s),n=[[t]],o=c;c=r.runWebGLProgram(a,[c],c.dtype,n),r.disposeIntermediateTensorInfo(o)}if(n){let t=new n9(e,l.shape,n,s),a=c;c=r.runWebGLProgram(t,[c],c.dtype),r.disposeIntermediateTensorInfo(a)}if(null!=i){let e=aN({inputs:{x:c},backend:r,attrs:{perm:W.getUndoAxesPermutation(i)}});return r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(l),e}return c}let sr={kernelName:eR.Cumprod,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:s,exclusive:o,reverse:i}=a;return st(l.Prod,n,r,s,o,i)}};d("fM0z2");var eR=d("dcVMt");let sa={kernelName:eR.Cumsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{axis:s,exclusive:o,reverse:i}=a;return st(l.Sum,n,r,s,o,i)}};d("fM0z2");var eR=d("dcVMt");let sn={kernelName:eR.DenseBincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,weights:s}=t,{size:o,binaryOutput:i}=a;if(1===n.shape.length){let e=tj(r.readSync(n.dataId),r.readSync(s.dataId),s.dtype,s.shape,o);return r.makeTensorInfo([o],s.dtype,e)}if(2===n.shape.length){let e=tK(r.bufferSync(n),r.bufferSync(s),o,i);return r.makeTensorInfo(e.shape,s.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}};d("fM0z2");var eR=d("dcVMt");class ss{constructor(e,t,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}let so={kernelName:eR.DepthToSpace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockSize:s,dataFormat:o}=a,i=n.shape[0],l="NHWC"===o?n.shape[1]:n.shape[2],u="NHWC"===o?n.shape[2]:n.shape[3],p="NHWC"===o?n.shape[3]:n.shape[1],c=l*s,d=u*s,h=p/(s*s),f=new ss("NHWC"===o?[i,c,d,h]:[i,h,c,d],s,o);return r.runWebGLProgram(f,[n],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),g=d("alePs"),x=d("a9Xyg");class si{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=em(this.outputShape.length);let s=e.filterHeight,o=e.filterWidth,i=e.outChannels/e.inChannels,l="",u="";r&&(l=a?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`
          float activation(float x) {
            ${r}
          }
        `,u="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${s}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${u}
        setOutput(result);
      }
    `}}d("fM0z2");var x=d("a9Xyg");class sl{constructor(e,t=!1,r=null,a=!1,n=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=em(this.outputShape.length);let s=e.outChannels/e.inChannels,o=e.padInfo.left,i=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,p=e.filterWidth,c=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<p;e++)c+=`
          vec4 xTexelC${2*e};
          int xTexelC${2*e}Ready;
          vec4 xTexelC${2*e+1};
          int xTexelC${2*e+1}Ready;
          vec4 xC${e};`;c+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let e=0;e<p;e++)c+=`
          xTexelC${2*e} = vec4(0.0);
          xTexelC${2*e}Ready = 0;
          xTexelC${2*e+1} = vec4(0.0);
          xTexelC${2*e+1}Ready = 0;
          xC${e} = vec4(0.0);`;c+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(p+1)/2;e++){let t=2*e;if(c+=`
          xC = xCCorner + ${t*l};
          `,1===i){if(t<p&&(o%2==1?(c+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,1===l&&t>0?c+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:c+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):c+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<p)){let e=o%2==0?x.nearestLargerEven(l):l;l%2==0&&o%2==1||l%2!=0&&o%2!=1?(c+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,l>1?c+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:c+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):1===e?c+=`
                    xC${t+1} = xTexelC${t};
                    `:c+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<p&&(o%2==1?(c+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<p&&(c+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(c+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<p&&(c+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<p&&(c+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<p&&(c+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}c+=`
    }
  
      }
    `;let d="",h="";r&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${r}
        }`:n?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${r}
        }`:`vec4 activation(vec4 x) {
          ${r}
        }`,h="result = activation(result);"),t&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),n&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${d}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${c}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${t?"result += getBiasAtOutCoords();":""}
        ${h}
        setOutput(result);
      }
    `}}let su={kernelName:eR.DepthwiseConv2dNative,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s,filter:o}=r,{strides:i,pad:l,dilations:u,dimRoundingMode:p}=n,c=u;null==c&&(c=[1,1]),x.assert(W.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let d=W.computeConv2DInfo(s.shape,o.shape,i,c,l,p,!0);t=(0,g.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels==1?new sl(d):new si(d);let h=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return a.runWebGLProgram(t,[s,o],"float32",h)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");class sp{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,r=e.strideWidth,a=e.padInfo.top,n=e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${s} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${a};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${r} - ${n};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class sc{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,r=e.filterWidth,a=e.strideHeight,n=e.strideWidth,s=t-1-e.padInfo.top,o=r-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${s}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${a}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${r}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${r} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${i}; dm++) {
              int d2 = d1 * ${i} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let sd={kernelName:eR.DepthwiseConv2dNativeBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,dy:s}=t,{strides:o,dilations:i,pad:l,dimRoundingMode:u,filterShape:p}=a,c=new sp(W.computeConv2DInfo(n.shape,p,o,i,l,u,!0));return r.runWebGLProgram(c,[n,s],"float32")}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let sh={kernelName:eR.DepthwiseConv2dNativeBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,filter:s}=t,{strides:o,dilations:i,pad:l,dimRoundingMode:u,inputShape:p}=a,c=new sc(W.computeConv2DInfo(p,s.shape,o,i,l,u,!0));return r.runWebGLProgram(c,[n,s],"float32")}};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");class sf{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}let sm={kernelName:eR.Diag,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{x:a}=t,n=[...a.shape,...a.shape],s=x.sizeFromShape(a.shape),o=af({inputs:{x:a},backend:r,attrs:{shape:[s]}}),i=new sf(s),l=r.runWebGLProgram(i,[o],o.dtype),u=af({inputs:{x:l},backend:r,attrs:{shape:n}});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(l),u}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");class sg{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:r,padInfo:a,strideHeight:n,strideWidth:s,filterHeight:o,filterWidth:i,dilationHeight:l,dilationWidth:u}=e,{top:p,left:c}=a;this.userCode=`
      const ivec2 strides = ivec2(${n}, ${s});
      const ivec2 pads = ivec2(${p}, ${c});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${i}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${r}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}let sx={kernelName:eR.Dilation2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s,filter:o}=r,{strides:i,pad:l,dilations:u}=n,p=W.computeDilation2DInfo(s.shape,o.shape,i,l,"NHWC",u),c=new sg(p),d=af({inputs:{x:t=a.runWebGLProgram(c,[s,o],"float32")},backend:a,attrs:{shape:p.outShape}});return a.disposeIntermediateTensorInfo(t),d}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let sy={kernelName:eR.Einsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{equation:n}=a,{allDims:s,summedDims:o,idDims:i}=W.decodeEinsumEquation(n,t.length);W.checkEinsumDimSizes(s.length,i,t);let{path:l,steps:u}=W.getEinsumComputePath(o,i),p=u.length,c=null,d=s.length,h=[];for(let e=0;e<p;++e){for(let a of u[e]){let e,{permutationIndices:n,expandDims:s}=W.getEinsumPermutation(d,i[a]);W.isIdentityPermutation(n)?e=t[a]:(e=aN({inputs:{x:t[a]},backend:r,attrs:{perm:n}}),h.push(e));let o=e.shape.slice();for(let e=0;e<s.length;++e)o.splice(s[e],0,1);x.arraysEqual(e.shape,o)||(e=af({inputs:{x:e},backend:r,attrs:{shape:o}}),h.push(e)),null===c?c=e:(c=ad({inputs:{a:e,b:c},backend:r}),h.push(c))}e<p-1&&(l[e]>=0&&(c=aw({inputs:{x:c},backend:r,attrs:{axis:l[e]-(s.length-d),keepDims:!1}}),h.push(c)),d--)}for(let e of h)e!==c&&r.disposeIntermediateTensorInfo(e);return c}};d("fM0z2");var eR=d("dcVMt");let sb=as({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),sv={kernelName:eR.Elu,backendName:"webgl",kernelFunc:sb};d("fM0z2");var eR=d("dcVMt"),g=d("alePs");let sT=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,sw={kernelName:eR.EluGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r}=e,{dy:a,y:n}=t,s=(0,g.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new r3(sT,a.shape,n.shape):new r1("return (b >= 0.0) ? a : a * (b + 1.0);",a.shape,n.shape);return r.runWebGLProgram(s,[a,n],a.dtype)}};d("fM0z2");var eR=d("dcVMt");let sk=ao({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:tY}),sN={kernelName:eR.Equal,backendName:"webgl",kernelFunc:sk};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let sS=as({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${W.ERF_P};
  float a1 = ${W.ERF_A1};
  float a2 = ${W.ERF_A2};
  float a3 = ${W.ERF_A3};
  float a4 = ${W.ERF_A4};
  float a5 = ${W.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`}),sE={kernelName:eR.Erf,backendName:"webgl",kernelFunc:sS};d("fM0z2");var eR=d("dcVMt");let sI=as({opSnippet:an+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:tZ,dtype:"float32"}),sC={kernelName:eR.Exp,backendName:"webgl",kernelFunc:sI};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");function s$(e){let{inputs:t,attrs:r,backend:a}=e,{dim:n}=r,{input:s}=t,o=s.shape.length,i=s.shape.slice(),l=n;return n<0&&(x.assert(-(o+1)<=n,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),l=o+n+1),i.splice(l,0,1),af({inputs:{x:s},backend:a,attrs:{shape:i}})}let sA={kernelName:eR.ExpandDims,backendName:"webgl",kernelFunc:s$};d("fM0z2");var eR=d("dcVMt");let sR="return exp(x) - 1.0;",sM=as({opSnippet:sR,packedOpSnippet:sR,cpuKernelImpl:tQ}),sO={kernelName:eR.Expm1,backendName:"webgl",kernelFunc:sM};d("fM0z2");var eR=d("dcVMt");d("fM0z2");var x=d("a9Xyg");class sV{constructor(e,t,r){let a;this.variableNames=["real","imag"];let n=t[1];this.outputShape=t;let s=r?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,o=r?`${n}.0`:"1.0";if("real"===e)a="return real * expR - imag * expI;";else if("imag"===e)a="return real * expI + imag * expR;";else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${o};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function sP(e,t,r){let a=r.texData.get(e.dataId),n=x.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],o=af({inputs:{x:e},backend:r,attrs:{shape:[n/s,s]}}),i=o.shape,l=new sV("real",i,t),u=new sV("imag",i,t),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:i},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:i}],c=r.runWebGLProgram(l,p,"float32"),d=r.runWebGLProgram(u,p,"float32"),h=r5({inputs:{real:c,imag:d},backend:r});r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(d);let f=af({inputs:{x:h},backend:r,attrs:{shape:e.shape}});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(h),f}let sD={kernelName:eR.FFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{input:a}=t;return sP(a,!1,r)}};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");class s_{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function sF(e){let{backend:t,attrs:r}=e,{shape:a,value:n}=r,{dtype:s}=r;if("string"===(s=s||x.inferDtype(n))){let e=x.getArrayFromDType(s,x.sizeFromShape(a));return e.fill(n),t.makeTensorInfo(a,s,e)}{let e=new s_(a,n),r=[[n]];return t.runWebGLProgram(e,[],s,r)}}let sz={kernelName:eR.Fill,backendName:"webgl",kernelFunc:sF};d("fM0z2");var eR=d("dcVMt");class sL{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let sG={kernelName:eR.FlipLeftRight,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:r}=e,a=new sL(r.shape);return t.runWebGLProgram(a,[r],r.dtype)}};d("fM0z2");var eR=d("dcVMt");let sB="return floor(x);",sW=as({opSnippet:sB,packedOpSnippet:sB,cpuKernelImpl:t0}),sU={kernelName:eR.Floor,backendName:"webgl",kernelFunc:sW};d("fM0z2");var eR=d("dcVMt");let sj=ao({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),sK={kernelName:eR.FloorDiv,backendName:"webgl",kernelFunc:sj};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");class sq{constructor(e){this.variableNames=["A"];let t=X(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${r}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class sH{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=X(),[r,a]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${a}.0, ${r}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}let sX={kernelName:eR.FromPixels,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:a,attrs:n}=e,{pixels:s}=t,{numChannels:i}=n,l="undefined"!=typeof HTMLVideoElement&&s instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&s instanceof HTMLImageElement,[p,c]=l?[s.videoWidth,s.videoHeight]:[s.width,s.height],d=[c,p],h=[c,p,i];if(u||l){let e=(0,g.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==r||e!==sJ)&&(sJ=e,r=document.createElement("canvas").getContext("2d",{willReadFrequently:sJ})),r.canvas.width=p,r.canvas.height=c,r.drawImage(s,0,0,p,c),s=r.canvas}let f=a.makeTensorInfo(d,"int32");a.texData.get(f.dataId).usage=o.PIXELS,a.gpgpu.uploadPixelDataToTexture(a.getTexture(f.dataId),s);let m=(0,g.env)().getBool("WEBGL_PACK")?new sH(h):new sq(h),x=a.runWebGLProgram(m,[f],"int32");return a.disposeData(f.dataId),x}},sJ=(0,g.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");d("fM0z2");var W=d("4ajhx"),g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");let sY={kernelName:eR.FusedConv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s,filter:o,bias:i,preluActivationWeights:l}=r,{strides:u,pad:p,dataFormat:c,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:m}=n,y=W.convertConv2DDataFormat(c),b=W.computeConv2DInfo(s.shape,o.shape,u,d,p,h,!1,y),v=[],T=null!=i,w=null!=l,k="leakyrelu"===f,N=()=>{let e=[s,o],t=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){let t=af({inputs:{x:e},backend:a,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(T&&e.push(t(i,c)),w&&e.push(t(l,c)),k){let t=a.makeTensorInfo([],"float32",x.createScalarValue(m,"float32"));e.push(t),v.push(t)}return e};if(1===b.filterHeight&&1===b.filterWidth&&1===b.dilationHeight&&1===b.dilationWidth&&1===b.strideHeight&&1===b.strideWidth&&("SAME"===b.padInfo.type||"VALID"===b.padInfo.type))t=nW({x:s,filter:o,convInfo:b,backend:a,bias:i,activation:f,preluActivationWeights:l,leakyreluAlpha:m});else if(b.strideWidth<=2&&"channelsLast"===y&&(0,g.env)().getBool("WEBGL_EXP_CONV")){let e=new nL(b,T,f?ai(f,!0):null,w,k),r=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],n=N();t=a.runWebGLProgram(e,n,"float32",r)}else if((0,g.env)().getBool("WEBGL_CONV_IM2COL"))t=nU({x:s,filter:o,convInfo:b,backend:a,bias:i,activation:f,preluActivationWeights:l,leakyreluAlpha:m});else{let e=new nF(b,T,f?ai(f,!1):null,w,k),r=N();t=a.runWebGLProgram(e,r,"float32")}let S=af({inputs:{x:t},backend:a,attrs:{shape:b.outShape}});return v.push(t),v.forEach(e=>a.disposeIntermediateTensorInfo(e)),S}};d("fM0z2");var W=d("4ajhx"),g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");let sZ={kernelName:eR.FusedDepthwiseConv2D,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s,filter:o,bias:i,preluActivationWeights:l}=r,{strides:u,pad:p,dilations:c,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=n,m=[],y=c;null==y&&(y=[1,1]),x.assert(W.eitherStridesOrDilationsAreOne(u,y),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${y}'`);let b=W.computeConv2DInfo(s.shape,o.shape,u,y,p,d,!0),v=(0,g.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&b.strideWidth<=2&&b.outChannels/b.inChannels==1,T=h?ai(h,v):null,w=[s,o],k=null!=i,N=null!=l,S="leakyrelu"===h;if(k&&w.push(i),N&&w.push(l),S){let e=a.makeTensorInfo([],"float32",x.createScalarValue(f,"float32"));w.push(e),m.push(e)}t=v?new sl(b,k,T,N,S):new si(b,k,T,N,S);let E=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],I=a.runWebGLProgram(t,w,"float32",E);return m.forEach(e=>a.disposeIntermediateTensorInfo(e)),I}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");class sQ{constructor(e,t,r,a){this.sliceDim=e,this.strides=t,this.paramsShape=a,this.variableNames=["x","indices"],this.outputShape=r;let n=eu(r.length),s=`
    int index;`;for(let e=0;e<this.sliceDim;e++)s+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${n} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${s}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}let s0={kernelName:eR.GatherNd,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{params:a,indices:n}=t,s=n.shape,o=s[s.length-1],i=x.sizeFromShape(a.shape),[l,u,p,c]=W.prepareAndValidate(a,n),d=af({inputs:{x:n},backend:r,attrs:{shape:[u,o]}}),h=af({inputs:{x:a},backend:r,attrs:{shape:[x.sizeFromShape(a.shape)/p,p]}});if(r.shouldExecuteOnCPU([a,n])||"string"===a.dtype){let e=t1(r.readSync(n.dataId),r.bufferSync(a),a.dtype,u,o,p,c,a.shape,i);return r.makeTensorInfo(l,a.dtype,e.values)}let f=new sQ(o,c,[u,p],a.shape),m=r.runWebGLProgram(f,[h,d],h.dtype),g=af({inputs:{x:m},backend:r,attrs:{shape:l}});return r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(m),g}};d("fM0z2");var W=d("4ajhx"),g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");class s1{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let r=eu(this.rank),a=function(e,t){let r=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[];for(let t=0;t<e.length;t++)2===t?a.push("index"):a.push(`${r[t]}`);return a.join()}(e,0);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${a}));
      }
    `}}function s2(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,indices:s}=t,{axis:o,batchDims:i}=a,l=x.parseAxisParam(o,n.shape)[0];if((0,g.env)().get("DEBUG")){let e=r.readSync(s.dataId),t=n.shape[l];for(let r=0;r<e.length;++r){let a=e[r];x.assert(a<=t-1&&a>=0,()=>`GatherV2: the index value ${a} is not in [0, ${t-1}]`)}}let u=W.segment_util.collectGatherOpShapeInfo(n,s,l,i),p=x.sizeFromShape(s.shape),c=[],d=af({inputs:{x:n},backend:r,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),h=af({inputs:{x:s},backend:r,attrs:{shape:[u.batchSize,p/u.batchSize]}});c.push(d),c.push(h);let f=[u.batchSize,u.outerSize,p/u.batchSize,u.sliceSize];if(r.shouldExecuteOnCPU([n,s])||"string"===n.dtype){let e=r.bufferSync(h),t=t2(r.bufferSync(d),e,f);return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.makeTensorInfo(u.outputShape,t.dtype,t.values)}let m=new s1(d.shape,f),y=r.runWebGLProgram(m,[d,h],d.dtype);c.push(y);let b=af({inputs:{x:y},backend:r,attrs:{shape:u.outputShape}});return c.forEach(e=>r.disposeIntermediateTensorInfo(e)),b}let s3={kernelName:eR.GatherV2,backendName:"webgl",kernelFunc:s2};d("fM0z2");var eR=d("dcVMt");let s4=ao({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:t3,dtype:"bool"}),s6={kernelName:eR.Greater,backendName:"webgl",kernelFunc:s4};d("fM0z2");var eR=d("dcVMt");let s5=ao({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:t4}),s8={kernelName:eR.GreaterEqual,backendName:"webgl",kernelFunc:s5};d("fM0z2");var eR=d("dcVMt");let s9={kernelName:eR.IFFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{input:a}=t;return sP(a,!0,r)}};d("fM0z2");var eR=d("dcVMt");let s7=as({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),oe={kernelName:eR.IsFinite,backendName:"webgl",kernelFunc:s7};d("fM0z2");var eR=d("dcVMt");let ot=as({opSnippet:"return float(isinf(x));",dtype:"bool"}),or={kernelName:eR.IsInf,backendName:"webgl",kernelFunc:ot};d("fM0z2");var eR=d("dcVMt");let oa=as({opSnippet:"return float(isnan(x));",dtype:"bool"}),on={kernelName:eR.IsNan,backendName:"webgl",kernelFunc:oa};d("fM0z2");var eR=d("dcVMt");let os=ao({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:t6,dtype:"bool"}),oo={kernelName:eR.Less,backendName:"webgl",kernelFunc:os};d("fM0z2");var eR=d("dcVMt");let oi=ao({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:t5,dtype:"bool"}),ol={kernelName:eR.LessEqual,backendName:"webgl",kernelFunc:oi};d("fM0z2");var eR=d("dcVMt");let ou={kernelName:eR.LinSpace,backendName:"webgl",kernelFunc:function(e){let{backend:t,attrs:r}=e,{start:a,stop:n,num:s}=r,o=t8(a,n,s);return t.makeTensorInfo([o.length],"float32",o)}};d("fM0z2");var eR=d("dcVMt");let op=as({opSnippet:an+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:t9}),oc={kernelName:eR.Log,backendName:"webgl",kernelFunc:op};d("fM0z2");var eR=d("dcVMt");let od=as({opSnippet:an+`
  return log(1.0 + x);
`}),oh={kernelName:eR.Log1p,backendName:"webgl",kernelFunc:od};d("fM0z2");var eR=d("dcVMt");let of=ao({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),om={kernelName:eR.LogicalAnd,backendName:"webgl",kernelFunc:of};d("fM0z2");var eR=d("dcVMt");let og=as({opSnippet:"return float(!(x >= 1.0));"}),ox={kernelName:eR.LogicalNot,backendName:"webgl",kernelFunc:og};d("fM0z2");var eR=d("dcVMt");let oy=ao({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),ob={kernelName:eR.LogicalOr,backendName:"webgl",kernelFunc:oy};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");class ov{constructor(e,t,r,a,n){let s;this.variableNames=["x"],this.outputShape=[];let o=e[3]-1;this.outputShape=e;let i=`float(${r}) + float(${a}) * sum`;s=.5===n?`inversesqrt(${i})`:1===n?`1.0/(${i})`:`exp(log(${i}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${t}; j <= ${t}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}}class oT{constructor(e,t,r,a,n){let s;this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let o=e[3]-1;this.outputShape=e;let i=`float(${r}) + float(${a}) * sum`;s=.5===n?`inversesqrt(${i})`:1===n?`1.0/(${i})`:`exp(log(${i}) * float(-${n}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${t};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${t}; j <= ${t}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}}let ow={kernelName:eR.LRN,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{depthRadius:s,bias:o,alpha:i,beta:l}=a,u=(0,g.env)().getBool("WEBGL_PACK_NORMALIZATION")?new oT(n.shape,s,o,i,l):new ov(n.shape,s,o,i,l);return r.runWebGLProgram(u,[n],n.dtype)}};d("fM0z2");var eR=d("dcVMt");class ok{constructor(e,t,r,a,n){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=r,this.alpha=a,this.beta=n,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${a}) * norm + float(${r});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${a})
                * float(${n})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${n});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}let oN={kernelName:eR.LRNGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n,y:s,dy:o}=t,{depthRadius:i,bias:l,alpha:u,beta:p}=a,c=new ok(n.shape,i,l,u,p);return r.runWebGLProgram(c,[n,s,o],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var x=d("a9Xyg");function oS(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{reductionIndices:o,keepDims:i}=n,l=s.shape.length,u=x.parseAxisParam(o,s.shape),p=u,c=W.getAxesPermutation(p,l),d=null!=c,h=a.shouldExecuteOnCPU([s]),f=s;if(d){if(h){let e=a.texData.get(f.dataId).values,t=Array(l);for(let e=0;e<t.length;e++)t[e]=s.shape[c[e]];let r=rI(e,s.shape,s.dtype,c,t);f=a.makeTensorInfo(t,s.dtype),a.texData.get(f.dataId).values=r}else f=aT(s,c,a);p=W.getInnerMostAxes(p.length,l)}W.assertAxesAreInnerMostDims("max",p,l);let[m,g]=W.computeOutAndReduceShapes(f.shape,p),y=m;if(i&&(y=W.expandShapeToKeepDim(m,u)),h){let e=t7(a.texData.get(f.dataId).values,x.sizeFromShape(g),y,s.dtype);t=a.makeTensorInfo(y,s.dtype),a.texData.get(t.dataId).values=e}else t=function(e,t,r,a){let n=x.sizeFromShape(t),s=x.sizeFromShape(e.shape),o=af({inputs:{x:e},attrs:{shape:[s/n,n]},backend:a}),i=ay(o,e.dtype,"max",a),l=af({inputs:{x:i},attrs:{shape:r},backend:a});return a.disposeIntermediateTensorInfo(o),a.disposeIntermediateTensorInfo(i),l}(f,g,y,a);return d&&a.disposeIntermediateTensorInfo(f),t}let oE={kernelName:eR.Max,backendName:"webgl",kernelFunc:oS};d("fM0z2");var eR=d("dcVMt");let oI=ao({opSnippet:r0+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+r2+`
  return result;
`,cpuKernelImpl:re}),oC={kernelName:eR.Maximum,backendName:"webgl",kernelFunc:oI};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let o$={kernelName:eR.MaxPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;G(n,"maxPool");let{filterSize:s,strides:o,pad:i,dimRoundingMode:l}=a;x.assert(W.eitherStridesOrDilationsAreOne(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let u=W.computePool2DInfo(n.shape,s,o,1,i,l);if(1===u.filterWidth&&1===u.filterHeight&&x.arraysEqual(u.inShape,u.outShape))return r4({inputs:{x:n},backend:r});let p=new a3(u,"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let oA={kernelName:eR.MaxPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{filterSize:s,strides:o,pad:i,dataFormat:l,dimRoundingMode:u}=a,p=new a4(W.computePool3DInfo(n.shape,s,o,[1,1,1],i,u,l),"max",!1);return r.runWebGLProgram(p,[n],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");class oR{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,r=e.strideWidth,a=e.dilationHeight,n=e.effectiveFilterHeight,s=e.effectiveFilterWidth,o=n-1-e.padInfo.top,i=s-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n};
          wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${n*s-1} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${s} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class oM{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,r=e.strideHeight,a=e.strideWidth,n=e.dilationDepth,s=e.dilationHeight,o=e.dilationWidth,i=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,p=i-1-e.padInfo.front,c=l-1-e.padInfo.top,d=u-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${c}, ${d});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${i};
           wD += ${n}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${s}) {
            float dyR = float(dyRCorner + wR) / ${r}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${i*l*u-1} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let oO={kernelName:eR.MaxPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:s}=t,{filterSize:o,strides:i,pad:l,dimRoundingMode:u}=a,p=W.computePool3DInfo(s.shape,o,i,[1,1,1],l,u),c=new a4(p,"max",!0),d=r.runWebGLProgram(c,[s],s.dtype),h=new oM(p),f=r.runWebGLProgram(h,[n,d],s.dtype);return r.disposeIntermediateTensorInfo(d),f}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let oV={kernelName:eR.MaxPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{dy:n,input:s,output:o}=t;G([s,o],"maxPoolGrad");let{filterSize:i,strides:l,pad:u,dimRoundingMode:p}=a,c=W.computePool2DInfo(s.shape,i,l,1,u,p),d=new a3(c,"max",!0),h=r.runWebGLProgram(d,[s],s.dtype),f=new oR(c),m=r.runWebGLProgram(f,[n,h],s.dtype);return r.disposeIntermediateTensorInfo(h),m}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let oP={kernelName:eR.MaxPoolWithArgmax,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:a}=e,{filterSize:n,strides:s,pad:o,includeBatchInIndex:i}=t;x.assert(4===a.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${a.shape.length}.`);let l=[1,1];x.assert(W.eitherStridesOrDilationsAreOne(s,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);let u=W.computePool2DInfo(a.shape,n,s,l,o),[p,c]=function(e,t,r,a){let n=new a3(r,"max",!1),s=a.runWebGLProgram(n,[e],"float32");return n=new a3(r,"max",!0,!0,t),[s,a.runWebGLProgram(n,[e],"float32")]}(a,i,u,r);return[p,c]}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var x=d("a9Xyg");let oD={kernelName:eR.Mean,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{x:a}=e,{keepDims:n,axis:s}=t,o=a.shape.length,i=x.parseAxisParam(s,a.shape),l=i,u=W.getAxesPermutation(l,o),p=null!=u,c=r.shouldExecuteOnCPU([a]),d=[],h=a;if(p){if(c){let e=r.texData.get(h.dataId).values,t=Array(o);for(let e=0;e<t.length;e++)t[e]=a.shape[u[e]];let n=rI(e,a.shape,a.dtype,u,t);h=r.makeTensorInfo(t,a.dtype),r.texData.get(h.dataId).values=n}else h=aT(a,u,r);d.push(h),l=W.getInnerMostAxes(l.length,o)}W.assertAxesAreInnerMostDims("sum",l,o);let[f,m]=W.computeOutAndReduceShapes(h.shape,l),g=f;n&&(g=W.expandShapeToKeepDim(f,i));let y=function(e,t,r,a){let n=x.sizeFromShape(t),s=x.sizeFromShape(e.shape),o=af({inputs:{x:e},attrs:{shape:[s/n,n]},backend:a}),i=ay(o,"float32","mean",a),l=af({inputs:{x:i},attrs:{shape:r},backend:a});return a.disposeIntermediateTensorInfo(o),a.disposeIntermediateTensorInfo(i),l}(h,m,g,r);for(let e of d)r.disposeIntermediateTensorInfo(e);return y}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let o_={kernelName:eR.Min,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{axis:o,keepDims:i}=n,l=s.shape.length,u=x.parseAxisParam(o,s.shape),p=u,c=W.getAxesPermutation(p,l),d=s;null!=c&&(d=aN({inputs:{x:s},backend:a,attrs:{perm:c}}),p=W.getInnerMostAxes(p.length,s.shape.length)),W.assertAxesAreInnerMostDims("min",p,l);let[h,f]=W.computeOutAndReduceShapes(d.shape,p),m=af({inputs:{x:d},backend:a,attrs:{shape:[-1,x.sizeFromShape(f)]}}),g=ay(m,m.dtype,"min",a);return t=i?af({inputs:{x:g},backend:a,attrs:{shape:W.expandShapeToKeepDim(h,u)}}):af({inputs:{x:g},backend:a,attrs:{shape:h}}),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(g),null!=c&&a.disposeIntermediateTensorInfo(d),t}};d("fM0z2");var eR=d("dcVMt");let oF=ao({opSnippet:r0+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+r2+`
  return result;
`,cpuKernelImpl:rt}),oz={kernelName:eR.Minimum,backendName:"webgl",kernelFunc:oF};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");class oL{constructor(e,t,r){this.variableNames=["x"],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let a=e.length,n=eu(a),s=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a),l=+("reflect"!==r);if(1===a){this.userCode=`
        int start = ${s};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${s});
      ${n} end = ${n}(${o});

      void main() {
        ${n} outC = getOutputCoords();
        for (int i = 0; i < ${a}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${n} coords = outC - start;
        setOutput(getX(${i}));
      }
    `}}class oG{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let a=e.length,n=eu(a),s=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),i=rA("rc",a),l=rA("source",a),u=`${i[a-1]} < ${this.outputShape[a-1]}`,p=1===a?"source":`vec2(${l.slice(-2).join()})`,c=+("reflect"!==r),d="";if(1===a){let e=`
        ${n} source = rc;
        if (source < start) {
          source = start * 2 - source - ${c};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${c};
        }
        source -= start;
      `;d=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${i[a-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
      `}else{let e=`
        ${n} source = rc;
        ${n} lt = ${n}(lessThan(source, start));
        ${n} gte = ${n}(greaterThanEqual(source, end));
        ${n} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${c}) +
                gte * ((end - 1) * 2 - source + ${c});
        source -= start;
      `;d=`
        ${n} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${i[a-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
        rc = outputLoc;
        ${i[a-2]} += 1;
        if(${i[a-2]} < ${this.outputShape[a-2]}) {
          ${e}
          result[2] = getChannel(getX(${l.join()}), ${p});
          ${i[a-1]} += 1;
          if(${u}) {
            ${e}
            result[3] = getChannel(getX(${l.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${n} start = ${n}(${s});
      const ${n} end = ${n}(${o});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}}let oB={kernelName:eR.MirrorPad,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:r})=>{let{x:a}=e,{paddings:n,mode:s}=r,o=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new oG(a.shape,n,s):new oL(a.shape,n,s);return t.runWebGLProgram(o,[a],a.dtype)}};d("fM0z2");var eR=d("dcVMt");let oW=ao({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+r2+`
  return result;
`}),oU={kernelName:eR.Mod,backendName:"webgl",kernelFunc:oW};d("fM0z2");var eR=d("dcVMt");class oj{constructor(e,t,r){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,r],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");d("fM0z2");var eR=d("dcVMt");let oK=ao({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),oq={kernelName:eR.RealDiv,backendName:"webgl",kernelFunc:oK};d("fM0z2");var eR=d("dcVMt");let oH="return a - b;",oX=ao({opSnippet:oH,packedOpSnippet:oH,supportsComplex:!0,cpuKernelImpl:rN}),oJ={kernelName:eR.Sub,backendName:"webgl",kernelFunc:oX};function oY(e){let{inputs:t,backend:r,attrs:a}=e,{logits:n}=t,{dim:s}=a,o=x.parseAxisParam([s],n.shape),i=oS({inputs:{x:n},backend:r,attrs:{reductionIndices:o,keepDims:!1}}),l=W.expandShapeToKeepDim(i.shape,o),u=af({inputs:{x:i},backend:r,attrs:{shape:l}}),p=oX({inputs:{a:n,b:u},backend:r}),c=sI({inputs:{x:p},backend:r}),d=aw({inputs:{x:c},backend:r,attrs:{axis:o,keepDims:!1}}),h=af({inputs:{x:d},backend:r,attrs:{shape:l}}),f=oK({inputs:{a:c,b:h},backend:r});return r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(u),r.disposeIntermediateTensorInfo(p),r.disposeIntermediateTensorInfo(c),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(h),f}let oZ={kernelName:eR.Softmax,backendName:"webgl",kernelFunc:oY},oQ={kernelName:eR.Multinomial,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{logits:n}=t,{numSamples:s,seed:o,normalized:i}=a,l=i?n:oY({inputs:{logits:n},backend:r,attrs:{dim:n.shape.length-1}}),u=new oj(l.shape[0],l.shape[1],s),p=r.runWebGLProgram(u,[l],"int32",[[o]]);return i||r.disposeIntermediateTensorInfo(l),p}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");let o0=rF+`
  return -x;
`,o1=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,o2={kernelName:eR.Neg,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a}=e,{x:n}=r;if(a.shouldExecuteOnCPU([n])){let[e,t]=ra(a.texData.get(n.dataId).values,n.shape,n.dtype);return a.makeTensorInfo(t,n.dtype,e)}return t=(0,g.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new rK(n.shape,o1):new r_(n.shape,o0),a.runWebGLProgram(t,[n],n.dtype)}};d("fM0z2");var W=d("4ajhx"),K=d("eu00D"),eR=d("dcVMt");let o3=K.nonMaxSuppressionV3Impl,o4={kernelName:eR.NonMaxSuppressionV3,backendName:"webgl",kernelFunc:function(e){W.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:s}=t,{maxOutputSize:o,iouThreshold:i,scoreThreshold:l}=a,{selectedIndices:u}=o3(r.readSync(n.dataId),r.readSync(s.dataId),o,i,l);return r.makeTensorInfo([u.length],"int32",new Int32Array(u))}};d("fM0z2");var W=d("4ajhx"),K=d("eu00D"),eR=d("dcVMt");let o6=K.nonMaxSuppressionV4Impl,o5={kernelName:eR.NonMaxSuppressionV4,backendName:"webgl",kernelFunc:function(e){W.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:s}=t,{maxOutputSize:o,iouThreshold:i,scoreThreshold:l,padToMaxOutputSize:u}=a,{selectedIndices:p,validOutputs:c}=o6(r.readSync(n.dataId),r.readSync(s.dataId),o,i,l,u);return[r.makeTensorInfo([p.length],"int32",new Int32Array(p)),r.makeTensorInfo([],"int32",new Int32Array([c]))]}};d("fM0z2");var W=d("4ajhx"),K=d("eu00D"),eR=d("dcVMt");let o8=K.nonMaxSuppressionV5Impl,o9={kernelName:eR.NonMaxSuppressionV5,backendName:"webgl",kernelFunc:function(e){W.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:r,attrs:a}=e,{boxes:n,scores:s}=t,{maxOutputSize:o,iouThreshold:i,scoreThreshold:l,softNmsSigma:u}=a,p=r.readSync(n.dataId),{selectedIndices:c,selectedScores:d}=o8(p,r.readSync(s.dataId),o,i,l,u);return[r.makeTensorInfo([c.length],"int32",new Int32Array(c)),r.makeTensorInfo([d.length],"float32",new Float32Array(d))]}};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");class o7{constructor(e,t,r,a){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${a}), float(${r}),
                      float(index == coords.y)));
      }
    `}}let ie={kernelName:eR.OneHot,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{indices:n}=t,{dtype:s,depth:o,onValue:i,offValue:l}=a,u=x.sizeFromShape(n.shape),p=new o7(u,o,i,l),c=af({inputs:{x:n},backend:r,attrs:{shape:[u]}}),d=r.runWebGLProgram(p,[c],s);r.disposeIntermediateTensorInfo(c);let h=af({inputs:{x:d},backend:r,attrs:{shape:[...n.shape,o]}});return r.disposeIntermediateTensorInfo(d),h}};d("fM0z2");var eR=d("dcVMt");d("fM0z2");var eR=d("dcVMt");function it(e){let{inputs:t,backend:r}=e,{x:a}=t;if("complex64"!==a.dtype)return sF({attrs:{shape:a.shape,dtype:a.dtype,value:"string"===a.dtype?"":0},backend:r});{let e=nb({inputs:{input:a},backend:r}),t=it({inputs:{x:e},backend:r}),n=nV({inputs:{input:a},backend:r}),s=it({inputs:{x:n},backend:r}),o=r5({inputs:{real:t,imag:s},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(s),o}}let ir={kernelName:eR.ZerosLike,backendName:"webgl",kernelFunc:it},ia={kernelName:eR.OnesLike,backendName:"webgl",kernelFunc:function e(t){let{inputs:r,backend:a}=t,{x:n}=r;if("string"===n.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==n.dtype)return sF({attrs:{shape:n.shape,dtype:n.dtype,value:1},backend:a});{let t=nb({inputs:{input:n},backend:a}),r=e({inputs:{x:t},backend:a}),s=nV({inputs:{input:n},backend:a}),o=it({inputs:{x:s},backend:a}),i=r5({inputs:{real:r,imag:o},backend:a});return a.disposeIntermediateTensorInfo(t),a.disposeIntermediateTensorInfo(r),a.disposeIntermediateTensorInfo(s),a.disposeIntermediateTensorInfo(o),i}}};d("fM0z2");var eR=d("dcVMt"),x=d("a9Xyg");let is={kernelName:eR.Pack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{axis:n}=a;if(1===t.length)return s$({inputs:{input:t[0]},backend:r,attrs:{dim:n}});let s=t[0].shape,o=t[0].dtype;t.forEach(e=>{x.assertShapesMatch(s,e.shape,"All tensors passed to stack must have matching shapes"),x.assert(o===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let i=[],l=nD({inputs:t.map(e=>{let t=s$({inputs:{input:e},backend:r,attrs:{dim:n}});return i.push(t),t}),backend:r,attrs:{axis:n}});return i.forEach(e=>r.disposeIntermediateTensorInfo(e)),l}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");class io{constructor(e,t,r){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let a=e.length,n=eu(a),s=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a);if(1===a){this.userCode=`
        int start = ${s};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${n} start = ${n}(${s});
      ${n} end = ${n}(${o});

      void main() {
        ${n} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${n} coords = outC - start;
          setOutput(getX(${i}));
        }
      }
    `}}class ii{constructor(e,t,r){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,r)=>t[0]+e[r]+t[1]);let a=e.length,n=eu(a),s=t.map(e=>e[0]).join(","),o=t.map((t,r)=>t[0]+e[r]).join(","),i=rA("rc",a),l=rA("source",a),u=`${i[a-1]} < ${this.outputShape[a-1]}`,p=1===a?"source":`vec2(${l.slice(-2).join()})`,c=[`${n} rc = outputLoc;`,`${i[a-1]} += 1;
       if(${u}) {
      `,1===a?"":`}
       rc = outputLoc;
       ${i[a-2]} += 1;
       if(${i[a-2]} < ${this.outputShape[a-2]}) {`,1===a?"":`  ${i[a-1]} += 1;
         if(${u}) {`],d=1===a?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let e=0,t=1===a?2:4;e<t;e++)h+=`
        ${c[e]}
        if (${d}) {
          result[${e}] = float(value);
        } else {
          ${n} source = rc - start;
          result[${e}] = getChannel(getX(${l.join()}), ${p});
        }
      `;h+=1===a?"} ":"}}",this.userCode=`
      const ${n} start = ${n}(${s});
      const ${n} end = ${n}(${o});

      void main() {
        ${n} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}}let il=e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{paddings:s,constantValue:o}=a;if(0===x.sizeFromShape(n.shape))return sF({backend:r,attrs:{shape:s.map((e,t)=>e[0]+n.shape[t]+e[1]),value:o,dtype:n.dtype}});let i=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ii(n.shape,s,o):new io(n.shape,s,o),l=[[o]];return r.runWebGLProgram(i,[n],n.dtype,l)},iu={kernelName:eR.PadV2,backendName:"webgl",kernelFunc:il};d("fM0z2");var eR=d("dcVMt");let ip=ao({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+r2+`
  return result;
`}),ic={kernelName:eR.Pow,backendName:"webgl",kernelFunc:ip};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),to=d("8IARK"),x=d("a9Xyg");let id={kernelName:eR.Prod,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{axis:o,keepDims:i}=n,l=s.shape.length,u=[],p=x.parseAxisParam(o,s.shape),c=p,d=W.getAxesPermutation(c,l),h=s;if(null!=d&&(h=aN({inputs:{x:s},backend:a,attrs:{perm:d}}),c=W.getInnerMostAxes(c.length,l),u.push(h)),W.assertAxesAreInnerMostDims("prod",c,l),a.shouldExecuteOnCPU([h])){let e=a.texData.get(h.dataId).values,{outVals:r,outShape:n,outDtype:s}=rs(h.shape,h.dtype,e,c);t=a.makeTensorInfo(n,s,r)}else{let[e,r]=W.computeOutAndReduceShapes(h.shape,c),n=af({inputs:{x:h},backend:a,attrs:{shape:[-1,x.sizeFromShape(r)]}}),o=ay(n,(0,to.sumOutType)(s.dtype),"prod",a);t=af({inputs:{x:o},backend:a,attrs:{shape:e}}),u.push(n),u.push(o)}if(i){u.push(t);let e=W.expandShapeToKeepDim(t.shape,p);t=af({inputs:{x:t},backend:a,attrs:{shape:e}})}return u.forEach(e=>a.disposeIntermediateTensorInfo(e)),t}};d("fM0z2");var eR=d("dcVMt");let ih={kernelName:eR.RaggedGather,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{paramsNestedSplits:n,paramsDenseValues:s,indices:o}=t,{outputRaggedRank:i}=a,l=n.map(e=>r.readSync(e.dataId)),u=n.map(e=>e.shape),p=r.readSync(s.dataId),c=r.readSync(o.dataId),[d,h,f]=ro(l,u,p,s.shape,s.dtype,c,o.shape,i),m=d.map(e=>r.makeTensorInfo([e.length],"int32",e)),g=r.makeTensorInfo(f,s.dtype,h);return m.concat([g])}};d("fM0z2");var eR=d("dcVMt");let im={kernelName:eR.RaggedRange,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{starts:a,limits:n,deltas:s}=t,o=r.readSync(a.dataId),i=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,p]=ri(o,a.shape,a.dtype,i,n.shape,l,s.shape);return[r.makeTensorInfo([u.length],"int32",u),r.makeTensorInfo([p.length],a.dtype,p)]}};d("fM0z2");var eR=d("dcVMt");let ig={kernelName:eR.RaggedTensorToTensor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{shape:n,values:s,defaultValue:o,rowPartitionTensors:i}=t,{rowPartitionTypes:l}=a,u=r.readSync(n.dataId),p=r.readSync(s.dataId),c=r.readSync(o.dataId),d=i.map(e=>r.readSync(e.dataId)),h=i.map(e=>e.shape),[f,m]=rl(u,n.shape,p,s.shape,s.dtype,c,o.shape,d,h,l);return r.makeTensorInfo(f,s.dtype,m)}};d("fM0z2");var eR=d("dcVMt");let ix=e=>{let{backend:t,attrs:r}=e,{start:a,stop:n,step:s,dtype:o}=r,i=ru(a,n,s,o);return t.makeTensorInfo([i.length],o,i)},iy={kernelName:eR.Range,backendName:"webgl",kernelFunc:ix};d("fM0z2");var eR=d("dcVMt");let ib=as({opSnippet:"return 1.0 / x;"}),iv={kernelName:eR.Reciprocal,backendName:"webgl",kernelFunc:ib};d("fM0z2");var eR=d("dcVMt");let iT=as({opSnippet:rF+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),iw={kernelName:eR.Relu,backendName:"webgl",kernelFunc:iT};d("fM0z2");var eR=d("dcVMt");let ik=as({opSnippet:rF+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),iN={kernelName:eR.Relu6,backendName:"webgl",kernelFunc:ik};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");class iS{constructor(e,t,r,a,n){this.variableNames=["A"],this.outputShape=[];let[s,o,i,l]=e;this.outputShape=[s,t,r,l];let u=[a&&t>1?o-1:o,a&&r>1?i-1:i],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/p[0]},
          ${u[1]/p[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class iE{constructor(e,t,r,a,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[s,o,i,l]=e;this.outputShape=[s,t,r,l];let u=[a&&t>1?o-1:o,a&&r>1?i-1:i],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/p[0]},
          ${u[1]/p[1]},
          ${u[1]/p[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,
                                     ${i}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}let iI={kernelName:eR.ResizeBilinear,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:o,size:i}=a,[l,u]=i,p=(0,g.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new iE(n.shape,l,u,s,o):new iS(n.shape,l,u,s,o);return r.runWebGLProgram(p,[n],"float32")}};d("fM0z2");var eR=d("dcVMt");class iC{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,a,n]=t,[,s,o]=e,i=[r&&s>1?a-1:a,r&&o>1?n-1:n],l=[r&&s>1?s-1:s,r&&o>1?o-1:o],u=i[0]/l[0],p=i[1]/l[1],c=1/u,d=1/p,h=2*Math.ceil(c)+2,f=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${p});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${s}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${n-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let i$={kernelName:eR.ResizeBilinearGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n,dy:s}=t,{alignCorners:o}=a,i=new iC(s.shape,n.shape,o);return r.runWebGLProgram(i,[s],s.dtype)}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt");class iA{constructor(e,t,r,a,n){this.variableNames=["A"],this.outputShape=[];let[s,o,i,l]=e;this.outputShape=[s,t,r,l];let u=[a&&t>1?o-1:o,a&&r>1?i-1:i],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/p[0]},
          ${u[1]/p[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${i}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${n?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${a?"0.5":"0.0"})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class iR{constructor(e,t,r,a,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[s,o,i,l]=e;this.outputShape=[s,t,r,l];let u=[a&&t>1?o-1:o,a&&r>1?i-1:i],p=[a&&t>1?t-1:t,a&&r>1?r-1:r];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/p[0]},
          ${u[1]/p[1]},
          ${u[1]/p[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${i}.0,
                                     ${i}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${n?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC"};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${a?"0.5":"0.0"})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${r-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}let iM={kernelName:eR.ResizeNearestNeighbor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n}=t,{alignCorners:s,halfPixelCenters:o,size:i}=a,[l,u]=i,p=(0,g.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new iR(n.shape,l,u,s,o):new iA(n.shape,l,u,s,o);return r.runWebGLProgram(p,[n],n.dtype)}};d("fM0z2");var eR=d("dcVMt");class iO{constructor(e,t,r){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,a,n]=t,[,s,o]=e,i=[r&&s>1?a-1:a,r&&o>1?n-1:n],l=[r&&s>1?s-1:s,r&&o>1?o-1:o],u=i[0]/l[0],p=i[1]/l[1],c=1/u,d=1/p,h=2*Math.ceil(c)+2,f=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${p});

        const float invHeightScale = float(${c});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${f});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${s}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${i[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${i[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${a}) - 1),
                ${r} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${n}) - 1),
                ${r} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let iV={kernelName:eR.ResizeNearestNeighborGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{images:n,dy:s}=t,{alignCorners:o}=a,i=new iO(s.shape,n.shape,o);return r.runWebGLProgram(i,[s],s.dtype)}};d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");class iP{constructor(e,t){this.variableNames=["x"];let r=e.length;if(r>4)throw Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);if(this.outputShape=e,1===r){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let a=e.map((r,a)=>(r=>-1!==t.indexOf(r)&&1!==e[r]?`${e[r]} - coords[${r}] - 1`:`coords[${r}]`)(a)).join(","),n=eu(r);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}class iD{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let r=e.length;if(r>4)throw Error(`WebGL backend: Reverse of rank-${r} tensor is not yet supported`);this.outputShape=e;let a=rA("rc",r),n=`${a[r-1]} + 1 < ${this.outputShape[r-1]}`,s=`${a[r-2]} + 1 < ${this.outputShape[r-2]}`,o=eu(r);function i(r){let a=e.map((a,n)=>{var s,o;return s=n,o=r,-1!==t.indexOf(s)&&1!==e[s]?`${e[s]} - ${o[s]} - 1`:`${o[s]}`}),n=a.join(","),s=a.slice(-2).join(",");return`getChannel(getX(${n}), vec2(${s}))`}1===r?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${n}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${i(a.slice())};
          if(${n}){
            result.g = ${function(e){return e[r-1]="("+e[r-1]+" + 1)",i(e)}(a.slice())};
          }
          if(${s}) {
            result.b = ${function(e){return e[r-2]="("+e[r-2]+" + 1)",i(e)}(a.slice())};
            if(${n}) {
              result.a = ${function(e){return e[r-1]="("+e[r-1]+" + 1)",e[r-2]="("+e[r-2]+" + 1)",i(e)}(a.slice())};
            }
          }
          setOutput(result);
        }
    `}}let i_={kernelName:eR.Reverse,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{dims:s}=a,o=n.shape.length,i=x.parseAxisParam(s,n.shape);if(0===o)return r4({inputs:{x:n},backend:r});let l=(0,g.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new iD(n.shape,i):new iP(n.shape,i);return r.runWebGLProgram(l,[n],n.dtype)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");class iF{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let r=e[1],a=e[2];this.outputShape=e;let n="";n="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${n}
          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${r}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let iz={kernelName:eR.RotateWithOffset,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:r})=>{let{image:a}=e,{radians:n,fillValue:s,center:o}=t,i=new iF(a.shape,s),[l,u]=W.getImageCenter(o,a.shape[1],a.shape[2]),p=[[l,u,Math.sin(n),Math.cos(n)]];return r.runWebGLProgram(i,[a],a.dtype,p)}};d("fM0z2");var eR=d("dcVMt");let iL=as({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),iG={kernelName:eR.Round,backendName:"webgl",kernelFunc:iL};d("fM0z2");var eR=d("dcVMt");let iB=as({opSnippet:"return inversesqrt(x);",cpuKernelImpl:rp}),iW={kernelName:eR.Rsqrt,backendName:"webgl",kernelFunc:iB};d("fM0z2");var W=d("4ajhx"),g=d("alePs"),eR=d("dcVMt");class iU{constructor(e,t,r,a,n,s,o=!0,i=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=s;let l=eu(n.length),u=eu(s.length),p="";1===r?p="i":2===r&&(p="i, j");let c=`getIndices(${p})`,d="";1===a?d="i":2===a&&(d="i, coords[1]");let h=`getUpdates(${d})`,f="";i&&(f="coords[0], coords[1]");let m=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${c});
              flattenedIndex += index * ${t>1?"strides[j]":"strides"};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(${m}, sum, float(found)));
        }
      `}}class ij{constructor(e,t,r,a,n,s,o=!0,i=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s;let l=eu(n.length),u=eu(s.length),p="";1===r?p="i":2===r&&(p="i, j");let c=`getIndices(${p})`,d="";1===a?d="i":2===a&&(d="i, coords[1]");let h=`getUpdates(${d})`,f="";i&&(f="coords[0], coords[1]");let m=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${n});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${c});
              flattenedIndex += index.xz * ${t>1?"strides[j]":"strides"};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${t>1?"strides[j + 1]":"strides"};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${h};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${m}, sum, found));
        }
      `}}let iK={kernelName:eR.ScatterNd,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{indices:s,updates:o}=r,{shape:i}=n,{sliceRank:l,numUpdates:u,sliceSize:p,strides:c,outputSize:d}=W.calculateShapes(o,s,i),h=[d/p,p];if(0===d)return a.makeTensorInfo(i,s.dtype);let f=af({inputs:{x:s},backend:a,attrs:{shape:[u,l]}}),m=af({inputs:{x:o},backend:a,attrs:{shape:[u,p]}}),x=a.makeTensorInfo([],"float32",new Float32Array([0]));t=(0,g.env)().getBool("WEBGL_PACK")?new ij(u,l,f.shape.length,m.shape.length,c,h):new iU(u,l,f.shape.length,m.shape.length,c,h);let y=a.runWebGLProgram(t,[m,f,x],m.dtype),b=af({inputs:{x:y},backend:a,attrs:{shape:i}});return a.disposeIntermediateTensorInfo(f),a.disposeIntermediateTensorInfo(m),a.disposeIntermediateTensorInfo(y),a.disposeIntermediateTensorInfo(x),b}};d("fM0z2");var eR=d("dcVMt");d("fM0z2");var g=d("alePs");class iq{constructor(e,t,r,a){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,r];let n=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,s=2===(0,g.env)().getNumber("WEBGL_VERSION")?"while (left < right) {":n;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${s}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${"left"===a?"<":"<="} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}let iH={kernelName:eR.SearchSorted,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{sortedSequence:n,values:s}=t,{side:o}=a,i=new iq(n.shape[0],n.shape[1],s.shape[1],o),l=[[n.shape[1]]];return r.runWebGLProgram(i,[n,s],"int32",l)}};d("fM0z2");var eR=d("dcVMt"),to=d("8IARK");class iX{constructor(e,t,r){let a,n;if(this.variableNames=["c","a","b"],this.outputShape=t,r>4)throw Error(`Where for rank ${r} is not yet supported`);if(1===r)n="resRC",a="resRC";else{let r=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[],o=[];for(let a=0;a<t.length;a++)o.push(`${r[a]}`),a<e&&s.push(`${r[a]}`);a=s.join(),n=o.join()}let s=eu(r);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        float cVal = getC(${a});
        if (cVal >= 1.0) {
          setOutput(getA(${n}));
        } else {
          setOutput(getB(${n}));
        }
      }
    `}}let iJ={kernelName:eR.Select,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{condition:a,t:n,e:s}=t,o=new iX(a.shape.length,n.shape,n.shape.length);return r.runWebGLProgram(o,[a,n,s],(0,to.upcastType)(n.dtype,s.dtype))}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let iY=as({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${W.SELU_SCALEALPHA};
  float scale = ${W.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`}),iZ={kernelName:eR.Selu,backendName:"webgl",kernelFunc:iY};d("fM0z2");var eR=d("dcVMt");let iQ=as({opSnippet:an+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:rd}),i0={kernelName:eR.Sigmoid,backendName:"webgl",kernelFunc:iQ};d("fM0z2");var eR=d("dcVMt");let i1=as({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),i2={kernelName:eR.Sign,backendName:"webgl",kernelFunc:i1};d("fM0z2");var eR=d("dcVMt");let i3=as({opSnippet:an+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${r2}
  return result;
`}),i4={kernelName:eR.Sin,backendName:"webgl",kernelFunc:i3};d("fM0z2");var eR=d("dcVMt");let i6=as({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),i5={kernelName:eR.Sinh,backendName:"webgl",kernelFunc:i6};d("fM0z2");var eR=d("dcVMt");let i8=as({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),i9={kernelName:eR.Softplus,backendName:"webgl",kernelFunc:i8};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let i7={kernelName:eR.SpaceToBatchND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{blockShape:s,paddings:o}=a;x.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let i=s.reduce((e,t)=>e*t),l=[[0,0]];l.push(...o);for(let e=1+s.length;e<n.shape.length;++e)l.push([0,0]);let u=[],p=il({inputs:{x:n},backend:r,attrs:{paddings:l,constantValue:0}}),c=W.getReshaped(p.shape,s,i,!1),d=W.getPermuted(c.length,s.length,!1),h=W.getReshapedPermuted(p.shape,s,i,!1),f=af({inputs:{x:p},backend:r,attrs:{shape:c}}),m=aN({inputs:{x:f},backend:r,attrs:{perm:d}}),g=af({inputs:{x:m},backend:r,attrs:{shape:h}});return u.push(p),u.push(f),u.push(m),u.forEach(e=>r.disposeIntermediateTensorInfo(e)),g}};d("fM0z2");var eR=d("dcVMt");let le={kernelName:eR.SparseFillEmptyRows,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{indices:a,values:n,denseShape:s,defaultValue:o}=t;if(1!==s.shape.length)throw Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(2!==a.shape.length)throw Error(`Indices must be a matrix, saw:
         ${a.shape}`);if(1!==n.shape.length)throw Error(`Values must be a vector, saw:
         ${n.shape}`);if(0!==o.shape.length)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let i=r.readSync(a.dataId),l=r.readSync(n.dataId),u=r.readSync(s.dataId),p=r.readSync(o.dataId)[0],[c,d,h,f,m]=rm(i,a.shape,a.dtype,l,n.dtype,u,p);return[r.makeTensorInfo(d,a.dtype,c),r.makeTensorInfo([d[0]],n.dtype,h),r.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),r.makeTensorInfo([m.length],a.dtype,new Int32Array(m))]}};d("fM0z2");var eR=d("dcVMt");let lt={kernelName:eR.SparseReshape,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{inputIndices:a,inputShape:n,newShape:s}=t;if(2!==a.shape.length)throw Error(`Input indices should be a matrix but received shape ${a.shape}`);if(1!==n.shape.length)throw Error(`Input shape should be a vector but received shape ${n.shape}`);if(1!==s.shape.length)throw Error(`Target shape should be a vector but received shape ${s.shape}`);let o=Array.from(r.readSync(n.dataId)),i=r.readSync(a.dataId),l=Array.from(r.readSync(s.dataId)),[u,p,c]=rg(i,a.shape,a.dtype,o,l);return[r.makeTensorInfo(p,a.dtype,u),r.makeTensorInfo([c.length],s.dtype,new Int32Array(c))]}};d("fM0z2");var eR=d("dcVMt");let lr={kernelName:eR.SparseSegmentMean,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{data:a,indices:n,segmentIds:s}=t;if(a.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
              ${n.shape}`);if(1!==s.shape.length)throw Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let o=r.readSync(a.dataId),i=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,p]=rx(o,a.shape,a.dtype,i,l,!0);return r.makeTensorInfo(p,a.dtype,u)}};d("fM0z2");var eR=d("dcVMt");let la={kernelName:eR.SparseSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r}=e,{data:a,indices:n,segmentIds:s}=t;if(a.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==n.shape.length)throw Error(`Indices should be a vector but received shape
             ${n.shape}`);if(1!==s.shape.length)throw Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let o=r.readSync(a.dataId),i=r.readSync(n.dataId),l=r.readSync(s.dataId),[u,p]=rx(o,a.shape,a.dtype,i,l);return r.makeTensorInfo(p,a.dtype,u)}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let ln={kernelName:eR.SparseToDense,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{sparseIndices:n,sparseValues:s,defaultValue:o}=t,{outputShape:i}=a,{sliceRank:l,numUpdates:u,sliceSize:p,strides:c,outputSize:d}=W.calculateShapes(s,n,i);if("string"===s.dtype){let e=r.bufferSync(n),t=rc(e,r.bufferSync(s),i,d,p,u,l,c,x.decodeString(r.readSync(o.dataId)[0]),!1);return r.makeTensorInfo(i,t.dtype,t.values)}let h=new iU(u,l,n.shape.length,s.shape.length,c,[d,1],!1),f=r.runWebGLProgram(h,[s,n,o],s.dtype),m=af({inputs:{x:f},backend:r,attrs:{shape:i}});return r.disposeIntermediateTensorInfo(f),m}};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt"),x=d("a9Xyg");let ls={kernelName:eR.SplitV,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{numOrSizeSplits:s,axis:o}=a,i=x.parseAxisParam(o,n.shape)[0],l=W.prepareSplitSize(n,s,i),u=Array(n.shape.length).fill(0),p=n.shape.slice();return l.map(e=>{let t=[...p];t[i]=e;let a=nl({inputs:{x:n},backend:r,attrs:{begin:u,size:t}});return u[i]+=e,a})}};d("fM0z2");var eR=d("dcVMt");let lo="return sqrt(x);",li=as({opSnippet:lo,packedOpSnippet:lo,cpuKernelImpl:ry}),ll={kernelName:eR.Sqrt,backendName:"webgl",kernelFunc:li};d("fM0z2");var eR=d("dcVMt");let lu=as({opSnippet:"return x * x;"}),lp={kernelName:eR.Square,backendName:"webgl",kernelFunc:lu};d("fM0z2");var eR=d("dcVMt");let lc="return (a - b) * (a - b);",ld=ao({opSnippet:lc,packedOpSnippet:lc}),lh={kernelName:eR.SquaredDifference,backendName:"webgl",kernelFunc:ld};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let lf={kernelName:eR.StaticRegexReplace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t;if("string"!==n.dtype)throw Error("Input must be of datatype string");let s=r.readSync(n.dataId),o=rb(W.fromUint8ToStringArray(s),"string",a);return r.makeTensorInfo(n.shape,"string",o)}};d("fM0z2");var eR=d("dcVMt");let lm={kernelName:eR.Step,backendName:"webgl",kernelFunc:function({inputs:e,attrs:t,backend:r}){let{x:a}=e,n=rF+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new r_(a.shape,n);return r.runWebGLProgram(s,[a],a.dtype)}};d("fM0z2");var U=d("hPfZs"),tS=d("2vt64"),eR=d("dcVMt"),x=d("a9Xyg");class lg{constructor(e,t,r){this.variableNames=["x"],this.outputShape=r;let a=r.length,n=eu(r.length),s=eu(r.length),o="";if(1===a)o="coords * strides + begin";else{let e=0;o=r.map((t,a)=>(e++,1===r.length?`coords * strides[${a}] + begin[${a}]`:`coords[${e-1}] * strides[${a}] + begin[${a}]`)).join(",")}this.userCode=`
      ${n} begin = ${n}(${e});
      ${n} strides = ${n}(${t});

      void main() {
        ${s} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}let lx={kernelName:eR.StridedSlice,backendName:"webgl",kernelFunc:function(e){let t,{inputs:r,backend:a,attrs:n}=e,{x:s}=r,{begin:o,end:i,strides:l,beginMask:u,endMask:p,ellipsisMask:c,newAxisMask:d,shrinkAxisMask:h}=n,{finalShapeSparse:f,finalShape:m,isIdentity:g,sliceDim0:y,isSimpleSlice:b,begin:v,end:T,strides:w}=tS.sliceInfo(s.shape,o,i,l,u,p,c,d,h);if(g)t=af({inputs:{x:s},backend:a,attrs:{shape:m}});else if(y||b){x.assert(s.shape.length>=1,()=>`Input must have rank at least 1, got: ${s.shape.length}`);let e=tS.computeOutShape(v,T,w),r=nl({inputs:{x:s},backend:a,attrs:{begin:v,size:e}});t=af({inputs:{x:r},backend:a,attrs:{shape:m}}),a.disposeIntermediateTensorInfo(r)}else if(a.shouldExecuteOnCPU([s])){let e=a.readSync(s.dataId),r=rv(f,(0,U.buffer)(s.shape,s.dtype,e),w,v);t=a.makeTensorInfo(m,s.dtype,r.values)}else{let e=new lg(v,w,f);t=a.runWebGLProgram(e,[s],s.dtype)}let k=af({inputs:{x:t},backend:a,attrs:{shape:m}});return a.disposeIntermediateTensorInfo(t),k}};d("fM0z2");var eR=d("dcVMt");let ly={kernelName:eR.StringNGrams,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{separator:n,nGramWidths:s,leftPad:o,rightPad:i,padWidth:l,preserveShortSequences:u}=a,{data:p,dataSplits:c}=t,[d,h]=rT(r.readSync(p.dataId),r.readSync(c.dataId),n,s,o,i,l,u);return[r.makeTensorInfo([d.length],"string",d),r.makeTensorInfo(c.shape,"int32",h)]}};d("fM0z2");var eR=d("dcVMt");let lb={kernelName:eR.StringSplit,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{skipEmpty:n}=a,{input:s,delimiter:o}=t;if("string"!==s.dtype)throw Error("Input must be of datatype string");if(1!==s.shape.length)throw Error(`Input must be a vector, got shape: ${s.shape}`);if(0!==o.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let[i,l,u]=rw(r.readSync(s.dataId),r.readSync(o.dataId)[0],n),p=l.length;return[r.makeTensorInfo([p,2],"int32",i),r.makeTensorInfo([p],"string",l),r.makeTensorInfo([2],"int32",new Int32Array(u))]}};d("fM0z2");var eR=d("dcVMt");let lv={kernelName:eR.StringToHashBucketFast,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{numBuckets:n}=a,{input:s}=t;if("string"!==s.dtype)throw Error("Input must be of datatype string");if(n<=0)throw Error("Number of buckets must be at least 1");let o=rk(r.readSync(s.dataId),n);return r.makeTensorInfo(s.shape,"int32",o)}};d("fM0z2");var eR=d("dcVMt");let lT=as({opSnippet:"return tan(x);"}),lw={kernelName:eR.Tan,backendName:"webgl",kernelFunc:lT};d("fM0z2");var eR=d("dcVMt");let lk=as({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),lN={kernelName:eR.Tanh,backendName:"webgl",kernelFunc:lk};d("fM0z2");var W=d("4ajhx"),eR=d("dcVMt");let lS={kernelName:eR.TensorScatterUpdate,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{tensor:n,indices:s,updates:o}=t,{}=a,{sliceRank:i,numUpdates:l,sliceSize:u,strides:p,outputSize:c}=W.calculateShapes(o,s,n.shape),d=[c/u,u];if(0===c)return r.makeTensorInfo(n.shape,s.dtype);let h=af({inputs:{x:s},backend:r,attrs:{shape:[l,i]}}),f=af({inputs:{x:o},backend:r,attrs:{shape:[l,u]}}),m=af({inputs:{x:n},backend:r,attrs:{shape:d}}),g=new iU(l,i,h.shape.length,f.shape.length,p,d,!1,!0),x=r.runWebGLProgram(g,[f,h,m],m.dtype),y=af({inputs:{x:x},backend:r,attrs:{shape:n.shape}});return r.disposeIntermediateTensorInfo(h),r.disposeIntermediateTensorInfo(f),r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(x),y}};d("fM0z2");var U=d("hPfZs"),eR=d("dcVMt"),x=d("a9Xyg");class lE{constructor(e,t){this.variableNames=["A"];let r=Array(e.length);for(let a=0;a<r.length;a++)r[a]=e[a]*t[a];this.outputShape=r,this.rank=r.length;let a=eu(this.rank),n=function(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;let r=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],a=[];for(let t=0;t<e.length;t++)a.push(`imod(${r[t]}, ${e[t]})`);return a.join()}(e);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        setOutput(getA(${n}));
      }
    `}}function lI(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{reps:s}=a;if("string"===n.dtype||n.shape.length>5){let e=r.readSync(n.dataId),t="string"===n.dtype?e.map(e=>x.decodeString(e)):e,a=rS((0,U.buffer)(n.shape,n.dtype,t),s);return r.makeTensorInfo(a.shape,a.dtype,a.values)}let o=new lE(n.shape,s);return r.runWebGLProgram(o,[n],n.dtype)}let lC={kernelName:eR.Tile,backendName:"webgl",kernelFunc:lI};d("fM0z2");var g=d("alePs"),eR=d("dcVMt"),x=d("a9Xyg");class l${constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class lA{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function lR(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function lM(e){let t=1;for(;t<e;)t*=2;return t}let lO={kernelName:eR.TopK,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n}=t,{k:s,sorted:o}=a,i=(0,g.env)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,g.env)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,p=u[u.length-1];if(r.shouldExecuteOnCPU([n])||p<i||s>l){let[e,t]=rE(r.readSync(n.dataId),u,n.dtype,s,o);return[r.makeTensorInfo(e.shape,e.dtype,e.values),r.makeTensorInfo(t.shape,t.dtype,t.values)]}if(0===s)return u[u.length-1]=0,[r.makeTensorInfo(u,n.dtype,[]),r.makeTensorInfo(u,"int32",[])];if(1===p)return[n,sF({attrs:{shape:u,dtype:"int32",value:0},backend:r})];let c=r.texData.get(n.dataId),d=null!==c&&c.isPacked,h=d?r.unpackTensor(n):n,f=x.sizeFromShape(u)/p,m=af({inputs:{x:h},attrs:{shape:[f,p]},backend:r});d&&lR(r,h);let y=lM(s),b=lM(p),v=null,T=()=>null===v?[m,m]:[m,v],w=(e,t,a)=>{let n=T(),s=new l$(a),o=[[p],[+(null===v)],[Number.NEGATIVE_INFINITY],[e],[t]],i=v;v=r.runWebGLProgram(s,n,"int32",o),lR(r,i)};for(let e=1;e<y;e*=2){let t=2*e;for(let r=e;r>=1;r/=2)w(t,r,[f,b])}for(let e=b;e>y;e/=2){let t=T(),a=new lA([f,e/2]),n=[[p],[+(null===v)],[y]],s=v;v=r.runWebGLProgram(a,t,"int32",n),lR(r,s);let o=y/2,i=2*o;for(let e=o;e>=1;e/=2)w(i,e,v.shape)}let k=v;v=nl({inputs:{x:v},backend:r,attrs:{begin:0,size:[f,s]}}),lR(r,k);let N=s2({inputs:{x:m,indices:v},backend:r,attrs:{axis:1,batchDims:1}});lR(r,m);let S=u.slice(0,-1);S.push(s),k=v,v=af({inputs:{x:v},attrs:{shape:S},backend:r}),lR(r,k);let E=N;return N=af({inputs:{x:N},attrs:{shape:S},backend:r}),lR(r,E),[N,v]}};d("fM0z2");var eR=d("dcVMt");class lV{constructor(e,t,r,a,n,s){let o;switch(this.variableNames=["Image","Transforms"],this.outputShape=s,a){case"constant":default:o=1;break;case"reflect":o=2;break;case"wrap":o=3;break;case"nearest":o=4}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${o} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${o} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${o} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${n});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${n});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${"nearest"===r?1:2} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}let lP={kernelName:eR.Transform,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{image:n,transforms:s}=t,{interpolation:o,fillMode:i,fillValue:l,outputShape:u}=a,[p,c,d,h]=n.shape,[f,m]=null!=u?u:[c,d],g=new lV(c,d,o,i,l,[p,f,m,h]);return r.runWebGLProgram(g,[n,s],"float32")}};d("fM0z2");var eR=d("dcVMt");let lD={kernelName:eR.Unique,backendName:"webgl",kernelFunc:function(e){let{inputs:t,attrs:r,backend:a}=e,{axis:n}=r,{x:s}=t;G(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let{outputValues:o,outputShape:i,indices:l}=rC(a.readSync(s.dataId),n,s.shape,s.dtype);return[a.makeTensorInfo(i,s.dtype,o),a.makeTensorInfo([l.length],"int32",l)]}};d("fM0z2");var eR=d("dcVMt");let l_={kernelName:eR.Unpack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{value:n}=t,{axis:s}=a;s<0&&(s+=n.shape.length);let o=n.shape.length,i=n.shape[s],l=Array(o-1),u=0;for(let e=0;e<o;e++)e!==s&&(l[u++]=n.shape[e]);let p=[],c=Array(o).fill(0),d=n.shape.slice();d[s]=1;let h=Array(i);for(let e=0;e<h.length;e++){c[s]=e;let t=nl({inputs:{x:n},backend:r,attrs:{begin:c,size:d}}),a=af({inputs:{x:t},backend:r,attrs:{shape:l}});h[e]=a,p.push(t)}return p.forEach(e=>r.disposeIntermediateTensorInfo(e)),h}};d("fM0z2");var W=d("4ajhx"),to=d("8IARK"),eR=d("dcVMt"),x=d("a9Xyg");class lF{constructor(e,t){this.variableNames=["x","segmentIds"];let r=e.windowSize,a=e.batchSize,n=e.inSize,s=e.numSegments,o=s*Math.ceil(n/r);this.outputShape=[a,o];let i=4*Math.floor(r/4),l=r%4,u=`
        sumValue += dot(values, segFilter);
    `,p="";n%r>0&&(p=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return initializationValue;
        }
      `);let c="";n%r>0&&(c=`
        if (inIdx < 0 || inIdx >= ${n}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${c}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${s})) * float(${r}));
        int currentSeg = int(mod(float(outIdx), float(${s})));

        float sumValue = 0.0;

        for (int i = 0; i < ${i}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${u}
        }

        int inIdx = inOffset + ${i};
        if (${1===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${u}
        } else if (${2===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${u}
        } else if (${3===l}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${u}
        }
        setOutput(sumValue);
      }
    `}}for(let e of[aI,a$,aR,aO,aD,az,aL,aG,aj,aK,aH,aJ,aZ,a0,a2,a6,a5,a7,ne,nt,nn,np,nc,nf,nm,nT,nN,nI,r8,nA,n_,nj,nJ,nZ,nQ,n0,n1,n3,n6,n8,sr,sa,sn,so,su,sd,sh,sm,sx,sy,sv,sw,sN,sE,sC,sA,sO,sD,sz,sG,sU,sK,sX,sY,sZ,s0,s3,s6,s8,r6,s9,nP,oe,or,on,ae,oo,ol,ou,oc,oh,om,ox,ob,ow,oN,oE,oC,o$,oA,oO,oV,oP,oD,o_,oz,oB,oU,oQ,ah,o2,o4,o5,o9,ny,ie,ia,is,iu,ic,aa,id,ih,im,ig,iy,nv,oq,iv,iw,iN,am,iI,i$,iM,iV,i_,iz,iG,iW,iK,iH,iJ,iZ,i0,i2,i4,i5,nu,oZ,i9,i7,le,lt,lr,la,ln,ls,ll,lp,lh,lf,lm,lx,ly,lb,lv,oJ,ak,lw,lN,lS,lC,lO,lP,aS,lD,l_,{kernelName:eR.UnsortedSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:r,attrs:a}=e,{x:n,segmentIds:s}=t,{numSegments:o}=a,i=n.shape.length,l=[],u=0,p=W.getAxesPermutation([u],i),c=n;null!=p&&(c=aN({inputs:{x:n},backend:r,attrs:{perm:p}}),l.push(c),u=W.getInnerMostAxes(1,i)[0]);let d=W.segment_util.computeOutShape(c.shape,u,o),h=x.sizeFromShape([c.shape[u]]),f=af({inputs:{x:c},backend:r,attrs:{shape:[-1,h]}});l.push(f);let m=(0,to.sumOutType)(n.dtype),g=(e,t,a,n,s)=>{let o=e.shape[0],i=e.shape[1],u=W.segment_util.segOpComputeOptimalWindowSize(i,s),p=new lF({windowSize:u,inSize:i,batchSize:o,numSegments:s},t),c=r.compileAndRun(p,[e,a],n);if(l.push(c),c.shape[1]===s)return c;let d=ix({backend:r,attrs:{start:0,stop:s,step:1,dtype:"float32"}}),h=lI({inputs:{x:d},backend:r,attrs:{reps:[i/u]}});return l.push(d),l.push(h),g(c,t,h,n,s)},y=af({inputs:{x:g(f,"unsortedSegmentSum",s,m,o)},backend:r,attrs:{shape:d}}),b=y;return null!=p&&(l.push(y),b=aN({inputs:{x:b},backend:r,attrs:{perm:W.getUndoAxesPermutation(p)}})),l.forEach(e=>r.disposeIntermediateTensorInfo(e)),b}},ir])(0,rZ.registerKernel)(e);var lz=d("g1SDc");let lL=["tench","tinca tinca","goldfish","carassius auratus","great white shark","white shark","man-eater","man-eating shark","carcharodon carcharias","tiger shark","galeocerdo cuvieri","hammerhead","hammerhead shark","electric ray","crampfish","numbfish","torpedo","stingray","cock","hen","ostrich","struthio camelus","brambling","fringilla montifringilla","goldfinch","carduelis carduelis","house finch","linnet","carpodacus mexicanus","junco","snowbird","indigo bunting","indigo finch","indigo bird","passerina cyanea","robin","american robin","turdus migratorius","bulbul","jay","magpie","chickadee","water ouzel","dipper","kite","bald eagle","american eagle","haliaeetus leucocephalus","vulture","great grey owl","great gray owl","strix nebulosa","european fire salamander","salamandra salamandra","common newt","triturus vulgaris","eft","spotted salamander","ambystoma maculatum","axolotl","mud puppy","ambystoma mexicanum","bullfrog","rana catesbeiana","tree frog","tree-frog","tailed frog","bell toad","ribbed toad","tailed toad","ascaphus trui","loggerhead","loggerhead turtle","caretta caretta","leatherback turtle","leatherback","leathery turtle","dermochelys coriacea","mud turtle","terrapin","box turtle","box tortoise","banded gecko","common iguana","iguana","iguana iguana","american chameleon","anole","anolis carolinensis","whiptail","whiptail lizard","agama","frilled lizard","chlamydosaurus kingi","alligator lizard","gila monster","heloderma suspectum","green lizard","lacerta viridis","african chameleon","chamaeleo chamaeleon","komodo dragon","komodo lizard","dragon lizard","giant lizard","varanus komodoensis","african crocodile","nile crocodile","crocodylus niloticus","american alligator","alligator mississipiensis","triceratops","thunder snake","worm snake","carphophis amoenus","ringneck snake","ring-necked snake","ring snake","hognose snake","puff adder","sand viper","green snake","grass snake","king snake","kingsnake","garter snake","water snake","vine snake","night snake","hypsiglena torquata","boa constrictor","constrictor constrictor","rock python","rock snake","python sebae","indian cobra","naja naja","green mamba","sea snake","horned viper","cerastes","horned asp","cerastes cornutus","diamondback","diamondback rattlesnake","crotalus adamanteus","sidewinder","horned rattlesnake","crotalus cerastes","trilobite","harvestman","daddy longlegs","phalangium opilio","scorpion","black and gold garden spider","argiope aurantia","barn spider","araneus cavaticus","garden spider","aranea diademata","black widow","latrodectus mactans","tarantula","wolf spider","hunting spider","tick","centipede","black grouse","ptarmigan","ruffed grouse","partridge","bonasa umbellus","prairie chicken","prairie grouse","prairie fowl","peacock","quail","african grey","african gray","psittacus erithacus","macaw","sulphur-crested cockatoo","kakatoe galerita","cacatua galerita","lorikeet","coucal","bee eater","hornbill","hummingbird","jacamar","toucan","drake","red-breasted merganser","mergus serrator","goose","black swan","cygnus atratus","tusker","echidna","spiny anteater","anteater","platypus","duckbill","duckbilled platypus","duck-billed platypus","ornithorhynchus anatinus","wallaby","brush kangaroo","koala","koala bear","kangaroo bear","native bear","phascolarctos cinereus","wombat","jelly fish","sea anemone","anemone","brain coral","flatworm","platyhelminth","nematode","nematode worm","roundworm","conch","snail","slug","sea slug","nudibranch","chiton","coat-of-mail shell","sea cradle","polyplacophore","chambered nautilus","pearly nautilus","nautilus","dungeness crab","cancer magister","rock crab","cancer irroratus","fiddler crab","king crab","alaska crab","alaskan king crab","alaska king crab","paralithodes camtschatica","american lobster","northern lobster","maine lobster","homarus americanus","spiny lobster","langouste","rock lobster","crawfish","crayfish","sea crawfish","crawdad","crawdaddy","hermit crab","isopod","white stork","ciconia ciconia","black stork","ciconia nigra","spoonbill","flamingo","little blue heron","egretta caerulea","american egret","great white heron","egretta albus","bittern","crane","limpkin","aramus pictus","european gallinule","porphyrio porphyrio","american coot","marsh hen","mud hen","water hen","fulica americana","bustard","ruddy turnstone","arenaria interpres","red-backed sandpiper","dunlin","erolia alpina","redshank","tringa totanus","dowitcher","oystercatcher","oyster catcher","pelican","king penguin","aptenodytes patagonica","albatross","mollymawk","grey whale","gray whale","devilfish","eschrichtius gibbosus","eschrichtius robustus","killer whale","killer","orca","grampus","sea wolf","orcinus orca","dugong","dugong dugon","sea lion","chihuahua","japanese spaniel","maltese dog","maltese terrier","maltese","pekinese","pekingese","peke","shih-tzu","blenheim spaniel","papillon","toy terrier","rhodesian ridgeback","afghan hound","afghan","basset","basset hound","beagle","bloodhound","sleuthhound","bluetick","black-and-tan coonhound","walker hound","walker foxhound","english foxhound","redbone","borzoi","russian wolfhound","irish wolfhound","italian greyhound","whippet","ibizan hound","ibizan podenco","norwegian elkhound","elkhound","otterhound","otter hound","saluki","gazelle hound","scottish deerhound","deerhound","weimaraner","staffordshire bullterrier","staffordshire bull terrier","american staffordshire terrier","staffordshire terrier","american pit bull terrier","pit bull terrier","bedlington terrier","border terrier","kerry blue terrier","irish terrier","norfolk terrier","norwich terrier","yorkshire terrier","wire-haired fox terrier","lakeland terrier","sealyham terrier","sealyham","airedale","airedale terrier","cairn","cairn terrier","australian terrier","dandie dinmont","dandie dinmont terrier","boston bull","boston terrier","miniature schnauzer","giant schnauzer","standard schnauzer","scotch terrier","scottish terrier","scottie","tibetan terrier","chrysanthemum dog","silky terrier","sydney silky","soft-coated wheaten terrier","west highland white terrier","lhasa","lhasa apso","flat-coated retriever","curly-coated retriever","golden retriever","labrador retriever","chesapeake bay retriever","german short-haired pointer","vizsla","hungarian pointer","english setter","irish setter","red setter","gordon setter","brittany spaniel","clumber","clumber spaniel","english springer","english springer spaniel","welsh springer spaniel","cocker spaniel","english cocker spaniel","cocker","sussex spaniel","irish water spaniel","kuvasz","schipperke","groenendael","malinois","briard","kelpie","komondor","old english sheepdog","bobtail","shetland sheepdog","shetland sheep dog","shetland","collie","border collie","bouvier des flandres","bouviers des flandres","rottweiler","german shepherd","german shepherd dog","german police dog","alsatian","doberman","doberman pinscher","miniature pinscher","greater swiss mountain dog","bernese mountain dog","appenzeller","entlebucher","boxer","bull mastiff","tibetan mastiff","french bulldog","great dane","saint bernard","st bernard","eskimo dog","husky","malamute","malemute","alaskan malamute","siberian husky","dalmatian","coach dog","carriage dog","affenpinscher","monkey pinscher","monkey dog","basenji","pug","pug-dog","leonberg","newfoundland","newfoundland dog","great pyrenees","samoyed","samoyede","pomeranian","chow","chow chow","keeshond","brabancon griffon","pembroke","pembroke welsh corgi","cardigan","cardigan welsh corgi","toy poodle","miniature poodle","standard poodle","mexican hairless","timber wolf","grey wolf","gray wolf","canis lupus","white wolf","arctic wolf","canis lupus tundrarum","red wolf","maned wolf","canis rufus","canis niger","coyote","prairie wolf","brush wolf","canis latrans","dingo","warrigal","warragal","canis dingo","dhole","cuon alpinus","african hunting dog","hyena dog","cape hunting dog","lycaon pictus","hyena","hyaena","red fox","vulpes vulpes","kit fox","vulpes macrotis","arctic fox","white fox","alopex lagopus","grey fox","gray fox","urocyon cinereoargenteus","tabby","tabby cat","tiger cat","persian cat","siamese cat","siamese","egyptian cat","cougar","puma","catamount","mountain lion","painter","panther","felis concolor","lynx","leopard","panthera pardus","snow leopard","ounce","panthera uncia","jaguar","panthera onca","felis onca","lion","king of beasts","panthera leo","tiger","panthera tigris","cheetah","chetah","acinonyx jubatus","brown bear","bruin","ursus arctos","american black bear","black bear","ursus americanus","euarctos americanus","ice bear","polar bear","ursus maritimus","thalarctos maritimus","sloth bear","melursus ursinus","ursus ursinus","mongoose","meerkat","mierkat","tiger beetle","ladybug","ladybeetle","lady beetle","ladybird","ladybird beetle","ground beetle","carabid beetle","long-horned beetle","longicorn","longicorn beetle","leaf beetle","chrysomelid","dung beetle","rhinoceros beetle","weevil","fly","bee","ant","emmet","pismire","grasshopper","hopper","cricket","walking stick","walkingstick","stick insect","cockroach","roach","mantis","mantid","cicada","cicala","leafhopper","lacewing","lacewing fly","dragonfly","darning needle","devil's darning needle","sewing needle","snake feeder","snake doctor","mosquito hawk","skeeter hawk","damselfly","admiral","ringlet","ringlet butterfly","monarch","monarch butterfly","milkweed butterfly","danaus plexippus","cabbage butterfly","sulphur butterfly","sulfur butterfly","lycaenid","lycaenid butterfly","starfish","sea star","sea urchin","sea cucumber","holothurian","wood rabbit","cottontail","cottontail rabbit","hare","angora","angora rabbit","hamster","porcupine","hedgehog","fox squirrel","eastern fox squirrel","sciurus niger","marmot","beaver","guinea pig","cavia cobaya","sorrel","zebra","hog","pig","grunter","squealer","sus scrofa","wild boar","boar","warthog","hippopotamus","hippo","river horse","hippopotamus amphibius","ox","water buffalo","water ox","asiatic buffalo","bubalus bubalis","bison","ram","tup","bighorn","bighorn sheep","cimarron","rocky mountain bighorn","rocky mountain sheep","ovis canadensis","ibex","capra ibex","hartebeest","impala","aepyceros melampus","gazelle","arabian camel","dromedary","camelus dromedarius","llama","weasel","mink","polecat","fitch","foulmart","foumart","mustela putorius","black-footed ferret","ferret","mustela nigripes","otter","skunk","wood pussy","badger","armadillo","three-toed sloth","ai","bradypus tridactylus","orangutan","orang","orangutang","pongo pygmaeus","gorilla","gorilla gorilla","chimpanzee","chimp","pan troglodytes","gibbon","hylobates lar","siamang","hylobates syndactylus","symphalangus syndactylus","guenon","guenon monkey","patas","hussar monkey","erythrocebus patas","baboon","macaque","langur","colobus","colobus monkey","proboscis monkey","nasalis larvatus","marmoset","capuchin","ringtail","cebus capucinus","howler monkey","howler","titi","titi monkey","spider monkey","ateles geoffroyi","squirrel monkey","saimiri sciureus","madagascar cat","ring-tailed lemur","lemur catta","indri","indris","indri indri","indri brevicaudatus","indian elephant","elephas maximus","african elephant","loxodonta africana","lesser panda","red panda","panda","bear cat","cat bear","ailurus fulgens","giant panda","panda bear","coon bear","ailuropoda melanoleuca","barracouta","snoek","eel","coho","cohoe","coho salmon","blue jack","silver salmon","oncorhynchus kisutch","rock beauty","holocanthus tricolor","anemone fish","sturgeon","gar","garfish","garpike","billfish","lepisosteus osseus","lionfish","puffer","pufferfish","blowfish","globefish","abacus","abaya","academic gown","academic robe","judge's robe","accordion","piano accordion","squeeze box","acoustic guitar","aircraft carrier","carrier","flattop","attack aircraft carrier","airliner","airship","dirigible","altar","ambulance","amphibian","amphibious vehicle","analog clock","apiary","bee house","apron","ashcan","trash can","garbage can","wastebin","ash bin","ash-bin","ashbin","dustbin","trash barrel","trash bin","assault rifle","assault gun","backpack","back pack","knapsack","packsack","rucksack","haversack","bakery","bakeshop","bakehouse","balance beam","beam","balloon","ballpoint","ballpoint pen","ballpen","biro","band aid","banjo","bannister","banister","balustrade","balusters","handrail","barbell","barber chair","barbershop","barn","barometer","barrel","cask","barrow","garden cart","lawn cart","wheelbarrow","baseball","basketball","bassinet","bassoon","bathing cap","swimming cap","bath towel","bathtub","bathing tub","bath","tub","beach wagon","station wagon","wagon","estate car","beach waggon","station waggon","waggon","beacon","lighthouse","beacon light","pharos","beaker","bearskin","busby","shako","beer bottle","beer glass","bell cote","bell cot","bib","bicycle-built-for-two","tandem bicycle","tandem","bikini","two-piece","binder","ring-binder","binoculars","field glasses","opera glasses","birdhouse","boathouse","bobsled","bobsleigh","bob","bolo tie","bolo","bola tie","bola","bonnet","poke bonnet","bookcase","bookshop","bookstore","bookstall","bottlecap","bow","bow tie","bow-tie","bowtie","brass","memorial tablet","plaque","brassiere","bra","bandeau","breakwater","groin","groyne","mole","bulwark","seawall","jetty","breastplate","aegis","egis","broom","bucket","pail","buckle","bulletproof vest","bullet train","bullet","butcher shop","meat market","cab","hack","taxi","taxicab","caldron","cauldron","candle","taper","wax light","cannon","canoe","can opener","tin opener","car mirror","carousel","carrousel","merry-go-round","roundabout","whirligig","carpenter's kit","tool kit","carton","car wheel","cash machine","cash dispenser","automated teller machine","automatic teller machine","automated teller","automatic teller","atm","cassette","cassette player","castle","catamaran","cd player","cello","violoncello","cellular telephone","cellular phone","cellphone","cell","mobile phone","chain","chainlink fence","chain mail","ring mail","mail","chain armor","chain armour","ring armor","ring armour","chain saw","chainsaw","chest","chiffonier","commode","chime","bell","gong","china cabinet","china closet","christmas stocking","church","church building","cinema","movie theater","movie theatre","movie house","picture palace","cleaver","meat cleaver","chopper","cliff dwelling","cloak","clog","geta","patten","sabot","cocktail shaker","coffee mug","coffeepot","coil","spiral","volute","whorl","helix","combination lock","computer keyboard","keypad","confectionery","confectionary","candy store","container ship","containership","container vessel","convertible","corkscrew","bottle screw","cornet","horn","trumpet","trump","cowboy boot","cowboy hat","ten-gallon hat","cradle","crash helmet","crate","crib","cot","crock pot","croquet ball","crutch","cuirass","dam","dike","dyke","desk","desktop computer","dial telephone","dial phone","diaper","nappy","napkin","digital clock","digital watch","dining table","board","dishrag","dishcloth","dishwasher","dish washer","dishwashing machine","disk brake","disc brake","dock","dockage","docking facility","dogsled","dog sled","dog sleigh","dome","doormat","welcome mat","drilling platform","offshore rig","drum","membranophone","tympan","drumstick","dumbbell","dutch oven","electric fan","blower","electric guitar","electric locomotive","entertainment center","envelope","espresso maker","face powder","feather boa","boa","file","file cabinet","filing cabinet","fireboat","fire engine","fire truck","fire screen","fireguard","flagpole","flagstaff","flute","transverse flute","folding chair","football helmet","forklift","fountain","fountain pen","four-poster","freight car","french horn","frying pan","frypan","skillet","fur coat","garbage truck","dustcart","gasmask","respirator","gas helmet","gas pump","gasoline pump","petrol pump","island dispenser","goblet","go-kart","golf ball","golfcart","golf cart","gondola","tam-tam","gown","grand piano","grand","greenhouse","nursery","glasshouse","grille","radiator grille","grocery store","grocery","food market","market","guillotine","hair slide","hair spray","half track","hammer","hamper","hand blower","blow dryer","blow drier","hair dryer","hair drier","hand-held computer","hand-held microcomputer","handkerchief","hankie","hanky","hankey","hard disc","hard disk","fixed disk","harmonica","mouth organ","harp","mouth harp","harvester","reaper","hatchet","holster","home theater","home theatre","honeycomb","hook","claw","hoopskirt","crinoline","horizontal bar","high bar","horse cart","horse-cart","hourglass","ipod","iron","smoothing iron","jack-o'-lantern","jean","blue jean","denim","jeep","landrover","jersey","t-shirt","tee shirt","jigsaw puzzle","jinrikisha","ricksha","rickshaw","joystick","kimono","knee pad","knot","lab coat","laboratory coat","ladle","lampshade","lamp shade","laptop","laptop computer","lawn mower","mower","lens cap","lens cover","letter opener","paper knife","paperknife","library","lifeboat","lighter","light","igniter","ignitor","limousine","limo","liner","ocean liner","lipstick","lip rouge","loafer","lotion","loudspeaker","speaker","speaker unit","loudspeaker system","speaker system","loupe","jeweler's loupe","lumbermill","sawmill","magnetic compass","mailbag","postbag","mailbox","letter box","maillot","tank suit","manhole cover","maraca","marimba","xylophone","mask","matchstick","maypole","maze","labyrinth","measuring cup","medicine chest","medicine cabinet","megalith","megalithic structure","microphone","mike","microwave","microwave oven","military uniform","milk can","minibus","miniskirt","mini","minivan","missile","mitten","mixing bowl","mobile home","manufactured home","model t","modem","monastery","monitor","moped","mortar","mortarboard","mosque","mosquito net","motor scooter","scooter","mountain bike","all-terrain bike","off-roader","mountain tent","mouse","computer mouse","mousetrap","moving van","muzzle","nail","neck brace","necklace","nipple","notebook","notebook computer","obelisk","oboe","hautboy","hautbois","ocarina","sweet potato","odometer","hodometer","mileometer","milometer","oil filter","organ","pipe organ","oscilloscope","scope","cathode-ray oscilloscope","cro","overskirt","oxcart","oxygen mask","packet","paddle","boat paddle","paddlewheel","paddle wheel","padlock","paintbrush","pajama","pyjama","pj's","jammies","palace","panpipe","pandean pipe","syrinx","paper towel","parachute","chute","parallel bars","bars","park bench","parking meter","passenger car","coach","carriage","patio","terrace","pay-phone","pay-station","pedestal","plinth","footstall","pencil box","pencil case","pencil sharpener","perfume","essence","petri dish","photocopier","pick","plectrum","plectron","pickelhaube","picket fence","paling","pickup","pickup truck","pier","piggy bank","penny bank","pill bottle","pillow","ping-pong ball","pinwheel","pirate","pirate ship","pitcher","ewer","plane","carpenter's plane","woodworking plane","planetarium","plastic bag","plate rack","plow","plough","plunger","plumber's helper","polaroid camera","polaroid land camera","pole","police van","police wagon","paddy wagon","patrol wagon","black maria","poncho","pool table","billiard table","snooker table","pop bottle","soda bottle","pot","flowerpot","potter's wheel","power drill","prayer rug","prayer mat","printer","prison","prison house","projectile","projector","puck","hockey puck","punching bag","punch bag","punching ball","punchball","purse","quill","quill pen","quilt","comforter","comfort","puff","racer","race car","racing car","racket","racquet","radiator","radio","wireless","radio telescope","radio reflector","rain barrel","recreational vehicle","rv","r.v.","reel","reflex camera","refrigerator","icebox","remote control","remote","restaurant","eating house","eating place","eatery","revolver","six-gun","six-shooter","rifle","rocking chair","rocker","rotisserie","rubber eraser","rubber","pencil eraser","rugby ball","rule","ruler","running shoe","safe","safety pin","saltshaker","salt shaker","sandal","sarong","sax","saxophone","scabbard","scale","weighing machine","school bus","schooner","scoreboard","screen","crt screen","screw","screwdriver","seat belt","seatbelt","sewing machine","shield","buckler","shoe shop","shoe-shop","shoe store","shoji","shopping basket","shopping cart","shovel","shower cap","shower curtain","ski","ski mask","sleeping bag","slide rule","slipstick","sliding door","slot","one-armed bandit","snorkel","snowmobile","snowplow","snowplough","soap dispenser","soccer ball","sock","solar dish","solar collector","solar furnace","sombrero","soup bowl","space bar","space heater","space shuttle","spatula","speedboat","spider web","spider's web","spindle","sports car","sport car","spotlight","spot","stage","steam locomotive","steel arch bridge","steel drum","stethoscope","stole","stone wall","stopwatch","stop watch","stove","strainer","streetcar","tram","tramcar","trolley","trolley car","stretcher","studio couch","day bed","stupa","tope","submarine","pigboat","sub","u-boat","suit","suit of clothes","sundial","sunglass","sunglasses","dark glasses","shades","sunscreen","sunblock","sun blocker","suspension bridge","swab","swob","mop","sweatshirt","swimming trunks","bathing trunks","swing","switch","electric switch","electrical switch","syringe","table lamp","tank","army tank","armored combat vehicle","armoured combat vehicle","tape player","teapot","teddy","teddy bear","television","television system","tennis ball","thatch","thatched roof","theater curtain","theatre curtain","thimble","thresher","thrasher","threshing machine","throne","tile roof","toaster","tobacco shop","tobacconist shop","tobacconist","toilet seat","torch","totem pole","tow truck","tow car","wrecker","toyshop","tractor","trailer truck","tractor trailer","trucking rig","rig","articulated lorry","semi","tray","trench coat","tricycle","trike","velocipede","trimaran","tripod","triumphal arch","trolleybus","trolley coach","trackless trolley","trombone","vat","turnstile","typewriter keyboard","umbrella","unicycle","monocycle","upright","upright piano","vacuum","vacuum cleaner","vase","vault","velvet","vending machine","vestment","viaduct","violin","fiddle","volleyball","waffle iron","wall clock","wallet","billfold","notecase","pocketbook","wardrobe","closet","press","warplane","military plane","washbasin","handbasin","washbowl","lavabo","wash-hand basin","washer","automatic washer","washing machine","water bottle","water jug","water tower","whiskey jug","whistle","wig","window screen","window shade","windsor tie","wine bottle","wing","wok","wooden spoon","wool","woolen","woollen","worm fence","snake fence","snake-rail fence","virginia fence","wreck","yawl","yurt","web site","website","internet site","site","comic book","crossword puzzle","crossword","street sign","traffic light","traffic signal","stoplight","book jacket","dust cover","dust jacket","dust wrapper","menu","plate","guacamole","consomme","hot pot","hotpot","trifle","ice cream","icecream","ice lolly","lolly","lollipop","popsicle","french loaf","bagel","beigel","pretzel","cheeseburger","hotdog","hot dog","red hot","mashed potato","head cabbage","broccoli","cauliflower","zucchini","courgette","spaghetti squash","acorn squash","butternut squash","cucumber","cuke","artichoke","globe artichoke","bell pepper","cardoon","mushroom","granny smith","strawberry","orange","lemon","fig","pineapple","ananas","banana","jackfruit","jak","jack","custard apple","pomegranate","hay","carbonara","chocolate sauce","chocolate syrup","dough","meat loaf","meatloaf","pizza","pizza pie","potpie","burrito","red wine","espresso","cup","eggnog","alp","bubble","cliff","drop","drop-off","coral reef","geyser","lakeside","lakeshore","promontory","headland","head","foreland","sandbar","sand bar","seashore","coast","seacoast","sea-coast","valley","vale","volcano","ballplayer","baseball player","groom","bridegroom","scuba diver","rapeseed","daisy","yellow lady's slipper","yellow lady-slipper","cypripedium calceolus","cypripedium parviflorum","corn","acorn","hip","rose hip","rosehip","buckeye","horse chestnut","conker","coral fungus","agaric","gyromitra","stinkhorn","carrion fungus","earthstar","hen-of-the-woods","hen of the woods","polyporus frondosus","grifola frondosa","bolete","ear","spike","capitulum","toilet tissue","toilet paper","bathroom tissue"],lG=(...e)=>console.info("[AI-Blur][SW]",...e),lB=["snake","spider","frog","gun","blood"].map(e=>e.toLowerCase());async function lW(){try{let e=await chrome.storage.sync.get(["blocklist"]);e.blocklist?(lB=e.blocklist,lG("Loaded blocklist from storage:",lB)):lG("Using default blocklist:",lB),lK()}catch(e){lG("Error loading blocklist, using default:",e),lK()}}lW();let lU=new Map;async function lj(e){if(lU.has(e))return lU.get(e);let t=`
You are given a list of labeled concepts commonly found in image classification:
${lL.join(", ")}

Given the descriptor: "${e}", identify all relevant or conceptually similar items from the list above. 
These could be:
- synonyms or subtypes (e.g., "snake" \u{2192} "cobra", "python")
- species that match the description (e.g., "dog-like" \u{2192} "wolf", "fox", "husky")
- anything that would likely be grouped under the given descriptor by a human viewer.

Similar words should only be returned if "${e}" has the suffix -like.
Otherwise only return **exact matches from the list** above that relate to the term "${e}".
Respond with a comma-separated list of the matching cleaned labels, and nothing else.
`;try{let r=await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyBwH7qQm0BQt-WvfjTApE1V5WJMeNl-_Cc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:t}]}]})});if(!r.ok)throw Error(`Gemini API HTTP error! status: ${r.status}`);let a=await r.json();if(a?.candidates?.[0]?.content?.parts?.[0]?.text){let t=a.candidates[0].content.parts[0].text.split(",").map(e=>e.trim().toLowerCase()).filter(e=>e.length>0);return lG(`Gemini returned relevant cleaned matches for "${e}":`,t),lU.set(e,t),t}}catch(t){lG(`Error calling Gemini API for "${e}":`,t)}return[]}async function lK(){lG("Expanding blocklist using Gemini API...");let e=new Set(lB.map(e=>e.toLowerCase()));for(let t of lB)(await lj(t)).forEach(t=>e.add(t));lG("Final expanded BLOCKLIST:",lB=Array.from(e))}let lq=new class{constructor(){this.model=null,this.load()}async load(){lG("loading MobileNet...");let e=performance.now();this.model=await lz.load({version:2,alpha:1}),await this.model.classify(tf.zeros([224,224,3])),lG(`model ready in ${(performance.now()-e).toFixed(0)} ms`)}async classify(e,t,r){if(!this.model)return void setTimeout(()=>this.classify(e,t,r),3e3);lG("classify",t);let a=performance.now(),n=await this.model.classify(e,3),s=(performance.now()-a).toFixed(1),o="sensitive content",i=!1;for(let e of n)if(lB.find(t=>e.className.toLowerCase().includes(t)&&e.probability>=.01)){i=!0,o=e.className;break}lG(`preds (${s} ms)`,n.map(e=>`${e.className}:${e.probability.toFixed(2)}`)),chrome.tabs.sendMessage(r,{action:"BLUR_IF_BLOCKLIST",url:t,shouldBlur:i,classificationTag:o})}};chrome.runtime.onMessage.addListener((e,t)=>{if("CLASSIFY_IMAGE"===e.action&&t.tab){let{rawImageData:r,width:a,height:n,url:s}=e,o=new ImageData(Uint8ClampedArray.from(r),a,n);lq.classify(o,s,t.tab.id)}else"RELOAD_SETTINGS"===e.action&&lW().then(()=>{lG("Settings reloaded, notifying all tabs to reprocess images"),chrome.tabs.query({},e=>{e.forEach(e=>{chrome.tabs.sendMessage(e.id,{action:"REPROCESS_IMAGES"}).catch(()=>{})})})})})})();
//# sourceMappingURL=service_worker.js.map
