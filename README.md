📘 Pokédex Lite – Frontend Developer Assignment
A lightweight, responsive, and interactive Pokédex web application built using React + Vite. This project allows users to browse Pokémon, search by name, filter by type, paginate results, mark favorites, and view detailed stats — all powered by the PokéAPI.

🚀 Live Demo
🔗 Inspect: https://vercel.com/shreeshnaths-projects/pokedex-lite/GuEyuZJns1g9czWwEXqjP7SL8GxG [2s]
✅  Preview: https://pokedex-lite-dbhcwh85y-shreeshnaths-projects.vercel.app [13s]
📂 GitHub Repository
🔗 https://github.com/shreeshnath/pokedex-lite

🧠 Features Overview
⭐ Favorite Pokémon
Mark any Pokémon as favorite
Favorites stored in LocalStorage
Persistence even after reload
📊 Pokémon Detail View
Modal or separate view
Shows stats: HP, Attack, Defense, Abilities, etc.
High-quality sprite images
📱 Fully Responsive UI
Mobile-first design
Adaptive grid layout
Works on phones, tablets, desktops

⚙️ Installation & Setup (Mac / Windows / Linux)
1️⃣ Clone the Repository
git clone https://github.com/YOUR-USERNAME/pokedex-lite.git
cd pokedex-lite

2️⃣ Install Dependencies
npm install

3️⃣ Run Dev Server
npm run dev

Your app opens at:
http://localhost:5173


🚀 Build for Production
npm run build


🌍 Deploy on Vercel (Recommended)
Go to https://vercel.com
Import GitHub repo
Choose project → Framework: Vite
Build command: 
npm run build 
Output directory: dist
Deploy 🚀

📝 .gitignore Used
node_modules/
dist/
.env
.vscode/
.DS_Store


🎯 Why I Chose This Tech Stack
React + Vite
Super fast dev environment
Easy component-based structure
Small bundle size
PokéAPI
Free & public
Clean documentation
No authentication required
LocalStorage for Favorites
No backend needed
Instant sync
Simple persistence

🧩 Challenges Faced
1️⃣ Handling Paginated API Calls
PokéAPI does not return full Pokémon details on the first call. Solution:
Fetch list ➜ map results ➜ fetch details for each Pokémon in parallel (Promise.all).
2️⃣ Combining Search + Type Filter
Both filters work client-side. Solution:
Apply search filter first
Then apply type filter
Memoize results for performance
3️⃣ Managing Favorites With LocalStorage
Solution:
Create custom hook useLocalStorage()
Sync on component mount

🚀 Future Improvements
Implement O Auth (Google/GitHub)
Infinite scrolling
Dark mode
Search debounce optimization
Global state management with Zustand/Recoil


🧑‍💻 Author
K SHREESHANTH
📧 22btrad017@jainuniversity.ac.in
https://github.com/shreeshnath
