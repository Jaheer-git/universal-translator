#!/bin/bash

# Universal Language Translator - Deployment Script
# This script builds the project and provides deployment instructions

echo "🌍 Universal Language Translator - Deployment Script"
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix the issues before deploying."
    exit 1
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📂 Build output is in the 'dist' folder"
echo ""
echo "🚀 Deployment Options:"
echo "1. Netlify Drop: Drag and drop the 'dist' folder to https://app.netlify.com/drop"
echo "2. Vercel: Run 'npx vercel' in this directory"
echo "3. GitHub Pages: Push to GitHub and enable Pages in repository settings"
echo "4. Firebase: Run 'npx firebase deploy' (requires Firebase CLI setup)"
echo ""
echo "🎉 Your Universal Language Translator is ready for deployment!"