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
const NIKUD = [
  { symbol: 'בַ', nikud: 'פַּתָח', sound: 'a', tigrinya: 'ኣ', name: 'פַּתָח - פתוח' },
  { symbol: 'בָ', nikud: 'קָמָץ', sound: 'a', tigrinya: 'ኣ', name: 'קָמָץ - סגור' },
  { symbol: 'בִ', nikud: 'חִירִיק', sound: 'i', tigrinya: 'ኢ', name: 'חִירִיק - נקודה' },
  { symbol: 'בֵ', nikud: 'צֵירֵי', sound: 'e', tigrinya: 'ኤ', name: 'צֵירֵי - שתי נקודות' },
  { symbol: 'בֶ', nikud: 'סֶגוֹל', sound: 'e', tigrinya: 'ኤ', name: 'סֶגוֹל - שלוש נקודות' },
  { symbol: 'בֹ', nikud: 'חוֹלָם', sound: 'o', tigrinya: 'ኦ', name: 'חוֹלָם - נקודה למעלה' },
  { symbol: 'בוּ', nikud: 'שׁוּרוּק', sound: 'u', tigrinya: 'ኡ', name: 'שׁוּרוּק - נקודה בוו' },
  { symbol: 'בֻ', nikud: 'קֻבּוּץ', sound: 'u', tigrinya: 'ኡ', name: 'קֻבּוּץ - שלוש נקודות' },
  { symbol: 'בְ', nikud: 'שְׁוָא', sound: 'e קצר / שקט', tigrinya: 'ኧ / ስቕ', name: 'שְׁוָא - שתי נקודות אנכיות' },
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
        hebrew: 'הַשֵּׁם שֶׁלּוֹ דָּנִי.',
        words: ['הַשֵּׁם', 'שֶׁלּוֹ', 'דָּנִי.'],
        tigrinya: ['ሽሙ', '(ናቱ)', 'ዳኒ.'],
        translit: ['ሃሼም', 'ሸሎ', 'ዳኒ.'],
        fullTigrinya: 'ሽሙ ዳኒ እዩ.',
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
        hebrew: 'דָּנִי אוֹהֵב לֶאֱכֹל.',
        words: ['דָּנִי', 'אוֹהֵב', 'לֶאֱכֹל.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምብላዕ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ለኤኮል.'],
        fullTigrinya: 'ዳኒ ምብላዕ ይፈቱ.',
        emoji: '🐕🍖'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לִישֹׁן.',
        words: ['דָּנִי', 'אוֹהֵב', 'לִישֹׁן.'],
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
    ]
  },
  {
    title: 'סָבְתָא מְבַשֶּׁלֶת',
    titleTigrinya: 'እማ ሓጎ ትኸብስ',
    titleTranslit: 'ሳቭታ ምባሸለት',
    cover: '👵🍳',
    pages: [
      {
        hebrew: 'הַיּוֹם יוֹם שִׁשִּׁי.',
        words: ['הַיּוֹם', 'יוֹם', 'שִׁשִּׁי.'],
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
        hebrew: 'סָבְתָא הוֹלֶכֶת לַמִּטְבָּח.',
        words: ['סָבְתָא', 'הוֹלֶכֶת', 'לַמִּטְבָּח.'],
        tigrinya: ['እማ ሓጎ', 'ትኸይድ', 'ናብ ክሽነ.'],
        translit: ['ሳቭታ', 'ሆለከት', 'ላሚጥባሕ.'],
        fullTigrinya: 'እማ ሓጎ ናብ ክሽነ ትኸይድ.',
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
        tigrinya: ['እማ ሓጎ', 'ኣእትያ', 'ድንሽ.', ''],
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
        hebrew: 'אֵיזֶה רֵיחַ טוֹב!',
        words: ['אֵיזֶה', 'רֵיחַ', 'טוֹב!'],
        tigrinya: ['ክንደይ', 'ጽቡቕ', 'ጨና!'],
        translit: ['ኤዘ', 'ሬሓ', 'ጦቭ!'],
        fullTigrinya: 'ክንደይ ጽቡቕ ጨና!',
        emoji: '😋👃'
      },
      {
        hebrew: 'כֻּלָּם יוֹשְׁבִים לֶאֱכֹל.',
        words: ['כֻּלָּם', 'יוֹשְׁבִים', 'לֶאֱכֹל.'],
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
    ]
  },
  {
    title: 'יוֹם בַּגַּן',
    titleTigrinya: 'መዓልቲ ኣብ መዋእለ ህጻናት',
    titleTranslit: 'ዮም ባጋን',
    cover: '🏫',
    pages: [
      {
        hebrew: 'בַּבֹּקֶר אֲנִי קָם.',
        words: ['בַּבֹּקֶר', 'אֲנִי', 'קָם.'],
        tigrinya: ['ብንግሆ', 'ኣነ', 'ይትንስእ.'],
        translit: ['ባቦቀር', 'ኣኒ', 'ቃም.'],
        fullTigrinya: 'ብንግሆ ኣነ ይትንስእ.',
        emoji: '🌅🧒'
      },
      {
        hebrew: 'אֲנִי אוֹכֵל אֲרוּחַת בֹּקֶר.',
        words: ['אֲנִי', 'אוֹכֵל', 'אֲרוּחַת', 'בֹּקֶר.'],
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
        tigrinya: ['ኣብ መዋእለ ህጻናት', 'ኣሎኒ', '', 'ኣዕሩኽ.'],
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
        tigrinya: ['ድሕሪኡ', '', 'ንሕና', 'ንበልዕ.'],
        translit: ['ኣሓር', 'ካሕ', 'ኣናሕኑ', 'ኦሕሊም.'],
        fullTigrinya: 'ድሕሪኡ ንሕና ንበልዕ.',
        emoji: '🍎🥪'
      },
      {
        hebrew: 'אִמָּא בָּאָה לָקַחַת אוֹתִי.',
        words: ['אִמָּא', 'בָּאָה', 'לָקַחַת', 'אוֹתִי.'],
        tigrinya: ['ኣደ', 'መጺኣ', 'ክትወስደኒ.', ''],
        translit: ['ኢማ', 'ባኣ', 'ላቃሓት', 'ኦቲ.'],
        fullTigrinya: 'ኣደ ክትወስደኒ መጺኣ.',
        emoji: '👩🧒'
      },
      {
        hebrew: 'הָיָה יוֹם כֵּיף!',
        words: ['הָיָה', 'יוֹם', 'כֵּיף!'],
        tigrinya: ['ጽብቕቲ', 'መዓልቲ', 'ነይራ!'],
        translit: ['ሃያ', 'ዮም', 'ኬፍ!'],
        fullTigrinya: 'ጽብቕቲ መዓልቲ ነይራ!',
        emoji: '🎉😊'
      },
    ]
  },
  {
    title: 'הַחָתוּל וְהַדָּג',
    titleTigrinya: 'ድሙን ዓሳን',
    titleTranslit: 'ሃሓቱል ቨሃዳግ',
    cover: '🐱🐟',
    pages: [
      {
        hebrew: 'הַחָתוּל יוֹשֵׁב בַּבַּיִת.',
        words: ['הַחָתוּל', 'יוֹשֵׁב', 'בַּבַּיִת.'],
        tigrinya: ['እቲ ድሙ', 'ኮፍ ኢሉ', 'ኣብ ገዛ.'],
        translit: ['ሃሓቱል', 'ዮሼቭ', 'ባባይት.'],
        fullTigrinya: 'እቲ ድሙ ኣብ ገዛ ኮፍ ኢሉ.',
        emoji: '🐱🏠'
      },
      {
        hebrew: 'הַחָתוּל רוֹאֶה דָּג.',
        words: ['הַחָתוּל', 'רוֹאֶה', 'דָּג.'],
        tigrinya: ['እቲ ድሙ', 'ይርኢ', 'ዓሳ.'],
        translit: ['ሃሓቱል', 'ሮኤ', 'ዳግ.'],
        fullTigrinya: 'እቲ ድሙ ዓሳ ይርኢ.',
        emoji: '🐱👀🐟'
      },
      {
        hebrew: 'הַדָּג בְּתוֹךְ הָאַקְוַרְיוּם.',
        words: ['הַדָּג', 'בְּתוֹךְ', 'הָאַקְוַרְיוּם.'],
        tigrinya: ['እቲ ዓሳ', 'ኣብ ውሽጢ', 'ማይ መትሓዚ.'],
        translit: ['ሃዳግ', 'ብቶሕ', 'ሃኣቅቫርዩም.'],
        fullTigrinya: 'እቲ ዓሳ ኣብ ውሽጢ ማይ መትሓዚ ኣሎ.',
        emoji: '🐟💧'
      },
      {
        hebrew: 'הַחָתוּל רוֹצֶה אֶת הַדָּג.',
        words: ['הַחָתוּל', 'רוֹצֶה', 'אֶת', 'הַדָּג.'],
        tigrinya: ['እቲ ድሙ', 'ይደልዮ', '', 'ነቲ ዓሳ.'],
        translit: ['ሃሓቱል', 'ሮጸ', 'ኤት', 'ሃዳግ.'],
        fullTigrinya: 'እቲ ድሙ ነቲ ዓሳ ይደልዮ.',
        emoji: '🐱😍🐟'
      },
      {
        hebrew: 'הַחָתוּל קוֹפֵץ!',
        words: ['הַחָתוּל', 'קוֹפֵץ!'],
        tigrinya: ['እቲ ድሙ', 'ይዘልል!'],
        translit: ['ሃሓቱል', 'ቆፌጽ!'],
        fullTigrinya: 'እቲ ድሙ ይዘልል!',
        emoji: '🐱💥'
      },
      {
        hebrew: 'אוֹי! הַמַּיִם נָפְלוּ!',
        words: ['אוֹי!', 'הַמַּיִם', 'נָפְלוּ!'],
        tigrinya: ['ኣጆኻ!', 'እቲ ማይ', 'ፈሲሱ!'],
        translit: ['ኦይ!', 'ሃማይም', 'ናፍሉ!'],
        fullTigrinya: 'ኣጆኻ! እቲ ማይ ፈሲሱ!',
        emoji: '💦😱'
      },
      {
        hebrew: 'הַחָתוּל רָטֹב.',
        words: ['הַחָתוּל', 'רָטֹב.'],
        tigrinya: ['እቲ ድሙ', 'ጠልቂዩ.'],
        translit: ['ሃሓቱል', 'ራጦቭ.'],
        fullTigrinya: 'እቲ ድሙ ጠልቂዩ.',
        emoji: '🐱💦'
      },
      {
        hebrew: 'הַדָּג בַּמַּיִם עַל הָרִצְפָּה.',
        words: ['הַדָּג', 'בַּמַּיִם', 'עַל', 'הָרִצְפָּה.'],
        tigrinya: ['እቲ ዓሳ', 'ኣብ ማይ', 'ኣብ', 'ባይታ.'],
        translit: ['ሃዳግ', 'ባማይም', 'ዓል', 'ሃሪጽፓ.'],
        fullTigrinya: 'እቲ ዓሳ ኣብ ማይ ኣብ ባይታ ኣሎ.',
        emoji: '🐟💦'
      },
      {
        hebrew: 'אִמָּא שָׂמָה אֶת הַדָּג בַּמַּיִם.',
        words: ['אִמָּא', 'שָׂמָה', 'אֶת', 'הַדָּג', 'בַּמַּיִם.'],
        tigrinya: ['ኣደ', 'ኣእትያቶ', 'ነቲ', 'ዓሳ', 'ኣብ ማይ.'],
        translit: ['ኢማ', 'ሳማ', 'ኤት', 'ሃዳግ', 'ባማይም.'],
        fullTigrinya: 'ኣደ ነቲ ዓሳ ኣብ ማይ ኣእትያቶ.',
        emoji: '👩🐟💧'
      },
      {
        hebrew: 'הַחָתוּל מִסְתַּכֵּל מֵרָחוֹק.',
        words: ['הַחָתוּל', 'מִסְתַּכֵּל', 'מֵרָחוֹק.'],
        tigrinya: ['እቲ ድሙ', 'ይጥምት', 'ካብ ርሑቕ.'],
        translit: ['ሃሓቱል', 'ሚስታኬል', 'ሜራሖቅ.'],
        fullTigrinya: 'እቲ ድሙ ካብ ርሑቕ ይጥምት.',
        emoji: '🐱👀    🐟'
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
        hebrew: 'אַבָּא אוֹמֵר: נֵלֵךְ לַפַּארְק!',
        words: ['אַבָּא', 'אוֹמֵר:', 'נֵלֵךְ', 'לַפַּארְק!'],
        tigrinya: ['ኣቦ', 'ይብል:', 'ንኺድ', 'ናብ ፓርክ!'],
        translit: ['ኣባ', 'ኦሜር:', 'ኔሌሕ', 'ላፓርቅ!'],
        fullTigrinya: 'ኣቦ ይብል: ናብ ፓርክ ንኺድ!',
        emoji: '👨🗣️'
      },
      {
        hebrew: 'אֲנִי רָץ לַנַּדְנֵדָה.',
        words: ['אֲנִי', 'רָץ', 'לַנַּדְנֵדָה.'],
        tigrinya: ['ኣነ', 'ይጎይ', 'ናብ ዡንግላ.'],
        translit: ['ኣኒ', 'ራጽ', 'ላናድኔዳ.'],
        fullTigrinya: 'ኣነ ናብ ዡንግላ ይጎይ.',
        emoji: '🏃🛝'
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
        hebrew: 'אַבָּא דוֹחֵף אוֹתִי בַּנַּדְנֵדָה.',
        words: ['אַבָּא', 'דוֹחֵף', 'אוֹתִי', 'בַּנַּדְנֵדָה.'],
        tigrinya: ['ኣቦ', 'ይደፍኣኒ', '(ንዓይ)', 'ኣብ ዡንግላ.'],
        translit: ['ኣባ', 'ዶሔፍ', 'ኦቲ', 'ባናድኔዳ.'],
        fullTigrinya: 'ኣቦ ኣብ ዡንግላ ይደፍኣኒ.',
        emoji: '👨🧒🪁'
      },
      {
        hebrew: 'גָּבוֹהַּ! גָּבוֹהַּ!',
        words: ['גָּבוֹהַּ!', 'גָּבוֹהַּ!'],
        tigrinya: ['ላዕሊ!', 'ላዕሊ!'],
        translit: ['ጋቦሃ!', 'ጋቦሃ!'],
        fullTigrinya: 'ላዕሊ! ላዕሊ!',
        emoji: '🧒⬆️⬆️'
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
        hebrew: 'אֲנִי אוֹהֵב שַׁבָּת!',
        words: ['אֲנִי', 'אוֹהֵב', 'שַׁבָּת!'],
        tigrinya: ['ኣነ', 'ይፈትዋ', 'ንሰንበት!'],
        translit: ['ኣኒ', 'ኦሄቭ', 'ሻባት!'],
        fullTigrinya: 'ኣነ ንሰንበት ይፈትዋ!',
        emoji: '🧒❤️☀️'
      },
    ]
  },
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
