from rest_framework import serializers
from .models import *


#Income Serialiser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
#Income Serialiser
class PersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnel
        fields = '__all__'       

#Income Serialiser
class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'


#Income Serialiser
class ExpenditureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenditure
        fields = '__all__'
        
        
#Income Serialiser
class ConsumableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumable
        fields = '__all__'
        
#Income Serialiser
class HarvestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Harvest
        fields = '__all__'
        
#Income Serialiser
class AdvanceFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvanceForm
        fields = '__all__'
        
#Income Serialiser
class PayrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payroll
        fields = '__all__'
        
#Income Serialiser
class RequisitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requisition
        fields = '__all__'
        
#Income Serialiser
class ToolBinCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToolBinCard
        fields = '__all__'