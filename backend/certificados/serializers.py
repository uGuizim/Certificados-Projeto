from rest_framework import serializers
from .models import Participante, Treinamento, Certificado

class ParticipanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participante
        fields = '__all__'

class TreinamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Treinamento
        fields = '__all__'

class CertificadoSerializer(serializers.ModelSerializer):
    participante_nome = serializers.CharField(source='participante.nome', read_only=True)
    treinamento_titulo = serializers.CharField(source='treinamento.titulo', read_only=True)
    carga_horaria = serializers.IntegerField(source='treinamento.carga_horaria', read_only=True)

    class Meta:
        model = Certificado
        fields = '__all__'
        extra_fields = ['participante_nome', 'treinamento_titulo', 'carga_horaria']
