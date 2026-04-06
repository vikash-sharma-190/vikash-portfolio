# Vikash Vishwakarma – Portfolio

A modern, animated portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Shadcn UI**, featuring an integrated AI chat interface powered by **Azure OpenAI**.

## ✨ Features

- 🎬 **Netflix-style project cards** with hover animations & detail modals
- 🤖 **AI chat assistant** – ask anything about Vikash's experience
- 💼 **Experience**, **Projects**, **About**, and **Contact** sections
- 🌊 Fluid animated background with glassmorphism design
- 📱 Fully responsive

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| UI Components | Shadcn UI (Radix UI) |
| Animations | Framer Motion |
| AI Backend | Python + FastAPI + Azure OpenAI |
| Icons | Lucide React |

## 🚀 Getting Started

### Frontend

```bash
cd portfolio-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### AI Chat Backend

```bash
# Create a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn openai python-dotenv pypdf requests

# Copy env file and fill in your keys
cp .env.example .env

# Run the API server
python api.py
```

The API will be available at `http://localhost:8000`

## 📁 Project Structure

```
potpolio/
├── portfolio-web/       # Next.js frontend
│   ├── app/             # App router pages
│   ├── components/      # UI components
│   └── public/          # Static assets
├── api.py               # FastAPI AI backend
├── Experence.txt        # Experience data for AI context
├── .env.example         # Environment variable template
└── README.md
```

## 🌐 Deployment

- **Frontend** → [Vercel](https://vercel.com) (connect GitHub repo, set root to `portfolio-web`)
- **Backend** → [Render](https://render.com) (set start command: `pip install -r requirements.txt && python api.py`)

## 📬 Contact

- **Email:** vikashsharma190@gmail.com
- **LinkedIn:** [linkedin.com/in/vikashvishwakarma190](https://www.linkedin.com/in/vikashvishwakarma190/)
- **GitHub:** [github.com/vikash-sharma-190](https://github.com/vikash-sharma-190)
