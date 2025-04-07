document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const micBtn = document.getElementById('mic-btn');
    const downloadBtn = document.getElementById('download-btn');
    const clearBtn = document.getElementById('clear-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Eco-friendly product data for client-side fallback
    const ecoProductData = {
        "products": [
            {
                "category": "bamboo",
                "items": [
                    {
                        "name": "Bamboo Toothbrush",
                        "what": "A toothbrush with a handle made from bamboo, a highly renewable resource.",
                        "why": "Replaces plastic toothbrushes which can take 400+ years to decompose.",
                        "benefits": "Biodegradable handle, renewable resource, reduces plastic waste.",
                        "hazards": "Bristles are often still made of nylon which isn't biodegradable. Some may have durability issues compared to plastic.",
                        "lifespan": "Typically lasts 3-4 months with proper care. Bamboo handle biodegrades in about 6 months in compost conditions."
                    },
                    {
                        "name": "Bamboo Cutting Board",
                        "what": "Kitchen cutting board made from bamboo.",
                        "why": "Bamboo is a fast-growing grass that requires no pesticides and minimal water.",
                        "benefits": "Naturally antibacterial, durable, sustainable resource, biodegradable.",
                        "hazards": "Requires proper care to prevent splitting, may contain adhesives in some products.",
                        "lifespan": "Can last 2-3 years with proper care. Fully biodegrades in 1-2 years in landfill conditions."
                    },
                    {
                        "name": "Bamboo Fabric Products",
                        "what": "Clothing, bed sheets, and towels made from bamboo fibers.",
                        "why": "Alternative to cotton which requires high water usage and pesticides.",
                        "benefits": "Soft texture, breathable, antibacterial properties, sustainable source.",
                        "hazards": "Processing bamboo into fabric often uses harsh chemicals unless specifically labeled as organically processed.",
                        "lifespan": "Can last 3-5 years depending on usage. Biodegrades in 1-5 years depending on processing method."
                    }
                ]
            },
            {
                "category": "reusable",
                "items": [
                    {
                        "name": "Stainless Steel Water Bottle",
                        "what": "Durable bottle made of food-grade stainless steel for carrying water.",
                        "why": "Eliminates the need for single-use plastic water bottles.",
                        "benefits": "Long-lasting, doesn't leach chemicals, recyclable at end of life, saves money long-term.",
                        "hazards": "Higher upfront cost, heavier to carry, requires regular cleaning.",
                        "lifespan": "Can last 10-12 years or more. Stainless steel is 100% recyclable and doesn't degrade in quality when recycled."
                    },
                    {
                        "name": "Beeswax Food Wraps",
                        "what": "Reusable food wraps made from cotton infused with beeswax, oils, and tree resin.",
                        "why": "Replaces plastic cling film/wrap which is single-use and non-recyclable.",
                        "benefits": "Reusable for up to a year, biodegradable, natural antibacterial properties.",
                        "hazards": "Not suitable for raw meat, requires handwashing, not vegan (though vegan alternatives exist).",
                        "lifespan": "Usable for about 1 year with proper care. Can be refreshed by re-waxing. Fully biodegradable in compost in 2-3 months."
                    },
                    {
                        "name": "Silicone Food Storage Bags",
                        "what": "Resealable bags made from food-grade silicone for storing food.",
                        "why": "Alternative to disposable plastic zipper bags.",
                        "benefits": "Reusable for years, dishwasher safe, doesn't harbor bacteria, heat resistant.",
                        "hazards": "More expensive initially, silicone is not biodegradable though it is more durable than plastic.",
                        "lifespan": "Can last 5-10 years with proper care. While not biodegradable, silicone can be recycled through specialized programs."
                    }
                ]
            },
            {
                "category": "recycled",
                "items": [
                    {
                        "name": "Recycled Plastic Clothing",
                        "what": "Clothing made from fibers derived from recycled plastic bottles (rPET).",
                        "why": "Diverts plastic waste from landfills and oceans while reducing virgin plastic production.",
                        "benefits": "Reduces waste, uses less energy to produce than virgin polyester, gives plastic a second life.",
                        "hazards": "Still sheds microplastics during washing, remains non-biodegradable.",
                        "lifespan": "Similar lifespan to conventional polyester clothing (3-5 years). Takes 20-200 years to break down in landfill."
                    },
                    {
                        "name": "Reclaimed Wood Furniture",
                        "what": "Furniture crafted from salvaged or reclaimed wood from old buildings, barns, etc.",
                        "why": "Prevents deforestation by reusing existing wood resources.",
                        "benefits": "Unique character and appearance, prevents wood waste, often very durable.",
                        "hazards": "May be more expensive, should be checked for lead paint or other toxins if very old.",
                        "lifespan": "Can last generations (50+ years) with proper care. If discarded, untreated wood biodegrades in 3-10 years."
                    },
                    {
                        "name": "Recycled Paper Products",
                        "what": "Paper goods (notebooks, toilet paper, packaging) made from post-consumer waste paper.",
                        "why": "Reduces demand for virgin paper production which contributes to deforestation.",
                        "benefits": "Uses less energy, water, and chemicals than virgin paper production, reduces landfill waste.",
                        "hazards": "Sometimes lower quality or strength than virgin paper, may have limited printing applications.",
                        "lifespan": "Variable depending on use. Biodegrades in 2-6 weeks in proper conditions, or can be recycled again up to 5-7 times."
                    }
                ]
            },
            {
                "category": "organic",
                "items": [
                    {
                        "name": "Organic Cotton Products",
                        "what": "Clothing and textiles made from cotton grown without synthetic fertilizers or pesticides.",
                        "why": "Conventional cotton is one of the most chemically-intensive crops, harmful to soil and water.",
                        "benefits": "Better for soil health, farm workers' health, reduces chemical runoff into waterways.",
                        "hazards": "More expensive, may have limited styles, still requires significant water to produce.",
                        "lifespan": "Similar to conventional cotton (2-5 years depending on use). Biodegrades in 1-5 months in compost conditions."
                    },
                    {
                        "name": "Organic Food",
                        "what": "Food produced without synthetic pesticides, fertilizers, GMOs, or growth hormones.",
                        "why": "Reduces chemical exposure and promotes more sustainable farming practices.",
                        "benefits": "Reduced pesticide residue, better for soil health and biodiversity, often more nutritious.",
                        "hazards": "More expensive, shorter shelf life, can still have environmental impacts through transportation.",
                        "lifespan": "Shelf life is typically 30-50% shorter than conventional food. Food waste composts in 2-6 weeks."
                    },
                    {
                        "name": "Organic Skincare",
                        "what": "Personal care products made with organically grown ingredients, without synthetic chemicals.",
                        "why": "Reduces exposure to potentially harmful chemicals that can be absorbed through skin.",
                        "benefits": "Gentler on sensitive skin, biodegradable ingredients, supports organic farming.",
                        "hazards": "Shorter shelf life without preservatives, higher cost, varying effectiveness compared to conventional products.",
                        "lifespan": "Typically has a shelf life of 6-12 months once opened (vs 2-3 years for conventional products). Biodegrades quickly when discarded."
                    }
                ]
            },
            {
                "category": "plastic alternatives",
                "items": [
                    {
                        "name": "Glass Containers",
                        "what": "Food storage and beverage containers made from glass instead of plastic.",
                        "why": "Glass is infinitely recyclable and doesn't leach chemicals into food or drinks.",
                        "benefits": "Durable, doesn't absorb flavors or stains, microwave safe, recyclable.",
                        "hazards": "Breakable, heavier than plastic, higher energy footprint to produce initially.",
                        "lifespan": "Can last indefinitely if not broken. Glass does not biodegrade but is 100% recyclable without quality loss."
                    },
                    {
                        "name": "PLA (Polylactic Acid) Products",
                        "what": "Biodegradable plastic alternative made from fermented plant starch (usually corn).",
                        "why": "Provides a more environmentally friendly alternative to conventional plastics.",
                        "benefits": "Biodegradable under industrial composting conditions, made from renewable resources.",
                        "hazards": "Requires specific industrial composting facilities to break down properly, not suitable for high-heat applications.",
                        "lifespan": "Similar durability to conventional plastic during use, but biodegrades in 3-6 months in industrial composting facilities (can take 100+ years in landfill)."
                    },
                    {
                        "name": "Wooden Kitchen Utensils",
                        "what": "Cooking tools made from wood instead of plastic.",
                        "why": "Natural alternative to plastic utensils that won't scratch cookware or leach chemicals.",
                        "benefits": "Biodegradable, renewable material, doesn't scratch non-stick surfaces, naturally antibacterial with proper care.",
                        "hazards": "Requires more maintenance, can absorb stains and odors, not dishwasher safe.",
                        "lifespan": "Can last 5-10 years with proper care. Biodegrades in 1-3 years in landfill conditions."
                    }
                ]
            }
        ]
    };
    
    // Initialize chatbot
    initChatbot();
    
    // Load chat history from localStorage
    loadChatHistory();
    
    // Event listeners
    sendBtn.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });
    
    themeToggleBtn.addEventListener('click', toggleDarkMode);
    micBtn.addEventListener('click', startSpeechRecognition);
    downloadBtn.addEventListener('click', downloadChatAsPDF);
    clearBtn.addEventListener('click', clearChat);
    
    // Initialize SpeechRecognition if supported
    let recognition;
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            handleUserMessage();
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            addBotMessage('Sorry, I couldn\'t understand that. Please try again or type your question.');
        };
    } else {
        micBtn.style.display = 'none';
    }
    
    // Function to initialize chatbot
    function initChatbot() {
        // Check if dark mode was previously enabled
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.classList.replace('fa-moon', 'fa-sun');
        }
    }
    
    // Function to handle user messages
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Clear input field
        userInput.value = '';
        
        // Process user message and get response
        processUserMessage(message);
        
        // Save chat to localStorage
        saveChatHistory();
    }
    
    // Function to add user message to chat
    function addUserMessage(message) {
        const messageElement = createMessageElement(message, 'user-message');
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Function to add bot message to chat
    function addBotMessage(message, includeRating = true) {
        const messageElement = createMessageElement(message, 'bot-message');
        
        // Add rating buttons if needed
        if (includeRating) {
            const ratingDiv = document.createElement('div');
            ratingDiv.className = 'message-rating';
            ratingDiv.innerHTML = `
                <span>Was this helpful?</span>
                <button class="rating-btn" data-rating="helpful"><i class="fas fa-thumbs-up"></i></button>
                <button class="rating-btn" data-rating="not-helpful"><i class="fas fa-thumbs-down"></i></button>
            `;
            
            // Add event listeners to rating buttons
            ratingDiv.querySelectorAll('.rating-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const rating = e.currentTarget.getAttribute('data-rating');
                    // Here you can implement feedback collection logic
                    ratingDiv.innerHTML = `<span>Thanks for your feedback!</span>`;
                });
            });
            
            messageElement.appendChild(ratingDiv);
        }
        
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Function to create message element
    function createMessageElement(message, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${className}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = `<p>${message}</p>`;
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = getCurrentTime();
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);
        
        return messageDiv;
    }
    
    // Function to get current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Function to scroll chat to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to process user message and get response
    async function processUserMessage(message) {
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message typing-indicator';
        typingIndicator.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>';
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();
        
        // Simulate network delay for more natural interaction
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Generate response
            const response = generateResponse(message);
            
            // Add bot response to chat
            addBotMessage(response);
            
            // Save to localStorage
            saveChatHistory();
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
    
    // Function to generate response based on user message
    function generateResponse(message) {
        message = message.toLowerCase();
        
        // Check for time/lifespan specific questions
        if (message.includes('how long') || message.includes('lifespan') || message.includes('last') || 
            message.includes('biodegradable') || message.includes('biodegrade') || message.includes('decompose') ||
            message.includes('time') || message.includes('duration')) {
            
            return handleTimeQuery(message);
        }
        
        // Define keywords for each category
        const categoryKeywords = {
            'bamboo': ['bamboo', 'toothbrush', 'cutting board', 'bamboo fabric'],
            'reusable': ['reusable', 'steel bottle', 'water bottle', 'beeswax', 'silicone', 'sustainable', 'alternatives', 'bottle', 'wrap', 'food wrap', 'storage bag'],
            'recycled': ['recycled', 'upcycled', 'reclaimed', 'reused', 'repurposed', 'plastic clothing', 'wood furniture', 'paper product'],
            'organic': ['organic', 'natural', 'chemical-free', 'pesticide-free', 'cotton', 'food', 'skincare'],
            'plastic alternatives': ['plastic alternatives', 'alternatives to plastic', 'instead of plastic', 'no plastic', 'glass', 'pla', 'wooden', 'wood utensil']
        };
        
        // Search for specific product names in all categories
        const allProducts = getAllProducts();
        const productMatch = findBestProductMatch(message, allProducts);
        
        if (productMatch) {
            return formatProductResponse(productMatch);
        }
        
        // Analyze message for category mentions
        const categoryMentions = [];
        for (const [category, keywords] of Object.entries(categoryKeywords)) {
            for (const keyword of keywords) {
                if (message.includes(keyword)) {
                    categoryMentions.push(category);
                    break;
                }
            }
        }
        
        // If specific categories were mentioned, provide detailed information
        if (categoryMentions.length > 0) {
            const category = categoryMentions[0]; // Take the first category match
            
            // Find the category in ecoProductData
            const categoryData = ecoProductData.products.find(cat => cat.category === category);
            
            if (categoryData) {
                // Choose product that best matches the query
                let bestProduct = null;
                let bestScore = 0;
                
                for (const product of categoryData.items) {
                    // More comprehensive scoring system
                    let score = 0;
                    const productNameWords = product.name.toLowerCase().split(' ');
                    const messageWords = message.split(' ');
                    
                    // Check for direct word matches
                    for (const word of messageWords) {
                        if (word.length > 2 && productNameWords.some(pWord => pWord.includes(word))) {
                            score += 2;
                        }
                    }
                    
                    // Check for word presence in description
                    for (const word of messageWords) {
                        if (word.length > 3) {
                            if (product.what.toLowerCase().includes(word)) score += 1;
                            if (product.benefits.toLowerCase().includes(word)) score += 1;
                        }
                    }
                    
                    if (score > bestScore) {
                        bestScore = score;
                        bestProduct = product;
                    }
                }
                
                // If no product specifically matches, take the first one
                if (!bestProduct || bestScore === 0) {
                    // Instead of picking the first one, let's examine the query to find the most relevant
                    const categoryItems = categoryData.items;
                    let itemDescriptions = '';
                    
                    // Create a list of items in the category for the user to choose from
                    categoryItems.forEach(item => {
                        itemDescriptions += `• <strong>${item.name}</strong>: ${item.what.substring(0, 100)}...<br>`;
                    });
                    
                    return `I found several <strong>${categoryData.category}</strong> products that might interest you:<br><br>
                    ${itemDescriptions}<br>
                    You can ask me specifically about any of these products for more detailed information including their environmental benefits and lifespan data.`;
                }
                
                return formatProductResponse(bestProduct);
            }
        }
        
        // If it's a general question about eco-friendly products
        if (message.includes('what') || message.includes('which') || message.includes('how') || 
            message.includes('recommend') || message.includes('tell me about')) {
            
            if (message.includes('eco') || message.includes('friendly') || 
                message.includes('sustainable') || message.includes('green')) {
                
                return `<strong>Eco-Friendly Products Overview</strong><br><br>
                Eco-friendly products are designed to have minimal negative impact on the environment. They typically:<br><br>
                • Use sustainable or renewable materials<br>
                • Have reduced packaging<br>
                • Are produced with ethical and eco-conscious methods<br>
                • May be biodegradable, recyclable or reusable<br><br>
                
                <strong>Popular categories include:</strong><br>
                • <u>Bamboo products</u>: Sustainable alternative to plastic or wood<br>
                • <u>Reusable items</u>: Eliminate single-use products<br>
                • <u>Recycled/upcycled goods</u>: Give materials a second life<br>
                • <u>Organic products</u>: Grown without synthetic pesticides or fertilizers<br>
                • <u>Plastic alternatives</u>: Materials like glass, stainless steel, or biodegradable options<br><br>
                
                You can ask me about specific products in any of these categories for more details including lifespan and timeframe data!`;
            }
        }
        
        // Fallback response
        return `I'm not sure what eco-friendly product you're looking for. You can ask me about:<br><br>
        • Bamboo products (toothbrushes, cutting boards, fabric)<br>
        • Reusable alternatives (water bottles, food wraps, bags)<br>
        • Recycled/upcycled items (clothing, furniture, paper)<br>
        • Organic products (cotton, food, skincare)<br>
        • Plastic alternatives (glass, PLA, wooden items)<br><br>
        
        Or ask a general question about eco-friendly products! I'll include information about their lifespan and biodegradability timeframes.`;
    }
    
    // Helper function to get all products from all categories
    function getAllProducts() {
        const allProducts = [];
        ecoProductData.products.forEach(category => {
            category.items.forEach(product => {
                allProducts.push(product);
            });
        });
        return allProducts;
    }
    
    // Helper function to find the best matching product from all products
    function findBestProductMatch(message, allProducts) {
        let bestMatch = null;
        let highestScore = 0;
        
        for (const product of allProducts) {
            let score = 0;
            const productName = product.name.toLowerCase();
            const productWords = productName.split(' ');
            
            // Direct match to product name
            if (message.includes(productName)) {
                score += 10;
            }
            
            // Match individual words in product name
            for (const word of productWords) {
                if (word.length > 3 && message.includes(word)) {
                    score += 3;
                }
            }
            
            // Match keywords in descriptions
            const descriptionText = product.what.toLowerCase() + ' ' + 
                                    product.benefits.toLowerCase();
            
            const messageWords = message.split(' ').filter(word => word.length > 3);
            for (const word of messageWords) {
                if (descriptionText.includes(word)) {
                    score += 1;
                }
            }
            
            if (score > highestScore) {
                highestScore = score;
                bestMatch = product;
            }
        }
        
        // Only return match if score is significant
        return highestScore >= 3 ? bestMatch : null;
    }
    
    // Helper function to handle time-specific queries
    function handleTimeQuery(message) {
        const allProducts = getAllProducts();
        let relevantProduct = null;
        
        // First try to find a specific product being asked about
        for (const product of allProducts) {
            const productName = product.name.toLowerCase();
            const productWords = productName.split(' ');
            
            if (message.includes(productName) || 
                productWords.some(word => word.length > 3 && message.includes(word))) {
                relevantProduct = product;
                break;
            }
        }
        
        if (relevantProduct) {
            return `<strong>Lifespan Information for ${relevantProduct.name}</strong><br><br>${relevantProduct.lifespan}`;
        }
        
        // If no specific product, check for category mentions
        for (const category of ecoProductData.products) {
            if (message.includes(category.category)) {
                let response = `<strong>Lifespan Information for ${category.category} products:</strong><br><br>`;
                
                category.items.forEach(item => {
                    response += `<u>${item.name}</u>: ${item.lifespan}<br><br>`;
                });
                
                return response;
            }
        }
        
        // General lifespan comparison if no specific product or category
        return `<strong>Lifespan Comparison of Eco-Friendly Products</strong><br><br>
        <u>Longest Lasting:</u><br>
        • Glass containers: Indefinite lifespan if not broken, 100% recyclable<br>
        • Stainless steel water bottles: 10-12+ years, fully recyclable<br>
        • Reclaimed wood furniture: Can last generations (50+ years)<br><br>
        
        <u>Medium Lifespan:</u><br>
        • Wooden utensils: 5-10 years with proper care<br>
        • Silicone food storage: 5-10 years<br>
        • Bamboo cutting boards: 2-3 years<br><br>
        
        <u>Shorter Lifespan (by design):</u><br>
        • Beeswax wraps: About 1 year (can be refreshed by re-waxing)<br>
        • Bamboo toothbrushes: 3-4 months<br>
        • Organic skincare: 6-12 months once opened<br><br>
        
        <u>Quickest to Biodegrade:</u><br>
        • Recycled paper products: 2-6 weeks in compost<br>
        • Organic food waste: 2-6 weeks in compost<br>
        • Beeswax wraps: 2-3 months in compost<br><br>
        
        You can ask about specific products for more detailed lifespan information.`;
    }
    
    // Helper function to format product response
    function formatProductResponse(product) {
        let response = `<strong>${product.name}</strong><br><br>`;
        response += `<u>What is it?</u><br>${product.what}<br><br>`;
        response += `<u>Why is it eco-friendly?</u><br>${product.why}<br><br>`;
        response += `<u>Environmental benefits:</u><br>${product.benefits}<br><br>`;
        response += `<u>Potential downsides or hazards:</u><br>${product.hazards}<br><br>`;
        response += `<u>Lifespan & Time Data:</u><br>${product.lifespan}`;
        
        return response;
    }
    
    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        
        // Toggle icon
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            themeToggleBtn.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    }
    
    // Function to start speech recognition
    function startSpeechRecognition() {
        if (recognition) {
            try {
                recognition.start();
                micBtn.classList.add('listening');
                micBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                
                recognition.onend = () => {
                    micBtn.classList.remove('listening');
                    micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                };
            } catch (error) {
                console.error('Speech recognition error:', error);
            }
        }
    }
    
    // Function to download chat as PDF
    function downloadChatAsPDF() {
        // Check if required libraries are loaded
        if (typeof html2canvas === 'undefined' || typeof jspdf === 'undefined') {
            alert('PDF generation libraries are loading. Please try again in a moment.');
            return;
        }
        
        // Create a clone of the chat container to capture
        const chatClone = chatMessages.cloneNode(true);
        
        // Remove any rating elements from the clone
        chatClone.querySelectorAll('.message-rating').forEach(el => el.remove());
        
        // Append the clone to body temporarily, but hide it
        document.body.appendChild(chatClone);
        chatClone.style.position = 'absolute';
        chatClone.style.left = '-9999px';
        chatClone.style.background = 'white';
        chatClone.style.width = '800px';
        chatClone.style.padding = '20px';
        
        html2canvas(chatClone).then(canvas => {
            // Remove the clone from DOM
            document.body.removeChild(chatClone);
            
            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf.jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgWidth = 190;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('eco-chat-history.pdf');
        });
    }
    
    // Function to clear chat
    function clearChat() {
        if (confirm('Are you sure you want to clear the chat history?')) {
            // Remove all messages except the first welcome message
            while (chatMessages.children.length > 1) {
                chatMessages.removeChild(chatMessages.lastChild);
            }
            
            // Clear localStorage
            localStorage.removeItem('chatHistory');
        }
    }
    
    // Function to save chat history to localStorage
    function saveChatHistory() {
        const messages = [];
        
        document.querySelectorAll('.message').forEach(messageEl => {
            const type = messageEl.classList.contains('user-message') ? 'user' : 'bot';
            const content = messageEl.querySelector('.message-content p')?.textContent || '';
            const time = messageEl.querySelector('.message-time')?.textContent || '';
            
            if (content && !messageEl.classList.contains('typing-indicator')) {
                messages.push({ type, content, time });
            }
        });
        
        localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
    
    // Function to load chat history from localStorage
    function loadChatHistory() {
        const history = localStorage.getItem('chatHistory');
        
        if (history) {
            const messages = JSON.parse(history);
            
            // Clear default welcome message
            chatMessages.innerHTML = '';
            
            messages.forEach(message => {
                if (message.type === 'user') {
                    const messageEl = createMessageElement(message.content, 'user-message');
                    messageEl.querySelector('.message-time').textContent = message.time;
                    chatMessages.appendChild(messageEl);
                } else {
                    const messageEl = createMessageElement(message.content, 'bot-message');
                    messageEl.querySelector('.message-time').textContent = message.time;
                    chatMessages.appendChild(messageEl);
                }
            });
            
            scrollToBottom();
        }
    }
}); 