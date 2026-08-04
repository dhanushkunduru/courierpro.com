from django.contrib import admin
from .models import Courier


@admin.register(Courier)
class CourierAdmin(admin.ModelAdmin):

    list_display = (
        "tracking_number",
        "customer_name",
        "courier_company",
        "status",
        "current_location",
        "destination",
        "created_at",
    )

    search_fields = (
        "tracking_number",
        "customer_name",
        "phone",
    )

    list_filter = (
        "status",
        "courier_company",
    )

    ordering = (
        "-created_at",
    )