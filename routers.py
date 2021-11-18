from rest_framework import routers
from backend.viewsets import PhoneNumberViewSet
router = routers.SimpleRouter()
router.register(r'phonenumber', PhoneNumberViewSet, basename='menu')