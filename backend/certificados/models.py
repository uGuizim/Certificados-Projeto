from django.db import models
from django.utils import timezone

class Participante(models.Model):
    nome = models.CharField(max_length=255)
    cpf = models.CharField(max_length=14, unique=True)

class Treinamento(models.Model):
    titulo = models.CharField(max_length=255)
    carga_horaria = models.IntegerField()
    conteudo = models.TextField()
    data = models.DateField(default=timezone.now)

class Certificado(models.Model):
    participante = models.ForeignKey(Participante, on_delete=models.CASCADE)
    treinamento = models.ForeignKey(Treinamento, on_delete=models.CASCADE)
    data_emissao = models.DateTimeField(default=timezone.now)

