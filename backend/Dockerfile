FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN apt-get update && \
    apt-get install -y libgl1 libglib2.0-0 && \
    pip install -r requirements.txt && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY . .

EXPOSE 8000

CMD ["fastapi", "run"]