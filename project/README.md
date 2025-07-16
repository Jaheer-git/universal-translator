# 🌍 Universal Language Translator

A beautiful, responsive web application that breaks language barriers by providing real-time translation between 50+ languages, with special focus on Indian regional languages.

![Universal Language Translator](https://img.shields.io/badge/Languages-50+-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue)

## 🚀 Live Demo

**[View Live Application](https://reliable-gumdrop-a9a38c.netlify.app)**

## ✨ Features

### 🎯 Core Functionality
- **Real-time Translation**: Instant translation as you type
- **Auto Language Detection**: Automatically detects source language
- **50+ Languages**: Comprehensive language support including:
  - **Indian Languages**: Hindi, Telugu, Tamil, Bengali, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Urdu
  - **International**: Spanish, French, German, Japanese, Korean, Chinese, Arabic, Russian, and more
- **Native Script Support**: Authentic rendering in original scripts (Devanagari, Telugu, Tamil, etc.)

### 🛠️ User Experience
- **Copy to Clipboard**: One-click copying of translations
- **Text-to-Speech**: Audio playback of translated text
- **Language Swap**: Quick language switching
- **Translation History**: Keep track of recent translations
- **Character Counter**: Real-time character count with 5000 character limit
- **Clear Function**: Reset input and output with one click

### 🎨 Design & Interface
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional interface with smooth animations
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Premium Aesthetics**: Apple-level design with micro-interactions
- **Loading States**: Smooth loading animations and feedback

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/universal-language-translator.git
   cd universal-language-translator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
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

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for beautiful, consistent icons
- **Build Tool**: Vite for fast development and building
- **Code Quality**: ESLint for code linting

## 🌐 Supported Languages

### Indian Regional Languages
| Language | Script | Code |
|----------|--------|------|
| Hindi | हिंदी | hi |
| Telugu | తెలుగు | te |
| Tamil | தமிழ் | ta |
| Bengali | বাংলা | bn |
| Gujarati | ગુજરાતી | gu |
| Kannada | ಕನ್ನಡ | kn |
| Malayalam | മലയാളം | ml |
| Marathi | मराठी | mr |
| Punjabi | ਪੰਜਾਬੀ | pa |
| Urdu | اردو | ur |

### International Languages
Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, Thai, Vietnamese, Dutch, Swedish, Danish, Norwegian, Polish, Turkish, Hebrew, Czech, Hungarian, Romanian, Bulgarian, Croatian, Slovak, and many more!

## 🔧 Development

### Project Structure
```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # TypeScript environment definitions
```

### Key Components
- **Language Selection**: Dropdown menus for source and target languages
- **Translation Engine**: Mock translation system (ready for API integration)
- **History Management**: Local storage of translation history
- **Speech Synthesis**: Browser-based text-to-speech functionality
- **Responsive Layout**: Mobile-first design approach

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## 🔮 Future Enhancements

- [ ] **API Integration**: Connect with Google Translate or DeepL API
- [ ] **Voice Input**: Speech-to-text functionality
- [ ] **Offline Mode**: Local translation models
- [ ] **User Accounts**: Save translation history across devices
- [ ] **Favorites**: Bookmark frequently used translations
- [ ] **Themes**: Dark mode and custom themes
- [ ] **Export**: Download translation history
- [ ] **Collaboration**: Share translations with others

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Vite** for the lightning-fast build tool
- **Community** for inspiration and feedback

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/YOUR_USERNAME/universal-language-translator](https://github.com/YOUR_USERNAME/universal-language-translator)

---

⭐ **Star this repository if you found it helpful!**