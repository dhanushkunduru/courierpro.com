from django.urls import path

from . import views

urlpatterns = [

    path(
        "couriers/",
        views.get_couriers,
    ),

    path(
        "couriers/add/",
        views.add_courier,
    ),

    path(
        "couriers/<str:tracking_number>/",
        views.track_courier,
    ),

    path(
        "couriers/update/<int:pk>/",
        views.update_courier,
    ),

    path(
        "couriers/delete/<int:pk>/",
        views.delete_courier,
    ),
]