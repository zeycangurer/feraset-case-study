# 🧠 Hexa - AI Logo & Art Generator Demo

This project is a mobile app that allows users to generate logos using AI based on text prompts. It offers an intuitive user experience with modern UI components and clean design aesthetics.

## 🚀 Features

- 🎨 Generate logos by entering a prompt
- 🎲 "Surprise Me" button to insert a random sample prompt
- 🧩 Logo style selection (No Style, Monogram, Abstract, Mascot)
- 📷 Output screen to display the generated logo
- 🔄 Real-time status chip (Creating / Done)
- 📋 Ability to copy the entered prompt
- 🟣 Modern UI with Linear Gradient + BlurView effects

## 🛠️ Technologies Used

- React Native (Expo)
- Firebase Firestore
- Expo Router
- Expo Blur / Linear Gradient
- Manrope Font
- Clipboard (expo-clipboard)
- Mock data and image simulation

## 📁 Project Structure

```
feraset-case-study/
├── app/
│   ├── _layout.tsx
│   ├── index.js
│   ├── output.js
├── assets/
│   ├── icons/
│   ├── images/
├── components/
│   ├── AlertStatusChip.js
│   ├── BackgroundLayer.js
│   ├── CreateButton.js
│   ├── InputForm.js
│   ├── OutputPrompt.js
│   ├── StatusChip.js
│   ├── StyleCard.js
├── firebase/
│   ├── config.js
└── utils/
    └── firestoreHelpers.js

```

## 🔧 Installation

```
git clone https://github.com/yourusername/feraset-case-study.git
cd feraset-case-study
npm install
npx expo start
```
Note: Make sure to configure your Firebase connection in firebase/config.js.


## 📱 How to Use

1. Open the app.
2. Type a description for your logo prompt (e.g. "A blue lion logo reading 'HEXA'").
3. (Optional) Tap **Surprise Me** to autofill a random example.
4. Select a style from the logo style cards.
5. Tap **Create** to start the logo generation process.
6. A status chip will indicate the process state:

   * *Creating Your Design*: animated loader
   * *Your Design is Ready*: tap to view the result
7. On the output screen, you will see the final image and can copy the prompt text.

