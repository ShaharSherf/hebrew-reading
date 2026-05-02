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
