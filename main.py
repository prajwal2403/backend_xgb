from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

app = FastAPI()

# Ensure that the 'static' folder is correctly mounted
app.mount("/static", StaticFiles(directory="static"), name="static")

# Ensure the 'bootstrap' folder is the template directory
templates = Jinja2Templates(directory="bootstrap")

@app.get("/", response_class=HTMLResponse)
async def read_homepage(request: Request):
    return templates.TemplateResponse("homepage.html", {"request": request})

# Other routes...

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
