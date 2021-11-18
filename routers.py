from rest_framework import routers
from backend.viewsets import PhoneNumberViewSet
router = routers.SimpleRouter()
router.register(r'phonenumbers', PhoneNumberViewSet, basename='phonenumbers')