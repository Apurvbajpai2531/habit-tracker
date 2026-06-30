# ✅ Habit & Mood Tracker

A modern, lightweight full-stack productivity system designed to help users build consistent habits, track daily moods, and understand behavioral patterns through data visualization.

The application enables users to log daily activities such as workouts, study sessions, hydration, reading, and meditation, along with a mood rating. Over time, it generates insights that help users identify correlations between habits and emotional well-being, encouraging healthier routines and improved productivity.

---

## 🚀 Key Features

- 📅 Daily habit tracking (customizable habits)
- 🙂 Mood logging with ratings and notes
- 📊 Visual analytics for habit consistency and mood trends
- 🔗 Correlation insights between habits and mood patterns
- 🧠 Personal productivity improvement insights
- 📈 Historical data tracking with charts and summaries
- 👤 Multi-user support (future-ready architecture)

---

## 🧱 Technology Stack

| Layer              | Technology                                  |
|-------------------|---------------------------------------------|
| **Frontend**       | Streamlit (Python-based UI)                 |
| **Backend/API**    | Flask, Flask-SQLAlchemy, Gunicorn          |
| **Database**       | PostgreSQL                                  |
| **Containerization** | Docker, Docker Compose                   |
| **CI/CD**          | GitHub Actions                              |

---

## 🏗️ System Architecture

- Streamlit frontend communicates with Flask backend via REST APIs
- Flask backend handles business logic and data processing
- PostgreSQL stores users, habits, and mood records
- Docker Compose manages all services in isolated containers

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/Habit-Tracker.git
cd Habit-Tracker