# Universal Language Translator 🌐

A comprehensive, modern web-based language translation application that breaks language barriers by providing real-time translation between 50+ languages, with special focus on Indian regional languages.

![Universal Language Translator](https://img.shields.io/badge/Languages-50+-blue) ![Online%2FOffline](https://img.shields.io/badge/Mode-Online%2FOffline-green) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)

## ✨ Features

### 🌍 **Comprehensive Language Support**
- **50+ languages** including major world languages
- **Strong focus on Indian regional languages**: Hindi, Telugu, Tamil, Bengali, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Urdu
- Auto-detection for seamless translation experience

### 🚀 **Advanced Translation Capabilities**
- **Real-time translation** with MyMemory Translation API
- **Intelligent language detection** using pattern-based algorithms
- **Offline mode** with enhanced mock translations for uninterrupted service
- **Translation confidence scoring** with visual star ratings
- **File upload support** for .txt files (up to 10KB)

### 💫 **Modern User Experience**
- **Beautiful, responsive design** with gradient backgrounds and glass-morphism effects
- **Real-time typing translation** with 500ms debounce
- **Translation history** with confidence indicators and online/offline status
- **Copy to clipboard** functionality
- **Text-to-speech** for pronunciation assistance
- **Language swapping** for quick reverse translation

### 🔧 **Technical Features**
- **Online/Offline status monitoring** with automatic fallback
- **Progressive enhancement** - works without internet connection
- **Mobile-responsive design** for all devices
- **Accessibility features** with proper ARIA labels
- **Performance optimized** with efficient re-rendering

## 🎯 Supported Languages

### Indian Regional Languages
- 🇮🇳 **Hindi** (हिंदी)
- 🇮🇳 **Telugu** (తెలుగు)
- 🇮🇳 **Tamil** (தமிழ்)
- 🇧🇩 **Bengali** (বাংলা)
- 🇮🇳 **Gujarati** (ગુજરાતી)
- 🇮🇳 **Kannada** (ಕನ್ನಡ)
- 🇮🇳 **Malayalam** (മലയാളം)
- 🇮🇳 **Marathi** (मराठी)
- 🇮🇳 **Punjabi** (ਪੰਜਾਬੀ)
- 🇵🇰 **Urdu** (اردو)

### Major World Languages
- 🇺🇸 English, 🇪🇸 Spanish, 🇫🇷 French, 🇩🇪 German, 🇮🇹 Italian, 🇵🇹 Portuguese
- 🇷🇺 Russian, 🇯🇵 Japanese, 🇰🇷 Korean, 🇨🇳 Chinese, 🇸🇦 Arabic
- 🇹🇭 Thai, 🇻🇳 Vietnamese, 🇳🇱 Dutch, 🇸🇪 Swedish, 🇩🇰 Danish
- 🇳🇴 Norwegian, 🇵🇱 Polish, 🇹🇷 Turkish, 🇮🇱 Hebrew, 🇨🇿 Czech
- And many more European, African, and other languages...

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/universal-language-translator.git
   cd universal-language-translator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage Guide

### Basic Translation
1. **Select source language** (or use Auto-detect)
2. **Select target language**
3. **Type or paste text** in the input area
4. **See real-time translation** appear automatically
5. **Use copy, speak, or history features** as needed

### File Translation
1. Click the **"Upload"** button
2. Select a **.txt file** (max 10KB)
3. File content will be loaded into the input area
4. Translation happens automatically

### Features Usage
- **🔄 Language Swap**: Quick reverse translation
- **📋 Copy**: Copy translated text to clipboard
- **🔊 Speak**: Text-to-speech for pronunciation
- **📚 History**: View past translations with confidence scores
- **📱 Offline Mode**: Automatic fallback when internet is unavailable

## 🔧 Technical Architecture

### Frontend Technologies
- **React 18.3.1** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

### Translation Services
- **Primary**: MyMemory Translation API (free, no auth required)
- **Fallback**: Enhanced local mock translations
- **Language Detection**: Pattern-based algorithm for 20+ languages

### Key Components
- **App.tsx**: Main application logic
- **Translation Engine**: API integration with offline fallback
- **Language Detection**: Regex-based detection for major languages
- **History Management**: Local state with confidence tracking

## 🌟 Advanced Features

### Translation Confidence
- **5-star rating system** based on API confidence scores
- **Color-coded indicators**: Green (>80%), Yellow (60-80%), Red (<60%)
- **Historical tracking** of translation quality

### Offline Capability
- **Automatic detection** of network status
- **Seamless fallback** to local translations
- **Visual indicators** for online/offline mode
- **No functionality loss** in offline mode

### Smart Language Detection
Pattern-based detection for:
- **Indian scripts**: Devanagari, Telugu, Tamil, Bengali, etc.
- **Asian languages**: Chinese, Japanese, Korean, Arabic
- **European languages**: Spanish, French, German, Russian
- **Fallback to English** for unrecognized text

## 🎨 UI/UX Highlights

- **Modern gradient backgrounds** with professional color schemes
- **Glass-morphism effects** for modern aesthetic
- **Responsive grid layouts** for desktop and mobile
- **Smooth animations** and transitions
- **Accessible design** with proper contrast ratios
- **Status indicators** for network and translation state

## 🔒 Privacy & Security

- **No personal data storage** - translations are processed in real-time
- **Client-side language detection** - no text sent for detection
- **Free API usage** - no authentication or API keys required
- **Local history** - translation history stored locally in browser

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MyMemory Translation API** for free translation services
- **Lucide** for beautiful icons
- **Tailwind CSS** for rapid UI development
- **React team** for the excellent framework

## 📞 Support

For support, feature requests, or bug reports:
- 📧 Email: support@universaltranslator.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/universal-language-translator/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/universal-language-translator/discussions)

---

**Made with ❤️ for breaking language barriers and connecting people worldwide.**

*Supporting 50+ languages • Real-time translation • Offline capable • Open source*