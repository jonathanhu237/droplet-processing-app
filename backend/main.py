import cv2
import numpy as np
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def calculate_average_spot_size(image_data):
    # 将上传的数据转换为图像
    np_img = np.frombuffer(image_data, np.uint8)
    image = cv2.imdecode(np_img, cv2.IMREAD_GRAYSCALE)

    # 二值化图像
    _, binary = cv2.threshold(image, 127, 255, cv2.THRESH_BINARY_INV)
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # 计算斑点的平均面积
    areas = [cv2.contourArea(contour) for contour in contours]
    average_size = sum(areas) / len(areas) if areas else 0

    return average_size


@app.post("/analyze-spots/")
async def upload_image(file: UploadFile):
    # 读取上传的图像数据
    image_data = await file.read()

    # 计算斑点的平均面积
    average_size = calculate_average_spot_size(image_data)

    # 返回结果
    return {"average_spot_size": average_size}
