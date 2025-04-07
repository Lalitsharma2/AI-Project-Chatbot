# Eco-Friendly Products Chatbot

A web-based chatbot that recommends eco-friendly products and provides information about their benefits, definitions, potential hazards, and lifespan data.

## Features

- Modern, responsive UI with dark mode support
- Interactive chatbot that responds to queries about eco-friendly products
- Voice-to-text capability for hands-free interaction
- Chat history saved to localStorage
- Option to download chat history as PDF
- Client-side processing for immediate deployment without server requirements
- Detailed product lifespan and biodegradability timeframes

## Project Structure

- `index.html` - Main HTML structure of the chatbot interface
- `styles.css` - CSS styling for the application
- `script.js` - Frontend JavaScript functionality with embedded product data

## Setup Instructions

### No server required!

1. Simply download/clone all files to your local machine.
2. Open `index.html` in any modern web browser.

For a better experience (optional), you can use a local server:
- Using Python: 
  ```
  python -m http.server 8000
  ```
  Then access http://localhost:8000

## Usage

1. Type a question about eco-friendly products in the input field and press Enter or click the send button.
2. Alternatively, click the microphone button to use voice input (if supported by your browser).
3. The chatbot will respond with information about the requested eco-friendly products, including how long they last and how quickly they biodegrade.
4. You can toggle dark mode by clicking the moon/sun icon.
5. Use the "Download Chat" button to save your conversation as a PDF.
6. Use the "Clear Chat" button to start a new conversation.

## Example Queries

- "Tell me about bamboo toothbrushes"
- "What are some reusable alternatives to plastic?"
- "What organic products do you recommend?"
- "What are the benefits of recycled paper products?"
- "Tell me about alternatives to plastic"
- "How long do glass containers last?"
- "How quickly does organic cotton biodegrade?"

## Project Team

- Student Name (REG12345, ROLL6789)
- Student Name (REG12346, ROLL6790)

## Features Implemented

- **Modern UI**: Responsive design with intuitive chat interface
- **Dark Mode**: Toggle between light and dark themes
- **Voice Input**: Using Web Speech API for voice-to-text functionality
- **PDF Export**: Download chat history as a PDF
- **Local Storage**: Save and load chat history between sessions
- **Response Rating**: Provide feedback on chatbot answers
- **Typing Indicators**: Realistic chat experience with typing animations
- **Time Data**: Product lifespan and biodegradability information

## Technical Details

- Client-side application built with HTML, CSS, and vanilla JavaScript
- Product data is embedded in the JavaScript file for immediate access
- No external server required - everything runs in the browser
- Uses third-party libraries:
  - Font Awesome (for icons)
  - jsPDF (for PDF generation)
  - html2canvas (for capturing chat for PDF)

## Customization

You can customize the product data by editing the `ecoProductData` object in the `script.js` file. This allows you to add new products or modify existing information, including the lifespan and biodegradability timeframes. 