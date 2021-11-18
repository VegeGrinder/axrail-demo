from rest_framework import viewsets
from backend.models import PhoneNumber
from backend.serializers import PhoneNumberSerializer

class PhoneNumberViewSet(viewsets.ModelViewSet):
    serializer_class = PhoneNumberSerializer

    def get_queryset(self):
        return PhoneNumber.objects.all()