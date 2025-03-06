from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ParticipanteViewSet, TreinamentoViewSet, CertificadoViewSet

router = DefaultRouter()
router.register(r'participantes', ParticipanteViewSet)
router.register(r'treinamentos', TreinamentoViewSet)
router.register(r'certificados', CertificadoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
