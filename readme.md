<div align="center">
	<img src="static/images/CareerQuest.svg" alt="CareerQuest Logo" width="200"/>
	<h1>CareerQuest: AI-Powered Career Recommendation Platform</h1>
	<p>
		<b>Discover your ideal tech career path with personality and aptitude quizzes powered by Machine Learning!</b>
	</p>
</div>

---

## 🚀 Overview

CareerQuest is an interactive web application that helps users find their best-fit career in tech (Software Developer, AI/ML Engineer, Frontend/Backend Developer, etc.) by analyzing their personality traits and aptitude scores using advanced machine learning models (XGBoost). The platform features:

- **Engaging Quizzes:** Assess your Big Five personality traits and core aptitudes.
- **AI-Powered Recommendations:** Get personalized career suggestions based on your responses.
- **Modern UI:** Responsive design with custom styles and illustrations.
- **Fast & Scalable Backend:** Built with Flask (REST API) and FastAPI (alternative), leveraging scikit-learn and XGBoost.

---

## 🧩 Features

- Personality & Aptitude Quiz (Big Five + Aptitude)
- Real-time career prediction using trained ML models
- Beautiful homepage, quiz, and result pages
- RESTful API for frontend-backend communication
- Easily extensible for new careers or quiz types

---

## 🏗️ Project Structure

```
backend_xgb/
├── app.py                # Flask backend (main API)
├── main.py               # FastAPI backend (alternative)
├── requirements.txt      # Python dependencies
├── package.json          # Frontend dependencies (React, Vite)
├── static/               # CSS, JS, images
├── templates/            # HTML templates
├── career_aptitude_dataset.csv  # Training data
├── career_dataset.csv           # Additional data
├── xg_boost, transformer, encoder # ML model files (pickled)
└── ...
```

---

## ⚡ Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/prajwal2403/backend_xgb.git
cd backend_xgb
```

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. (Optional) Install Frontend Dependencies

```bash
npm install
```

### 4. Train & Save ML Models

> **Note:** Ensure `xg_boost`, `transformer`, and `encoder` files are present. If not, train the model using your data and save them as pickles.

### 5. Run the Flask Backend

```bash
python app.py
```

### 6. Access the App

Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 🧠 How It Works

1. **User takes the quiz** (personality + aptitude).
2. **Frontend sends answers** to `/send_array` API endpoint.
3. **Backend loads ML model** (`xg_boost`), scaler, and encoder.
4. **Prediction is made** and career suggestion is returned.
5. **Result is displayed** interactively on the UI.

---

## 🛠️ Tech Stack

- **Backend:** Flask, FastAPI, scikit-learn, XGBoost, Pandas, Numpy
- **Frontend:** React, Vite, HTML/CSS/JS
- **Deployment:** Vercel (see `vercel.json`)

---

## 📁 Datasets

- `career_aptitude_dataset.csv`: Personality & aptitude scores mapped to careers
- `career_dataset.csv`: Additional career mapping data

---

## 🎨 UI Screenshots

<div align="center">
  <h3>🏠 Homepage</h3>
  <img src="static/images/Screenshot 2025-08-25 192109.png" alt="Homepage Screenshot" width="600"/>
  
  <h3>📝 Quiz Interface</h3>
  <img src="static/images/Screenshot 2025-08-25 192124.png" alt="Quiz Screenshot" width="600"/>
  
  <h3>🎯 Results Page</h3>
  <img src="static/images/Screenshot 2025-08-25 192137.png" alt="Results Screenshot" width="600"/>
</div>

<br>



---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome! Feel free to fork and improve the project.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

- **Prajwal2403** ([GitHub](https://github.com/prajwal2403))

---

## 💡 Inspiration

CareerQuest was built to help students and professionals discover their ideal tech career using data-driven insights and modern web technologies.

---

## 📬 Contact

For questions or collaborations, open an issue or reach out via GitHub.
