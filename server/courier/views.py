from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Courier
from .serializers import CourierSerializer


# Get All Couriers
@api_view(["GET"])
def get_couriers(request):
    couriers = Courier.objects.all()
    serializer = CourierSerializer(couriers, many=True)
    return Response(serializer.data)


# Track Courier
@api_view(["GET"])
def track_courier(request, tracking_number):
    try:
        courier = Courier.objects.get(tracking_number=tracking_number)
        serializer = CourierSerializer(courier)
        return Response(serializer.data)

    except Courier.DoesNotExist:
        return Response(
            {"message": "Tracking Number Not Found"},
            status=status.HTTP_404_NOT_FOUND,
        )


# Add Courier
@api_view(["POST"])
def add_courier(request):
    serializer = CourierSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Update Courier
@api_view(["PUT"])
def update_courier(request, pk):
    try:
        courier = Courier.objects.get(id=pk)

    except Courier.DoesNotExist:
        return Response(
            {"message": "Courier Not Found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    serializer = CourierSerializer(
        courier,
        data=request.data,
    )

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)


# Delete Courier
@api_view(["DELETE"])
def delete_courier(request, pk):
    try:
        courier = Courier.objects.get(id=pk)

    except Courier.DoesNotExist:
        return Response(
            {"message": "Courier Not Found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    courier.delete()

    return Response(
        {"message": "Courier Deleted Successfully"},
        status=status.HTTP_200_OK,
    )