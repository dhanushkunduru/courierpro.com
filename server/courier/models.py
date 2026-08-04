from django.db import models


class Courier(models.Model):

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Picked Up", "Picked Up"),
        ("In Transit", "In Transit"),
        ("Out For Delivery", "Out For Delivery"),
        ("Delivered", "Delivered"),
    ]

    tracking_number = models.CharField(
        max_length=30,
        unique=True
    )

    customer_name = models.CharField(
        max_length=150
    )

    phone = models.CharField(
        max_length=15
    )

    courier_company = models.CharField(
        max_length=100
    )

    origin = models.CharField(
        max_length=150
    )

    destination = models.CharField(
        max_length=150
    )

    current_location = models.CharField(
        max_length=150
    )

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    description = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.tracking_number} - {self.customer_name}"