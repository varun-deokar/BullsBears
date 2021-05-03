var theword=""
var bulls=0
var bears=0


function display(word,bull,bear){
    var table=document.querySelector("table");
    
    var tr=document.createElement("tr");
    var col1 = document.createElement("td");
    col1.innerHTML=word;
    var col2 = document.createElement("td");
    col2.innerHTML=bull;
    var col3 = document.createElement("td");
    col3.innerHTML=bear;
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    table.appendChild(tr);
}

function onFormSubmitted(e){
    e.preventDefault();
    var input=document.querySelector("#chat");
    var word1=input.value;
    word=word1.toLowerCase();
    input.value='';
    if(bulls==4){
        alert("You may restart the page for a new word")
    }
    else
    {
        if(freqCheck(word)==1)
        {
        bulls=calBull(word)
        bears=calBears(word)
        console.log(word)
        display(word,bulls,bears)
            if (bulls==4)
            {
                alert("You have found the word \n WELL DONE!!!")
            }
        }
        else if(freqCheck(word)==2)
        {
            alert("Special characters or digits are not allowed")
        }
        else
        {
            alert("Word with repeating letters are not allowed")
        }
    }
}
function calBull(word){
    var bull=0
    for(var i=0;i<=3;i++)
    {
        if(word.charAt(i)==theword.charAt(i))
        {
            bull++
        }
    }
    return bull

}
function calBears(word){
    var bears=0
    for(var i=0;i<=3;i++)
    {
        for(var j=0;j<=3;j++)
        {
            if(j==i)
            {
                continue;
            }
            if(word.charAt(i)==theword.charAt(j))
            {
                bears++
            }
        }
    }
    return bears

}

function freqCheck(word){
    var ch=1;
    for (var i=0;i<=3;i++)
    {
        if(word.charCodeAt(i)>=97&&word.charCodeAt(i)<=122)
        {
            ch=1
        }
        else
        {
            return 2;
        }
    }
    for(var i=0;i<=2;i++)
    {
        for(var j=i+1;j<=3;j++)
        {
            if(word[i]===word[j])
            {
                 ch=0;
                break;
            }
        }
    }
    if (ch==0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
var dict={
    1:'acid',
    2:'aged',
    3:'also',
    4:'army',
    5:'back',
    6:'band',
    7:'bank',
    8:'base',
    9:'bath',
    10:'bear',
    11:'beat',
    12:'belt',
    13:'best',
    14:'bird',
    15:'blow',
    16:'blue',
    17:'boat',
    18:'body',
    19:'bond',
    20:'bone',
    21:'born',
    22:'both',
    23:'bowl',
    24:'bulk',
    25:'burn',
    26:'bush',
    27:'busy',
    28:'calm',
    29:'came',
    30:'camp',
    31:'card',
    32:'care',
    33:'case',
    34:'cash',
    35:'cast',
    36:'chat',
    37:'chip',
    38:'city',
    39:'club',
    40:'coal',
    41:'coat',
    42:'code',
    43:'cold',
    44:'come',
    45:'cope',
    46:'copy',
    47:'core',
    48:'cost',
    49:'crew',
    50:'crop',
    51:'dark',
    52:'date',
    53:'dawn',
    54:'days',
    55:'deal',
    56:'dean',
    57:'dear',
    58:'debt',
    59:'deny',
    60:'desk',
    61:'dial',
    62:'dick',
    63:'diet',
    64:'disc',
    65:'disk',
    66:'does',
    67:'done',
    68:'dose',
    69:'down',
    70:'draw',
    71:'drew',
    72:'drop',
    73:'drug',
    74:'dual',
    75:'duke',
    76:'dust',
    77:'duty',
    78:'each',
    79:'earn',
    80:'east',
    81:'easy',
    82:'evil',
    83:'exit',
    84:'face',
    85:'fact',
    86:'fail',
    87:'fair',
    88:'farm',
    89:'fast',
    90:'fate',
    91:'fear',
    92:'felt',
    93:'file',
    94:'film',
    95:'find',
    96:'fine',
    97:'fire',
    98:'firm',
    99:'fish',
    100:'five',
    101:'flat',
    102:'flow',
    103:'ford',
    104:'form',
    105:'fort',
    106:'four',
    107:'from',
    108:'fuel',
    109:'fund',
    110:'gain',
    111:'game',
    112:'gate',
    113:'gave',
    114:'gear',
    115:'gift',
    116:'girl',
    117:'give',
    118:'glad',
    119:'goal',
    120:'goes',
    121:'gold',
    122:'golf',
    123:'gone',
    124:'gray',
    125:'grew',
    126:'grey',
    127:'grow',
    128:'gulf',
    129:'hair',
    130:'half',
    131:'hand',
    132:'hang',
    133:'hard',
    134:'harm',
    135:'hate',
    136:'have',
    137:'head',
    138:'hear',
    139:'heat',
    140:'held',
    141:'help',
    142:'hero',
    143:'hire',
    144:'hold',
    145:'hole',
    146:'holy',
    147:'home',
    148:'hope',
    149:'host',
    150:'hour',
    151:'huge',
    152:'hung',
    153:'hunt',
    154:'hurt',
    155:'idea',
    156:'inch',
    157:'into',
    158:'iron',
    159:'item',
    160:'jack',
    161:'jane',
    162:'jean',
    163:'john',
    164:'join',
    165:'jump',
    166:'jury',
    167:'just',
    168:'kent',
    169:'kept',
    170:'kind',
    171:'king',
    172:'knew',
    173:'know',
    174:'lack',
    175:'lady',
    176:'laid',
    177:'lake',
    178:'land',
    179:'lane',
    180:'last',
    181:'late',
    182:'lead',
    183:'left',
    184:'life',
    185:'lift',
    186:'like',
    187:'line',
    188:'link',
    189:'list',
    190:'live',
    191:'load',
    192:'loan',
    193:'lock',
    194:'long',
    195:'lord',
    196:'lose',
    197:'lost',
    198:'love',
    199:'luck',
    200:'made',
    201:'mail',
    202:'main',
    203:'make',
    204:'male',
    205:'many',
    206:'mark',
    207:'meal',
    208:'mean',
    209:'meat',
    210:'menu',
    211:'mike',
    212:'mile',
    213:'milk',
    214:'mind',
    215:'mine',
    216:'mode',
    217:'more',
    218:'most',
    219:'move',
    220:'much',
    221:'must',
    222:'name',
    223:'navy',
    224:'near',
    225:'neck',
    226:'news',
    227:'next',
    228:'nice',
    229:'nick',
    230:'nose',
    231:'note',
    232:'okay',
    233:'once',
    234:'only',
    235:'open',
    236:'oral',
    237:'over',
    238:'pace',
    239:'pack',
    240:'page',
    241:'paid',
    242:'pain',
    243:'pair',
    244:'palm',
    245:'park',
    246:'part',
    247:'past',
    248:'path',
    249:'peak',
    250:'pick',
    251:'pink',
    252:'plan',
    253:'play',
    254:'plot',
    255:'plug',
    256:'plus',
    257:'port',
    258:'post',
    259:'pure',
    260:'push',
    261:'race',
    262:'rail',
    263:'rain',
    264:'rank',
    265:'rate',
    266:'read',
    267:'real',
    268:'rely',
    269:'rent',
    270:'rest',
    271:'rice',
    272:'rich',
    273:'ride',
    274:'ring',
    275:'rise',
    276:'risk',
    277:'road',
    278:'rock',
    279:'role',
    280:'rose',
    281:'rule',
    282:'rush',
    283:'ruth',
    284:'safe',
    285:'said',
    286:'sake',
    287:'sale',
    288:'salt',
    289:'same',
    290:'sand',
    291:'save',
    292:'seat',
    293:'self',
    294:'send',
    295:'sent',
    296:'sept',
    297:'ship',
    298:'shop',
    299:'shot',
    300:'show',
    301:'shut',
    302:'sick',
    303:'side',
    304:'sign',
    305:'site',
    306:'size',
    307:'skin',
    308:'slip',
    309:'slow',
    310:'snow',
    311:'soft',
    312:'soil',
    313:'sold',
    314:'sole',
    315:'some',
    316:'song',
    317:'sort',
    318:'soul',
    319:'spot',
    320:'star',
    321:'stay',
    322:'step',
    323:'stop',
    324:'such',
    325:'suit',
    326:'sure',
    327:'take',
    328:'tale',
    329:'talk',
    330:'tank',
    331:'tape',
    332:'task',
    333:'team',
    334:'tech',
    335:'tend',
    336:'term',
    337:'than',
    338:'them',
    339:'then',
    340:'they',
    341:'thin',
    342:'this',
    343:'thus',
    344:'time',
    345:'tiny',
    346:'told',
    347:'tone',
    348:'tony',
    349:'tour',
    350:'town',
    351:'trip',
    352:'true',
    353:'tune',
    354:'turn',
    355:'twin',
    356:'type',
    357:'unit',
    358:'upon',
    359:'used',
    360:'user',
    361:'vary',
    362:'vast',
    363:'very',
    364:'vice',
    365:'view',
    366:'vote',
    367:'wage',
    368:'wait',
    369:'wake',
    370:'walk',
    371:'want',
    372:'ward',
    373:'warm',
    374:'wash',
    375:'wave',
    376:'ways',
    377:'weak',
    378:'wear',
    379:'went',
    380:'west',
    381:'what',
    382:'when',
    383:'whom',
    384:'wide',
    385:'wife',
    386:'wild',
    387:'wind',
    388:'wine',
    389:'wing',
    390:'wire',
    391:'wise',
    392:'wish',
    393:'with',
    394:'word',
    395:'wore',
    396:'work',
    397:'yard',
    398:'yeah',
    399:'year',
    400:'your',
    401:'zero',
    402:'zone'
}

var rand=getRandomArbitrary(1, 402);
theword=dict[rand]
theword=theword.toLowerCase()

function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
}

var text=document.querySelector("#chat");

var button=document.querySelector("button");
button.addEventListener("click", onFormSubmitted)


