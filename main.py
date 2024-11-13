import cv2
import numpy as np


def calculate_average_spot_size(image_path):
    image = cv2.imread(image_path)
    if image is None:
        print("Error: Could not read the image.")
        return

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY_INV)
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    areas = [cv2.contourArea(contour) for contour in contours]
    if areas:
        average_size = sum(areas) / len(areas)
        print(f"Average spot size: {average_size}")
    else:
        print("No spots detected in the image")


if __name__ == "__main__":
    calculate_average_spot_size("input.jpg")
