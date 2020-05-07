from rest_framework import routers
from .api import *

router = routers.DefaultRouter()
router.register('api/user', UserViewset, 'farmback')
router.register('api/personnel', PersonnelViewset, 'farmback')
router.register('api/income', IncomeViewset, 'farmback')
router.register('api/expenditure', ExpenditureViewset, 'farmback')
router.register('api/consumable', ConsumableViewset, 'farmback')
router.register('api/newconsumable', NewConsumableViewset, 'farmback')
router.register('api/harvest', HarvestViewset, 'farmback')
router.register('api/advance', AdvanceFormViewset, 'farmback')
router.register('api/payroll', PayrollViewset, 'farmback')
router.register('api/requisition', RequisitionViewset, 'farmback')
router.register('api/toolbincard', ToolBinCardViewset, 'farmback')
router.register('api/tool', ToolViewset, 'farmback')


urlpatterns = router.urls
