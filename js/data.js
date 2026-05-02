// Hebrew Letters Data
// Each letter: hebrew, name, sound, tigrinya transliteration of name, tigrinya sound equivalent
const LETTERS = [
  { hebrew: 'א', name: 'אָלֶף', sound: 'לפי הניקוד', nameTranslit: 'ኣለፍ', soundTigrinya: 'ከም ነጥቢ', example: 'אִמָּא', exampleMeaning: 'ኣደ', exampleTranslit: 'ኢማ' },
  { hebrew: 'בּ', name: 'בֵּית', sound: 'b', nameTranslit: 'ቤት', soundTigrinya: 'ብ', example: 'בַּיִת', exampleMeaning: 'ገዛ', exampleTranslit: 'ባይት' },
  { hebrew: 'ב', name: 'בֵית (רפה)', sound: 'v', nameTranslit: 'ቤት (ረፈ)', soundTigrinya: 'ቭ', example: 'כֶּלֶב', exampleMeaning: 'ከልቢ', exampleTranslit: 'ከለቭ' },
  { hebrew: 'ג', name: 'גִּימֶל', sound: 'g', nameTranslit: 'ጊመል', soundTigrinya: 'ግ', example: 'גָּמָל', exampleMeaning: 'ገመል', exampleTranslit: 'ጋማል' },
  { hebrew: 'ד', name: 'דָּלֶת', sound: 'd', nameTranslit: 'ዳለት', soundTigrinya: 'ድ', example: 'דָּג', exampleMeaning: 'ዓሳ', exampleTranslit: 'ዳግ' },
  { hebrew: 'ה', name: 'הֵא', sound: 'h', nameTranslit: 'ሄ', soundTigrinya: 'ህ', example: 'הַר', exampleMeaning: 'እምባ', exampleTranslit: 'ሃር' },
  { hebrew: 'ו', name: 'וָו', sound: 'v', nameTranslit: 'ቫቭ', soundTigrinya: 'ቭ', example: 'וֶרֶד', exampleMeaning: 'ዕምባባ ቀይሕ', exampleTranslit: 'ቨረድ' },
  { hebrew: 'ז', name: 'זַיִן', sound: 'z', nameTranslit: 'ዛይን', soundTigrinya: 'ዝ', example: 'זֵית', exampleMeaning: 'ኣውሊዕ', exampleTranslit: 'ዛይት' },
  { hebrew: 'ח', name: 'חֵית', sound: 'kh', nameTranslit: 'ሔት', soundTigrinya: 'ሕ', example: 'חָלָב', exampleMeaning: 'ጸባ', exampleTranslit: 'ሓላቭ' },
  { hebrew: 'ט', name: 'טֵית', sound: 't', nameTranslit: 'ጤት', soundTigrinya: 'ጥ', example: 'טַל', exampleMeaning: 'ኣውሊ', exampleTranslit: 'ጣል' },
  { hebrew: 'י', name: 'יוֹד', sound: 'y', nameTranslit: 'ዮድ', soundTigrinya: 'ይ', example: 'יָד', exampleMeaning: 'ኢድ', exampleTranslit: 'ያድ' },
  { hebrew: 'כּ', name: 'כַּף', sound: 'k', nameTranslit: 'ካፍ', soundTigrinya: 'ክ', example: 'כִּסֵּא', exampleMeaning: 'መንበር', exampleTranslit: 'ኪሴ' },
  { hebrew: 'כ', name: 'כַף (רפה)', sound: 'kh', nameTranslit: 'ካፍ (ረፈ)', soundTigrinya: 'ኽ', example: 'מֶלֶךְ', exampleMeaning: 'ንጉስ', exampleTranslit: 'መለኽ' },
  { hebrew: 'ל', name: 'לָמֶד', sound: 'l', nameTranslit: 'ላመድ', soundTigrinya: 'ል', example: 'לֵב', exampleMeaning: 'ልቢ', exampleTranslit: 'ሌቭ' },
  { hebrew: 'מ', name: 'מֵם', sound: 'm', nameTranslit: 'ሜም', soundTigrinya: 'ም', example: 'מַיִם', exampleMeaning: 'ማይ', exampleTranslit: 'ማይም' },
  { hebrew: 'נ', name: 'נוּן', sound: 'n', nameTranslit: 'ኑን', soundTigrinya: 'ን', example: 'נֵר', exampleMeaning: 'ሽምዓ', exampleTranslit: 'ኔር' },
  { hebrew: 'ס', name: 'סָמֶךְ', sound: 's', nameTranslit: 'ሳመኽ', soundTigrinya: 'ስ', example: 'סֵפֶר', exampleMeaning: 'መጽሓፍ', exampleTranslit: 'ሴፈር' },
  { hebrew: 'ע', name: 'עַיִן', sound: 'לפי הניקוד', nameTranslit: 'ዓይን', soundTigrinya: 'ዕ', example: 'עֵץ', exampleMeaning: 'ገረብ', exampleTranslit: 'ዔጽ' },
  { hebrew: 'פּ', name: 'פֵּא', sound: 'p', nameTranslit: 'ፔ', soundTigrinya: 'ፕ', example: 'פֶּרַח', exampleMeaning: 'ዕምባባ', exampleTranslit: 'ፔራሕ' },
  { hebrew: 'פ', name: 'פֵא (רפה)', sound: 'f', nameTranslit: 'ፈ (ረፈ)', soundTigrinya: 'ፍ', example: 'סוֹפֵר', exampleMeaning: 'ጸሓፊ', exampleTranslit: 'ሶፌር' },
  { hebrew: 'צ', name: 'צָדִי', sound: 'ts', nameTranslit: 'ጻዲ', soundTigrinya: 'ጽ', example: 'צִפּוֹר', exampleMeaning: 'ዑፍ', exampleTranslit: 'ጺፖር' },
  { hebrew: 'ק', name: 'קוּף', sound: 'k', nameTranslit: 'ቁፍ', soundTigrinya: 'ቅ', example: 'קוֹף', exampleMeaning: 'ዝንጀሮ', exampleTranslit: 'ቆፍ' },
  { hebrew: 'ר', name: 'רֵישׁ', sound: 'r', nameTranslit: 'ሬሽ', soundTigrinya: 'ር', example: 'רֶגֶל', exampleMeaning: 'እግሪ', exampleTranslit: 'ረገል' },
  { hebrew: 'שׁ', name: 'שִׁין', sound: 'sh', nameTranslit: 'ሺን', soundTigrinya: 'ሽ', example: 'שֶׁמֶשׁ', exampleMeaning: 'ጸሓይ', exampleTranslit: 'ሸመሽ' },
  { hebrew: 'שׂ', name: 'שִׂין', sound: 's', nameTranslit: 'ሲን', soundTigrinya: 'ስ', example: 'שָׂמֵחַ', exampleMeaning: 'ሕጉስ', exampleTranslit: 'ሳሜሓ' },
  { hebrew: 'ת', name: 'תָּו', sound: 't', nameTranslit: 'ታቭ', soundTigrinya: 'ት', example: 'תַּפּוּחַ', exampleMeaning: 'ቱፋሕ', exampleTranslit: 'ታፑሓ' },
];

// Final (sofit) letters
const SOFIT_LETTERS = [
  { hebrew: 'ך', name: 'כַף סוֹפִית', nameTranslit: 'ካፍ ሶፊት', sound: 'kh', soundTigrinya: 'ኽ', example: 'מֶלֶךְ', exampleMeaning: 'ንጉስ', exampleTranslit: 'መለኽ' },
  { hebrew: 'ם', name: 'מֵם סוֹפִית', nameTranslit: 'ሜም ሶፊት', sound: 'm', soundTigrinya: 'ም', example: 'מַיִם', exampleMeaning: 'ማይ', exampleTranslit: 'ማይም' },
  { hebrew: 'ן', name: 'נוּן סוֹפִית', nameTranslit: 'ኑን ሶፊት', sound: 'n', soundTigrinya: 'ን', example: 'חַלּוֹן', exampleMeaning: 'መስኮት', exampleTranslit: 'ሓሎን' },
  { hebrew: 'ף', name: 'פֵא סוֹפִית', nameTranslit: 'ፈ ሶፊት', sound: 'f', soundTigrinya: 'ፍ', example: 'כֶּסֶף', exampleMeaning: 'ገንዘብ', exampleTranslit: 'ከሰፍ' },
  { hebrew: 'ץ', name: 'צָדִי סוֹפִית', nameTranslit: 'ጻዲ ሶፊት', sound: 'ts', soundTigrinya: 'ጽ', example: 'עֵץ', exampleMeaning: 'ገረብ', exampleTranslit: 'ዔጽ' },
];

// Nikud (vowels) data
// vowelOffset: Ethiopic syllabic order offset from 1st-order base (1st=0,u=1,i=2,a=3,e=4,ə=5,o=6)
// mark: Hebrew combining Unicode char(s) for this nikud
const NIKUD = [
  { symbol: 'בַ', nikud: 'פַּתָח', sound: 'a', tigrinya: 'ኣ', name: 'פַּתָח - פתוח', vowelOffset: 3, mark: 'ַ' },
  { symbol: 'בָ', nikud: 'קָמָץ', sound: 'a', tigrinya: 'ኣ', name: 'קָמָץ - סגור', vowelOffset: 3, mark: 'ָ' },
  { symbol: 'בִ', nikud: 'חִירִיק', sound: 'i', tigrinya: 'ኢ', name: 'חִירִיק - נקודה', vowelOffset: 2, mark: 'ִ' },
  { symbol: 'בֵ', nikud: 'צֵירֵי', sound: 'e', tigrinya: 'ኤ', name: 'צֵירֵי - שתי נקודות', vowelOffset: 4, mark: 'ֵ' },
  { symbol: 'בֶ', nikud: 'סֶגוֹל', sound: 'e', tigrinya: 'ኤ', name: 'סֶגוֹל - שלוש נקודות', vowelOffset: 4, mark: 'ֶ' },
  { symbol: 'בֹ', nikud: 'חוֹלָם', sound: 'o', tigrinya: 'ኦ', name: 'חוֹלָם - נקודה למעלה', vowelOffset: 6, mark: 'ֹ' },
  { symbol: 'בוּ', nikud: 'שׁוּרוּק', sound: 'u', tigrinya: 'ኡ', name: 'שׁוּרוּק - נקודה בוו', vowelOffset: 1, mark: 'וּ' },
  { symbol: 'בֻ', nikud: 'קֻבּוּץ', sound: 'u', tigrinya: 'ኡ', name: 'קֻבּוּץ - שלוש נקודות', vowelOffset: 1, mark: 'ֻ' },
  { symbol: 'בְ', nikud: 'שְׁוָא', sound: 'e קצר / שקט', tigrinya: 'ኧ / ስቕ', name: 'שְׁוָא - שתי נקודות אנכיות', vowelOffset: 5, mark: 'ְ' },
];

// Vocabulary words organized by category
const WORDS = {
  family: {
    title: 'מִשְׁפָּחָה',
    titleTigrinya: 'ስድራቤት',
    emoji: '👨‍👩‍👧‍👦',
    words: [
      { hebrew: 'אִמָּא', emoji: '👩', tigrinya: 'ኣደ', translit: 'ኢማ' },
      { hebrew: 'אַבָּא', emoji: '👨', tigrinya: 'ኣቦ', translit: 'ኣባ' },
      { hebrew: 'יֶלֶד', emoji: '👦', tigrinya: 'ወዲ', translit: 'የለድ' },
      { hebrew: 'יַלְדָּה', emoji: '👧', tigrinya: 'ጓል', translit: 'ያልዳ' },
      { hebrew: 'תִּינוֹק', emoji: '👶', tigrinya: 'ሕጻን', translit: 'ቲኖቅ' },
      { hebrew: 'סַבָּא', emoji: '👴', tigrinya: 'ኣቦ ሓጎ', translit: 'ሳባ' },
      { hebrew: 'סָבְתָא', emoji: '👵', tigrinya: 'እማ ሓጎ', translit: 'ሳቭታ' },
      { hebrew: 'אָח', emoji: '👬', tigrinya: 'ሓው', translit: 'ኣሕ' },
      { hebrew: 'אָחוֹת', emoji: '👭', tigrinya: 'ሓብቲ', translit: 'ኣሖት' },
    ]
  },
  animals: {
    title: 'חַיּוֹת',
    titleTigrinya: 'እንስሳ',
    emoji: '🐾',
    words: [
      { hebrew: 'כֶּלֶב', emoji: '🐕', tigrinya: 'ከልቢ', translit: 'ከለቭ' },
      { hebrew: 'חָתוּל', emoji: '🐈', tigrinya: 'ድሙ', translit: 'ሓቱል' },
      { hebrew: 'דָּג', emoji: '🐟', tigrinya: 'ዓሳ', translit: 'ዳግ' },
      { hebrew: 'צִפּוֹר', emoji: '🐦', tigrinya: 'ዑፍ', translit: 'ጺፖር' },
      { hebrew: 'פָּרָה', emoji: '🐄', tigrinya: 'ላሕሚ', translit: 'ፓራ' },
      { hebrew: 'סוּס', emoji: '🐴', tigrinya: 'ፈረስ', translit: 'ሱስ' },
      { hebrew: 'אַרְיֵה', emoji: '🦁', tigrinya: 'ኣንበሳ', translit: 'ኣርየ' },
      { hebrew: 'פִּיל', emoji: '🐘', tigrinya: 'ሓርማዝ', translit: 'ፒል' },
      { hebrew: 'נָחָשׁ', emoji: '🐍', tigrinya: 'ተመን', translit: 'ናሓሽ' },
      { hebrew: 'פַּרְפַּר', emoji: '🦋', tigrinya: 'ቢራቢሮ', translit: 'ፓርፓር' },
    ]
  },
  food: {
    title: 'אֹכֶל',
    titleTigrinya: 'መግቢ',
    emoji: '🍎',
    words: [
      { hebrew: 'תַּפּוּחַ', emoji: '🍎', tigrinya: 'ቱፋሕ', translit: 'ታፑሓ' },
      { hebrew: 'לֶחֶם', emoji: '🍞', tigrinya: 'ባኒ', translit: 'ለሐም' },
      { hebrew: 'חָלָב', emoji: '🥛', tigrinya: 'ጸባ', translit: 'ሓላቭ' },
      { hebrew: 'מַיִם', emoji: '💧', tigrinya: 'ማይ', translit: 'ማይም' },
      { hebrew: 'בָּנָנָה', emoji: '🍌', tigrinya: 'ባናና', translit: 'ባናና' },
      { hebrew: 'עוּגָה', emoji: '🎂', tigrinya: 'ኬክ', translit: 'ዑጋ' },
      { hebrew: 'גְּלִידָה', emoji: '🍦', tigrinya: 'ጀላቶ', translit: 'ግሊዳ' },
      { hebrew: 'בֵּיצָה', emoji: '🥚', tigrinya: 'እንቋቕሖ', translit: 'ቤጻ' },
      { hebrew: 'גֶּזֶר', emoji: '🥕', tigrinya: 'ካሮት', translit: 'ገዘር' },
    ]
  },
  nature: {
    title: 'טֶבַע',
    titleTigrinya: 'ተፈጥሮ',
    emoji: '🌿',
    words: [
      { hebrew: 'שֶׁמֶשׁ', emoji: '☀️', tigrinya: 'ጸሓይ', translit: 'ሸመሽ' },
      { hebrew: 'יָרֵחַ', emoji: '🌙', tigrinya: 'ወርሒ', translit: 'ያሬሓ' },
      { hebrew: 'כּוֹכָב', emoji: '⭐', tigrinya: 'ኮኾብ', translit: 'ኮሓቭ' },
      { hebrew: 'עֵץ', emoji: '🌳', tigrinya: 'ገረብ', translit: 'ዔጽ' },
      { hebrew: 'פֶּרַח', emoji: '🌸', tigrinya: 'ዕምባባ', translit: 'ፔራሕ' },
      { hebrew: 'הַר', emoji: '⛰️', tigrinya: 'እምባ', translit: 'ሃር' },
      { hebrew: 'יָם', emoji: '🌊', tigrinya: 'ባሕሪ', translit: 'ያም' },
      { hebrew: 'גֶּשֶׁם', emoji: '🌧️', tigrinya: 'ዝናብ', translit: 'ገሸም' },
      { hebrew: 'עָנָן', emoji: '☁️', tigrinya: 'ደበና', translit: 'ዓናን' },
    ]
  },
  body: {
    title: 'גּוּף',
    titleTigrinya: 'ኣካላት ሰብነት',
    emoji: '🧍',
    words: [
      { hebrew: 'רֹאשׁ', emoji: '🧑', tigrinya: 'ርእሲ', translit: 'ሮሽ' },
      { hebrew: 'יָד', emoji: '✋', tigrinya: 'ኢድ', translit: 'ያድ' },
      { hebrew: 'רֶגֶל', emoji: '🦶', tigrinya: 'እግሪ', translit: 'ረገል' },
      { hebrew: 'עַיִן', emoji: '👁️', tigrinya: 'ዓይኒ', translit: 'ዓይን' },
      { hebrew: 'אֹזֶן', emoji: '👂', tigrinya: 'እዝኒ', translit: 'ኦዘን' },
      { hebrew: 'פֶּה', emoji: '👄', tigrinya: 'ኣፍ', translit: 'ፔ' },
      { hebrew: 'אַף', emoji: '👃', tigrinya: 'ኣፍንጫ', translit: 'ኣፍ' },
      { hebrew: 'לֵב', emoji: '❤️', tigrinya: 'ልቢ', translit: 'ሌቭ' },
    ]
  },
  home: {
    title: 'בַּיִת',
    titleTigrinya: 'ገዛ',
    emoji: '🏠',
    words: [
      { hebrew: 'בַּיִת', emoji: '🏠', tigrinya: 'ገዛ', translit: 'ባይት' },
      { hebrew: 'דֶּלֶת', emoji: '🚪', tigrinya: 'ማዕጾ', translit: 'ደለት' },
      { hebrew: 'חַלּוֹן', emoji: '🪟', tigrinya: 'መስኮት', translit: 'ሓሎን' },
      { hebrew: 'כִּסֵּא', emoji: '🪑', tigrinya: 'መንበር', translit: 'ኪሴ' },
      { hebrew: 'שֻׁלְחָן', emoji: 'img:img/table.svg', tigrinya: 'ጣውላ', translit: 'ሹልሓን' },
      { hebrew: 'מִטָּה', emoji: '🛏️', tigrinya: 'ዓራት', translit: 'ሚታ' },
      { hebrew: 'סֵפֶר', emoji: '📖', tigrinya: 'መጽሓፍ', translit: 'ሴፈር' },
      { hebrew: 'עִפָּרוֹן', emoji: '✏️', tigrinya: 'እርሳስ', translit: 'ዒፓሮን' },
    ]
  },
  colors: {
    title: 'צְבָעִים',
    titleTigrinya: 'ሕብርታት',
    emoji: '🎨',
    words: [
      { hebrew: 'אָדֹם', emoji: '🔴', tigrinya: 'ቀይሕ', translit: 'ኣዶም' },
      { hebrew: 'כָּחֹל', emoji: '🔵', tigrinya: 'ሰማያዊ', translit: 'ካሖል' },
      { hebrew: 'יָרֹק', emoji: '🟢', tigrinya: 'ቀጠልያ', translit: 'ያሮቅ' },
      { hebrew: 'צָהֹב', emoji: '🟡', tigrinya: 'ብጫ', translit: 'ጻሆቭ' },
      { hebrew: 'לָבָן', emoji: '⚪', tigrinya: 'ጻዕዳ', translit: 'ላቫን' },
      { hebrew: 'שָׁחֹר', emoji: '⚫', tigrinya: 'ጸሊም', translit: 'ሻሖር' },
      { hebrew: 'כָּתֹם', emoji: '🟠', tigrinya: 'ኣራንቾኒ', translit: 'ካቶም' },
      { hebrew: 'וָרֹד', emoji: 'img:img/pink.svg', tigrinya: 'ሮዛ', translit: 'ቫሮድ' },
    ]
  },
  numbers: {
    title: 'מִסְפָּרִים',
    titleTigrinya: 'ቁጽርታት',
    emoji: '🔢',
    words: [
      { hebrew: 'אַחַת', emoji: '1️⃣', tigrinya: 'ሓደ', translit: 'ኣሓት' },
      { hebrew: 'שְׁתַּיִם', emoji: '2️⃣', tigrinya: 'ክልተ', translit: 'ሽታይም' },
      { hebrew: 'שָׁלוֹשׁ', emoji: '3️⃣', tigrinya: 'ሰለስተ', translit: 'ሻሎሽ' },
      { hebrew: 'אַרְבַּע', emoji: '4️⃣', tigrinya: 'ኣርባዕተ', translit: 'ኣርባ' },
      { hebrew: 'חָמֵשׁ', emoji: '5️⃣', tigrinya: 'ሓሙሽተ', translit: 'ሓሜሽ' },
      { hebrew: 'שֵׁשׁ', emoji: '6️⃣', tigrinya: 'ሽድሽተ', translit: 'ሼሽ' },
      { hebrew: 'שֶׁבַע', emoji: '7️⃣', tigrinya: 'ሸውዓተ', translit: 'ሸቫ' },
      { hebrew: 'שְׁמוֹנֶה', emoji: '8️⃣', tigrinya: 'ሸሞንተ', translit: 'ሽሞነ' },
      { hebrew: 'תֵּשַׁע', emoji: '9️⃣', tigrinya: 'ትሽዓተ', translit: 'ቴሻ' },
      { hebrew: 'עֶשֶׂר', emoji: '🔟', tigrinya: 'ዓሰርተ', translit: 'ዔሰር' },
    ]
  }
};

// Stories for reading practice
const STORIES = [
  {
    title: 'הַכֶּלֶב שֶׁלִּי',
    titleTigrinya: 'ናተይ ከልቢ',
    titleTranslit: 'ሃከለቭ ሸሊ',
    cover: '🐕',
    pages: [
      {
        hebrew: 'יֵשׁ לִי כֶּלֶב.',
        words: ['יֵשׁ', 'לִי', 'כֶּלֶב.'],
        tigrinya: ['ኣሎኒ', '(ንዓይ)', 'ከልቢ.'],
        translit: ['ዬሽ', 'ሊ', 'ከለቭ.'],
        fullTigrinya: 'ከልቢ ኣሎኒ.',
        emoji: '🧒🐕'
      },
      {
        hebrew: 'הַכֶּלֶב שֶׁלִּי קָטָן.',
        words: ['הַכֶּלֶב', 'שֶׁלִּי', 'קָטָן.'],
        tigrinya: ['ከልበይ', '(ናተይ)', 'ንእሽተይ እዩ.'],
        translit: ['ሃከለቭ', 'ሸሊ', 'ቃጣን.'],
        fullTigrinya: 'ከልበይ ንእሽተይ እዩ.',
        emoji: '🐶'
      },
      {
        hebrew: 'קוֹרְאִים לוֹ דָּנִי.',
        words: ['קוֹרְאִים', 'לוֹ', 'דָּנִי.'],
        tigrinya: ['ዳኒ', 'ይብሉዎ', '(ንዕኡ).'],
        translit: ['ቆርኢም', 'ሎ', 'ዳኒ.'],
        fullTigrinya: 'ዳኒ ዝብሉዎ ሽሙ.',
        emoji: '🏷️🐕'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לָרוּץ.',
        words: ['דָּנִי', 'אוֹהֵב', 'לָרוּץ.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምጉያይ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ላሩጽ.'],
        fullTigrinya: 'ዳኒ ምጉያይ ይፈቱ.',
        emoji: '🐕💨'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לֶאֱכוֹל.',
        words: ['דָּנִי', 'אוֹהֵב', 'לֶאֱכוֹל.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምብላዕ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ለኤኮል.'],
        fullTigrinya: 'ዳኒ ምብላዕ ይፈቱ.',
        emoji: '🐕🍖'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לִישׁוֹן.',
        words: ['דָּנִי', 'אוֹהֵב', 'לִישׁוֹן.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምድቃስ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ሊሾን.'],
        fullTigrinya: 'ዳኒ ምድቃስ ይፈቱ.',
        emoji: '🐕😴'
      },
      {
        hebrew: 'אֲנִי אוֹהֵב אֶת דָּנִי.',
        words: ['אֲנִי', 'אוֹהֵב', 'אֶת', 'דָּנִי.'],
        tigrinya: ['ኣነ', 'እፈትዎ', '(ንዕኡ)', 'ንዳኒ.'],
        translit: ['ኣኒ', 'ኦሄቭ', 'ኤት', 'ዳኒ.'],
        fullTigrinya: 'ኣነ ንዳኒ እፈትዎ.',
        emoji: '🧒❤️🐕'
      },
      {
        hebrew: 'וְדָּנִי אוֹהֵב אוֹתִי!',
        words: ['וְדָּנִי', 'אוֹהֵב', 'אוֹתִי!'],
        tigrinya: ['ዳኒ ድማ', 'ይፈትወኒ', '(ንዓይ)!'],
        translit: ['ቨዳኒ', 'ኦሄቭ', 'ኦቲ!'],
        fullTigrinya: 'ዳኒ ድማ ይፈትወኒ!',
        emoji: '🐕❤️🧒'
      },
      {
        type: 'mcq',
        question: 'מִי זֶה דָּנִי?',
        questionTigrinya: 'ዳኒ መን እዩ?',
        questionTranslit: 'ሜ ዘ ዳኒ?',
        options: ['חָתוּל', 'יֶלֶד', 'בּוּבָּה', 'כֶּלֶב'],
        optionsTigrinya: ['ድሙ', 'ወዲ', 'ቡቡ', 'ከልቢ'],
        optionsTranslit: ['ሓቱל', 'የለድ', 'ቡባ', 'ከለቭ'],
        correct: 3,
        emoji: '❓'
      },
      {
        type: 'truefalse',
        items: [
          { text: 'דָּנִי אוֹהֵב לָרוּץ',              tigrinya: 'ዳኒ ምጉያይ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ላሩጽ',         correct: true  },
          { text: 'דָּנִי אוֹהֵב חֲתוּלִים',           tigrinya: 'ዳኒ ድሙታት ይፈቱ',             translit: 'ዳኒ ኦሄቭ ሓቱሊም',        correct: false },
          { text: 'דָּנִי אוֹהֵב לְנַקּוֹת',           tigrinya: 'ዳኒ ምጽርራይ ይፈቱ',            translit: 'ዳኒ ኦሄቭ ለናቆት',         correct: false },
          { text: 'דָּנִי אוֹהֵב לִישׁוֹן',            tigrinya: 'ዳኒ ምድቃስ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ሊሾን',          correct: true  },
          { text: 'דָּנִי אוֹהֵב לִרְאוֹת טֶלֶוִיזְיָה', tigrinya: 'ዳኒ ቴሌቪዥን ምርኣይ ይፈቱ',     translit: 'ዳኒ ኦሄቭ ሊርኦት ቴሌቪዝያ', correct: false },
          { text: 'דָּנִי אוֹהֵב לֶאֱכוֹל',            tigrinya: 'ዳኒ ምብላዕ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ለኤኮል',         correct: true  },
          { text: 'דָּנִי אוֹהֵב אוֹתִי',              tigrinya: 'ዳኒ ይፈትወኒ',                 translit: 'ዳኒ ኦሄቭ ኦቲ',           correct: true  },
        ],
        emoji: '✅❌'
      },
      {
        type: 'write',
        prompt: 'עַכְשָׁו תּוֹרְךָ! מֶה אַתָּה אוֹהֵב לַעֲשׂוֹת?',
        promptTigrinya: 'ሕጂ ተርኻ! እንታይ ትፈቱ ምግባር?',
        promptTranslit: 'ዓኽሻቭ ቶርኻ! ሜ ኣታ ኦሄቭ ላዓሶት?',
        hint: 'לִקְרֹא? לְצַיֵּר? לִשְׂחֹק כַּדּוּרֶגֶל?',
        hintTigrinya: 'ምንባብ? ምስኣል? ምጽዋት ኩዕሶ እግሪ?',
        hintTranslit: 'ሊቅሮ? ለጻዬር? ሊሽሖቅ ካዱርረጌል?',
        emoji: '✏️'
      },
    ]
  },
  {
    title: 'סָבְתָא מְבַשֶּׁלֶת',
    titleTigrinya: 'እማ ሓጎ ትኸብስ',
    titleTranslit: 'ሳቭታ ምባሸለት',
    cover: '👵🍳',
    pages: [
      {
        hebrew: 'הַיּוֹם יוֹם שִׁישִּׁי.',
        words: ['הַיּוֹם', 'יוֹם', 'שִׁישִּׁי.'],
        tigrinya: ['ሎሚ', 'መዓልቲ', 'ዓርቢ እያ.'],
        translit: ['ሃዮም', 'ዮም', 'ሺሺ.'],
        fullTigrinya: 'ሎሚ ዓርቢ እያ.',
        emoji: '📅'
      },
      {
        hebrew: 'סָבְתָא בָּאָה אֵלֵינוּ.',
        words: ['סָבְתָא', 'בָּאָה', 'אֵלֵינוּ.'],
        tigrinya: ['እማ ሓጎ', 'ናባና', 'መጺኣ.'],
        translit: ['ሳቭታ', 'ባኣ', 'ኤሌኑ.'],
        fullTigrinya: 'እማ ሓጎ ናባና መጺኣ.',
        emoji: '👵🏠'
      },
      {
        hebrew: 'סָבְתָא הָלְכָה לַמִּטְבָּח.',
        words: ['סָבְתָא', 'הָלְכָה', 'לַמִּטְבָּח.'],
        tigrinya: ['እማ ሓጎ', 'ኸደት', 'ናብ ክሽነ.'],
        translit: ['ሳቭታ', 'ሃልካ', 'ላሚጥባሕ.'],
        fullTigrinya: 'እማ ሓጎ ናብ ክሽነ ኸደት.',
        emoji: '👵🚶‍♀️'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה סִיר עַל הָאֵשׁ.',
        words: ['סָבְתָא', 'שָׂמָה', 'סִיר', 'עַל', 'הָאֵשׁ.'],
        tigrinya: ['እማ ሓጎ', 'ኣቐሚጣ', 'ድስቲ', 'ኣብ', 'ሓዊ.'],
        translit: ['ሳቭታ', 'ሳማ', 'ሲር', 'ዓል', 'ሃኤሽ.'],
        fullTigrinya: 'እማ ሓጎ ድስቲ ኣብ ሓዊ ኣቐሚጣ.',
        emoji: '👵🍲🔥'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה גֶּזֶר.',
        words: ['סָבְתָא', 'שָׂמָה', 'גֶּזֶר.'],
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ካሮት.'],
        translit: ['ሳቭታ', 'ሳማ', 'ገዘር.'],
        fullTigrinya: 'እማ ሓጎ ካሮት ኣእትያ.',
        emoji: '🥕'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה תַּפּוּחֵי אֲדָמָה.',
        words: ['סָבְתָא', 'שָׂמָה', 'תַּפּוּחֵי', 'אֲדָמָה.'],
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ድንሽ.', '(ምድሪ)'],
        translit: ['ሳቭታ', 'ሳማ', 'ታፑሔ', 'ኣዳማ.'],
        fullTigrinya: 'እማ ሓጎ ድንሽ ኣእትያ.',
        emoji: '🥔'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה בָּשָׂר.',
        words: ['סָבְתָא', 'שָׂמָה', 'בָּשָׂר.'],
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ስጋ.'],
        translit: ['ሳቭታ', 'ሳማ', 'ባሳር.'],
        fullTigrinya: 'እማ ሓጎ ስጋ ኣእትያ.',
        emoji: '🥩'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה בָּצָל.',
        words: ['סָבְתָא', 'שָׂמָה', 'בָּצָל.'],
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ሽጉርቲ.'],
        translit: ['ሳቭታ', 'ሳማ', 'ባጻል.'],
        fullTigrinya: 'እማ ሓጎ ሽጉርቲ ኣእትያ.',
        emoji: '🧅'
      },
      {
        hebrew: 'סָבְתָא שָׂמָה שׁוּם.',
        words: ['סָבְתָא', 'שָׂמָה', 'שׁוּם.'],
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ቱም.'],
        translit: ['ሳቭታ', 'ሳማ', 'ሹም.'],
        fullTigrinya: 'እማ ሓጎ ቱም ኣእትያ.',
        emoji: '🧄'
      },
      {
        hebrew: 'אֵיזֶה רֵיחַ טוֹב!',
        words: ['אֵיזֶה', 'רֵיחַ', 'טוֹב!'],
        tigrinya: ['ክንደይ', 'ጽቡቕ', 'ጨና!'],
        translit: ['ኤዘ', 'ሬሓ', 'ጦቭ!'],
        fullTigrinya: 'ክንደይ ጽቡቕ ጨና!',
        emoji: '😋👃'
      },
      {
        hebrew: 'כּוּלָּם יוֹשְׁבִים לֶאֱכוֹל.',
        words: ['כּוּלָּם', 'יוֹשְׁבִים', 'לֶאֱכוֹל.'],
        tigrinya: ['ኩሎም', 'ይቕመጡ', 'ክበልዑ.'],
        translit: ['ኩላም', 'ዮሽቪም', 'ለኤኮል.'],
        fullTigrinya: 'ኩሎም ክበልዑ ይቕመጡ.',
        emoji: '👨‍👩‍👧‍👦🍽️'
      },
      {
        hebrew: 'תּוֹדָה סָבְתָא!',
        words: ['תּוֹדָה', 'סָבְתָא!'],
        tigrinya: ['የቐንየልና', 'እማ ሓጎ!'],
        translit: ['ቶዳ', 'ሳቭታ!'],
        fullTigrinya: 'የቐንየልና እማ ሓጎ!',
        emoji: '❤️👵'
      },
      {
        type: 'mcq',
        question: 'אֵיזֶה יוֹם הַיּוֹם?',
        questionTigrinya: 'ሎሚ ኣየናይ መዓልቲ እዩ?',
        questionTranslit: 'ኤዘ ዮም ሃዮም?',
        options: ['יוֹם שֵׁנִי', 'יוֹם חֲמִישִׁי', 'יוֹם שִׁישִּׁי', 'יוֹם שַׁבָּת'],
        optionsTigrinya: ['ሰኑይ', 'ሓሙስ', 'ዓርቢ', 'ሰንበት'],
        optionsTranslit: ['ዮም ሼኒ', 'ዮም ሓሚሺ', 'ዮም ሺሺ', 'ዮም ሻባት'],
        correct: 2,
        emoji: '📅'
      },
      {
        type: 'pot',
        prompt: 'מָה שָׂמָה סָבְתָא בַּסִּיר?',
        promptTigrinya: 'ኣደ ሓጎ ናይ እንታይ ኣብ ድስቲ ኣእተወት?',
        promptTranslit: 'ማ ሳማ ሳቭታ ባሲር?',
        items: [
          { text: 'תַּפּוּחַ',           emoji: '🍎', tigrinya: 'ቱፋሕ',     translit: 'ታፑሓ',          correct: false },
          { text: 'גֶּזֶר',             emoji: '🥕', tigrinya: 'ካሮት',     translit: 'ገዘር',           correct: true  },
          { text: 'חָלָב',              emoji: '🥛', tigrinya: 'ጸባ',       translit: 'ሓላቭ',          correct: false },
          { text: 'בָּצָל',             emoji: '🧅', tigrinya: 'ሽጉርቲ',   translit: 'ባጻል',           correct: true  },
          { text: 'בֵּיצָה',            emoji: '🥚', tigrinya: 'እንቋቍቑ',   translit: 'ቤጻ',           correct: false },
          { text: 'בָּשָׂר',            emoji: '🥩', tigrinya: 'ስጋ',       translit: 'ባሳር',          correct: true  },
          { text: 'לֶחֶם',              emoji: '🍞', tigrinya: 'ባኒ',       translit: 'ለሐም',          correct: false },
          { text: 'תַּפּוּחֵי אֲדָמָה', emoji: '🥔', tigrinya: 'ድንሽ',     translit: 'ታፑሔ ኣዳማ',     correct: true  },
          { text: 'דָּג',               emoji: '🐟', tigrinya: 'ዓሳ',       translit: 'ዳግ',           correct: false },
          { text: 'שׁוּם',               emoji: '🧄', tigrinya: 'ቱም',       translit: 'ሹም',           correct: true  },
          { text: 'בָּנָנָה',           emoji: '🍌', tigrinya: 'ባናና',      translit: 'ባናና',          correct: false },
          { text: 'עוֹף',               emoji: '🍗', tigrinya: 'ዶርሆ',     translit: 'ዖፍ',           correct: false },
        ],
        emoji: '🍲'
      },
    ]
  },
  {
    title: 'יוֹם בַּגַּן',
    titleTigrinya: 'መዓልቲ ኣብ መዋእለ ህጻናት',
    titleTranslit: 'ዮም ባጋን',
    cover: '🏫',
    pages: [
      {
        hebrew: 'בַּבּוֹקֶר אֲנִי קָם.',
        words: ['בַּבּוֹקֶר', 'אֲנִי', 'קָם.'],
        tigrinya: ['ብንግሆ', 'ኣነ', 'ይትንስእ.'],
        translit: ['ባቦቀር', 'ኣኒ', 'ቃም.'],
        fullTigrinya: 'ብንግሆ ኣነ ይትንስእ.',
        emoji: '🌅🧒'
      },
      {
        hebrew: 'אֲנִי אוֹכֵל אֲרוּחַת בּוֹקֶר.',
        words: ['אֲנִי', 'אוֹכֵל', 'אֲרוּחַת', 'בּוֹקֶר.'],
        tigrinya: ['ኣነ', 'ይበልዕ', 'ናይ ንግሆ', 'መግቢ.'],
        translit: ['ኣኒ', 'ኦኸል', 'ኣሩሓት', 'ቦቀር.'],
        fullTigrinya: 'ኣነ ናይ ንግሆ መግቢ ይበልዕ.',
        emoji: '🥣🍞'
      },
      {
        hebrew: 'אִמָּא לוֹקַחַת אוֹתִי לַגַּן.',
        words: ['אִמָּא', 'לוֹקַחַת', 'אוֹתִי', 'לַגַּן.'],
        tigrinya: ['ኣደ', 'ትወስደኒ', '(ንዓይ)', 'ናብ መዋእለ ህጻናት.'],
        translit: ['ኢማ', 'ሎቃሓት', 'ኦቲ', 'ላጋን.'],
        fullTigrinya: 'ኣደ ናብ መዋእለ ህጻናት ትወስደኒ.',
        emoji: '👩🧒🏫'
      },
      {
        hebrew: 'בַּגַּן יֵשׁ לִי חֲבֵרִים.',
        words: ['בַּגַּן', 'יֵשׁ', 'לִי', 'חֲבֵרִים.'],
        tigrinya: ['ኣብ መዋእለ ህጻናት', 'ኣሎኒ', 'ንዓይ', 'ኣዕሩኽ.'],
        translit: ['ባጋን', 'ዬሽ', 'ሊ', 'ሓቨሪም.'],
        fullTigrinya: 'ኣብ መዋእለ ህጻናት ኣዕሩኽ ኣሎኒ.',
        emoji: '👦👧👦'
      },
      {
        hebrew: 'אֲנַחְנוּ מְצַיְּרִים.',
        words: ['אֲנַחְנוּ', 'מְצַיְּרִים.'],
        tigrinya: ['ንሕና', 'ንስእል.'],
        translit: ['ኣናሕኑ', 'ምጻይሪም.'],
        fullTigrinya: 'ንሕና ንስእል.',
        emoji: '🎨🖌️'
      },
      {
        hebrew: 'אֲנַחְנוּ שָׁרִים.',
        words: ['אֲנַחְנוּ', 'שָׁרִים.'],
        tigrinya: ['ንሕና', 'ንዝምር.'],
        translit: ['ኣናሕኑ', 'ሻሪም.'],
        fullTigrinya: 'ንሕና ንዝምር.',
        emoji: '🎵🎤'
      },
      {
        hebrew: 'אֲנַחְנוּ מְשַׂחֲקִים בַּחוּץ.',
        words: ['אֲנַחְנוּ', 'מְשַׂחֲקִים', 'בַּחוּץ.'],
        tigrinya: ['ንሕና', 'ንጻወት', 'ኣብ ደገ.'],
        translit: ['ኣናሕኑ', 'ምሳሓቂም', 'ባሑጽ.'],
        fullTigrinya: 'ንሕና ኣብ ደገ ንጻወት.',
        emoji: '⚽🤸'
      },
      {
        hebrew: 'אַחַר כָּךְ אֲנַחְנוּ אוֹכְלִים.',
        words: ['אַחַר', 'כָּךְ', 'אֲנַחְנוּ', 'אוֹכְלִים.'],
        tigrinya: ['ድሕሪኡ', 'ከምኡ', 'ንሕና', 'ንበልዕ.'],
        translit: ['ኣሓር', 'ካሕ', 'ኣናሕኑ', 'ኦሕሊም.'],
        fullTigrinya: 'ድሕሪኡ ንሕና ንበልዕ.',
        emoji: '🍎🥪'
      },
      {
        hebrew: 'אַבָּא בָּא לָקַחַת אוֹתִי.',
        words: ['אַבָּא', 'בָּא', 'לָקַחַת', 'אוֹתִי.'],
        tigrinya: ['ኣቦ', 'መጺኡ', 'ክወስደኒ', 'ንዓይ.'],
        translit: ['ኣባ', 'ባ', 'ላቃሓት', 'ኦቲ.'],
        fullTigrinya: 'ኣቦ ክወስደኒ መጺኡ.',
        emoji: '👨🧒'
      },
      {
        hebrew: 'הָיָה יוֹם כֵּיף!',
        words: ['הָיָה', 'יוֹם', 'כֵּיף!'],
        tigrinya: ['ጽብቕቲ', 'መዓልቲ', 'ነይራ!'],
        translit: ['ሃያ', 'ዮም', 'ኬፍ!'],
        fullTigrinya: 'ጽብቕቲ መዓልቲ ነይራ!',
        emoji: '🎉😊'
      },
      {
        type: 'order',
        prompt: 'סַדְּרוּ אֶת הַיּוֹם בְּסֵדֶר הַנָּכוֹן!',
        promptTigrinya: 'ናይ መዓልቲ ንጥቃዓት ብቅኑዕ ስርዓት ደርድሩ!',
        promptTranslit: 'ሳዴሩ ኤት ሃዮም ቤሴደር ሃናኮን!',
        emoji: '📋',
        items: [
          { text: 'קָמִים בַּבּוֹקֶר',              emoji: '🌅', tigrinya: 'ይትንስኡ ብንግሆ',          translit: 'ቃሚም ባቡቀር'        },
          { text: 'אוֹכְלִים אֲרוּחַת בּוֹקֶר',      emoji: '🥣', tigrinya: 'ናይ ንግሆ መግቢ ይበልዑ',    translit: 'ኦሕሊም ኣሩሓት ቡቀር'  },
          { text: 'הוֹלְכִים לַגַּן',                emoji: '🏫', tigrinya: 'ናብ መዋእለ ህጻናት ይኸዱ',  translit: 'ሆልሒም ላጋን'         },
          { text: 'מְצַיְּרִים',                     emoji: '🎨', tigrinya: 'ይስኣሉ',                 translit: 'ምጻይሪም'            },
          { text: 'שָׁרִים',                         emoji: '🎵', tigrinya: 'ይዝምሩ',                 translit: 'ሻሪም'              },
          { text: 'מְשַׂחֲקִים בַּחוּץ',              emoji: '⚽', tigrinya: 'ኣብ ደገ ይጻወቱ',          translit: 'ምሳሓቂም ባሑጽ'       },
          { text: 'אוֹכְלִים',                       emoji: '🍎', tigrinya: 'ይበልዑ',                 translit: 'ኦሕሊም'            },
          { text: 'הוֹלְכִים הַבַּיְתָה',             emoji: '🏠', tigrinya: 'ናብ ገዛ ይኸዱ',           translit: 'ሆልሒም ሃባዪታ'       },
        ]
      },
      {
        type: 'write',
        emoji: '✏️🏫',
        prompt: 'מָה אַתֶּם אוֹהֲבִים לַעֲשׂוֹת בְּבֵית הַסֵּפֶר? אֵיזֶה מִקְצוֹעוֹת אַתֶּם אוֹהֲבִים יוֹתֵר? מָה אַתֶּם עוֹשִׂים בַּהַפְסָקוֹת?',
        promptTigrinya: 'ኣብ ቤት ትምህርቲ እንታይ ምግባር ትፈቱ? ኣየናይ ትምህርቲ ዝያዳ ትፈቱ? ኣብ ዕረፍቲ እንታይ ትገብሩ?',
        promptTranslit: 'ማ ኣቴም ኦሃቪም ላዓሶት ቤቤይት ሃሴፈር? ኤዜ ምቅጾዖት ኣቴም ኦሃቪም ዮቴር? ማ ኣቴም ዖሲም ባሃፍሳቆት?',
      },
    ]
  },
  {
    title: 'בַּפַּארְק',
    titleTigrinya: 'ኣብ ፓርክ',
    titleTranslit: 'ባፓርቅ',
    cover: '🌳🛝',
    pages: [
      {
        hebrew: 'הַיּוֹם יוֹם שַׁבָּת.',
        words: ['הַיּוֹם', 'יוֹם', 'שַׁבָּת.'],
        tigrinya: ['ሎሚ', 'መዓልቲ', 'ሰንበት እያ.'],
        translit: ['ሃዮም', 'ዮም', 'ሻባት.'],
        fullTigrinya: 'ሎሚ ሰንበት እያ.',
        emoji: '📅☀️'
      },
      {
        hebrew: 'אַבָּא אוֹמֵר: בּוֹאוּ נֵלֵךְ לַפַּארְק!',
        words: ['אַבָּא', 'אוֹמֵר:', 'בּוֹאוּ', 'נֵלֵךְ', 'לַפַּארְק!'],
        tigrinya: ['ኣቦ', 'ይብል:', 'ኑ', 'ንኺድ', 'ናብ ፓርክ!'],
        translit: ['ኣባ', 'ኦሜር:', 'ቦኡ', 'ኔሌሕ', 'ላፓርቅ!'],
        fullTigrinya: 'ኣቦ ይብል: ኑ ናብ ፓርክ ንኺድ!',
        emoji: '👨🗣️'
      },
      {
        hebrew: 'אֲנִי רָץ לַנַּדְנֵדָה.',
        words: ['אֲנִי', 'רָץ', 'לַנַּדְנֵדָה.'],
        tigrinya: ['ኣነ', 'ይጎይ', 'ናብ ዡንግላ.'],
        translit: ['ኣኒ', 'ራጽ', 'ላናድኔዳ.'],
        fullTigrinya: 'ኣነ ናብ ዡንግላ ይጎይ.',
        emoji: 'img:img/swing.svg'
      },
      {
        hebrew: 'אֲחוֹתִי עוֹלָה עַל הַמַּגְלֵשָׁה.',
        words: ['אֲחוֹתִי', 'עוֹלָה', 'עַל', 'הַמַּגְלֵשָׁה.'],
        tigrinya: ['ሓብተይ', 'ትድይብ', 'ኣብ', 'ማግለሻ.'],
        translit: ['ኣሖቲ', 'ዖላ', 'ዓል', 'ሃማግሌሻ.'],
        fullTigrinya: 'ሓብተይ ኣብ ማግለሻ ትድይብ.',
        emoji: '👧🛝'
      },
      {
        hebrew: 'אַבָּא יוֹשֵׁב עַל הַסַּפְסָל.',
        words: ['אַבָּא', 'יוֹשֵׁב', 'עַל', 'הַסַּפְסָל.'],
        tigrinya: ['ኣቦ', 'ኮፍ ኢሉ', 'ኣብ', 'ዓራቲ.'],
        translit: ['ኣባ', 'ዮሼቭ', 'ዓል', 'ሃሳፍሳል.'],
        fullTigrinya: 'ኣቦ ኣብ ዓራቲ ኮፍ ኢሉ.',
        emoji: 'img:img/bench.svg'
      },
      {
        hebrew: 'אִמָּא נוֹתֶנֶת לָנוּ גְּלִידָה.',
        words: ['אִמָּא', 'נוֹתֶנֶת', 'לָנוּ', 'גְּלִידָה.'],
        tigrinya: ['ኣደ', 'ትህበና', '(ንዓና)', 'ጀላቶ.'],
        translit: ['ኢማ', 'ኖቴነት', 'ላኑ', 'ግሊዳ.'],
        fullTigrinya: 'ኣደ ጀላቶ ትህበና.',
        emoji: '👩🍦🍦'
      },
      {
        hebrew: 'אֲנִי אוֹהֵב אֶת יוֹם שַׁבָּת!',
        words: ['אֲנִי', 'אוֹהֵב', 'אֶת', 'יוֹם', 'שַׁבָּת!'],
        tigrinya: ['ኣነ', 'ይፈትዎ', 'ን', 'መዓልቲ', 'ሰንበት!'],
        translit: ['ኣኒ', 'ኦሄቭ', 'ኤት', 'ዮም', 'ሻባት!'],
        fullTigrinya: 'ኣነ ንሰንበት ይፈትዋ!',
        emoji: '🧒❤️☀️'
      },
      {
        type: 'pot',
        prompt: 'מָה רוֹאִים בַּפַּארְק?',
        promptTigrinya: 'ኣብ ፓርክ እንታይ ትርእዩ?',
        promptTranslit: 'ማ ሮኢም ባፓርቅ?',
        hint: 'לחצו על מה שרואים בפארק 🌳',
        successText: 'כָּל הַכָּבוֹד! מָצְאתֶם הַכֹּל!',
        emoji: '🌳',
        items: [
          { text: 'מַחְשֵׁב',   emoji: '💻', tigrinya: 'ኮምፕዩተር', translit: 'ማሕሸቭ',  correct: false },
          { text: 'נַּדְנֵדָה', emoji: 'img:img/swing.svg', tigrinya: 'ዡንግላ',    translit: 'ናድኔዳ',  correct: true  },
          { text: 'מִיטָּה',    emoji: '🛏️', tigrinya: 'ዓራት',     translit: 'ሚታ',     correct: false },
          { text: 'עֵץ',        emoji: '🌳', tigrinya: 'ዛፍ',       translit: 'ዔጽ',     correct: true  },
          { text: 'מְקָרֵר',    emoji: '🧊', tigrinya: 'ፍሪጅ',      translit: 'ምቃሬር',  correct: false },
          { text: 'מַגְלֵשָׁה', emoji: '🛝', tigrinya: 'ማግለሻ',    translit: 'ማጌሌሻ',  correct: true  },
          { text: 'עוּגָה',     emoji: '🎂', tigrinya: 'ኬክ',       translit: 'ዑጋ',     correct: false },
          { text: 'סַפְסָל',    emoji: 'img:img/bench.svg', tigrinya: 'ዓራቲ',     translit: 'ሳፍሳል',  correct: true  },
          { text: 'כַּדּוּר',   emoji: '⚽', tigrinya: 'ኩዕሶ',      translit: 'ካዱር',   correct: true  },
        ]
      },
      {
        type: 'write',
        emoji: '❤️☀️',
        prompt: 'מָה אַתֶּם אוֹהֲבִים לַעֲשׂוֹת בְּיוֹם שַׁבָּת?',
        promptTigrinya: 'ኣብ መዓልቲ ሰንበት እንታይ ምግባር ትፈቱ?',
        promptTranslit: 'ማ ኣቴም ኦሃቪም ላዓሶት ቤዮም ሻባት?',
      },
    ]
  },
  {
  title: 'הַבַּרְוָּוזוֹן הַמְּכוֹעָר',
  titleTigrinya: 'ሕሱም ዳኪዬ',
  titleTranslit: 'ሃቫርቩዞን ሃምኮዓር',
  cover: '🦆🦢',
  pages: [
    {
      hebrew: 'בְּחַוּוָה קְטַנָּה, אִמָּא בַּרְווָזָה יָשְׁבָה בַּקֵּן עַל הַבֵּיצִים שֶׁלָּהּ. לְבַסּוֹף הַבֵּיצִים הֵחֵלּוּ לְהִסָּדֵק. בְּזֶה אַחַר זֶה יָצְאוּ בַּרְווָזוֹנִים צְהוּבִּים מִתּוֹךְ קְלִיפּוֹתֵיהֶם. אֲבָל בֵּיצָה אַחַת גְּדוֹלָה עֲדַיִן הָיְתָה בַּקֵּן, וּמִמֶּנָּה יָצָא אֶפְרוֹחַ אָפֹר כָּהֶה, גָּדוֹל וּמוּזָר לְמַרְאֶה.',
      words: ['בְּחַוּוָה','קְטַנָּה,','אִמָּא','בַּרְווָזָה','יָשְׁבָה','בַּקֵּן','עַל','הַבֵּיצִים','שֶׁלָּהּ.','לְבַסּוֹף','הַבֵּיצִים','הֵחֵלּוּ','לְהִסָּדֵק.','בְּזֶה','אַחַר','זֶה','יָצְאוּ','בַּרְווָזוֹנִים','צְהוּבִּים','מִתּוֹךְ','קְלִיפּוֹתֵיהֶם.','אֲבָל','בֵּיצָה','אַחַת','גְּדוֹלָה','עֲדַיִן','הָיְתָה','בַּקֵּן,','וּמִמֶּנָּה','יָצָא','אֶפְרוֹחַ','אָפֹר','כָּהֶה,','גָּדוֹל','וּמוּזָר','לְמַרְאֶה.'],
      tigrinya: ['ኣብ','ሕርሻ','ኣደ','ዳኪዬ','ተቐሚጣ','ኣብ ኵዕሶ','ኣብ','እንቋቑሖ','ናታ།','ኣብ መወዳእታ','እንቋቑሖ','ጀሚሩ','ምፍሓቕ።','ሓደ','ድሕሪ','ሓደ','ወጺኦም','ሕጻናት','ጫሃ','ካብ','ዕፅዎኦም።','ግን','እንቋቑሖ','ዓቢ','ሓደ','ኣብ ኵዕሶ','ኔሩ,','ካብኡ','ወጸ','ጫጩት','ጸሊም','ጓጉዲ,','ዓቢ','ዕሉልን','ዝዀነ.','ናይ ምርኣይ.'],
      translit: ['ቤሓቫ','ቀጣና,','ኢማ','ባርቫዛ','ያሽቫ','ባቀን','ዓል','ሃቤጺም','ሸላ།','ለቫሶፍ','ሃቤጺም','ሔሔሉ','ለሂሳዴቅ།','ቤዜ','ኣሓር','ዜ','ያጽኡ','ባርቫዞኒም','ጸሁቢም','ሚቶኽ','ቀሊፖቴሄም།','ኣቫል','ቤጻ','ኣሓት','ዓዳይን','ሃይታ','ባቀን,','ኡሚሜና','ያጻ','ኤፍሮሓ','ኣፎር','ካሔ,','ጋዶል','ኡሙዛር','ዝዀነ.','ለማርኤ།'],
      fullTigrinya: 'ኣብ ሓንቲ ንእሽቶ ሕርሻ፣ ኣደ ዳኪዬ ኣብ ኵዕሶኣ ዋሒጣ ኣብ እንቋቑሖ ኮፍ ኢላ ነበረት። ኣብ መወዳእታ እንቋቑሖ ጀሚሩ ክፍሓቕ። ሓደ ድሕሪ ሓደ ሕጻናት ዳኪዬ ጫሃ ካብ ዕፅዎኦም ወጸ። ግን ሓደ ዓቢ እንቋቑሖ ገና ኣብ ኵዕሶ ኔሩ፣ ካብኡ ወጸ ሓደ ዓቢ ጫጩት ጸሊም ጓጉዲ፣ ዕሉልን ዝዀነ።',
      emoji: '🥚🦆'
    },
    {
      hebrew: 'אֶחָד הַבַּרְווָזוֹנִים הַצְּהֻבִּים אָמַר: \"מַעוֹלָם לֹא רָאִיתִי בַּרְווָזוֹן מְכוֹעָר כָּזֶה!\" כָּל הַבַּרְווָזוֹנִים הָאֲחֵרִים צָחֲקוּ: \"מְכוֹעָר! מְכוֹעָר!\" הַבַּרְווָזוֹן הַמְּכוֹעָר לֹא יָדַע לָמָּה הֵם צוֹעֲקִים עָלָיו. כְּשֶׁיָּצְאוּ מֵהַמַּיִם וְהִתְחִילוּ לִשְׂחֵק, הֵם צָעֲקוּ: \"לֵךְ מִפֹּה! לֹא רוֹצִים לִשְׂחֵק אִתְּךָ! אַתָּה מְכוֹעָר.\"',
      words: ['אֶחָד','הַבַּרְווָזוֹנִים','הַצְּהֻבִּים','אָמַר:','\"מַעוֹלָם','לֹא','רָאִיתִי','בַּרְווָזוֹן','מְכוֹעָר','כָּזֶה!\"','כָּל','הַבַּרְווָזוֹנִים','הָאֲחֵרִים','צָחֲקוּ:','\"מְכוֹעָר!','מְכוֹעָר!\"','הַבַּרְווָזוֹן','הַמְּכוֹעָר','לֹא','יָדַע','לָמָּה','הֵם','צוֹעֲקִים','עָלָיו.','כְּשֶׁיָּצְאוּ','מֵהַמַּיִם','וְהִתְחִילוּ','לִשְׂחֵק,','הֵם','צָעֲקוּ:','\"לֵךְ','מִפֹּה!','לֹא','רוֹצִים','לִשְׂחֵק','אִתְּךָ!','אַתָּה','מְכוֹעָר.\"'],
      tigrinya: ['ሓደ','ሕጻናት','ጫሃ','በለ:','\"ኣቐዲምካ','ኣይረኣኹን','ሕጻን','ዳኪዬ','ሕሱም','ኸዚ!\"','ኩሎም','ሕጻናት','ካልኦት','ሰሓቑ:','\"ሕሱም!','ሕሱም!\"','ሕሱም','ዳኪዬ','ኣይፈለጠን','ስለምንታይ','ይጣዕሱ','ናቱ','ዘለዉ།','ምስ','ወጹ','ካብ ማይ','ጀሚሮም','ምጽዋት,','ንሳቶም','ጣዕሱ:','\"ኪድ','ካብዚ!','ኣይንፈቱን','ምጽዋት','ምሳኻ!','ኢኻ','ሕሱም','.\"'],
      translit: ['ኤሓድ','ሃባርቫዞኒም','ሃጸሁቢም','ኣማር:','\"ሜዖላም','ሎ','ራኢቲ','ባርቫዞን','መኮዓር','ካዜ!\"','ኮል','ሃባርቫዞኒም','ሃኣሔሪም','ጻሓቁ:','\"መኮዓር!','መኮዓር!\"','ሃባርቫዞን','ሃምኮዓር','ሎ','ያዳዕ','ላማ','ሔም','ጾዓቂም','ዓላዩ།','ከሸያጽኡ','ሜሃማይም','ቬሂትሒሉ','ሊስሔቅ,','ሔም','ጻዓቁ:','\"ሌኽ','ሚፖ!','ሎ','ሮጺም','ሊስሔቅ','ኢትካ!','ኣታ','መኮዓር.\"'],
      fullTigrinya: 'ሓደ ካብ ሕጻናት ዳኪዬ ጫሃ በለ፡ "ሕሱም ሕጻን ዳኪዬ ኸዚ ኣቐዲምካ ኣይረኣኹን!" ኩሎም ካልኦት ሕጻናት ዳኪዬ ሰሓቑ፡ "ሕሱም! ሕሱም!" ሕሱም ዳኪዬ ኣይፈለጠን ስለምንታይ ይጣዕሱ ናቱ ዘለዉ። ምስ ወጹ ካብ ማይ ጀሚሮም ምጽዋት፣ ጣዕሱ፡ "ኪድ ካብዚ! ኣይንፈቱን ምሳኻ ምጽዋት! ሕሱም ኢኻ።"',
      emoji: '😢🦆'
    },
    {
      hebrew: '\"לָמָּה הֵם לֹא נוֹתְנִים לִי לְהִשָּׁאֵר כָּאן?\" חָשַׁב הַבַּרְווָזוֹן הַמְּכוֹעָר. \"אֲנִי צָרִיךְ לָלֶכֶת.\" בְּאוֹתוֹ לַיְלָה עָף הַבַּרְווָזוֹן הַמְּכוֹעָר מֵעַל גָּדֵר הֶחָצֵר. הוּא פָּגַשׁ שְׁנֵי בַּרְווָזִים מְבוּגָרִים, אֲבָל כֶּלֶב גָּדוֹל רָדַף אַחֲרֵיהֶם. אַחַר כָּךְ בָּאָה סְעָרָה גְּדוֹלָה עִם גְּשָׁמִים עַזִּים. הַבַּרְווָזוֹן הַמְּכוֹעָר מָצָא צְרִיף קָטָן בַּיַּעַר.',
      words: ['\"לָמָּה','הֵם','לֹא','נוֹתְנִים','לִי','לְהִשָּׁאֵר','כָּאן?\"','חָשַׁב','הַבַּרְווָזוֹן','הַמְּכוֹעָר.','\"אֲנִי','צָרִיךְ','לָלֶכֶת.\"','בְּאוֹתוֹ','לַיְלָה','עָף','הַבַּרְווָזוֹן','הַמְּכוֹעָר','מֵעַל','גָּדֵר','הֶחָצֵר.','הוּא','פָּגַשׁ','שְׁנֵי','בַּרְווָזִים','מְבוּגָרִים,','אֲבָל','כֶּלֶב','גָּדוֹל','רָדַף','אַחֲרֵיהֶם.','אַחַר','כָּךְ','בָּאָה','סְעָרָה','גְּדוֹלָה','עִם','גְּשָׁמִים','עַזִּים.','הַבַּרְווָזוֹן','הַמְּכוֹעָר','מָצָא','צְרִיף','קָטָן','בַּיַּעַר.'],
      tigrinya: ['\"ስለምንታይ','ንሳቶም','ኣይህቡን','ዕድሊ','ምቕማጥ','ምሳቶም','ኣብዚ?\"','ሓሰበ','ሕሱም','ዳኪዬ።','\"ኣነ','ክኸይድ','ኣለኒ።\"','ናይቲ','ለይቲ','ነፈረ','ሕሱም','ዳኪዬ','ኣብ ልዕሊ','ጃምቦ','ሓሞት።','ረኸበ','ክልተ','ዳኪዬ','ዓበይቲ,','ግን','ከልቢ','ዓቢ','ሰዓቦም።','ድሕሪኡ','መጸ','ዕቡድ','ምስ','ዝናም','ዓቢ,','ሕሱም','ዳኪዬ','ረኸበ','ጎጆ','ንእሽቶ','ኣብ ዱር.','ኣብ ዱር.','ኣብ ዱር.','ኣብ ዱር.','ኣብ ዱር.'],
      translit: ['\"ላማ','ሔም','ሎ','ኖትኒም','ሊ','ለሂሻኤር','ካን?\"','ሓሻቭ','ሃባርቫዞን','ሃምኮዓር።','\"ኣኒ','ጻሪኽ','ላለከት།\"','ቤኦቶ','ላይላ','ዓፍ','ሃባርቫዞን','ሃምኮዓር','ሜዓል','ጋዴር','ሔሓጼር།','ሁ','ፓጋሽ','ሸኔይ','ባርቫዚም','መቩጋሪም,','ኣቫል','ከለቭ','ጋዶል','ራዳፍ','ኣሓሬሔም།','ኣሓር','ካኽ','ባኣ','ሰዓራ','ገዶላ','ኢም','ገሻሚም','ዓዚም།','ሃባርቫዞን','ሃምኮዓር','ማጻ','ጸሪፍ','ቃጣን','ባያዓር.'],
      fullTigrinya: '"ስለምንታይ ንሳቶም ዕድሊ ምቕማጥ ምሳቶም ኣብዚ ኣይህቡን?" ሓሰበ ሕሱም ዳኪዬ። "ኣነ ክኸይድ ኣለኒ።" ብዝኾነ ለይቲ ሕሱም ዳኪዬ ኣብ ልዕሊ ጃምቦ ናይ ሓሞት ነፈረ። ክልተ ዓበይቲ ዳኪዬ ረኸበ፣ ግን ዓቢ ከልቢ ሰዓቦም። ድሕሪኡ ዓቢ ዕቡድ ምስ ኃይለኛ ዝናም መጸ። ሕሱም ዳኪዬ ሓደ ንእሽቶ ጎጆ ኣብ ዱር ረኸበ።',
      emoji: '⛈️🏚️'
    },
    {
      hebrew: 'בַּצְּרִיף גָּרָה אִשָּׁה זְקֵנָה עִם חָתוּל וְתַרְנְגֹלֶת. הַחָתוּל אָמַר: \"לֵךְ מִפֹּה!\" וְהַתַּרְנְגוֹלֶת קָרְקְרָה: \"צֵא הַחוּצָה!\" הַבַּרְווָזוֹן הַמִּסְכֵּן חָמַק מִבְּעַד לַדֶּלֶת וְחָזַר אֶל הַסְּעָרָה. \"אַף אֶחָד לֹא יִרְצֶה אוֹתִי לְעוֹלָם\" חָשַׁב הַבַּרְווָזוֹן הַמְּכוֹעָר עִם דִּמְעָה בְּעֵינוֹ.',
      words: ['בַּצְּרִיף','גָּרָה','אִשָּׁה','זְקֵנָה','עִם','חָתוּל','וְתַרְנְגֹלֶת.','הַחָתוּל','אָמַר:','\"לֵךְ','מִפֹּה!\"','וְהַתַּרְנְגוֹלֶת','קָרְקְרָה:','\"צֵא','הַחוּצָה!\"','הַבַּרְווָזוֹן','הַמִּסְכֵּן','חָמַק','מִבְּעַד','לַדֶּלֶת','וְחָזַר','אֶל','הַסְּעָרָה.','\"אַף','אֶחָד','לֹא','יִרְצֶה','אוֹתִי','לְעוֹלָם\"','חָשַׁב','הַבַּרְווָזוֹן','הַמְּכוֹעָר','עִם','דִּמְעָה','בְּעֵינוֹ.'],
      tigrinya: ['ኣብ ጎጆ','ትቕመጥ','ኣደባ','ዝተሳደ','ምስ','ድሙ','ዶርሆን།','ድሙ','በለ:','\"ኪድ','ካብዚ!\"','ዶርሆ','ቀርቀረት:','\"ውጻ','ናብ ወጻኢ!\"','ሕሱም ዳኪዬ','ዝስቆር','ሰሊፉ','ካብ','ማዕጾ','ተመሊሱ','ናብ','ዕቡድ ሃዋ།','\"ሓደ','እኳ','ኣይፈቱን','ነይ','ንዘለኣለም,\"','ሓሰበ','ሕሱም','ዳኪዬ','ምስ','ዓይኒ','ዝተመልኤ','ንብዓት.'],
      translit: ['ባጸሪፍ','ጋራ','ኢሻ','ዘቄና','ኢም','ሓቱል','ቬታርነጎለት།','ሃሓቱል','ኣማር:','\"ሌኽ','ሚፖ!\"','ቬሃታርነጎለት','ቃርቀራ:','\"ጼ','ሃሑጻ!\"','ሃባርቫዞን','ሃሚስኬን','ሓማቅ','ሚቤዓድ','ላዴለት','ቬሓዛር','ኤል','ሃሰዓራ།','\"ኣፍ','ኤሓድ','ሎ','ዪርጼ','ኦቲ','ለዖላም,\"','ሓሻቭ','ሃባርቫዞን','ሃምኮዓር','ኢም','ዲምዓ','ቤዔናዩ.'],
      fullTigrinya: 'ኣብ ጎጆ ሓንቲ ዝተሳደ ኣደባ ምስ ድሙን ዶርሆን ትቕመጥ ነበረት። ድሙ በለ፡ "ኪድ ካብዚ!" ዶርሆ ቀርቀረት፡ "ውጻ ናብ ወጻኢ!" ሕሱም ዳኪዬ ዝስቆር ካብ ማዕጾ ሰሊፉ ናብ ዕቡድ ሃዋ ተመሊሱ። "ሓደ እኳ ንዘለኣለም ኣይፈቱን ነይ" ሓሰበ ሕሱም ዳኪዬ ዓይኑ ምስ ንብዓት ተመልኤ።',
      emoji: '🐱🐔😢'
    },
    {
      hebrew: 'הַחֹרֶף עָבַר וְהָאָבִיב הִגִּיעַ. הַבַּרְווָזוֹן חָזַר לָאֲגָם. כְּשֶׁהִבִּיט בַּמַּיִם, הַבַּרְווָזוֹן רָאָה הִשְׁתַּקְּפוּת שֶׁל צִפּוֹר לְבָנָה וְיָפָה – הוּא עַצְמוֹ! לְהָקָה שֶׁל בַּרְבּוּרִים לְבָנִים נָחֲתָה לְיָדוֹ. \"הִשָּׁאֵר כָּאן, אִיתָּנוּ! נִהְיֶה חֲבֵרִים טוֹבִים\" אָמְרוּ. הוּא נִפְנֵף בִּכְנָפָיו וְהִמְרִיא לַשָּׁמַיִם עִם כָּל הַלְּהָקָה.',
      words: ['הַחֹרֶף','עָבַר','וְהָאָבִיב','הִגִּיעַ.','הַבַּרְווָזוֹן','חָזַר','לָאֲגָם.','כְּשֶׁהִבִּיט','בַּמַּיִם,','הַבַּרְווָזוֹן','רָאָה','הִשְׁתַּקְּפוּת','שֶׁל','צִפּוֹר','לְבָנָה','וְיָפָה','–','הוּא','עַצְמוֹ!','לְהָקָה','שֶׁל','בַּרְבּוּרִים','לְבָנִים','נָחֲתָה','לְיָדוֹ.','\"הִשָּׁאֵר','כָּאן,','אִיתָּנוּ!','נִהְיֶה','חֲבֵרִים','טוֹבִים\"','אָמְרוּ.','הוּא','נִפְנֵף','בִּכְנָפָיו','וְהִמְרִיא','לַשָּׁמַיִם','עִם','כָּל','הַלְּהָקָה.'],
      tigrinya: ['ቀውዒ','ሓለፈ','ጸደይ','መጸ།','ሕሱም ዳኪዬ','ተመልሰ','ናብ ኩሩፍ།','ምስ','ናብ ማይ','ጠመተ,','ሕሱም ዳኪዬ','ረኣየ','ነጸብራቕ','ናይ','ዑፍ','ጻዕዳ','–','ንሱ','ባዕሉ!','ኣዕዋፍ','ናይ','ሃምበሽ','ጻዕዳ','ወረዱ','ጥቓኡ།','\"ተቐመጥ','ኣብዚ,','ምሳና!','ንኹን','ዓሩኽ','ጽቡቕ\"','በሉ།','ነፈረ','ነፊፉ','ብኽናፉ','ሰጠወ','ናብ ሰማይ','ምስ','ኩሉ','ኣዕዋፍ.'],
      translit: ['ሃሖረፍ','ዓቫር','ቬሃኣቪቭ','ሂጊዓ།','ሃባርቫዞን','ሓዛር','ላኣጋም།','ከሸሂቢት','ባማይም,','ሃባርቫዞን','ራኣ','ሂሽታቀፑት','ሸል','ጺፖር','ለቫና','ቬያፋ','–','ሁ','ዓጽሞ!','ለሃቃ','ሸል','ባርቡሪም','ለቫኒም','ናሓታ','ለያዱ།','\"ሂሻኤር','ካን,','ኢታኑ!','ኒሂዬ','ሓቬሪም','ቶቪም\"','ኣምሩ።','ሁ','ኒፍኔፍ','ቢኽናፋዩ','ቬሂምሪ','ላሻማይም','ኢም','ኮል','ሃለሃቃ.'],
      fullTigrinya: 'ቀውዒ ሓለፈ ጸደይ መጸ። ሕሱም ዳኪዬ ናብ ኩሩፍ ተመልሰ። ምስ ናብ ማይ ጠመተ፣ ሕሱም ዳኪዬ ነጸብራቕ ናይ ጽቡቕ ጻዕዳ ዑፍ ረኣየ – ንሱ ባዕሉ! ሓደ ኣዕዋፍ ናይ ጻዕዳ ሃምበሽ ጥቓኡ ወረዱ። "ኣብዚ ምሳና ተቐመጥ! ዓሩኽ ጽቡቕ ንኹን" በሉ። ንሱ ብኽናፉ ነፊፉ ምስ ኩሉ ኣዕዋፍ ናብ ሰማይ ሰጠወ።',
      emoji: '🦢✨🌸'
    },
    {
      type: 'write',
      prompt: 'כֵּיצַד לְדַעְתְּכֶם הִרְגִּישׁ הַבַּרְווָזוֹן הַמְּכוֹעָר?'
    },
    {
      type: 'write',
      prompt: 'סַפְּרוּ עַל פַּעַם שֶׁהִרְגַּשְׁתֶּם קְצָת בַּחוּץ וְאֵיךְ הִתְמוֹדַדְתֶּם עִם זֶה.'
    }
  ]
},
  {
  title: 'הָאַרְיֵה וְהָעַכְבָּר',
  titleTigrinya: 'ኣንበሳን ኣይጥን',
  titleTranslit: 'ሃኣርዬ ቨሃዓኽባር',
  cover: '🦁🐭',
  pages: [
    {
      hebrew: 'פַּעַם אֶחָת שָׁכַב אַרְיֵה גָּדוֹל וְחָזָק בַּיַּעַר וְנָם בְּשֶׁקֶט. עַכְבָּר קָטָן רָץ וְנָגַע בְּאַפּוֹ שֶׁל הָאַרְיֵה.',
      words: ['פַּעַם','אֶחָת','שָׁכַב','אַרְיֵה','גָּדוֹל','וְחָזָק','בַּיַּעַר','וְנָם','בְּשֶׁקֶט.','עַכְבָּר','קָטָן','רָץ','וְנָגַע','בְּאַפּוֹ','שֶׁל','הָאַרְיֵה.'],
      tigrinya: ['ሓደ','ግዜ','ደቀሰ','ኣንበሳ','ዓቢ','ሓያልን','ኣብ ዱር','ደቂሱ','ብሰላም።','ኣይጢ','ንእሽቶ','ጎየየ','ዳህሰሰ','ኣፍንጫ','ናይ','ኣንበሳ።'],
      translit: ['ፓዓም','ኤሓት','ሻካቭ','ኣርዬ','ጋዶል','ቨሓዛቅ','ባያዓር','ቨናም','ቤሸቀት።','ዓኽባር','ቃጣን','ራጽ','ቨናጋዓ','ቤኣፖ','ሸል','ሃኣርዬ።'],
      fullTigrinya: 'ሓደ ግዜ ሓደ ዓቢ ሓያል ኣንበሳ ኣብ ዱር ደቂሱ ነበረ። ሓንቲ ንእሽቶ ኣይጢ ጎዩ ኣፍንጫ ናይ ኣንበሳ ዳህሰሰ።',
      emoji: '🦁😴🌳'
    },
    {
      hebrew: 'הָאַרְיֵה הִתְעוֹרֵר וְתָפַס אֶת הָעַכְבָּר בְּכַפּוֹ. "אֲנִי אֹכַל אוֹתְךָ!" שָׁאַג הָאַרְיֵה. הָעַכְבָּר פָּחַד מְאֹד.',
      words: ['הָאַרְיֵה','הִתְעוֹרֵר','וְתָפַס','אֶת','הָעַכְבָּר','בְּכַפּוֹ.','אֲנִי','אֹכַל','אוֹתְךָ!','שָׁאַג','הָאַרְיֵה.','הָעַכְבָּר','פָּחַד','מְאֹד.'],
      tigrinya: ['ኣንበሳ','ተበራበረ','ሒዘ','ነቲ','ኣይጢ','ኣብ ኢዱ።','ኣነ','ክበልዓካ','እየ!','ኣውጀ','ኣንበሳ።','ኣይጢ','ፈርሔ','ኩርሱ።'],
      translit: ['ሃኣርዬ','ሂትዓዮረር','ቨታፋስ','ኤት','ሃዓኽባር','ቤካፖ።','ኣኒ','ኦካል','ኦትኻ!','ሻኣግ','ሃኣርዬ።','ሃዓኽባር','ፓሓድ','መኦድ።'],
      fullTigrinya: 'ኣንበሳ ተበራቢሩ ኣይጢ ኣብ ኢዱ ሒዙ። "ኣነ ክበልዓካ እየ!" ኣውጀ ኣንበሳ። ኣይጢ ኣዝዩ ፈርሔ።',
      emoji: '🦁😡🐭😱'
    },
    {
      hebrew: 'הָעַכְבָּר אָמַר: "בַּקָּשָׁה, שַׁחְרֵר אוֹתִי! יוֹם אֶחָד אֶעֱזוֹר לְךָ." הָאַרְיֵה צָחַק, אֲבָל שִׁחְרֵר אֶת הָעַכְבָּר הַקָּטָן.',
      words: ['הָעַכְבָּר','אָמַר:','בַּקָּשָׁה,','שַׁחְרֵר','אוֹתִי!','יוֹם','אֶחָד','אֶעֱזוֹר','לְךָ.','הָאַרְיֵה','צָחַק,','אֲבָל','שִׁחְרֵר','אֶת','הָעַכְבָּר','הַקָּטָן.'],
      tigrinya: ['ኣይጢ','በለ:','በጃኻ,','ፈትሓኒ','ሕጂ!','ሓደ','መዓልቲ','ክሕግዘካ','እየ።','ኣንበሳ','ሰሓቐ,','ግና','ፈትሐ','ነቲ','ኣይጢ','ንእሽቶ።'],
      translit: ['ሃዓኽባር','ኣማር:','ባቃሻ,','ሻሕሬር','ኦቲ!','ዮም','ኤሓድ','ኤዓዞር','ለኻ።','ሃኣርዬ','ጻሓቅ,','ኣቫል','ሺሕሬር','ኤት','ሃዓኽባር','ሃቃጣን።'],
      fullTigrinya: 'ኣይጢ በለ: "በጃኻ ፈትሓኒ! ሓደ መዓልቲ ክሕግዘካ እየ።" ኣንበሳ ሰሓቐ፣ ግና ነቲ ንእሽቶ ኣይጢ ፈትሐ።',
      emoji: '🐭🙏🦁😄'
    },
    {
      hebrew: 'יָמִים עָבְרוּ. הָאַרְיֵה הָלַךְ בַּיַּעַר וְנִתְקַע בְּרֶשֶׁת שֶׁל צַיָּד. הוּא שָׁאַג וְשָׁאַג אֲבָל לֹא יָכֹל לָצֵאת.',
      words: ['יָמִים','עָבְרוּ.','הָאַרְיֵה','הָלַךְ','בַּיַּעַר','וְנִתְקַע','בְּרֶשֶׁת','שֶׁל','צַיָּד.','הוּא','שָׁאַג','וְשָׁאַג','אֲבָל','לֹא','יָכֹל','לָצֵאת.'],
      tigrinya: ['መዓልታት','ሓለፋ።','ኣንበሳ','ከደ','ኣብ ዱር','ተሓጽረ','ኣብ መፋሪዕ','ናይ','ሃዳናይ።','ንሱ','ኣውጀ','ኣውጀ','ግና','ኣይከኣለን','ምውጻእ','.'],
      translit: ['ያሚም','ዓቭሩ።','ሃኣርዬ','ሃላኽ','ባያዓር','ቨኒትቃዓ','ቤረሸት','ሸል','ጻያድ።','ሁ','ሻኣግ','ቨሻኣግ','ኣቫል','ሎ','ያኾል','ላጼት።'],
      fullTigrinya: 'መዓልታት ሓለፋ። ኣንበሳ ኣብ ዱር እናኸደ ኣብ መፋሪዕ ናይ ሃዳናይ ተሓጽረ። ኣውጀ ኣውጀ ግና ክወጽእ ኣይከኣለን።',
      emoji: '🦁🕸️😰'
    },
    {
      hebrew: 'הָעַכְבָּר הַקָּטָן שָׁמַע אֶת שַׁאֲגוֹת הָאַרְיֵה. הוּא רָץ מַהֵר וְכָרְסֵם אֶת הָרֶשֶׁת עַד שֶׁהָאַרְיֵה יָצָא חׇפְשִׁי. "תּוֹדָה, חֲבֵרִי!" אָמַר הָאַרְיֵה.',
      words: ['הָעַכְבָּר','הַקָּטָן','שָׁמַע','אֶת','שַׁאֲגוֹת','הָאַרְיֵה.','הוּא','רָץ','מַהֵר','וְכָרְסֵם','אֶת','הָרֶשֶׁת','עַד','שֶׁהָאַרְיֵה','יָצָא','חׇפְשִׁי.','תּוֹדָה,','חֲבֵרִי!','אָמַר','הָאַרְיֵה.'],
      tigrinya: ['ኣይጢ','ንእሽቶ','ሰምዐ','ነቲ','ጣዕዋ','ናይ ኣንበሳ።','ንሱ','ጎየየ','ቅልጡፍ','ነኸዐ','ነቲ','መፋሪዕ','ክሳዕ','ኣንበሳ','ወጸ','ናጻ።','የቐንየለይ,','ዓርከይ!','በለ','ኣንበሳ።'],
      translit: ['ሃዓኽባር','ሃቃጣን','ሻማዓ','ኤት','ሻኣጎት','ሃኣርዬ።','ሁ','ራጽ','ማሄር','ቨኻርሴም','ኤት','ሃሬሸት','ዓድ','ሸሃኣርዬ','ያጻ','ሖፍሺ።','ቶዳ,','ሓቬሪ!','ኣማር','ሃኣርዬ።'],
      fullTigrinya: 'ኣይጢ ንእሽቶ ጣዕዋ ናይ ኣንበሳ ሰምዐ። ቅልጡፍ ጎዩ ነቲ መፋሪዕ ብስኒ ነኸዐ ክሳዕ ኣንበሳ ናጻ ወጸ። "የቐንየለይ፣ ዓርከይ!" በለ ኣንበሳ።',
      emoji: '🐭✂️🦁🎉'
    }
  ]
},
  {
  title: 'הָעֵץ הַנָּדִיב',
  titleTigrinya: 'ምቅልዋ ገረብ',
  titleTranslit: 'ሃዔጽ ሃናዲቭ',
  cover: '🌳❤️',
  pages: [
    {
      hebrew: 'הָיָה הָיָה פַּעַם עֵץ שֶׁאָהַב יֶלֶד קָטָן. וּבְכָל יוֹם הַיֶּלֶד הָיָה מַגִּיעַ וּמְשַׂחֵק עִם הָעֵץ, וְאוֹסֵף אֶת הֶעָלִים שֶׁנָּשְׁרוּ מֵהָעֵץ, וְעוֹשֶׂה מֵהֶם כֶּתֶר. הוּא הָיָה מְטַפֵּס עַל הַגֶּזַע שֶׁל הָעֵץ, וּמִתְנַדְנֵד מֵהָעֲנָפִים שֶׁלוֹ וְאוֹכֵל מֵהַתַּפּוּחִים שֶׁלוֹ. וְהַיֶּלֶד אָהַב אֶת הָעֵץ מְאֹד. וְהָעֵץ הָיָה מְאֻשָּׁר.',
      words: ['הָיָה','הָיָה','פַּעַם','עֵץ','שֶׁאָהַב','יֶלֶד','קָטָן.','וּבְכָל','יוֹם','הַיֶּלֶד','הָיָה','מַגִּיעַ','וּמְשַׂחֵק','עִם','הָעֵץ,','וְאוֹסֵף','אֶת','הֶעָלִים','שֶׁנָּשְׁרוּ','מֵהָעֵץ,','וְעוֹשֶׂה','מֵהֶם','כֶּתֶר.','הוּא','הָיָה','מְטַפֵּס','עַל','הַגֶּזַע','שֶׁל','הָעֵץ,','וּמִתְנַדְנֵד','מֵהָעֲנָפִים','שֶׁלוֹ','וְאוֹכֵל','מֵהַתַּפּוּחִים','שֶׁלוֹ.','וְהַיֶּלֶד','אָהַב','אֶת','הָעֵץ','מְאֹד.','וְהָעֵץ','הָיָה','מְאֻשָּׁר.'],
      tigrinya: ['ነበረ','ነበረ','ሓንሳብ','ገረብ','ዝፈትዎ','ቆልዓ','ንእሽቶ።','ኣብ ነፍሲ ወከፍ','መዓልቲ','ቆልዓ','ይመጽእ','ይበጽሕ','ይጻወት','ምስ','ገረቡ','ይእክብ','ነቶም','ቅጠላት','ዝረሸሹ','ካብ ገረቡ','ይሰርሕ','ካብኦም','ዘውዲ።','ንሱ','ይምጽእ','ይድይብ','ናይ','ቃጽሎ ገረብ','ናይ','ገረቡ','ይወዛወዝ','ኣብ ኣፍንጫታት ገረብ','ናቱ','ይበልዕ','ካብ ቱፋሕ','ናቱ።','ቆልዓ','ፈትወ','ነቲ','ገረብ','ብዙሕ።','ገረብ','ነበረ','ሕጉስ།'],
      translit: ['ሃያ','ሃያ','ፓዓም','ዔጽ','ሸዓሃቭ','የለድ','ቃጣን።','ኡቭኮል','ዮም','ሃዬለድ','ሃያ','ማጊዓ','ኡምሳሔቅ','ዒም','ሃዔጽ','ቨኦሴፍ','እት','ሄዓሊም','ሸናሸሩ','ሜሃዔጽ','ቨኦሴ','ሜሄም','ከተር።','ሁ','ሃያ','ምጣፔስ','ዓል','ሃጌዛዕ','ሼል','ሃዔጽ','ኡምትናድኔድ','ሜሃዓናፊም','ሼሎ','ቨኦኼል','ሜሃታፑሒም','ሼሎ།','ቨሃዬለድ','ኣሃቭ','እት','ሃዔጽ','ምኦድ།','ቨሃዔጽ','ሃያ','ምኡሻር།'],
      fullTigrinya: 'ሓንሳብ ሓደ ገረብ ዝፈትዎ ንእሽቶ ቆልዓ ነበረ። ቆልዓ ኣብ ነፍሲ ወከፍ መዓልቲ ይመጽእ ምስ ገረቡ ይጻወት፣ ቅጠላት ዝረሸሸ ይእክብ ዘውዲ ይሰርሕ፣ ናብ ቃጽሎ ይድይብ ካብ ኣፍንጫታት ገረብ ይወዛወዝ ቱፋሕ ይበልዕ። ቆልዓ ነቲ ገረብ ብዙሕ ፈትዎ፣ ገረብ ሕጉስ ነበረ།',
      emoji: '🌳👦🍂'
    },
    {
      hebrew: 'אֲבָל הַזְּמַן עָבַר וְהַיֶּלֶד גָּדַל וְהָיָה מֵבִיא אֶת חֲבֵרָה שֶׁלוֹ אֶל הָעֵץ. הָעֵץ אָמַר לוֹ, "בֹּא יֶלֶד, בֹּא וְתִטְפַּס עַל הַגֶּזַע שֶׁלִּי!" "אֲנִי יוֹתֵר מִדַּי גָּדוֹל כְּבָר אֵין לִי זְמַן לִטְפֹּס," אָמַר הַיֶּלֶד. "אֲנִי צָרִיךְ כֶּסֶף." "קַח אֶת הַתַּפּוּחִים שֶׁלִּי," אָמַר הָעֵץ. וְכַּיֶּלֶד טִיפֵּס וְאָסַף אֶת כָּל הַתַּפּוּחִים וְהָלַךְ. וְהָעֵץ הָיָה מְאֻשָּׁר.',
      words: ['אֲבָל','הַזְּמַן','עָבַר','וְהַיֶּלֶד','גָּדַל','וְהָיָה','מֵבִיא','אֶת','חֲבֵרָה','שֶׁלוֹ','אֶל','הָעֵץ.','הָעֵץ','אָמַר','לוֹ,','"בֹּא','יֶלֶד,','בֹּא','וְתִטְפַּס','עַל','הַגֶּזַע','שֶׁלִּי!"','"אֲנִי','יוֹתֵר','מִדַּי','גָּדוֹל','כְּבָר','אֵין','לִי','זְמַן','לִטְפֹּס,"','אָמַר','הַיֶּלֶד.','"אֲנִי','צָרִיךְ','כֶּסֶף."','"קַח','אֶת','הַתַּפּוּחִים','שֶׁלִּי,"','אָמַר','הָעֵץ.','וְכַּיֶּלֶד','טִיפֵּס','וְאָסַף','אֶת','כָּל','הַתַּפּוּחִים','וְהָלַךְ.','וְהָעֵץ','הָיָה','מְאֻשָּׁר.'],
      tigrinya: ['ግና','እዋን','ሓለፈ','ቆልዓ','ዓቢ ኮነ','ነበረ','ዘምጽእ','ነቲ','ዓርኩ','ናቱ','ናብ','ገረቡ።','ገረብ','በሎ','ነቱ','ንዓ','ቆልዓ','ንዓ','ድይብ','ናብ','ቃጽሎ ገረብ','ናተይ!','ኣነ','ብዙሕ','ዓቢ ኮነ','ዓቢ','ደጊም','የለን','ናይ','ግዜ','ምድያብ፣','በለ','ቆልዓ።','ኣነ','የድልየኒ','ገንዘብ።','ውሰድ','ነቶም','ቱፋሕ','ናቶም፣','በለ','ገረብ።','ቆልዓ','ደየበ','ኣከበ','ነቶም','ኩሉ','ቱፋሕ','ከደ።','ገረብ','ነበረ','ሕጉስ།'],
      translit: ['አቫል','ሃዝማን','ዓቫር','ቨሃዬለድ','ጋዳል','ቨሃያ','ሜቪ','እት','ሃቭሬ','ሼሎ','እል','ሃዔጽ།','ሃዔጽ','አማር','ሎ','ቦ','የለድ','ቦ','ቨቲጥፓስ','ዓል','ሃጌዛዕ','ሼሊ','አኒ','ዮተር','ሚዳይ','ጋዶል','ክቫር','ኤን','ሊ','ዝማን','ሊጥፖስ','አማር','ሃዬለድ','አኒ','ጻሪኽ','ከሴፍ','ቃሕ','እት','ሃታፑሒም','ሼሊ','አማር','ሃዔጽ','ቨካዬለድ','ቲፔስ','ቨኣሳፍ','እት','ኮል','ሃታፑሒም','ቨሃላኽ','ቨሃዔጽ','ሃያ','ምኡሻር།'],
      fullTigrinya: 'ግና እዋን ሓለፈ፣ ቆልዓ ዓቢ ኮነ፣ ዓርኩ ናብ ገረቡ ምምጻእ ጀመረ። ገረብ "ንዓ ቆልዓ ናብ ቃጽሎ ናተይ ድይብ!" ይብሎ ነበረ። ቆልዓ "ዓቢ ኮይነ ክድይብ ኣይፈቱን፣ ገንዘብ የድልየኒ" በለ። ገረብ "ቱፋሕ ናተይ ውሰድ" በለ። ቆልዓ ደየበ ኩሉ ቱፋሕ ኣከቡ ከደ፣ ገረብ ሕጉስ ነበረ།',
      emoji: '🍎💰👦'
    },
    {
      hebrew: 'אֲבָל הַיֶּלֶד נֶעֱלַם לְהַרְבֵּה זְמַן... וְהָעֵץ הָיָה עָצוּב. וְאָז יוֹם אֶחָד הַיֶּלֶד חָזַר. "אֲנִי עָסוּק מִכְּדֵי לִטְפֹּס עַל עֵצִים," אָמַר הַיֶּלֶד. "אֲנִי רוֹצֶה בַּיִת. תּוּכַל לָתֶת לִי בַּיִת?" "אֵין לִי בַּיִת," אָמַר הָעֵץ. "אֲבָל אַתָּה יָכוֹל לַחְתֹּךְ אֶת הָעֲנָפִים שֶׁלִּי וְלִבְנוֹת מֵהֶם בַּיִת." וְכַּיֶּלֶד חָתַךְ אֶת הָעֲנָפִים וְלָקַח אוֹתָם. וְהָעֵץ הָיָה מְאֻשָּׁר.',
      words: ['אֲבָל','הַיֶּלֶד','נֶעֱלַם','לְהַרְבֵּה','זְמַן...','וְהָעֵץ','הָיָה','עָצוּב.','וְאָז','יוֹם','אֶחָד','הַיֶּלֶד','חָזַר.','"אֲנִי','עָסוּק','מִכְּדֵי','לִטְפֹּס','עַל','עֵצִים,"','אָמַר','הַיֶּלֶד.','"אֲנִי','רוֹצֶה','בַּיִת.','תּוּכַל','לָתֶת','לִי','בַּיִת?"','"אֵין','לִי','בַּיִת,"','אָמַר','הָעֵץ.','"אֲבָל','אַתָּה','יָכוֹל','לַחְתֹּךְ','אֶת','הָעֲנָפִים','שֶׁלִּי','וְלִבְנוֹת','מֵהֶם','בַּיִת."','וְכַּיֶּלֶד','חָתַךְ','אֶת','הָעֲנָפִים','וְלָקַח','אוֹתָם.','וְהָעֵץ','הָיָה','מְאֻשָּׁר.'],
      tigrinya: ['ግና','ቆልዓ','ጠፈአ','ንብዙሕ','ግዜ...','ገረብ','ነበረ','ሕዙን።','ሽዑ','ሓደ','መዓልቲ','ቆልዓ','ተመልሰ።','ኣነ','ተጸሚደ','ክድይብ','ዛፍ','ኣብ','ዛፍ፣','በለ','ቆልዓ።','ኣነ','ደሊ','ቤት።','ክትህበኒ','ትኽእል','ዶ','ቤት?','ቤት','የብለይን','፣','በለ','ገረብ།','ግና','ንስኻ','ትኽእል','ቆሪጽ','ነቶም','ኣፍንጫታት ገረብ','ናተይ','ትሃንጽ','ካብኦም','ቤት።','ቆልዓ','ቆረጸ','ነቶም','ኣፍንጫታት ገረብ','ወሰዶ','ኣብኦም።','ገረብ','ነበረ','ሕጉስ།'],
      translit: ['አቫል','ሃዬለድ','ነዔሊም','ለሃርቤ','ዝማን','ቨሃዔጽ','ሃያ','ዓጹብ།','ቨኣዝ','ዮም','እሃድ','ሃዬለድ','ሃዛር','አኒ','ዓሱቅ','ሚቀዴ','ሊጥፖስ','ዓል','ዔጺም','አማር','ሃዬለድ','አኒ','ሮጼ','ባዪት','ቱካል','ላቴት','ሊ','ባዪት','ኤን','ሊ','ባዪት','አማር','ሃዔጽ','አቫል','አታ','ያኮል','ላሕቶኽ','እት','ሃዓናፊም','ሼሊ','ቨሊቭኖት','ሜሄም','ባዪት','ቨካዬለድ','ሃታኽ','እት','ሃዓናፊም','ቨላቃሕ','ኦታም','ቨሃዔጽ','ሃያ','ምኡሻር།'],
      fullTigrinya: 'ቆልዓ ንዓመታት ጠፈአ፣ ገረብ ሕዙን ነበረ። ደሓር ሓደ መዓልቲ ቆልዓ ተመልሰ። "ኣነ ብቤት ቤት ክዛወር ኣይደልን፣ ቤት ደሊ" በለ። ገረብ "ኣፍንጫታትይ ቆሪጽ ቤት ሃንጽ" በለ። ቆልዓ ኣፍንጫታት ቆሪጹ ወሰዶ፣ ገረብ ሕጉስ ነበረ།',
      emoji: '🌲🏠✂️'
    },
    {
      hebrew: 'אֲבָל הַיֶּלֶד נֶעֱלַם שׁוּב לְהַרְבֵּה מְאֹד זְמַן... וְאָז הַיֶּלֶד חָזַר וְהָעֵץ הָיָה כָּל כָּךְ מְאֻשָּׁר. "אֲנִי רוֹצֶה סִירָה שֶׁתִּקָּח אוֹתִי רָחוֹק מִפֹּה. תּוּכַל לָתֶת לִי סִירָה?" "תַּחְתֹּךְ אֶת הַגֶּזַע שֶׁלִּי וְתַעֲשֶׂה מִמֶּנּוּ סִירָה," אָמַר הָעֵץ. וְהַיֶּלֶד חָתַךְ אֶת הַגֶּזַע שֶׁל הָעֵץ וְעָשָׂה מִמֶּנּוּ סִירָה. הוּא הִפְלִיג רָחוֹק מִשָּׁם. וְהָעֵץ הָיָה מְאֻשָּׁר... אֲבָל לֹא בֶּאֱמֶת.',
      words: ['אֲבָל','הַיֶּלֶד','נֶעֱלַם','שׁוּב','לְהַרְבֵּה','מְאֹד','זְמַן...','וְאָז','הַיֶּלֶד','חָזַר','וְהָעֵץ','הָיָה','כָּל','כָּךְ','מְאֻשָּׁר.','"אֲנִי','רוֹצֶה','סִירָה','שֶׁתִּקָּח','אוֹתִי','רָחוֹק','מִפֹּה.','תּוּכַל','לָתֶת','לִי','סִירָה?"','"תַּחְתֹּךְ','אֶת','הַגֶּזַע','שֶׁלִּי','וְתַעֲשֶׂה','מִמֶּנּוּ','סִירָה,"','אָמַר','הָעֵץ.','וְהַיֶּלֶד','חָתַךְ','אֶת','הַגֶּזַע','שֶׁל','הָעֵץ','וְעָשָׂה','מִמֶּנּוּ','סִירָה.','הוּא','הִפְלִיג','רָחוֹק','מִשָּׁם.','וְהָעֵץ','הָיָה','מְאֻשָּׁר...','אֲבָל','לֹא','בֶּאֱמֶת.'],
      tigrinya: ['ግና','ቆልዓ','ጠፈአ','ደጊም','ንብዙሕ','ዳርጋ','ግዜ...','ሽዑ','ቆልዓ','ተመልሰ','ገረብ','ነበረ','ኩሉ','ምስ','ሕጉስ།','ኣነ','ደሊ','ጃልባ','ዝወስደኒ','ነዛ','ርሑቕ','ካብዚ።','ክትህበኒ','ትኽእል','ዶ','ጃልባ?','ቆሪጽ','ነቲ','ቃጽሎ ገረብ','ናተይ','ሰርሓ','ካብኡ','ጃልባ፣','በለ','ገረብ།','ቆልዓ','ቆረጸ','ነቲ','ቃጽሎ ገረብ','ናይ','ገረብ','ሰርሓ','ካብኡ','ጃልባ།','ንሱ','ጓሓፈ','ርሑቕ','ካብኡ།','ገረብ','ነበረ','ሕጉስ...','ግና','ኣይ','ብሓቂ།'],
      translit: ['አቫል','ሃዬለድ','ነዔሊም','ሹብ','ለሃርቤ','ምኦድ','ዝማን','ቨኣዝ','ሃዬለድ','ሃዛር','ቨሃዔጽ','ሃያ','ኮል','ካኽ','ምኡሻር','አኒ','ሮጼ','ሲራ','ሸቲካሕ','ኦቲ','ሪሆቅ','ሚፖ','ቱካል','ላቴት','ሊ','ሲራ','ታሕቶኽ','እት','ሃጌዛዕ','ሼሊ','ቨታዓሴ','ሚምኑ','ሲራ','አማር','ሃዔጽ','ቨሃዬለድ','ሃታኽ','እት','ሃጌዛዕ','ሼል','ሃዔጽ','ቨዓሳ','ሚምኑ','ሲራ','ሁ','ሂፕሊግ','ሪሆቅ','ሚሻም','ቨሃዔጽ','ሃያ','ምኡሻር','አቫል','ሎ','ቤዔሜት།'],
      fullTigrinya: 'ቆልዓ ደጊም ንነዊሕ ግዜ ጠፈአ፣ ደሓር ተመልሰ ገረብ ሕጉስ ነበረ። "ጃልባ ደሊ ርሑቕ ክኸይድ" በለ። ገረብ "ቃጽሎ ናተይ ቆሪጽ ጃልባ ሰርሓ" በለ። ቆልዓ ቃጽሎ ቆሪጹ ጃልባ ሰርሐ ርሑቕ ሓደ፣ ገረብ ሕጉስ ነበረ... ብሓቂ ግና ኣይነበረን།',
      emoji: '⛵🌊🌳'
    },
    {
      hebrew: 'הַרְבֵּה יָמִים עָבְרוּ וְהָעֵץ נִשְׁאַר לְבַד. וְאַחֲרֵי הַרְבֵּה הַרְבֵּה מְאֹד זְמַן, הַיֶּלֶד חָזַר שׁוּב. "אֲנִי מְצִטַעֵר יֶלֶד," אָמַר הָעֵץ, "אֲבָל לֹא נִשְׁאַר לִי שׁוּם דָּבָר לָתֵת לְךָ... אֲנִי רַק גֶּדֶם עֵץ זָקֵן." "אֲנִי לֹא צָרִיךְ הַרְבֵּה עַכְשָׁו," אָמַר הַיֶּלֶד. "רַק מָקוֹם שָׁקֵט לָשֶׁבֶת וְלָנוּחַ. אֲנִי מְאֹד עָיֵף." "גֶּדֶם עֵץ זָקֵן הוּא מְעֻלֶּה כְּדֵי שֶׁתּוּכַל לָשֶׁבֶת עָלָיו וְלָנוּחַ. בֹּא יֶלֶד, שֵׁב." וְהַיֶּלֶד הִתְיַשֵּׁב עַל הָעֵץ. וְהָעֵץ הָיָה מְאֻשָּׁר.',
      words: ['הַרְבֵּה','יָמִים','עָבְרוּ','וְהָעֵץ','נִשְׁאַר','לְבַד.','וְאַחֲרֵי','הַרְבֵּה','הַרְבֵּה','מְאֹד','זְמַן,','הַיֶּלֶד','חָזַר','שׁוּב.','"אֲנִי','מְצִטַעֵר','יֶלֶד,"','אָמַר','הָעֵץ,','"אֲבָל','לֹא','נִשְׁאַר','לִי','שׁוּם','דָּבָר','לָתֵת','לְךָ...','אֲנִי','רַק','גֶּדֶם','עֵץ','זָקֵן."','"אֲנִי','לֹא','צָרִיךְ','הַרְבֵּה','עַכְשָׁו,"','אָמַר','הַיֶּלֶד.','"רַק','מָקוֹם','שָׁקֵט','לָשֶׁבֶת','וְלָנוּחַ.','אֲנִי','מְאֹד','עָיֵף."','"גֶּדֶם','עֵץ','זָקֵן','הוּא','מְעֻלֶּה','כְּדֵי','שֶׁתּוּכַל','לָשֶׁבֶת','עָלָיו','וְלָנוּחַ.','בֹּא','יֶלֶד,','שֵׁב."','וְהַיֶּלֶד','הִתְיַשֵּׁב','עַל','הָעֵץ.','וְהָעֵץ','הָיָה','מְאֻשָּׁר.'],
      tigrinya: ['ብዙሕ','መዓልቲ','ሓለፉ','ገረብ','ተሪፉ','ባዕሉ།','ድሕሪ','ብዙሕ','ብዙሕ','ዳርጋ','ግዜ','ቆልዓ','ተመልሰ','ደጊም།','ኣነ','ይቕሬታ','ቆልዓ፣','በለ','ገረብ፣','ግና','ኣይ','ተሪፉ','ናይ','ዝኾነ','ነገር','ክህበካ...','ኣነ','ጥራይ','ሱር','ናይ','ዓርስ','ዓርስ།','ኣነ','ኣይ','ደሊ','ብዙሕ','ሕጂ፣','በለ','ቆልዓ།','ጥራይ','ቦታ','ጽቡቕ','ንምቕማጥ','ዕረፍቲ།','ኣነ','ብዙሕ','ደኺሙ།','ሱር','ናይ','ዓርስ','ዓርስ','ሰናይ','ምዃኑ','ክትቐምጥ','ናቱ','ዕረፍቲ།','ንዓ','ቆልዓ','ቐምጥ།','ቆልዓ','ተቐመጠ','ናብ','ገረቡ།','ገረብ','ነበረ','ሕጉስ','ሕጉስ།'],
      translit: ['ሃርቤ','ያሚም','ዓቭሩ','ቨሃዔጽ','ኒሻር','ለቫድ','ቨኣሃሬ','ሃርቤ','ሃርቤ','ምኦድ','ዝማን','ሃዬለድ','ሃዛር','ሹብ','አኒ','ምጺጣዔር','የለድ','አማር','ሃዔጽ','አቫል','ሎ','ኒሻር','ሊ','ሹም','ዳቫር','ላቴት','ለካ','አኒ','ራቅ','ጌዴም','ዔጽ','ዛቀን','አኒ','ሎ','ጻሪኽ','ሃርቤ','ዓኽሻቭ','አማር','ሃዬለድ','ራቅ','ማቆም','ሻቀት','ላሼቬት','ቨላኑዋሕ','አኒ','ምኦድ','ዓዬፍ','ጌዴም','ዔጽ','ዛቀን','ሁ','ምኡሊ','ቀዴ','ሸቱካል','ላሼቬት','ዓላዪቭ','ቨላኑዋሕ','ቦ','የለድ','ሼቭ','ቨሃዬለድ','ሂትያሼቭ','ዓል','ሃዔጽ','ቨሃዔጽ','ሃያ','ምኡሻር།'],
      fullTigrinya: 'ዓመታት ሓለፉ ገረብ ባዕሉ ተሪፉ። ቆልዓ ኣብ መወዳእታ ተመልሰ፣ ሽማግለ ኮይኑ። ገረብ "ዝህበካ ኣይተረፈን፣ ሱር ዓርስ ጥራይ ኢና" በለ። ቆልዓ "ቦታ ዕረፍቲ ጥራይ ደሊ፣ ደኺሙ ኣለኹ" በለ። ገረብ "ሱር ዓርስ ንምቕማጥ ሰናይ ቦታ እዩ፣ ንዓ ቐምጥ" በለ። ቆልዓ ተቐምጠ፣ ገረብ ሕጉስ ነበረ།',
      emoji: '🌳👴❤️'
    }
  ]
},
  {
  title: 'מוּלָאן',
  titleTigrinya: 'ሙላን',
  titleTranslit: 'ሙ-ላን',
  cover: '⚔️🌸',
  pages: [
    {
      hebrew: 'לִפְנֵי הַרְבֵּה מְאֹד שָׁנִים, סִין הָיְתָה בְּמִלְחָמָה גְּדוֹלָה עִם שְׁבָטִים נוֹוְדִים מֵהַצָּפוֹן שֶׁרָצוּ לִכְבֹּשׁ אֶת סִין. הַקֵּיסָר שֶׁל סִין פִּרְסֵם צַו גִּיּוּס וּבוֹ הוֹרָאָה שֶׁאָדָם אֶחָד מִכָּל מִשְׁפָּחָה סִינִית חַיָּב לַעֲזֹב אֶת הַמִּשְׁפָּחָה שֶׁלּוֹ כְּדֵי לְהִתְגַּיֵּס לַצָּבָא.',
      words: ['לִפְנֵי','הַרְבֵּה','מְאֹד','שָׁנִים,','סִין','הָיְתָה','בְּמִלְחָמָה','גְּדוֹלָה','עִם','שְׁבָטִים','נוֹוְדִים','מֵהַצָּפוֹן','שֶׁרָצוּ','לִכְבֹּשׁ','אֶת','סִין.','הַקֵּיסָר','שֶׁל','סִין','פִּרְסֵם','צַו','גִּיּוּס','וּבוֹ','הוֹרָאָה','שֶׁאָדָם','אֶחָד','מִכָּל','מִשְׁפָּחָה','סִינִית','חַיָּב','לַעֲזֹב','אֶת','הַמִּשְׁפָּחָה','שֶׁלּוֹ','כְּדֵי','לְהִתְגַּיֵּס','לַצָּבָא.'],
      tigrinya: ['ቅድሚ','ብዙ','ዓቢ','ዓመታት,','ቻይና','ነበረት','ኣብ ውግእ','ዓቢ','ምስ','ጎሳታት','ዘናዓዓሉ','ካብ ሰሜን','ዝደለዩ','ክቆጻጸሩ','ናይ','ቻይና።','ንጉስ','ናይ','ቻይና','ኣፍለጠ','ኣዋጅ','ምምልምላት','ዘሕዘ','ትእዛዝ','ሰብ ሓደ','ሓደ','ካብ ነፍሲ ወከፍ','ስድራቤት','ሲናዊት','ኣለዎ','ክሓድጋ','ናይ','ስድርኡ','ናቱ','ምእንቲ','ክምልመል','ናብ ሰራዊት።'],
      translit: ['ሊፍኔይ','ሃርቤ','ሜኦድ','ሻኒም,','ሲን','ሃይታ','ቤሚልሓማ','ጌዶላ','ኢም','ሽቫቲም','ኖቭዲም','ሜሃፃፎን','ሸራፁ','ሊኽቦሽ','ኤት','ሲን።','ሃቄሳር','ሸል','ሲን','ፒርሴም','ፃቭ','ጊዩስ','ኡቮ','ሆራኣ','ሸዓዳም','ኤሓድ','ሚካል','ሚሽፓሓ','ሲኒት','ሃያቭ','ላዓዞቭ','ኤት','ሃሚሽፓሓ','ሸሎ','ከዴይ','ሌሒትጋዬስ','ላፃቫ።'],
      fullTigrinya: 'ቅድሚ ብዙ ዓቢ ዓመታት ቻይና ምስ ጎሳታት ዘናዓዓሉ ካብ ሰሜን ዝደለዩ ናይ ቻይና ክቆጻጸሩ ዓቢ ውግእ ነበረ። ንጉስ ቻይና ሓደ ሰብ ካብ ነፍሲ ወከፍ ስድራቤት ናብ ሰራዊት ክምልመል ዝሕዝ ኣዋጅ ምምልምላት ኣፍለጠ።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%9E%D7%95%D7%9C%D7%90%D7%9F.webp'
    },
    {
      hebrew: 'מוּלָאן, נַעֲרָה מִתְבַּגֶּרֶת שֶׁגָּרָה בְּכֶפֶר מְרוּחָק בְּסִין, הָיְתָה בַּחוּץ וְכִבְּסָה בְּגָדִים כְּשֶׁשָּׁמְעָה מֵרָחוֹק נָשִׁים מְדַבְּרוֹת עַל צַו הַגִּיּוּס. הִיא עָזְבָה מִיָּד אֶת הַכְּבִיסָה שֶׁלָּהּ וְרָצָה אֶל תּוֹךְ הַבַּיִת. אַבָּא שֶׁלָּהּ יָשַׁב עַל כִּיסֵּא בְּסָלוֹן הַבַּיִת הַקָּטָן וְגִלֵּף פִּיסַת עֵץ. "אַבָּא! שָׁמַעְתָּ אֶת הַהוֹרָאָה שֶׁל הַקֵּיסָר? הוּא אָמַר שֶׁאֶחָד מִכָּל מִשְׁפָּחָה חַיָּב לְהִתְגַּיֵּס לַמִּלְחָמָה!" "כֵּן," אָמַר אָבִיהָ הַזָּקֵן, "שָׁמַעְתִּי. טוֹב, אֲנִי צָרִיךְ גַּם לָלֶכֶת לַעֲרֹךְ."',
      words: ['מוּלָאן,','נַעֲרָה','מִתְבַּגֶּרֶת','שֶׁגָּרָה','בְּכֶפֶר','מְרוּחָק','בְּסִין,','הָיְתָה','בַּחוּץ','וְכִבְּסָה','בְּגָדִים','כְּשֶׁשָּׁמְעָה','מֵרָחוֹק','נָשִׁים','מְדַבְּרוֹת','עַל','צַו','הַגִּיּוּס.','הִיא','עָזְבָה','מִיָּד','אֶת','הַכְּבִיסָה','שֶׁלָּהּ','וְרָצָה','אֶל','תּוֹךְ','הַבַּיִת.','אַבָּא','שֶׁלָּהּ','יָשַׁב','עַל','כִּיסֵּא','בְּסָלוֹן','הַבַּיִת','הַקָּטָן','וְגִלֵּף','פִּיסַת','עֵץ.','אַבָּא!','שָׁמַעְתָּ','אֶת','הַהוֹרָאָה','שֶׁל','הַקֵּיסָר?','הוּא','אָמַר','שֶׁאֶחָד','מִכָּל','מִשְׁפָּחָה','חַיָּב','לְהִתְגַּיֵּס','לַמִּלְחָמָה!','כֵּן,','אָמַר','אָבִיהָ','הַזָּקֵן,','שָׁמַעְתִּי.','טוֹב,','אֲנִי','צָרִיךְ','גַּם','לָלֶכֶת','לַעֲרֹךְ.'],
      tigrinya: ['ሙላን,','ጓል','ዓቢ','ዝነብር','ኣብ ዓዲ','ርሑቕ','ኣብ ቻይና,','ነበረት','ወጻኢ','ትሓጽብ','ክዳናት','ምስ ሰምዐት','ካብ ርሑቕ','ኣንስቲ','ዝዛረባ','ብዛዕባ','ኣዋጅ','ምምልምላት።','ንሳ','ሓደጋ','ቅጽበት','ናይ','ሓጺብ ክዳናት','ናቶ','ሃደመት','ናብ','ውሽጢ','ቤቶ።','ኣቦ','ናቶ','ቀቢጹ','ኣብ','ኮፍ-መበሊ','ኣብ ሳሎን','ቤቱ','ናሕስ','ሰርሐ','ቁራጽ','ዕንጨይቲ።','ኣቦ!','ሰምዒኻ','ናይ','ትእዛዝ','ናይ','ንጉስ?','ንሱ','ይብሉ','ሓደ','ካብ ነፍሲ ወከፍ','ስድራቤት','ኣለዎ','ክምልመል','ናብ ውግእ!','እወ,','ይብሉ','ኣቦኣ','ዝደኸመ,','ሰምዒ።','ሕጂ,','ኣነ','ኣሎኒ','እውን','ምኻድ','ምዕሳል።'],
      translit: ['ሙላን,','ናዓራ','ሚትባጌሬት','ሸጋራ','ቤኸፈር','ሜሩሓቅ','ቤሲን,','ሃይታ','ባሁጽ','ቬኪቭሳ','ቤጋዲም','ከሸሻምዓ','ሜራሆቅ','ናሺም','ሜዳብሮት','ዓል','ፃቭ','ሃጊዩስ።','ሂ','ዓዝቫ','ሚያድ','ኤት','ሃኸቪሳ','ሸላ','ቬራፃ','ኤል','ቶኽ','ሃባይት።','ኣባ','ሸላ','ያሻቭ','ዓል','ኪሴ','ቤሳሎን','ሃባይት','ሃቃጣን','ቬጊሌፍ','ፒሳት','ዔጽ።','ኣባ!','ሻማዕታ','ኤት','ሃሆራኣ','ሸል','ሃቄሳር?','ሁ','ኣማር','ሸኤሓድ','ሚካል','ሚሽፓሓ','ሃያቭ','ሌሒትጋዬስ','ላሚልሓማ!','ኬን,','ኣማር','ኣቪሃ','ሃዛቄን,','ሻማዕቲ።','ቶቭ,','ኣኒ','ፃሪኽ','ጋም','ላሌኸት','ላዓሮኽ።'],
      fullTigrinya: 'ሙላን ኣብ ርሑቕ ዓዲ ቻይና ዝነብር ጓል ኣብ ወጻኢ ናብ ሰምዐት ኣብ ምምልምላት ኣዋጅ ዝዛረባ ኣንስቲ ካብ ርሑቕ ትሓጽብ ነበረት። ንሳ ሃደምቶ ኣቦኣ ዝደኸመ ኣብ ናሕስ ቤቱ ቁራጽ ዕንጨይቲ ዝሰርሐ ረኸበቶ። ንጉስ ሓደ ካብ ነፍሲ ወከፍ ስድራቤት ናብ ውግእ ክምልመል ኣለዎ ድዩ ኢላ ሓተቶ።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%9E%D7%95%D7%9C%D7%90%D7%9F.webp'
    },
    {
      hebrew: '"רֶגַע!" אָמְרָה מוּלָאן וְנֶעֶמְדָה מוּל אַבָּא שֶׁלָּהּ, "אַבָּא, אַתָּה לֹא הִרְגַּשְׁתָּ טוֹב בַּחֳדָשִׁים הָאַחֲרוֹנִים. לָמָּה אַתָּה חַיָּב לְהִתְגַּיֵּס?" "מָה עוֹד אֶפְשָׁר לַעֲשׂוֹת? אָח שֶׁלְּךָ הוּא רַק יֶלֶד קָטָן. הוּא לֹא יָכוֹל לְהִתְגַּיֵּס." "כְּמוּבָן שֶׁהוּא לֹא יָכוֹל," אָמְרָה מוּלָאן, "הוּא קָטָן מִדַּי. אֲבָל יֵשׁ לִי רַעְיוֹן." מוּלָאן נִכְנְסָה לַחֶדֶר שֶׁל אַבָּא וּפָתְחָה אֶת הָאָרוֹן. הִיא הוֹצִיאָה אֶת הַחֶרֶב הָאֲרוּכָּה שֶׁלּוֹ וּבְעֶזְרָתָהּ חָתְכָה אֶת שְׂעָרָהּ הַשָּׁחֹר הָאָרוֹךְ. הִיא לָבְשָׁה אֶת חֲלוּק אַבָּא שֶׁלָּהּ וְחָגְרָה אֶת הַחֶרֶב עַל מׇתְנֶיהָ. "תִּסְתַּכֵּל עָלַי. אֲנִי הַבֵּן שֶׁלְּךָ עַכְשָׁו. אֲנִי אֵלֵךְ בִּמְקוֹמְךָ." "לֹא, מוּלָאן! אַתְּ לֹא יְכוֹלָה לַעֲשׂוֹת אֶת זֶה!"',
      words: ['רֶגַע!','אָמְרָה','מוּלָאן','וְנֶעֶמְדָה','מוּל','אַבָּא','שֶׁלָּהּ,','אַבָּא,','אַתָּה','לֹא','הִרְגַּשְׁתָּ','טוֹב','בַּחֳדָשִׁים','הָאַחֲרוֹנִים.','לָמָּה','אַתָּה','חַיָּב','לְהִתְגַּיֵּס?','מָה','עוֹד','אֶפְשָׁר','לַעֲשׂוֹת?','אָח','שֶׁלְּךָ','הוּא','רַק','יֶלֶד','קָטָן.','הוּא','לֹא','יָכוֹל','לְהִתְגַּיֵּס.','כְּמוּבָן','שֶׁהוּא','לֹא','יָכוֹל,','אָמְרָה','מוּלָאן,','הוּא','קָטָן','מִדַּי.','אֲבָל','יֵשׁ','לִי','רַעְיוֹן.','מוּלָאן','נִכְנְסָה','לַחֶדֶר','שֶׁל','אַבָּא','וּפָתְחָה','אֶת','הָאָרוֹן.','הִיא','הוֹצִיאָה','אֶת','הַחֶרֶב','הָאֲרוּכָּה','שֶׁלּוֹ','וּבְעֶזְרָתָהּ','חָתְכָה','אֶת','שְׂעָרָהּ','הַשָּׁחֹר','הָאָרוֹךְ.','הִיא','לָבְשָׁה','אֶת','חֲלוּק','אַבָּא','שֶׁלָּהּ','וְחָגְרָה','אֶת','הַחֶרֶב','עַל','מׇתְנֶיהָ.','תִּסְתַּכֵּל','עָלַי.','אֲנִי','הַבֵּן','שֶׁלְּךָ','עַכְשָׁו.','אֲנִי','אֵלֵךְ','בִּמְקוֹמְךָ.','לֹא,','מוּלָאן!','אַתְּ','לֹא','יְכוֹלָה','לַעֲשׂוֹת','אֶת','זֶה!'],
      tigrinya: ['ሓሙሽ!','ይብሉ','ሙላን','ቆምተ','ቅድሚ','ኣቦ','ናቶ,','ኣቦ,','ንስኻ','ኣይ','ተሰሚዕካን','ጽቡቕ','ኣብ ወርሒ','ዝሓለፈ።','ስለምንታይ','ንስኻ','ኣሎካ','ምምልምላት?','እንታይ','ካልእ','ይካኣለካ','ምግባር?','ሓውካ','ናትካ','ንሱ','ጥራይ','ቆልዓ','ናሕስ።','ንሱ','ኣይ','ይኽእልን','ምምልምላት።','ብርግጽ','ንሱ','ኣይ','ይኽእልን,','ይብሉ','ሙላን,','ንሱ','ናሕስ','ዝዓቀነ።','ግን','ኣሎ','ንዓይ','ሓሳብ።','ሙላን','ኣተወት','ናብ ክፍሊ','ናይ','ኣቦ','ሸለጠቶ','ናይ','ኣልሚሮ።','ንሳ','ኣውጸኤቶ','ናይ','ሰይፊ','ነዊሕ','ናቱ','ሓዚኣ','ቆሪጸት','ናይ','ጸጉሪ','ጸሊም','ናዊሕ።','ንሳ','ተኸደነት','ናይ','ክዳን','ኣቦ','ናቶ','ሓዘት','ናይ','ሰይፊ','ኣብ','ቁልፊ ሰሓቤቱ።','ጠምቲ','ናባይ።','ኣነ','ወድኻ','ናትካ','ሕጂ።','ኣነ','ክኸይድ','ኣብ ቦታኻ።','ኣይ,','ሙላን!','ንስቲ','ኣይ','ትኽእሊን','ምግባር','ናይ','እዚ!'],
      translit: ['ሬጋ!','ኣምራ','ሙላን','ቬነዔምዳ','ሙል','ኣባ','ሸላ,','ኣባ,','ኣታ','ሎ','ሂርጋሽታ','ቶቭ','ባሆዳሺም','ሃኣሓሮኒም።','ላማ','ኣታ','ሃያቭ','ሌሒትጋዬስ?','ማ','ዖድ','ኤፍሻር','ላዓሶት?','ኣህ','ሸለኻ','ሁ','ራቅ','ዬሌድ','ቃጣን።','ሁ','ሎ','ያሆል','ሌሒትጋዬስ።','ከሙቫን','ሸሁ','ሎ','ያሆል,','ኣምራ','ሙላን,','ሁ','ቃጣን','ሚዳይ።','ኣቫል','ዬሽ','ሊ','ራዕዮን።','ሙላን','ኒኽነሳ','ላሄዶር','ሸል','ኣባ','ኡፓትሃ','ኤት','ሃኣሮን።','ሂ','ሆፂኣ','ኤት','ሃሄሬቭ','ሃኣሩካ','ሸሎ','ኡቨዕዝራታ','ሓትኸ','ኤት','ሰዓራ','ሃሻሆር','ሃኣሮኽ።','ሂ','ላቭሻ','ኤት','ሃሉቅ','ኣባ','ሸላ','ቬሓጌራ','ኤት','ሃሄሬቭ','ዓል','ማትናዬሃ።','ቲስታኬል','ዓላይ።','ኣኒ','ሃቤን','ሸለኻ','ዓኽሻቭ።','ኣኒ','ኤሌኽ','ቢምቆምሃ።','ሎ,','ሙላን!','ኣት','ሎ','ዬሖላ','ላዓሶት','ኤት','ዜ!'],
      fullTigrinya: 'ሓሙሽ! ሙላን ይብሉ ቅድሚ ኣቦኣ ቆምተ ኣቦ ኣብ ወርሒ ዝሓለፈ ጽቡቕ ኣይተሰሚዕካን ሕጂ ስለምንታይ ናብ ሰራዊት ክምልመል ኣሎካ? ሓውካ ናሕስ ቆልዓ ምምልምላት ኣይኽእልን ይብሉ ኣቦ። ሙላን ናብ ክፍሊ ኣቦ ኣትያ ሰይፉ ኣውጺኣ ነዊሕ ጸሊም ጸጉሪ ቆሪጻ ናይ ኣቦ ክዳን ተኸዲና ሰይፊ ሓዘት። ወድኻ ኣነ ኢየ ሕጂ ኣቦ ክኸይድ ኣነ ኣለኒ ትብሎ።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%9E%D7%95%D7%9C%D7%90%D7%9F-%D7%95%D7%94%D7%97%D7%A8%D7%91.webp'
    },
    {
      hebrew: '"אַבָּא, תַּקְשִׁיב לִי בְּבַקָּשָׁה," אָמְרָה מוּלָאן, "הַרְבֵּה שָׁנִים אִמַּנְתָּ אוֹתִי בְּקוּנְג פּוּ. לִמַּדְתָּ אוֹתִי אֵיךְ לְהִשְׁתַּמֵּשׁ בַּחֶרֶב." "רַק כְּדֵי שֶׁתּוּכְלִי לְהָגֵן עַל עַצְמֵךְ! מֵעוֹלָם לֹא לִמַּדְתִּיךְ אֵיךְ לְהִלָּחֵם בְּמִלְחָמָה. אִם יְגַלּוּ שֶׁאַתְּ אִשָּׁה, יוֹצִיאוּ אוֹתָךְ לְהוֹרֵג!" "אַף אֶחָד לֹא יְגַלֶּה אֶת זֶה, אַבָּא," אָמְרָה מוּלָאן. הַבַּת נִשְּׁקָה אוֹתוֹ לְשָׁלוֹם. "אֲנִי אוֹהֶבֶת אוֹתְךָ, אַבָּא. תִּשְׁמֹר עַל עַצְמְךָ." הִיא לָקְחָה מְעַט צֵידָה לַדֶּרֶךְ וְטִפְּסָה עַל הַסּוּס שֶׁל הַמִּשְׁפָּחָה. הִיא דָּהֲרָה מִשָּׁם וְהָלְכָה לְהִצְטָרֵף לַצָּבָא.',
      words: ['אַבָּא,','תַּקְשִׁיב','לִי','בְּבַקָּשָׁה,','אָמְרָה','מוּלָאן,','הַרְבֵּה','שָׁנִים','אִמַּנְתָּ','אוֹתִי','בְּקוּנְג','פּוּ.','לִמַּדְתָּ','אוֹתִי','אֵיךְ','לְהִשְׁתַּמֵּשׁ','בַּחֶרֶב.','רַק','כְּדֵי','שֶׁתּוּכְלִי','לְהָגֵן','עַל','עַצְמֵךְ!','מֵעוֹלָם','לֹא','לִמַּדְתִּיךְ','אֵיךְ','לְהִלָּחֵם','בְּמִלְחָמָה.','אִם','יְגַלּוּ','שֶׁאַתְּ','אִשָּׁה,','יוֹצִיאוּ','אוֹתָךְ','לְהוֹרֵג!','אַף','אֶחָד','לֹא','יְגַלֶּה','אֶת','זֶה,','אַבָּא,','אָמְרָה','מוּלָאן.','הַבַּת','נִשְּׁקָה','אוֹתוֹ','לְשָׁלוֹם.','אֲנִי','אוֹהֶבֶת','אוֹתְךָ,','אַבָּא.','תִּשְׁמֹר','עַל','עַצְמְךָ.','הִיא','לָקְחָה','מְעַט','צֵידָה','לַדֶּרֶךְ','וְטִפְּסָה','עַל','הַסּוּס','שֶׁל','הַמִּשְׁפָּחָה.','הִיא','דָּהֲרָה','מִשָּׁם','וְהָלְכָה','לְהִצְטָרֵף','לַצָּבָא.'],
      tigrinya: ['ኣቦ,','ስምዓኒ','ንዓይ','በጃኻ,','ይብሉ','ሙላን,','ብዙ','ዓመታት','ኣሰልጠንካኒ','ንዓይ','ኩንግ','ፉ።','ኣምሃርካኒ','ንዓይ','ኣበይ','ምጥቃም','ሰይፊ።','ጥራይ','ምእንቲ','ክትክእሊ','ምክልኻል','ናብ','ናትኪ!','ኣቐዲምካ','ኣይ','ኣምሃርኩኺን','ኣበይ','ክትቃለሲ','ኣብ ውግእ።','እንተ','ይቃልዑ','ኣንቲ','ሰበይቲ,','ክወጽኡ','ናትኪ','ናብ ሞት!','ወላ','ሓደ','ኣይ','ይቃልዕን','ናይ','እዚ,','ኣቦ,','ይብሉ','ሙላን።','ጓል','ሳዕሳዐቶ','ናቱ','ሰላም።','ኣነ','ፍቐረካ','ናብ ዓዝካ,','ኣቦ።','ሓሉ','ናብ','ናትካ።','ንሳ','ወሰደት','ሒደት','ምግቢ','ምስ','ዓለበት','ናብ','ፈረስ','ናይ','ስድራቤት።','ንሳ','ሃደመት','ካብኡ','ሓለፈት','ምጽምባር','ናብ ሰራዊት።'],
      translit: ['ኣባ,','ታቅሺብ','ሊ','ቤቫቃሻ,','ኣምራ','ሙላን,','ሃርቤ','ሻኒም','ኢማንታ','ኦቲ','ቤቁንግ','ፑ።','ሊማዳታ','ኦቲ','ኤይኽ','ሌሒሽታሜሽ','ባሄሬቭ።','ራቅ','ከዴይ','ሸቱኽሊ','ሌሃጌን','ዓል','ዓፅሜኽ!','ሜዓውላም','ሎ','ሊማዳቲኽ','ኤይኽ','ሌሒላሄም','ቤሚልሓማ።','ኢም','ዬጋሉ','ሸኣት','ኢሻ,','ዮፂኡ','ኦታኽ','ሌሆሬግ!','ኣፍ','ኤሓድ','ሎ','ዬጋሌ','ኤት','ዜ,','ኣባ,','ኣምራ','ሙላን።','ሃባት','ኒሽቃ','ኦቶ','ሌሻሎም።','ኣኒ','ኦሄቬት','ኦትሃ,','ኣባ።','ቲሽሞር','ዓል','ዓፅምሃ።','ሂ','ላቅሃ','ሜዓት','ፄዳ','ላዴሬኽ','ቬቲፐሳ','ዓል','ሃሱስ','ሸል','ሃሚሽፓሓ።','ሂ','ዳሃራ','ሚሻም','ቬሃልሃ','ሌሒፅጣሬፍ','ላፃቫ།'],
      fullTigrinya: 'ኣቦ ስምዓኒ ብዙ ዓመታት ኩንግ ፉ ኣሰልጠንካኒ ሰይፊ ምጥቃም ኣምሃርካኒ ይብሉ ሙላን። ጥራይ ናትኪ ምክልኻል ምእንቲ ኣቦ ይብሉ ኣብ ውግእ ክትቃለሲ ኣምሃርኩኺን ሰበይቲ ምዃንኪ እንተ ቃሊዖም ክቐትሉኺ ይኽእሉ። ወሊዲ ሳዕሳዐቶ ፍቐረካ ኣቦ ትብሎ ኣብ ፈረስ ናብ ሰራዊት ሃደመት።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%94%D7%97%D7%95%D7%9E%D7%94-%D7%94%D7%A1%D7%99%D7%A0%D7%99%D7%AA.webp'
    },
    {
      hebrew: 'בַּצָּבָא, מוּלָאן הִתְגַּלְּתָה כְּחַיֶּלֶת אַמִּיצָה. הִיא עָבְדָה יוֹתֵר קָשֶׁה מִכּוּלָּם כְּדֵי שֶׁיַּחְשְׁבוּ שֶׁהִיא חֲזָקָה כְּמוֹ כָּל הַגְּבָרִים. הִיא עָשְׂתָה כָּל מַה שֶּׁצִּפּוּ מֵהֶם לַעֲשׂוֹת וְעָזְרָה לְכָל מִי שֶׁהָיָה צָרִיךְ עֶזְרָה. צוּרַת הַמַּחְשָׁבָה הַשּׁוֹנָה שֶׁלָּהּ, וְהַדֶּרֶךְ שֶׁבָּהּ יָדְעָה לְתַכְנֵן מַהֲלָכִים בַּמִּלְחָמָה, עָזְרָה לָהּ לְהִתְבַּלֵּט מֵעַל כָּל הָאֲחֵרִים. אַחֲרֵי תְּקוּפָה בַּצָּבָא, הַמְּפַקְּדִים שֶׁלָּהּ הֶעֱלוּ אוֹתָהּ בְּדַרְגָּה וְהִיא נַהְיְתָה מְפַקֶּדֶת עַל חַיָּלִים אֲחֵרִים. אַחֲרֵי כַּמָּה שָׁנִים, קִיבְּלָה מוּלָאן אֶת הַתַּפְקִיד הַכִּי גָּבֹהַּ – הִיא תִּהְיֶה הַגֶּנֶרָלִית.',
      words: ['בַּצָּבָא,','מוּלָאן','הִתְגַּלְּתָה','כְּחַיֶּלֶת','אַמִּיצָה.','הִיא','עָבְדָה','יוֹתֵר','קָשֶׁה','מִכּוּלָּם','כְּדֵי','שֶׁיַּחְשְׁבוּ','שֶׁהִיא','חֲזָקָה','כְּמוֹ','כָּל','הַגְּבָרִים.','הִיא','עָשְׂתָה','כָּל','מַה','שֶּׁצִּפּוּ','מֵהֶם','לַעֲשׂוֹת','וְעָזְרָה','לְכָל','מִי','שֶׁהָיָה','צָרִיךְ','עֶזְרָה.','צוּרַת','הַמַּחְשָׁבָה','הַשּׁוֹנָה','שֶׁלָּהּ','וְהַדֶּרֶךְ','שֶׁבָּהּ','יָדְעָה','לְתַכְנֵן','מַהֲלָכִים','בַּמִּלְחָמָה','עָזְרָה','לָהּ','לְהִתְבַּלֵּט','מֵעַל','כָּל','הָאֲחֵרִים.','אַחֲרֵי','תְּקוּפָה','בַּצָּבָא,','הַמְּפַקְּדִים','שֶׁלָּהּ','הֶעֱלוּ','אוֹתָהּ','בְּדַרְגָּה','וְהִיא','נַהְיְתָה','מְפַקֶּדֶת','עַל','חַיָּלִים','אֲחֵרִים.','אַחֲרֵי','כַּמָּה','שָׁנִים,','קִיבְּלָה','מוּלָאן','אֶת','הַתַּפְקִיד','הַכִּי','גָּבֹהַּ','הִיא','תִּהְיֶה','הַגֶּנֶרָלִית.'],
      tigrinya: ['ኣብ ሰራዊት,','ሙላን','ተረኸበት','ከም ወተሃደር','ብርቱዕ።','ንሳ','ሰርሔት','ዝያዳ','ብርቱዕ','ካብ ኩሎም','ምእንቲ','ክሓስቡ','ንሳ','ሓያላ','ከም','ኩሉ','ሰብኡት።','ንሳ','ገበረት','ኩሉ','እቲ','ዝጸበቑ','ካብኦም','ምግባር','ሓገዘት','ኩሉ','ዝዀነ','ዝደለዩ','ሓገዝ','ሓገዝ።','ቅርፂ','ሓሳብ','ፍሉይ','ናቶ','ኣካይዳ','ዝፈልጥ','ፈሊጣ','ምጥቃም','ምንቕስቓስ','ኣብ ውግእ','ሓገዘት','ናቶ','ምትብዓት','ካብ','ኩሎም','ካልኦት።','ድሕሪ','ናይ ቕዋም','ኣብ ሰራዊት,','ሓዊሶም','ናቶ','ኣልዒሎም','ናቶ','ኣብ ርዕሲ','ንሳ','ኰነት','ሓዪሎም','ኣብ ልዕሊ','ወተሃደራት','ካልኦት።','ድሕሪ','ሒደት','ዓመታት,','ተቐቢላ','ሙላን','ናይ','ስርሓት','ዝለዓለ','ቦታ','ንሳ','ክትከውን','ጀነራሊት།'],
      translit: ['ባፃቫ,','ሙላን','ሂትጋለታ','ከሃዬሌት','ኣሚፃ።','ሂ','ዓቭዳ','ዮቴር','ቃሸ','ሚኩላም','ከዴይ','ሸያሕሸቭ','ሸሂ','ሃዛቃ','ከሞ','ኮል','ሃጌቫሪም።','ሂ','ዓሴታ','ኮል','ማ','ሸፂፑ','ሜሄም','ላዓሶት','ቬዓዝራ','ሌኻል','ሚ','ሸሃያ','ፃሪኽ','ዔዝራ።','ፁራት','ሃማሕሻቫ','ሃሾና','ሸላ','ቬሃዴሬኽ','ሸባ','ያዴዓ','ሌታኽኔን','ማሃላሂም','ባሚልሓማ','ዓዝራ','ላ','ሌሒትባሌት','ሜዓል','ኮል','ሃኣሄሪም።','ኣሃሬ','ቴቁፋ','ባፃቫ,','ሃሜፓቅዲም','ሸላ','ሄዔሉ','ኦታ','ቤዳርጋ','ቬሂ','ናሀዬታ','ሜፓቄዴት','ዓል','ሃዬሊም','ኣሄሪም።','ኣሃሬ','ካማ','ሻኒም,','ቂብላ','ሙላን','ኤት','ሃታፕቂድ','ሃኪ','ጋቮሃ','ሂ','ቲሂዬ','ሃጌነራሊት።'],
      fullTigrinya: 'ሙላን ኣብ ሰራዊት ካብ ኩሎም ዝያዳ ብርቱዕ ሰርሔት ኩሉ ሰብ ንሳ ሓያላ ምዃና ክሓስቡ ምእንቲ። ፍሉይ ሓሳባ ኣብ ውግእ ምጥቃም ካብ ኩሎም ኣብሪሓ። ድሕሪ ቕዋም ኣዘዝቲ ናብ ዝለዓለ ማዕርግ ኣልዒሎም ናብ ካልኦት ወተሃደራት ሓዊሶም። ድሕሪ ሒደት ዓመታት ሙላን ዝለዓለ ቦታ - ጀነራሊት ኰነት።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%9E%D7%95%D7%9C%D7%90%D7%9F-%D7%9E%D7%AA%D7%90%D7%9E%D7%A0%D7%AA.webp'
    },
    {
      hebrew: 'לֹא עָבַר הַרְבֵּה זְמַן מֵאָז שֶׁהָפְכָה לְגֶנֶרָלִית, וּפִתְאֹם הִתְחִילָה לְהִתְפַּשֵּׁט בְּכָל הַצָּבָא קַדַּחַת קָשָׁה מְאֹד. הַרְבֵּה מְאֹד חַיָּלִים הָיוּ חוֹלִים וְלֹא יָכְלוּ לְהִלָּחֵם. מוּלָאן נִדְבְּקָה מֵהֶם גַּם וְחָלְתָה כָּל כָּךְ עַד שֶׁשָּׁלְחוּ רוֹפֵא לִבְדֹּק אוֹתָהּ. כְּשֶׁהָרוֹפֵא יָצָא מֵאֹהֶל שֶׁל מוּלָאן, הוּא יָדַע אֶת הָאֱמֶת וְאָמַר לַכֹּל. "הַגֶּנֶרָל הִיא אִשָּׁה?" צָעֲקוּ הַחַיָּלִים בְּהֶלֶם. חֵלֶק קָרְאוּ: "הִיא רִמְּתָה אוֹתָנוּ!" אֲבָל הָיוּ חַיָּלִים אֲחֵרִים שֶׁקָּרְאוּ: "עִם מוּלָאן אֲנַחְנוּ מְנַצְּחִים בְּכָל קְרָב! אַל תִּגְּעוּ בַּגֶּנֶרָלִית שֶׁלָּנוּ!"',
      words: ['לֹא','עָבַר','הַרְבֵּה','זְמַן','מֵאָז','שֶׁהָפְכָה','לְגֶנֶרָלִית,','וּפִתְאֹם','הִתְחִילָה','לְהִתְפַּשֵּׁט','בְּכָל','הַצָּבָא','קַדַּחַת','קָשָׁה','מְאֹד.','הַרְבֵּה','מְאֹד','חַיָּלִים','הָיוּ','חוֹלִים','וְלֹא','יָכְלוּ','לְהִלָּחֵם.','מוּלָאן','נִדְבְּקָה','מֵהֶם','גַּם','וְחָלְתָה','כָּל','כָּךְ','עַד','שֶׁשָּׁלְחוּ','רוֹפֵא','לִבְדֹּק','אוֹתָהּ.','כְּשֶׁהָרוֹפֵא','יָצָא','מֵאֹהֶל','שֶׁל','מוּלָאן,','הוּא','יָדַע','אֶת','הָאֱמֶת','וְאָמַר','לַכֹּל.','הַגֶּנֶרָל','הִיא','אִשָּׁה?','צָעֲקוּ','הַחַיָּלִים','בְּהֶלֶם.','חֵלֶק','קָרְאוּ','הִיא','רִמְּתָה','אוֹתָנוּ!','אֲבָל','הָיוּ','חַיָּלִים','אֲחֵרִים','שֶׁקָּרְאוּ','עִם','מוּלָאן','אֲנַחְנוּ','מְנַצְּחִים','בְּכָל','קְרָב!','אַל','תִּגְּעוּ','בַּגֶּנֶרָלִית','שֶׁלָּנוּ!'],
      tigrinya: ['ኣይ','ሓለፈ','ብዙ','ግዜ','ካብ','ምዃን','ጀነራሊት,','ሃንደበት','ጀሚሩ','ምልዓል','ኣብ ኩሉ','ሰራዊት','ሕማም ናዕዛዝ','ብርቱዕ','ኣዝዩ።','ብዙ','ኣዝዩ','ወተሃደራት','ነበሩ','ሕሙማት','ኣይ','ኽእሉን','ምቅላስ።','ሙላን','ሓሚሙ','ካብኦም','እውን','ሓሚሙ','ኩሉ','ከምዚ','ክሳዕ','ዝሰደዱ','ሓኪም','ምምርማር','ናቶ።','ምስ ወጸ','ሓኪም','ካብ ዓጸዶ','ናይ','ሙላን,','ንሱ','ፈሊጡ','ናይ','ሓቂ','ይብሉ','ንኩሉ።','ጀነራል','ንሳ','ሰበይቲ?','ጸዓቆ','ወተሃደራት','ብምሕዛን።','ቁሩብ','ጸዊዑ','ንሳ','ኣታዓሰለት','ናና!','ግን','ነበሩ','ወተሃደራት','ካልኦት','ዝበሉ','ምስ','ሙላን','ንሕና','ንሓጽር','ኣብ ኩሉ','ቃልሲ!','ኣይ','ትንኩ','ጀነራሊት','ናትና!'],
      translit: ['ሎ','ዓቫር','ሃርቤ','ዘማን','ሜኣዝ','ሸሃፕኸ','ሌጌነራሊት,','ኡፒትኦም','ሂትሂላ','ሌሒትፓሼት','ቤኻል','ሃፃቫ','ቃዳሃት','ቃሻ','ሜኦድ።','ሃርቤ','ሜኦድ','ሃዬሊም','ሃዩ','ሆሊም','ቬሎ','ያኽሉ','ሌሒላሄም።','ሙላን','ኒድቤቃ','ሜሄም','ጋም','ቬሓልታ','ኮል','ካኽ','ዓድ','ሸሻልሁ','ሮፌ','ሊቭዶቅ','ኦታ።','ከሸሃሮፌ','ያፃ','ሜኦሄል','ሸል','ሙላን,','ሁ','ያዳዕ','ኤት','ሃኤሜት','ቬኣማር','ላኮል።','ሃጌነራል','ሂ','ኢሻ?','ፃዓቁ','ሃሃዬሊም','ቤሄሌም።','ሄሌቅ','ቃርኡ','ሂ','ሪምታ','ኦታኑ!','ኣቫል','ሃዩ','ሃዬሊም','ኣሄሪም','ሸቃርኡ','ኢም','ሙላን','ኣናሕኑ','ሜናፅሂም','ቤኻል','ቅራቭ!','ኣል','ቲጌዑ','ባጌነራሊት','ሸላኑ!'],
      fullTigrinya: 'ጀነራሊት ምስ ኰነት ዘይነዊሕ ግዜ ሃንደበት ዝኸበደ ሕማም ናዕዛዝ ኣብ ሰራዊት ኩሉ ሰሓተ ብዙ ወተሃደራት ሓሙ ኣብ ምቅላስ ኣይኽእሉን። ሙላን እውን ሓሚማ ሓኪም ናብ ምምርማሩ ሰደዱ። ሓኪም ሓቂ ምስ ፈለጠ ንኩሉ ጀነራሊት ሰበይቲ ምዃና ኣፍለጠ። ወተሃደራት ዝበሉ ምስ ሙላን ንሓጽር ጀነራሊትና ኣይትንኩ ዝብሉ ካልኦት ነበሩ።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%9E%D7%95%D7%9C%D7%90%D7%9F-%D7%A6%D7%95%D7%A4%D7%94-%D7%9C%D7%A8%D7%97%D7%95%D7%A7.webp'
    },
    {
      hebrew: 'בְּדִיּוּק אָז, הִגִּיעַ חַיָּל בִּרְצִיָּה: "תַּקְשִׁיבוּ כּוּלָּם! מַתְּקֶפֶת פֶּתַע מֵהֶהָרִים!" מוּלָאן שָׁמְעָה אֶת זֶה. הִיא הִתְלַבְּשָׁה, לָקְחָה אֶת חַרְבָּהּ וְיָצָאת הַחוּצָה. הִיא עָמְדָה זְקוּפָה וְאָמְרָה לַחַיָּלִים לְאָן עֲלֵיהֶם לָלֶכֶת וּמָה לַעֲשׂוֹת. הַחַיָּלִים, אֲפִילוּ אֵלֶּה שֶׁלֹּא אָהֲבוּ שֶׁהַגֶּנֶרָלִית שֶׁלָּהֶם הִיא אִשָּׁה, יָדְעוּ שֶׁמוּלָאן יוֹדַעַת עַל מָה הִיא מְדַבֶּרֶת וּמִיָּד הָלְכוּ לְבַצֵּעַ אֶת הַהוֹרָאוֹת שֶׁלָּהּ. הַתָּכְנִית שֶׁלָּהּ עָבְרָה! הֵם נִצְּחוּ בַּקְּרָב. זֶה הָיָה נִצָּחוֹן כָּל כָּךְ גָּדוֹל שֶׁהָאוֹיֵב וִיתֵּר וּבָרַח, סוֹף סוֹף. הַמִּלְחָמָה הִסְתַּיְּמָה, וְסִין נִיצְּלָה!',
      words: ['בְּדִיּוּק','אָז','הִגִּיעַ','חַיָּל','בִּרְצִיָּה','תַּקְשִׁיבוּ','כּוּלָּם!','מַתְּקֶפֶת','פֶּתַע','מֵהֶהָרִים!','מוּלָאן','שָׁמְעָה','אֶת','זֶה.','הִיא','הִתְלַבְּשָׁה,','לָקְחָה','אֶת','חַרְבָּהּ','וְיָצָאת','הַחוּצָה.','הִיא','עָמְדָה','זְקוּפָה','וְאָמְרָה','לַחַיָּלִים','לְאָן','עֲלֵיהֶם','לָלֶכֶת','וּמָה','לַעֲשׂוֹת.','הַחַיָּלִים,','אֲפִילוּ','אֵלֶּה','שֶׁלֹּא','אָהֲבוּ','שֶׁהַגֶּנֶרָלִית','שֶׁלָּהֶם','הִיא','אִשָּׁה,','יָדְעוּ','שֶׁמוּלָאן','יוֹדַעַת','עַל','מָה','הִיא','מְדַבֶּרֶת','וּמִיָּד','הָלְכוּ','לְבַצֵּעַ','אֶת','הַהוֹרָאוֹת','שֶׁלָּהּ.','הַתָּכְנִית','שֶׁלָּהּ','עָבְרָה!','הֵם','נִצְּחוּ','בַּקְּרָב.','זֶה','הָיָה','נִצָּחוֹן','כָּל','כָּךְ','גָּדוֹל','שֶׁהָאוֹיֵב','וִיתֵּר','וּבָרַח,','סוֹף','סוֹף.','הַמִּלְחָמָה','הִסְתַּיְּמָה,','וְסִין','נִיצְּלָה!'],
      tigrinya: ['ብትኽክል','ሽዑ','መጸ','ወተሃደር','ብምሩጽ','ስምዑ','ኩሎም!','ወራር','ሃንደበት','ካብ ኣኽራናት!','ሙላን','ሰምዐት','ናይ','እዚ።','ንሳ','ተኸደነት,','ወሰደት','ናይ','ሰይፊ','ወጸት','ወጻኢ።','ንሳ','ቀጠጠ','ቅኑዕ','ይብሉ','ወተሃደራት','ናበይ','ኣሎዎም','ምኻድ','እንታይ','ምግባር።','ወተሃደራት,','ከይሉ','ቱ ዝ','ዝ','ዘይፍቱ','ጀነራሊት','ናቶም','ንሳ','ሰበይቲ,','ፈሊጦም','ሙላን','ትፈልጥ','ናብ','እንታይ','ንሳ','ትዛረብ','ቅጽበት','ሓለፉ','ምፍጻም','ናይ','ትእዛዝ','ናቶ።','ምልቲ','ናቶ','ሓለፈ!','ንሶም','ሓጸሩ','ኣብ ቃልሲ።','እዚ','ነበረ','ዓወት','ኩሉ','ከምዚ','ዓቢ','ጸላኢ','ሰረረ','ሃደሞ,','መወዳእታ','መወዳእታ።','ውግእ','ወዲኡ,','ቻይና','ደሓነት!'],
      translit: ['ቤዲዩቅ','ኣዝ','ሂጊዓ','ሃዬሊ','ቢርፂያ','ታቅሺቡ','ኩላም!','ማቴቀፈት','ፔታ','ሜሄሃሪም!','ሙላን','ሻምዓ','ኤት','ዜ።','ሂ','ሂትላቡሻ,','ላቅሃ','ኤት','ሃርባ','ቬያፃት','ሃሁፃ።','ሂ','ዓምዳ','ዘቁፋ','ቬኣምራ','ላሃዬሊም','ሌዓን','ዓሌሄም','ላሌኸት','ኡማ','ላዓሶት።','ሃሃዬሊም,','ኣፒሉ','ኤሌ','ሸሎ','ኣሃቩ','ሸሃጌነራሊት','ሸላሄም','ሂ','ኢሻ,','ያዴዑ','ሸሙላን','ዮዳዓት','ዓል','ማ','ሂ','ሜዳቤሬት','ኡሚያድ','ሃልሁ','ሌቫፄዓ','ኤት','ሃሆራኦት','ሸላ።','ሃታኽኒት','ሸላ','ዓቭራ!','ሄም','ኒፅሁ','ባቅራቭ።','ዜ','ሃያ','ኒፃሆን','ኮል','ካኽ','ጋዶል','ሸሃኦዬቭ','ቪቴር','ኡቫራሕ,','ሶፍ','ሶፍ።','ሃሚልሓማ','ሂስታዬሚ,','ቬሲን','ኒፅላ!'],
      fullTigrinya: 'ሽዑ ወተሃደር ወራር ሃንደበት ካብ ኣኽራናት ይምጻ ኣሎ ኣፍለጠ። ሙላን ሰምዐት ተኸደነት ሰይፊ ወሰደት ወጸት። ወተሃደራት ናበይ ክኸዱ እንታይ ክገብሩ ኣምሃረቶም ቅኑዕ ቆምተ። ወተሃደራት ትእዛዛ ፈጸሙ ሓጸሩ ጸላኢ ሃደሞ። ሙላን ቻይና ኣድሐነት ውግእ ወዲኡ!',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%90%D7%A8%D7%9E%D7%95%D7%9F-%D7%94%D7%A7%D7%99%D7%A1%D7%A8.webp'
    },
    {
      hebrew: 'אַחֲרֵי אוֹתוֹ קְרָב אַחֲרוֹן, כּוּלָּם שִׁבְּחוּ אֶת מוּלָאן עַל כָּךְ שֶׁהִצִּילָה אֶת סִין. הַקֵּיסָר הָיָה כָּל כָּךְ שָׂמֵחַ וְאָמַר: "מוּלָאן תִּשָּׁאֵר אִיתִּי בָּאַרְמוֹן. מִישֶׁהִי חֲכָמָה כְּמוֹךְ תִּהְיֶה יוֹעֶצֶת מַלְכוּתִית טוֹבָה." מוּלָאן הִשְׁתַּחֲוְתָה מוּל הַקֵּיסָר. "אַתָּה נָדִיב מְאֹד, אֲדוֹנִי," הִיא אָמְרָה, "אֲבָל מָה שֶׁאֲנִי רוֹצָה יוֹתֵר מִכֹּל זֶה לַחֲזֹר הַבַּיְתָה לַכְּפָר שֶׁלִּי וְלַמִּשְׁפָּחָה שֶׁלִּי." "אָז לְפָחוֹת קְחִי אִיתָּךְ אֶת הַמַּתָּנוֹת הַיָּפוֹת הָאֵלֶּה." אַחֲרֵי כָּל הַשָּׁנִים הָאֵלֶּה, מוּלָאן חָזְרָה סוֹף סוֹף לַכְּפָר שֶׁלָּהּ. כּוּלָּם הֵרִיעוּ וְשָׂמְחוּ. הָאִשָּׁה שֶׁהִצִּילָה אֶת סִין הָיְתָה מוּלָאן מִשֶּׁלָּהֶם! הַסּוֹף.',
      words: ['אַחֲרֵי','אוֹתוֹ','קְרָב','אַחֲרוֹן,','כּוּלָּם','שִׁבְּחוּ','אֶת','מוּלָאן','עַל','כָּךְ','שֶׁהִצִּילָה','אֶת','סִין.','הַקֵּיסָר','הָיָה','כָּל','כָּךְ','שָׂמֵחַ','וְאָמַר:','מוּלָאן','תִּשָּׁאֵר','אִיתִּי','בָּאַרְמוֹן.','מִישֶׁהִי','חֲכָמָה','כְּמוֹךְ','תִּהְיֶה','יוֹעֶצֶת','מַלְכוּתִית','טוֹבָה.','מוּלָאן','הִשְׁתַּחֲוְתָה','מוּל','הַקֵּיסָר.','אַתָּה','נָדִיב','מְאֹד,','אֲדוֹנִי,','הִיא','אָמְרָה,','אֲבָל','מָה','שֶׁאֲנִי','רוֹצָה','יוֹתֵר','מִכֹּל','זֶה','לַחֲזֹר','הַבַּיְתָה','לַכְּפָר','שֶׁלִּי','וְלַמִּשְׁפָּחָה','שֶׁלִּי.','אָז','לְפָחוֹת','קְחִי','אִיתָּךְ','אֶת','הַמַּתָּנוֹת','הַיָּפוֹת','הָאֵלֶּה.','אַחֲרֵי','כָּל','הַשָּׁנִים','הָאֵלֶּה,','מוּלָאן','חָזְרָה','סוֹף','סוֹף','לַכְּפָר','שֶׁלָּהּ.','כּוּלָּם','הֵרִיעוּ','וְשָׂמְחוּ.','הָאִשָּׁה','שֶׁהִצִּילָה','אֶת','סִין','הָיְתָה','מוּלָאן','מִשֶּׁלָּהֶם!','הַסּוֹף.'],
      tigrinya: ['ድሕሪ','ቲ','ቃልሲ','መወዳእታ,','ኩሎም','ኣውደቑ','ናይ','ሙላን','ናብ','ከምዚ','ዘድሐነት','ናይ','ቻይና።','ንጉስ','ነበረ','ኩሉ','ከምዚ','ሕጉስ','ይብሉ','ሙላን','ክትቕመጥ','ምሳይ','ኣብ ቤተ-መንግስቲ።','ሓደ','ዕቁብ','ከምኺ','ክትከዊ','ኣማኻሪ','ናይ ንጉስ','ጽቡቕ።','ሙላን','ምስ ሰጎሙ','ቅድሚ','ንጉስ።','ንስኻ','ቐናጺ','ኣዝዩ,','ኣዶናይ,','ንሳ','ትብሎ,','ግን','እቲ','ዝደሊ','ናተይ','ዝያዳ','ካብ ኩሉ','እዚ','ምምላስ','ናብ ቤት','ናብ ዓዲ','ናተይ','ናብ ስድራቤት','ናተይ።','ሽዑ','ቀሊሉ','ውሰዲ','ምሳኺ','ናይ','ህያብ','ጽቡቕ','ኣሎ።','ድሕሪ','ኩሉ','ዓመታት','ኣሎ,','ሙላን','ተመልሰት','ሓደ ሓደ','ሓደ ሓደ','ናብ ዓዲ','ናቶ።','ኩሎም','ሓጎሱ','ተሓጎሱ።','ሰበይቲ','ዘድሐነት','ናይ','ቻይና','ነበረት','ሙላን','ናቶም!','ወዲኡ።'],
      translit: ['ኣሃሬ','ኦቶ','ቅራቭ','ኣሃሮን,','ኩላም','ሺቡ','ኤት','ሙላን','ዓል','ካኽ','ሸሂፂላ','ኤት','ሲን።','ሃቄሳር','ሃያ','ኮል','ካኽ','ሳሜዓሕ','ቬኣማር','ሙላን','ቲሻዔር','ኢቲ','ባዓርሞን།','ሚሸሂ','ሃኻማ','ከሞኽ','ቲሂዬ','ዮዔፄት','ማልኹቲት','ቶቫ።','ሙላን','ሂሽታሃቬታ','ሙል','ሃቄሳር།','ኣታ','ናዲቭ','ሜኦድ,','ኣዶኒ,','ሂ','ኣምራ,','ኣቫል','ማ','ሸኣኒ','ሮፃ','ዮቴር','ሚኮል','ዜ','ላሃዞር','ሃቤይታ','ላካፓር','ሸሊ','ቬላሚሽፓሓ','ሸሊ።','ኣዝ','ሌፋሆት','ቅሂ','ኢታኽ','ኤት','ሃማታኖት','ሃያፎት','ሃኤሌ።','ኣሃሬ','ኮል','ሃሻኒም','ሃኤሌ,','ሙላን','ሓዝራ','ሶፍ','ሶፍ','ላካፓር','ሸላ።','ኩላም','ሄሪዑ','ቬሳምሁ።','ሃኢሻ','ሸሂፂላ','ኤት','ሲን','ሃይታ','ሙላን','ሚሸላሄም!','ሃሶፍ།'],
      fullTigrinya: 'ድሕሪ ቃልሲ መወዳእታ ኩሎም ሙላን ቻይና ምድሓናሁ ኣውደቑ። ንጉስ ምሳይ ኣብ ቤተ-መንግስቲ ቅመጢ ኣምኻሪ ጽቡቕ ክትኰሪ ይብሎ። ሙላን ናብ ዓዲ ናይ ስድራቤቱ ምምላስ ደልያ ቐናጺ ንጉስ ትብሎ። ንጉስ ህያባት ሃቦ ሙላን ናብ ዓዲ ተመልሰት ኩሎም ሓጎሱ ሰበይቲ ዘድሐነት ቻይና ሙላን ናቶም ነበረት! ወዲኡ።',
      emoji: 'img:https://www.sipurkatan.com/wp-content/uploads/2022/10/%D7%94%D7%9B%D7%A4%D7%A8.webp'
    }
  ]
},
  {
  title: 'עַכְבַּר הָעִיר וְעַכְבַּר הַכְּפָר',
  titleTigrinya: 'ኣይጢ ከተማን ኣይጢ ዓዲን',
  titleTranslit: 'ዓኽባר ሃዔር ቨዓኽባር ሃኽፓር',
  cover: '🏙️🌾🐭',
  pages: [
    {
      hebrew: 'אֲנִי עַכְבַּר כְּפָר פָּשׁוּט. אֲנִי גָּר בְּתוֹךְ עֵץ נָמוּךְ לְיַד שְׂדֵה חִיטָּה גָּדוֹל. כַּמָּה גַּרְעִינֵי חַמְנִיָּה וּפֵרוּרֵי לֶחֶם וּגְבִינָה מַסְפִּיקִים לִי לַאֲרוּחָה מַשְׂבִּיעָה.',
      words: ['אֲנִי','עַכְבַּר','כְּפָר','פָּשׁוּט.','אֲנִי','גָּר','בְּתוֹךְ','עֵץ','נָמוּךְ','לְיַד','שְׂדֵה','חִיטָּה','גָּדוֹל.','כַּמָּה','גַּרְעִינֵי','חַמְנִיָּה','וּפֵרוּרֵי','לֶחֶם','וּגְבִינָה','מַסְפִּיקִים','לִי','לַאֲרוּחָה','מַשְׂבִּיעָה.'],
      tigrinya: ['ኣነ','ኣይጢ','ዓዲ','ሉኡኽ','ኣነ','ይነብር','ኣብ ውሽጢ','ዛፍ','ትሑት','ጥቃ','ሓሶ','ስርናይ','ዓቢ','ሒደት','ዘርኢ','ሱምሱም','ሓሙስናን ቁርጽምቲ ሕብስቲን','ሕብስቲ','ጅብን','ይኣክሎ','ንዓይ','ንምሳሕ','ዝጸገበ'],
      translit: ['ኣኒ','ዓኽባር','ከፓር','ፓሹት','ኣኒ','ጋር','ቤቶኽ','ዔጽ','ናሙኽ','ሌያድ','ሰዴ','ኺታ','ጋዶል','ካማ','ጋርዔኒ','ሃምኒያ','ኡፔሩሬ ሌሄም','ሌሄም','ኡጌቪና','ማስፒኪም','ሊ','ላኣሩሓ','ማስቢዓ'],
      fullTigrinya: 'ኣነ ሉኡኽ ኣይጢ ዓዲ እየ። ኣብ ሓደ ትሑት ዛፍ ጥቃ ዓቢ ሓሶ ስርናይ ይነብር። ሒደት ዘርኢ ሱምሱምን ቁርጽምቲ ሕብስትን ጅብንን ንጸጊበሉ ምሳሕ ይኣክሎ።',
      emoji: '🐭🌾🌳'
    },
    {
      hebrew: 'לִפְנֵי לֹא הַרְבֵּה זְמַן הַדּוֹד שֶׁלִּי בִּקֵּר אוֹתִי. הַדּוֹד שֶׁלִּי הוּא עַכְבַּר הָעִיר. כּוּלָּם יוֹדְעִים שֶׁהוּא מְאוֹד עָשִׁיר וְגָר בְּבַיִת גָּדוֹל בְּלֵב הָעִיר. הוּא תֵּאֵר אֶת כָּל מַה שֶׁאֶפְשָׁר לַחֲווֹת בָּעִיר – אוֹכֶל גוּרְמֶה, יַיִן מְשֻׁבָּח, וּמְגוּרִים מְפוֹאָרִים.',
      words: ['לִפְנֵי','לֹא','הַרְבֵּה','זְמַן','הַדּוֹד','שֶׁלִּי','בִּקֵּר','אוֹתִי.','הַדּוֹד','שֶׁלִּי','הוּא','עַכְבַּר','הָעִיר.','כּוּלָּם','יוֹדְעִים','שֶׁהוּא','מְאוֹד','עָשִׁיר','וְגָר','בְּבַיִת','גָּדוֹל','בְּלֵב','הָעִיר.','הוּא','תֵּאֵר','אֶת','כָּל','מַה','שֶּׁאֶפְשָׁר','לַחֲווֹת','בָּעִיר','–','אוֹכֶל','גוּרְמֶה,','יַיִן','מְשֻׁבָּח,','וּמְגוּרִים','מְפוֹאָרִים.'],
      tigrinya: ['ቅድሚ','ብዙሕ','ዘይኮነ','ግዜ','ሓወቦይ','ናይ','ጐበኘኒ','ከተማ','ሓወቦይ','ናይ','ንሱ','ኣይጢ','ከተማ','ኩሎም','ይፈልጡ','ንሱ','ኣዝዩ','ሃብታም','ይነብር','ኣብ ዓቢ ገዛ','ዓቢ','ኣብ ልቢ','ከተማ','ንሱ','ገለጸ','ናይ','ኩሉ','እንታይ','ክርከብ','ዝኽእል','ኣብ ከተማ','–','ምግቢ','ጎርሜ','ወይኒ','ምሩጽ','ምንባር','ምቁር'],
      translit: ['ሊፍኔ','ሎ','ሃርቤ','ዘማን','ሃዶድ','ሸሊ','ቢቄር','ኦቲ','ሃዶድ','ሸሊ','ሁ','ዓኽባር','ሃዔር','ኩላም','ዮዴዒም','ሸሁ','ሜኦድ','ዓሺር','ቬጋር','ቤቬይት','ጋዶል','ቤሌቭ','ሃዔር','ሁ','ቲኤር','ኤት','ኮል','ማ','ሸኤፍሻር','ላሃቮት','ባዔር','–','ኦኸል','ጉርሜ','ያይን','ሜሹባሕ','ኡምጉሪም','ሜፎዓሪም'],
      fullTigrinya: 'ቅድሚ ብዙሕ ዘይኮነ ጊዜ፡ ሓወቦይ ኣይጢ ከተማ ጐበኘኒ። ኩሎም ኣብ ስድራቤተይ ከም ዝፈልጥዎ፡ ንሱ ኣዝዩ ሃብታም እዩ ኣብ ዓቢ ገዛ ልቢ ከተማ ዝነብር። ኣብ ከተማ ዝርከብ ምግቢ ጎርሜ፡ ምሩጽ ወይኒ፡ ምቁርን ዓቢን ምቕማጥ ክህሉ ምዃኑ ገለጸ።',
      emoji: '🐭🏙️✨'
    },
    {
      hebrew: 'הִתְרַשַּׁמְתִּי מְאוֹד מִמַּה שֶּׁאָמַר דּוֹדִי. בְּאוֹתוֹ עֶרֶב אָמַר: "תֵּן לְבַלּוֹטוֹת הַטַּעַם שֶׁלְּךָ פִּינוּק אֲמִתִּי! בּוֹא לָעִיר אִיתִּי." וְכָּךְ, בְּאוֹתוֹ לַיְלָה הִצְטָרַפְתִּי לְדוֹדִי לִנְסִיעָה לְבֵיתוֹ שֶׁבָּעִיר.',
      words: ['הִתְרַשַּׁמְתִּי','מְאוֹד','מִמַּה','שֶּׁאָמַר','דּוֹדִי.','בְּאוֹתוֹ','עֶרֶב','אָמַר:','\"תֵּן','לְבַלּוֹטוֹת','הַטַּעַם','שֶׁלְּךָ','פִּינוּק','אֲמִתִּי!','בּוֹא','לָעִיר','אִיתִּי.\"','וְכָּךְ,','בְּאוֹתוֹ','לַיְלָה','הִצְטָרַפְתִּי','לְדוֹדִי','לִנְסִיעָה','לְבֵיתוֹ','שֶׁבָּעִיר.'],
      tigrinya: ['ኣዝዩ','ተደነቕኩ','ካብ','እቲ ዝበሎ','ሓወቦይ','ኣብቲ','ምሸት','በለ','\"ሃቦ','ነቲ ናይ ጣዕሚ ዕንፁ','ጣዕሚ','ናትካ','ጣዕሚ','ሓቀኛ','ምጻ','ናብ ከተማ','ምሳይ\"','ከምኡ','ኣብቲ','ለይቲ','ተሰለኽኩ','ምስ ሓወቦይ','ጒዕዞ','ናብ ገዝኡ','ናብ ከተማ'],
      translit: ['ሂትራሻምቲ','ሜኦድ','ሚማ','ሸኣማር','ዶዲ','ቤኦቶ','ኤሬቭ','ኣማር','ቴን','ሌቫሎቶት','ሃጣዓም','ሸለኻ','ፒኑቅ','ኣሚቲ','ቦ','ላዔር','ኢቲ','ቬካኽ','ቤኦቶ','ላይላ','ሂጽታርፍቲ','ሌዶዲ','ሊንሲዓ','ሌቬቶ','ሸባዔር'],
      fullTigrinya: 'ካብቲ ሓወቦይ ዝበሎ ኣዝዩ ተደናቒ ነይረ። ኣብቲ ምሸት "ናትካ ናይ ጣዕሚ ዕንፁ ሓቀኛ ጣዕሚ ሃቦ! ምሳይ ናብ ከተማ ምጻ" ኢሉ ጸዊዑኒ። ከምኡ ጌርና፡ ኣብቲ ለይቲ ምስ ሓወቦይ ናብ ናቱ ኣብ ከተማ ዝርከብ ገዛ ጕዕዞ ተላዒልና።',
      emoji: '🌙🚗🏙️'
    },
    {
      hebrew: 'כְּשֶׁנִּכְנַסְנוּ לַמִּזְוָה, הֻנְּחוּ עַל הַשֻּׁלְחָן שְׁרִידִים שֶׁל מִשְׁתֶּה מְפוֹאָר. טָעַמְנוּ גְּבִינַת גּוֹרְגּוֹנְזוֹלָה – מֵעוֹלָם לֹא טָעַמְתִּי גְּבִינָה טְעִימָה כָּל כָּךְ! אֲבָל אָז רָאִיתִי צֵל גָּדוֹל זָז בַּפִּינָה – וְהִתְנַפֵּל עָלֵינוּ חָתוּל נוֹרָא.',
      words: ['כְּשֶׁנִּכְנַסְנוּ','לַמִּזְוָה,','הֻנְּחוּ','עַל','הַשֻּׁלְחָן','שְׁרִידִים','שֶׁל','מִשְׁתֶּה','מְפוֹאָר.','טָעַמְנוּ','גְּבִינַת','גּוֹרְגּוֹנְזוֹלָה','–','מֵעוֹלָם','לֹא','טָעַמְתִּי','גְּבִינָה','טְעִימָה','כָּל','כָּךְ!','אֲבָל','אָז','רָאִיתִי','צֵל','גָּדוֹל','זָז','בַּפִּינָה','–','וְהִתְנַפֵּל','עָלֵינוּ','חָתוּל','נוֹרָא.'],
      tigrinya: ['ምስ ኣተና','ናብ ጓዶ','ተቐሚጡ','ኣብ','ጣውላ','ተረፍ','ናይ','ዓቢ','መኣዲ','ጣዒምና','ጅብን','ጎርጎንዞላ','–','ኣቐዲምካ','ኣይኮንኩን','ጣዒምኩ','ጅብን','ጥዑም','ካብኡ','ዝበዝሐ','ግን','ሽዑ','ርኤኹ','ጸልማት','ዓቢ','ይንቀሳቐስ','ኣብ ቅርናዕ','–','ተዘርጊሑ','ናብና','ድሙ','ዘስምብድ'],
      translit: ['ከሸኒኽናስኑ','ላሚዝቫ','ሁኑሑ','ዓል','ሃሹልሃን','ሽሪዲም','ሸል','ሚሽቴ','ሜፎዓር','ጣዓምኑ','ጌቪናት','ጎርጎንዞላ','–','ሜዓውላም','ሎ','ጣዓምቲ','ጌቪና','ጦዒማ','ኮል','ካኽ','ኣቫል','ኣዝ','ራኢቲ','ጼል','ጋዶል','ዛዝ','ባፒና','–','ቬሂትናፔል','ዓሌኑ','ሃቱል','ኖራ'],
      fullTigrinya: 'ናብ ጓዶ ምስ ኣተና፡ ኣብ ጣውላ ናይ ዓቢ መኣዲ ዝተረፈ ምግቢ ነበረ። ጅብን ጎርጎንዞላ ጣዒምና – ከምኡ ዝጣዕም ጅብን ቅድሚኡ ተጣዒመ ኣይፈለጥኩን! ግን ሽዑ ኣብ ቅርናዕ ዓቢ ጸልማት ክንቀሳቐስ ርኤኹ – ዘስምብድ ድሙ ናባና ሮጸ።',
      emoji: '🍽️🧀😱'
    },
    {
      hebrew: 'הַדּוֹד וַאֲנִי מִהַרְנוּ לָרוּץ, וְהַחָתוּל רָדַף אַחֲרֵינוּ. בְּקֹשִׁי נִמְלַטְנוּ. אָמַרְתִּי לַדּוֹד: "תּוֹדָה עַל הָאֵירוּחַ, אֲבָל אֲנִי חוֹזֵר הַבַּיְתָה. עָדִיף לֶאֱכוֹל שְׁעוּעִית בְּשֶׁקֶט מֵאֲשֶׁר לִזְלֹל עוּגוֹת בְּפַחַד."',
      words: ['הַדּוֹד','וַאֲנִי','מִהַרְנוּ','לָרוּץ,','וְהַחָתוּל','רָדַף','אַחֲרֵינוּ.','בְּקֹשִׁי','נִמְלַטְנוּ.','אָמַרְתִּי','לַדּוֹד:','\"תּוֹדָה','עַל','הָאֵירוּחַ,','אֲבָל','אֲנִי','חוֹזֵר','הַבַּיְתָה.','עָדִיף','לֶאֱכוֹל','שְׁעוּעִית','בְּשֶׁקֶט','מֵאֲשֶׁר','לִזְלֹל','עוּגוֹת','בְּפַחַד.\"'],
      tigrinya: ['ሓወቦን','ኣነን','ሃዲምና','ሮጽ','ድሙ','ሰዓበና','ሓዲሙ','ብጸቢብ','ሃዲምና','ነገርክዎ','ሓወቦ','\"የቐንየለይ','ብዛዕባ','ምስ ምቕባል','ግን','ኣነ','ይምለስ','ናብ ገዛ','ይሓሹ','ምብላዕ','ጓይላ','ብሰላም','ካብ','ምብላዕ ብሃጓፍ','ኬክ','ብፍርሒ\"'],
      translit: ['ሃዶድ','ቫኣኒ','ሚሃርኑ','ላሩጽ','ቬሃሃቱል','ራዳፍ','ኣሃሬኑ','ቤቆሺ','ኒምላጥኑ','ኣማርቲ','ላዶድ','ቶዳ','ዓል','ሃኤሩሃ','ኣቫል','ኣኒ','ሆዜር','ሃባይታ','ዓዲፍ','ሌኤኮል','ሸዑዒት','ቤሸቀት','ሜኣሸር','ሊዝሎልዕ','ዑጎት','ቤፋሃድ'],
      fullTigrinya: 'ሓወቦን ኣነን ሃዲምና ሮጽና፡ ድሙ ድማ ሰዓበና። ብጸቢብ ሃዲምና። ንሓወቦ "ምስ ምቕባልካ የቐንየለካ፡ ግን ኣነ ናብ ገዛ ክምለስ እየ። ብፍርሒ ኬክ ምብላዕ ካብ ብሰላም ጓይላ ምብላዕ ይሓሽ" በልክዎ።',
      emoji: '🏃🐱🏠'
    }
  ]
}
];

// Get all words as flat array
function getAllWords() {
  const all = [];
  Object.values(WORDS).forEach(cat => {
    cat.words.forEach(w => all.push(w));
  });
  return all;
}

// Render emoji or image
function renderEmoji(emoji, size = '3rem') {
  if (emoji.startsWith('img:')) {
    const src = emoji.slice(4);
    return `<img src="${src}" alt="" style="width:${size};height:${size};vertical-align:middle;display:inline-block;">`;
  }
  return emoji;
}

// Get a unique ID for an emoji (for comparison in games)
function emojiId(emoji) {
  return emoji;
}

// Shuffle array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
