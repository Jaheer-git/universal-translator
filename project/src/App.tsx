import React, { useState, useEffect, useRef } from 'react';
import { 
  Languages, 
  Copy, 
  Volume2, 
  RotateCcw, 
  ArrowRightLeft, 
  Globe,
  Mic,
  Check,
  Loader2,
  Upload,
  Wifi,
  WifiOff,
  Star
} from 'lucide-react';

// Enhanced mock translation data with Indian and regional languages (for offline mode)
const mockTranslations: { [key: string]: { [key: string]: string } } = {
  'en-es': {
    'hello': 'hola',
    'goodbye': 'adiós',
    'thank you': 'gracias',
    'please': 'por favor',
    'how are you': 'cómo estás',
    'good morning': 'buenos días',
    'good night': 'buenas noches',
    'welcome': 'bienvenido',
    'friend': 'amigo',
    'family': 'familia',
    'love': 'amor',
    'peace': 'paz',
    'hope': 'esperanza',
    'future': 'futuro',
    'dream': 'sueño',
    'water': 'agua',
    'food': 'comida',
    'house': 'casa',
    'school': 'escuela',
    'work': 'trabajo'
  },
  'en-hi': {
    'hello': 'नमस्ते',
    'goodbye': 'अलविदा',
    'thank you': 'धन्यवाद',
    'please': 'कृपया',
    'how are you': 'आप कैसे हैं',
    'good morning': 'सुप्रभात',
    'good night': 'शुभ रात्रि',
    'welcome': 'स्वागत',
    'friend': 'मित्र',
    'family': 'परिवार',
    'love': 'प्रेम',
    'peace': 'शांति',
    'hope': 'आशा',
    'future': 'भविष्य',
    'dream': 'सपना',
    'water': 'पानी',
    'food': 'भोजन',
    'house': 'घर',
    'school': 'स्कूल',
    'work': 'काम',
    'mother': 'माता',
    'father': 'पिता',
    'brother': 'भाई',
    'sister': 'बहन'
  },
  'en-te': {
    'hello': 'హలో',
    'goodbye': 'వీడ్కోలు',
    'thank you': 'ధన్యవాదాలు',
    'please': 'దయచేసి',
    'how are you': 'మీరు ఎలా ఉన్నారు',
    'good morning': 'శుభోదయం',
    'good night': 'శుభ రాత్రి',
    'welcome': 'స్వాగతం',
    'friend': 'స్నేహితుడు',
    'family': 'కుటుంబం',
    'love': 'ప్రేమ',
    'peace': 'శాంతి',
    'hope': 'ఆశ',
    'future': 'భవిష్యత్తు',
    'dream': 'కల',
    'water': 'నీరు',
    'food': 'ఆహారం',
    'house': 'ఇల్లు',
    'school': 'పాఠశాల',
    'work': 'పని',
    'mother': 'అమ్మ',
    'father': 'నాన్న',
    'brother': 'అన్న',
    'sister': 'అక్క'
  },
  'en-ta': {
    'hello': 'வணக்கம்',
    'goodbye': 'பிரியாவிடை',
    'thank you': 'நன்றி',
    'please': 'தயவுசெய்து',
    'how are you': 'நீங்கள் எப்படி இருக்கிறீர்கள்',
    'good morning': 'காலை வணக்கம்',
    'good night': 'இனிய இரவு',
    'welcome': 'வரவேற்கிறோம்',
    'friend': 'நண்பர்',
    'family': 'குடும்பம்',
    'love': 'அன்பு',
    'peace': 'அமைதி',
    'hope': 'நம்பிக்கை',
    'future': 'எதிர்காலம்',
    'dream': 'கனவு',
    'water': 'தண்ணீர்',
    'food': 'உணவு',
    'house': 'வீடு',
    'school': 'பள்ளி',
    'work': 'வேலை'
  },
  'en-bn': {
    'hello': 'হ্যালো',
    'goodbye': 'বিদায়',
    'thank you': 'ধন্যবাদ',
    'please': 'দয়া করে',
    'how are you': 'আপনি কেমন আছেন',
    'good morning': 'সুপ্রভাত',
    'good night': 'শুভ রাত্রি',
    'welcome': 'স্বাগতম',
    'friend': 'বন্ধু',
    'family': 'পরিবার',
    'love': 'ভালোবাসা',
    'peace': 'শান্তি',
    'hope': 'আশা',
    'future': 'ভবিষ্যৎ',
    'dream': 'স্বপ্ন',
    'water': 'পানি',
    'food': 'খাবার',
    'house': 'বাড়ি',
    'school': 'স্কুল',
    'work': 'কাজ'
  },
  'en-gu': {
    'hello': 'હેલો',
    'goodbye': 'વિદાય',
    'thank you': 'આભાર',
    'please': 'કૃપા કરીને',
    'how are you': 'તમે કેમ છો',
    'good morning': 'સુપ્રભાત',
    'good night': 'શુભ રાત્રિ',
    'welcome': 'સ્વાગત',
    'friend': 'મિત્ર',
    'family': 'કુટુંબ',
    'love': 'પ્રેમ',
    'peace': 'શાંતિ',
    'hope': 'આશા',
    'future': 'ભવિષ્ય',
    'dream': 'સ્વપ્ન',
    'water': 'પાણી',
    'food': 'ખોરાક',
    'house': 'ઘર',
    'school': 'શાળા',
    'work': 'કામ'
  },
  'en-kn': {
    'hello': 'ಹಲೋ',
    'goodbye': 'ವಿದಾಯ',
    'thank you': 'ಧನ್ಯವಾದ',
    'please': 'ದಯವಿಟ್ಟು',
    'how are you': 'ನೀವು ಹೇಗಿದ್ದೀರಿ',
    'good morning': 'ಶುಭೋದಯ',
    'good night': 'ಶುಭ ರಾತ್ರಿ',
    'welcome': 'ಸ್ವಾಗತ',
    'friend': 'ಸ್ನೇಹಿತ',
    'family': 'ಕುಟುಂಬ',
    'love': 'ಪ್ರೀತಿ',
    'peace': 'ಶಾಂತಿ',
    'hope': 'ಭರವಸೆ',
    'future': 'ಭವಿಷ್ಯ',
    'dream': 'ಕನಸು',
    'water': 'ನೀರು',
    'food': 'ಆಹಾರ',
    'house': 'ಮನೆ',
    'school': 'ಶಾಲೆ',
    'work': 'ಕೆಲಸ'
  },
  'en-ml': {
    'hello': 'ഹലോ',
    'goodbye': 'വിടവാങ്ങൽ',
    'thank you': 'നന്ദി',
    'please': 'ദയവായി',
    'how are you': 'നിങ്ങൾ എങ്ങനെയുണ്ട്',
    'good morning': 'സുപ്രഭാതം',
    'good night': 'ശുഭ രാത്രി',
    'welcome': 'സ്വാഗതം',
    'friend': 'സുഹൃത്ത്',
    'family': 'കുടുംബം',
    'love': 'സ്നേഹം',
    'peace': 'സമാധാനം',
    'hope': 'പ്രതീക്ഷ',
    'future': 'ഭാവി',
    'dream': 'സ്വപ്നം',
    'water': 'വെള്ളം',
    'food': 'ഭക്ഷണം',
    'house': 'വീട്',
    'school': 'സ്കൂൾ',
    'work': 'ജോലി'
  },
  'en-mr': {
    'hello': 'हॅलो',
    'goodbye': 'निरोप',
    'thank you': 'धन्यवाद',
    'please': 'कृपया',
    'how are you': 'तुम्ही कसे आहात',
    'good morning': 'सुप्रभात',
    'good night': 'शुभ रात्री',
    'welcome': 'स्वागत',
    'friend': 'मित्र',
    'family': 'कुटुंब',
    'love': 'प्रेम',
    'peace': 'शांती',
    'hope': 'आशा',
    'future': 'भविष्य',
    'dream': 'स्वप्न',
    'water': 'पाणी',
    'food': 'अन्न',
    'house': 'घर',
    'school': 'शाळा',
    'work': 'काम'
  },
  'en-pa': {
    'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    'goodbye': 'ਅਲਵਿਦਾ',
    'thank you': 'ਧੰਨਵਾਦ',
    'please': 'ਕਿਰਪਾ ਕਰਕੇ',
    'how are you': 'ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ',
    'good morning': 'ਸ਼ੁਭ ਸਵੇਰ',
    'good night': 'ਸ਼ੁਭ ਰਾਤ',
    'welcome': 'ਸਵਾਗਤ',
    'friend': 'ਦੋਸਤ',
    'family': 'ਪਰਿਵਾਰ',
    'love': 'ਪਿਆਰ',
    'peace': 'ਸ਼ਾਂਤੀ',
    'hope': 'ਉਮੀਦ',
    'future': 'ਭਵਿੱਖ',
    'dream': 'ਸੁਪਨਾ',
    'water': 'ਪਾਣੀ',
    'food': 'ਖਾਣਾ',
    'house': 'ਘਰ',
    'school': 'ਸਕੂਲ',
    'work': 'ਕੰਮ'
  },
  'en-ur': {
    'hello': 'ہیلو',
    'goodbye': 'الوداع',
    'thank you': 'شکریہ',
    'please': 'براہ کرم',
    'how are you': 'آپ کیسے ہیں',
    'good morning': 'صبح بخیر',
    'good night': 'شب بخیر',
    'welcome': 'خوش آمدید',
    'friend': 'دوست',
    'family': 'خاندان',
    'love': 'محبت',
    'peace': 'امن',
    'hope': 'امید',
    'future': 'مستقبل',
    'dream': 'خواب',
    'water': 'پانی',
    'food': 'کھانا',
    'house': 'گھر',
    'school': 'سکول',
    'work': 'کام'
  },
  'en-fr': {
    'hello': 'bonjour',
    'goodbye': 'au revoir',
    'thank you': 'merci',
    'please': 's\'il vous plaît',
    'how are you': 'comment allez-vous',
    'good morning': 'bonjour',
    'good night': 'bonne nuit',
    'welcome': 'bienvenue',
    'friend': 'ami',
    'family': 'famille',
    'love': 'amour',
    'peace': 'paix',
    'hope': 'espoir',
    'future': 'avenir',
    'dream': 'rêve',
    'water': 'eau',
    'food': 'nourriture',
    'house': 'maison',
    'school': 'école',
    'work': 'travail'
  },
  'en-de': {
    'hello': 'hallo',
    'goodbye': 'auf wiedersehen',
    'thank you': 'danke',
    'please': 'bitte',
    'how are you': 'wie geht es dir',
    'good morning': 'guten morgen',
    'good night': 'gute nacht',
    'welcome': 'willkommen',
    'friend': 'freund',
    'family': 'familie',
    'love': 'liebe',
    'peace': 'frieden',
    'hope': 'hoffnung',
    'future': 'zukunft',
    'dream': 'traum',
    'water': 'wasser',
    'food': 'essen',
    'house': 'haus',
    'school': 'schule',
    'work': 'arbeit'
  },
  'en-ja': {
    'hello': 'こんにちは',
    'goodbye': 'さようなら',
    'thank you': 'ありがとう',
    'please': 'お願いします',
    'how are you': 'お元気ですか',
    'good morning': 'おはよう',
    'good night': 'おやすみ',
    'welcome': 'いらっしゃいませ',
    'friend': '友達',
    'family': '家族',
    'love': '愛',
    'peace': '平和',
    'hope': '希望',
    'future': '未来',
    'dream': '夢',
    'water': '水',
    'food': '食べ物',
    'house': '家',
    'school': '学校',
    'work': '仕事'
  },
  'en-ko': {
    'hello': '안녕하세요',
    'goodbye': '안녕히 가세요',
    'thank you': '감사합니다',
    'please': '부탁합니다',
    'how are you': '어떻게 지내세요',
    'good morning': '좋은 아침',
    'good night': '좋은 밤',
    'welcome': '환영합니다',
    'friend': '친구',
    'family': '가족',
    'love': '사랑',
    'peace': '평화',
    'hope': '희망',
    'future': '미래',
    'dream': '꿈',
    'water': '물',
    'food': '음식',
    'house': '집',
    'school': '학교',
    'work': '일'
  },
  'en-zh': {
    'hello': '你好',
    'goodbye': '再见',
    'thank you': '谢谢',
    'please': '请',
    'how are you': '你好吗',
    'good morning': '早上好',
    'good night': '晚安',
    'welcome': '欢迎',
    'friend': '朋友',
    'family': '家庭',
    'love': '爱',
    'peace': '和平',
    'hope': '希望',
    'future': '未来',
    'dream': '梦想',
    'water': '水',
    'food': '食物',
    'house': '房子',
    'school': '学校',
    'work': '工作'
  },
  'en-ar': {
    'hello': 'مرحبا',
    'goodbye': 'وداعا',
    'thank you': 'شكرا',
    'please': 'من فضلك',
    'how are you': 'كيف حالك',
    'good morning': 'صباح الخير',
    'good night': 'تصبح على خير',
    'welcome': 'أهلا وسهلا',
    'friend': 'صديق',
    'family': 'عائلة',
    'love': 'حب',
    'peace': 'سلام',
    'hope': 'أمل',
    'future': 'مستقبل',
    'dream': 'حلم',
    'water': 'ماء',
    'food': 'طعام',
    'house': 'بيت',
    'school': 'مدرسة',
    'work': 'عمل'
  },
  'en-ru': {
    'hello': 'привет',
    'goodbye': 'до свидания',
    'thank you': 'спасибо',
    'please': 'пожалуйста',
    'how are you': 'как дела',
    'good morning': 'доброе утро',
    'good night': 'спокойной ночи',
    'welcome': 'добро пожаловать',
    'friend': 'друг',
    'family': 'семья',
    'love': 'любовь',
    'peace': 'мир',
    'hope': 'надежда',
    'future': 'будущее',
    'dream': 'мечта',
    'water': 'вода',
    'food': 'еда',
    'house': 'дом',
    'school': 'школа',
    'work': 'работа'
  }
};

const languages = [
  { code: 'auto', name: 'Auto-detect', flag: '🌐' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'gu', name: 'Gujarati', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'da', name: 'Danish', flag: '🇩🇰' },
  { code: 'no', name: 'Norwegian', flag: '🇳🇴' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'he', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'cs', name: 'Czech', flag: '🇨🇿' },
  { code: 'hu', name: 'Hungarian', flag: '🇭🇺' },
  { code: 'ro', name: 'Romanian', flag: '🇷🇴' },
  { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
  { code: 'hr', name: 'Croatian', flag: '🇭🇷' },
  { code: 'sk', name: 'Slovak', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenian', flag: '🇸🇮' },
  { code: 'et', name: 'Estonian', flag: '🇪🇪' },
  { code: 'lv', name: 'Latvian', flag: '🇱🇻' },
  { code: 'lt', name: 'Lithuanian', flag: '🇱🇹' },
  { code: 'fi', name: 'Finnish', flag: '🇫🇮' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'mt', name: 'Maltese', flag: '🇲🇹' },
  { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
  { code: 'be', name: 'Belarusian', flag: '🇧🇾' },
  { code: 'mk', name: 'Macedonian', flag: '🇲🇰' },
  { code: 'sq', name: 'Albanian', flag: '🇦🇱' },
  { code: 'sr', name: 'Serbian', flag: '🇷🇸' },
  { code: 'bs', name: 'Bosnian', flag: '🇧🇦' },
  { code: 'me', name: 'Montenegrin', flag: '🇲🇪' },
  { code: 'is', name: 'Icelandic', flag: '🇮🇸' },
  { code: 'ga', name: 'Irish', flag: '🇮🇪' },
  { code: 'cy', name: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { code: 'eu', name: 'Basque', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
  { code: 'ca', name: 'Catalan', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
  { code: 'gl', name: 'Galician', flag: '🏴󠁥󠁳󠁧󠁡󠁿' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
  { code: 'zu', name: 'Zulu', flag: '🇿🇦' },
  { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' }
];

interface TranslationHistory {
  id: string;
  sourceText: string;
  translatedText: string;
  fromLang: string;
  toLang: string;
  timestamp: Date;
  confidence?: number;
  isOnline: boolean;
}

interface TranslationResult {
  text: string;
  confidence: number;
  detectedLanguage?: string;
}

function App() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('hi');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<TranslationHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [detectedLang, setDetectedLang] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [confidence, setConfidence] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Language detection using TextCat algorithm (simple version)
  const detectLanguage = (text: string): string => {
    const sampleText = text.toLowerCase().slice(0, 100);
    
    // Simple pattern-based detection for common languages
    if (/[अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह]/.test(sampleText)) return 'hi';
    if (/[అఆఇఈఉఊఋౠఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహ]/.test(sampleText)) return 'te';
    if (/[அஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவழளறன]/.test(sampleText)) return 'ta';
    if (/[অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ]/.test(sampleText)) return 'bn';
    if (/[અઆઇઈઉઊઋએઐઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહ]/.test(sampleText)) return 'gu';
    if (/[अआईऊएओकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह्]/.test(sampleText)) return 'mr';
    if (/[ಅಆಇಈಉಊಋಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹ]/.test(sampleText)) return 'kn';
    if (/[അആഇഈഉഊഋഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹ]/.test(sampleText)) return 'ml';
    if (/[اآبپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنوہیے]/.test(sampleText)) return 'ur';
    if (/[ਅਆਇਈਉਊਏਐਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸ਼ਸਹ]/.test(sampleText)) return 'pa';
    if (/[أابتثجحخدذرزسشصضطظعغفقكلمنهوي]/.test(sampleText)) return 'ar';
    if (/[你我他她它们的是在有一个这那么什么怎样为了但是如果因为所以虽然]/.test(sampleText)) return 'zh';
    if (/[のはでをにがとしてからまたはれるあるいてこと日本語]/.test(sampleText)) return 'ja';
    if (/[이그는을를과와에서도만의가한국어입니다]/.test(sampleText)) return 'ko';
    if (/[абвгдежзийклмнопрстуфхцчшщъыьэюя]/.test(sampleText)) return 'ru';
    if (/\b(el|la|los|las|un|una|que|de|se|y|es|en|no|te|lo|por|con|para|su|como|pero|muy|todo|hacer|tiempo|cada|donde|desde|hasta|porque|mientras)\b/.test(sampleText)) return 'es';
    if (/\b(le|de|et|à|un|il|être|et|en|avoir|que|pour|dans|ce|son|une|sur|avec|ne|se|pas|tout|mais|pouvoir|dire|leur|elle|où|ou)\b/.test(sampleText)) return 'fr';
    if (/\b(der|die|das|und|in|den|von|zu|das|mit|sich|auf|für|ist|im|dem|nicht|ein|eine|als|auch|es|an|werden|aus|er|hat|dass)\b/.test(sampleText)) return 'de';
    
    return 'en'; // Default to English
  };

  // Real translation API using MyMemory
  const translateWithAPI = async (text: string, from: string, to: string): Promise<TranslationResult> => {
    try {
      const sourceLang = from === 'auto' ? detectLanguage(text) : from;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${to}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.responseStatus === 200) {
        return {
          text: data.responseData.translatedText,
          confidence: data.responseData.match || 0.8,
          detectedLanguage: sourceLang
        };
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Translation API error:', error);
      throw error;
    }
  };

  // Fallback mock translation for offline mode
  const translateWithMock = (text: string, from: string, to: string): TranslationResult => {
    const detectedFrom = from === 'auto' ? detectLanguage(text) : from;
    const translationKey = `${detectedFrom}-${to}`;
    const translations = mockTranslations[translationKey];
    
    if (translations) {
      const lowerText = text.toLowerCase().trim();
      let result = text;
      
      // First try exact match
      if (translations[lowerText]) {
        result = translations[lowerText];
      } else {
        // Replace known words/phrases
        Object.entries(translations).forEach(([key, value]) => {
          const regex = new RegExp(`\\b${key}\\b`, 'gi');
          result = result.replace(regex, value);
        });
      }
      
      return {
        text: result,
        confidence: result !== text ? 0.7 : 0.3,
        detectedLanguage: detectedFrom
      };
    }
    
    return {
      text: `[Translation to ${languages.find(l => l.code === to)?.name}] ${text}`,
      confidence: 0.1,
      detectedLanguage: detectedFrom
    };
  };

  // Enhanced translation function with online/offline capability
  const translateText = async (text: string, from: string, to: string): Promise<TranslationResult> => {
    setIsLoading(true);
    
    try {
      if (isOnline) {
        // Try API first
        const result = await translateWithAPI(text, from, to);
        setIsLoading(false);
        return result;
      } else {
        // Use mock translation for offline
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate processing time
        const result = translateWithMock(text, from, to);
        setIsLoading(false);
        return result;
      }
    } catch (error) {
      // Fallback to mock if API fails
      console.warn('Falling back to offline translation');
      const result = translateWithMock(text, from, to);
      setIsLoading(false);
      return result;
    }
  };

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    const result = await translateText(sourceText, sourceLang, targetLang);
    setTranslatedText(result.text);
    setConfidence(result.confidence);
    
    if (result.detectedLanguage && sourceLang === 'auto') {
      setDetectedLang(result.detectedLanguage);
    }
    
    // Add to history
    const newEntry: TranslationHistory = {
      id: Date.now().toString(),
      sourceText,
      translatedText: result.text,
      fromLang: sourceLang === 'auto' ? (result.detectedLanguage || 'en') : sourceLang,
      toLang: targetLang,
      timestamp: new Date(),
      confidence: result.confidence,
      isOnline
    };
    
    setHistory(prev => [newEntry, ...prev.slice(0, 9)]);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (file.type !== 'text/plain') {
      alert('Please upload a .txt file');
      return;
    }
    
    if (file.size > 10000) { // 10KB limit
      alert('File size should be less than 10KB');
      return;
    }
    
    try {
      const content = await file.text();
      setSourceText(content);
    } catch (error) {
      alert('Error reading file');
    }
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCopy = async () => {
    if (translatedText) {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSpeak = () => {
    if (translatedText && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = targetLang;
      speechSynthesis.speak(utterance);
    }
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
    setDetectedLang(null);
    setConfidence(null);
  };

  const handleSwapLanguages = () => {
    if (sourceLang !== 'auto') {
      setSourceLang(targetLang);
      setTargetLang(sourceLang);
      setSourceText(translatedText);
      setTranslatedText(sourceText);
    }
  };

  const getLanguageName = (code: string) => {
    return languages.find(l => l.code === code)?.name || code;
  };

  const getLanguageFlag = (code: string) => {
    return languages.find(l => l.code === code)?.flag || '🌐';
  };

  const getConfidenceColor = (conf: number) => {
    if (conf >= 0.8) return 'text-green-600';
    if (conf >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const renderConfidenceStars = (conf: number) => {
    const stars = Math.round(conf * 5);
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Auto-translate on text change (debounced)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sourceText.trim()) {
        handleTranslate();
      } else {
        setTranslatedText('');
        setConfidence(null);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [sourceText, sourceLang, targetLang]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Universal Translator</h1>
                <p className="text-sm text-gray-600">Breaking language barriers worldwide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isOnline ? (
                  <Wifi className="w-5 h-5 text-green-600" />
                ) : (
                  <WifiOff className="w-5 h-5 text-red-600" />
                )}
                <span className="text-sm text-gray-600">
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                History
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Language Showcase */}
        <div className="mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Supporting 50+ Languages Including Indian Regional Languages
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {['hi', 'te', 'ta', 'bn', 'gu', 'kn', 'ml', 'mr', 'pa', 'ur', 'es', 'fr', 'de', 'ja', 'ko', 'zh', 'ar', 'ru'].map(code => {
              const lang = languages.find(l => l.code === code);
              return lang ? (
                <span key={code} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {lang.flag} {lang.name}
                </span>
              ) : null;
            })}
          </div>
        </div>

        {/* Main Translation Interface */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          {/* Language Selection */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Languages className="w-5 h-5 text-blue-600" />
                  <select
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value)}
                    className="bg-white border border-blue-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[140px]"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  onClick={handleSwapLanguages}
                  disabled={sourceLang === 'auto'}
                  className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRightLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="bg-white border border-blue-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[140px]"
                  >
                    {languages.filter(lang => lang.code !== 'auto').map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Upload</span>
                </button>
                <button
                  onClick={handleClear}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear</span>
                </button>
              </div>
            </div>
          </div>

          {/* Translation Area */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-blue-100">
            {/* Input Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {sourceLang === 'auto' ? 'Auto-detect' : getLanguageName(sourceLang)}
                  {detectedLang && sourceLang === 'auto' && (
                    <span className="ml-2 text-sm text-blue-600">
                      (Detected: {getLanguageName(detectedLang)})
                    </span>
                  )}
                </h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <textarea
                ref={textareaRef}
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate... Try: hello, thank you, good morning, family, love, peace"
                className="w-full h-40 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors text-gray-800 placeholder-gray-500"
                maxLength={5000}
              />
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-500">
                  {sourceText.length}/5000 characters
                </span>
                <div className="text-xs text-gray-400">
                  {isOnline ? 'Real-time translation with AI' : 'Offline mode active'}
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-6 bg-gray-50/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {getLanguageFlag(targetLang)} {getLanguageName(targetLang)}
                  </h3>
                  {confidence !== null && (
                    <div className="flex items-center space-x-1">
                      {renderConfidenceStars(confidence)}
                      <span className={`text-xs font-medium ${getConfidenceColor(confidence)}`}>
                        {Math.round(confidence * 100)}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleCopy}
                    disabled={!translatedText}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleSpeak}
                    disabled={!translatedText}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div
                ref={outputRef}
                className="w-full h-40 p-4 bg-white border border-gray-200 rounded-lg overflow-y-auto text-gray-800 relative"
                style={{ 
                  fontFamily: targetLang === 'hi' || targetLang === 'te' || targetLang === 'ta' || targetLang === 'bn' || targetLang === 'gu' || targetLang === 'kn' || targetLang === 'ml' || targetLang === 'mr' || targetLang === 'pa' || targetLang === 'ur' ? 'system-ui, -apple-system, sans-serif' : 'inherit',
                  fontSize: ['hi', 'te', 'ta', 'bn', 'gu', 'kn', 'ml', 'mr', 'pa', 'ur', 'ar', 'ja', 'ko', 'zh'].includes(targetLang) ? '16px' : '14px',
                  lineHeight: '1.6'
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">
                    {translatedText || (
                      <span className="text-gray-500 italic">Translation will appear here...</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* History Panel */}
        {showHistory && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800">Translation History</h3>
            </div>
            <div className="p-6">
              {history.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No translations yet</p>
              ) : (
                <div className="space-y-4">
                  {history.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {getLanguageFlag(item.fromLang)} {getLanguageName(item.fromLang)} → {getLanguageFlag(item.toLang)} {getLanguageName(item.toLang)}
                          </span>
                          {item.confidence && (
                            <div className="flex items-center space-x-1">
                              {renderConfidenceStars(item.confidence)}
                            </div>
                          )}
                          <span className={`text-xs px-2 py-1 rounded ${item.isOnline ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                            {item.isOnline ? 'Online' : 'Offline'}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {item.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Original</p>
                          <p className="text-gray-800">{item.sourceText}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Translation</p>
                          <p 
                            className="text-gray-800"
                            style={{ 
                              fontFamily: ['hi', 'te', 'ta', 'bn', 'gu', 'kn', 'ml', 'mr', 'pa', 'ur', 'ar', 'ja', 'ko', 'zh'].includes(item.toLang) ? 'system-ui, -apple-system, sans-serif' : 'inherit',
                              fontSize: ['hi', 'te', 'ta', 'bn', 'gu', 'kn', 'ml', 'mr', 'pa', 'ur', 'ar', 'ja', 'ko', 'zh'].includes(item.toLang) ? '16px' : '14px'
                            }}
                          >
                            {item.translatedText}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-blue-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Universal Language Translator - Breaking barriers, connecting worlds
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supporting 50+ languages including Hindi, Telugu, Tamil, Bengali, Gujarati, Kannada, Malayalam, Marathi, Punjabi, and Urdu
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>© 2025 Universal Translator</span>
              <span>•</span>
              <span>Built with React and TypeScript</span>
              <span>•</span>
              <span>{isOnline ? 'Real-time AI translation' : 'Offline capable'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;