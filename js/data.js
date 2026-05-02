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
      hebrew: 'בְּחַוּוָה קְטַנָּה, אִמָּא בַּרְווָזָה יָשְׁבָה בַּקֵּן עַל הַבֵּיצִים שֶׁלָּהּ. לְבַסּוֹף הַבֵּיצִים הֵחֵלּוּ לְהִסָּדֵק. בְּזֶה אַחַר זֶה יָצְאוּ בַּרְווָזוֹנִים צְהוּבִּים מִתּוֹךְ קְלִיפּוֹתֵיהֶם. אֲבָל בֵּיצָה אַחַת גְּדוֹלָה עֲדַיִן הָיְתָה בַּקֵּן, וּמִמֶּנָּה יָצָא אֶפְרוֹחַ אָפוֹר כָּהֶה, גָּדוֹל וּמוּזָר לְמַרְאֶה.',
      words: ['בְּחַוּוָה','קְטַנָּה,','אִמָּא','בַּרְווָזָה','יָשְׁבָה','בַּקֵּן','עַל','הַבֵּיצִים','שֶׁלָּהּ.','לְבַסּוֹף','הַבֵּיצִים','הֵחֵלּוּ','לְהִסָּדֵק.','בְּזֶה','אַחַר','זֶה','יָצְאוּ','בַּרְווָזוֹנִים','צְהוּבִּים','מִתּוֹךְ','קְלִיפּוֹתֵיהֶם.','אֲבָל','בֵּיצָה','אַחַת','גְּדוֹלָה','עֲדַיִן','הָיְתָה','בַּקֵּן,','וּמִמֶּנָּה','יָצָא','אֶפְרוֹחַ','אָפוֹר','כָּהֶה,','גָּדוֹל','וּמוּזָר','לְמַרְאֶה.'],
      tigrinya: ['ኣብ','ሕርሻ','ኣደ','ዳኪዬ','ተቐሚጣ','ኣብ ኵዕሶ','ኣብ','እንቋቑሖ','ናታ།','ኣብ መወዳእታ','እንቋቑሖ','ጀሚሩ','ምፍሓቕ።','ሓደ','ድሕሪ','ሓደ','ወጺኦም','ሕጻናት','ጫሃ','ካብ','ዕፅዎኦም።','ግን','እንቋቑሖ','ዓቢ','ሓደ','ኣብ ኵዕሶ','ኔሩ,','ካብኡ','ወጸ','ጫጩት','ጸሊም','ጓጉዲ,','ዓቢ','ዕሉልን','ዝዀነ.','ናይ ምርኣይ.'],
      translit: ['ቤሓቫ','ቀጣና,','ኢማ','ባርቫዛ','ያሽቫ','ባቀን','ዓል','ሃቤጺም','ሸላ།','ለቫሶፍ','ሃቤጺም','ሔሔሉ','ለሂሳዴቅ།','ቤዜ','ኣሓር','ዜ','ያጽኡ','ባርቫዞኒም','ጸሁቢም','ሚቶኽ','ቀሊፖቴሄም།','ኣቫል','ቤጻ','ኣሓት','ዓዳይን','ሃይታ','ባቀን,','ኡሚሜና','ያጻ','ኤፍሮሓ','ኣፎር','ካሔ,','ጋዶል','ኡሙዛር','ዝዀነ.','ለማርኤ།'],
      fullTigrinya: 'ኣብ ሓንቲ ንእሽቶ ሕርሻ፣ ኣደ ዳኪዬ ኣብ ኵዕሶኣ ዋሒጣ ኣብ እንቋቑሖ ኮፍ ኢላ ነበረት። ኣብ መወዳእታ እንቋቑሖ ጀሚሩ ክፍሓቕ። ሓደ ድሕሪ ሓደ ሕጻናት ዳኪዬ ጫሃ ካብ ዕፅዎኦም ወጸ። ግን ሓደ ዓቢ እንቋቑሖ ገና ኣብ ኵዕሶ ኔሩ፣ ካብኡ ወጸ ሓደ ዓቢ ጫጩት ጸሊም ጓጉዲ፣ ዕሉልን ዝዀነ።',
      emoji: '🥚🦆'
    },
    {
      hebrew: 'אֶחָד הַבַּרְווָזוֹנִים הַצְּהוּבִּים אָמַר: \"מַעוֹלָם לֹא רָאִיתִי בַּרְווָזוֹן מְכוֹעָר כָּזֶה!\" כָּל הַבַּרְווָזוֹנִים הָאֲחֵרִים צָחֲקוּ: \"מְכוֹעָר! מְכוֹעָר!\" הַבַּרְווָזוֹן הַמְּכוֹעָר לֹא יָדַע לָמָּה הֵם צוֹעֲקִים עָלָיו. כְּשֶׁיָּצְאוּ מֵהַמַּיִם וְהִתְחִילוּ לִשְׂחֵק, הֵם צָעֲקוּ: \"לֵךְ מִפֹּה! לֹא רוֹצִים לִשְׂחֵק אִתְּךָ! אַתָּה מְכוֹעָר.\"',
      words: ['אֶחָד','הַבַּרְווָזוֹנִים','הַצְּהוּבִּים','אָמַר:','\"מַעוֹלָם','לֹא','רָאִיתִי','בַּרְווָזוֹן','מְכוֹעָר','כָּזֶה!\"','כָּל','הַבַּרְווָזוֹנִים','הָאֲחֵרִים','צָחֲקוּ:','\"מְכוֹעָר!','מְכוֹעָר!\"','הַבַּרְווָזוֹן','הַמְּכוֹעָר','לֹא','יָדַע','לָמָּה','הֵם','צוֹעֲקִים','עָלָיו.','כְּשֶׁיָּצְאוּ','מֵהַמַּיִם','וְהִתְחִילוּ','לִשְׂחֵק,','הֵם','צָעֲקוּ:','\"לֵךְ','מִפֹּה!','לֹא','רוֹצִים','לִשְׂחֵק','אִתְּךָ!','אַתָּה','מְכוֹעָר.\"'],
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
      hebrew: 'פַּעַם אַחַת שָׁכַב אַרְיֵה גָּדוֹל וְחָזָק בַּיַּעַר וְנָם בְּשֶׁקֶט. עַכְבָּר קָטָן רָץ וְנָגַע בְּאַפּוֹ שֶׁל הָאַרְיֵה.',
      words: ['פַּעַם','אַחַת','שָׁכַב','אַרְיֵה','גָּדוֹל','וְחָזָק','בַּיַּעַר','וְנָם','בְּשֶׁקֶט.','עַכְבָּר','קָטָן','רָץ','וְנָגַע','בְּאַפּוֹ','שֶׁל','הָאַרְיֵה.'],
      tigrinya: ['ሓደ','ግዜ','ደቀሰ','ኣንበሳ','ዓቢ','ሓያልን','ኣብ ዱር','ደቂሱ','ብሰላም።','ኣይጢ','ንእሽቶ','ጎየየ','ዳህሰሰ','ኣፍንጫ','ናይ','ኣንበሳ።'],
      translit: ['ፓዓም','ኣሓት','ሻካቭ','ኣርዬ','ጋዶል','ቨሓዛቅ','ባያዓር','ቨናም','ቤሸቀት።','ዓኽባር','ቃጣን','ራጽ','ቨናጋዓ','ቤኣፖ','ሸል','ሃኣርዬ።'],
      fullTigrinya: 'ሓደ ግዜ ሓደ ዓቢ ሓያል ኣንበሳ ኣብ ዱር ደቂሱ ነበረ። ሓንቲ ንእሽቶ ኣይጢ ጎዩ ኣፍንጫ ናይ ኣንበሳ ዳህሰሰ።',
      emoji: '🦁😴🌳'
    },
    {
      hebrew: 'הָאַרְיֵה הִתְעוֹרֵר וְתָפַס אֶת הָעַכְבָּר בְּכַפּוֹ. "אֲנִי אֹכַל אוֹתְךָ!" שָׁאַג הָאַרְיֵה. הָעַכְבָּר פָּחַד מְאוֹד.',
      words: ['הָאַרְיֵה','הִתְעוֹרֵר','וְתָפַס','אֶת','הָעַכְבָּר','בְּכַפּוֹ.','אֲנִי','אֹכַל','אוֹתְךָ!','שָׁאַג','הָאַרְיֵה.','הָעַכְבָּר','פָּחַד','מְאוֹד.'],
      tigrinya: ['ኣንበሳ','ተበራበረ','ሒዘ','ነቲ','ኣይጢ','ኣብ ኢዱ።','ኣነ','ክበልዓካ','እየ!','ኣውጀ','ኣንበሳ።','ኣይጢ','ፈርሔ','ኩርሱ።'],
      translit: ['ሃኣርዬ','ሂትዓዮረር','ቨታፋስ','ኤት','ሃዓኽባር','ቤካፖ።','ኣኒ','ኦካል','ኦትኻ!','ሻኣግ','ሃኣርዬ።','ሃዓኽባር','ፓሓድ','መኦድ።'],
      fullTigrinya: 'ኣንበሳ ተበራቢሩ ኣይጢ ኣብ ኢዱ ሒዙ። "ኣነ ክበልዓካ እየ!" ኣውጀ ኣንበሳ። ኣይጢ ኣዝዩ ፈርሔ።',
      emoji: '🦁😡🐭😱'
    },
    {
      hebrew: 'הָעַכְבָּר אָמַר: "בַּקָּשָׁה, שַׁחְרֵר אוֹתִי! יוֹם אֶחָד אֶעֱזוֹר לְךָ." הָאַרְיֵה צָחַק: "אֵיךְ עַכְבָּר קָטָן כָּמוֹךָ יַעֲזוֹר לְמֶלֶךְ הַיַּעַר?" אֲבָל שִׁחְרֵר אֶת הָעַכְבָּר הַקָּטָן.',
      words: ['הָעַכְבָּר','אָמַר:','בַּקָּשָׁה,','שַׁחְרֵר','אוֹתִי!','יוֹם','אֶחָד','אֶעֱזוֹר','לְךָ.','הָאַרְיֵה','צָחַק:','\"אֵיךְ','עַכְבָּר','קָטָן','כָּמוֹךָ','יַעֲזוֹר','לְמֶלֶךְ','הַיַּעַר?\"','אֲבָל','שִׁחְרֵר','אֶת','הָעַכְבָּר','הַקָּטָן.'],
      tigrinya: ['ኣይጢ','በለ:','በጃኻ,','ፈትሓኒ','ሕጂ!','ሓደ','መዓልቲ','ክሕግዘካ','እየ።','ኣንበሳ','ሰሓቐ:','\"ከመይ','ኣይጢ','ንእሽቶ','ከምኻ','ክሕግዝ','ንጉሥ','ናይ ዱር?\"','ግና','ፈትሐ','ነቲ','ኣይጢ','ንእሽቶ།'],
      translit: ['ሃዓኽባር','ኣማር:','ባቃሻ,','ሻሕሬር','ኦቲ!','ዮም','ኤሓድ','ኤዓዞር','ለኻ።','ሃኣርዬ','ጻሓቅ:','\"ኤኽ','ዓኽባር','ቃጣን','ካሞኻ','ያዓዞር','ለሜለኽ','ሃያዓር?\"','ኣቫል','ሺሕሬር','ኤት','ሃዓኽባር','ሃቃጣን።'],
      fullTigrinya: 'ኣይጢ በለ: "በጃኻ ፈትሓኒ! ሓደ መዓልቲ ክሕግዘካ እየ።" ኣንበሳ ሰሓቐ: "ከመይ ንእሽቶ ኣይጢ ከምኻ ንንጉሥ ዱር ክሕግዞ ይኽእል?" ግና ነቲ ንእሽቶ ኣይጢ ፈትሐ።',
      emoji: '🐭🙏🦁😄'
    },
    {
      hebrew: 'יָמִים עָבְרוּ. הָאַרְיֵה הָלַךְ בַּיַּעַר וְנִתְקַע בְּרֶשֶׁת שֶׁל צַיָּד. הוּא שָׁאַג וְשָׁאַג אֲבָל לֹא יָכַל לָצֵאת.',
      words: ['יָמִים','עָבְרוּ.','הָאַרְיֵה','הָלַךְ','בַּיַּעַר','וְנִתְקַע','בְּרֶשֶׁת','שֶׁל','צַיָּד.','הוּא','שָׁאַג','וְשָׁאַג','אֲבָל','לֹא','יָכַל','לָצֵאת.'],
      tigrinya: ['መዓልታት','ሓለፋ።','ኣንበሳ','ከደ','ኣብ ዱር','ተሓጽረ','ኣብ መፋሪዕ','ናይ','ሃዳናይ።','ንሱ','ኣውጀ','ኣውጀ','ግና','ኣይከኣለን','ምውጻእ','.'],
      translit: ['ያሚም','ዓቭሩ።','ሃኣርዬ','ሃላኽ','ባያዓር','ቨኒትቃዓ','ቤረሸት','ሸል','ጻያድ።','ሁ','ሻኣግ','ቨሻኣግ','ኣቫል','ሎ','ያኾል','ላጼት።'],
      fullTigrinya: 'መዓልታት ሓለፋ። ኣንበሳ ኣብ ዱር እናኸደ ኣብ መፋሪዕ ናይ ሃዳናይ ተሓጽረ። ኣውጀ ኣውጀ ግና ክወጽእ ኣይከኣለን።',
      emoji: '🦁🕸️😰'
    },
    {
      hebrew: 'הָעַכְבָּר הַקָּטָן שָׁמַע אֶת שַׁאֲגוֹת הָאַרְיֵה. הוּא רָץ מַהֵר וְכָרְסֵם אֶת הָרֶשֶׁת עַד שֶׁהָאַרְיֵה יָצָא לַחׇפְשִׁי. "תּוֹדָה, חֲבֵרִי!" אָמַר הָאַרְיֵה.',
      words: ['הָעַכְבָּר','הַקָּטָן','שָׁמַע','אֶת','שַׁאֲגוֹת','הָאַרְיֵה.','הוּא','רָץ','מַהֵר','וְכָרְסֵם','אֶת','הָרֶשֶׁת','עַד','שֶׁהָאַרְיֵה','יָצָא','לַחׇפְשִׁי.','תּוֹדָה,','חֲבֵרִי!','אָמַר','הָאַרְיֵה.'],
      tigrinya: ['ኣይጢ','ንእሽቶ','ሰምዐ','ነቲ','ጣዕዋ','ናይ ኣንበሳ።','ንሱ','ጎየየ','ቅልጡፍ','ነኸዐ','ነቲ','መፋሪዕ','ክሳዕ','ኣንበሳ','ወጸ','ናጻ።','የቐንየለይ,','ዓርከይ!','በለ','ኣንበሳ።'],
      translit: ['ሃዓኽባር','ሃቃጣን','ሻማዓ','ኤት','ሻኣጎት','ሃኣርዬ።','ሁ','ራጽ','ማሄር','ቨኻርሴም','ኤት','ሃሬሸት','ዓድ','ሸሃኣርዬ','ያጻ','ሖፍሺ።','ቶዳ,','ሓቬሪ!','ኣማር','ሃኣርዬ።'],
      fullTigrinya: 'ኣይጢ ንእሽቶ ጣዕዋ ናይ ኣንበሳ ሰምዐ። ቅልጡፍ ጎዩ ነቲ መፋሪዕ ብስኒ ነኸዐ ክሳዕ ኣንበሳ ናጻ ወጸ። "የቐንየለይ፣ ዓርከይ!" በለ ኣንበሳ።',
      emoji: '🐭✂️🦁🎉'
    },
    {
      type: 'write',
      prompt: 'סַפְּרוּ עַל פַּעַם שֶׁמִּישֶׁהוּ עָזַר לָכֶם בְּצוּרָה שֶׁלֹּא צִפִּיתֶם – אוֹ שֶׁאַתֶּם עֲזַרְתֶּם לְמִישֶׁהוּ שֶׁנִּרְאָה חָזָק יוֹתֵר מִכֶּם.'
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
