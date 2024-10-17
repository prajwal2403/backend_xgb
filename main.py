from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import xgboost as xgb
import numpy as np
import pickle
import uvicorn

# Initialize FastAPI app
app = FastAPI(title="XGBoost Classifier API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Create Pydantic model for input data validation
class PredictionInput(BaseModel):
    features: list[float]

class PredictionOutput(BaseModel):
    prediction: int
    probability: float

# Initialize model (you'll need to train and save it first)
model = None

@app.on_event("startup")
async def load_model():
    global model
    try:
        # Load your trained model
        # Replace 'model.pkl' with your actual model file
        with open('model.pkl', 'rb') as f:
            model = pickle.load(f)
    except Exception as e:
        print(f"Error loading model: {e}")
        model = None

@app.get("/")
async def root():
    return {"message": "XGBoost Classifier API"}

@app.post("/predict", response_model=PredictionOutput)
async def predict(input_data: PredictionInput):
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded")
    
    try:
        # Convert input features to numpy array
        features = np.array(input_data.features).reshape(1, -1)

        # Make prediction
        pred_proba = model.predict_proba(features)
        prediction = model.predict(features)[0]
        probability = float(pred_proba[0][1])  # Probability of positive class
        
        return PredictionOutput(
            prediction=int(prediction),
            probability=probability
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)