from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

# Serve static files (CSS, JS, images) from the 'static' directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Specify the directory where your HTML templates are stored (using 'bootstrap')
templates = Jinja2Templates(directory="bootstrap")

@app.get("/", response_class=HTMLResponse)
async def read_homepage(request: Request):
    # Render the 'homepage.html' template from the 'bootstrap' folder
    return templates.TemplateResponse("homepage.html", {"request": request})

@app.get("/quiz", response_class=HTMLResponse)
async def read_quiz_page(request: Request):
    # Render the 'quiz.html' template from the 'bootstrap' folder
    return templates.TemplateResponse("quiz.html", {"request": request})

@app.get("/main_quiz", response_class=HTMLResponse)
async def read_main_quiz_page(request: Request):
    # Render the 'main_quiz.html' template from the 'bootstrap' folder
    return templates.TemplateResponse("main_quiz.html", {"request": request})

@app.get("/sign_in", response_class=HTMLResponse)
async def read_sign_in_page(request: Request):
    # Render the 'sign_in.html' template from the 'bootstrap' folder
    return templates.TemplateResponse("sign_in.html", {"request": request})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
