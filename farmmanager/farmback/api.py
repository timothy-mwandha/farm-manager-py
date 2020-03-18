from .models import *
from rest_framework import viewsets, permissions
from .serializers import *

#User Viewset
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

#Personnel Viewset
class PersonnelViewset(viewsets.ModelViewSet):
    queryset = Personnel.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PersonnelSerializer

#Income Viewset
class IncomeViewset(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = IncomeSerializer
    
#Expenditure Viewset
class ExpenditureViewset(viewsets.ModelViewSet):
    queryset = Expenditure.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExpenditureSerializer
    
#Consumable Viewset
class ConsumableViewset(viewsets.ModelViewSet):
    queryset = Consumable.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ConsumableSerializer

#Harvest Viewset
class HarvestViewset(viewsets.ModelViewSet):
    queryset = Harvest.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = HarvestSerializer

#AdvanceForm Viewset
class AdvanceFormViewset(viewsets.ModelViewSet):
    queryset = AdvanceForm.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdvanceFormSerializer
    
#Payroll Viewset
class PayrollViewset(viewsets.ModelViewSet):
    queryset = Payroll.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PayrollSerializer
    
#Requisition Viewset
class RequisitionViewset(viewsets.ModelViewSet):
    queryset = Requisition.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = RequisitionSerializer
    
#ToolBinCard Viewset
class ToolBinCardViewset(viewsets.ModelViewSet):
    queryset = ToolBinCard.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToolBinCardSerializer
