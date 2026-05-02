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
